

export default function Vector() {
  return (
    <div className='absolute inset-0 z-0 md:-top-24 top-0 overflow-hidden'> {/* Set z-index to 0 for the vector */}
      <img
        src="/heroVector.png"
        alt="heroVector"
        className='object-cover h-[500px] md:h-[1000px]'
      />
    </div>
  );
}
