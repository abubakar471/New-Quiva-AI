"use client"

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const AOSInitiator = ({ children }) => {
    useEffect(() => {
        Aos.init({
            duration: 1500,
            delay: 0 // 400 was default value
        })
    })

    return <>{children}</>

}

export default AOSInitiator