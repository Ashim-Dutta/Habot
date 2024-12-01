import React from 'react'
import { useEffect,useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'



gsap.registerPlugin(ScrollTrigger);




const Section3 = () => {


  const boxRef= useRef();

useEffect(()=>{
  gsap.fromTo(boxRef.current,{
     opacity: 0,
      y: 50 
    },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%", 
        end: "top 20%",   
        scrub: 0.2,         
      }
    }
  );
  },[])
 
  return (
    <div className="px-4 ">
    <div className="h-auto sm:h-[80vh] bg-blue-900 w-[90%] my-10 rounded-xl mx-auto flex flex-col sm:flex-row relative overflow-hidden " ref={boxRef}>
      
      {/* Image Section */}
     
     <div className="relative w-full sm:w-1/2 flex justify-center items-center py-5 sm:py-0  sm:mx-10">
        <img src="../img.jpg" alt="Failed to load" className="h-48 sm:h-auto rounded-xl" />
        <i className="ri-youtube-fill text-[6rem] sm:text-[8rem] text-[#F61C0D] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"></i>
      </div>
      
      {/* Text Section */}
      <div className="flex flex-col justify-center items-center sm:items-start sm:w-1/2 px-4 sm:px-10 text-center sm:text-left sm:mx-10  ">
        {/* Title Section */}
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-20">
          <h1 className="text-3xl text-[#EB7150] font-bold">Buyer</h1>
          <h1 className="text-3xl text-white font-bold">Supplier</h1>
        </div>
        
        {/* Divider Line */}
        <div className="h-1 w-16 sm:w-[10rem] bg-[#EB7150] my-5"></div>
        
        {/* Bullet Points Section */}
        <div className="flex flex-col gap-5">
          <p className="text-white flex items-center">
            <i className="ri-checkbox-circle-fill text-[#35a76c] mr-3"></i>
            Post your requirements.
          </p>
          <p className="text-white flex items-center">
            <i className="ri-checkbox-circle-fill text-[#35a76c] mr-3"></i>
            Sit back for multiple suppliers to contact you.
          </p>
          <p className="text-white flex items-center">
            <i className="ri-checkbox-circle-fill text-[#35a76c] mr-3"></i>
            Choose among the suppliers based on the ratings and reviews.
          </p>
        </div>
      </div>
     </div>
    </div>

  
  )
}



export default Section3