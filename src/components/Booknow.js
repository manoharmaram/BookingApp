import React from 'react'
import styled from "styled-components";
import Booknow1 from '../img/Booknow1.jpg';
import Booknow2 from '../img/Booknow2.png';
import Arrow from '../img/BooknowArrow.png'


const Img = styled.img`
width: 400px;
height: 250px;

`
const Img2 = styled.img`
width: 30px;
height: 50px;
padding-bottom: 0px;
`
const Div = styled.div`
max-width: 100%;
height: 550px;
background-color: #edf1f3;
padding: 5px;
`
const Div1 = styled.div`
max-width: 100%;
height: 80px;
background-color: #edf1f3;
// padding: 10px;
`
const Par = styled.p`
float: left;
padding: 5px;
padding-top: 10px;
margin-left: 120px;
margin-right: 100px;
text-align: center;
font-weight: 400;
font-size: 18px;
`
const Par3 = styled.p`
float: left;
padding-top: 0px;
`
const Par2 = styled.p`
padding-right: 5px;
text-align: right;
font-weight: 400;
font-size: 18px;
`
const Button = styled.button`
width: 100%;
`


export default function Booknow() {
  return (
    <>
        <Div1>
    <Par>Category</Par>
    <Par3><Img2 src={Arrow} /></Par3>
    <Par>Time</Par>
    <Par3><Img2 src={Arrow} /></Par3>
    <Par>Provider</Par>
    <Par3><Img2 src={Arrow} /></Par3>
    <Par>Client</Par>
    </Div1><br/>
    
    <Div>
    <Par2>Our time: 06:59 Europe/London</Par2>
    <div className='container-Footer' id='container_box'>
      <div id='box1'>
        <Img src={Booknow1} />
        <h3>Creative Child Care Experience</h3>
        <Button className='button_service1'>Select</Button><br/>
  
      </div>
      <div id='box2'>
      <Img src={Booknow2} />
        <h3>Creative Child Care - Members only</h3>
        <Button className='button_service1'>Select</Button>
      </div>
    </div>
  </Div>
  </>
  )
}
