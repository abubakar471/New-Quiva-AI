import React from 'react'
import CustomerReviewCard from './CustomerReviewCard'

const CustomerReview = () => {
    const reviews = [
        {
            id: 1,
            name: 'Kocourek',
            image: '/assets/images/testimonial-01.png',
            role: 'Customer',
            review: "Customer support always helpful and did exactly what I needed! Everyone was very kind and responded quickly.I got what I requested - an AI Chatbot that is working exactly how I wanted it - and it's affordable!",
            socialLink: "/"
        },
        {
            id: 2,
            name: 'ukacho',
            image: '/assets/images/testimonial-02.png',
            role: 'Customer',
            review: "Great service with an exceptional owner who has a heart of gold. Remarkably, 50% of their payments go to charity.",
            socialLink: "/"
        },
        {
            id: 3,
            name: 'PortalMusic',
            image: '/assets/images/testimonial-03.png',
            role: 'Customer',
            review: "Great service with an exceptional owner who has a heart of gold. Remarkably, 50% of their payments go to charity.",
            socialLink: "/"
        }
    ]
    return (
        <div className='relative min-h-[50vh] flex flex-col items-center justify-center pb-20 border-b border-gray-400/10'>
            <div className='text-center pt-24 pb-14'>
                <h3 className='text-3xl md:text-4xl lg:text-5xl text-white pb-6 font-bold text-center w-[70%] mx-auto'>
                    What clients say about Quiva
                </h3>

                <p className='w-[70%] mx-auto text-md text-gray-400'>
                    Our company is comprised of people who make bold choices for our clients and the security sector. It&apos;s in our DNA to push our limits and make bold changes.
                </p>
            </div>
            <div className='flex items-center justify-center gap-x-20 gap-y-10 w-[90%] lg:w-[70%] mx-auto flex-wrap'>
                {
                    reviews?.map((_, i) => (
                        <CustomerReviewCard item={_} key={_} />
                    ))
                }
            </div>
        </div>
    )
}


export default CustomerReview