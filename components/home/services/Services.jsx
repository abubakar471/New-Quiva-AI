import React from 'react'
import ServicesCarousel from './ServicesCarousel'

const Services = () => {
    return (
        <div >
            <div className='w-full flex items-center justify-center'>
                <div className="px-6 py-3 rounded-full bg-green-500/5 text-[12px] text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all flex items-center gap-2">
                    Experience the future of AI with Quiva AI
                </div>
            </div>

            <div className="pt-8 flex items-center justify-center flex-col gap-6 px-4 lg:px-0">
                <h3 className="font-bold text-5xl text-center leading-[4rem]">What We Provide</h3>
                <p className="text-center w-[90%] md:w-[50%] mx-auto text-gray-400 leading-[1.5rem]">
                    Quiva AI delivers a comprehensive suite of features designed to enhance your AI experience
                </p>
            </div>

            <div className='overflow-hidden w-full flex items-center justify-center pt-16' data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
                <ServicesCarousel />
            </div>
        </div>
    )
}

export default Services