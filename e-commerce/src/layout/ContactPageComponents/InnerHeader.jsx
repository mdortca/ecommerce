import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import ShoppingFamily from '../../assets/contactpage/contactnone.png'; // Görselin yolunu güncelleyin


function InnerHeader() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        {/* Sol Taraf - İçerik */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-[40%]">
          <span className="font-montserrat text-[14px] leading-[24px] text-[#252B42] mb-4">
            CONTACT US
          </span>

          <h1 className="font-montserrat font-bold text-[40px] leading-[50px] md:text-[58px] md:leading-[80px] text-[#252B42] mb-4 max-w-[258px] md:max-w-none">
            Get in touch today!
          </h1>

          <p className="font-montserrat text-[14px] leading-[20px] text-[#737373] mb-8 max-w-[225px] md:max-w-[350px]">
            We know how large objects will act, but things on a small scale just do not act that way.
          </p>

          <div className="space-y-2 mb-8">
            <p className="font-montserrat text-[14px] leading-[24px] text-[#252B42]">
              Phone : +451 215 215
            </p>
            <p className="font-montserrat text-[14px] leading-[24px] text-[#252B42]">
              Fax : +451 215 215
            </p>
          </div>

          <div className="flex gap-8 mb-8 md:mb-0">
            <a href="#" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Sağ Taraf - Görsel */}
        <div className="md:w-[50%] flex justify-center items-center">
          <div className="w-full max-w-[550px]">
            {/* Pembe Arka Plan ve Görsel Container */}
            <div className="bg-[#FFF1F5] rounded-full p-8">
              <img
                src={ShoppingFamily}
                alt="Happy Shopping Family"
                className="w-full h-[580px]"
              />
              {/* Dekoratif Daireler */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InnerHeader;