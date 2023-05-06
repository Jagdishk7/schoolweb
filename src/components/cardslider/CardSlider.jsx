import React from 'react'
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCard from '../Cards/ImageCard';
import './CardSlider.css'

const CardSlider = ({heading}) => {

  const [slides,setSlides] = useState(3);

  // if(window.innerWidth<='1200' && window.innerWidth>='800'){
  //   setSlides(2)
  // }
  // else if(window.innerWidth<='800'){
  //   setSlides(1)
  // }

  var settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: slides,
        slidesToScroll: 1
      };

  return (
    <div className='mb-5 mt-5 card-slider'>
      <h1>{heading}</h1>
      <Slider {...settings}>
      <div>
        <ImageCard src={'assets/schoolimg/mindseyeplay.jpg'} name={'Minds Eye Play School'}/>
      </div>
      <div>
        <ImageCard src={'assets/schoolimg/mansarovarplay.jpg'} name={'Mansarovar Play School'}/>
      </div>
      <div>
        <ImageCard src={'assets/schoolimg/dps2.jpg'} name={'Delhi Public School'}/>
      </div>
      <div>
        <ImageCard src={'assets/schoolimg/mariamata.jpg'} name={'Maria Mata School'}/>
      </div>
      <div>
        <ImageCard src={'assets/schoolimg/mansarovarplay.jpg'} name={'Mansarovar Play School'}/>
      </div>
    </Slider>
    </div>
  )
}

export default CardSlider
