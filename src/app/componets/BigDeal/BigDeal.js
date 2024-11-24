import Image from 'next/image'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'

const BigDeal = () => {
    return (
        <div className="flex mt-6 px-6 md:px-20 items-center justify-center bg-hero overflow-hidden bg-[#EEECFB]">
            <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
                <div className="w-full md:w-2/3 lg:pr-32">
                    <h2 className="text-md lg:text-xl text-center md:text-left text-[#6F42C1] font-light tracking-wider leading-relaxed italic" >Big Deal</h2>
                    <h3 className="text-2xl lg:text-5xl text-center md:text-left leading-tight font-bold"> <span className='text-[#6F42C1] '>30% </span>Off for New Customers
                    </h3>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start">
                        <ButtonPrimary/>
                    </div>
                </div>
                <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                    <Image
                        src="https://i.ibb.co.com/yQwSBnP/image-2-1.png"  
                        alt="Girl Image"
                        width={400}
                        height={500}
                    />
                </div>
            </div>
        </div>
    )
}

export default BigDeal
