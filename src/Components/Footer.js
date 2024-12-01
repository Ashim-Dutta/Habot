import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Footer = () => {
  return (
    <div>
    <div className="w-full bg-[#123557] text-white flex flex-col">
      <div className="w-[80%] h-[1px] bg-red-200 mx-auto my-10"></div>
  
      <div className="flex flex-col md:flex-row w-[90%] md:w-[80%] mx-auto justify-center text-center md:text-left">
        
        {/* Image Section */}
        <div className="flex items-center justify-center md:mr-10 h-[2rem] mb-4 md:mb-0">
          <img src="../img/habot-1.png" className="h-full w-auto sm:h-[2.5rem] md:h-[3rem]" alt="Image 1" />
          <img src="../img/habot.png" className="filter brightness-0 invert ml-1 h-full w-auto sm:h-[2.5rem] md:h-[3rem]" alt="Image 2" />
        </div>
  
        {/* Company Links */}
        <div className="flex flex-col mx-4 my-2 md:my-0">
          <h1 className="text-lg font-semibold mb-2">Company</h1>
          <h4 className="font-light">About</h4>
          <h4 className="font-light">FAQ</h4>
        </div>
  
        {/* Terms Links */}
        <div className="flex flex-col mx-4 my-2 md:my-0">
          <h1 className="text-lg font-semibold mb-2">Terms</h1>
          <h4 className="font-light">Data Privacy</h4>
          <h4 className="font-light">Terms</h4>
          <h4 className="font-light">Accessibility</h4>
        </div>
  
        {/* Related Links */}
        <div className="flex flex-col mx-4 my-2 md:my-0">
          <h1 className="text-lg font-semibold mb-2">Related</h1>
          <h4 className="font-light">Find Buyer</h4>
          <h4 className="font-light">Feedback</h4>
        </div>
  
        {/* Social Media Buttons */}
        <div className="flex justify-center md:justify-end my-4 md:my-10 md:ml-10">
          <button className="border-2 rounded-full p-1 mx-2">
            <i className="ri-linkedin-fill p-3"></i>
          </button>
          <button className="border-2 rounded-full p-1 mx-2">
            <i className="ri-twitter-fill p-2"></i>
          </button>
          <button className="border-2 rounded-full p-1 mx-2">
            <i className="ri-facebook-fill p-3"></i>
          </button>
          <button className="border-2 rounded-full p-1 mx-2">
            <i className="ri-instagram-line p-3"></i>
          </button>
        </div>
      </div>

      <div className="w-auto mx-auto ml-[20rem] text-center">
        <h1 className="font-light text-lg">© R Singhania</h1>
      </div>
  
      <div className="w-[80%] h-[1px] mx-auto bg-red-200 my-10"></div>
  
      {/* Footer Copyright */}
      
    </div>
  </div>
  
  )
}

export default Footer