"use client"
import React, { useState } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { product_data } from '@/app/Assets/assets'
import ProductCard from '../ProductCard/ProductCard'

const SummerBigDeal = () => {
    const [products, setProducts] = useState(product_data);  // Initialize with product_data directly
    const [visibleProducts, setVisibleProducts] = useState(8);
    const [showAll, setShowAll] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const productsToDisplay = products.slice(currentIndex, currentIndex + visibleProducts);

    // Handle See More button click
    const handleSeeMore = () => {
        setVisibleProducts(products.length);
        setShowAll(true);
    };

    // Handle Show Less button click
    const handleShowLess = () => {
        setVisibleProducts(8);
        setShowAll(false);
    };

    // Handle Next Slide (for mobile slider)
    const nextSlide = () => {
        if (currentIndex + 1 < products.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // Handle Previous Slide (for mobile slider)
    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className='mt-5 p-5 max-w-7xl mx-auto'>
            <div className='flex items-center justify-between'>
                <SectionTitle subHeader={"SUMMER"} mainHeader={"Big Deal"} />
                <h2 className='text-purple-800 text-2xl font-bold italic flex'>Up to 40%</h2>
                
                <div className="flex space-x-2"> {/* space-x-2 will add a small horizontal gap */}
                    <button className="btn btn-circle border-2 border-[#7E53D4] rounded-full" onClick={prevSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M4.00002 12.5002H20" stroke="#7E53D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.99966 7.5C8.99966 7.5 3.99976 11.1824 3.99976 12.5C3.99976 13.8176 8.99976 17.5 8.99976 17.5" stroke="#7E53D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className="btn btn-circle btn-outline text-[#7E53D4] border-2 border-[#7E53D4] rounded-full" onClick={nextSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M20 12.4998H4" stroke="#7E53D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.0003 17.5C15.0003 17.5 20.0002 13.8176 20.0002 12.5C20.0002 11.1824 15.0002 7.5 15.0002 7.5" stroke="#7E53D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Desktop Grid Layout */}
            <div className="hidden lg:grid grid-cols-4 gap-6">
                {productsToDisplay.map((item, index) => (
                    <ProductCard
                        key={index}
                        id={item.id}
                        images={item.images}
                        productName={item.productName}
                        price={item.price}
                    />
                ))}
            </div>

            {/* Mobile Slider Layout */}
            <div className="lg:hidden flex space-x-4 overflow-hidden">

                {productsToDisplay.map((item, index) => (
                    <div key={index} className="flex-shrink-0">
                        <ProductCard
                            id={item.id}
                            images={item.images}
                            productName={item.productName}
                            price={item.price}
                        />
                    </div>
                ))}
            </div>


            {/* See More / Show Less Button */}
            <div className="flex justify-center items-center h-full mt-4">
                {showAll ? (
                    <button
                        onClick={handleShowLess}
                        className="px-6 py-3 rounded-lg bg-[#7E53D4] text-white font-semibold"
                    >
                        Show Less
                    </button>
                ) : (
                    <button
                        onClick={handleSeeMore}
                        className="px-6 py-3 rounded-lg bg-[#7E53D4] text-white font-semibold"
                    >
                        See More
                    </button>
                )}
            </div>
        </div>
    );
};

export default SummerBigDeal;



