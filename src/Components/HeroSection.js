import React from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {useRef} from 'react'


const HeroSection = () => {

  const mainRef = useRef();
  useGSAP(()=>{
    gsap.from(mainRef.current, {
      opacity:0,
      duration:2,
      ease: "power3.inOut",
    })
  })
  return (
    <div>
       <div className="overflow-hidden h-[80vh]">
        <div className="relative w-full h-3/4 ">
         
          <div className="relative w-full h-full">
            <img src="https://s3-alpha-sig.figma.com/img/4df9/f396/c8b4ef806609efd227c6672c5dba3716?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N8k~qqGEqOPOGELe8eaIK9DNKww1VvRXDU17NnAINtiSdHNlqpKKlZRqK8afttUELmHhzbcQ4i-RzZ~n2YH5gbXXIdhcyOQw5oovtPVZ2hLmjRiVRyOlEKh6WxZgBif1h3z1wpQ9uyPB5ASSZSKZWWoilOUpgYzJ8C90TkKzKIDfM4QndQzGl6I0naeO-86sWuBgejIaJHqcgJgu-qFH2AJo9RR6Bg6PgRdVN-Tq~FccWbJy~PF~qcADefpcOvJJR-Ncg3oALwkg4Atr0nRBGx13ov7sSqQkSzYLvBz~8AW-CDtTl~ZG~gGxeDRRFtIMjNM7r7ELsTYdpD7HJ771QA__" 
            alt="Supplier Image"
             className="w-full h-full"
             />
          <div 
               className="absolute inset-0 bg-[linear-gradient(356.01deg,rgba(7,47,87,0.75)_50.8%,rgba(7,47,87,0)_94.58%),linear-gradient(0deg,rgba(7,47,87,0.45),rgba(7,47,87,0.45))]">
          </div>
          </div>
      
          
          <div className="flex flex-col "ref={mainRef}>
            <h1 className="absolute inset-0 flex my-[5rem] justify-center text-white text-3xl md:text-5xl font-bold text-center p-4">
              Are You a Supplier?
            </h1>
      
            <h1 className="absolute inset-0 flex  justify-center text-white text-3xl md:text-5xl text-center p-4 mt-[10rem]">
              Explore Matching Opportunities.
            </h1>
            
           
            <div className="absolute inset-0 md:flex hidden justify-center gap-[2rem] w-[80%] m-auto my-[16rem] px-4 h-2">
         
              <div className="relative w-[30%] ">
                <input type="text" placeholder="Search Your required service here" className="w-full  text-center rounded p-3"/>
                <i className="ri-briefcase-4-line absolute left-3 text-yellow-500 text-2xl top-2.5"></i>
             </div>

             <div className="relative w-[30%] ">
                <input type="text" placeholder="Search Your desired location here" className="w-full  text-center rounded p-3 "/>
                <i className="ri-map-pin-2-line absolute left-3 text-yellow-500 text-2xl top-2.5 "></i>
             </div>
             <button className="bg-green-600 font-bold rounded-lg text-white p-2 text-xl  flex items-center justify-center"> Search</button>

            </div>
      
            
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-lg text-center p-4 my-5 mt-[18rem]">
              <p className="font-bold">Are you a buyer?<span className="font-light underline ml-2"> Click here if you are looking to post a requirements</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

