import React from 'react'

const ArrowButton = () => {
    return (
        <div className="flex space-x-2"> {/* space-x-2 will add a small horizontal gap */}
            <button className="btn btn-circle border-2 border-[#7E53D4] rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M4.00002 12.5002H20" stroke="#7E53D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.99966 7.5C8.99966 7.5 3.99976 11.1824 3.99976 12.5C3.99976 13.8176 8.99976 17.5 8.99976 17.5" stroke="#7E53D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button className="btn btn-circle btn-outline text-[#7E53D4] border-2 border-[#7E53D4] rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M20 12.4998H4" stroke="#7E53D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.0003 17.5C15.0003 17.5 20.0002 13.8176 20.0002 12.5C20.0002 11.1824 15.0002 7.5 15.0002 7.5" stroke="#7E53D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    )
}

export default ArrowButton
