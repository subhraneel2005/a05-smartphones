import React from 'react';

export default function HeroImage() {
  return (
    <div className='relative flex-1 h-screen overflow-hidden'>
      {/* Blurred Hero Image */}
      <img
        src="/bluredHero.png"
        className='absolute inset-0 md:w-full md:h-full h-[511px] w-[480px] object-cover'
        alt="blurred heroImg"
      />

      {/* Main Hero Image */}
      <img
        src="/heroImg.png"
        className='relative z-10 md:w-full md:h-full h-[420px] w-[380px] object-cover'
        alt="heroImg"
      />
    </div>
  );
}
