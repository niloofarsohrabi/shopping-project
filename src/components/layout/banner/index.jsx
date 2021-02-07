import React from 'react'
import {bannerData} from './bannerData.js'
import bannerStyle from './bannerStyle.module.scss'

export const Banner = () => {
    return (
        <div className={bannerStyle.banner}>
            {bannerData.map((item,index)=>{
                return(
                    <img key={index} src={item.imageAddress} alt="Banner Img"/>
                )
            })}
        </div>
    )
}
