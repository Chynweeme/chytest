import React from 'react'
import parent from "../../assets/Parent.png"
import school from "../../assets/School.png"
import holiday from "../../assets/Holiday.png"
import "./Choosemode.css"

const Choosemode = () => {
  return (
    <div>
        <p className='header text-2xl'>Register as:</p>
        <div className='flex container justify-evenly image-wrapper mx-auto'>
            <div> 
             <a href="#">
                <img src={parent} alt="" className='border border-red-300 rounded-2xl'/>
                <p className='pt-4 font-semibold flex justify-center'>Parent/Guardian</p>
             </a>   
            </div>
            <div>
            <a href="#">
                <img src={school} alt="" className='border border-green-300 rounded-2xl'/>
            <p className='pt-4 font-semibold flex justify-center'>School</p>
            </a>   
            </div>
            <div>
            <a href="#">
                <img src={holiday} alt="" className='border border-yellow-300 rounded-2xl' />
                <p className='pt-4 font-semibold flex justify-center'>Holiday Club</p>
            </a>
            </div>
        </div>
    </div>
  )
}

export default Choosemode