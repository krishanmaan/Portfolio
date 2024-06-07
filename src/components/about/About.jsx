import React from 'react'
import './about.css'
import myImage from '../../assets/my-image.png'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>BCA<br /><i>University of Engineering & Management (UEM).</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current GPA</h5>
                  <small>6.13</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      {/* <li>Net Centric</li> */}
                      <li>Web Development</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
            As a <b>Full Stack React Developer </b>, I specialize in crafting end-to-end solutions that seamlessly integrate front-end and back-end technologies. With a strong command of React.js, Node.js, and MongoDB, I excel in building dynamic and responsive web applications. My expertise lies in bridging frontend excellence with backend robustness, ensuring a smooth and efficient user experience. Passionate about clean code and innovative solutions, I thrive in collaborative environments and continuously strive to stay updated with the latest industry trends. Let's connect and bring your ideas to life with cutting-edge web development.


            </p>

          </div>
      </div>
    </section>
  )
}

export default About