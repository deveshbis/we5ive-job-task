/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

const Banner = () => {
    return (

        <section
            className="relative bg-[url(https://i.ibb.co.com/rpY3H90/hero.jpg)] bg-cover bg-center bg-no-repeat"
        >
            <div
                className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 justify-center"  // Center the content horizontally and vertically
            >
                <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
                        Elevate your everyday life style

                        {/* <strong className="block font-extrabold text-rose-500"> Forever Home. </strong> */}
                    </h1>

                    <p className="mt-4 max-w-lg text-[#F5F3FF] sm:text-[16px]/relaxed text-center">
                        Discover the Latest Trends in Sustainable Fashion
                    </p>

                    {/* <div className="mt-8 flex flex-wrap gap-4 text-center justify-center"> */}
                    <ButtonPrimary />

                </div>
            </div>
        </section>

    )
}

export default Banner