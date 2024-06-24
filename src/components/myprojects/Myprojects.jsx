import React, { useState, useEffect } from 'react'
import './myprojects.css'
import { txtDB } from '../../firebase';
import { collection, getDocs } from "firebase/firestore";

const Myprojects = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const valRef = collection(txtDB, 'projectData')
    const dataDb = await getDocs(valRef)
    const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id }))
    setData(allData)
    console.log(dataDb)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <section id='myprojects'>
        <h5>My Recent Works</h5>
        <h2>Projects</h2>
        <div className="container portfolio__container">

          {
            data.map(value =>
              <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={value.imgUrl} alt="" />
                </div>
                <h3>{value.titleVal}</h3>
                <small className='text-light'>{value.techVal}</small>
                <div className="portfolio__item-cta">
                  <a href={value.gitVal} target="_blank" rel='noreferrer' className='btn'>Github</a>
                  <a href={value.liveVal} target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>
                </div>
              </article>
            )
          }
        </div>
      </section>
    </>
  )
}

export default Myprojects