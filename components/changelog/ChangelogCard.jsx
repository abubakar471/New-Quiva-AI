import Image from 'next/image'
import React from 'react'

const ChangelogCard = ({ item }) => {
    return (
        <div className='flex items-center gap-10 flex-wrap xl:flex-nowrap px-4 md:px-10'>
            <div className='w-full xl:w-1/3'>
                <Image src={`${item?.image}`} alt={`${item?.title}`} width={1000} height={1000} className='w-full h-[220px] object-cover rounded-2xl' />
            </div>
            <div className='w-full xl:w-2/3 flex flex-col gap-y-2'>
                <h2 className='text-gray-200 text-xl md:text-2xl xl:text-4xl font-bold'>{item?.title}</h2>
                <p className='text-gray-400 text-sm'>Released : {item?.date}</p>
                <p className='text-gray-200 text-sm leading-loose'>
                    {
                        item?.content
                    }
                </p>
            </div>
        </div>
    )
}

export default ChangelogCard