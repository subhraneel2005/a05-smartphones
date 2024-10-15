

export default function MIdPage() {
  return (
    <div className='bg-[#FCCE8D] bg-opacity-[20%] border border-[#FCCE8D] flex flex-col justify-center items-center px-3'>
    <div className='flex flex-col items-center mb-4'>
        <p className='text-center text-mobile/h6 md:text-desktop/h2 md:block mt-10 md:mt-20'>
            Experience the Ultimate 
            <span className='block md:inline text-[#FF335F]'> Awesomeness</span>
        </p>
    </div>
    <div className='flex-grow'></div> {/* This will push the image to the bottom */}
    <img 
        src="/4mobs.png" 
        alt="4mobs" 
        className='w-[80%] max-w-full h-auto mb-0' 
    />
</div>
  )
}
