'use client';

import Image from "next/image";

export default function About() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-[#9333EA]">About Me</h1>
                <p className="text-lg text-gray-500 mt-4">
                    Hi, I&quot;m Hamza, a FrontEnd Engineer passionate about creating inclusive and accessible digital experiences.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 juctify-center items-center">
                {/* Profile Image */}
                <div className="relative w-screen align-middle md:w-1/2 h-[500px] overflow-hidden">
                    <div className="w-screen align-middle rounded-[0_50px_0_50px]  overflow-hidden ">
                        {/* Using placeholder API for demo - replace src with your actual image URL */}
                        <Image
                            src="/images/myImg.jpeg"
                            width={1000}
                            height={1000}
                            alt="Professional portrait"
                            className="w-[400px] h-[500px] object-cover md:rounded-[0_100px_100px_0] absolute left-0"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="w-full md:w-2/3 text-center md:text-left">
                    <p className="text-gray-700 mb-4">
                        With DECADES 😁 of experience in development and a dedication to innovation, I aim to craft experiences that
                        resonate with all users. From intuitive interfaces to seamless user journeys, I ensure that my work
                        reflect empathy and inclusivity.
                    </p>
                    <p className="text-gray-700 mb-4">
                        My journey started with a love for creativity and technology, eventually combining them to create functional,
                        beautiful User Interfaces. I believe that design is more than aesthetics—it&quot;s about problem-solving and
                        communication.
                    </p>
                    <p className="text-gray-700">
                        Outside of work, you’ll find me exploring nature, dabbling in photography, or sharing insights on my blog.
                        Let&quot;s connect and make the digital world more accessible together.
                    </p>
                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-16">
                <h2 className="text-3xl font-bold text-[#9333EA] text-center mb-8">Skills & Expertise</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-[#1b2232] text-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                        <p className="text-gray-300">
                            Crafting intuitive and visually appealing user interfaces with a focus on user experience.
                        </p>
                    </div>
                    <div className="bg-[#1b2232] text-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">FrontEnd Development</h3>
                        <p className="text-gray-300">
                            Ensuring digital, responsive and functional experiences using modern web technologies.
                        </p>
                    </div>

                    <div className="bg-[#1b2232] text-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">Content Management</h3>
                        <p className="text-gray-300">
                            Managing and updating content on websites using modern CMS solutions to ensure relevance and accuracy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
