import { product_data } from '@/app/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({images, productName, price, id}) => {
    return (
        <div className="bg-gray-50 rounded-md overflow-hidden cursor-pointer flex flex-col p-4 gap-2">
            <div className="flex justify-center items-center overflow-hidden h-full w-full">
                <Link href={`/product/${id}`}>
                    <Image
                        src={images}
                        alt=''
                        className="h-[80%] w-[80%] hover:scale-110 transition-all text-center"
                        width={600}
                        height={600}
                    />
                </Link>
            </div>
            <div className="flex space-x-1.5">
                {/* Stars / Ratings */}
                <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                    />
                </svg>
                {/* Add additional star ratings here */}
            </div>
            <div>
                <div className="flex items-center justify-between gap-5">
                    <h3 className="text-lg font-bold text-gray-800">{productName}</h3>
                    <p className="text-lg text-blue-600 font-bold">{price}</p>
                </div>
            </div>
            <button
                type="button"
                className="w-full px-5 py-2.5 rounded-lg border border-[#7E53D4] shadow-md text-[#7E53D4] font-semibold text-[16px]"
            >
                Add to cart
            </button>
        </div>
    )
}

export default ProductCard