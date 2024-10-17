
export default function Frame3() {
  return (
    <div className="relative mt-[16px] bg-[#FCCE8D] bg-opacity-[20%] border border-[#FCCE8D] w-full h-full min-h-[550px] md:h-screen flex flex-col items-center md:rounded-[36px] rounded-[16px] overflow-hidden">
                
                <div className="flex flex-col md:flex-row justify-between items-center w-full h-full">
                    <div className="flex flex-col justify-start items-start md:pb-[140px] md:pt-[110px] pt-[16px] px-[12px] md:px-[56px] z-20">
                        <h2 className="md:text-desktop/h2 text-mobile/h4 text-center md:text-left md:pr-[116px] max-w-[350px]">
                        Unlock & Roll: Your Phone, Your Style!
                        </h2>
                        <p className="flex flex-col ml-2 md:ml-0 md:text-desktop/body/large text-desktop/body/2/regular text-[#1C1B1B] text-center md:text-left md:pt-[20px] pt-[12px] md:pb-[36px] pb-[21px]">
                        <span>Step into the future with a phone that's both</span>
                        <span>chic and practical. With its sleek design</span>
                        <span>and fingerprint sensor, you have complete</span>
                        <span>control right in your hand.</span>
                        </p>

                        <div className="flex md:flex-col flex-row font-bold md:text-[16px] text-[12px] text-left gap-[42px] md:gap-0">
                            <span className="flex items-center md:gap-[14px] gap-[12px] ">
                                <img src="/logos/f3l1.png" alt="f3l1" className="w-8 h-8 md:w-12 md:h-12" />
                                <p>Face Unlock</p>
                            </span>
                            <span className="flex md:pt-[36px] items-center md:gap-[14px] gap-[12px]">
                                <img src="/logos/f3l2.png" alt="f3l2" className="w-8 h-8 md:w-12 md:h-12" />
                                <p>Finger Print Sensor</p>
                            </span>
                        </div>
                    </div>

                    <div>
                        <div className="-z-10 overflow-hidden">
                            <img
                                src="/frame3Vector.png"
                                alt="Background Vector"
                                className="absolute md:top-0 bottom-[-25%] md:right-[-15%] md:w-[45%] w-[70%] mx-auto h-auto left-[36%] md:left-auto"
                            />
                        </div>

                        <div className=" z-10">
                            <img
                                src="/frame3.webp"
                                alt="Foreground Image"
                                className="w-[80%] md:w-[55%] h-auto object-cover absolute bottom-[-40%] md:right-0 left-[2%] md:left-auto"
                            />
                        </div>
                    </div>
                </div>
                
                

            </div>
  )
}
