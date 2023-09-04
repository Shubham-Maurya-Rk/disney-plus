
import React from 'react';
import styled from 'styled-components';

function Viewers() {
    function playVideo(e) {
        const box=document.querySelector(`.box${e.target.id}`).children;
        box[0].play();
    }
    function pauseVideo(e) {
        const box=document.querySelector(`.box${e.target.id}`).children;
        box[0].pause();
    }
    return (
        <Container>
            <Wrap onMouseOver={playVideo} onMouseOut={pauseVideo}  className="box1" id="1">
                <video src={process.env.PUBLIC_URL + "videos/1564674844-disney.mp4"}
                    type="video/mp4" muted
                    loop  id="1"></video>
                <img src={process.env.PUBLIC_URL + "/images/viewers-disney.png"} alt="" id="1"/>
            </Wrap>
            <Wrap onMouseOver={playVideo} onMouseOut={pauseVideo}  className="box2" id="2">
                <video src={process.env.PUBLIC_URL + "videos/1564676714-pixar.mp4"}
                    type="video/mp4" muted
                    loop id="2"></video>
                <img src={process.env.PUBLIC_URL+"/images/viewers-pixar.png"} alt=""   id="2"/>
            </Wrap>
            <Wrap onMouseOver={playVideo} onMouseOut={pauseVideo}  className="box3" id="3">
            <video src={process.env.PUBLIC_URL+"videos/1564676115-marvel.mp4"}
                type="video/mp4" muted id="3"
                loop></video>
                <img src={process.env.PUBLIC_URL+"/images/viewers-marvel.png"} alt="" id="3" />
            </Wrap>
            <Wrap onMouseOver={playVideo} onMouseOut={pauseVideo}  className="box4" id="4">
            <video src={process.env.PUBLIC_URL+"videos/1608229455-star-wars.mp4"}
                type="video/mp4" muted id="4"
                loop></video>
                <img src={process.env.PUBLIC_URL+"/images/viewers-starwars.png"} alt="" id="4"/>
            </Wrap>
            <Wrap onMouseOver={playVideo} onMouseOut={pauseVideo}  className="box5" id="5">
            <video src={process.env.PUBLIC_URL+"videos/1564676296-national-geographic.mp4"}
                type="video/mp4" muted id="5"
                loop></video>
                <img src={process.env.PUBLIC_URL+"/images/viewers-national.png"} alt="" id="5"/>
            </Wrap>
        </Container>
    )
}

export default Viewers;

const Container = styled.div`
    margin:80px 0 50px 0;
    display:grid;
    grid-template-columns:repeat(5,minmax(0,1fr));
    grid-gap:25px;
    @media only screen and (max-width: 600px) {
        grid-template-columns:repeat(1,minmax(0,1fr));  
    }

`

const Wrap = styled.div`
    position:relative;
    cursor:pointer;
    border:3px solid rgba(249,249,249,0.1);
    border-radius:20px;
    padding:0px
    -webkit-box-shadow: 0px 35px 40px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 35px 40px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 35px 40px -10px rgba(0,0,0,0.75);
    transition:all 250ms;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        position:absolute;
        z-index:10;
        left:0;
    }
    video{
        width:100%;
        height:100%;
        object-fit:cover;
        border-radius:20px;
        
    }
    &:hover{
        transform:scale(1.05);
        -webkit-box-shadow: 0px 40px 45px -10px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 40px 45px -10px rgba(0,0,0,0.75);
        box-shadow: 0px 40px 45px -10px rgba(0,0,0,0.75);
        border:3px solid white;
    }
`