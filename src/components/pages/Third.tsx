export default function Third() {
  return (
    <div className="min-h-screen w-full flex md:py-[100px] md:px-[80px] py-[40px] px-[16px]">
      
      {/* Parent container to wrap both divs */}
      <div className="flex flex-col md:flex-row w-full h-full justify-center space-y-[12px] md:space-y-0">
        
        {/* div1 */}
        <div className="bg-custom-gradient flex flex-col border rounded-[16px] border-[#FCA74180] md:mr-[24px]">
          <p className="text-start mt-10 ml-3 md:text-desktop/h3 px-4 text-[#050036] font-bold text-[20px]">
            Enjoy High-Speed <span className="block">4G Internet</span>
          </p>
          <img
            src="/f5i1.png"
            alt="Background Image"
            className="h-auto w-full mx-auto md:pt-[30px]"
          />
        </div>
      
        {/* div2 */}
        <div className="flex flex-col space-y-[12px] md:space-y-0">
          {/* Upper Right Block */}
          <div className="bg-custom-gradient flex flex-col justify-center items-center border rounded-[16px] border-[#FCA74180] flex-grow h-full md:mb-[24px]">
            <p className="text-start md:text-desktop/h3 mt-10 max-w-4xl px-4 font-bold text-[20px] text-[#050036]">
              4000 mAh Battery Life with Type-C Charging & 10W charging support
            </p>
            <img
              src="/f5i2.png"
              alt="Background Image"
              className="h-auto max-w-full xxl:w-[53%]"
            />
          </div>

          {/* Lower Right Block */}
          <div className="bg-custom-gradient flex flex-col justify-center min-h-[39.5vh] items-center flex-grow h-full rounded-[16px] border border-[#FCA74180] bg-cover bg-center" style={{ backgroundImage: "url('/f5i3.png')" }}>
              <div className="flex flex-col justify-center items-center w-full h-full transform -translate-y-16">
                  <span className="pl-6 text-center">
                  <p className="md:text-desktop/h3 font-bold text-[20px] max-w-5xl text-start text-[#050036]">
                      High-Performance 1.6 GHz Processor Clock Speed
                  </p>
                  <p className="md:text-desktop/h4 text-mobile/h6 xxl:text-desktop/h4 mt-3 text-[#232323] text-start">
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
