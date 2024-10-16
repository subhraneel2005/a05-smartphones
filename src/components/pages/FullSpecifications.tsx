import { specifications } from "../../data/specifications";

export default function FullSpecifications() {
    return (
      <div className="px-4 md:px-8 max-w-full mt-14"> {/* Added padding for better responsiveness */}
        <h1 className="text-4xl font-bold flex items-center">
          <img src="/Star.png" alt="Star" className="mr-2 max-w-full" />
          <h2 className="md:text-desktop/h2 text-mobile/h4">Full Specifications</h2>
        </h1>
        <div className="flex w-full items-stretch bg-[#FBFBFB]">
            {/*sidebar*/}
            <div className="w-2/5 md:w-1/4 mb-4 md:mb-0">
                <ul className="space-y-4 w-full">
                <li className="hover:bg-[#CECCD5] hover:bg-opacity-[30%] text-desktop/body/2/medium md:text-desktop/body/1 text-[#949494] duration-500 p-4 border-l-4 border-transparent hover:border-red-500 cursor-pointer w-full">
                    General
                </li>
                <li className="hover:bg-[#CECCD5] hover:bg-opacity-[30%] text-desktop/body/2/medium md:text-desktop/body/1 text-[#949494] duration-500 p-4 border-l-4 border-transparent hover:border-red-500 cursor-pointer w-full">
                    Display Features
                </li>
                <li className="hover:bg-[#CECCD5] hover:bg-opacity-[30%] text-desktop/body/2/medium md:text-desktop/body/1 text-[#949494] duration-500 p-4 border-l-4 border-transparent hover:border-red-500 cursor-pointer w-full">
                    OS & Processor
                </li>
                <li className="hover:bg-[#CECCD5] hover:bg-opacity-[30%] text-desktop/body/2/medium md:text-desktop/body/1 text-[#949494] duration-500 p-4 border-l-4 border-transparent hover:border-red-500 cursor-pointer w-full">
                    Camera
                </li>
                <li className="hover:bg-[#CECCD5] hover:bg-opacity-[30%] text-desktop/body/2/medium md:text-desktop/body/1 text-[#949494] duration-500 p-4 border-l-4 border-transparent hover:border-red-500 cursor-pointer w-full">
                    Battery
                </li>
                <li className="hover:bg-[#CECCD5] hover:bg-opacity-[30%] text-desktop/body/2/medium md:text-desktop/body/1 text-[#949494] duration-500 p-4 border-l-4 border-transparent hover:border-red-500 cursor-pointer w-full">
                    Memory & Storage
                </li>
                <li className="hover:bg-[#CECCD5] hover:bg-opacity-[30%] text-desktop/body/2/medium md:text-desktop/body/1 text-[#949494] duration-500 p-4 border-l-4 border-transparent hover:border-red-500 cursor-pointer w-full">
                    Connectivity
                </li>
                <li className="hover:bg-[#CECCD5] hover:bg-opacity-[30%] text-desktop/body/2/medium md:text-desktop/body/1 text-[#949494] duration-500 p-4 border-l-4 border-transparent hover:border-red-500 cursor-pointer w-full">
                    Additional
                </li>
                </ul>
            </div>
            {/*menu*/}
            {/* parent */}
            <div className="w-3/5 md:w-3/4 bg-[#CECCD5] bg-opacity-[30%] box-border overflow-hidden"> 
                    
                        <div className="flex flex-col w-full -mt-4 md:mt-12 ml-4"> 
                        {specifications.map((s) => (
                            // child
                            <div key={s.id} className="mt-5 w-full flex flex-col md:flex-row justify-between"> {/* Set width to 100% */}
                                <span className="text-[#666666] text-desktop/body/2/medium md:w-[20%] md:ml-10">
                                    {s.title}
                                </span>
                                <p className=" text-[##666666] text-desktop/overline md:text-desktop/body/2/regular flex justify-start md:w-[80%]"> 
                                    {s.description}
                                </p>
                            </div>
                        ))}
                        </div>
                    
            </div>

        </div>
      </div>
    );
  }
  