import React from 'react'

const Section4 = () => {
  return (
    <div className='overflow-hidden'>
        <div className="w-full  bg-[#E8FBFF] flex flex-col md:flex-row justify-between items-center py-10">
          <div className="flex-col ">
            <h1 className="text-3xl my-5 md:my-20 font-bold text-center md:text-left md:ml-[12rem]">Let's Suppliers Find You</h1>
          <div className="h-2 w-1  relative left-[10rem] -top-[4.5rem]  sm:w-[10rem] bg-[#EB7150] mx-auto sm:ml-[14rem] "></div>
          </div>
          <button className="text-lg font-bold bg-[#EB7150] px-10 py-2 rounded-xl text-white mt-5 md:mt-0 md:mr-20 mx-auto">Get Verified</button>
        </div>
    </div>
  )
}

export default Section4