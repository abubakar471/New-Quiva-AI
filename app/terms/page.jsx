"use client";

import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const TermsOfServicePage = () => {
  return (
    <div style={{
      background: `url('/assets/images/abstract-2.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",
    }} className='min-h-screen'>
      <div style={{
        background: '#111827',
        opacity: "0.98",
        backdropFilter: 'blur(50px)',
        color: 'white',
        width: '100%',
        padding: '80px 0'
      }}>
        <div className='w-[90%] md:w-full mx-auto'>
          <h2 className='text-4xl md:text-6xl text-center font-bold text-gray-400'>Terms of Service</h2>
        </div>

        <div className='w-[70%] mx-auto bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mt-20'>
          <h3 className='text-2xl font-bold text-gray-300 mb-6'>Introduction</h3>
          <p className='text-gray-400 mb-6'>
            Welcome to Quivox! These Terms of Service govern your use of our website and services. By accessing or using our site, you agree to comply with and be bound by these terms. If you do not agree with these terms, please do not use our website.
          </p>
          
          <h3 className='text-2xl font-bold text-gray-300 mb-6'>1. Acceptance of Terms</h3>
          <p className='text-gray-400 mb-6'>
            By using our website, you acknowledge that you have read, understood, and agree to these Terms of Service. We may update these terms from time to time, and your continued use of the website signifies your acceptance of any changes.
          </p>
          
          <h3 className='text-2xl font-bold text-gray-300 mb-6'>2. Use of Our Services</h3>
          <p className='text-gray-400 mb-6'>
            You agree to use our services only for lawful purposes and in a manner that does not infringe on the rights of, or restrict or inhibit anyone else's use and enjoyment of our services. You are responsible for any activity that occurs under your account.
          </p>
          
          <h3 className='text-2xl font-bold text-gray-300 mb-6'>3. Account Security</h3>
          <p className='text-gray-400 mb-6'>
            You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
          </p>
          
          <h3 className='text-2xl font-bold text-gray-300 mb-6'>4. Intellectual Property</h3>
          <p className='text-gray-400 mb-6'>
            All content and materials on our website are the property of Quivox or our licensors and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or otherwise use our content without our express written permission.
          </p>
          
          <h3 className='text-2xl font-bold text-gray-300 mb-6'>5. Limitation of Liability</h3>
          <p className='text-gray-400 mb-6'>
            To the fullest extent permitted by law, Quivox shall not be liable for any indirect, incidental, special, or consequential damages, or any loss of profits or data, arising out of or in connection with your use of our website or services.
          </p>
          
          <h3 className='text-2xl font-bold text-gray-300 mb-6'>6. Governing Law</h3>
          <p className='text-gray-400 mb-6'>
            These Terms of Service shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law principles. Any disputes arising out of or related to these terms shall be resolved in the courts of [Your State/Country].
          </p>
          
          <h3 className='text-2xl font-bold text-gray-300 mb-6'>7. Contact Us</h3>
          <p className='text-gray-400 mb-6'>
            If you have any questions or concerns about these Terms of Service, please contact us at <a href="mailto:support@quivox.org" className='text-blue-400 hover:underline'>support@quivox.org</a>.
          </p>

          <a href="/" className='flex items-center text-gray-400 hover:text-gray-300'>
            <FaArrowLeft className='w-4 h-4 mr-2' /> Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
