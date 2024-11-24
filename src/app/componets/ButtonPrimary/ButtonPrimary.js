import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const ButtonPrimary = () => {
    return (
        <div className="mt-8 flex text-center justify-center">
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
    )
}

export default ButtonPrimary