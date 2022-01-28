import styled from '@emotion/styled'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
    height: 300px;
    background-color: #525252;
`

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 300px;
    overflow: hidden;
`

const  Image = styled.img`
    width: 100%;
`

const SliderCustom = styled(Slider)`
    & .slick-dots{
        position: absolute;
        bottom: 10px;
        left: 0px;
    }
`

export default function LayoutBanner(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <Wrapper>
            <SliderCustom {...settings}>
            <ImageWrapper>
              <Image src="/pic.png"/>
            </ImageWrapper>
            <ImageWrapper>
            <Image src="/pic2.png"/>
            </ImageWrapper>
            <ImageWrapper>
            <Image src="/pic3.png"/>
            </ImageWrapper>
          </SliderCustom>
        </Wrapper>
    )
}


      

        
          
