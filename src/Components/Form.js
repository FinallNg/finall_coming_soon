import React from 'react';
import Mailchimp from 'react-mailchimp-form'
import './Form.css'
import finall from '../assets/finall.png'
import { SiFacebook } from 'react-icons/si';
import {SiInstagram} from "react-icons/si"
import {SiLinkedin} from "react-icons/si"
import { SiTwitter } from 'react-icons/si';
import { IconContext } from "react-icons";
const Form = () => {
  return (
    <div className='form-box'>
        {/* We don't need a manual form to sign up for our newsletter since we are using Mailchimp, that is why I comment it out. */}
        {/* <form>
            <input type='email' name='email' placeholder='Email Adress' required></input>
            <div>
            <input type='no' name='submit'></input>
            </div>
        </form> */}

        <Mailchimp
            action={process.env.REACT_APP_MAILCHIMP_URL}
  
            //Adding multiple fields:
            fields={[
                {
                name: 'EMAIL',
                placeholder: 'Email Address',
                type: 'email',
                required: true
                }
            ]}
            // Change predetermined language
            messages = {
                {
                sending: "Sending...",
                success: "Thank you for subscribing to Finall WaitList!",
                error: "An unexpected internal error has occurred.",
                empty: "Kindly input an e-mail.",
                duplicate: "Too many subscribe attempts for this same email address",
                button: "Notify Me!" // Text that will be on the Form Button
                }

            }
            
            // Add a personalized class
            className='landing-subscribe-form' // Class name on the form
        />
<div className='top-icon'>
<img src = {finall} alt="" />
</div>

<div>

        <div className="main-container">
          <h1>We are coming soon...</h1>
          <p>We are almost there! If you want to get notified when the website goes live,
            subscribe to our mailing list and kindly follow us on all our social media handles.
          </p>
        </div>

    </div>


        <div className="footer-icons">
        <IconContext.Provider value={{ className: "bottom-react-icons", }}>
          <a href = 'https://facebook.com/Finall-105970278816907/'>
        <SiFacebook color ="#0080ff" />  
          </a>
        <a href='https://twitter.com/Finall_ng?t=a2-Xzu_kekJpdvos2gGZ4A&S=09'>
        <SiTwitter color = "#0080ff" />
        </a>
        <a href='https://www.linkedin.com/company/finall-company'>
        <SiLinkedin color = "#0080ff" />
        </a>
        <a href = "https://instagram.com/finall_ng?igshid=YmMyMTA2M2Y">
        <SiInstagram color= "#0080ff" />
        </a>
        </IconContext.Provider>
        </div>   
        </div>
  )
}

export default Form