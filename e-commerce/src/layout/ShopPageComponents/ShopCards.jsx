import ShopCard from "../../assets/shoppage/shopcards/card-cover-5.jpg";

function ShopCards() {
  return (
    <section className="w-full py-13 bg-[#FAFAFA]">
      <div className="w-4/5 mx-auto flex flex-col sm:flex sm:flex-row sm:w-full sm:px-13 gap-[15px] items-center">
        <div className="relative">
          <img src={ShopCard} alt="" />
          <div className="absolute top-44/100 left-4/10 flex flex-col gap-4">
            <p className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-white">CLOTHS</p>
            <p className="text-center font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white">5 Items</p>
          </div>
        </div>
        <div className="relative">
          <img src={ShopCard} alt="" />
          <div className="absolute top-44/100 left-4/10 flex flex-col gap-4">
            <p className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-white">CLOTHS</p>
            <p className="text-center font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white">5 Items</p>
          </div>
        </div>
        <div className="relative">
          <img src={ShopCard} alt="" />
          <div className="absolute top-44/100 left-4/10 flex flex-col gap-4">
            <p className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-white">CLOTHS</p>
            <p className="text-center font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white">5 Items</p>
          </div>
        </div>
        <div className="relative">
          <img src={ShopCard} alt="" />
          <div className="absolute top-44/100 left-4/10 flex flex-col gap-4">
            <p className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-white">CLOTHS</p>
            <p className="text-center font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white">5 Items</p>
          </div>
        </div>
        <div className="relative">
          <img src={ShopCard} alt="" />
          <div className="absolute top-44/100 left-4/10 flex flex-col gap-4">
            <p className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-white">CLOTHS</p>
            <p className="text-center font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white">5 Items</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopCards;
