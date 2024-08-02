import Image from 'next/image'
import React from 'react'

const Partners = () => {
    const partners = [
        {
            name: "Partner",
            src: "/assets/images/partner-1.png",
            id: 0
        },
        {
            name: "Partner",
            src: "/assets/images/partner-2.png",
            id: 0
        },
        {
            name: "Partner",
            src: "/assets/images/partner-3.png",
            id: 0
        },
        {
            name: "Partner",
            src: "/assets/images/partner-4.png",
            id: 0
        },
        {
            name: "Partner",
            src: "/assets/images/partner-5.png",
            id: 0
        }
    ]

    return (
        <div className='py-20 w-full flex flex-col items-center justify-center' data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
            <h3 className='text-gray-500 text-[16px]'>Quiva AI Trusted By Great Company</h3>

            <div className='flex items-center justify-center gap-x-10 gap-y-4 md:gap-y-10 flex-wrap'>
                {
                    partners?.map((_, i) => (
                        <Image key={i} src={`${_?.src}`} alt={`${_?.name}`} width={500} height={500} className='w-[150px]' />
                    ))
                }
            </div>
        </div>
    )
}

export default Partners