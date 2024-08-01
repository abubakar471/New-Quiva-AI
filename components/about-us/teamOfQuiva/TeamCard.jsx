import Image from 'next/image'
import React from 'react'

const TeamCard = ({ item }) => {
    return (
        <div className='flex items-center gap-4 w-[80%] lg:w-auto mx-auto  justify-center'>
            <Image src={`${item?.image}`} alt="navneet" width={120} height={120} className="rounded-full w-[60px] h-[60px]" />

            <div className='flex flex-col gap-y-2'>
                <h3 className='text-white text-lg font-bold'>{item?.name}</h3>
                <p className='text-green-500'>{item?.role}</p>
            </div>
        </div>
    )
}

export default TeamCard