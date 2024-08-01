import React from 'react'
import WhyTrustUsCardContainer from './WhyTrustUsCardContainer'

const WhyTrustUs = () => {
    return (
        <div className='pb-36 pt-16'>
            {/* <div className='w-full flex items-center justify-center'>
                <div className="px-6 py-3 rounded-full bg-green-500/5 text-[12px] text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all flex items-center gap-2">
                    Experience the future of AI with Quiva AI
                </div>
            </div> */}

            <div className="pt-8 flex items-center justify-center flex-col gap-6 px-4 lg:px-0">
                <h3 className="font-bold text-5xl text-center leading-[4rem]">Why Trust Us?</h3>
                <p className="text-center w-[90%] md:w-[40%] mx-auto text-gray-400 leading-[1.5rem]">
                    Choosing Quiva AI means partnering with a leader in AI technology, committed to excellence, security, and innovation. Here’s why you can trust us
                </p>
            </div>


            <div className='pt-16'>
                <WhyTrustUsCardContainer />
            </div>
        </div>
    )
}

export default WhyTrustUs