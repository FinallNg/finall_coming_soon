import React from 'react';
import Mailchimp from 'react-mailchimp-form'
import './Form.css'
import {RiFacebookCircleFill} from "react-icons/ri"
import {BsPinterest} from "react-icons/bs"
import {SiYoutubemusic} from "react-icons/si"
import{AiFillTwitterCircle} from "react-icons/ai"
import{GiRocketThruster} from "react-icons/gi"
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
        <IconContext.Provider value={{ className: "top-react-icon", }}>
            <GiRocketThruster color="white" />
        </IconContext.Provider>
</div>
        <div className="footer-icons">
        <IconContext.Provider value={{ className: "bottom-react-icons", }}>
        <RiFacebookCircleFill color ="#0080ff" />  
        <BsPinterest color ="red"/>
        <AiFillTwitterCircle color = "#ffffff" />
        <SiYoutubemusic color= "#ff471a" />
        </IconContext.Provider>
        </div>   
        </div>
  )
}

export default Form