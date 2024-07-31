import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";


const Footer = () => {
    return (
        <footer className='border-t border-gray-800 w-full py-16'>
            <div className='w-[70%] mx-auto flex flex-wrap xl:flex-nowrap gap-6 justify-between'>
                <div className='w-full xl:w-2/6'>
                    <Image src={"/assets/images/logo.png"} alt='Quiva AI' width={120} height={120} className='w-[80px]' />

                    <p className='text-gray-500 text-sm w-[85%] pt-6'>
                        © quivox.org - All rights reserved.
                    </p>
                </div>

                <div className='sm:w-full md:w-2/6 xl:w-1/6'>
                    <h3 className='text-gray-100'>Company</h3>

                    <div className='flex flex-col gap-2 pt-4'>
                        <Link href={""} className='text-gray-500 hover:text-white transition-all duration-300 ease-in-out text-sm'>About us</Link>
                        <Link href={""} className='text-gray-500 hover:text-white transition-all duration-300 ease-in-out text-sm'>Diversity & Inclusion</Link>
                        <Link href={""} className='text-gray-500 hover:text-white transition-all duration-300 ease-in-out text-sm'>About us</Link>
                        <Link href={""} className='text-gray-500 hover:text-white transition-all duration-300 ease-in-out text-sm'>Blog</Link>
                    </div>
                </div>

                <div className='sm:w-full md:w-2/6 xl:w-1/6'>
                    <h3 className='text-gray-100'>Products</h3>

                    <div className='flex flex-col gap-2 pt-4'>
                        <Link href={""} className='text-gray-500 hover:text-white transition-all duration-300 ease-in-out text-sm'>Overview</Link>
                        <Link href={""} className='text-gray-500 hover:text-white transition-all duration-300 ease-in-out text-sm'>Pricing & Plans</Link>
                        <Link href={""} className='text-gray-500 hover:text-white transition-all duration-300 ease-in-out text-sm'>Changelog</Link>
                        <Link href={""} className='text-gray-500 hover:text-white transition-all duration-300 ease-in-out text-sm'>Blog</Link>
                    </div>
                </div>

                <div className='sm:w-full md:w-2/6 xl:w-1/6'>
                    <h3 className='text-gray-100'>Resources</h3>

                    <div className='flex flex-col gap-2 pt-4'>
                        <Link href={""} className='text-gray-500 hover:text-white transition-all duration-300 ease-in-out text-sm'>Community</Link>
                        <Link href={""} className='text-gray-500 hover:text-white transition-all duration-300 ease-in-out text-sm'>Terms of service</Link>
                        <Link href={""} className='text-gray-500 hover:text-white transition-all duration-300 ease-in-out text-sm'>Report a vulnerability</Link>
                    </div>
                </div>

                {/* <div className='sm:w-full md:w-2/6 xl:w-1/6'>
                    <h3 className='text-gray-100'>Legals</h3>

                    <div className='flex flex-col gap-2 pt-4'>
                        <Link href={""} className='text-gray-500 hover:text-white transition-all duration-300 ease-in-out text-sm'>Refund Policy</Link>
                        <Link href={""} className='text-gray-500 hover:text-white transition-all duration-300 ease-in-out text-sm'>Terms & Conditions</Link>
                        <Link href={""} className='text-gray-500 hover:text-white transition-all duration-300 ease-in-out text-sm'>Privacy policy</Link>
                        <Link href={""} className='text-gray-500 hover:text-white transition-all duration-300 ease-in-out text-sm'>Brand Kit</Link>
                    </div>
                </div> */}


                <div className='w-full xl:w-1/6'>
                    <h3 className='text-gray-100'>Newsletter</h3>

                    <form className='px-6 py-3 bg-gray-200 flex items-center rounded-md mt-4 w-full'>
                        <div className='flex items-center gap-2 w-[90%]'>
                            <MdOutlineEmail className='text-gray-500' />

                            <input type="email" placeholder='Enter your email' className='text-sm bg-transparent outline-none border-none w-full' />

                        </div>

                        <div className='w-[10%] px-2 py-0 bg-gray-200'>
                            <div className='w-full'>
                                <BsFillSendFill width={80} height={80} className='text-black mr-2 w-[20px] md:w-[15px] h-[20px] text-3xl' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer