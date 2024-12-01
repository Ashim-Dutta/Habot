import React from 'react'

const Navbar = () => {
  return (
    <div>
         <nav className="flex flex-col md:flex-row justify-between items-center">
        
        <div className="w-[15rem] mb-4 md:mb-0">
          <img
            src="https://s3-alpha-sig.figma.com/img/c1e1/45c4/467f6c3f60c323a607803f6d0dbc78cd?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LwGNvP9grakp8xukjFGzQ8e4bX0AtkaicxS8OEqaWy35bcko921VRolDehVE95Zn-5MZMVIUvhO4cFu7F~CHafsaR3Y~4y8J7pPLpVep4U49YqynFwI1JOPuUBp~obXaCbEaANwEF3dNPWEGFsbwqcSAeWoHwY14MW~qT5GdlK6JlMfR7-~G7bXdGSNT5tuQAk5WdYjNvXk5PAVvBDh8dkRWH9Mgkvb8hxAiAzNh9kKP5WZhSmhthIF1BYUEaL3-kE1M-LhfPs-orVzvAAB0jpKgGdTXUGLu41ft1an~JA8dBRin7cGQnwSX-u3dzVvK8-i~xWQLIPLa0nlh3gUo-A__"
            alt="Logo"
            className="w-full h-auto"
          />
        </div>
      
        
        <div className="flex flex-col md:flex-row items-center gap-5 my-10 ">
          <h2 className="text-md hover:text-gray-500 cursor-pointer">Find Suppliers</h2>
          <h2 className="text-md hover:text-gray-500 cursor-pointer">Find Service Tags</h2>
          <button className="text-[#00732F] font-bold border-[#00732F] mr-5 border-2 rounded px-4 py-2 ">
            Login / SignUp
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar