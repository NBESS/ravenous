import React, { Component } from 'react';
import './Business.css';

class Business extends Component {

    render() {

        const { ImageSrc, name, address, city, state, zipCode, category, rating, reviewCount } = this.props.business;
        // console.log(ImageSrc)
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={this.props.src} alt={name} />
                </div>
                <h2>{name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{address}</p>
                        <p>{city}</p>
                        <p>{state} {zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{category}</h3>
                        <h3 className="rating">{rating} stars</h3>
                        <p>{reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Business;