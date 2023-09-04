import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
      <CTA>
          <CTALogo1 src={process.env.PUBLIC_URL+"/images/cta-logo-one.svg"}/>
          <CTAButton>GET ALL THERE</CTAButton>
          <CTADesc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur illo officiis nesciunt veritatis labore, ducimus magnam. Laudantium eum iusto harum.</CTADesc>
          <CTALogo2 src={process.env.PUBLIC_URL+"/images/cta-logo-two.png"}/>
      </CTA>
    </Container>
  )
}

export default Login;

const Container=styled.div`
  width:100%;
  height:92vh;
  display:flex;
  justify-content:center;
  align-item:center;
  position:relative;
  &:before{
    content:"";
    background-size:cover;
    background-position:top;
    background-repeat:no-repeat;
    background-image:url('${process.env.PUBLIC_URL+"/images/login-background.jpg"}');
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:-1;
    &:after {
      content:'';
      position:absolute;
      left:0px;
      top:0px;
      width:100%;
      height:100%;
      background: rgba(0, 0, 0, 0.6);
    }
  }
`

const CTA=styled.div`
margin-top:10vh;
  width:60%;
  display:flex;
  flex-direction:column;
  align-item:center;
`
const CTALogo1=styled.img`
`
const CTALogo2=styled.img`
padding:0 50px;
@media only screen and (max-width: 600px) {
  padding:0;
}
`
const CTAButton=styled.a`
  width:100%;
  color:white;
  cursor:pointer;
  text-align:center;
  font-size:18px;
  letter-spacing:2px;
  padding: 15px 0;
  background-color:#0076da;
  margin :20px 0;
  &:hover{
    background-color:#0069c3;
  }
`

const CTADesc=styled.p`
  color:white;
  font-size:12px;
  text-align:center;
  letter-spacing:1.5px;
  line-height:1.3;
  margin-bottom:10px;
`