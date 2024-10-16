export default function FourthPage() {
    return (
      <div className="min-h-screen md:hidden hidden xxl:flex flex-row justify-center items-center py-6 xl:px-[40px] xl:w-[80%] xl:h-[60%] h-full p-8 xl:py-[200px] xxl:rounded-[64px] rounded-[16px] mx-auto">
        
        {/* Parent container to wrap both divs */}
        <div className="flex flex-col md:flex-row w-full h-full">
          
          {/* div1 */}
          <div className="bg-custom-gradient flex flex-col space-y-5 border rounded-lg border-[#FCA74180] flex-grow w-1/3 h-full">
            <p className="text-start mt-10 ml-10 xxl:text-desktop/h2 md:text-desktop/h3 px-4 font-bold text-[16px]">
              Enjoy High-Speed <span className="block">4G Internet</span>
            </p>
            <img
              src="/f5i1.png"
              alt="Background Image"
              className="h-auto max-w-full"
            />
          </div>
        
          {/* div2 */}
          <div className="flex flex-col space-y-5 grow h-full w-2/3 ml-5">
            {/* Upper Right Block */}
            <div className="bg-custom-gradient flex flex-col justify-center items-center border rounded-lg border-[#FCA74180] flex-grow h-full">
              <p className="text-start md:text-desktop/h3 xxl:text-desktop/h2 mt-10 max-w-5xl px-4 font-bold text-[16px]">
                4000 mAh Battery Life with Type-C Charging & 10W charging support
              </p>
              <img
                src="/f5i2.png"
                alt="Background Image"
                className="h-auto max-w-full xxl:w-[56%]"
              />
            </div>
  
            {/* Lower Right Block */}
            <div className="bg-custom-gradient flex flex-col justify-center min-h-[39.5vh] items-center flex-grow h-full rounded-lg border border-[#FCA74180] bg-cover bg-center" style={{ backgroundImage: "url('/f5i3.png')" }}>
                <div className="flex flex-col justify-center items-center w-full h-full transform -translate-y-16">
                    <span className="pl-6 text-center">
                    <p className="md:text-desktop/h3 xxl:text-desktop/h2 font-bold text-[16px] max-w-5xl text-start">
                        High-Performance 1.6 GHz Processor Clock Speed
                    </p>
                    <p className="md:text-desktop/h4 text-mobile/h6 xxl:text-desktop/h3 mt-3 text-[#232323] text-start">
                        Android 13 Go Edition
                    </p>
                    </span>
                </div>
                </div>
          </div>
          
        </div>
      </div>
    );
  }
  