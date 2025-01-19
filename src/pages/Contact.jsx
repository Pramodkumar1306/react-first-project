import React from 'react'
import './contact.css'
export default function Contact() {
  return (
<>
        <div className="content-head">
          <h1 className='heading'>Contact</h1>
          <h1 className='heading'> Page</h1>
          </div>
      <section className='section-contact'>
          <form action="">
              <input type='text' className='form-control inputes' placeholder='Enter Your Name' name='username' required autoComplete='false' />
              <input type='email' className='form-control inputes' placeholder='Enter Your Email' name='email' required autoComplete='false' />
            
              <textarea className='form-control' rows="10" placeholder='"Enter your message' name='message' required autoComplete='false'/>
              <button className="btn-for btn123"type='submit' value='send'>Send</button>
          </form>
        </section>
        </>
  )
}
