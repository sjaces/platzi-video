import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component{

    state = {
        pause : false,
        duration : 0,
        currentTime: 0,
        loading: false,
        volume: 0.2,
        lastVolume: 0.2,
    };
        
    handleLoadedMetadata = (event) => {
        this.video = event.target;
        this.setState({
            duration: this.video.duration,
        }) 
        
    }
    
    handleTimeUpdate = (event) => {
        this.video = event.target;
        this.setState({
            currentTime : this.video.currentTime,
        })
    }
    
    componentDidMount(event){
        // console.log("Cuando monto autoplay está ", (this.props.autoplay));
        // const myPause = !(this.props.autoplay);
        // console.log("luego la pausa está ", myPause);
        this.setState({
            pause : (!this.props.autoPlay),
        })
        // console.log("Cuando monto la pausa está ", this.state);
    }

    togglePlay = () => {
        this.setState({
            pause : !this.state.pause
        });

    }
    handleProgressChange = event =>{
        // event.target.value
        this.video.currentTime = event.target.value;
    }

    handleSeeking = event =>{
        this.setState({
            loading: true,
        });

    }
    
    handleSeeked = event => {
        this.setState({
            loading: false,
        });

    }

    handleVolumeChange = event =>{
        console.log("volumen ", event.target.value)
        this.video.volume = event.target.value;
        this.setState({
            volume: this.video.volume,
            lastVolume: this.video.volume,
        })
    }
    handleToggleMute = event => {
        if(this.state.volume !== 0){
            this.setState({
                volume: 0,
                lastVolume: this.video.volume,
            });
            this.video.volume=0;
        }else{
            this.video.volume= this.state.lastVolume;
            this.setState({
                volume: this.state.lastVolume,
                lastVolume: this.state.volume,
            });
        }
        console.log("volume toglee mute", this.state.volume);
    }

    handleFullScreenClick = event =>{
        if(!document.webkitIsFullScreen){
            this.player.webkitRequestFullScreen();
        }else{
            document.webkitCancelFullScreen();
        }
        if(!document.mozIsFullScreen){
            this.player.mozRequestFullScreen();
        }else{
            document.mozCancelFullScreen();
        }
    }

    setRef = element => {
        this.player = element;
    }

    render(){
        // console.log("El autoplayyyyyy ",this.props.autoPlay);
        // console.log("La Pausa  ",this.state.pause);
        return (
            <VideoPlayerLayout 
                setRef = {this.setRef}
            >
                <Title title={this.props.title}/>
                <Controls>
                    <PlayPause
                        pause = {this.state.pause}
                        handleClick = {this.togglePlay}
                    />
                    <ProgressBar
                    duration={this.state.duration}
                    value={this.state.currentTime}
                    handleProgressChange={this.handleProgressChange}
                    />
                    <Timer 
                        duration = {this.state.duration}
                        currentTime = {this.state.currentTime}
                        />
                    <Volume 
                        handleVolumeClick={this.handleToggleMute}
                        handleVolumeChange={this.handleVolumeChange}
                        value = {this.state.volume}
                    />
                    <FullScreen
                        handleFullScreenClick={this.handleFullScreenClick}
                    />
                </Controls>
                <Spinner 
                    active = {this.state.loading}
                />
                <Video
                    // autoplay = {false}
                    autoPlay = {this.props.autoPlay}
                    pause = {this.state.pause}
                    handleLoadedMetadata = {this.handleLoadedMetadata}
                    onTimeUpdate = {this.handleTimeUpdate}
                    handleSeeking = {this.handleSeeking}
                    handleSeeked = {this.handleSeeked}
                    volume={this.state.volume}
                    src = {this.props.src}
                />
            </VideoPlayerLayout>
        )
    }
}
export default VideoPlayer
