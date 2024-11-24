import React from 'react'

const SectionTitle = ({subHeader,mainHeader}) => {
    return (
        <div>
            <h3 className="uppercase text-gray-500 lg:text-[19px] text-[14px]">
                {subHeader}
            </h3>
            <h2 className="text-primary font-bold lg:text-4xl text-[18px] text-italic">
                {mainHeader}
            </h2>
        </div>
    )
}

export default SectionTitle