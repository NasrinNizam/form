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
    <div className=" flex justify-center h-screen bg-black">
        <form className="w-[500px] h-[500px] bg-[#9edaa2] mt-16 rounded-lg text-center pt-10 flex flex-col justify-center items-center text-black font-semibold text-lg">
          <label className="mb-1">Full Name :</label>
          <input className="w-[300px] h-10 border-black border-2 text-center mb-6" type="text" placeholder="Enter Your Name" />
          <label className="mb-1">Email : </label>
          <input className="w-[300px] h-10 border-black border-2 text-center mb-6" type="text" placeholder="Enter Your Email" />

          <div className="relative">
            <label className="mb-2">Password :</label><br/>
            {
              showpass?
              <FaRegEye onClick={handleShowPass} className="absolute top-1/2 right-1 translate-y-[-50%]" />
              :
              <FaEyeSlash onClick={handleShowPass} className="absolute top-1/2 right-1 translate-y-[-50%]" />
            }
          <input className="w-[300px] h-10 border-black border-2 text-center mb-6" type={showpass?"text" : "password"}  placeholder="Enter your Password"/>
          </div>


          <button className="bg-white p-4 rounded-lg mb-5 border-black border-2">Sign Up</button>
        </form>
    </div>
    
    </>
  )
}
