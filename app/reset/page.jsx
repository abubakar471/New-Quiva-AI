
import ResetingForm from '@/components/reset/ResetingForm'
import React from 'react'

const ResetAIPage = () => {
    return (
        <div className='flex flex-col items-center min-h-screen w-full relative'>
            <div className="xl:inline-block absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_400px_at_10%_0px,#05522d,transparent)] xl:bg-[radial-gradient(circle_500px_at_10%_100px,#05522d,transparent)] ">
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_100px_at_10%_0px,#05522d,transparent)] xl:bg-[radial-gradient(circle_500px_at_90%_900px,#05522d,transparent)] "></div>
            <div className='pt-20'>
                <ResetingForm />
            </div>
        </div>
    )
}

export default ResetAIPage