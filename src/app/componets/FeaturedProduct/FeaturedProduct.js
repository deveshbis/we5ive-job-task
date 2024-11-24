import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import Image from 'next/image'

const FeaturedProduct = () => {
    return (
        <div className='mt-5'>
            <SectionTitle subHeader={"FEATURED PRODUCT"} mainHeader={"New Arrivals"} />
            {/* <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl sm:max-w-2xl max-w-md">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Premium Threads</h2> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-50 rounded-md overflow-hidden cursor-pointer flex flex-col items-start w-[302px] h-[400px] p-2 gap-4">
                    <div className="w-full overflow-hidden">
                        <Image src="https://i.ibb.co.com/31tRYZj/Pexels-Photo-by-Muneeb-Malhotra.png" alt="Product 1"
                            className="h-[303px] w-[202px] object-cover object-top hover:scale-110 transition-all text-center" width={202} height={303} />
                        {/* <Image src="https://i.ibb.co.com/31tRYZj/Pexels-Photo-by-Muneeb-Malhotra.png" alt="Product 1"
                            className="h-[500px] w-[400px] object-cover object-top hover:scale-110 transition-all text-center"
                            width={400} height={500} /> */}
                    </div>

                    <div className="p-6">
                        <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
                            <h3 className="text-lg font-bold text-gray-800">Indian Sharee</h3>
                            <p className="text-lg text-blue-600 font-bold">BDT 2,300</p>
                        </div>
                        <button type="button" className="w-full px-5 py-2.5 rounded-lg border border-[#7E53D4] shadow-md text-[#7E53D4] font-semibold text-[16px]">Add to cart</button>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-md overflow-hidden cursor-pointer flex flex-col items-start w-[302px] h-[400px] p-2 gap-4">
                    <div className="w-full overflow-hidden">
                        <Image src="https://i.ibb.co.com/FxYsQfP/Pexels-Photo-by-Bruno-Palace.png" alt="Product 2"
                            className="h-[303px] w-[202px] object-cover object-top hover:scale-110 transition-all" width={202} height={303} />
                    </div>

                    <div className="p-6">
                        <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
                            <h3 className="text-lg font-bold text-gray-800">Hoodie</h3>
                            <p className="text-lg text-blue-600 font-bold">BDT 2,300</p>
                        </div>
                        <button type="button"
                            className="w-full px-5 py-2.5 rounded-lg border border-[#7E53D4] shadow-md text-[#7E53D4] font-semibold text-[16px]">Add to cart</button>
                    </div>
                </div>


                <div className="bg-gray-50 rounded-md overflow-hidden cursor-pointer flex flex-col items-start w-[302px] h-[400px] p-2 gap-4">
                    <div className="w-full overflow-hidden">
                        <Image src="https://i.ibb.co.com/nPstYSt/Pexels-Photo-by-Bruno-Palace-1.png" alt="Product 3"
                            className="h-[303px] w-[202px] object-cover object-top hover:scale-110 transition-all" width={202} height={303} />
                    </div>

                    <div className="p-6">
                        <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
                            <h3 className="text-lg font-bold text-gray-800">Plazu</h3>
                            <p className="text-lg text-blue-600 font-bold">BDT 2,300</p>
                        </div>
                        <button type="button"
                            className="w-full px-5 py-2.5 rounded-lg border border-[#7E53D4] shadow-md text-[#7E53D4] font-semibold text-[16px]">Add to cart</button>
                    </div>
                </div>


                <div className="bg-gray-50 rounded-md overflow-hidden cursor-pointer flex flex-col items-start w-[302px] h-[400px] p-2 gap-4">
                    <div className="w-full overflow-hidden">
                        <Image src="https://i.ibb.co.com/FmzyXBR/Pexels-Photo-by-Ron-Lach.png" alt="Product 3"
                            className="h-[303px] w-[202px] object-cover object-top hover:scale-110 transition-all" width={202} height={303} />
                    </div>

                    <div className="p-6">
                        <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
                            <h3 className="text-lg font-bold text-gray-800">Jacket</h3>
                            <p className="text-lg text-blue-600 font-bold">BDT 2,300</p>
                        </div>
                        <button type="button"
                            className="w-full px-5 py-2.5 rounded-lg border border-[#7E53D4] shadow-md text-[#7E53D4] font-semibold text-[16px]">Add to cart</button>
                    </div>
                </div>

                {/* <div className="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
                        <div className="w-full overflow-hidden">
                            <Image src="https://readymadeui.com/images/product5.webp" alt="Product 3"
                                className="h-full w-full object-cover object-top hover:scale-110 transition-all" width={500} height={500}/>
                        </div>

                        <div className="p-6">
                            <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
                                <h3 className="text-lg font-bold text-gray-800">Jargon Jungle</h3>
                                <p className="text-lg text-blue-600 font-bold">$15</p>
                            </div>
                            <button type="button"
                                className="w-full px-5 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded-lg">Add to cart</button>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
                        <div className="w-full overflow-hidden">
                            <Image src="https://readymadeui.com/images/product6.webp" alt="Product 3"
                                className="h-full w-full object-cover object-top hover:scale-110 transition-all" width={500} height={500}/>
                        </div>

                        <div className="p-6">
                            <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
                                <h3 className="text-lg font-bold text-gray-800">Syllable Streetwear</h3>
                                <p className="text-lg text-blue-600 font-bold">$14</p>
                            </div>
                            <button type="button"
                                className="w-full px-5 py-2.5 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded-lg">Add to cart</button>
                        </div>
                    </div> */}
            </div>
        </div>

        // </div>
    )
}

export default FeaturedProduct