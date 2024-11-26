"use client"
import React, { useState, useEffect } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import ArrowButton from '../ArrowButton/ArrowButton'
import { product_data } from '@/app/Assets/assets'
import ProductCard from '../ProductCard/ProductCard'

const SummerBigDeal = () => {
    const [products, setProducts] = useState(product_data);  // Initialize with product_data directly
    const [visibleProducts, setVisibleProducts] = useState(8);
    const [showAll, setShowAll] = useState(false);

    const handleSeeMore = () => {
        setVisibleProducts(products.length);
        setShowAll(true);
    };

    const handleShowLess = () => {
        setVisibleProducts(8);
        setShowAll(false);
    };

    return (
        <div className='mt-5 p-5 max-w-7xl mx-auto'>
            <div className='flex items-center justify-between'>
                <SectionTitle subHeader={"SUMMER"} mainHeader={"Big Deal"} />
                <ArrowButton />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    products.slice(0, visibleProducts).map((item, index) => (
                        <ProductCard 
                            key={index} 
                            id={item.id} 
                            images={item.images} 
                            productName={item.productName} 
                            price={item.price}
                        />
                    ))
                }
            </div>

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

