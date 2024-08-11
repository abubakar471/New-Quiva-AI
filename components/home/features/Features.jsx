"use client"

import { MdElectricBolt } from "react-icons/md";
import { GiFlatStar } from "react-icons/gi";
import { FaStarOfLife } from "react-icons/fa";
import { GoNorthStar } from "react-icons/go";
import React from 'react'
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { useState, useEffect } from 'react';

const Features = () => {
    const [circles, setCircles] = useState([]);
    useEffect(() => {
        const createCircles = () => {
            const numCircles = 70; // Adjust the number of circles
            const newCircles = [];
            for (let i = 0; i < numCircles; i++) {
                const size = Math.random() * 20 + 5; // Adjust circle size range
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                const opacity = Math.random() * 0.1 + 0.01; // Lower opacity
                newCircles.push({ size, x, y, opacity });
            }
            setCircles(newCircles);
        };

        createCircles();
    }, []);

    return (
        <div className="pb-20 !overflow-y-hidden h-full" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <div className='w-full flex items-center justify-center'>
                <div className="px-6 py-3 rounded-full bg-green-500/5 text-sm text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all flex items-center gap-2">
                    <GoNorthStar className="text-[#20BE72]" />
                    Key Features
                    <GoNorthStar className="text-[#20BE72]" />
                </div>
            </div>

            <div className="pt-8 flex items-center justify-center flex-col gap-6 px-4 lg:px-0">
                <h3 className="font-bold text-5xl md:text-4xl text-center leading-[4rem]">Quiva Is Faster And Smarter.</h3>
                <p className="text-center w-[90%] md:w-[50%] mx-auto text-gray-400 leading-[1.5rem]">
                    Quiva AI is Faster and Smarter. Designed to seamlessly integrate into any platform, Quiva AI leverages advanced technology to deliver rapid, intelligent responses.
                </p>
            </div>

            <div className="py-10 relative" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <div className="w-[80%] md:w-[70%] mx-auto min-h-[50vh] rounded-xl bg-gradient-to-r from-white/5 to-[#20BE72]/20 text-sm text-white backdrop-blur-sm border border-white/10 hover:backdrop-blur-md transition-all py-10 px-10 flex flex-wrap lg:flex-nowrap items-center gap-10 z-20 relative">
                    <div className="w-full lg:w-[70%] xl:w-[80%] mx-auto">
                        <h3 className="text-2xl text-white text-left flex items-center gap-2">Powerful Features of Quiva AI <MdElectricBolt /></h3>

                        <p className="text-gray-400 text-md pt-6 w-full xl:w-[80%]">
                            Quiva AI is a versatile API designed to integrate seamlessly into any platform, offering advanced features to enhance user interactions. Its Text to Speech transforms written content into natural-sounding audio, improving accessibility and engagement. The Training Area allows users to refine and customize the AI’s performance, while Image Generation and Image Reader features enable the creation and analysis of visual content.
                        </p>

                        <p className="text-gray-400 text-md pt-6 w-full xl:w-[80%]">
                            Quiva AI&apos;s capabilities extend beyond text and image processing. Our platform offers robust Natural Language Processing (NLP) tools for tasks such as text classification, entity extraction, and topic modeling. Additionally, Quiva AI excels in data analysis, providing actionable insights through advanced statistical modeling and machine learning techniques.
                        </p>

                        <div className="mt-12 w-full">
                            <Link href={"#"} className="bg-[#20BE72] hover:bg-[#21945c] transition-all duration-300 ease-in-out mt-4 px-8 py-4 rounded-lg text-md flex items-center w-fit gap-2 group ">
                                Get Started Now
                                <FiArrowUpRight className="text-white text-xl group-hover:rotate-[45deg] transition-all duration-300 ease-in-out group-hover:scale-110" />
                            </Link>
                        </div>

                        <div className="flex items-center justify-between flex-wrap pt-10 w-full xl:w-[50%]">
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

                    <div className="absolute inset-0 filter blur-sm -z-10">
                        {circles.map((circle, index) => (
                            <div
                                key={index}
                                className="absolute rounded-full"
                                style={{
                                    left: `${circle.x}%`,
                                    top: `${circle.y}%`,
                                    width: `${circle.size}px`,
                                    height: `${circle.size}px`,
                                    opacity: circle.opacity,
                                    backgroundColor: '#20BE72',
                                }}
                            />
                        ))}
                    </div>
                </div>


            </div>

            <div className="w-[80%] md:w-[70%] mx-auto min-h-[20vh] flex gap-10 flex-wrap lg:flex-nowrap">
                <div className="w-full lg:w-3/6 min-h-[200px] rounded-xl bg-gradient-to-r from-transparent from-10% to-[#29ec74]/10 text-sm text-white backdrop-blur-sm border border-white/10 hover:bg-white/5 hover:backdrop-blur-md transition-all py-10 px-10" data-aos="zoom-in-right">
                    <ul className="pt-0 list-disc">
                        <li className="bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 text-transparent text-4xl font-bold">Innovation</li>

                        <li className="text-gray-400 pt-4">
                            Quiva AI is at the forefront of AI innovation, continually advancing the capabilities of artificial intelligence to deliver smarter, more efficient solutions.
                        </li>

                        <li className="text-gray-400 pt-4">
                            Quiva AI is at the forefront of pushing the boundaries of artificial intelligence. Our unwavering commitment to innovation drives us to develop cutting-edge solutions that redefine industry standards. We are dedicated to harnessing the full potential of AI to create intelligent systems that deliver exceptional value and transformative results.
                        </li>

                        <li className="text-gray-400 pt-4">
                            Through relentless research and development, we are committed to staying ahead of the curve and delivering groundbreaking AI solutions that empower businesses and individuals to achieve their goals.
                        </li>
                    </ul>
                </div>

                <div className="w-full lg:w-3/6 min-h-[200px] rounded-xl bg-gradient-to-r from-transparent from-10% to-[#29ec74]/10 text-sm text-white backdrop-blur-sm border border-white/10 hover:bg-white/5 hover:backdrop-blur-md transition-all py-10 px-10" data-aos="zoom-in-right" data-aos-delay="400">
                    <ul className="pb-8 list-disc">
                        <li className="bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 text-transparent text-4xl font-bold">
                            Custom Plans
                        </li>

                        <li className="text-gray-400 pt-4">
                            Quiva AI offers Custom Plans that cater to users with specific needs and requirements beyond the standard offerings
                        </li>

                        <li className="text-gray-400 pt-4">
                            offer comprehensive Custom Plans designed to address specific requirements beyond our standard packages. Our team of AI experts will collaborate closely with you to understand your goals and develop a tailored solution that maximizes the value of our technology.
                        </li>

                        <li className="text-gray-400 pt-4">
                            Whether you require specialized features, increased processing power, or dedicated support, our Custom Plans provide the flexibility and scalability to meet your exact needs.
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Features