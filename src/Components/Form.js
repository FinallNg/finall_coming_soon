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
        <div className="footer-icons">
        <IconContext.Provider value={{ className: "bottom-react-icons", }}>
        <SiFacebook color ="#0080ff" />  
        <SiTwitter color = "#0080ff" />
        <SiLinkedin color = "#0080ff" />
        <SiInstagram color= "#0080ff" />
        </IconContext.Provider>
        </div>   
        </div>
  )
}

export default Form