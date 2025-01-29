import Link from 'next/link'
import React from 'react'

export default function learnTechPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1b2232] to-[#9333EA] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-[500px] h-[500px] bg-gradient-to-r from-[#1b2232] to-[#9333EA] rounded-full opacity-20 animate-pulse"></div>
            </div>

            {/* Floating Animated Shapes */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-24 h-24 bg-[#9333EA] rounded-full blur-xl opacity-30 animate-float" />
                <div className="absolute bottom-20 right-20 w-36 h-36 bg-[#0f172a] rounded-lg blur-xl opacity-30 animate-float delay-2000" />
                <div className="absolute top-20 right-10 w-20 h-20 bg-[#1b2232] rounded-lg blur-lg opacity-40 animate-float delay-4000" />
            </div>

            {/* Main Content */}
            <div className="text-center relative z-10">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg animate-bounce">
                    Under Construction
                </h1>
                <p className="text-lg md:text-2xl text-white mt-4 drop-shadow-md">
                    We’re crafting something extraordinary. Stay tuned!
                </p>

                {/* CTA Button */}
                <div className="mt-10">
                    <Link
                        href="/"
                        className="px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-[#9333EA] to-[#1b2232] rounded-full shadow-white shadow-md transform transition hover:scale-105 hover:shadow-2xl focus:outline-none"
                    >
                        Back Home
                    </Link>
                </div>
            </div>

            {/* Animated SVG Waves */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
                <svg
                    className="w-full h-32 text-white animate-wave"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fill="currentColor"
                        fillOpacity="1"
                        d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,224C672,213,768,171,864,144C960,117,1056,107,1152,112C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </div>
  )
}
