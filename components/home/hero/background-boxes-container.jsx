"use client";

import React from "react";
import { Boxes } from "../../ui/background-boxes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, Rotate3D } from "lucide-react";

export default function BackgroundBoxesContainer() {
    return (
        <div className="h-[90vh] relative w-full overflow-hidden flex flex-col items-center rounded-lg pt-44 md:pt-48">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-900/0 via-slate-900 to-transparent z-20 pointer-events-none" />

            <Boxes />

            <div className="pb-6">
                <Link href={"#"} className="inline-block px-6 py-3 rounded-full bg-white/5 text-sm text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all">
                    v2.02 On Fire 🔥
                </Link>
            </div>
            <h1 className={cn("text-5xl md:text-5xl lg:text-7xl leading-[3.8rem] text-white text-center relative z-20 font-bold px-8 md:px-0")}>
                Powerful Business AI Bot <br /> Platform, for <span className="bg-clip-text bg-gradient-to-r from-[#20BE72] to-yellow-400 text-transparent">Everyone</span>
            </h1>

            <div className="w-[80%] md:w-[30%] mx-auto pt-4">
                <p className="text-center mt-2 text-neutral-300 relative z-20">
                    Quiva is an AI chatbot crafted by Quivox, designed to be your helpful and intelligent virtual assistant.
                </p>
            </div>

            <div className="flex items-center flex-wrap justify-center gap-4 pt-4">
                <Link href={"#"} className="bg-[#ffffff] text-black px-8 py-2 z-20 rounded-full flex items-center gap-2">
                    Get Started
                    <ArrowRight className="text-green-500" />
                </Link>

                <Link href={"#"} className="bg-gradient-to-r from-[#20BE72] to-yellow-400 text-white font-bold px-8 py-2 z-20 rounded-full flex items-center gap-2">
                    <Rotate3D className="text-white" />
                    Read the docs
                </Link>
            </div>
        </div>
    );
}
