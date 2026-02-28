import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
const VerifyOtp = () => {
    const navigate = useNavigate()
    const[data,setData] = useState({"code":""})
    // const navigate = useNavigate()
    const handleChange = (e)=>{
        let name = e.target.name
        let value = e.target.value
        setData({
            ...data,
            [name]:value
        })
        // console.log(data);  
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const resp = await axios.post('https://crudrender-og2v.onrender.com/api/verifyemail',data)
        alert(resp.data.message)
        console.log(resp);
        
        navigate('/signin')
    }
  return (
    <div className='min-h-screen bg-green-200 flex items-center justify-center p-4'>
        <div className='max-w-md w-full bg-white rounded-xl shadow-lg p-8'>
            <h2 className='text-2xl font-bold text-gray-800 text-center mb-6'>Verify OTP</h2>
            <p className='mt-6 text-center text-sm text-gray-600'>We send otp to your registered email! Check Your Email</p>
            <form action="" className='space-y-4'>

                <input type="text" placeholder='Enter Your OTP' required name='code' onChange={handleChange} className='mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition'  />
                
                <button type='submit' onClick={handleSubmit} className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200 shadow-md cursor-pointer'>Verify OTP</button>
            </form>

            {/* <p className='mt-6 text-center text-sm text-gray-600'>Already have an account?<Link to="/signin" className='text-blue-600 font-semibold hover:underline'>Sign In</Link></p> */}
        </div>
        
    </div>
  )
}

export default VerifyOtp
