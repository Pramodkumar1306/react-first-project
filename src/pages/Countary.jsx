import React, { useState, useTransition } from 'react'
import { useEffect } from 'react'
import { getCountryData } from '../api/postApi';
import Loader from './Loader'
import CountaryCard from './CountaryCard'

export default function Countary() {
  const [isPending, startTransition] = useTransition();
  const [countries,setCountries] = useState([]);
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    })
  }, [])

  if(isPending)return<Loader/>

  return (
    <div>
      <section className='country-section'>
        <ul className='grid grid-four-cols'>
          {countries.map((curCountry,index) => {
            return <CountaryCard curCountry = {curCountry} key={index} />;
          })
          }
        </ul>
      </section>
    </div>
  )
}
