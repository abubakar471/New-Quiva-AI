import React from 'react'


const JoinOurTeamCard = ({ item }) => {
    return (
        <div className={`flex flex-col items-center justify-center gap-y-4 ${item?.id === 2 && "sclae-100 lg:scale-125"} border-4 border-transparent`}>
  
            <div className='rounded-full bg-green-500/5 text-[12px] text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all p-4'>
                {item?.icon}
            </div>

            <div className='text-gray-200 text-lg font-bold'>
                {item?.title}
            </div>

            <div className='text-gray-400 text-sm text-center w-[90%] xl:w-[70%] mx-auto'>
                {item?.content}
            </div>

            
        </div >
    )
}


export default JoinOurTeamCard