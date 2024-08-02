import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart } from "react-icons/fa";

const BuyNowPage = () => {
    return (
        <div className='flex flex-col items-center min-h-screen w-full relative'>
            <div className="xl:inline-block absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_400px_at_10%_0px,#ff5722,transparent)] xl:bg-[radial-gradient(circle_500px_at_10%_100px,#ff5722,transparent)]"></div>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_100px_at_10%_0px,#ff5722,transparent)] xl:bg-[radial-gradient(circle_500px_at_90%_900px,#ff5722,transparent)]"></div>
            <div className='pt-20'>
                <div className='p-10 rounded-3xl relative flex flex-col gap-y-4 w-full md:w-[450px] bg-white shadow-lg'>
                    <div className='w-full flex items-center justify-center'>
                        <div className='rounded-xl bg-orange-500/5 text-[12px] text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all p-2 shadow-xl shadow-orange-500/10 w-fit'>
                            <Image src={`/assets/images/logo.png`} alt="logo" width={40} height={40} />
                        </div>
                    </div>

                    <h3 className='text-4xl text-center text-gray-700 font-bold pt-4'>
                        Buy Now
                    </h3>

                    <form className='pt-10 flex flex-col gap-y-4'>
                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm flex text-gray-600 gap-2'>Name <span className='text-orange-500 text-lg'>*</span></p>
                            <input type="text" placeholder='John Doe' className='py-2 px-4 w-full text-sm text-gray-600 placeholder:text-gray-400/50 bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-orange-500/30 border-none transition-all duration-300 ease-in-out' />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm flex text-gray-600 gap-2'>Email <span className='text-orange-500 text-lg'>*</span></p>
                            <input type="email" placeholder='example@example.com' className='py-2 px-4 w-full text-sm text-gray-600 placeholder:text-gray-400/50 bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-orange-500/30 border-none transition-all duration-300 ease-in-out' />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm flex text-gray-600 gap-2'>Payment Details <span className='text-orange-500 text-lg'>*</span></p>
                            <input type="text" placeholder='Credit Card Number' className='py-2 px-4 w-full text-sm text-gray-600 placeholder:text-gray-400/50 bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-orange-500/30 border-none transition-all duration-300 ease-in-out' />
                        </div>

                        <button type='submit' className='backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all p-2 shadow-xl shadow-orange-500/10 w-full text-orange-400 rounded-full flex gap-2 items-center justify-center'>
                            Buy Now
                            <FaShoppingCart className='w-[20px] h-[20px]' />
                        </button>

                        <div className='flex items-center flex-wrap gap-2 text-gray-600 text-center justify-center text-sm w-full pt-4'>
                            Need help? 
                            <Link href={"/support"} className='text-orange-400'>Contact Support</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BuyNowPage;
