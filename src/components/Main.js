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

export default function Main() {
  return (
    <main id='main'> 

      <BookingImg className='booking'>
      <h1 >Muhammathrafiq</h1>
<Link to="Booknow"><button onClick={Booknow}>Book Now  <i className="fa fa-check fa-check"></i></button></Link>
      </BookingImg>

      
    </main>
    
  )
}
