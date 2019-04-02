// import React from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';
import './estilos.css';

// class Media extends React.Component {
class Media extends Component {
                                // // Constructor in the old way in Emacscript 6
                                // constructor(props){
                                //     super(props);
                                //     // Linking the DOM event with my js class (this)
                                //     this.handleClick = this.handleClick.bind(this);
                                // }

                                // // Setting up a function
                                // handleClick(event) {
                                //     // console.log(event);
                                //     console.log(this.props.title);
                                // }

                    // If I want to use states, I have to use the constructor again if your using EmacSript 6, using constructor and arrowfunction with the setState function
                    // constructor(props){
                    //     super(props);
                    //     this.state = {
                    //         author: props.author
                    //     }
                    // }
	// But if you want to use EmacScrip 7 you can simple do this
	state = {
		author: 'sjaces'
	};

	// Using Emacscript 7
	handleClick = (event) => {
		console.log(this.props.title);
		if (this.state.author == 'sjaces') {
			this.setState({
				author: 'Pepito'
			});
		} else {
			this.setState({
				author: 'sjaces'
			});
		}
	};

	render() {
		return (
			<div className="Media" onClick={this.handleClick}>
				<div className="Media-cover">
					<img
						src={this.props.image}
						alt={this.props.title}
						width={260}
						height={160}
						className="Media-image"
					/>
					<h3 className="Media-title">{this.props.title}</h3>
					<p className="Media-author">{this.state.author}</p>
					<p>¡Testing some things!</p>
				</div>
			</div>
		);
	}
}

// PropTypes let me validate the typeof the props
Media.propTypes = {
	author: PropTypes.string,
	image: PropTypes.string,
	title: PropTypes.string
};

export default Media;
