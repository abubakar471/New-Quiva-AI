

import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { GrPowerReset } from "react-icons/gr";


const ResetingForm = () => {
    return (
        <div className='p-10 rounded-3xl relative flex flex-col gap-y-4 w-full md:w-[450px] '>
            <div className='w-full flex items-center justify-center'>
                <div className='rounded-xl bg-green-500/5 text-[12px] text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all p-2 shadow-xl shadow-green-500/10 w-fit'>
                    <Image src={`/assets/images/logo.png`} alt="logo" width={40} height={40} />
                </div>
            </div>


            <h3 className='text-4xl text-center text-gray-400 font-bold pt-4'>
                Reset Your Quiva AI
            </h3>

            <form className='pt-10 flex flex-col gap-y-4'>
                <div className='flex flex-col gap-y-2'>
                    <p className='text-sm flex text-gray-300 gap-2'>Username <span className='text-green-500 text-lg'>*</span></p>
                    <input type="text" placeholder='Eg: QuivaGPT' className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out' />
                </div>

                <div className='flex flex-col gap-y-2'>
                    <p className='text-sm flex text-gray-300 gap-2'>authKey <span className='text-green-500 text-lg'>*</span></p>
                    <input type="text" placeholder='Eg: asfnwejnWQtn&525$...' className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out' />
                </div>

                <div className='flex flex-col gap-y-2'>
                    <p className='text-sm flex text-gray-300 gap-2'>AI Name  <span className='text-green-500 text-lg'>*</span></p>
                    <input type="text" placeholder='Eg: Quiva Support' className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out' />
                </div>

                <div className='flex flex-col gap-y-2'>
                    <p className='text-sm flex text-gray-300 gap-2'>AI Role  <span className='text-green-500 text-lg'>*</span></p>
                    <input type="text" placeholder='Eg: Support Assistant' className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out' />
                </div>

                <div className='flex flex-col gap-y-2'>
                    <p className='text-sm flex text-gray-300 gap-2'>Company  <span className='text-green-500 text-lg'>*</span></p>
                    <input type="text" placeholder='Eg: Quivox' className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out' />
                </div>

                <button type='submit' className='backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all p-2 shadow-xl shadow-green-500/10 w-full text-green-400 rounded-full flex gap-2 items-center justify-center    '>
                    Reset AI
                    <GrPowerReset className='w-[18px] h-[18px]' />
                </button>

                <div className='flex items-center flex-wrap gap-2 text-gray-400 text-center justify-center text-sm w-full pt-4'>
                    Want to reset your Quiva AI?
                    <Link href={"/train"} className='text-green-400'>Train AI</Link>
                </div>
            </form>



        </div>
    )
}

export default ResetingForm