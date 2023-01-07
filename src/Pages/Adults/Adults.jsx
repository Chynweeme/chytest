import React from 'react'
import "./Adults.css"
import progressbar from "../../assets/Progressbar.png"
import { Link } from "react-router-dom"

const Adults = () => {
  return (
    <div className='center '>
       <form onsubmit="return false;">
            <div>
                <img src={progressbar} alt=""  className='progress-bar flex mx-auto'/>
                <h1 className='heading-adult my-2 text-2xl'>Adults</h1>
                <div className='reg-form grid grid-cols-2 mx-auto w-3/4'>
                    <div className='pt-5'>
                        <p>Name</p>
                        <input type="text" name='fullname' required id="fullname" className='border adult-input'/>
                    </div>

                    <div className='pt-5'>
                        <p>Phone number</p>
                        <input type="number" name='contact' required id='contact' minLength="11" maxLength="12" className='border adult-input' />
                        <p className='text-red-500 hidden'>Phone number already exists. Please use a different one.</p>
                    </div>

                    <div className='pt-6'>
                        <p>Email</p>
                        <input type="email" name='email' required id='email' className='border adult-input'/>
                        <div className="text-red-500 hidden">Email already exists. Please use a different one.</div>
                    </div>

                    <div className='pt-6'>
                        <p>Password</p>
                        <input type="password" name='email' required id='email' className='border adult-input' />
                    </div>
                    
                </div>

                <input type="radio" id='terms' name='terms-conditions' className='terms-input mt-2'/>
                <label htmlFor="terms" className='ml-2'>I have agreed to the <span className='underline text-red-500'>Terms and Conditions</span>and <span className='underline text-red-500'>Privacy Policy</span></label> <br />

                <button className='adult-button py-3 px-5 rounded bg-red-500 shadow' type='submit' >
                    <Link to="/home/childreg">Next</Link>
                    </button>
                
            </div>
        </form>
    </div>
  )
}

export default Adults