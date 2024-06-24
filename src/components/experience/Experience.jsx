import React, { useState, useEffect } from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { txtDB } from '../../firebase';
import { collection, getDocs } from "firebase/firestore";
import Experienceto from './Experience-copy';

const Experience = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const valRef = collection(txtDB, 'frontendSkills')
    const dataDb = await getDocs(valRef)
    const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id }))
    setData(allData)
    console.log(dataDb)
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <section id='experience'>
      <h5>The skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {
              data.map(value =>
                <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>{value.nameVal}</h4>
                    <small className='text-light'>{value.lavelVal}</small>
                  </div>
                </article>
              )
            }
          </div>
        </div>
        <Experienceto />
      </div>
    </section>
  )
}

export default Experience