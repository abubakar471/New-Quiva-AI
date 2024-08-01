import CustomerReview from '@/components/about-us/customerReview/CustomerReview'
import HeroTooltipContainer from '@/components/about-us/heroTooltipContainer/HeroTooltipContainer'
import JoinOurTeam from '@/components/about-us/joinOurTeam/JoinOurTeam'
import TeamOfQuiva from '@/components/about-us/teamOfQuiva/TeamOfQuiva'
import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <div className=''>
      {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_1000px_at_50%_200px,#05522d,transparent)] mt-24">
      </div> */}

      <div className='w-full relative'>

        <div className='w-[80%] mx-auto min-h-[40vh] flex flex-wrap lg:flex-nowrap py-40 gap-x-10 gap-y-14 relative'>
          <div className='w-full md:w-2/3'>
            <h2 className='text-6xl text-white font-bold'>
              Meet the Team Behind Quivox Studio
            </h2>
          </div>

          <div className='w-full lg:w-1/3'>
            <p className='text-gray-500 text-xl'>
              Everything you need to dominate app service fortified the industry’s #1 rated our customer support
            </p>

            <div className='pt-6'>
              <HeroTooltipContainer />
            </div>
          </div>
        </div>

        <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-transparent to-yellow-400"></div>
      </div>

      {/* <div className='w-[80%] mx-auto flex flex-wrap lg:flex-nowrap gap-10'>
        <div className='w-full lg:w-1/2 hidden lg:flex items-center justify-start'>
          <Image src={"/assets/images/abstract-3.jpg"} alt='Story' width={800} height={800} className='rounded-2xl w-full h-[700px] object-cover' />
        </div>

        <div className='w-full lg:w-1/2'>
          <p>
            loredf asdfaksdfasdf asdfasd fasdf asdfsdafas
            loredf asdfaksdfasdf asdfasd fasdf asdfsdafas
            loredf asdfaksdfasdf asdfasd fasdf asdfsdafas
            loredf asdfaksdfasdf asdfasd fasdf asdfsdafas
            loredf asdfaksdfasdf asdfasd fasdf asdfsdafas
            loredf asdfaksdfasdf asdfasd fasdf asdfsdafas
            loredf asdfaksdfasdf asdfasd fasdf asdfsdafas
            loredf asdfaksdfasdf asdfasd fasdf asdfsdafas
            loredf asdfaksdfasdf asdfasd fasdf asdfsdafas
            loredf asdfaksdfasdf asdfasd fasdf asdfsdafas
            loredf asdfaksdfasdf asdfasd fasdf asdfsdafas
          </p>
        </div>
      </div> */}

      <TeamOfQuiva />
      <CustomerReview />
      <JoinOurTeam />
    </div>
  )
}

export default AboutPage