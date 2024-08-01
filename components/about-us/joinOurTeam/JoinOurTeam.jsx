import React from 'react'
import { GiBurningPassion } from "react-icons/gi";
import { SlEnergy } from "react-icons/sl";
import { GrAchievement } from "react-icons/gr";
import JoinOurTeamCard from './JoinOurTeamCard';

const JoinOurTeam = () => {
    const data = [
        {
            id: 1,
            title: "Passionate",
            content: "Driven by enthusiasm and dedication, we pour our hearts into every project, ensuring exceptional results and innovative solutions.",
            icon: <GiBurningPassion className='text-white text-2xl' />
        },
        {
            id: 2,
            title: "Energetic",
            content: "With a vibrant and dynamic approach, we bring enthusiasm and vitality to every project, pushing the boundaries of creativity and innovation.",
            icon: <SlEnergy className='text-white text-2xl' />
        }, {
            id: 3,
            title: "Achiever",
            content: "Committed to excellence and results-driven, we strive to surpass goals and deliver outstanding performance in every endeavor.",
            icon: <GrAchievement className='text-white text-2xl' />
        }
    ]
    return (
        <div className='py-16 pb-44 relative'>
         <div className="absolute top-24 left-[50%] right-[50%] -translate-x-1/2 translate-y-1/4 2xl:-translate-y-1/2 w-[400px] h-[800px] rounded-full bg-green-500 blur-lg opacity-10"></div>
         {/* <div className="absolute bottom-2 right-4 w-48 h-48 rounded-xl bg-green-500 blur-lg opacity-50"></div> */}

            <div className='text-center pt-24 pb-14'>
                <h3 className='text-3xl md:text-4xl lg:text-5xl text-white pb-6 font-bold text-center w-[70%] mx-auto'>
                    Join a team of makers
                </h3>

                <p className='w-[85%] md:w-[40%] mx-auto text-md text-gray-400 text-center'>
                    Become a part of our dynamic team of professionals and leverage your skills to create cutting-edge digital solutions
                </p>
            </div>

            <div className='w-[80%] md:w-[50%] xl:w-[70%] mx-auto flex items-center justify-center gap-10 flex-wrap xl:flex-nowrap pt-4'>
                {
                    data?.map((_, index) => (
                        <JoinOurTeamCard key={index} item={_} />
                    ))
                }
            </div>
        </div>
    )
}

export default JoinOurTeam