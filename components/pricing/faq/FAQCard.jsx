import { PenIcon } from 'lucide-react'
import { FaQuestionCircle } from "react-icons/fa";

import React from 'react'

const FAQCard = ({item}) => {
  
    return (
        <div>
            <h3 className='text-white font-bold flex gap-2 items-center'>
                <FaQuestionCircle className='text-green-500 w-[20px]' />
                {item?.title}</h3>
            <p className='text-sm text-gray-400 pt-3 leading-normal'>
                {item?.description}
            </p>
        </div>
    )
}

export default FAQCard