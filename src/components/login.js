import React from 'react'
import { useState } from 'react';
import Popup from './Popup';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';
import Facebook from '../img/facebook.png';
import Google from '../img/Google1.png';
import Twitter from '../img/twitter.png';



export default function Login() {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
const [type, setType] = useState('password');
const [icon, setIcon] = useState(eyeOff);
  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text')
    } else {
      setIcon(eyeOff)
      setType('password')
    }
  }
  const togglePopup = (e) => { setIsOpen(!isOpen); }
  return (
    <div>
      <main>
        <div>

         

          <button onClick={togglePopup}>Login</button>
          {
            isOpen &&
            <Popup content=
              {<>

                <input type="text" placeholder='Email' /><br />

                <input
                  type={type}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                /><br />
                             <span class="flex justify-around items-center" onClick={handleToggle}>
                  <Icon class="absolute mr-10" icon={icon} size={25}/>
              </span>
                <a>Remind Password</a><br />
                <input type="checkbox" />Remember me (Cookies used)
                <button>Sign In</button>
                <button>Sign Up</button><br />
                <p>or</p>
                <img src={Facebook} alt='Facebook'/>
                <img src={Twitter} alt='Twitter'/>
                <img src={Google} alt='Google'/>



              </>}
              handleClose={togglePopup} 
              />}
        </div>
      </main>
    </div>
  )
}
