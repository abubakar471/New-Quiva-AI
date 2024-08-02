import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdPayment } from 'react-icons/md';

const BuyNowPage = () => {
    return (
        <div className='flex flex-col items-center min-h-screen w-full relative pt-10 pb-24'>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_400px_at_10%_0px,#004d00,transparent)] xl:bg-[radial-gradient(circle_500px_at_10%_100px,#004d00,transparent)] ">
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_100px_at_10%_0px,#004d00,transparent)] xl:bg-[radial-gradient(circle_500px_at_90%_900px,#004d00,transparent)] "></div>
            <div className='pt-20'>
                                <div className='p-10 rounded-3xl relative flex flex-col gap-y-4 w-full md:w-[600px] bg-transparent shadow-lg shadow-green-500'>
                                        <div className='w-full flex items-center justify-center'>
                        <div className='rounded-xl bg-green-500/5 text-[12px] text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all p-2 shadow-xl shadow-green-500/10 w-fit'>
                            <Image src={`/assets/images/logo.png`} alt="Quiva AI" width={40} height={40} />
                        </div>
                    </div>

                    <h3 className='text-4xl text-center text-gray-400 font-bold pt-4'>
                        Buy Now
                    </h3>

                    <form className='pt-10 flex flex-col gap-y-4'>
                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm flex text-gray-300 gap-2'>Name <span className='text-green-500 text-lg'>*</span></p>
                            <input type="text" placeholder='Eg: John Doe' className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out' />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm flex text-gray-300 gap-2'>Email ID <span className='text-green-500 text-lg'>*</span></p>
                            <input type="email" placeholder='Eg: john.doe@example.com' className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out' />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm flex text-gray-300 gap-2'>Company Name <span className='text-green-500 text-lg'>*</span></p>
                            <input type="text" placeholder='Eg: Doe Enterprises' className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out' />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm flex text-gray-300 gap-2'>Website (Optional)</p>
                            <input type="url" placeholder='Eg: www.doeenterprises.com' className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out' />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm flex text-gray-300 gap-2'>Plan <span className='text-green-500 text-lg'>*</span></p>
                            <select className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out'>
                                <option value="">Select Plan</option>
                                <option value="essential">Essential</option>
                                <option value="premium">Premium 🌟</option>
                                <option value="plus">Plus</option>
                            </select>
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm flex text-gray-300 gap-2'>Billing Cycle <span className='text-green-500 text-lg'>*</span></p>
                            <select className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out'>
                                <option value="">Select Billing Cycle</option>
                                <option value="monthly">Monthly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm flex text-gray-300 gap-2'>Description <span className='text-green-500 text-lg'>*</span></p>
                            <textarea placeholder='Describe your needs or any special requests...' className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out' rows="4"></textarea>
                        </div>

                        <button type='submit' className='backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all p-2 shadow-xl shadow-green-500/10 w-full text-green-400 rounded-full flex gap-2 items-center justify-center'>
                            Buy Now
                            <MdPayment className='w-[20px] h-[20px]' />
                        </button>

                        <div className='flex items-center flex-wrap gap-2 text-gray-400 text-center justify-center text-sm w-full pt-4'>
                            Need help with your purchase?
                            <Link href={"/contact"} className='text-green-400'>Contact Us</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BuyNowPage;
