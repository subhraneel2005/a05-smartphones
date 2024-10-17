import Frame1 from "../frames/Frame1";
import Frame2 from "../frames/Frame2";
import Frame3 from "../frames/Frame3";

export default function First() {
    return (
      <div className="min-h-screen w-full flex flex-col justify-center items-center md:py-[100px] md:px-[80px] py-[40px] px-[16px]">
        <div className="md:rounded-[36px] md:border md:border-[#FCCE8D] flex justify-center items-center flex-col md:p-[16px]">
            <Frame1/>
            <Frame2/>
            <Frame3/>

            {/* frame 4 */}
            <div className="relative mt-[16px] bg-[#FCCE8D] bg-opacity-[20%] border border-[#FCCE8D] w-full h-full min-h-[630px] md:h-screen flex flex-col items-center md:rounded-[36px] rounded-[16px]">
                
                <div className="flex flex-col md:flex-row md:pt-[60px]">
                    <img
                        src="/frame4.png"
                        alt="Frame4Image"
                        className="hidden md:flex w-[60%] h-auto mx-auto"
                    />

                    <div className="flex flex-col items-center md:pt-[124px] md:pb-[175px] md:pl-[91px] md:pr-[39px]">
                        <h2 className="max-w-[355px] md:text-desktop/h2 text-mobile/h5 text-left pt-6">
                            Capture Twice the Detail
                        </h2>
                        <p className="max-w-[355px] md:text-desktop/body/large text-desktop/body/2/regular text-[#1C1B1B] text-left ml-3 md:ml-0">
                            Discover enhanced photography with our 8MP rear camera & 5MP front camera, designed for sharper, more vibrant images. Relive every moment with twice the clarity and detail.
                        </p>

                        <div className="flex flex-row font-bold md:text-[16px] text-[12px] md:gap-0 gap-4 py-7 max-w-[355px]">
                            <span className="flex flex-col items-start">
                                <img src="/logos/f4l1.png" alt="f3l1" className="w-6 h-6 md:w-10 md:h-10" />
                                <p className="text-left">8MP Dual Rear Camera</p>
                            </span>
                            <span className="flex flex-col items-start">
                                <img src="/logos/f4l2.png" alt="f3l2" className="w-6 h-6 md:w-10 md:h-10" />
                                <p className="text-left">5MP Front Camera</p>
                            </span>
                            <span className="flex flex-col items-start">
                                <img src="/logos/f4l3.png" alt="f3l2" className="w-6 h-6 md:w-10 md:h-10" />
                                <p className="text-left">Flashlight</p>
                            </span>
                        </div>
                    </div>


                    <img
                        src="/frame4.png"
                        alt="Frame4Image"
                        className="w-[80%] md:w-[60%] md:max-w-[800px] md:absolute bottom-0 md:left-20 mx-auto h-auto z-10 md:hidden flex"
                    />

                </div>
                

            </div>

        </div>
      </div>
    );
  }
  