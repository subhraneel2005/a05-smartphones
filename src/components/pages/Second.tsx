export default function Second() {
  return (
    <div className='relative bg-[#FCCE8D] bg-opacity-[20%] border md:h-screen border-[#FCCE8D] flex flex-col justify-center items-center overflow-hidden'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-no-repeat bg-cover bg-center z-0'
        style={{ backgroundImage: "url('/midVector.png')" }}
      ></div>

      {/* Content */}
      <div className='flex flex-col items-center md:px-[293px] px-[43px] pt-[21px] md:pt-[80px] z-10'>
        <p className='md:text-desktop/h2 text-mobile/h5 text-start xxl:max-w-full mt-5 md:block md:mt-20'>
          Experience the Ultimate 
          <span className='block md:inline text-center text-[#FF335F]'> Awesomeness</span>
        </p>
      </div>
      
      <div className='flex-grow'></div> {/* This will push the image to the bottom */}
      <img 
        src="/4mobs.png" 
        alt="4mobs" 
        className='md:w-[90%] w-[100%] max-w-full h-auto mx-auto md:pt-[40px] pt-0 object-cover z-10' 
      />
    </div>
  )
}
