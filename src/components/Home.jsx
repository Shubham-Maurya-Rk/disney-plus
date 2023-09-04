import React  from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Movies from './Movies';


function Home() {
  return (
    <Container>
        <ImageSlider/>
        <Viewers/>
        <Movies/>
    </Container>
  )
}

export default Home

const Container=styled.div`
    height:calc(100vh - 70px);
    overflow-x: hidden;
    padding:0 25px;
    postion:relative;
    &:before{
        background:url("${process.env.PUBLIC_URL}/images/home-background.png") center center / cover no-repeat fixed;  
        content:"";
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:-1;
    }
`