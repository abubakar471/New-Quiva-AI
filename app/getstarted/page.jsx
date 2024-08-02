import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdModelTraining } from "react-icons/md";

const BuyNowPage = () => {
    return (
        <div className='flex flex-col items-center min-h-screen w-full relative'>
            {/* Background Gradient */}
            <div className="xl:inline-block absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_400px_at_10%_0px,#0d6e49,transparent)] xl:bg-[radial-gradient(circle_500px_at_10%_100px,#0d6e49,transparent)]"></div>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_100px_at_10%_0px,#0d6e49,transparent)] xl:bg-[radial-gradient(circle_500px_at_90%_900px,#0d6e49,transparent)]"></div>

            {/* Content Area */}
            <div className='pt-20'>
                <div className='p-10 rounded-3xl relative flex flex-col gap-y-4 w-full md:w-[450px] bg-green-50'>
                    <div className='w-full flex items-center justify-center'>
                        <div className='rounded-xl bg-green-500/5 text-[12px] text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all p-2 shadow-xl shadow-green-500/10 w-fit'>
                            <Image src={`/assets/images/logo.png`} alt="logo" width={40} height={40} />
                        </div>
                    </div>

                    <h3 className='text-4xl text-center text-gray-600 font-bold pt-4'>
                        Buy Now
                    </h3>

                    <form className='pt-10 flex flex-col gap-y-4'>
                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm flex text-gray-600 gap-2'>Username <span className='text-green-600 text-lg'>*</span></p>
                            <input type="text" placeholder='Eg: QuivaGPT' className='py-2 px-4 w-full text-sm text-gray-600 placeholder:text-gray-600/50 bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-green-600/30 border-none transition-all duration-300 ease-in-out' />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm flex text-gray-600 gap-2'>AuthKey <span className='text-green-600 text-lg'>*</span></p>
                            <input type="text" placeholder='Eg: asfnwejnWQtn&525$...' className='py-2 px-4 w-full text-sm text-gray-600 placeholder:text-gray-600/50 bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-green-600/30 border-none transition-all duration-300 ease-in-out' />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm flex text-gray-600 gap-2'>Training Data <span className='text-green-600 text-lg'>*</span></p>
                            <input type="text" placeholder='Hey being an AI assistant you have to...' className='py-2 px-4 w-full text-sm text-gray-600 placeholder:text-gray-600/50 bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-green-600/30 border-none transition-all duration-300 ease-in-out' />
                        </div>

                        <button type='submit' className='bg-green-500 text-white rounded-full flex gap-2 items-center justify-center py-2 px-4 shadow-lg hover:bg-green-600 transition-all'>
                            Buy Now
                            <MdModelTraining className='w-[20px] h-[20px]' />
                        </button>

                        <div className='flex items-center flex-wrap gap-2 text-gray-600 text-center justify-center text-sm w-full pt-4'>
                            Want to reset your Quiva AI?
                            <Link href={"/reset"} className='text-green-500'>Reset AI</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BuyNowPage;
