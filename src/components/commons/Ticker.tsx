export default function Ticker() {
    const items = [
      {
        text: "AWESOME SERIES",
        logo: "/logos/tickerLogo.png",
      },
      {
        text: "IMPRESSIVELY AWESOME",
        logo: "/logos/tickerLogo.png",
      },
    ];
  
    return (
      <>
      <div className='w-full bg-[#EBE8E2] font-bold text-[12px] md:text-[16px] mt-10 md:mt-0 px-6 py-3 flex justify-center items-center overflow-hidden'>
        <div className="ticker-wrapper flex whitespace-nowrap animate-scroll">
          {/* Loop the items array to generate content */}
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="flex items-center justify-center gap-10 px-4">
              <div className="gap-4 flex justify-center items-center">
              <img src={items[0].logo} alt="tickerLogo" />
              <p className="text-[#6B6682]">{items[0].text}</p>
              <img src={items[0].logo} alt="tickerLogo" />
              </div>
              <div className="gap-4 flex justify-center items-center">
              <img src={items[1].logo} alt="tickerLogo" />
              <p className="text-[#6B6682]">{items[1].text}</p>
              <img src={items[1].logo} alt="tickerLogo" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
          <img src="/Video.png" alt="video" className="w-full md:h-screen h-auto object-cover" />
          <img src="/Patterns.png" alt="patternsImg" className="max-w-none w-[100%] h-[30px] md:h-[48px]"/>
      </div>
      </>
    );
  }
  