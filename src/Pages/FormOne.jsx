import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
export const FormOne = () => {
  const [showpass , setShowPass] = useState(false)

  const handleShowPass = ()=>{
    setShowPass(!showpass)
    console.log(showpass)
  }
  return (
    <>
    
        <form className="w-[400px] h-[400px] bg-[#9edaa2] bg-opacity-25 mt-10 mb-5 rounded-lg text-center pt-8 flex flex-col justify-center items-center text-black font-semibold text-lg">
          <label className="mb-1">Full Name :</label>
          <input className="w-[300px] h-10 border-green-700 border-2 text-center mb-6" type="text" placeholder="Enter Your Name" />
          <label className="mb-1">Email : </label>
          <input className="w-[300px] h-10 border-green-700 border-2 text-center mb-6" type="text" placeholder="Enter Your Email" />

          <div className="relative">
            <label className="mb-2">Password :</label><br/>
            {
              showpass?
              <FaRegEye onClick={handleShowPass} className="absolute top-1/2 right-1 translate-y-[-50%]" />
              :
              <FaEyeSlash onClick={handleShowPass} className="absolute top-1/2 right-1 translate-y-[-50%]" />
            }
          <input className="w-[300px] h-10 border-green-700 border-2 text-center mb-6" type={showpass?"text" : "password"}  placeholder="Enter your Password"/>
          </div>


          <button className="bg-white text-green-950 px-4 py-2 rounded-lg mb-5 border-green-700 border-2">Sign Up</button>
        </form>
  
    
    </>
  )
}
