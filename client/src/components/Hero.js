import React from 'react'
import hero from "../Assets/hero.jpg"
const Hero = () => {
  return (
    <div className=' flex mx-4 '>
        <div className=' mx-12 mt-48 font-Varela'>
            <h1 className='text-3xl font-bold mb-4'>Mo Swaccha Rajya</h1>
            <p className='text-xl'>Ex labore et nostrud quis. Ea irure voluptate reprehenderit ipsum sint proident sint id quis ut veniam excepteur dolore amet. Aliqua consectetur sint mollit ullamco aute exercitation anim exercitation magna.</p>
        </div>
      <img className='w-[700px] mt-12 mx-0 'src={hero} alt="recycling"/>
    </div>
  )
}

export default Hero
