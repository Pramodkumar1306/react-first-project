import React from 'react'
import './About.css'
import contaryFacts from '../api/ContaryData.json'


export default function About() {
  return (
    <div className='section-about'>
      <h1 className='text-about'>Here are the interesting Facts
        <br/>
        we're Proud of
      </h1>


      <div className="outer-card">
        {contaryFacts.map((e) => {
            const{id,countryName,capital,population,interestingFact} = e
            return (
              <div className="cardes-border" key={id}>
              <div className="cardes by-blue-box">
                  <p className='container-card card-title'>{countryName}</p>
                  <p>
                    <span className='card-description'>
                        Capital:
                    </span>
                    {capital}
                  </p>
                  <p>
                    <span className='card-description'>
                      Population:
                    </span>
                    {population}
                  </p>
                  <p>
                    <span className='card-description'> 
                        Interesting Fact:
                    </span>
                    {interestingFact}
                  </p>
              </div>
          </div>
            );
        })}
        
      </div>
    </div>
  )
}
