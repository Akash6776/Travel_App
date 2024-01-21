import React, {useEffect} from 'react'
import './footer.css'
import {FiSend} from 'react-icons/fi'
import video3 from '../../Assets/sea(2).mp4'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {FiChevronRight} from 'react-icons/fi'
import {AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter} from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  //react hook to add scroll animation=============
    useEffect(()=>{
       Aos.init({duration: 2000})
    }, [])

  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video3} loop autoPlay muted type='video/mp4'></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with Us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address'/>
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div data-aos="fade-up" className="footerCard flex">
          <div className="footerIntro flex">
            <div data-aos="fade-up" className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className='icon'/>Travel
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            India, a land of glorious past and an extraordinary future. The air of India will swing you in each way and make you a part of its soil, in some way or the other. India Tourism holds an odyssey of diverse terrain that starts with snow-covered elevations to tropical delights, satisfies your soul with all the twist, turns and swirls. We’re here to help you sort the best India tourist destinations. 
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon"/>
              <AiFillYoutube className="icon"/>
              <AiFillInstagram className="icon"/>
              <AiFillFacebook className="icon"/>
            </div>
          </div>

          <div data-aos="fade-up" className="footerLinks grid">
            {/*========================group one OUR AGENCY=================*/}
            <div className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Payment
              </li>

            </div>

            {/*====================group Two PARTENER====================*/}
            <div className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                MakeMyTrip
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                HotelDekho
              </li>

            </div>

            {/*==============group Three MORE=========================*/}
            <div className="linkGroup">
              <span className="groupTitle">
                MORE
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Retail Store
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Site Map
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Gift Cards
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Careers
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Foods
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE</small>
            <small>COPYRIGHTS RESERVED- Travel 2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer