import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function MemberShip() {
  return (
    <div className='main-service-div'>
    <p>Filter by Services:</p>
    <p>Please note! Filter displays all memberships that include at least one of chosen services.</p>
    <div className='search-div'><input type="text" className='search'placeholder="Search.."></input></div>
    <div className='container-Footer' id='container_box'>
    <div id='box1'>
      <h3>Cocorio premium membership</h3>
      <p></p>
      <p>Session</p>    
      <p>1 month,Renewal £50.00</p>
      <button className='button_service1'>Starts from 26-07-2023</button><br></br>
      <button className='button_service2'>Starts from £29.99</button>
    </div>
    <div id='box2'>
      <h3>Sample</h3>
      <p>Session</p>
      <p>1 month,Renewal £50.00</p>
      <button className='button_service1'>Starts from 26-07-2023</button><br></br>
      <button className='button_service2'>Starts from £29.99</button>
    </div>
    <div id='box3'>
    <h3>CocoRio Club</h3>
    <p><FontAwesomeIcon icon="fa-duotone fa-list" />Session</p>
    <p>1 month,Renewal £50.00</p>
    <button className='button_service1'>Starts from 26-07-2023</button><br></br>
    <button className='button_service2'>Starts from £29.99</button>
    </div>
    </div>
    </div>
  )
}