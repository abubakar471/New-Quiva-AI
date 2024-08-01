import React from 'react'
import FAQCard from './FAQCard'

const FAQ = () => {
    const data = {
        first: [
            {
                title: "What is Quiva?",
                description: "Quiva AI is a platform that provides intelligent AI solutions, including AI bots and automation tools, designed to enhance business operations and customer interactions."
            },
            {
                title: "What are the benefits of using Quiva AI?",
                description: "Quiva AI helps businesses improve efficiency, reduce costs, and enhance customer satisfaction through intelligent automation, real-time analytics, and customizable AI bots."
            },
            {
                title: "How can Quiva AI help my business?",
                description: "Quiva AI can help your business by automating repetitive tasks, improving response times in customer service, providing valuable data insights, and enhancing overall operational efficiency."
            }
        ],
        second: [
            {
                title: "Are Quiva AI's solutions customizable?",
                description: "Yes, Quiva AI offers customizable AI bots that can be tailored to meet your specific business needs, whether it's for customer support, marketing, or internal operations."
            },
            {
                title: "How easy is it to integrate Quiva AI with our existing systems?",
                description: "Quiva AI is designed to integrate seamlessly with various platforms and systems. Our team provides support throughout the integration process to ensure a smooth transition."
            },
            {
                title: "Is Quiva AI affordable for small businesses?    ",
                description: "Yes, Quiva AI offers competitive pricing plans that are designed to be affordable for businesses of all sizes, including startups and small businesses."
            }
        ]
    }

    return (
        <div className='py-20 border-t border-gray-800'>
            <div className='w-full flex items-center justify-center'>
                <div className="px-6 py-3 rounded-full bg-green-500/5 text-[12px] text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all flex items-center gap-2">
                    Know About Us
                </div>
            </div>

            <div className="pt-8 flex items-center justify-center flex-col gap-6 px-4 lg:px-0">
                <h3 className="font-bold text-5xl text-center leading-[4rem] text-white">FAQs About Quiva AI</h3>
            </div>

            <div className='pt-20 w-[80%] md:w-[70%] lg:w-[60%] mx-auto min-h-[50vh] flex gap-10 flex-wrap lg:flex-nowrap'>
                <div className='w-full lg:w-1/2 flex flex-col gap-y-6'>
                    {
                        data?.first?.map((_, i) => (
                            <FAQCard item={_} key={i} />
                        ))
                    }
                </div>

                <div className='w-full lg:w-1/2 flex flex-col gap-y-6'>
                    {
                        data?.second?.map((_, i) => (
                            <FAQCard item={_} key={i} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FAQ