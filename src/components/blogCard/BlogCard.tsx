import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BlogCard() {
  return (
    <Link href={"/blog/rendering"}>
    <div className="group border-[1px] border-white rounded-3xl  p-10  flex justify-center items-center mx-5 md:mx-0 gap-14 flex-wrap">

    <Image src={"/images/making.svg"} alt="icon" height={80} width={80} />
    
    <div className=" flex flex-col">
      <h1 className="text-3xl w-[300px] font-bold">Rendring in Next.js CSR & SSR</h1>
      <div className="scale-element h-3 w-[150px] rounded-2xl border-[1px] border-black bg-PrimaryPurple my-5 transition-all duration-500 ease-in-out group-hover:scale-x-150 group-hover:origin-left "></div>
      <p className="${poppins.className} text-lg font-normal w-[300px] text-gray-400">
      two primary methods for rendering content: Client-Side Rendering (CSR) and Server-Side Rendering (SSR). These rendering techniques allow developers to choose the most suitable approach for their application.
      </p>
    </div>
  </div>
    </Link>
  )
}
