  import ShopCard1 from "../assets/shop-cards/shop-card-1.png";
  import ShopCard2 from "../assets/shop-cards/shop-card-2.png";
  import ShopCard3 from '../assets/shop-cards/shop-card-3.png';
  import ShopCard4 from '../assets/shop-cards/shop-card-4.png';


  function ShopCardsSection() {
    return (
      <section className="w-full h-full mx-auto pt-12">
        <div className=" flex flex-col gap-[48px] w-5/8 h-full mx-auto">
          <div className=" flex flex-col items-center">
            <p className="w-44 text-[22px] text-center font-bold leading-[32px] tracking-[0.1px] font-montserrat text-[#252B42]">EDITOR'S PICK</p>
            <p className="w-44 text-center font-normal text-[14px] leading-[20px] tracking-[0.2px] text-center font-montserrat text-[#737373]">
              Problems trying to resolve the conflict between
            </p>
          </div>
          <div className="flex flex-col items-center sm:flex-row gap-4">
            <div className="relative">
              <img src={ShopCard1} className="color-[#21212140]" alt="" />
              <button class="absolute bottom-4 left-4 bg-white text-black text-xs font-semibold px-13 py-2 font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-center text-[#252B42]">MEN</button>
            </div>
            <div className="relative">
              <img src={ShopCard2} alt="" />
              <button class="absolute bottom-4 left-4 bg-white text-black text-xs font-semibold px-13 py-2 font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-center text-[#252B42]">WOMEN</button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="relative">
              <img src={ShopCard3} alt="" />
              <button className="absolute bottom-4 left-4 bg-white text-black text-xs font-semibold px-13 py-2 font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-center text-[#252B42]">ACCESSORIES</button>
              </div>
              <div className="relative">
              <img src={ShopCard4} alt="" />
              <button className="absolute bottom-4 left-4 bg-white text-black text-xs font-semibold px-13 py-2 font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-center text-[#252B42]">KIDS</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  export default ShopCardsSection;
