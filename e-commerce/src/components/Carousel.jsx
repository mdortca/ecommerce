import { ChevronRight, ChevronLeft } from "lucide-react";
import Carousel1 from "../assets/deskcarousel1.jpg";

function Carousel() {
  return (
    <div
      className={`relative pt-[112px] pb-[112px] bg-no-repeat bg-cover bg-top`}
      style={{ backgroundImage: `url(${Carousel1})` }}
    >
      <div className="flex flex-col sm:justify-start max-sm:items-center justify-center gap-[30px] pt-[58px] pb-[48px] sm:pl-49">
        <p className="font-montserrat font-bold text-16 leading-6 tracking-[0.1px] text-[#FFFFFF]">
          SUMMER 2020
        </p>
        <h1 className="font-montserrat font-bold text-5xl leading-[50px] tracking-[0.6px] text-[#FFFFFF]">
          NEW COLLECTION
        </h1>
        <h4 className="w-62 max-sm:text-center font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#FFFFFF]">
          We know how large objects will act, but things on a small scale.
        </h4>
        <button className="w-[221px] h-[62px] gap-[10px] rounded-[5px] pt-[15px] pr-[40px] pb-[15px] pl-[40px] bg-[#2DC071] text-white">
          <h3 className="font-montserrat font-bold text-2xl leading-[32px] tracking-[0.1px] text-center">
            SHOP NOW
          </h3>
        </button>
      </div>
      <div>
        <button className="absolute left-[40px] top-1/2 transform -translate-y-1/2 z-20 text-white"><ChevronLeft strokeWidth={0.5} size={58}/></button>
        <button className="absolute right-[40px] top-1/2 transform -translate-y-1/2 z-20 text-white"><ChevronRight strokeWidth={0.5} size={58}/></button>
      </div>
    </div>
  );
}

export default Carousel;
