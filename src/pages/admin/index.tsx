"use client"
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const Admin = () => {

    const router = useRouter()
    const [state, setState] = useState({
        Email: "",
        Password: "",

    })


    const handleSubmit = async () => {
        const { Password, Email } = state;

        try {
            const response = await axios.post(`/api/admin`, {
                Email,
                Password
            });

            setState((prev) => ({
                ...prev,
                Password: "",
                Email: "",

            }));

            if (response.data.success) {
                return router.push('/admin/contact')
            }

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className=' w-full flex h-full items-center justify-center'>

            <div className=' md:w-[40%] h-screen md:h-full flex flex-col gap-6 p-10 rounded-2xl bg-[#3c989ec2]  shadow-[0_0_10px_rgba(126,214,223,0.4),0_0_20px_rgba(126,214,223,0.2)]'>

                <div className='flex flex-col gap-1'>
                    <label htmlFor='email-form' className='text-base font-Font1'>EMAIL</label>
                    <input value={state.Email} onChange={(e) => setState((prev) => ({ ...prev, Email: e.target.value }))} className='p-3 rounded-md font-Font1' placeholder='email' id='email-form' type='email' alt='email-form' />
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor='password-form' className='text-base font-Font1' >Password</label>
                    <input value={state.Password} onChange={(e) => setState((prev) => ({ ...prev, Password: e.target.value }))} className='p-3 rounded-md font-Font1' placeholder='Password' id='Password-form' type='password' alt='Password-form' />
                </div>

                <button onClick={() => handleSubmit()} className='text-xl font-Font1 text-black py-3 px-5 rounded-2xl bg-white' type='button'>sign in</button>

            </div>

        </div>
    )
}

export default Admin