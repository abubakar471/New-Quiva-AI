import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";


const CustomerReviewCard = ({ item }) => {
    return (
        <div className='w-[400px] min-h-[200px] bg-white/5 text-sm text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all px-10 py-4 rounded-2xl'>
            <div className='w-full flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <Image src={`${item?.image}`} alt={`${item?.name}`} width={120} height={120} className='w-[50px] h-[50px] rounded-full' />

                    <div className='flex flex-col gap-2'>
                        <h2>{item?.name}</h2>
                        <p className="bg-clip-text bg-gradient-to-r from-[#20BE72] to-yellow-400 text-transparent">Customer</p>
                    </div>
                </div>

                <Link href={`${item?.socialLink}`}>
                    <FaXTwitter />
                </Link>
            </div>

            <div className='pt-4 text-gray-400 text-sm leading-normal'>
                &quot;{item?.review}&ldquo;
            </div>
        </div>
    )
}

export default CustomerReviewCard