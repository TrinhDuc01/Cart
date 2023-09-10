import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function ListProduct() {
    const [ListProduct, setListProduct] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(data => data.json())
            .then(data => setListProduct(data.products))
    }, [])

    return (
        <div className='row justify-content-around'>{ListProduct.map((element) => (
            <Card key={element.id} info={element} />
        ))}</div>
    )
}
