"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


interface dataTypes {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }

}


export default function CsrPage() {

  const router = useRouter()

  const url = "https://fakestoreapi.com/products"
  

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<dataTypes[]>([])
  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      const fetchData = async () => {
        const response = await fetch(url)
       const data: dataTypes[] = await response.json()
        // console.log(data)
        console.log(data)
        setData(data) 
      }

      fetchData()
    }, 8000);
  }, [])
  return (
    <>

      {
        loading ?
          <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
            <div className="relative w-24 h-24">
              {/* Outer Circle */}
              <div className="absolute inset-0 w-full h-full border-t-4 border-b-4 border-primaryPurple rounded-full animate-spin"></div>
              {/* Inner Pulsing Circle */}
              <div className="absolute inset-4 w-full h-full border-4 border-dashed border-secondaryBlue rounded-full animate-pulse"></div>
              {/* Central Glow */}
              <div className="absolute w-6 h-6 bg-primaryPurple rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
            </div>
            <div className="mt-10  text-lg text-center flex flex-col gap-2 font-semibold text-gray-300"><span className='tracking-[0.5rem]'>Loading.....</span> Content Is On the Way</div>
          </div>
          :
          <div className='w-screen  grid grid-cols-1  gap-5  xl:grid-cols-3 place-items-center place-content-center overflow-x-hidden'> 
          {
            data.map((item, index) => <div onClick={()=> router.push(`csr/${item.id}`)} key={index} className="col-span-1 bg-white text-black w-[300px] md:w-[450px] min-h-[600px] flex flex-col items-start pl-2 justify-center rounded-xl">

                <Image src={item.image} alt="image" height={1000} width={1000} className='w-[100%] object-cover h-[300px] rounded-xl' />

                <h1 className='text-lg font-bold mt-8 mb-2'>{item.title}</h1>
                <p className='mb-2'>{item.category}</p>

                <div className='flex justify-center items-center gap-3 mb-2'>
                  <Image src={"/images/star.png"} alt='star ' height={15} width={15}/>
                  <Image src={"/images/star.png"} alt='star ' height={15} width={15}/>
                  <Image src={"/images/star.png"} alt='star ' height={15} width={15}/>
                  <Image src={"/images/star.png"} alt='star ' height={15} width={15} className='opacity-75'/>
                  <p className='text-gray-400 font-semibold'>{item.rating.rate}</p>
                  <p className='text-gray-400 font-semibold'>({item.rating.count})</p>
                </div>

                <p className='text-lg mt-3 mb-3'>PRICE:  ${item.price}</p>

                <p>{item.description}</p>


            </div>
           )}
          </div>

      }

    </>

  )
}
