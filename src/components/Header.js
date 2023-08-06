import React from 'react'
import {Link} from 'react-router-dom';
import Profile_popup from "./Profile_popup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
   
  return (
    <div-header>
      <header>
        <nav>
          <Link className='.H-Name' to="footer">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link className='.H-Name' to="reviews">Reviews</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link className='.H-Name' to="membership">MemberShip</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link className='.H-Name' to="more">More<FontAwesomeIcon icon={faUserSecret} /></Link>&nbsp;&nbsp;&nbsp;&nbsp;
         
        </nav>
      </header>
      <Profile_popup/>
    </div-header>

  )
}
