import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { FaRegCreditCard } from "react-icons/fa";

const BannerStats = () => {
    return (
        <div className="bg-[url(https://i.ibb.co.com/743mtqc/Whats-App-Image-2024-11-24-at-10-42-15-AM.jpg)] bg-cover bg-center bg-no-repeat px-6 py-4 font-sans">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-10 max-w-6xl mx-auto">
                <div className="flex items-center gap-6">
                    <LiaShippingFastSolid className='text-5xl text-white' />
                    <div>
                        <h3 className="text-white text-lg font-bold">FREE SHIPPING</h3>
                        <p className="text-xs text-gray-300 mt-2">BUY BDT 3000+ & GET FREE DELIVERY</p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <HiOutlineArrowPathRoundedSquare className='text-5xl text-white' />
                    <div>
                        <h3 className="text-white text-lg font-bold">7 DAYS EXCHANGE</h3>
                        <p className="text-xs text-gray-300 mt-2">EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS</p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <FaRegCreditCard className='text-5xl text-white' />
                    <div>
                        <h3 className="text-white text-lg font-bold">100% PAYMENT SECURE</h3>
                        <p className="text-xs text-gray-300 mt-2">CASH ON DELIVERY AND SECURED ONLINE PAYMENT</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerStats