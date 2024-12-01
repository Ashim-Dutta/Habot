import React from 'react'

const Section5 = () => {
  return (
    <div>
        <div className="w-full mt-5">
          <div className="flex justify-center flex-col items-center text-center w-full sm:w-[70%] mx-auto">
            <h1 className="text-4xl font-bold mt-[10rem]">How it works?</h1>
            <p className="my-5">Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
          </div>
        
          <div className="w-full sm:w-[80%] mx-auto">
            <div className="w-full">
              <div className="flex flex-wrap gap-10 justify-center">
              
                <div className="flex flex-col gap-5 w-full sm:w-[45%] md:w-[30%] my-10 items-center text-center bg-[#E8FBFF]">
                  <img src="../img/add-user.png" alt="" className="h-[5rem] w-[5rem] mt-5"/>
                  <p className="text-xl mb-5  w-3/4 font-bold">Select Your Role and Sign Up</p>
                </div>
        
              
                <div className="flex flex-col gap-5 w-full sm:w-[45%] md:w-[30%] text-center my-10 items-center">
                  <img src="../img/document-file.png" alt="" className="h-[5rem] w-[5rem] mt-5"/>
                  <p className="text-xl mb-5 w-3/4 font-bold  ">Buyers Post Your Requirements</p>
                </div>
        
              
                <div className="flex flex-col gap-5 w-full sm:w-[45%] md:w-[30%] my-10 items-center text-center bg-[#E8FBFF]">
                  <img src="../img/preview.png" alt="" className="h-[5rem] w-[5rem] mt-5"/>
                  <p className="text-xl mb-5 w-3/4 font-bold  ">Review, Select, and Contact the Best Suppliers</p>
                </div>
              </div>
        
              <div className="flex flex-wrap gap-10 justify-center mx-auto">
               
                <div className="flex flex-col gap-5 w-full sm:w-[45%] md:w-[30%] text-center my-10 items-center">
                  <img src="../img/contract.png" alt="" className="h-[5rem] w-[5rem] mt-5"/>
                  <p className="text-xl mb-5 w-3/4 font-bold  ">Suppliers Complete your profile and get notified for opportunities</p>
                </div>
        
                
                <div className="flex flex-col gap-5 w-full sm:w-[45%] md:w-[30%] text-center my-10 items-center bg-[#E8FBFF]">
                  <img src="../img/copywriting.png" alt="" className="h-[5rem] w-[5rem] mt-5"/>
                  <p className="text-xl mb-5 w-3/4 font-bold  ">Contact to Buyers and Share your Quote for the service</p>
                </div>
        
                
                <div className="flex flex-col gap-5 w-full sm:w-[45%] md:w-[30%] text-center my-10 items-center">
                  <img src="../img/handshake.png" alt="" className="h-[5rem] w-[5rem] mt-5"/>
                  <p className="text-xl mb-5 font-bold w-3/4">Both the Parties can Connect and Make Business Leave a Feedback</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        

    </div>
  )
}

export default Section5