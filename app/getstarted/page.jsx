import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdPayment } from 'react-icons/md';

const BuyNowPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            company: formData.get('company'),
            website: formData.get('website'),
            plan: formData.get('plan'),
            billing: formData.get('billing'),
            description: formData.get('description')
        };

        const embedPayload = {
            embeds: [{
                title: "New Purchase Request",
                color: 3066993,
                fields: [
                    { name: "Name", value: data.name, inline: true },
                    { name: "Email", value: data.email, inline: true },
                    { name: "Company", value: data.company, inline: true },
                    { name: "Website", value: data.website || "N/A", inline: true },
                    { name: "Plan", value: data.plan, inline: true },
                    { name: "Billing Cycle", value: data.billing, inline: true },
                    { name: "Description", value: data.description || "No description provided" }
                ],
                footer: {
                    text: "Quivox Purchase Request"
                }
            }]
        };

        try {
            await fetch('https://discord.com/api/webhooks/1268992564686618635/WZFHWAe6dwS0m5GpEJE0tOY3ceDVRLvwNP_AqRWhII9FkoQPGv2uFNn4GKK_Aa5jxERq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(embedPayload),
            });

            setShowPopup(true);
        } catch (error) {
            console.error('Error sending data:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='flex flex-col items-center min-h-screen w-full relative pt-10 pb-24'>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_400px_at_10%_0px,#004d00,transparent)] xl:bg-[radial-gradient(circle_500px_at_10%_100px,#004d00,transparent)] "></div>
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

                    <form onSubmit={handleSubmit} className='pt-10 flex flex-col gap-y-4'>
                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm flex text-gray-300 gap-2'>Name <span className='text-green-500 text-lg'>*</span></p>
                            <input type="text" name="name" placeholder='Eg: John Doe' className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out' required />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm flex text-gray-300 gap-2'>Email ID <span className='text-green-500 text-lg'>*</span></p>
                            <input type="email" name="email" placeholder='Eg: john.doe@example.com' className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out' required />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm flex text-gray-300 gap-2'>Company Name <span className='text-green-500 text-lg'>*</span></p>
                            <input type="text" name="company" placeholder='Eg: Doe Enterprises' className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out' required />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm flex text-gray-300 gap-2'>Website (Optional)</p>
                            <input type="url" name="website" placeholder='Eg: www.doeenterprises.com' className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out' />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm flex text-gray-300 gap-2'>Plan <span className='text-green-500 text-lg'>*</span></p>
                            <select name="plan" className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out' required>
                                <option value="">Select Plan</option>
                                <option value="essential">Essential</option>
                                <option value="premium">Premium</option>
                                <option value="plus">Plus</option>
                            </select>
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm flex text-gray-300 gap-2'>Billing Cycle <span className='text-green-500 text-lg'>*</span></p>
                            <select name="billing" className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out' required>
                                <option value="">Select Billing Cycle</option>
                                <option value="monthly">Monthly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm flex text-gray-300 gap-2'>Description <span className='text-green-500 text-lg'>*</span></p>
                            <textarea name="description" placeholder='Describe your needs or any special requests...' className='py-2 px-4 w-full text-sm text-gray-400 placeholder:text-gray-400/50 bg-gray-400/10 rounded-md outline-none focus:ring-2 focus:ring-green-500/30 border-none transition-all duration-300 ease-in-out' rows="4" required></textarea>
                        </div>

                        <button type='submit' className='backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all p-2 shadow-xl shadow-green-500/10 w-full text-green-400 rounded-full flex gap-2 items-center justify-center' disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Buy Now'}
                            <MdPayment className='w-[20px] h-[20px]' />
                        </button>

                        <div className='flex items-center flex-wrap gap-2 text-gray-400 text-center justify-center text-sm w-full pt-4'>
                            Need help with your purchase?
                            <Link href={"/contact"} className='text-green-400'>Contact Us</Link>
                        </div>
                    </form>

                    {showPopup && (
                        <div className='fixed inset-0 flex items-center justify-center'>
                            <div className='p-6 bg-green-500 text-white rounded-lg shadow-lg relative'>
                                <h4 className='text-2xl font-bold'>Thank You!</h4>
                                <p>Your request has been submitted successfully.</p>
                                <div className='absolute inset-0 bg-[radial-gradient(circle_40px_at_50%_50%, rgba(255, 255, 255, 0.5), transparent)] opacity-50'></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BuyNowPage;
