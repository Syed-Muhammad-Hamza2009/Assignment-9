"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';


interface ProdDescProps {
    productId: string;
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

const ProdDesc = ({ productId }: ProdDescProps) => {
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

        <div className='h-[703px]  w-full md:w-[606px]  flex flex-col md:px-0 px-4 items-start justify-between  '>
            <div className='w-full h-[460px] pb-10 border-b border-mygray  flex flex-col items-start justify-between'>
                <h1 className='font-normal text-[42px] text-white'>{productData.title}</h1>
                <p className='font-medium text-[24px] text-mygray'>{productData.price}</p>
                {/* reviews */}
                <div className='h-[20px] w-[264px] flex justify-between items-center '>
                    <Image src={'/images/star.png'} alt='hero' width={124} height={20} className='w-[124px] h-[20px] border-r-2 object-contain border-white' />
                    <p className='font-normal text-[13px] text-mygray'>5 Customer Review</p>
                </div>
                {/* size */}
                <div className='w-[123px] h-[63px] flex flex-col justify-between items-start '>
                    <h3 className='font-normal text-[16px] text-mygray'>Size</h3>
                    <div className='h-[30px] w-[123px] flex justify-between items-center '>
                        <span className='h-[30px] w-[30px]  text-white rounded-md border-2 border-black flex justify-center items-center text-[16px] bg-yellow-300'>L</span>
                        <span className='h-[30px] w-[30px]  text-white rounded-md  flex justify-center items-center text-[16px] bg-secondary'>XL</span>
                        <span className='h-[30px] w-[30px]  text-white rounded-md  flex justify-center items-center text-[16px] bg-secondary'>XS</span>
                    </div>
                </div>
                {/* color */}
                <div className='w-[123px] h-[63px] flex flex-col justify-between items-start '>
                    <h3 className='font-normal text-[16px] text-gray-400'>Color</h3>
                    <div className='h-[30px] w-[123px] flex justify-between items-center '>
                        <span className='h-[30px] w-[30px]  text-white rounded-full border-2 border-black flex   bg-[#816DFA]'></span>
                        <span className='h-[30px] w-[30px]  text-white rounded-full   bg-black'></span>
                        <span className='h-[30px] w-[30px]  text-white rounded-full   bg-yellow-300'></span>
                    </div>
                </div>
                <div className=' h-[64px] w-full flex justify-between items-center '>
                    {/* button 1 */}
                    <div className='md:w-[123px] w-[80px] h-[56px] md:h-[64px] rounded-lg border-2 flex justify-between items-center px-2 border-gray-400'>
                        <button className='font-medium text-white text-[20px]'>-</button>
                        <p className='font-medium text-white text-[20px]'>1</p>
                        <button className='font-medium text-white text-[20px]'>+</button>
                    </div>
                    {/* button 2 */}
                    <button className='h-[56px] md:h-[64px] w-[120px] md:w-[215px] border-2 border-white rounded-lg font-medium text-white text-[20px]'>Add to Cart</button>
                    {/* button 3 */}
                    <button className='h-[56px] md:h-[64px] w-[120px] md:w-[215px] border-2 border-white rounded-lg font-medium text-white text-[20px]'>+ Compare</button>
                </div>
            </div>

            {/* social media links */}
            <div className=' h-[150px] w-full flex flex-col items-start pb-8 justify-between '>
                <div className="flex items-center gap-8">
                    <span className="w-24 text-muted-foreground">SKU</span>:
                    <span className="font-medium">SS001</span>
                </div>
                <div className="flex items-center gap-8">
                    <span className="w-24 text-muted-foreground">{productData.category}</span>:
                    <span className="font-medium">{productData.title}</span>
                </div>
                <div className="flex items-center gap-8">
                    <span className="w-24 text-muted-foreground">Tags</span>:
                    <span className="font-medium">{productData.category}</span>
                </div>
            </div>
        </div>

    );
};

export default ProdDesc;