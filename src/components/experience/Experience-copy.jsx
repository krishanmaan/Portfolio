import React, { useState, useEffect } from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { txtDB } from '../../firebase';
import { collection, getDocs } from "firebase/firestore";

const Experienceto = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const valRef = collection(txtDB, 'backendSkills')
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
      <div className="experience__backend">
        <h3>Backend Development</h3>
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
    </>

  )
}

export default Experienceto