import banner from '../assets/banner-stack.png'
const Banner = () => {
    
  return (
    <>
        <section className='flex justify-between items-center container mx-auto'>
            <div className='w-174'>
                <h1 className='leading-none text-[#0F172A] font-inter font-extrabold text-[60px]'>Build Your Ideal</h1>
                <h1 className='leading-none font-inter font-extrabold text-[60px] bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</h1>
                
                <div className='my-8'>
                    <p className='text-[#475569] text-[18px]'>Explore frontend, backend, database, and tooling options,</p>
                    <p className=' w-137.5 text-[#475569] text-[18px]'> compare them side by side, and put together the stack that fits your
                    next project.</p>
                </div>

               <div className="flex items-center gap-2">
                    <button className="w-42 h-10 text-[14px] font-semibold text-[#FFFFFF] rounded-md  bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]">
                        Explore Technologies
                    </button>

                    <button className="w-42 h-10 text-[14px] font-semibold  text-gray-600 border border-gray-200 rounded-md">
                        Learn More
                    </button>
                </div>
            </div>
            
            <img src={banner} alt="banner" />

        </section>
    
    </>
  )
}

export default Banner