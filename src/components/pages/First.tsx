import Frame1 from "../frames/Frame1";
import Frame2 from "../frames/Frame2";

export default function First() {
    return (
      <div className="min-h-screen w-full flex flex-col justify-center items-center md:py-[100px] md:px-[80px] py-[40px] px-[16px]">
        <div className="md:rounded-[36px] md:border md:border-[#FCCE8D] flex justify-center items-center flex-col md:p-[16px]">
            <Frame1/>
            <Frame2/>

             {/* frame 3 */}
             <div className="relative bg-[#FCCE8D] bg-opacity-[20%] border border-[#FCCE8D] w-full h-full md:h-screen flex flex-col justify-center items-center rounded-[36px] mt-6">
                
                <div className="flex flex-col justify-start items-start px-6 md:px-12 space-y-4 md:absolute md:top-1/2 md:left-[10%] md:transform md:-translate-y-1/2">
                    <h2 className="max-w-[355px] md:text-desktop/h2 text-mobile/h4 text-center md:text-left pt-6">
                    Unlock & Roll: Your Phone, Your Style!
                    </h2>
                    <p className="max-w-[355px] md:text-desktop/body/large text-desktop/body/2/regular text-[#1C1B1B] text-center md:text-left">
                    Step into the future with a phone that's both chic and practical. With its sleek design and fingerprint sensor, you have complete control right in your hand.
                    </p>

                    <div className="flex pt-7 md:flex-col flex-row font-bold md:text-[16px] text-[12px] md:gap-0 gap-4 md:space-y-2 text-left max-w-[355px]">
                        <span className="flex gap-2 items-center">
                            <img src="/logos/f3l1.png" alt="f3l1" className="w-6 h-6 md:w-10 md:h-10" />
                            <p>Face Unlock</p>
                        </span>
                        <span className="flex gap-2 items-center md:pt-4">
                            <img src="/logos/f3l2.png" alt="f3l2" className="w-6 h-6 md:w-10 md:h-10" />
                            <p>Finger Print Sensor</p>
                        </span>
                    </div>
                </div>
                
                {/* task: insert another img that will be behind this frame3 image , src="/frame3Vector.png" */}
                <img
                    src="/frame3Vector.png"
                    alt="Background Vector"
                    className="absolute bottom-0 right-0 -z-10 transform translate-y-[-20%] opacity-80  w-1/2 md:w-auto"
                />


                {/* Foreground frame3 image */}
                <img
                    src="/frame3.png"
                    alt="Foreground Image"
                    className="mt-4 w-[80%] md:w-[50%] md:max-w-[600px] md:absolute md:bottom-0 md:right-12 mx-auto h-auto z-10"
                />
            </div>

            {/* frame 4 */}
            <div className="relative bg-[#FCCE8D] bg-opacity-[20%] border border-[#FCCE8D] w-full h-full md:h-screen flex flex-col justify-center items-center rounded-[36px] mt-6">
                {/* Foreground frame3 image */}
                <img
                    src="/frame4.png"
                    alt="Frame4Image"
                    className="w-[80%] md:w-[60%] md:max-w-[800px] md:absolute bottom-0 md:left-20 mx-auto h-auto z-10 hidden md:flex"
                />

                <div className="flex flex-col items-center px-6 md:px-12 space-y-4 md:absolute md:top-1/2 md:right-[10%] md:transform md:-translate-y-1/2">
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
    );
  }
  