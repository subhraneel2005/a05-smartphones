const data = [
    {
        id: 1,
        name: "6.6” HD+",
        description: "Drop Notch Display",
    },
    {
        id: 2,
        name: "1612*720",
        description: "Pixels Resolution",
    },
    {
        id: 3,
        name: "120 Hz",
        description: "Touch Sampling Rate",
    },
    {
        id: 4,
        name: "60 Hz",
        description: "Refresh Rate"
    }
]

export default function ThirdPage() {
    return (
      <div className="min-h-screen w-full flex flex-col justify-center items-center xl:px-[0px] xl:py-[200px]">
        <img src="/Patterns.png" alt="patternsImg" className="max-w-none w-[100%] h-[30px] md:h-[48px] xl:h-[104px] absolute top-0"/>
        <div className="rounded-[64px] md:border md:border-[#FCCE8D] xl:w-[80%] xl:h-[60%] w-full h-full flex justify-center items-center flex-col p-8 mt-5">
            {/* frame 1 */}
            <div className="rounded-[64px] w-full h-full bg-[url('/bgTrees.png')] bg-cover bg-center">
            {/* Centered treesMobile image */}
            <img
                src="/treesMobile.png"
                alt="Trees"
                className="w-[80%] h-auto mx-auto mt-8" // Adjust the width and margin-top as necessary
            />
    
            {/* Divs containing texts */}
            <div className="grid grid-cols-2 md:flex md:justify-between xl:max-w-[80%] xl:justify-start xl:flex xl:ml-[260px] pt-6 xl:py-[5rem] gap-4 pb-7 md:pb-20">
                {data.map((d) => (
                    <div
                    key={d.id}
                    className="flex flex-col items-center mb-4 md:mb-0 md:w-1/4"
                >
                    <p className="text-[#fff] xl:text-[65px] xl:mb-4 text-mobile/h6 opacity-[80%] text-start">{d.name}</p>
                    <p className="text-[#fff] text-mobile/small/body xl:text-desktop/h3 opacity-[80%] xl:pt-[25px] text-start">{d.description}</p>
                </div>
                ))}
            </div>
            </div>
            
            {/* frame 2 */}
            <div className="relative bg-[#FCCE8D] bg-opacity-[20%] border border-[#FCCE8D] w-full h-full md:h-screen flex flex-col items-center rounded-[36px] mt-6">
            <img
                src="/orange.png"
                alt="Trees"
                className="w-[70%] h-auto mx-auto mt-56 md:mt-8 z-0"
            />

            {/* Position the text container at the very top */}
            <div className="absolute top-14 left-0 right-0 flex flex-col justify-start items-center space-y-4 md:space-y-6 z-10 p-4">
                <h2 className="md:text-desktop/h2 text-mobile/h4 text-center">App Harmony: Speed Performance</h2>
                <h4 className="md:text-desktop/h4 text-mobile/h6 text-[#232323] text-opacity-85 text-center">8GB (*4GB+4GB*) RAM + 64GB ROM</h4>
                <p className="md:text-desktop/body/large text-desktop/body/2/regular text-[#1C1B1B] max-w-3xl text-center">
                Juggling apps has never been easier! Glide through your tasks with a fluid experience that makes multitasking a breeze.
                </p>
            </div>
            <div className="absolute bottom-4 right-4 text-[#3c3c3c] text-[10px] md:text-[14px] z-10">
                *Memory Fusion Technology
            </div>
            </div>

             {/* frame 3 */}
             <div className="relative bg-[#FCCE8D] bg-opacity-[20%] border border-[#FCCE8D] w-full h-full md:h-screen flex flex-col justify-center items-center rounded-[36px] mt-6 ">
                
                <div className="flex flex-col justify-start items-start px-6 md:px-12 space-y-4 md:absolute md:top-1/2 md:left-[10%] md:transform md:-translate-y-1/2">
                    <h2 className="max-w-[360px] md:text-desktop/h2 text-mobile/h5 text-center md:text-left pt-6">
                    Unlock & Roll: Your Phone, Your Style!
                    </h2>
                    <p className="max-w-[355px] pt-4 md:max-w-md md:text-desktop/body/large text-desktop/body/2/regular text-[#1C1B1B] text-center md:text-left">
                    Step into the future with a phone that's both chic and practical. With its sleek design and fingerprint sensor, you have complete control right in your hand.
                    </p>

                    <div className="flex md:pt-7 pt-3 md:flex-col flex-row font-bold md:text-[16px] text-[12px] md:gap-0 gap-8 md:space-y-2 text-left max-w-[355px]">
                        <span className="flex gap-2 items-center">
                            <img src="/logos/f3l1.png" alt="f3l1" className="w-8 h-8 md:w-14 md:h-14" />
                            <p className="text-[14px] md:text-[20px] font-bold">Face Unlock</p>
                        </span>
                        <span className="flex gap-2 items-center md:pt-4">
                            <img src="/logos/f3l2.png" alt="f3l2" className="w-8 h-8 md:w-14 md:h-14" />
                            <p className="max-w-[100px] md:max-w-[150px] text-[14px] md:text-[20px] font-bold">Finger Print Sensor</p>
                        </span>
                    </div>
                </div>
                
                
                <img
                    src="/frame3Vector.png"
                    alt="Background Vector"
                    className="absolute bottom-0 right-0 -z-10 transform lg:translate-y-[-10%] md:translate-y-[-20%] opacity-80 w-1/2 md:w-[20%]"
                />


                {/* Foreground frame3 image */}
                <img
                    src="/frame3.png"
                    alt="Foreground Image"
                    className="mt-4 w-[80%] md:w-[50%] md:max-w-[600px] md:absolute md:bottom-0 md:right-12 mx-auto h-auto z-10"
                />
            </div>

            {/* frame 4 */}
            <div className="relative bg-[#FCCE8D] bg-opacity-[20%] border border-[#FCCE8D] w-full h-full md:h-screen flex flex-col justify-center items-center rounded-[36px] mt-6 ">
                {/* Foreground frame3 image */}
                <img
                    src="/frame4.png"
                    alt="Frame4Image"
                    className="w-[80%] md:w-[60%] md:max-w-[800px] lg:w-[50%] md:absolute bottom-0 md:left-20 lg:left-10 mx-auto h-auto z-10 hidden md:flex"
                />

                <div className="flex flex-col items-center px-2 md:px-12 lg:px-4 space-y-4 md:absolute md:top-1/2 md:right-[15%] md:transform md:-translate-y-1/2">
                    <h2 className="max-w-[355px] md:text-desktop/h2 text-mobile/h4 text-left">
                        Capture Twice the Detail
                    </h2>
                    <p className="max-w-[355px] md:text-desktop/body/large text-desktop/body/2/regular text-[#1C1B1B] text-left ml-3 md:ml-0">
                        Discover enhanced photography with our 8MP rear camera & 5MP front camera, designed for sharper, more vibrant images. Relive every moment with twice the clarity and detail.
                    </p>

                    <div className="flex flex-row font-bold md:text-[16px] text-[12px] md:gap-0 gap-4 py-7 px-3 md:px-0 max-w-[355px]">
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
  