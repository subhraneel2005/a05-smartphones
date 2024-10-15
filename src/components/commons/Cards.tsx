interface Card {
    name: string;
    description: string;
    logo: string;
}

export default function Cards({ name,  description, logo}: Card) {

  return (
    <div className="w-[350px] md:h-[400px] h-[200px] flex flex-col justify-start items-start px-5 mt-10">
        <img src={logo} alt={name} className="md:h-[80px] md:w-[80px] h-[45px] w-[45px]"/>
        <h2 className="md:text-desktop/h4 text-mobile/h5/medium max-w-[350px] mt-4">{name}</h2>
        <p className="text-desktop/body/2/regular md:text-desktop/body/1 max-w-[350px] text-[#1C1B1B] mt-2">{description}</p>
    </div>
  )
}
