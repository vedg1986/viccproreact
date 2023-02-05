import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



function Card({ title, imageSource, price, description }) {
    return (
        <div className="card">
            <div className="card text-center">
                <img className='picture' src={imageSource} alt="" />
                <div className="card-body">
                    <h4 className="card-title bg-secondary" >{title}</h4>
                    <p className="text">{price}</p>
                    <Link to="/" className="btn btn-outline justify-content-center bg-danger">
                        Go to Shop
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Card