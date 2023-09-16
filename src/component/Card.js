import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

export default function Card(props) {
    // console.log('Card')
    return (
        <div className="card border-0 col-10 col-md-8 col-lg-3 col m-4 p-3 shadow mb-5 bg-body rounded">
            <img src={props.info.thumbnail} style={{ maxHeight: 200, minHeight: 200 }} className="img-responsive card-img" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.info.title}</h5>
                <ReactStars
                    count={5}
                    size={24}
                    value={props.info.rating}
                    isHalf={true}
                    edit={false}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                />
                <p className="card-text">{props.info.description.slice(0, 20) + (props.info.description.length > 20 ? "..." : "")}</p>
                <p className="card-text fw-bold fs-3">{props.info.price}$</p>
                <div className='container-f'>
                    <div className='row justify-content-around'>
                        <button onClick={() => props.handleCart(props.info.id)} className="col-5 btn btn-primary ">Add to cart</button>
                        <Link to='/DetailProduct' onClick={() => props.handleDetailProduct(props.info.id)} className="col-6 btn btn-primary ">Detail Product</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
