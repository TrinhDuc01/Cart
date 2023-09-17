import React, { memo, useContext } from 'react'
import { Context } from '../Context/ContextFirst'
import ReactStars from 'react-rating-stars-component'
function DetailProduct() {
    const { detail, handleCart } = useContext(Context);
    console.log('rerender')
    function isEmpty(obj) {
        for (const prop in obj) {
            if (Object.hasOwn(obj, prop)) {
                return false;
            }
        }
        return true;
    }
    return (
        <>
            {isEmpty(detail) ? '' :
            <div className='row m-3 m-md-5 shadow p-3 mb-5 bg-body rounded'>
                <div className='col-md-4'>
                    <div id="carouselExampleControls" className="carousel slide carousel-dark " data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {detail.images.map((ele => (
                                <div key={ele} className={ele === detail.images[0] ? "carousel-item active" : "carousel-item"} >
                                    <img src={ele} style={{ maxHeight: 300, minHeight: 300 }} className="d-block w-100" alt="..." />
                                </div>
                            )))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-7 mt-2'>
                    <h5 className="card-title fw-bold fs-2">{detail.title}</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={detail.rating}
                        isHalf={true}
                        edit={false}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                    />
                    <p className="card-text fs-5">{detail.description}</p>
                    <p className="card-text fs-4">Brand: {detail.brand}</p>
                    <p className="card-text ">Category: {detail.category}</p>
                    <p className="card-text">Stock: {detail.stock}</p>
                    <p className="card-text fw-bold fs-1">Price: {detail.price}$</p>
                    <button onClick={() => handleCart(detail.id)} className="col-5 btn btn-primary ">Add to cart</button>
                </div>
            </div >
            }
        </>
    )
}

export default memo(DetailProduct)