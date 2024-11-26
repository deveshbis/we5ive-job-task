"use client"
import React, { useEffect, useState } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import ArrowButton from '../ArrowButton/ArrowButton'
import ProductCard from '../ProductCard/ProductCard'
import { product_data } from '@/app/Assets/assets'

const FeaturedProduct = () => {
    const [showAll, setShowAll] = useState(false); // To track if all products are shown
    const [products, setProducts] = useState(product_data); // Initialize with product_data directly
    const [visibleProducts, setVisibleProducts] = useState(4);

    // Slice the last 4 products from the product_data
    const productsToDisplay = products.slice(-visibleProducts); // Get the last 'visibleProducts' items

    const handleSeeMore = () => {
        setVisibleProducts(products.length); // Show all products when "See more" is clicked
        setShowAll(true); // Set the state to show "Show Less" button
    }

    const handleShowLess = () => {
        setVisibleProducts(4); // Reset to show only 4 products
        setShowAll(false); // Set the state to show "See More" button
    }

    return (
        <div className='mt-5 p-5 max-w-7xl mx-auto'>
            <div className='flex items-center justify-between'>
                <SectionTitle subHeader={"FEATURED PRODUCT"} mainHeader={"New Arrivals"} />
                <ArrowButton />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {productsToDisplay.map((product, index) => (
                    <ProductCard
                        key={index}
                        id={product.id}
                        images={product.images}
                        productName={product.productName}
                        price={product.price}
                    />
                ))}
            </div>

            <div className="flex justify-center items-center h-full mt-4">
                {showAll ? (
                    // Show "Show Less" button if all products are shown
                    <button
                        onClick={handleShowLess}
                        className="px-6 py-3 rounded-lg bg-[#7E53D4] text-white font-semibold"
                    >
                        Show Less
                    </button>
                ) : (
                    // Show "See More" button if not all products are shown
                    <button
                        onClick={handleSeeMore}
                        className="px-6 py-3 rounded-lg bg-[#7E53D4] text-white font-semibold"
                    >
                        See More
                    </button>
                )}
            </div>
        </div>
    )
}

export default FeaturedProduct


// "use client"
// import React, { useEffect, useState } from 'react'
// import SectionTitle from '../SectionTitle/SectionTitle'
// import Image from 'next/image'
// import ArrowButton from '../ArrowButton/ArrowButton'

// const FeaturedProduct = () => {
//     const [products, setProducts] = useState([])
//     const [visibleProducts, setVisibleProducts] = useState(4)  // Initially show 4 products
//     const [showAll, setShowAll] = useState(false) // To track if all products are shown

//     // Fetch product data when the component mounts
//     useEffect(() => {
//         fetch("product.json")
//             .then(response => response.json())
//             .then(data => setProducts(data))
//             .catch(error => console.error("Error fetching products:", error))
//     }, [])

//     const handleSeeMore = () => {
//         setVisibleProducts(products.length)  // Show all products when "See more" is clicked
//         setShowAll(true)  // Set the state to show "Show Less" button
//     }

//     const handleShowLess = () => {
//         setVisibleProducts(4)  // Reset to show only 4 products
//         setShowAll(false)  // Set the state to show "See More" button
//     }

//     // Slice the products array to only show the number of visible products
//     const productsToDisplay = products.slice(0, visibleProducts)

//     return (
//         <div className='mt-5 p-5 max-w-7xl mx-auto'>
//             <div className='flex items-center justify-between'>
//                 <SectionTitle subHeader={"FEATURED PRODUCT"} mainHeader={"New Arrivals"} />
//                 <ArrowButton />
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {productsToDisplay.map((product) => (
//                     <div key={product.productId} className="bg-gray-50 rounded-md overflow-hidden cursor-pointer flex flex-col p-4 gap-2">
//                         <div className="flex justify-center items-center overflow-hidden h-full w-full">
//                             <Image
//                                 src={product.images}
//                                 alt={product.productName}
//                                 className="h-[80%] w-[80%] hover:scale-110 transition-all text-center"
//                                 width={600}
//                                 height={600}
//                             />
//                         </div>
//                         <div>
//                             <div className="flex items-center justify-between gap-5">
//                                 <h3 className="text-lg font-bold text-gray-800">{product.productName}</h3>
//                                 <p className="text-lg text-blue-600 font-bold">{product.price}</p>
//                             </div>
//                         </div>
//                         <button type="button" className="w-full px-5 py-2.5 rounded-lg border border-[#7E53D4] shadow-md text-[#7E53D4] font-semibold text-[16px]">
//                             Add to cart
//                         </button>
//                     </div>
//                 ))}
//             </div>

//             <div className="flex justify-center items-center h-full mt-4">
//                 {showAll ? (
//                     // Show "Show Less" button if all products are shown
//                     <button
//                         onClick={handleShowLess}
//                         className="px-6 py-3 rounded-lg bg-[#7E53D4] text-white font-semibold"
//                     >
//                         Show Less
//                     </button>
//                 ) : (
//                     // Show "See More" button if not all products are shown
//                     <button
//                         onClick={handleSeeMore}
//                         className="px-6 py-3 rounded-lg bg-[#7E53D4] text-white font-semibold"
//                     >
//                         See More
//                     </button>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default FeaturedProduct

