import React, { useContext } from 'react'
import Card from './Card';
import { Context } from '../Context/ContextFirst';


export default function ListProduct() {
    const { listProduct, handleCart, handleDetailProduct } = useContext(Context)
    // console.log(useContext(Context))
    console.log('list')

    return (
        <div className='container'>
            <div className='row justify-content-around'>{listProduct.map((element) => (
                <Card key={element.id} info={element} handleCart={handleCart} handleDetailProduct={handleDetailProduct} />
            ))}</div>
        </div>
    )
}
