import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full bg-transparent'>
            <div className='w-[80%] mx-auto flex items-center justify-between py-4'>
                <div>
                    <Image src={"/assets/images/logo.png"} width={100} height={100} alt='Quiva AI' className='w-[60px] h-[60px] invert' />
                </div>

                <div className='flex items-center gap-8'>
                    <Link href={"#"}>About</Link>
                    <Link href={"#"}>Overview</Link>
                    <Link href={"#"}>Pricing</Link>
                    <Link href={"#"}>Changelog</Link>
                </div>

                <div>
                    Logo
                </div>
            </div>
        </div>
    )
}

export default Navbar