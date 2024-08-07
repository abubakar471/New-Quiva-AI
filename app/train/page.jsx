"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdModelTraining } from "react-icons/md";
import { FaInfoCircle, FaTimes } from "react-icons/fa";

const TrainAIPage = () => {
  const [showGuideModal, setShowGuideModal] = useState(false);

  return (
    <div className='flex flex-col items-center min-h-screen w-full relative'>
      <div className="xl:inline-block absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_400px_at_10%_0px,#05522d,transparent)] xl:bg-[radial-gradient(circle_500px_at_10%_100px,#05522d,transparent)] "></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_100px_at_10%_0px,#05522d,transparent)] xl:bg-[radial-gradient(circle_500px_at_90%_900px,#05522d,transparent)] "></div>

      <div className='pt-20'>
        <div className='p-10 rounded-3xl relative flex flex-col gap-y-4 w-full md:w-[450px]'>
          <div className='w-full flex items-center justify-center'>
            <div className='rounded-xl bg-green-500/5 text-[12px] text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all p-2 shadow-xl shadow-green-500/10 w-fit'>
              <Image src={`/assets/images/logo.png`} alt="logo" width={40} height={40} />
            </div>
          </div>

          <h3 className='text-4xl text-center text-gray-400 font-bold pt-4'>
            Train Your Quiva AI
          </h3>

          <form className='pt-10 flex flex-col gap-y-4 relative'>
            <div className='flex flex-col gap-y-2 relative'>
              <p className='text-sm flex text-gray-300 gap-2'>Username <span className='text-green-500 text-lg'>*</span></p>
              <input type="text" placeholder='Eg: QuivaGPT' className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out' />
            </div>

            <div className='flex flex-col gap-y-2 relative'>
              <p className='text-sm flex text-gray-300 gap-2'>authKey <span className='text-green-500 text-lg'>*</span></p>
              <input type="text" placeholder='Eg: asfnwejnWQtn&525$...' className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out' />
            </div>

            <div className='flex flex-col gap-y-2 relative'>
              <p className='text-sm flex text-gray-300 gap-2'>Training Data <span className='text-green-500 text-lg'>*</span></p>
              <input type="text" placeholder='Hey being an ai assistant you have to...' className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out' />
              <button
                type="button"
                className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-500 text-white rounded-full p-2 shadow-lg'
                onClick={() => setShowGuideModal(true)}
              >
                <FaInfoCircle className='text-xl' />
              </button>
            </div>

            <button type='submit' className='backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all p-2 shadow-xl shadow-green-500/10 w-full text-green-400 rounded-full flex gap-2 items-center justify-center'>
              Train
              <MdModelTraining className='w-[20px] h-[20px]' />
            </button>

            <div className='flex items-center flex-wrap gap-2 text-gray-400 text-center justify-center text-sm w-full pt-4'>
              Want to reset your Quiva AI?
              <Link href={"/reset"} className='text-green-400'>Reset AI</Link>
            </div>
          </form>
        </div>

        {/* Guide Modal */}
        {showGuideModal && (
          <div className='fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center'>
            <div className='bg-gray-800 text-white p-6 rounded-lg w-[80%] max-w-3xl relative'>
              <button className='absolute top-3 right-3 text-gray-400' onClick={() => setShowGuideModal(false)}>
                <FaTimes />
              </button>
              <h4 className='font-bold text-xl'>How to Create Training Data</h4>
              <p className='mt-2'>1. Be Specific: Include clear instructions and examples for the AI.</p>
              <p>2. Be Concise: Keep the training data focused and relevant to the task.</p>
              <p>3. Be Diverse: Provide various examples to help the AI learn effectively.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainAIPage;
