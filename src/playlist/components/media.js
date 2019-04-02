// import React from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';
// import './estilos.css';

// class Media extends React.Component {
class Media extends Component {

	handleClick = () =>{
		// console.log("olakease", this.props);
		this.props.handleClick(this.props)
	}
                            
	

	render() {
		return (
			<div className="Media" onClick={this.handleClick} >
				<div className="Media-cover">
					<img
						src={this.props.cover}
						alt={this.props.title}
						width={260}
						height={160}
						className="Media-image"
					/>
					<h3 className="Media-title">{this.props.title}</h3>
					<p className="Media-author">{this.props.author}</p>
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
