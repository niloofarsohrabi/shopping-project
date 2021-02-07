import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Header } from '../../layout/header'
import { NavBar } from '../../common/navBar';
import { ImageSlider } from '../../layout/slider/imagSlider';
import { sliderData } from '../../layout/slider/sliderData'
import { Banner } from '../../layout/banner';
import { ShowProduct } from '../../layout/showProductOnMainPage';
import {increaseAction} from '../../../stateManagment/action'
import { Sample } from '../../../sample';

export const MainPage = () => {

    const [shouldScrollNav, setShouldScrollNav] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        // return (()=>{
        //     window.removeEventListener();
        //  })
     
    }, []);

    const handleScroll = () => {
        let mountOfScroll = document.documentElement.scrollTop;
        if (mountOfScroll > 120) {
            setShouldScrollNav(true);
        } else {
            setShouldScrollNav(false);
        }
    }

    return (
        <>
            <Header >
                <NavBar shouldScrollNav={shouldScrollNav} />
            </Header>
            <ImageSlider sliders={sliderData} />
            <Banner />
            <ShowProduct />
            <Sample/>
        </>
    )
}
