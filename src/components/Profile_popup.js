import React from 'react'
import { useState } from 'react';
import Popup from './Popup';
import './style.css'

export default function Profile_popup() {
    const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = (e) => {setIsOpen(!isOpen);}
  return (
    <div>
        <main>
            <div>
            <input type="button" value="Profile" onClick={togglePopup}/>
            {
              isOpen && <Popup content=
              {<>
              <b>My Profile</b>
              <p>First Name : Linda James.</p>
              <p>Email : lindaemail@gmail.com</p>
              <p>Phone : +91-123456789</p>
              <p>Country : India</p>
              <p>Address 1 : Address 1</p>
              <p>Address 2 : Address 2</p>
              <p>Zip  : Zip2</p>
              <p>City  : city</p>
              <button>Edit Profile</button>
              <button>booking</button>
              <button>Invoice</button>
              <button>Points</button>
              <button>Logout</button>
              </>}
              handleClose={togglePopup}/>}
            </div>
        </main>
    </div>
  )
}
