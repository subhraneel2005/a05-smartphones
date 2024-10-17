

export default function Frame4() {
  return (
    <div className="relative mt-[16px] bg-[#FCCE8D] bg-opacity-[20%] border border-[#FCCE8D] w-full h-full min-h-[630px] md:h-[739px] flex flex-col items-center md:rounded-[36px] rounded-[16px]">
                
                <div className="flex flex-col md:flex-row md:pt-[60px] overflow-hidden md:rounded-[36px] rounded-[16px] w-full justify-center items-center">
                    <img
                        src="/frame4.png"
                        alt="Frame4Image"
                        className="hidden md:flex max-w-[847px] h-auto"
                    />

                    <div className="flex flex-col items-center md:pl-[50px] pt-[16px] md:pt-[10px] pb-[32px] max-w-[288px] md:max-w-[400px]">
                        <h2 className="max-w-[355px] md:text-desktop/h2 text-mobile/h4 text-left md:pb-[20px] pb-[12px] md:pr-[37px]">
                            Capture Twice the Detail
                        </h2>
                        <p className="max-w-[355px] md:text-desktop/body/large text-desktop/body/2/regular text-[#1C1B1B] text-left ml-6 md:ml-0">
                            Discover enhanced photography with our 8MP rear camera & 5MP front camera, designed for sharper, more vibrant images. Relive every moment with twice the clarity and detail.
                        </p>

                        <div className="ml-3 md:ml-0 flex flex-row font-bold md:text-[16px] text-[12px] md:gap-[42px] gap-[20px] py-7 max-w-[355px] md:pt-[40px] pt-[54px]">
                            <span className="flex flex-col items-start space-y-2">
                                <img src="/logos/f4l1.png" alt="f3l1" className="w-6 h-6 md:w-10 md:h-10" />
                                <p className="text-left md:text-desktop/h6/medium text-mobile/body/large md:max-w-[103px] max-w-[93px]">8MP Dual Rear Cam</p>
                            </span>
                            <span className="flex flex-col items-start space-y-2">
                                <img src="/logos/f4l2.png" alt="f3l2" className="w-6 h-6 md:w-10 md:h-10" />
                                <p className="text-left md:text-desktop/h6/medium text-mobile/body/large md:max-w-[103px] max-w-[93px]">5MP Front Camera</p>
                            </span>
                            <span className="flex flex-col items-start space-y-2">
                                <img src="/logos/f4l3.png" alt="f3l2" className="w-6 h-6 md:w-10 md:h-10" />
                                <p className="text-left md:text-desktop/h6/medium text-mobile/body/large md:max-w-[103px] max-w-[93px]">Flashlight</p>
                            </span>
                        </div>
                    </div>


                    <img
                        src="/frame4Mob.png"
                        alt="Frame4Image"
                        className="max-w-[400px]  mx-auto h-auto z-10 md:hidden flex"
                    />

                </div>
                

            </div>
  )
}
