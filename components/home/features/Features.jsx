import { MdElectricBolt } from "react-icons/md";
import { GiFlatStar } from "react-icons/gi";
import { FaStarOfLife } from "react-icons/fa";

import { GoNorthStar } from "react-icons/go";
import React from 'react'
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import Image from "next/image";

const Features = () => {
    return (
        <div className="pb-20">
            <div className='w-full flex items-center justify-center'>
                <div className="px-6 py-3 rounded-full bg-green-500/5 text-sm text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all flex items-center gap-2">
                    <GoNorthStar className="text-[#20BE72]" />
                    Key Features
                    <GoNorthStar className="text-[#20BE72]" />
                </div>
            </div>

            <div className="pt-8 flex items-center justify-center flex-col gap-6 px-4 lg:px-0">
                <h3 className="font-bold text-5xl text-center leading-[4rem]">Quiva Is Faster And Smarter.</h3>
                <p className="text-center w-[90%] md:w-[50%] mx-auto text-gray-400 leading-[1.5rem]">
                    Quiva AI is Faster and Smarter. Designed to seamlessly integrate into any platform, Quiva AI leverages advanced technology to deliver rapid, intelligent responses.
                </p>
            </div>

            <div className="py-10">
                <div className="w-[80%] md:w-[70%] mx-auto min-h-[50vh] rounded-xl bg-white/5 text-sm text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all py-10 px-10 flex flex-wrap lg:flex-nowrap items-center gap-10">
                    <div className="pt-16 w-full lg:w-2/5">
                        <h3 className="text-2xl text-white text-left flex items-center gap-2">Powerful Features of Quiva AI <MdElectricBolt /></h3>

                        <p className="text-gray-400 text-md pt-6">
                            Quiva AI is a versatile API designed to integrate seamlessly into any platform, offering advanced features to enhance user interactions. Its Text to Speech transforms written content into natural-sounding audio, improving accessibility and engagement. The Training Area allows users to refine and customize the AI’s performance, while Image Generation and Image Reader features enable the creation and analysis of visual content.
                        </p>

                        <div className="mt-12">
                            <Link href={"#"} className="bg-[#20BE72] mt-4 px-4 py-3 rounded-lg">Get Started Now</Link>
                        </div>

                        <div className="flex items-center justify-between flex-wrap pt-10">
                            <div>
                                <p className="text-gray-400">Monthly Growth</p>
                                <p className="sm:text-xl text-2xl md:text-3xl flex items-center pt-2">
                                    +39% <span><ArrowUp className="text-green-500" /></span>
                                </p>
                            </div>

                            <div className="hidden  md:flex justify-center h-[50px]">
                                <div className="h-full w-px bg-gray-300"></div>
                            </div>

                            <div>
                                <p className="text-gray-400">Yearly Growth</p>
                                <p className="sm:text-xl text-2xl md:text-3xl flex items-center pt-2">
                                    +85% <span><ArrowUp className="text-green-500" /></span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-16 w-full lg:w-3/5">
                        <Image src={`/assets/images/flow-chart.webp`} alt="flow-chart" width={800} height={800} className="w-full rounded-3xl" />
                    </div>
                </div>
            </div>

            <div className="w-[80%] md:w-[70%] mx-auto min-h-[50vh] flex gap-10 flex-wrap lg:flex-nowrap">
                <div className="w-full lg:w-3/6 min-h-[500px] rounded-xl bg-white/5 text-sm text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all py-10 px-10">
                    <div className="w-full h-[250px] bg-white/5 text-sm text-white backdrop-blur-sm border border-white/10 transition-all rounded-2xl flex items-center justify-center">
                        <Image src={`/assets/images/feature-image-02.png`} alt="" width={800} height={800} className="" />
                    </div>


                    <div className="pt-8">
                        <h3 className="bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 text-transparent text-4xl font-bold">Innovation</h3>

                        <p className="text-gray-400 pt-4">
                            Quiva AI is at the forefront of AI innovation, continually advancing the capabilities of artificial intelligence to deliver smarter, more efficient solutions.

                        </p>
                    </div>
                </div>

                <div className="w-full lg:w-3/6 min-h-[500px] rounded-xl bg-white/5 text-sm text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all py-10 px-10">
                    <div className="pb-8">
                        <h3 className="bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 text-transparent text-4xl font-bold">
                            Custom Plans
                        </h3>

                        <p className="text-gray-400 pt-4">
                            Quiva AI offers Custom Plans that cater to users with specific needs and requirements beyond the standard offerings

                        </p>
                    </div>

                    <div className="w-full h-[250px] bg-white/5 text-sm text-white backdrop-blur-sm border border-white/10 transition-all rounded-2xl flex items-center justify-center">
                        <Image src={`/assets/images/feature-image-01.png`} alt="" width={800} height={800} className="w-[300px] object-cover" />
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Features