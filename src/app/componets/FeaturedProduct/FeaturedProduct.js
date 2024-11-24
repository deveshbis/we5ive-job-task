import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import Image from 'next/image'
import ArrowButton from '../ArrowButton/ArrowButton'

const FeaturedProduct = () => {
    return (
        <div className='mt-5 p-5'>
            <div className='flex items-center justify-between'>
                <SectionTitle subHeader={"FEATURED PRODUCT"} mainHeader={"New Arrivals"} />
                <ArrowButton />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-50 rounded-md overflow-hidden cursor-pointer flex flex-col p-4 gap-2">
                    <div className="flex justify-center items-center overflow-hidden h-full w-full">
                        <Image src="https://i.ibb.co.com/31tRYZj/Pexels-Photo-by-Muneeb-Malhotra.png" alt="Product 1"
                            className="h-[80%] w-[80%] hover:scale-110 transition-all text-center" width={600} height={600} />
                    </div>
                    <div>
                        <div className="flex items-center justify-between gap-5">
                            <h3 className="text-lg font-bold text-gray-800">Indian Sharee</h3>
                            <p className="text-lg text-blue-600 font-bold">BDT 2,300</p>
                        </div>
                    </div>
                    <button type="button" className="w-full px-5 py-2.5 rounded-lg border border-[#7E53D4] shadow-md text-[#7E53D4] font-semibold text-[16px]">Add to cart</button>
                </div>
                <div className="bg-gray-50 rounded-md overflow-hidden cursor-pointer flex flex-col p-4 gap-4">
                    <div className="flex justify-center items-center overflow-hidden h-full w-full">
                        <Image src="https://i.ibb.co.com/FxYsQfP/Pexels-Photo-by-Bruno-Palace.png" alt="Product 1"
                            className="h-[100%] w-[80%] hover:scale-110 transition-all text-center" width={600} height={600} />
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-gray-800">Hoodie</h3>
                            <p className="text-lg text-blue-600 font-bold">BDT 4,300</p>
                        </div>
                    </div>
                    <button type="button" className="w-full px-5 py-2.5 rounded-lg border border-[#7E53D4] shadow-md text-[#7E53D4] font-semibold text-[16px]">Add to cart</button>
                </div>
                <div className="bg-gray-50 rounded-md overflow-hidden cursor-pointer flex flex-col p-4 gap-4">
                    <div className="flex justify-center items-center overflow-hidden h-full w-full">
                        <Image src="https://i.ibb.co.com/nPstYSt/Pexels-Photo-by-Bruno-Palace-1.png" alt="Product 1"
                            className="h-[100%] w-[80%] hover:scale-110 transition-all text-center" width={600} height={600} />
                    </div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-gray-800">Plazu</h3>
                        <p className="text-lg text-blue-600 font-bold">BDT 300</p>
                    </div>

                    <button type="button" className="w-full px-5 py-2.5 rounded-lg border border-[#7E53D4] shadow-md text-[#7E53D4] font-semibold text-[16px]">Add to cart</button>
                </div>
                <div className="bg-gray-50 rounded-md overflow-hidden cursor-pointer flex flex-col p-4 gap-4">
                    <div className="flex justify-center items-center overflow-hidden h-full w-full">
                        <Image src="https://i.ibb.co.com/FmzyXBR/Pexels-Photo-by-Ron-Lach.png" alt="Product 1"
                            className="h-[100%] w-[80%] hover:scale-110 transition-all text-center" width={600} height={600} />
                    </div>
                    <div>
                        <div className="flex items-center justify-between gap-5">
                            <h3 className="text-lg font-bold text-gray-800">Jacket</h3>
                            <p className="text-lg text-blue-600 font-bold">BDT 4,300</p>
                        </div>
                    </div>
                    <button type="button" className="w-full px-5 py-2.5 rounded-lg border border-[#7E53D4] shadow-md text-[#7E53D4] font-semibold text-[16px]">Add to cart</button>
                </div>

            </div>

            <div className="flex justify-center items-center h-full mt-4">
                <button className="px-6 py-3 rounded-lg bg-[#7E53D4] text-white font-semibold">
                    See more
                </button>
            </div>

        </div>
    )
}

export default FeaturedProduct
