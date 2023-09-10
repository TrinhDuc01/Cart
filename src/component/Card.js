import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";

export default function Card({ info }) {
    return (
        <div className="card col-3 px-5 py-3 m-5 d-flex justify-content-center">
            <img src={info.thumbnail} style={{ maxHeight: 200, minHeight: 200 }} className="img-responsive   card-img-top img-thumbnail" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{info.title}</h5>
                <ReactStars
                    count={5}
                    size={24}
                    value={1}
                    isHalf={true}
                    edit={false}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                />
                <p className="card-text">{info.description}</p>
                <Link to="#" className="btn btn-primary ">Add to cart</Link>
            </div>
        </div>
    )
}
