import React from 'react'

const NewsletterForm = () => {
    return (
        <div className='z-50'>
            <form className='flex items-center flex-wrap lg:flex-nowrap gap-4'>
                <input type="text" placeholder='you@workmail.com' className='py-3 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out' />

                <button type='submit' className='w-full lg:w-fit bg-gradient-to-b from-green-400 to-[#0e8148] px-10 py-2 rounded-md border-none outline-none text-white text-sm'>
                    Subscribe
                </button>
            </form>
        </div>
    )
}

export default NewsletterForm