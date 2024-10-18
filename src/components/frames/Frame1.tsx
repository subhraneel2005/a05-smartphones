
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
    <div className="md:rounded-[36px] rounded-[16px] bg-[url('/bgTrees.png')] bg-cover bg-center">
            {/* Centered treesMobile image */}
            <div className="md:px-[50px] lg:px-[208px] md:pt-[20px] lg:pt-[80px] px-[14px] pt-[9.2px]">
                <img
                    src="/treesMobile.png"
                    alt="Trees"
                    className="h-auto mx-auto w-full" // Adjust the width and margin-top as necessary
                />
            </div>
    
            {/* Divs containing texts */}
            <div className="grid grid-cols-2 md:flex md:justify-center md:items-center px-[16px] pb-[24.13px] pt-[24px] gap-[16px] md:gap-[24px] lg:px-[169px] lg:pb-[51px] lg:pt-[39px] lg:gap[42px]">
                {data.map((d) => (
                    <div
                    key={d.id}
                    className="flex flex-col items-start"
                >
                    <p className="text-[#fff] md:text-desktop/h4 lg:text-desktop/h3 text-mobile/h6 opacity-[80%]">{d.name}</p>
                    <p className="text-[#fff] text-mobile/small/body md:text-desktop/body/2/regular lg:text-desktop/body/large text-opacity-70 md:pt-0 lg:pt-[8px]">{d.description}</p>
                </div>
                ))}
            </div>
            </div>
  )
}
