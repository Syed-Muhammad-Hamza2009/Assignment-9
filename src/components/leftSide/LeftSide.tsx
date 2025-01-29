"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'



interface ProdDescProps {
    productId: string; // add a prop to accept the product ID
  }
  
  
  interface Response {
      id: number;
      title: string;
      price: number;
      description: string;
      category: string;
      image: string;
      rating: {
        rate: number;
        count: number;
      };
    }

const LeftSide = ({ productId }: ProdDescProps) => {

      const [productData, setProductData] = useState<Response | null>(null);
    
      useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
          const data = await response.json();
          setProductData(data);
        };
        fetchData();
      }, [productId]);
    
      if (!productData) return <div>loading...</div>;
  return (
    <div className='md:h-[500px] md:w-[553px] bg-red-40 flex gap-4 md:flex-row flex-col'>
    {/* small images group */}
    <div className='md:w-[76px] w-full h-[80px] md:h-[416px] flex md:flex-col flex-row justify-between  '>
    {/* box1 */}
  
      <Image src={productData.image} alt='hero' width={76} height={80} className="w-[76px] h-[80px]  bg-peach"/>
    {/* box2 */}
    <Image src={productData.image} alt='hero' width={76} height={80} className="w-[76px] h-[80px]  bg-peach"/>
    {/* box3 */}
    <Image src={productData.image} alt='hero' width={76} height={80} className="w-[76px] h-[80px]  bg-peach"/>
    {/* box4 */}
    <Image src={productData.image} alt='hero' width={76} height={80} className="w-[76px] h-[80px]  bg-peach"/>
    </div>
    {/* main prod image big one */}
    <div className='md:w-[481px] md:h-[500px] '>
      <Image src={productData.image} alt='hero' width={480} height={500} className='md:h-[500px] w-[481px] bg-peach' />
    </div>
  </div>
  )
}

export default LeftSide