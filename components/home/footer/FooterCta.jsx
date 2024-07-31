import React from 'react'
import { GoNorthStar } from 'react-icons/go'
import { MdElectricBolt } from "react-icons/md";
import { GiFlatStar } from "react-icons/gi";
import { FaStarOfLife } from "react-icons/fa";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const FooterCta = () => {
    return (
        <div style={{
            background: `url('/assets/images/footer-cta-3.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat"
        }} className=''>
            <div style={{
                background : 'rgba(0,0,0,0.6)',
                backdropFilter : 'blur(50px)',
                color : 'white',
                width : '100%',
                height : '100%',
                boxShadow : '0px 0px 16px 0px rgba(0,0,0,0.5px)',
                padding : '80px 0'
            }}>
                <div className='w-[90%] mx-auto md:w-full flex items-center justify-center'>
                    <div className="px-6 py-3 rounded-full bg-green-500/5 text-sm text-center text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all flex items-center gap-2">
                        <GiFlatStar className="text-[#20BE72]" />
                        Empower Your Business with AI Excellence

                        <GiFlatStar className="text-[#20BE72]" />
                    </div>
                </div>

                <div className="pt-8 flex items-center justify-center flex-col gap-6 px-4 lg:px-0 pb-4">
                    <h3 className="font-bold text-5xl text-center leading-[4rem]">Take control of your business</h3>
                    <p className="text-center w-[90%] md:w-[50%] text-lg mx-auto text-gray-400 leading-[1.5rem]">
                        Transform your business operations with Quiva AI, designed to deliver unparalleled efficiency and customer satisfaction.
                    </p>

                    <Link href={"#"} className="bg-[#20BE72] hover:bg-[#25925d] mt-4 px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ease-in-out">Get Started <ArrowRight className='text-[#fff]' /></Link>
                </div>
            </div>
        </div>
    )
}

export default FooterCta