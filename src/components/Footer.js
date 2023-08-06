import React from 'react'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container-Footer'>
        <div id='box1' className='box'>
          <p  id='F-heading'>Opening Hours</p>
          <table>
            <tbody>
              <tr><td>Mon</td><td>09:00 - 23:00</td></tr>
              <tr><td>Tue</td><td>09:00 - 23:00</td></tr>
              <tr><td>Wed</td><td>09:00 - 23:00</td></tr>
              <tr><td>Thu</td><td>09:00 - 23:00</td></tr>
              <tr><td>Fri</td><td>09:00 - 23:00</td></tr>
              <tr><td>Sat</td><td>09:00 - 23:00</td></tr>
              <tr><td>Sun</td><td>09:00 - 23:00</td></tr>
            </tbody>
          </table>
        </div>
        <div id='box2' className='box'>
          <p id='F-heading'>mohammedthoufiq</p>
          <p>dfsdfsdfsdfsdfsdfsdfsdfdssdfsdfsdffgdfgdf</p>
        </div>
        <div id='box3' className='box'>
          <p id='F-heading'>Contact us</p>
          <table>
            <tbody id='contact'>
            <tr><td><a className='phone_number' href='+91-232323232'>+91-232323232</a></td></tr>
            <tr><td><a className='mailid' href='mohammedthofiq96@gmail.com'>mohammedthofiq96@gmail.com</a></td></tr>
            <tr><td><a target='_blank' className='mailid' 
                      href='https://www.google.com/maps/place/Chennai,+Tamil+Nadu,+India/@13.0475255,80.2090117,11z/data=!3m1!4b1!4m6!3m5!1s0x3a5265ea4f7d3361:0x6e61a70b6863d433!8m2!3d13.0826802!4d80.2707184!16zL20vMGM4dGs?entry=ttu'>chennai, IN</a></td></tr>
            <tr><td><a className='mailid' href='https://mohammedthoufiq.simplybook.me/v2/'>mohammedthoufiq.simplybook.me</a></td></tr>
          </tbody>
          </table>
          </div>
      </div>
    </footer>
  )
}
