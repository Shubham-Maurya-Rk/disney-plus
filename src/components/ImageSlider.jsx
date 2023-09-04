import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function ImageSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    };
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src={process.env.PUBLIC_URL+"/images/slider-badging.jpg"} alt="Slider1" />
            </Wrap>
            <Wrap>
                <img src={process.env.PUBLIC_URL+"/images/slider-badag.jpg"} alt="Slider2" />
            </Wrap>
            <Wrap>
                <img src={process.env.PUBLIC_URL+"/images/slider-scale.jpg"} alt="Slider3" />
            </Wrap>
            <Wrap>
                <img src={process.env.PUBLIC_URL+"/images/slider-scales.jpg"} alt="Slider4" />
            </Wrap>
        </Carousel>
    )
}

export default ImageSlider


const Carousel = styled(Slider)`
    margin:20px 0;
    overflow:visible;
    .slick-list{
        overflow:visible;
    }
    .slick-dots li button{
        &:before{
            color:white;
        }
    }
    li.slick-active button:before{
        color:white;
    }
    button{
        z-index:1;
    }
`
const Wrap=styled.div`
    outline:none;
    img{
        width:100%;
        height:100%;
        border:4px solid transparent;
        border-radius:15px;
        -webkit-box-shadow: 0px 30px 40px 0px rgba(0,0,0,1);
        -moz-box-shadow: 0px 30px 40px 0px rgba(0,0,0,1);
        box-shadow: 0px 30px 40px 0px rgba(0,0,0,1);
        transition-duration:300ms;
        &:hover{
            border 4px solid white;
        }
    }

`