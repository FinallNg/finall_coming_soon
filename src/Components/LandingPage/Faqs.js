import React from 'react'
import './Faqs.css'

const Faqs = () => {
  return (
    
    <div className='faqs'>
        <h2>Frequently Asked Questions</h2>

        <div className='faq-container'>
            <div className='each-faq'>
                <h3>
                    WHY FINALL?
                </h3>
                <p>
                    Finall provides, an at-a-glance status of your financial  health which helps to monitor the smooth running of your  finances, identify any issues upfront , and fix them as  quickly as possible
                </p>
            </div>

            <div className='each-faq'>
                <h3>
                    WHO USES FINALL?
                </h3>
                <p>
                    Basically, it's for everyone that wants to be in control of  their finances. Individuals, Entrepreneurs, and of course  organizations.  
                </p>  
            </div>

            <div className='each-faq'>
                <h3>
                    WHAT DO I BENEFIT FROM USING FINALL?
                </h3>
                <p>
                    Finall helps in preparing and presenting a financial dashboard that ensures you stand out and have an edge above your peers or competitors. It also boosts the overall confidence of the team members and the advisory team in a company when they know their financial standing and can track organisational growth.
                </p>  
            </div>

            <div className='each-faq'>
                <h3>
                    CAN I CHANGE THE BACKGROUND/THEME ON MY DASHBOARD?
                </h3>
                <p>
                    Yes, go to settings, click on the theme button, and change to available theme of your choice.
                </p>
            </div>

            <div className='each-faq'>
                <h3>
                    HOW DO I CONTACT SUPPORT?
                </h3>
                <p>
                    Click on the chat icon on your dashboard and send us a  message, someone is always there to answer you.
                </p>
            </div>

        </div>
    </div>
  )
}

export default Faqs