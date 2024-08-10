"use client";

import React, { useState } from 'react';
import { FaExclamationTriangle, FaTimes, FaCheckCircle } from "react-icons/fa";

const ReportVulnerabilityPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    vulnerability: '',
    description: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    vulnerability: '',
    description: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let valid = true;
    const errors = { name: '', email: '', vulnerability: '', description: '' };

    if (!formData.name) {
      errors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email) {
      errors.email = 'Email is required';
      valid = false;
    }
    if (!formData.vulnerability) {
      errors.vulnerability = 'Vulnerability type is required';
      valid = false;
    }
    if (!formData.description) {
      errors.description = 'Description is required';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowPopup(true);

      // Send form data to a server or webhook (replace URL with your endpoint)
      try {
        await fetch('https://your-webhook-url.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: `New Vulnerability Report!\n**Name:** ${formData.name}\n**Email:** ${formData.email}\n**Vulnerability Type:** ${formData.vulnerability}\n**Description:** ${formData.description}`
          }),
        });
        console.log('Vulnerability report sent');
      } catch (error) {
        console.error('Error sending vulnerability report:', error);
      }
    }
  };

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
          <h3 className='text-center text-gray-500'>Report a Vulnerability</h3>
          <h2 className='sm:w-[90%] w-[80%] lg:w-[40%] mx-auto text-4xl md:text-6xl text-center font-bold text-gray-400 pt-4'>Help Us Improve Security</h2>
        </div>

        <div className='w-[70%] mx-auto bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mt-20'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-sm text-gray-300'>Name <span className='text-red-500 text-lg'>*</span></label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder='Your Name'
                className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-red-500/30 border-none'
                required
              />
              {formErrors.name && <p className='text-red-500 text-xs'>{formErrors.name}</p>}
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-sm text-gray-300'>Email ID <span className='text-red-500 text-lg'>*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Your Email'
                className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-red-500/30 border-none'
                required
              />
              {formErrors.email && <p className='text-red-500 text-xs'>{formErrors.email}</p>}
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-sm text-gray-300'>Vulnerability Type <span className='text-red-500 text-lg'>*</span></label>
              <select
                name="vulnerability"
                value={formData.vulnerability}
                onChange={handleInputChange}
                className='py-2 px-4 w-full text-sm text-gray-400 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-red-500/30 border-none'
                required
              >
                <option value="" disabled>Select a type</option>
                <option value="XSS">XSS</option>
                <option value="SQL Injection">SQL Injection</option>
                <option value="CSRF">CSRF</option>
                <option value="Other">Other</option>
              </select>
              {formErrors.vulnerability && <p className='text-red-500 text-xs'>{formErrors.vulnerability}</p>}
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-sm text-gray-300'>Description <span className='text-red-500 text-lg'>*</span></label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder='Describe the vulnerability'
                className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-red-500/30 border-none h-40 resize-none'
                required
              />
              {formErrors.description && <p className='text-red-500 text-xs'>{formErrors.description}</p>}
            </div>

            <button type="submit" className='bg-gradient-to-r from-red-600 to-red-400 hover:from-red-700 hover:to-red-500 transition-all duration-300 ease-in-out text-white px-6 py-2 rounded-full flex items-center justify-center'>
              <FaExclamationTriangle className='w-6 h-6 mr-2' /> Report Vulnerability
            </button>
          </form>
        </div>

        {/* Popup */}
        {showPopup && (
          <div className='fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center'>
            <div className='bg-gray-800 text-white p-6 rounded-lg w-[80%] max-w-3xl relative'>
              <button className='absolute top-3 right-3 text-gray-400' onClick={() => setShowPopup(false)}>
                <FaTimes />
              </button>
              <h4 className='font-bold text-xl'>Report Submitted</h4>
              <p className='mt-2'>Thank you for reporting the vulnerability. We appreciate your effort in helping us improve security. Our team will review the details and take appropriate action.</p>
              <div className='mt-4 flex items-center'>
                <FaCheckCircle className='text-green-500 w-6 h-6 mr-2' />
                <p className='text-gray-300'>Your report has been successfully submitted.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportVulnerabilityPage;
