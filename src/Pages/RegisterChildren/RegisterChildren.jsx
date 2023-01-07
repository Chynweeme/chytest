import React from 'react'
import "./RegisterChildren.css"
import progressbar2 from "../../assets/Progressbar2.png"
import children from "../../assets/children.png"

const RegisterChildren = () => {
  return (
    <div>
      <div className='flex'>
        <div className='left w-1/2'>
            <img src={progressbar2} alt="" className='progress-bar2 flex mx-auto' />
            <h1 className='heading3 text-2xl'>Register the children here:</h1>

            <div className='reg-form'>
                <div className='children-details'>
                    <div className="children-number mt-5 font-bold">Number of Children:</div>
                    <p className="children-count text-xl">0</p>
                    <div className="reg-details">
                        <div className="font-bold mt-5">Child/Children's details</div>
                        <form onsubmit="return false;">
                        <div className="input-details grid grid-cols-2 mx-auto w-full">
                            <div className="pt-5">
                                <p>Name</p>
                                <input type="text" required className=' border border-black rounded child-input'/>
                            </div>

                            <div className="pt-5">
                                <p>Age</p>
                                <input type="number" required className=' border border-black rounded w-1/3 child-input'/>
                            </div>

                            <button type='submit' className='underline text-blue-800 flex justify-start pt-3 pb-5'>Add Child</button>

 
                        </div>
                            <button type='submit' className='child-button py-3 px-5 rounded bg-red-500 shadow text-white'>Next</button>
                        </form>
                    </div>
                    
                </div>
            </div>

        </div>
        
        <div className='right w-1/2'>
            <img src={children} alt="A child studying" className='childrenpic flex m-auto'/>
        </div>
      </div>
    </div>
  )
}

export default RegisterChildren
