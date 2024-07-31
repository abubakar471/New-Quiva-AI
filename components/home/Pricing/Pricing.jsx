"use client";

import Link from 'next/link';
import React, { useState } from 'react'
import { MdElectricBolt } from "react-icons/md";
import { GiFlatStar } from "react-icons/gi";
import { FaStarOfLife } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const Pricing = () => {
    const [selectedMonthly, setSelectedMonthly] = useState(true);
    const [selected, setSelected] = useState(false);

    const pricingData = [
        {
            id: 0,
            plan: "Essential",
            description: "Perfect for startups and small businesses.",
            monthly: "6.99",
            yearly: "5.99",
            gotoUrl: "/",
            features: [
                {
                    name: 'Custom Trained upto 3000 Char'
                },
                {
                    name: 'Per Min 40 Message'
                },
                {
                    name: 'Chat History'
                },
                {
                    name: 'Image Generation'
                }
            ]

        },
        {
            id: 1,
            plan: "Premium",
            description: "Priority support and tailored solutions.",
            monthly: "6.99",
            yearly: "5.99",
            gotoUrl: "/",
            features: [
                {
                    name: 'Custom Trained Upto 10,000 Char'
                },
                {
                    name: 'Dedicated Support'
                },
                {
                    name: 'Per Min 100 Messages'
                },
                {
                    name: 'Chat History'
                },
                {
                    name: 'Image Generation'
                },
                {
                    name: 'Image Reader'
                },
                {
                    name: 'text-to-speech'
                },
                {
                    name: 'Editor Access'
                }
            ]

        },
        {
            id: 2,
            plan: "Plus",
            description: "Custom Trained Upto 5000 Char",
            monthly: "6.99",
            yearly: "5.99",
            gotoUrl: "/",
            features: [
                {
                    name: 'Custom Trained upto 3000 Char'
                },
                {
                    name: 'Dedicated Support'
                },
                {
                    name: 'Per Min 80 Message'
                },
                {
                    name: 'Chat History'
                },
                {
                    name: 'Image Generation'
                },
                {
                    name: 'Image Reader'
                }
            ]

        },
    ]

    const handleSwitchChange = (checked) => {
        console.log(checked)
        setSelectedMonthly(!checked);
        // Perform other actions, like fetching data, updating UI, etc.
    };

    return (
        <div style={{
            background: `url('/assets/images/abstract-2.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
        }} className=''>
            <div style={{
                background: '#08121D',
                opacity: "0.99",
                backdropFilter: 'blur(50px)',
                color: 'white',
                width: '100%',
                height: '100%',
                boxShadow: '0px 0px 16px 0px rgba(0,0,0,0.5px)',
                padding: '80px 0'
            }}>
                <div className='w-[90%] md:w-full mx-auto'>
                    <h3 className='text-center text-gray-500'>Pricing Plans</h3>

                    <h2 className='sm:w-[90%] w-[80%] lg:w-[40%] mx-auto text-4xl md:text-6xl text-center font-bold text-gray-400 pt-4'>Choose the perfect plan for your needs.</h2>
                </div>

                {/* switch */}
                <div className="flex items-center space-x-4 justify-center pt-10">
                    <Label htmlFor="monthly" className={`${selectedMonthly ? "border-2 border-green-500 bg-green-500 text-white" : "border-2 border-gray-500"} px-4 py-2 rounded-full`}>Monthly</Label>
                    <Switch id="Duration" onCheckedChange={handleSwitchChange} />
                    <Label htmlFor="yearly" className={`${!selectedMonthly ? "border-2 border-green-500 bg-green-500 text-white" : "border-2 border-gray-500"} px-4 py-2 rounded-full`}>Yearly</Label>
                </div>

                <div className='w-[70%] mx-auto flex flex-wrap xl:flex-nowrap gap-4 rounded-3xl bg-white/5 text-sm text-white backdrop-blur-sm border border-white/10 hover:backdrop-blur-md transition-all mt-20 min-h-[50vh]'>
                    {
                        pricingData?.map((_, i) => (
                            <div key={i} className={`w-full h-auto xl:w-1/3 py-10 px-6 ${_?.plan === 'Premium' && "border-2 border-[#20BE72] rounded-xl"} `}>
                                <div className="w-min px-6 py-1 rounded-full bg-green-500/5 text-[12px] text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all flex items-center gap-2">
                                    <FaStarOfLife className="text-[#20BE72]" />
                                    {_?.plan}
                                    <FaStarOfLife className="text-[#20BE72]" />
                                </div>
                                <p className='pt-6'>
                                    <span className='text-gray-400 text-lg'>$</span>
                                    <span className='text-3xl font-bold'>
                                        {
                                            selectedMonthly ? _?.monthly : _?.yearly
                                        }
                                    </span>
                                    <span className='text-gray-400 text-lg'>/mo</span>
                                </p>
                                <p className='text-gray-400 w-[50%] mt-4'>
                                    {
                                        _?.description
                                    }
                                </p>

                                <div className='mt-4 w-full flex items-center justify-center'>
                                    <Link href={`${_?.gotoUrl}`} className='w-full bg-gradient-to-r from-[#20BE72] hover:from-[#3e8664] to-yellow-600 hover:to-yellow-400 transition-all duration-300 ease-in-out text-white px-20 py-2 md:py-2 rounded-full text-center'>Select Plan</Link>
                                </div>

                                <div className='w-full h-[1.5px] my-4 bg-gradient-to-r from-gray-500 via-slate-500 to-transparent' />

                                <div className='flex flex-col gap-y-4 w-[60%] pt-10'>
                                    {
                                        _?.features?.map((item, i) => (
                                            <div key={i}>
                                                <div className='flex gap-2 items-center'>
                                                    <TiTick className='text-[#20BE72]' />
                                                    <span className='text-gray-400 text-[13px]'>{item?.name}</span>
                                                </div>

                                                <div className='w-full h-[1.5px] my-1 bg-gradient-to-r from-gray-900 via-slate-700 to-transparent' />
                                            </div>
                                        ))
                                    }
                                </div>


                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Pricing