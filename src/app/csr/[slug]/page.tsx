import LeftSide from '@/components/leftSide/LeftSide'
import ProdDesc from '@/components/prodDesc/ProdDesc'
import React from 'react'
import Link from 'next/link'

interface Params {
    params: {
        slug: string
    }
}

const page = (params: Params) => {
    const id = params.params.slug

    return (


        <section className='min-h-[620px] w-full flex flex-col   items-center  '>
            <div className='bg-[#1b2232] w-full h-24'>
                <h1 className='font-bold text-4xl  text-myorange text-center pt-6'>Client Single Product</h1>
                <Link className='text-myorange text-2xl px-2' href={"/csr"}>Back to Shop 🏪</Link>
            </div>
            <div className='bg-[#1b2232] h-full w-full flex items-start justify-center pt-10 gap-8 md:gap-14 md:h-[730px] md:flex-row flex-col '>
                <LeftSide productId={id} />
                <ProdDesc productId={id} />

            </div>
        </section>
    )
}

export default page