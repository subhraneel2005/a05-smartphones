
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

export default function Frame1() {
  return (
    <div className="md:rounded-[36px] rounded-[16px] w-full h-full bg-[url('/bgTrees.png')] bg-cover bg-center">
            {/* Centered treesMobile image */}
            
            <div className="md:px-[208px] md:pt-[80px] px-[14px] pt-[9.2px]">
                <img
                    src="/treesMobile.png"
                    alt="Trees"
                    className="h-auto mx-auto " // Adjust the width and margin-top as necessary
                />
            </div>
    
            {/* Divs containing texts */}
            <div className="grid grid-cols-2 md:flex md:justify-between px-[16px] pb-[24.13px] pt-[24px] gap-[16px] md:px-[169px] md:pb-[51px] md:pt-[39px] md:gap[42px]">
                {data.map((d) => (
                    <div
                    key={d.id}
                    className="flex flex-col items-start"
                >
                    <p className="text-[#fff] md:text-desktop/h3 text-mobile/h6 opacity-[80%]">{d.name}</p>
                    <p className="text-[#fff] text-mobile/small/body md:text-desktop/body/large text-opacity-70 md:pt-[8px]">{d.description}</p>
                </div>
                ))}
            </div>
            </div>
  )
}
