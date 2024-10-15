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
      <div className="min-h-screen w-full flex flex-col justify-center items-center md:py-12 py-3 px-[16px] md:px-[36px]">
        <div className="rounded-[36px] border border-[#FCCE8D] w-full h-full flex justify-center items-center flex-col p-3">
            {/* frame 1 */}
            <div className="rounded-[36px] w-full h-full bg-[url('/bgTrees.png')] bg-cover bg-center">
            {/* Centered treesMobile image */}
            <img
                src="/treesMobile.png"
                alt="Trees"
                className="w-[80%] h-auto mx-auto mt-8" // Adjust the width and margin-top as necessary
            />
    
            {/* Divs containing texts */}
            <div className="grid grid-cols-2 md:flex md:justify-between mt-4 gap-4">
                {data.map((d) => (
                    <div
                    key={d.id}
                    className="flex flex-col items-center mb-4 md:mb-0 md:w-1/4"
                >
                    <p className="text-[#fff] md:text-desktop/h3 text-mobile/h6 opacity-[80%]">{d.name}</p>
                    <p className="text-[#fff] text-mobile/small/body md:text-desktop/body/large opacity-[80%]">{d.description}</p>
                </div>
                ))}
            </div>
            </div>
            
           {/* frame 2 */}
            <div className="relative bg-[#FCCE8D] bg-opacity-[20%] border border-[#FCCE8D] w-full h-full md:h-screen flex flex-col items-center rounded-[36px] mt-12">
            <img
                src="/orange.png"
                alt="Trees"
                className="w-[80%] h-auto mx-auto mt-56 md:mt-8 z-0"
            />

            {/* Position the text container at the very top */}
            <div className="absolute top-14 left-0 right-0 flex flex-col justify-start items-center space-y-4 md:space-y-6 z-10 p-4">
                <h2 className="md:text-desktop/h2 text-mobile/h4 text-center">App Harmony: Speed Performance</h2>
                <h4 className="md:text-desktop/h4 text-mobile/h6 text-[#232323] text-center">8GB (*4GB+4GB*) RAM + 64GB ROM</h4>
                <p className="md:text-desktop/body/large text-desktop/body/2/regular text-[#1C1B1B] max-w-3xl text-center">
                Juggling apps has never been easier! Glide through your tasks with a fluid experience that makes multitasking a breeze.
                </p>
            </div>
            <div className="absolute bottom-4 right-4 text-[#3c3c3c] text-[10px] md:text-[14px] z-10">
                *Memory Fusion Technology
            </div>
            </div>

             {/* frame 3 */}
             <div className="relative bg-[#FCCE8D] bg-opacity-[20%] border border-[#FCCE8D] w-full h-full md:h-screen flex flex-col justify-center items-center rounded-[36px] mt-12">
                
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

                <img
                    src="/frame3.png"
                    alt="Trees"
                    className="mt-4 w-[80%] md:w-[50%] md:max-w-[600px] md:absolute md:bottom-0 md:right-12 mx-auto h-auto"
                />
                </div>

        </div>
      </div>
    );
  }
  