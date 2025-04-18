import { ChevronLeft, ChevronRight } from "lucide-react";
import ManImage from '../../assets/home-carousel-2.png';


function HomeCarousel2() {
  return (
    <div className="relative bg-[#23856D] min-h-screen md:min-h-[600px] mt-13 px-13">
      {/* Navigation Arrows */}
      <button className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 text-white">
        <ChevronLeft size={32} />
      </button>
      <button className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 text-white">
        <ChevronRight size={32} />
      </button>

      <div className="container mx-auto px-4">
        {/* Mobile Design */}
        <div className="md:hidden flex flex-col">
          {/* Text Content */}
          <div className="flex flex-col items-center text-center pt-16 pb-8">
            <span className="font-montserrat text-[14px] leading-[24px] text-white mb-4">
              SUMMER 2020
            </span>

            <h1 className="font-montserrat font-bold text-[40px] leading-[50px] text-white mb-4">
              Vita Classic<br />Product
            </h1>

            <p className="font-montserrat text-[14px] leading-[20px] text-white mb-8 max-w-[300px]">
              We know how large objects will act, but things on a small scale.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="font-montserrat font-bold text-[24px] leading-[32px] text-white">
                $16.48
              </span>
              <button className="bg-[#2DC071] hover:bg-[#25a661] transition-colors text-white font-montserrat font-bold text-[14px] leading-[22px] px-8 py-3 rounded">
                ADD TO CART
              </button>
            </div>

            <div className="flex gap-2 justify-center mb-8">
              <div className="w-[62px] h-[3px] bg-white opacity-40"></div>
              <div className="w-[62px] h-[3px] bg-white"></div>
              <div className="w-[62px] h-[3px] bg-white opacity-40"></div>
            </div>
          </div>

          {/* Image for Mobile */}
          <div className="w-full h-[400px]">
            <img 
              src={ManImage} 
              alt="Man in white" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Desktop Design */}
        <div className="hidden md:flex justify-between items-center min-h-[600px]">
          <div className="max-w-[509px]">
            <span className="font-montserrat text-[14px] leading-[24px] text-white mb-4 block">
              SUMMER 2020
            </span>

            <h1 className="font-montserrat font-bold text-[58px] leading-[80px] text-white mb-4">
              Vita Classic Product
            </h1>

            <p className="font-montserrat text-[20px] leading-[30px] text-white mb-8">
              We know how large objects will act. We know how are objects will act. We know
            </p>

            <div className="flex items-center gap-4">
              <span className="font-montserrat font-bold text-[24px] leading-[32px] text-white">
                $16.48
              </span>
              <button className="bg-[#2DC071] hover:bg-[#25a661] transition-colors text-white font-montserrat font-bold text-[14px] leading-[22px] px-10 py-4 rounded">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Image for Desktop */}
          <div className="flex-1 flex justify-end">
            <img 
              src={ManImage} 
              alt="Man in white" 
              className="max-h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCarousel2;