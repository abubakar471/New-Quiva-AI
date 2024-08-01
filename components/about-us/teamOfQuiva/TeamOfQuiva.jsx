import React from 'react'
import TeamCard from './TeamCard'

const TeamOfQuiva = () => {
    const team = [
        {
            name: 'Mohammad N.',
            image: '/assets/images/navneet.jpg',
            role: 'CEO & Founder'
        },
        {
            name: 'Mohammad N.',
            image: '/assets/images/navneet.jpg',
            role: 'CEO & Founder'
        }, {
            name: 'Mohammad N.',
            image: '/assets/images/navneet.jpg',
            role: 'CEO & Founder'
        }, {
            name: 'Mohammad N.',
            image: '/assets/images/navneet.jpg',
            role: 'CEO & Founder'
        }, {
            name: 'Mohammad N.',
            image: '/assets/images/navneet.jpg',
            role: 'CEO & Founder'
        }, {
            name: 'Mohammad N.',
            image: '/assets/images/navneet.jpg',
            role: 'CEO & Founder'
        }, {
            name: 'Mohammad N.',
            image: '/assets/images/navneet.jpg',
            role: 'CEO & Founder'
        }, {
            name: 'Mohammad N.',
            image: '/assets/images/navneet.jpg',
            role: 'CEO & Founder'
        }
    ]
    return (
        <div className='relative min-h-[80vh] flex flex-col items-center justify-center pb-20'>
            <div className="xl:inline-block absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_400px_at_10%_0px,#05522d,transparent)] xl:bg-[radial-gradient(circle_500px_at_10%_700px,#05522d,transparent)] ">
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_100px_at_10%_0px,#05522d,transparent)] xl:bg-[radial-gradient(circle_500px_at_90%_700px,#05522d,transparent)] ">
            </div>
            <div className='text-center pt-24 pb-14'>
                <h3 className='text-3xl md:text-4xl lg:text-5xl text-white pb-6 font-bold'>
                    Meet our experts
                </h3>

                <p className='w-[80%] mx-auto text-md text-gray-400'>
                    Meet the talented individuals who bring creativity, expertise, and dedication to every project at Quivox Studio.
                </p>
            </div>
            <div className='flex items-center justify-between gap-x-20 gap-y-16 w-[90%] lg:w-[95%] xl:w-[70%] mx-auto flex-wrap'>
                {
                    team?.map((_, i) => (
                        <TeamCard key={i} item={_} />
                    ))
                }
            </div>
        </div>
    )
}

export default TeamOfQuiva