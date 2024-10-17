

export default function Frame2() {
  return (
    <div className="relative mt-[16px] bg-[#FCCE8D] bg-opacity-[20%] border border-[#FCCE8D] w-full h-full min-h-[400px] md:h-[739px] flex flex-col items-center md:rounded-[36px] rounded-[16px]">
    {/* text div */}
    <div className="flex flex-col justify-start items-center z-10 md:px-[244.5px] md:pt-[34px] px-[12px] pt-[16px]">
        <h2 className="md:text-desktop/h2 text-mobile/h4 text-center max-w-full">App Harmony: Speed Performance</h2>
        <span className="md:py-[20px]">
            <h4 className="md:text-desktop/h4 text-mobile/h6 text-[#232323] text-opacity-85 text-center max-w-full py-[12px]">8GB (*4GB+4GB*) RAM + 64GB ROM</h4>
        </span>
        <p className="md:text-desktop/body/large text-desktop/body/2/regular text-[#1C1B1B] text-opacity-70 max-w-3xl text-center">
        Juggling apps has never been easier! Glide through your tasks with a fluid experience that makes multitasking a breeze.
        </p>
    </div>
    
    {/* img div */}
    <div className="md:px-[101px] md:pt-[117px] md:pb-[52px] absolute z-0 md:flex hidden">
        <img
        src="/orange.png"
        alt="Trees"
        className="w-[1045px] h-full mx-auto"
        />
    </div>
    <div className="px-[12px] pb-[64px] pt-[160px] absolute z-0 md:hidden flex">
        <img
        src="/orange.png"
        alt="Trees"
        className="w-[304px] h-full mx-auto"
        />
    </div>
    
    <p className="absolute bottom-0 text-opacity-70 text-[#6F7384] right-0 md:pb-[32.47px] md:pr-[36px] pr-[12px] pb-[14px] text-[10px] md:text-desktop/body/1">*Memory Fusion Technology</p>
    </div>
  )
}
