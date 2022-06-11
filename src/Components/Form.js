import React from 'react';
import Mailchimp from 'react-mailchimp-form'
import Github from '../assets/github.png'
import twitter from '../assets/twitter.png'
import './Form.css'

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
        <div className= 'i-icons'>
                 <a href= 'https://github.com/FinallNg/finall_frontend'>
                 <img src = {Github} alt= "" />
                 </a>
                 <a href= 'https://twitter.com/Finall_ng?t=BHC-VUL1xv-_mJYaeX-pPA&s=09'>
                     <img src = {twitter} alt = "" />
                 </a>

             </div>
    </div>
  )
}

export default Form