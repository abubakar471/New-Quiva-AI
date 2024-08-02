import ChangelogCard from '@/components/changelog/ChangelogCard'
import NewsletterForm from '@/components/changelog/NewsletterForm'
import { StarsBackground } from '@/components/ui/stars-background'
import React from 'react'

const Changelog = () => {
    const changelogs = [
        {
            title: 'Version 2.2',
            content: "Welcome to Quiva AI Version 2.2! This latest release brings a host of enhanced features and improved usability to make your AI experience even better. We've listened to your feedback and focused on refining existing functionalities, adding new tools, and optimizing performance. With a redesigned user interface, streamlined workflows, and powerful new capabilities, Quiva AI 2.2 is designed to help you achieve more with AI.",
            date: '21/5/2024',
            image: "https://quiva.quivox.org/images/changelog-001.png"
        },
        {
            title: 'Version 2.2',
            content: "Welcome to Quiva AI Version 2.2! This latest release brings a host of enhanced features and improved usability to make your AI experience even better. We've listened to your feedback and focused on refining existing functionalities, adding new tools, and optimizing performance. With a redesigned user interface, streamlined workflows, and powerful new capabilities, Quiva AI 2.2 is designed to help you achieve more with AI.",
            date: '21/5/2024',
            image: "https://quiva.quivox.org/images/changelog-001.png"
        },
        {
            title: 'Version 2.2',
            content: "Welcome to Quiva AI Version 2.2! This latest release brings a host of enhanced features and improved usability to make your AI experience even better. We've listened to your feedback and focused on refining existing functionalities, adding new tools, and optimizing performance. With a redesigned user interface, streamlined workflows, and powerful new capabilities, Quiva AI 2.2 is designed to help you achieve more with AI.",
            date: '21/5/2024',
            image: "https://quiva.quivox.org/images/changelog-001.png"
        }
    ]

    return (
        <div className=''>
            <div className="min-h-[30rem] relative pt-20">
                <div className="relative flex-col z-10 md:leading-tight max-w-sm  sm:max-w-lg md:max-w-2xl lg:max-w-5xl mx-auto tracking-tight font-medium bg-clip-text text-transparent  flex gap-2 md:gap-8 px-4 lg:px-0">

                    <h2 className='text-4xl md:text-6xl font-bold text-gray-400 pt-4'>What&apos;s New</h2>
                    <p className="text-gray-400 !text-md">
                        Stay up to date with all the latest features, enhancements, and fixes on our website.
                    </p>

                    <div className='md:w-[70%] lg:w-[60%] pt-4 !z-30'>
                        <NewsletterForm />
                    </div>
                    <StarsBackground />
                </div>
                <StarsBackground />
            </div>


            <div className='min-h-[20rem] max-w-sm  sm:max-w-lg md:max-w-2xl lg:max-w-6xl mx-auto py-20'>
                <div className='flex flex-col gap-y-10'>
                    {
                        changelogs?.map((_, i) => (
                            <ChangelogCard key={i} item={_} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Changelog