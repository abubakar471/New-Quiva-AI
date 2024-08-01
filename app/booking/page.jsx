"use client"; // Add this line at the top of your component file

import Link from 'next/link'
import React, { useState } from 'react'

const BookAppointmentPage = () => {
  const [contactMethod, setContactMethod] = useState("");
  const [contactDetail, setContactDetail] = useState("");
  const [budget, setBudget] = useState(100); // Initial budget state

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Capture form data
    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      contactMethod,
      contactDetail,
      date: formData.get('date'),
      time: formData.get('time'),
      service: formData.get('service'),
      projectDetails: formData.get('projectDetails'),
      budget, // Use state value instead
    }

    // Discord webhook URL
    const webhookUrl = 'https://discord.com/api/webhooks/1266199434480320664/Y5u-Ec-a22hn5KJhuCL0nyz26wyZKzRpiiHZ3Qn_X1wcpksVzbmBq62-0noOO_xAany3'

    // Send data to Discord webhook
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: `**New Appointment Request**\n\n**Name:** ${data.name}\n**Contact Method:** ${data.contactMethod}\n**Contact Detail:** ${data.contactDetail}\n**Date:** ${data.date}\n**Time:** ${data.time}\n**Service:** ${data.service}\n**Project Details:** ${data.projectDetails}\n**Budget:** $${data.budget}`,
      }),
    })
    .then(response => {
      if (response.ok) {
        alert('Appointment request sent successfully!')
        e.target.reset()
        setContactMethod("") // Reset contact method
        setContactDetail("") // Reset contact detail
        setBudget(100) // Reset budget
      } else {
        alert('Failed to send appointment request.')
      }
    })
    .catch(() => {
      alert('An error occurred while sending the appointment request.')
    })
  }

  return (
    <div className="w-full overflow-x-hidden ">
      <div className="w-full h-full py-20">
        <div className="w-[90%] md:w-[70%] mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center px-4 pt-20 md:px-0 mb-6 animate-fade-in">
            Book an Appointment
          </h1>
          <p className="text-center py-6 pb-12 text-green-500 animate-fade-in-delay">
            Schedule a time to discuss how we can help you achieve your goals.
          </p>

          <form onSubmit={handleSubmit} className="bg-green-500/5 text-[12px] backdrop-blur-sm border border-white/10 hover:backdrop-blur-md transition-all text-white rounded-lg p-8 shadow-lg animate-slide-in">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Name'
                className="w-full px-3 py-2 bg-gray-500/50 text-white rounded focus:outline-none focus:bg-[#3a3a3a] transition-all duration-300"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="contactMethod">
                Preferred Contact Method
              </label>
              <select
                id="contactMethod"
                name="contactMethod"
                className="w-full px-3 py-2 bg-gray-500/50 text-white rounded focus:outline-none focus:bg-[#3a3a3a] transition-all duration-300"
                value={contactMethod}
                onChange={(e) => setContactMethod(e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="discord">Discord</option>
                <option value="instagram">Instagram</option>
                <option value="twitter">Twitter</option>
                <option value="linkedin">LinkedIn</option>
                <option value="email">Email</option>
              </select>
            </div>

            {contactMethod && (
              <div className="mb-4 animate-fade-in">
                <label className="block text-sm font-bold mb-2" htmlFor="contactDetail">
                  {contactMethod.charAt(0).toUpperCase() + contactMethod.slice(1)} ID/Handle
                </label>
                <input
                  type={contactMethod === "email" ? "email" : "text"}
                  id="contactDetail"
                  name="contactDetail"
                  className="w-full px-3 py-2 bg-gray-500/50 text-white rounded focus:outline-none focus:bg-[#3a3a3a] transition-all duration-300"
                  value={contactDetail}
                  onChange={(e) => setContactDetail(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="date">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full px-3 py-2 bg-gray-500/50 text-white rounded focus:outline-none focus:bg-[#3a3a3a] transition-all duration-300"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="time">
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                className="w-full px-3 py-2 bg-gray-500/50 text-white rounded focus:outline-none focus:bg-[#3a3a3a] transition-all duration-300"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="service">
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-3 py-2 bg-gray-500/50 text-white rounded focus:outline-none focus:bg-[#3a3a3a] transition-all duration-300"
                required
              >
                <option value="">Select</option>
                <option value="Service1">Service 1</option>
                <option value="Service2">Service 2</option>
                <option value="Service3">Service 3</option>
                <option value="Service4">Service 4</option>
                <option value="Service5">Service 5</option>
                <option value="Service6">Service 6</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="projectDetails">
                Tell us about your project
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                className="w-full px-3 py-2 bg-gray-500/50 text-white rounded focus:outline-none focus:bg-[#3a3a3a] transition-all duration-300"
                rows="4"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold mb-2" htmlFor="budget">
                Budget
              </label>
              <div className="relative">
                <input
                  type="range"
                  id="budget"
                  name="budget"
                  min="100"
                  max="10000"
                  step="100"
                  className="w-full appearance-none bg-gray-400 h-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-green-300/30 focus:outline-none"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  required
                />
                <div className="absolute left-0 right-0 flex justify-between text-xs text-white px-2">
                  <span>$100</span>
                  <span>$10000</span>
                </div>
                <div className="text-green-400 text-center mt-2 font-bold text-lg animate-fade-in">{`$${budget}`}</div>
              </div>
            </div>

            <div className="flex items-center justify-center pt-6 relative">
              <button
                type="submit"
                className="bg-gradient-to-b from-green-400 to-[#0e8148] text-black font-bold rounded-xl px-10 py-4 transition-transform transform hover:scale-105 duration-300 shadow-md hover:shadow-lg relative overflow-hidden animate-pulse"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-pulse {
          animation: pulse 1.5s infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.6s ease-out forwards 0.2s;
        }
      `}</style>
    </div>
  )
}

export default BookAppointmentPage
