import { cards } from "../../data/card";
import Cards from "../commons/Cards";


export default function SecondPage() {

  return (
    <div className="min-h-screen w-full">
        {/* Navbar */}
        <div className='w-full px-12 py-6 border-b border-gray-400 flex justify-between items-center'>
            <div>
                <img src="/logo.png" alt="logo" className="w-24 h-auto md:w-40"/>
            </div>

            <div className="hidden md:flex gap-6">
                <p className="text-gray-600 text-[16px] font-semibold">Overview</p>
                <p className="text-gray-600 text-[16px] font-semibold">Specifications</p>
            </div>

            <button className="md:w-[162px] md:h-[48px] w-[116px] h-[40px] md:bg-BuyNowRoundedBG bg-BuyNowMobileRoundedBG bg-cover bg-center">
            </button>
        </div>
        {/* Main Content */}
        <div className='min-h-screen w-full flex flex-col justify-center items-center'>
            {/* Writings */}
            <div className="flex flex-col justify-center gap-20 w-full items-center px-6 md:flex-row">
            <h1 className="text-start text-red-500 text-mobile/h4 md:text-desktop/h2 md:-mt-24 mt-6">
                <span className="block">Store More, Worry Less</span>
                <span className="block">with Massive 64GB ROM</span>
            </h1>

            <p className="text-start -mt-14 ml-5 text-desktop/body/2/regular md:text-desktop/body/1 max-w-[350px] md:max-w-[550px]">
                Experience breathtaking visuals on the itel A05s smartphone with its expansive 6.6-inch HD+ Drop Notch Display, featuring a crisp 1612 x 720 pixel resolution. Stay powered all day with the robust 4000 mAh battery and Type-C charging support. Effortlessly multitask with 8GB* 4GB+4GB* RAM and 64GB ROM. Capture stunning photos with the 5MP dual rear camera and enjoy enhanced security with dual protection for your device.
            </p>
            </div>

            {/* Cards */}
            <div className="w-full flex md:flex-row flex-col justify-evenly items-center mt-6 md:mt-16">
                {cards.map((card) => (
                    <Cards key={card.id} name={card.name} description={card.description} logo={card.logo}/>
                ))}
            </div>
        </div>
    </div>
  )
}
