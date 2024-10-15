export default function HeroImage() {
  return (
    <div className='relative flex-1 h-screen'>
      

      {/* Main Hero Image */}
      <img
        src="/heroImg.png"
        className='absolute z-10 w-[120%] h-full object-contain bottom-0' // Changed to w-full h-full and object-contain
        alt="heroImg"
      />
    </div>
  );
}
