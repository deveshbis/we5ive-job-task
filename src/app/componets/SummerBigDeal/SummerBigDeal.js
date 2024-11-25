// "use client"
// import React, { useState, useEffect } from 'react'
// import Image from 'next/image'
// import SectionTitle from '../SectionTitle/SectionTitle'
// import ArrowButton from '../ArrowButton/ArrowButton'
// import Link from 'next/link'

// const SummerBigDeal = () => {
//     const [products, setProducts] = useState([]);
//     const [visibleProducts, setVisibleProducts] = useState(8);
//     const [showAll, setShowAll] = useState(false);


//     useEffect(() => {
//         fetch('SummerProduct.json')
//             .then((response) => response.json())
//             .then((data) => setProducts(data))
//             .catch((error) => console.error('Error fetching products:', error));
//     }, []);

//     const handleSeeMore = () => {
//         setVisibleProducts(products.length);
//         setShowAll(true);
//     };

//     const handleShowLess = () => {
//         setVisibleProducts(8);
//         setShowAll(false);
//     };

//     return (
//         <div className='mt-5 p-5'>
//             <div className='flex items-center justify-between'>
//                 <SectionTitle subHeader={"SUMMER"} mainHeader={"Big Deal"} />
//                 <ArrowButton />
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {products.slice(0, visibleProducts).map((product) => (
                    
//                     <div key={product.productId} className="bg-gray-50 rounded-md overflow-hidden cursor-pointer flex flex-col p-4 gap-2">
//                         <div className="flex justify-center items-center overflow-hidden h-full w-full">
//                             <Image
//                                 src={product.images ? product.images : '/mage.jpg'}
//                                 alt={product.productName}
//                                 className="h-[80%] w-[80%] hover:scale-110 transition-all text-center"
//                                 width={600}
//                                 height={600}
//                             />
//                         </div>
//                         <div className="flex space-x-1.5">
//                             <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                             <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
//                                 xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                             </svg>
//                         </div>
//                         <div>
//                             <div className="flex items-center justify-between gap-5">
//                                 <h3 className="text-lg font-bold text-gray-800">{product.productName}</h3>
//                                 <p className="text-lg text-blue-600 font-bold">{product.price}</p>
//                             </div>
//                         </div>
//                         <button
//                             type="button"
//                             className="w-full px-5 py-2.5 rounded-lg border border-[#7E53D4] shadow-md text-[#7E53D4] font-semibold text-[16px]"
//                         >
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
//     );
// }

// export default SummerBigDeal;




// "use client"
// import React, { useState, useEffect } from 'react'
// import Image from 'next/image'
// import SectionTitle from '../SectionTitle/SectionTitle'
// import ArrowButton from '../ArrowButton/ArrowButton'
// import Link from 'next/link'

// const SummerBigDeal = () => {
//     const [products, setProducts] = useState([]);
//     const [visibleProducts, setVisibleProducts] = useState(8);
//     const [showAll, setShowAll] = useState(false);

//     useEffect(() => {
//         fetch('SummerProduct.json')
//             .then((response) => response.json())
//             .then((data) => setProducts(data))
//             .catch((error) => console.error('Error fetching products:', error));
//     }, []);

//     const handleSeeMore = () => {
//         setVisibleProducts(products.length);
//         setShowAll(true);
//     };

//     const handleShowLess = () => {
//         setVisibleProducts(8);
//         setShowAll(false);
//     };

//     return (
//         <div className='mt-5 p-5'>
//             <div className='flex items-center justify-between'>
//                 <SectionTitle subHeader={"SUMMER"} mainHeader={"Big Deal"} />
//                 <ArrowButton />
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {products.slice(0, visibleProducts).map((product) => (
//                     <div
//                         key={product.productId}
//                         className="bg-gray-50 rounded-md overflow-hidden cursor-pointer flex flex-col p-4 gap-2"
//                     >
//                         <div className="flex justify-center items-center overflow-hidden h-full w-full">
//                             <Link href={`/product/${product.productId}`}>
//                                 <Image
//                                     src={product.images ? product.images : '/mage.jpg'}
//                                     alt={product.productName}
//                                     className="h-[80%] w-[80%] hover:scale-110 transition-all text-center"
//                                     width={600}
//                                     height={600}
//                                 />
//                             </Link>
//                         </div>
//                         <div className="flex space-x-1.5">
//                             {/* Stars / Ratings */}
//                             <svg
//                                 className="w-4 fill-[#facc15]"
//                                 viewBox="0 0 14 13"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
//                                 />
//                             </svg>
//                             {/* Add additional star ratings here */}
//                         </div>
//                         <div>
//                             <div className="flex items-center justify-between gap-5">
//                                 <h3 className="text-lg font-bold text-gray-800">{product.productName}</h3>
//                                 <p className="text-lg text-blue-600 font-bold">{product.price}</p>
//                             </div>
//                         </div>
//                         <button
//                             type="button"
//                             className="w-full px-5 py-2.5 rounded-lg border border-[#7E53D4] shadow-md text-[#7E53D4] font-semibold text-[16px]"
//                         >
//                             Add to cart
//                         </button>
//                     </div>
//                 ))}
//             </div>

//             <div className="flex justify-center items-center h-full mt-4">
//                 {showAll ? (
//                     <button
//                         onClick={handleShowLess}
//                         className="px-6 py-3 rounded-lg bg-[#7E53D4] text-white font-semibold"
//                     >
//                         Show Less
//                     </button>
//                 ) : (
//                     <button
//                         onClick={handleSeeMore}
//                         className="px-6 py-3 rounded-lg bg-[#7E53D4] text-white font-semibold"
//                     >
//                         See More
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default SummerBigDeal;
















"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import SectionTitle from '../SectionTitle/SectionTitle'
import ArrowButton from '../ArrowButton/ArrowButton'
import Link from 'next/link'
import { product_data } from '@/app/Assets/assets'
import ProductCard from '../ProductCard/ProductCard'

const SummerBigDeal = () => {
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(8);
    const [showAll, setShowAll] = useState(false);

    // useEffect(() => {
    //     fetch('SummerProduct.json')
    //         .then((response) => response.json())
    //         .then((data) => setProducts(data))
    //         .catch((error) => console.error('Error fetching products:', error));
    // }, []);

    const handleSeeMore = () => {
        setVisibleProducts(products.length);
        setShowAll(true);
    };

    const handleShowLess = () => {
        setVisibleProducts(8);
        setShowAll(false);
    };

    return (
        <div className='mt-5 p-5'>
            <div className='flex items-center justify-between'>
                <SectionTitle subHeader={"SUMMER"} mainHeader={"Big Deal"} />
                <ArrowButton />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    product_data.map((item, index)=>{
                        return <ProductCard key={index} id={item.id} images={item.images} productName={item.productName} price={item.price}/>
                    })
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
