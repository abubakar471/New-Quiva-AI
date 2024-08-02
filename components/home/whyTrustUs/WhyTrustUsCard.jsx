import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const WhyTrustUsCard = ({ item }) => {
    return (
        <div className='flex flex-col gap-y-4 items-center justify-center' data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine">
            <div className='flex items-center justify-center rounded-xl bg-green-500/5 text-[12px] backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all p-4 w-fit text-center'>
                {
                    item?.icon
                }
            </div>

            <h3 className='md:text-lg xl:text-xl pt-4 text-center'>{item?.title}</h3>

            <p className='text-gray-400 text-sm text-center w-[60%]'>
                {item?.description}
            </p>

            <div className='pt-8'>
                <Link href={`${item?.gotoUrl}`} className="flex items-center gap-2 text-white transition-all duration-300 ease-in-out hover:text-green-500 group hover:translate-x-2">
                    Learn More <ArrowRight className="text-green-500 group-hover:text-green-500" />
                </Link>
            </div>
        </div>
    )
}

export default WhyTrustUsCard