import React, { createContext, useEffect, useState } from 'react'
const Context = createContext();

function ContextFirst({ children }) {
    const [listProduct, setListProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [detail, setDetail] = useState({});
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(data => data.json())
            .then(data => setListProduct(data.products))
    }, [])

    const checkIsset = (id) => {
        let indexOf = cart.findIndex(ele => ele.id === id);
        return indexOf;
    }

    const handleCart = (id) => {
        if (checkIsset(id) >= 0) {
            const updateCart = [...cart];
            updateCart[checkIsset(id)].quantity += 1;
            setCart(updateCart);
            setTotal(prev => prev + updateCart[checkIsset(id)].price);
        }
        else {
            const find = listProduct.filter((ele) => {
                return ele.id === id
            })
            // console.log(find[0])
            const productCart = {
                ...find[0],
                quantity: 1
            }
            console.log(productCart)
            setCart(prev => [
                ...prev,
                productCart
            ])
            setTotal(prev => prev + find[0].price)
        }

    }

    const handleDetailProduct = (id) => {
        const find = listProduct.filter((ele) => {
            return ele.id === id
        })
        setDetail(find[0]);
    }

    const value = {
        handleCart,
        listProduct,
        cart,
        total,
        detail,
        handleDetailProduct
    }
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextFirst }
