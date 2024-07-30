import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
    return (
        <div className='w-full bg-transparent'>
            <div className='w-[80%] mx-auto flex items-center justify-between py-4'>
                <div>
                    <Image src={"/assets/images/logo.png"} width={100} height={100} alt='Quiva AI' className='w-[60px] h-[60px]' />
                </div>

                <div className='hidden md:flex items-center gap-8 text-white'>
                    <Link href={"#"}>About</Link>
                    <Link href={"#"}>Overview</Link>
                    <Link href={"#"}>Pricing</Link>
                    <Link href={"#"}>Changelog</Link>
                </div>

                <div className='hidden md:flex items-center gap-4'>
                    <Link href={""} className='text-white hover:text-black bg-gradient-to-r from-[#20BE72] to-yellow-400 hover:from-yellow-400 hover:to-[#20BE72] px-8 py-2 md:py-3 rounded-full transition-all duration-300 ease-in-out'>Train AI</Link>
                </div>

                <div className='flex md:hidden'>
                    <MobileNavbar />
                </div>
            </div>
        </div>
    )
}


export default Navbar