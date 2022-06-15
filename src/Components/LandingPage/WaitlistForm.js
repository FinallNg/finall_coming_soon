import Mailchimp from 'react-mailchimp-form'
import './WaitlistForm.css'

const Form = () => {
  return (

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
            className='waitlist-subscribe-form' // Class name on the form
        />
  )
}

export default Form