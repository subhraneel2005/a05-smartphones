export default function ProductCards() {
    return (
      <div className="relative max-w-[300px] max-h-[650px] py-6 px-8 rounded-[16px] bg-[#F8F6F3] flex justify-center items-center">
        {/* Circles in the background */}
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <img src="/c2.png" alt="c2" className="absolute top-4 right-6 w-[50%]" />
          <img src="/c1.png" alt="c1" className="absolute bottom-4 left-6 w-[50%]"/>
        </div>

        {/* Product image */}
        <img src="/products/elec1.png" alt="elec1" className="relative z-10" />

        <h4 className="text-desktop/h4">Earbuds T1Pro</h4>
        <span className="w-full flex gap-4">
            <p className="text-desktop/button">₹1,269.00</p>
        </span>
      </div>
    );
}
