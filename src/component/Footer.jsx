import React from 'react'
import './Footer.css'
import footerContact from '../api/footerApi.json'

import { FaLocationPin } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  const footerIcon = {
    FaLocationPin : <FaLocationPin />,
    IoCall : <IoCall />,
    IoMail : <IoMail />
  }
  return (
      <footer className='footer-section'>

        <div className="container grid grid-three-cols">
          {footerContact.map((curdata,index) => {
            const{icon,title,detials} = curdata;
            return(

          
          <div className="footer-contact" key={index}>
            <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{detials}</p>
            </div>
          </div>
            );
          })}
        </div>

      </footer>
  )
}
