/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { product_data } from '@/app/Assets/assets'
import Footer from '@/app/componets/Footer/Footer'
import Header from '@/app/componets/Header/Header'
import RelatedProduct from '@/app/componets/RelatedProduct/RelatedProduct'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { IoBagOutline } from "react-icons/io5";

const Page = ({ params }) => {
    // Use React.use() to unwrap the params
    const id = React.use(params).id; // Access the id after unwrapping

    const [data, setData] = useState(null);
    const [activeTab, setActiveTab] = useState('description');

    // State to keep track of selected size and color
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState(null); // Track selected color
    const colors = ['#000000', '#9CA3AF']; // Array of colors

    const [quantity, setQuantity] = useState(1);
    const [cartCount, setCartCount] = useState(0);

    // Function to handle adding products to the cart
    const addToCart = () => {
        setCartCount(prevCount => {
            const newCount = prevCount + 1;

            // Show SweetAlert after the count is updated
            Swal.fire({
                title: 'Success!',
                text: `Item added to cart. Total items: ${newCount}`,
                icon: 'success',
                confirmButtonText: 'Okay'
            });

            return newCount;
        });
    };

    // Function to handle the decrease action
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    // Function to handle the increase action
    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    // Arrays to store available sizes and colors
    const sizes = ['SM', 'MD', 'LG', 'XL'];

    const fetchProductData = () => {
        for (let i = 0; i < product_data.length; i++) {
            if (Number(id) === product_data[i].id) {
                setData(product_data[i]);
                console.log(product_data[i]);
                break;
            }
        }
    }

    useEffect(() => {
        fetchProductData();
    }, [fetchProductData, id]);


    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    // Handle size selection
    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    // Handle color selection



    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header cartCount={cartCount} />
            <div>
                <div className="font-sans bg-white flex items-center justify-between">
                    <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
                        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-16 mt-20">
                            <div className="w-full lg:sticky top-0 text-center">
                                <div className="lg:h-[560px] bg-[#EEECFB] ">
                                    <Image width={400} height={400} src={data.images} alt="Product" className="lg:w-11/12 w-[500px] h-[500px] rounded-md object-cover object-top" />
                                </div>

                                <div className="flex flex-wrap gap-4 justify-center mx-auto mt-4">
                                    <Image width={600} height={600} src={data.images} alt="Product1" className=" bg-[#EEECFB] w-16 cursor-pointer rounded-md outline" />
                                    <Image width={600} height={600} src={data.images} alt="Product2" className=" bg-[#EEECFB] w-16 cursor-pointer rounded-md" />
                                    <Image width={600} height={600} src={data.images} alt="Product3" className=" bg-[#EEECFB] w-16 cursor-pointer rounded-md" />
                                    <Image width={600} height={600} src={data.images} alt="Product4" className=" bg-[#EEECFB] w-16 cursor-pointer rounded-md" />
                                </div>
                            </div>

                            <div>
                                <button type="button"
                                    className="px-10 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-[#2F1C59] hover:bg-[#2F1C59] mb-8">New Arrival</button>
                                <div className="flex flex-wrap items-start gap-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-[#1D1D1D]">{data.productName}</h2>
                                        <div className="flex items-center justify-center space-x-1">
                                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <p className="text-sm font-semibold text-gray-400 !m-2">3.0 out of 5</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 items-start">
                                    <div className=''>
                                        <p className="text-gray-800 text-4xl font-bold">{data.price}</p>
                                    </div>
                                </div>

                                <hr className="my-8" />

                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">Choose a Size</h3>
                                        <div className="flex flex-wrap gap-4 mt-4">
                                            {sizes.map((size) => (
                                                <button
                                                    key={size}
                                                    type="button"
                                                    className={`w-10 h-10 border font-semibold text-sm rounded-md flex items-center justify-center shrink-0 ${selectedSize === size ? 'border-[#7E53D4]' : 'hover:border-[#7E53D4]'
                                                        }`}
                                                    onClick={() => handleSizeClick(size)}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">Choose a Color</h3>
                                        <div className="flex flex-wrap gap-4 mt-4">
                                            {colors.map(color => (
                                                <button
                                                    key={color}
                                                    type="button"
                                                    className={`w-8 h-8 rounded-full shrink-0 ${selectedColor === color ? 'border-2 border-[#7E53D4]' : 'border border-white'}`}
                                                    style={{ backgroundColor: color }}
                                                    onClick={() => setSelectedColor(color)} // Update the selected color
                                                ></button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <hr className="my-8" />

                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">Quantity</h3>
                                    <div className="flex divide-x border w-max mt-4 rounded overflow-hidden">
                                        {/* Decrease Button */}
                                        <button
                                            type="button"
                                            className="bg-gray-100 w-12 h-10 font-semibold"
                                            onClick={handleDecrease}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-3 fill-current inline"
                                                viewBox="0 0 124 124"
                                            >
                                                <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"></path>
                                            </svg>
                                        </button>

                                        {/* Display Quantity */}
                                        <button
                                            type="button"
                                            className="bg-transparent w-12 h-10 font-semibold text-gray-800 text-lg"
                                        >
                                            {quantity}
                                        </button>

                                        {/* Increase Button */}
                                        <button
                                            type="button"
                                            className="bg-gray-800 text-white w-12 h-10 font-semibold"
                                            onClick={handleIncrease}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-3 fill-current inline"
                                                viewBox="0 0 42 42"
                                            >
                                                <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <hr className="my-8" />

                                <div className="flex flex-wrap gap-4">
                                    <button type="button" className="min-w-[200px] px-4 py-3 bg-[#7E53D4] hover:bg-gray-900 text-white text-sm font-semibold rounded-md">Buy now</button>
                                    <button type="button" onClick={addToCart} className="min-w-[200px] px-4 py-2.5 border  border-[#7E53D4] text-[#7E53D4]  text-sm font-semibold rounded-md">Add to cart</button>
                                </div>

                                {/* w-full px-5 py-2.5 rounded-lg border border-[#7E53D4] shadow-md text-[#7E53D4] font-semibold text-[16px] */}
                            </div>
                        </div>
                        <div className="mt-20 w-full max-w-full">
                            <ul className="flex border-b">
                                <div >
                                    <div className="flex border-b text-sm text-gray-800">
                                        <button
                                            onClick={() => handleTabClick('description')}
                                            className={`flex-1 py-3 text-center border-b-2 ${activeTab === 'description' ? 'border-[#7E53D4] text-[#7E53D4]' : 'border-transparent'}`}
                                        >
                                            Description
                                        </button>
                                        <button
                                            onClick={() => handleTabClick('reviews')}
                                            className={`flex-1 py-3 text-center border-b-2 ${activeTab === 'reviews' ? 'border-[#7E53D4] text-p[#7E53D4]' : 'border-transparent'}`}
                                        >
                                            Reviews
                                        </button>
                                        <button
                                            onClick={() => handleTabClick('discussion')}
                                            className={`flex-1 py-3 text-center border-b-2 ${activeTab === 'discussion' ? 'border-[#7E53D4] text-[#7E53D4]' : 'border-transparent'}`}
                                        >
                                            Discussion
                                        </button>
                                    </div>

                                    <div className="py-8">
                                        {activeTab === 'description' && (
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-800">Product Description</h3>
                                                <p>{data?.description}</p>
                                                <div className="mt-8">
                                                    <p className="text-sm text-gray-500 mt-4">
                                                        Elevate your casual style with our premium mens t-shirt. Crafted for comfort and designed with a modern fit, this versatile shirt is an essential addition to your wardrobe. The soft and breathable fabric ensures all-day comfort, making it perfect for everyday wear. Its classic crew neck and short sleeves offer a timeless look.
                                                    </p>
                                                </div>

                                                <ul className="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-500">
                                                    <li>A gray t-shirt is a wardrobe essential because it is so versatile.</li>
                                                    <li>Available in a wide range of sizes, from extra small to extra large, and even in tall and petite sizes.</li>
                                                    <li>This is easy to care for. They can usually be machine-washed and dried on low heat.</li>
                                                    <li>You can add your own designs, paintings, or embroidery to make it your own.</li>
                                                </ul>
                                            </div>
                                        )}
                                        {activeTab === 'reviews' && (
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-800">Reviews (10)</h3>
                                                <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                                                    <div className="grid md:grid-cols-2 gap-12 mt-4">
                                                        <div className="space-y-3">
                                                            <div className="flex items-center">
                                                                <p className="text-sm text-gray-800 font-bold">5.0</p>
                                                                <svg className="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                                </svg>
                                                                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                                                    <div className="w-2/3 h-full rounded bg-blue-600"></div>
                                                                </div>
                                                                <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
                                                            </div>

                                                            <div className="flex items-center">
                                                                <p className="text-sm text-gray-800 font-bold">4.0</p>
                                                                <svg className="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                                </svg>
                                                                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                                                    <div className="w-1/3 h-full rounded bg-blue-600"></div>
                                                                </div>
                                                                <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
                                                            </div>

                                                            <div className="flex items-center">
                                                                <p className="text-sm text-gray-800 font-bold">3.0</p>
                                                                <svg className="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                                </svg>
                                                                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                                                    <div className="w-1/6 h-full rounded bg-blue-600"></div>
                                                                </div>
                                                                <p className="text-sm text-gray-800 font-bold ml-3">16%</p>
                                                            </div>

                                                            <div className="flex items-center">
                                                                <p className="text-sm text-gray-800 font-bold">2.0</p>
                                                                <svg className="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                                </svg>
                                                                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                                                    <div className="w-1/12 h-full rounded bg-blue-600"></div>
                                                                </div>
                                                                <p className="text-sm text-gray-800 font-bold ml-3">8%</p>
                                                            </div>

                                                            <div className="flex items-center">
                                                                <p className="text-sm text-gray-800 font-bold">1.0</p>
                                                                <svg className="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                                </svg>
                                                                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                                                    <div className="w-[6%] h-full rounded bg-blue-600"></div>
                                                                </div>
                                                                <p className="text-sm text-gray-800 font-bold ml-3">6%</p>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div className="flex items-start">
                                                                <Image
                                                                    width={600}
                                                                    height={600}
                                                                    alt=''
                                                                    src="https://readymadeui.com/team-2.webp"
                                                                    className="w-12 h-12 rounded-full border-2 border-white"
                                                                />
                                                                <div className="ml-3">
                                                                    <h4 className="text-lg font-medium text-gray-800">John Doe</h4>
                                                                    <p className="text-sm text-gray-500">1 year ago</p>
                                                                </div>
                                                            </div>
                                                            <p className="mt-4 text-sm text-gray-600">
                                                                This product is excellent! It exceeded my expectations in terms of quality and comfort. Would definitely recommend it.
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="mt-8 text-center">
                                                        <button className="text-sm font-semibold text-blue-600 hover:text-blue-800">
                                                            Read all reviews
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {activeTab === 'discussion' && (
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-800">Discussion Section</h3>
                                                <p className="mt-4 text-gray-600">This section is for product-related discussions.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </ul>
                        </div>

                    </div >
                    <div className="md:block hidden"> {/* Hide the button on mobile (by default) */}
                        <button type="button"
                            className="px-5 py-10 flex items-center justify-center gap-2 rounded-l-3xl text-white text-sm tracking-wider font-medium border-none outline-none bg-purple-600 hover:bg-purple-700 active:bg-purple-600">
                            <IoBagOutline className='text-2xl font-bold' />
                            Your Bag <br />
                            0 {/* Quantity goes here */}
                        </button>
                    </div>

                </div >
                <RelatedProduct />
            </div>


            <Footer />

        </div>
    )
}

export default Page;

