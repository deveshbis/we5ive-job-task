
import Image from 'next/image'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'

const ManCollection = () => {
    return (
        <div className="bg-white font-[sans-serif] p-6 mt-6">
            <div className="grid md:grid-cols-2 items-center gap-10 max-w-5xl max-md:max-w-md mx-auto">
                <div className="bg-[#EEECFB]">
                    <Image width={468} height={566} src="https://i.ibb.co.com/SQ6939Q/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man-1.png" className="w-[370px] h-[400px] rounded-md object-cover" alt='Man' />
                </div>

                <div className="max-md:text-center">
                    <h3 className="text-black font-semibold md:text-3xl text-2xl md:leading-10">Man Collection</h3>
                    <div className="mt-8 flex text-center ">
                        <a
                            href="#"
                            className="block w-full rounded-full bg-[#8F71E1] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#8F71E1] focus:outline-none focus:ring active:bg-[#8F71E1] sm:w-auto"
                        >
                            Shop Now
                        </a>

                        <a
                            href="#"
                            className="block rounded-full bg-[#8F71E1] px-3 py-2 text-2xl font-medium text-white shadow hover:text-white focus:outline-none focus:ring active:text-[#8F71E1] sm:w-auto"
                        >
                            <FiArrowUpRight />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManCollection



