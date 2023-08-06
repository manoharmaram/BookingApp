import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profile from '../img/profile.png'
import styled from "styled-components";


const Img = styled.img`
width: 100px;
height: 100px;
`
const Button1 = styled.button`
color: #373737;
background-color: #edf1f3;
border-color: #edf1f3;
width: 100%;
`
const Button2 = styled.button`
width: 100%;
`

const Div1 = styled.div`
max-width: 100%;
height: 600px;
background-color: #edf1f3;
padding: 10px;
`

export default function MemberShip() {
  return (
    <Div1 className='main-service-div'>
      <p>Filter by Services:</p>
      <p>Please note! Filter displays all memberships that include at least one of chosen services.</p>
      <div className='search-div'><input type="text" className='search' placeholder="Search.."></input></div>
      <div className='container-Footer' id='container_box'>
        <div id='box1'>
          <Img src={profile} />
          <h3>Cocorio premium membership</h3>
          <p></p>
          <p>Session</p>
          <p>1 month,Renewal £50.00</p>
          <Button1 className='button_service1'>Starts from 26-07-2023</Button1><br/>
          <Button2 className='button_service2'>Starts from £29.99</Button2>
        </div>
        <div id='box2'>
        <Img src={profile} />
          <h3>Sample</h3>
          <p>Session</p>
          <p>1 month,Renewal £50.00</p>
          <Button1 className='button_service1'>Starts from 26-07-2023</Button1>
          <Button2 className='button_service2'>Starts from £29.99</Button2>
        </div>
        <div id='box3'>
        <Img src={profile} />
          <h3>CocoRio Club</h3>
          <p><FontAwesomeIcon icon="fa-duotone fa-list" />Session</p>
          <p>1 month,Renewal £50.00</p>
          <Button1 className='button_service1'>Starts from 26-07-2023</Button1>
          <Button2 className='button_service2'>Starts from £29.99</Button2>
        </div>
      </div>
    </Div1>
  )
}