import React from 'react'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {useRef} from 'react'



const Section2 = () => {
  
  const mainRef = useRef();
  useGSAP(()=>{
    gsap.from(mainRef.current, {
      opacity: 0, 
      y: 100, 
      duration: 2,
     
    });
  })

  return (
    <div className='main '>
       <div className="flex flex-col sm:flex-row justify-between -mt-[8rem]  w-[90%]  rounded-xl mx-auto" ref={mainRef}>
  
 
  <div className="flex   flex-col w-full sm:w-[40%] mx-auto my-10 left">
    <h1 className="text-3xl my-5 text-center sm:text-left">Ready to dive into <span className="text-blue-900 font-bold">HABOT?</span></h1>
    <p className="text-xl text-center sm:text-left">Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
    <button className="font-bold text-xl bg-[#00732F] ml-0 mx-auto sm:mx-0 p-4 text-white rounded-xl my-10 sm:my-5  w-1/2">Sign Up Today ! <span className="ml-5"><i className="ri-arrow-right-line  font-light"></i></span></button>
  </div>

  

  <div className="flex-col w-full sm:w-[50%]  my-10 right">
      <div className="flex w-full mx-auto justify-evenly my-5 gap-5">
          <button className="p-5 border-[1px] text-xl border-[#E7760D] w-1/2 hover:bg-[#E7760D] hover:text-white transition ease-in-out 2s">Abu Dhabi</button>
          <button className="p-5 border-[1px] text-xl border-[#E7760D] w-1/2 hover:bg-[#E7760D] hover:text-white transition ease-in-out 2s">Dubai</button>
      </div>

      <div className="flex w-full mx-auto justify-evenly my-5 gap-5">
        <button className="p-5 border-[1px] text-xl border-[#E7760D] w-1/2 hover:bg-[#E7760D] hover:text-white transition ease-in-out 2s">Sharjah & Ajman</button>
        <button className="p-5 border-[1px] text-xl border-[#E7760D] w-1/2 hover:bg-[#E7760D] hover:text-white transition ease-in-out 2s">Fujairah</button>
    </div>

    <div className="flex w-full mx-auto justify-evenly my-5 gap-5">
      <button className="p-5 border-[1px] text-xl border-[#E7760D] w-1/2 hover:bg-[#E7760D] hover:text-white transition ease-in-out 2s">Ras Al Jhaimah</button>
      <button className="p-5 border-[1px] text-xl border-[#E7760D] w-1/2 hover:bg-[#E7760D] hover:text-white transition ease-in-out 2s">Umm Al Quwain</button>
  </div>
  </div>
  </div>
</div>




   
  )
  
}



export default Section2