import React, { createContext, useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
const Context = createContext();

const toastF = (text) => {
    return toast.success(text, {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
}

function ContextFirst({ children }) {
    const [listProduct, setListProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [detail, setDetail] = useState({});

    //call api get data
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(data => data.json())
            .then(data => setListProduct(data.products))
    }, [])

    //check product isset on cart ?
    const checkIsset = (id) => {
        let indexOf = cart.findIndex(ele => ele.id === id);
        return indexOf;
    }

    //add to Cart
    const handleCart = (id) => {
        //kiểm tra xem sản phẩm có trong giỏ hàng chưa nếu chưa thì thêm mới nó có rồi thì update số lượng
        if (checkIsset(id) >= 0) {
            const updateCart = [...cart];
            updateCart[checkIsset(id)].quantity += 1;
            setCart(updateCart);
            setTotal(prev => prev + updateCart[checkIsset(id)].price);
            toastF("Add to cart success!")
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
            // console.log(productCart)
            setCart(prev => [
                ...prev,
                productCart
            ])
            setTotal(prev => prev + find[0].price)
            toastF("Add to cart success!")
        }

    }

    //xem chi tiết sản phẩm
    const handleDetailProduct = (id) => {
        const find = listProduct.filter((ele) => {
            return ele.id === id
        })
        setDetail(find[0]);
    }

    //Set cart sau khi đặt hàng
    const handleOrder = () => {
        setCart([]);
        setTotal(0);
        toastF("Order complete!")
    }

    //liệt kê props chuẩn bị truyền
    const value = {
        handleCart,
        listProduct,
        cart,
        setCart,
        total,
        setTotal,
        detail,
        handleDetailProduct,
        handleOrder
    }
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextFirst }
