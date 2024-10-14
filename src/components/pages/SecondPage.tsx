

export default function SecondPage() {
  return (
    <>
        {/* Navbar */}
        <div className='w-full px-12 py-6 border-b border-gray-400 flex justify-between items-center'>
            <div>
                <img src="/logo.png" alt="logo" className="w-24 h-auto md:w-40"/>
            </div>

            <div className="hidden md:flex gap-6">
                <p className="text-gray-600 text-[16px] font-semibold">Overview</p>
                <p className="text-gray-600 text-[16px] font-semibold">Specifications</p>
            </div>

            <button className="md:w-[162px] md:h-[48px] w-[116px] h-[40px] md:bg-BuyNowRoundedBG bg-BuyNowMobileRoundedBG bg-cover bg-center">
            </button>
        </div>
        <div className='min-h-screen w-full flex flex-col justify-center items-center'>
        </div>
    </>
  )
}
