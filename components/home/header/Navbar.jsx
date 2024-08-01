import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
    return (
        <div className='w-full bg-transparent'>
            <div className='w-[80%] mx-auto flex items-center justify-between py-0 md:py-4'>
                <div>
                    <Link href={"/"}>
                        <Image src={"/assets/images/logo.png"} width={100} height={100} alt='Quiva AI' className='w-[60px] h-[60px]' />
                    </Link>
                </div>

                <div className='hidden md:flex items-center gap-8 text-white'>
                    <Link href={"/about-us"} className='hover:text-gray-500 transition-all duration-300 ease-in-out'>About Us</Link>
                    {/* <Link href={"#"} className='hover:text-gray-500 transition-all duration-300 ease-in-out'>Overview</Link> */}
                    <Link href={"/pricing"} className='hover:text-gray-500 transition-all duration-300 ease-in-out'>Pricing</Link>
                    <Link href={"/changelog"} className='hover:text-gray-500 transition-all duration-300 ease-in-out'>Changelog</Link>
                </div>

                <div className='hidden md:flex items-center gap-4'>
                    <Link href={"/train"} className='bg-gradient-to-r from-[#20BE72] to-yellow-400 text-white px-8 py-2 md:py-2 rounded-full'>Train AI</Link>
                </div>

                <div className='flex md:hidden'>
                    <MobileNavbar />
                </div>
            </div>
        </div>
    )
}


export default Navbar