import React, { useContext } from 'react'
import { Context } from '../Context/ContextFirst'

export default function Cart() {
    const { cart, total } = useContext(Context)
    console.log('cart')
    return (
        <div>
            {cart.length === 0 ?
                <div className='text-center fs-1 font-monospace'>
                    Cart Empty
                </div>
                : cart.map((ele) => (
                    <div className="card">
                        <div className="card-header">
                            <div className="card-body">
                                <h5 className="card-title">{ele.title}</h5>
                                <p className="card-text">{ele.description}</p>
                                <p className="card-text fw-bold">Price: {ele.price}$</p>
                                <p className="card-text">{ele.quantity}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className='text-center fs-1 font-monospace'>
                {cart.length !== 0 && `Total: ${total}$`}
            </div>
        </div>
    )
}
