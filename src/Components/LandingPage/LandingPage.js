import FinallLogo from '../../assets/finall.png';
import { SiFacebook } from 'react-icons/si';
import {SiInstagram} from "react-icons/si"
import {SiLinkedin} from "react-icons/si"
import { SiTwitter } from 'react-icons/si';
import { IconContext } from "react-icons";
import Form from './WaitlistForm';
import './LandingPage.css';
import Faqs from '../Faqs';




function LandingPage() {
  return (
    <div className='landing-page'>
       
        <header>
            {/* <img src = {} alt="" /> */}
            <img src={FinallLogo} alt="Finall Logo" />
            <h1> We are coming soon... </h1>
            <p>
                We are almost there! If you want to get notified when the website goes live, subscribe to our mailing list and kindly follow us on all our social media handles.
            </p>
        </header>

        <Form />

        <footer>
            <IconContext.Provider value={{ className: "bottom-react-icons", }}>

                <a href='https://facebook.com/Finall-105970278816907/' target='_blank' rel="noreferrer">
                    <SiFacebook color ="#0080ff" />
                </a>

                <a href='https://twitter.com/Finall_ng' target='_blank' rel="noreferrer">
                    <SiTwitter color = "#0080ff" />
                </a>

                <a href='https://www.linkedin.com/company/finall-company' target='_blank' rel="noreferrer">
                    <SiLinkedin color = "#0080ff" />
                </a>

                <a href = "https://instagram.com/finall_ng" target='_blank' rel="noreferrer">
                    <SiInstagram color= "#0080ff" />
                </a>

            </IconContext.Provider>
        </footer> 
        <Faqs />
    </div>
  )
}

export default LandingPage