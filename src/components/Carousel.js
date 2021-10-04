import React from 'react'
import './Carousel.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Carousel = () => {
    return (
        <div className="carousel">
            <OwlCarousel
            autoPlay={true}
            autoplayTimeout={5000}
             loop 
             nav
             items={1}
             margin={0}
             autoplay={true}
             dots={true}
             navClass={['owl-prev','owl-next']}
             >

    <div class='item'>
       <img src="./carousel1.png"/>
    </div>
    <div class='item'>
        <img src="./carousel2.jpg"/>
    </div>
    <div class='item'>
       <img src="./carousel3.jpg"/>
    </div>
    <div class='item'>
        <img src="./carousel4.jpg"/>
    </div>
    <div class='item'>
        <img src="./carousel5.jpg"/>
    </div>

</OwlCarousel>
        </div>
    )
}

export default Carousel
