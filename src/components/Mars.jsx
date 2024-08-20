import React from 'react'
import DestinationNavLinks from './DestinationNavLinks'

const Mars = () => {
  return (
    <div className="flex flex-col xl:flex-row w-full h-screen items-center relative">
    <div className='w-[327px] h-[203px] flex justify-center items-center mb-[2em]'>
      <img className="w-[150px] h-[150px]" src="/assets/destination/image-mars.webp" alt="Moon image" />
      </div>
    <DestinationNavLinks />
    <div className='w-[327px] h-auto flex flex-col justify-center items-center mb-[2em]'>
      <h1 className="text-white text-[3.5rem] font-bellefair break-all xl:text-[9rem] my-[.3em]">MARS</h1>
      <p className="text-[#D5E0FF] leading-[180%] font-barlow text-center xl:text-start text-[0.9375em] lg:text-[1rem] lg:w-[510px] xl:w-[550px] xl:text-[1.125em]">
      Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
      the tallest planetary mountain in our solar system. It’s two and a half times 
      the size of Everest!
      </p>
    </div>
    <div className='w-full'>
    <hr className='w-full opacity-25' />
    </div>
    <div className='mt-[1.5em] flex flex-col gap-[1.5em] lg:gap-0 lg:flex-row items-center text-center'>
      <div className='flex flex-col lg:w-[245px] lg:h-[61px] lg:px-[0.75 gap-[.5em]'>
        <p className='text-[0.875em] text-lightBlue'>AVG. DISTANCE</p>
        <p className='text-[1.75em] text-white'>225 MIL. KM</p>
      </div>
      <div className='flex flex-col lg:w-[245px] lg:h-[61px] lg:px-[0.75]  gap-[.5em]'>
        <p className='text-lightBlue text-[0.875em]'>EST. TRAVEL TIME</p>
        <p className='text-white text-[1.75em] '>9 MONTHS</p>
      </div>
    </div>
  </div>
  )
}

export default Mars