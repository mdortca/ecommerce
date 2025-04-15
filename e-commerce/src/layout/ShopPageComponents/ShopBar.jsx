import { ChevronRight } from "lucide-react";

function ShopBar() {
  return (
    <>
      <div className="bg-[#FAFAFA] flex flex-col items-center py-13 gap-[30px] sm:flex-row sm:justify-between px-13">
        <div>
          <p className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-center">
            Shop
          </p>
        </div>
        <div className="flex gap-[5px]">
          <p className="text-[#252B42] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center">
            Home
          </p>{" "}
          <ChevronRight className="text-[#737373]"/> <p className="text-[#737373] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center">Shop</p>
        </div>
      </div>
    </>
  );
}

export default ShopBar;
