import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchUserById,decreseAction } from '../../../stateManagment/action'
import showProductStyle from './showProductStyle.module.scss'

export const ShowProduct = () => {
    const dispatch = useDispatch();

    const handleBtnMenClothing = () => {
        console.log("click")
        dispatch(fetchUserById(123).then(res => {
            console.log(res);
        }))
    }

    return (
        <div className={showProductStyle.productBox}>
            <p className={showProductStyle.firstTitleProduct}>Our Products</p>
            <p className={showProductStyle.secondTitleProduct}>Add our products to weekly line up</p>
            <div className={showProductStyle.buttons}>
                <button onClick={handleBtnMenClothing}>Men Clothing</button>
                <button>Women Clothing</button>
                <button>Jewelery</button>
            </div>
        </div>
    )
}
