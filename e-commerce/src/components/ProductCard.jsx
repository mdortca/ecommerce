import { ChevronLeft, ChevronRight, Star, Heart, ShoppingCart, Eye } from "lucide-react";
import MainImage from '../assets/deskcarousel1.jpg'; // Görsel yollarını güncelleyin
import Thumb1 from '../assets/react.svg'; ;
import Thumb2 from '../assets/react.svg'; ;

function ProductCard() {
  const colors = ["#23A6F0", "#2DC071", "#E77C40", "#252B42"];

  return (
    <div className="container mx-auto px-4 py-8 bg-[#FAFAFA]">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sol Taraf - Görseller */}
        <div className="w-full md:w-1/2">
          {/* Ana Görsel */}
          <div className="relative mb-4">
            <img 
              src={MainImage} 
              alt="Product Main" 
              className="w-full h-auto md:h-[450px] object-cover"
            />
            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black">
              <ChevronLeft size={24} />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black">
              <ChevronRight size={24} />
            </button>
          </div>
          {/* Thumbnail Görseller */}
          <div className="flex gap-4">
            <img src={Thumb1} alt="Thumbnail 1" className="w-[100px] h-[75px] object-cover cursor-pointer" />
            <img src={Thumb2} alt="Thumbnail 2" className="w-[100px] h-[75px] object-cover cursor-pointer" />
          </div>
        </div>

        {/* Sağ Taraf - Ürün Bilgileri */}
        <div className="w-full md:w-1/2">
          <h4 className="font-montserrat text-[20px] leading-[30px] text-[#252B42] mb-3">
            Floating Phone
          </h4>
          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex">
              {[...Array(4)].map((_, i) => <Star key={i} size={20} className="text-yellow-400 fill-current" />)}
              <Star size={20} className="text-gray-300 fill-current" />
            </div>
            <span className="font-montserrat text-[14px] leading-[24px] text-[#737373]">
              10 Reviews
            </span>
          </div>
          {/* Price */}
          <h3 className="font-montserrat font-bold text-[24px] leading-[32px] text-[#252B42] mb-1">
            $1,139.33
          </h3>
          {/* Availability */}
          <p className="font-montserrat text-[14px] leading-[24px] text-[#737373] mb-6">
            Availability : <span className="text-[#23A6F0]">In Stock</span>
          </p>
          {/* Description */}
          <p className="font-montserrat text-[14px] leading-[20px] text-[#737373] mb-6">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial 
            consequent sent nostrum met.
          </p>
          {/* Divider */}
          <hr className="border-t border-[#BDBDBD] mb-6" />
          {/* Colors */}
          <div className="flex gap-2 mb-8">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-[30px] h-[30px] rounded-full cursor-pointer border border-gray-300"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="bg-[#23A6F0] text-white font-montserrat font-bold text-[14px] leading-[22px] px-6 py-3 rounded hover:bg-[#1a7ab3] transition-colors">
              Select Options
            </button>
            <button className="w-[40px] h-[40px] flex items-center justify-center border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100">
              <Heart size={18} />
            </button>
            <button className="w-[40px] h-[40px] flex items-center justify-center border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100">
              <ShoppingCart size={18} />
            </button>
            <button className="w-[40px] h-[40px] flex items-center justify-center border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100">
              <Eye size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;