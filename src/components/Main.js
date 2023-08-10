import React from 'react'
import '../App.css';
import Bgimg from '../img/appearance1.jpg'
import styled from "styled-components";
import Booknow from '../components/Booknow'
import {Link} from 'react-router-dom';

const BookingImg = styled.div`
background-image: url(${Bgimg});
width: auto;
height: auto;
`
const Button = styled.button`
background-color: #054875;
color: #edf1f3;
margin: 5px;
min-height: 50px;
min-width: 140px;
border-radius: 3px;
`


export default function Main() {
  return (
    <main id='main'> 

      <BookingImg className='booking'>
      <h1 >Muhammathrafiq</h1>
<Link to="Booknow"><Button onClick={Booknow}>Book Now  <i className="fa fa-check fa-check"></i></Button></Link>
      </BookingImg>

      
    </main>
    
  )
}
