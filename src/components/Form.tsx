"use client"

import { useState } from 'react'
import axios from 'axios'

const Form = () => {

    const [state, setState] = useState({
        Name: "",
        Email: "",
        Phone: "",
        Message: "",
        responsemsg: ""
    })


    const handleSubmit = async () => {
        const { Name, Email, Phone, Message } = state;

        try {
            const response = await axios.post(`/api/contacts`, {
                Name,
                Email,
                Phone,
                Message
            });

            setState((prev) => ({
                ...prev,
                responsemsg: response.data,
                Name: "",
                Email: "",
                Phone: "",
                Message: ""
            }));

        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className=' md:w-[40%] flex flex-col gap-6 p-10 rounded-2xl bg-[#3c989ec2]  shadow-[0_0_10px_rgba(126,214,223,0.4),0_0_20px_rgba(126,214,223,0.2)]'>
            <div className='flex flex-col gap-1'>
                <label htmlFor='name-form' className='text-base font-Font1' >NAME</label>
                <input value={state.Name} onChange={(e) => setState((prev) => ({ ...prev, Name: e.target.value }))} className='p-3 rounded-md font-Font1' placeholder='name' id='name-form' type='text' alt='name-form' />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='email-form' className='text-base font-Font1' >EMAIL</label>
                <input value={state.Email} onChange={(e) => setState((prev) => ({ ...prev, Email: e.target.value }))} className='p-3 rounded-md font-Font1' placeholder='email' id='email-form' type='email' alt='email-form' />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='phone-form' className='text-base font-Font1' >PHONE</label>
                <input value={state.Phone} onChange={(e) => setState((prev) => ({ ...prev, Phone: e.target.value }))} className='p-3 rounded-md font-Font1' placeholder='Phone' id='phone-form' type='tel' alt='phone-form' />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='message-form' className='text-base font-Font1' >MESSAGE</label>
                <textarea  onChange={(e) => setState((prev) => ({ ...prev, Message: e.target.value }))} className='p-3 rounded-md font-Font1' placeholder='Write Message...' id='message-form' > </textarea>
            </div>
            <p className=' text-base'>{state.responsemsg}</p>
            <button onClick={() => handleSubmit()} className='text-xl font-Font1 text-black py-3 px-5 rounded-2xl bg-white' type='button'>SEND MESSAGE</button>

        </div>
    )
}

export default Form