import React from 'react'
import "./Homepage.css";
import backgroundpic from "../../assets/backgroundhome.png"
import { Link } from "react-router-dom"




export const Homepage = () => {
  return (
    <>
    <div className='homepage flex w-full pl-7'>
        <div className="left-side">
            <h1 className='pb-5'>Register for the Holiday Quiz</h1>
            <h2 className='pb-5'>Yay! It's time for holiday quiz! Time for you to sharpen your skills and have a good time!!</h2>
            <div className="buttons mt-5 text-white">
                <button className='Register py-3 px-5 rounded bg-red-500 shadow'>
                  <Link to="/home/adultreg"> Register </Link>
                   </button>
                <button className='Log in py-3 px-5 rounded bg-green-500 shadow'>Log in</button>
            </div>
        </div>a

        <div className="right-side">
          <img src={backgroundpic} alt="" />
        </div>
        
    </div>
    </>
  )
}

