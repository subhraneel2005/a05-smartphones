export default function MIdPage() {
  return (
    <div className='relative bg-[#FCCE8D] bg-opacity-[20%] border border-[#FCCE8D] flex flex-col justify-center items-center px-3'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-no-repeat bg-cover bg-center z-0'
        style={{ backgroundImage: "url('/midVector.png')" }}
      ></div>

      {/* Content */}
      <div className='flex flex-col items-center mb-4 z-10'>
        <p className='xxl:text-desktop/h1 text-mobile/h5 text-start xxl:max-w-full mt-5 md:block md:mt-20'>
          Experience the Ultimate 
          <span className='block md:inline text-center text-[#FF335F]'> Awesomeness</span>
        </p>
      </div>
      
      <div className='flex-grow'></div> {/* This will push the image to the bottom */}
      <img 
        src="/4mobs.png" 
        alt="4mobs" 
        className='w-[80%] max-w-full h-auto mb-0 z-10' 
      />
    </div>
  )
}
