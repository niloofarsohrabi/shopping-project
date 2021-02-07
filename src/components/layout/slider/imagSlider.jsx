import React, { useState } from 'react'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import sliderStyle from './sliderStyle.module.scss'

export const ImageSlider = ({ sliders }) => {

    const [current, setCurent] = useState(0);
    const lenght = sliders.length;
    if (!Array.isArray(sliders) || sliders.lenght <= 0) {
        return null;
    }
    const prevButton = () => {
        setCurent(current === 0 ? lenght - 1 : current - 1);
    }
    const nextButton = () => {
      
        setCurent(current === lenght - 1 ? 0 : current + 1);
    }

    return (
        <>

            <div className={sliderStyle.slides}>
                {sliders.map((item, index) => {
                    return (
                        <div key={index} className={index === current ? `${sliderStyle.slideActive}` : `${sliderStyle.slide}`}>
                            {index === current && (
                                <div>
                                    <div className={sliderStyle.sliderImage}>
                                        <img src={item.imageAddress} alt="slider" />
                                    </div>
                                    <div className={sliderStyle.leftArrow} onClick={() => prevButton()}>
                                        <ArrowBackIos style={{ fontSize: 30 }} />
                                    </div>
                                    <div className={sliderStyle.rightArrow} onClick={() => nextButton()}>
                                        <ArrowForwardIos style={{ fontSize: 30 }} />
                                    </div>
                                    <p className={sliderStyle.messgaeOnSliderOne}>{item.textOnSliderOne}</p>
                                    <h4 className={sliderStyle.messgaeOnSliderTwo}>{item.textOnSliderTwo}</h4>
                                    <h1 className={sliderStyle.messgaeOnSliderThree}>{item.textOnSliderThree}</h1>
                                    <button className={sliderStyle.buttonSlider}>SHOP NOW</button>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>



        </>
    )
}
