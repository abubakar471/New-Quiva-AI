import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { FaLeaf } from "react-icons/fa";
import { FiGitMerge, FiTool, FiUsers, FiWifi } from "react-icons/fi";
import { FiCommand } from "react-icons/fi";
import { FiServer } from "react-icons/fi";
import { FiShield } from "react-icons/fi";


import WhyTrustUsCard from './WhyTrustUsCard';

const WhyTrustUsCardContainer = () => {
    const data = [
        {
            category: {
                name: 'API Authorization',
                features: [
                    {
                        id: 1,
                        title: 'Customizable Endpoints',
                        description: 'Tailor API endpoints to meet specific needs, allowing for precise control over how data is processed and responses are generated.',
                        icon: <FaLeaf className='w-[25px] h-[25px] text-green-500 hover:scale-110 transition-all duration-150' />,
                        gotoUrl: '/'
                    },
                    {

                        id: 2,
                        title: 'Seamless Integration',
                        description: 'Easily integrate with existing systems, applications, and workflows, ensuring smooth and uninterrupted functionality across platforms.',
                        icon: <FiGitMerge className='w-[25px] h-[25px] text-green-500 hover:scale-110 transition-all duration-150' />,
                        gotoUrl: '/'
                    },
                    {

                        id: 3,
                        title: 'Real-Time Data Processing',
                        description: 'Easily integrate with existing systems, applications, and workflows, ensuring smooth and uninterrupted functionality across platforms.',
                        icon: <FiCommand className='w-[25px] h-[25px] text-green-500 hover:scale-110 transition-all duration-150' />,
                        gotoUrl: '/'
                    }
                ]
            }
        },
        {
            category: {
                name: 'User Management',
                features: [
                    {
                        id: 1,
                        title: 'User Authentication',
                        description: 'Allow users to securely log in using various methods like email, username, or social media accounts.',
                        icon: <FiUsers className='w-[25px] h-[25px] text-green-500 hover:scale-110 transition-all duration-150' />,
                        gotoUrl: '/'
                    },
                    {

                        id: 2,
                        title: 'User Data Management',
                        description: 'Ensure compliance with data protection regulations by allowing users to manage their data, including deletion and export options.',
                        icon: <FiServer className='w-[25px] h-[25px] text-green-500 hover:scale-110 transition-all duration-150' />,
                        gotoUrl: '/'
                    },
                    {

                        id: 3,
                        title: 'User Support',
                        description: 'Offer help and support options for users, such as FAQs, knowledge bases, and customer service channels.',
                        icon: <FaLeaf className='w-[25px] h-[25px] text-green-500 hover:scale-110 transition-all duration-150' />,
                        gotoUrl: '/'
                    }
                ]
            }
        },
        {
            category: {
                name: 'Standard Security',
                features: [
                    {
                        id: 1,
                        title: 'Session Management',
                        description: 'Use secure session management practices, such as expiring sessions after a period of inactivity and providing ',
                        icon: <FiWifi  className='w-[25px] h-[25px] text-green-500 hover:scale-110 transition-all duration-150' />,
                        gotoUrl: '/'
                    },
                    {

                        id: 2,
                        title: 'Data Validation',
                        description: 'Validate user input to prevent common security vulnerabilities, such as SQL injection and cross-site scripting (XSS).',
                        icon: <FiTool className='w-[25px] h-[25px] text-green-500 hover:scale-110 transition-all duration-150' />,
                        gotoUrl: '/'
                    },
                    {

                        id: 3,
                        title: 'Regular Security Audits',
                        description: 'Conduct regular security audits and vulnerability assessments to identify and mitigate potential security risks.',
                        icon: <FiShield className='w-[25px] h-[25px] text-green-500 hover:scale-110 transition-all duration-150' />,
                        gotoUrl: '/'
                    }
                ]
            }
        }
    ]
    return (
        <div className='text-white max-w-xs sm:max-w-sm md:max-w-xl xl:max-w-4xl 2xl:max-w-7xl mx-auto bg-[#121B21] rounded-3xl min-h-[50vh] h-auto pt-20'>

            {
                data?.map((_, i) => (
                    <div key={i} className='pb-20' >
                        <div className='pb-12 flex items-center justify-center'>
                            <h3 className='text-center text-white text-2xl rounded-full bg-green-500/5 text-[12px] backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all w-fit px-12'>{_?.category?.name}</h3>
                        </div>
                        <div className='flex flex-wrap xl:flex-nowrap justify-center 2xl:justify-between w-full gap-y-10' >
                            {
                                _?.category?.features?.map((item, index) => (
                                    <WhyTrustUsCard key={index} item={item} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default WhyTrustUsCardContainer