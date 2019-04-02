import React, { Component } from 'react';
import './video.css';

class Video extends Component {
    togglePlay() {
        if(!this.props.pause){
            this.video.play();
        }else{
            this.video.pause();
        }
    }
    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.pausa !== this.props.pause){
    //         this.togglePlay();
    //     }
    // }
    componentDidUpdate(prevProps) {
        if(prevProps.pausa !== this.props.pause){
            this.togglePlay();
        }
    }
    setRef = element => {
        this.video = element;
    }
    render(){
        const {
            handleLoadedMetadata,
            onTimeUpdate  
        } = this.props;

        // console.log("Superautoplay ", this.props.autoPlay)

        return (
            <div className="Video">
                <video
                        autoPlay = {this.props.autoPlay}
                        src ={this.props.src}
                        ref = {this.setRef}
                        onLoadedMetadata = {this.props.handleLoadedMetadata}
                        onTimeUpdate = { this.props.onTimeUpdate }
                        onSeeking = {this.props.handleSeeking}
                        onSeeked = {this.props.handleSeeked}
                        volume = {this.props.volume}
                />
            </div>
        )
    }
}

export default Video