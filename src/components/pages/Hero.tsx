import Vector from '../commons/Vector';

export default function Hero() {
  return (
    <div className='h-screen w-full bg-[#fff] overflow-hidden'>
      <Vector />
      {/* Vector in the background */}

      {/* Content container */}
      <div className='relative z-10 flex flex-col md:flex-row justify-between items-center h-full w-full'>

        <div className='flex-1 md:ml-28 -ml-14 md:px-8 pt-12'>
          <div className='px-2 rounded-[24px] border-2 border-black w-fit flex justify-center items-center'>
            <p className='mr-1 text-[14px] md:text-[16px] font-bold'>AWESOME SERIES</p>
            <svg className='mb-1' width="15" height="16" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.33013 10.1812C9.21348 10.2962 9.06294 10.3706 8.90075 10.3935C8.73855 10.4164 8.5733 10.3865 8.42938 10.3083L8.42047 10.3035L4.99975 8.37933L1.57903 10.3035L1.57012 10.3083C1.42619 10.3864 1.26095 10.4163 1.09877 10.3934C0.936598 10.3705 0.786067 10.2961 0.669375 10.1812L0.659097 10.1709C0.544472 10.0584 0.468212 9.91263 0.44115 9.75431C0.414087 9.596 0.437599 9.43318 0.508344 9.28899L4.29944 1.02739C4.30049 1.02489 4.30175 1.02248 4.30321 1.02019C4.36682 0.88977 4.46576 0.779819 4.58878 0.702848C4.71179 0.625876 4.85394 0.584975 4.99905 0.584796C5.14416 0.584618 5.2864 0.625169 5.40961 0.701838C5.53281 0.778507 5.63202 0.888214 5.69596 1.01848L5.69973 1.02568L9.49116 9.28899C9.56299 9.43543 9.58611 9.60101 9.55714 9.76152C9.52817 9.92204 9.44862 10.0691 9.33013 10.1812Z" fill="#3A3358"/>
            </svg>
          </div>

          <h1 className="md:text-[9rem] text-[2.4rem] font-bold mt-3">A05s</h1>
          <div className='flex flex-col text-[12px] md:text-[16px] text-gray-700 font-semibold'>
            <p>8GB* 4GB+4GB* RAM + 64GB ROM | 6.6" HD+</p>
            <p>Drop Notch Display | Type-C Charger</p>
          </div>
          <p className='md:mt-12 mt-10 md:text-[14px] text-[10px]'>Available at <span className='ml-2 font-bold text-lg'>₹6,499/-</span></p>

          {/* Pixelated button */}
          <button className="mt-4 hidden relative w-[200px] h-[48px] bg-BuyNowSquareBG bg-cover bg-center text-white md:flex items-center justify-center rounded-lg">
          </button>
          <p className="md:text-[16px] text-[12px] text-[#6F7384] md:bottom-10 bottom-4 absolute">*Memory Fusion Technology</p>
        </div>

        {/* Main hero image */}
        <img src="/heroImgMobile.png" alt="heroImgMobile" className='w-[100%] object-contain flex md:hidden mt-[-300px]' />
        <img src="/heroImg.png" alt="heroImg" className='w-[60%] object-contain hidden md:flex' />

        {/* Blurred hero image */}
        <img src="/bluredHero.png" alt="bluredHero" className='w-[100%] object-contain absolute bottom-[-20px] -z-10 md:hidden' />
        <img src="/bluredHero.png" alt="bluredHero" className='w-[60%] object-contain -z-10 absolute bottom-[-20px] right-[-20px] hidden md:flex' />
      </div>
    </div>
  );
}