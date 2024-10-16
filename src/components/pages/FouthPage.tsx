export default function FourthPage() {
    return (
      <div className="min-h-screen w-full  px-[16px] md:px-[36px] flex flex-col justify-center items-center py-6">
        <div className="flex flex-col md:flex-row w-full h-[750px] gap-4">
          {/* Left Block with image and text in column format */}
          <div className="bg-custom-gradient relative flex flex-col justify-center items-center flex-1 min-h-[270px] md:min-h-[80%] md:h-full rounded-lg border border-[#FCA74180] w-full p-2">
          <p className="absolute md:top-16 top-6 text-start md:text-desktop/h3 text-[16px] font-bold z-10">
            Enjoy High-Speed <span className="block">4G Internet</span>
          </p>

            <img
              src="/f5i1.png"
              alt="Background Image"
              className="absolute bottom-0 flex justify-center items-center object-cover rounded-lg w-[50%] h-auto mx-auto"
            />
          </div>
  
          {/* Right Block with two taller children */}
          <div className="flex flex-col gap-4 flex-1 h-full">
  
            {/* Upper Right Block with image and text in column format */}
            <div className="bg-custom-gradient relative flex flex-col justify-center items-center flex-grow min-h-[200px] md:min-h-[60%] rounded-lg border border-[#FCA74180]">
              <p className="absolute top-4 text-center md:text-desktop/h3 px-4 font-bold text-[16px] z-10">
                4000 mAh Battery Life with Type-C Charging & 10W charging support
              </p>
              <img
                src="/f5i2.png"
                alt="Background Image"
                className="absolute bottom-0 flex justify-center items-center object-cover rounded-lg w-[100%] h-auto mx-auto"
              />
            </div>
  
            {/* Lower Right Block with image and text in column format */}
            <div className="bg-custom-gradient relative flex flex-col justify-center items-center flex-grow min-h-[300px] md:min-h-[40%] rounded-lg border border-[#FCA74180]">
              <img
                src="/f5i3.png"
                alt="Background Image"
                className="absolute top-0 left-0 w-full h-full object-cover z-[-10] rounded-lg"
              />
              <span className="pl-6 pb-16">
                <p className="md:text-desktop/h3 font-bold top-4 md:top-0 text-[16px] z-10">
                  High-Performance 1.6 GHz Processor Clock Speed
                </p>
                <p className="md:text-desktop/h4 text-mobile/h6 mt-3 z-10 text-[#232323]">
                  Android 13 Go Edition
                </p>
              </span>
            </div>
  
          </div>
        </div>
      </div>
    );
  }
  