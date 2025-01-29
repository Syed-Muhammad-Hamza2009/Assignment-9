'use client';
import Link from 'next/link';
import { Agbalumo } from "next/font/google"
import Image from 'next/image';

const agbalumo = Agbalumo({
    subsets: ['latin'],
    weight: '400'
})

export default function Home() {
    // Placeholder data for now, replace with fetched posts in the future
    const allPostsData = [
        {
            id: 'post-1',
            title: 'Rendering in Next.js CSR & SSR',
            date: '2025-12-24',
            excerpt: 'Learn how Next.js renders content on the client and server.',
        },

    ];

    return (
        <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
            <p className='w-[80%] h-[1px] bg-white mb-10'></p>
            <h1 className="text-5xl font-bold text-center mb-8 text-[#9333EA]">
                The <span className={`${agbalumo.className}`}>TECHZY</span> Blog
            </h1>
            <p className="text-lg text-center mb-12 text-gray-700">
                Explore tips, insights and experiences of a Dev.
            </p>
            <div className="w-full grid grid-cols-1  gap-8">
                {allPostsData.map(({ id, date, title, excerpt }) => (
                    <div key={id} className="bg-[#1b2232] w-full sm:h-[250px] text-white rounded-lg shadow-lg shadow-black  hover:shadow-xl transition flex sm:flex-row flex-col justify-between items-center px-10 py-10 sm:py-0">

                        <div className='flex flex-col justify-center items-start gap-4 '>
                            <Link href={`/blog/rendering`} className="block">

                                <h2 className="text-2xl font-semibold mb-2 text-[#9333EA] hover:underline">
                                    {title}
                                </h2>

                            </Link>
                            <p className="text-sm text-gray-400 mb-4">{date}</p>
                            <p className="text-gray-200">{excerpt}</p>
                        </div>

                        <Image src={"/images/rendering.png"} alt="icon" height={200} width={200} className='mt-10 sm:mt-0 rounded-full h-[200px] w-[200px] object-cover'/>
                    </div>
                ))}
            </div>
        </div>
    );
}
