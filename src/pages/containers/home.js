import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../Categories/Components/categories';
import Related from '../components/related';
import ModalContainer from '../../widget/containers/modal';
import Modal from '../../widget/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
// import Media from '../../playlist/components/media';
// import data from '../../api.json';


class Home extends Component {

    state = {
        modalVisible: false,
        video: {
            autoPlay : true, 
            title : "Video Dafault para pruebas",
            src : "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        },
    }
    
    handleOpenModal = (event) => {
        // console.log("El event recibido es ", event);
        // console.log("El video recibido es ", event.src);
        this.setState({
            modalVisible: true,
            video : event,
        })
        
    }

    handleCloseModal = (event) => {
        // console.log("Click pinchado");
        this.setState(
            {modalVisible : false,}
        )
    }


    render() {
        var misestilos = {
            color : '#FFFFFF',
        }
        // console.log('El data del home');
        // console.log(this.props.data);
        // console.log('Lo que yo envio');
        // console.log(this.props.data.categories);



        return (

            <HandleError>
                <HomeLayout> 
                    <Related>
                        {/* <button onClick={this.handleOpenModal} >Abrir Un Modal</button> */}
                    </Related>
                    
                    <VideoPlayer
                        autoPlay = {false} 
                        // autoplay = {this.state.video.autoplay} 
                        title = {this.state.video.title}
                        src = {this.state.video.src}
                    />
                    <Categories 
                    categories = {this.props.data.categories}
                    handleOpenModal = {this.handleOpenModal}
                   

                    />
                    { 
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal
                                handleClick = {this.handleCloseModal}>
                                <h1>Esto es un portal</h1>
                                
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>

            </HandleError>
            )
    }
}

export default Home;