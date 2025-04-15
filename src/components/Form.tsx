"use client";

import { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [state, setState] = useState({
        Name: "",
        Email: "",
        Phone: "",
        Message: "",
        responsemsg: ""
    });

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
            setState((prev) => ({
                ...prev,
                responsemsg: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin."
            }));
        }
    };

    return (
        <div className='md:w-[40%] flex flex-col gap-6 p-8 rounded-2xl bg-[#3c989ec2] shadow-lg'>
            <h2 className='text-2xl font-Font1 text-white'>İletişime Geç</h2>
            <p className='text-sm text-white'>Aşağıdaki formu doldurun, size en kısa sürede geri dönüş yapalım.</p>

            <div className='flex flex-col gap-1'>
                <label htmlFor='name-form' className='text-base font-Font1 text-white'>Adınız</label>
                <input
                    value={state.Name}
                    onChange={(e) => setState((prev) => ({ ...prev, Name: e.target.value }))}
                    className='p-3 rounded-md font-Font1 bg-white/90 placeholder-gray-600'
                    placeholder='Adınız'
                    id='name-form'
                    type='text'
                    alt='name-form'
                />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='email-form' className='text-base font-Font1 text-white'>Maill Adressi</label>
                <input
                    value={state.Email}
                    onChange={(e) => setState((prev) => ({ ...prev, Email: e.target.value }))}
                    className='p-3 rounded-md font-Font1 bg-white/90 placeholder-gray-600'
                    placeholder='Mail addresi'
                    id='email-form'
                    type='email'
                    alt='email-form'
                />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='phone-form' className='text-base font-Font1 text-white'>Telefon</label>
                <input
                    value={state.Phone}
                    onChange={(e) => setState((prev) => ({ ...prev, Phone: e.target.value }))}
                    className='p-3 rounded-md font-Font1 bg-white/90 placeholder-gray-600'
                    placeholder='Telefon numarsı'
                    id='phone-form'
                    type='tel'
                    alt='phone-form'
                />
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='message-form' className='text-base font-Font1 text-white'>Bize Mesaj ilettin</label>
                <textarea
                    value={state.Message}
                    onChange={(e) => setState((prev) => ({ ...prev, Message: e.target.value }))}
                    className='p-3 rounded-md font-Font1 bg-white/90 placeholder-gray-600'
                    placeholder='Bir şeyler yaz...'
                    id='message-form'
                    rows={4}
                />
            </div>

            {state.responsemsg && (
                <p className='text-sm text-white'>{state.responsemsg}</p>
            )}

            <button
                onClick={handleSubmit}
                className='text-xl font-Font1 text-white py-3 px-5 rounded-2xl bg-black hover:bg-gray-800 transition-all'
                type='button'
            >
                Formu Gönder
            </button>
        </div>
    );
};

export default Form;