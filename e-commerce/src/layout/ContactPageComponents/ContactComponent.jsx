import { Phone, MapPin, Send } from "lucide-react";

function ContactComponent() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Başlık Bölümü */}
      <div className="text-center mb-16">
        <h6 className="font-montserrat text-[14px] leading-[24px] text-[#737373] mb-4">
          VISIT OUR OFFICE
        </h6>
        <h2 className="font-montserrat font-bold text-[40px] leading-[50px] text-[#252B42] max-w-[500px] mx-auto">
          We help small businesses with big ideas
        </h2>
      </div>

      {/* Kartlar - Desktop'ta yan yana, mobilde alt alta */}
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {/* Telefon Kartı */}
        <div className="flex flex-col items-center text-center p-8 bg-white">
          <Phone className="w-16 h-16 text-[#23A6F0] mb-4" />
          <div className="space-y-2 mb-4">
            <p className="font-montserrat text-[14px] leading-[24px] text-[#252B42]">
              georgia.young@example.com
            </p>
            <p className="font-montserrat text-[14px] leading-[24px] text-[#252B42]">
              georgia.young@ple.com
            </p>
          </div>
          <h5 className="font-montserrat font-bold text-[16px] leading-[24px] text-[#252B42] mb-4">
            Get Support
          </h5>
          <button className="font-montserrat text-[14px] leading-[24px] text-[#23A6F0] border border-[#23A6F0] rounded-[37px] px-9 py-3 hover:bg-[#23A6F0] hover:text-white transition-colors">
            Submit Request
          </button>
        </div>

        {/* Konum Kartı */}
        <div className="flex flex-col items-center text-center p-8 bg-[#252B42] text-white">
          <MapPin className="w-16 h-16 text-[#23A6F0] mb-4" />
          <div className="space-y-2 mb-4">
            <p className="font-montserrat text-[14px] leading-[24px]">
              georgia.young@example.com
            </p>
            <p className="font-montserrat text-[14px] leading-[24px]">
              georgia.young@ple.com
            </p>
          </div>
          <h5 className="font-montserrat font-bold text-[16px] leading-[24px] mb-4">
            Get Support
          </h5>
          <button className="font-montserrat text-[14px] leading-[24px] text-[#23A6F0] border border-[#23A6F0] rounded-[37px] px-9 py-3 hover:bg-[#23A6F0] hover:text-white transition-colors">
            Submit Request
          </button>
        </div>

        {/* Mail Kartı */}
        <div className="flex flex-col items-center text-center p-8 bg-white">
          <Send className="w-16 h-16 text-[#23A6F0] mb-4" />
          <div className="space-y-2 mb-4">
            <p className="font-montserrat text-[14px] leading-[24px] text-[#252B42]">
              georgia.young@example.com
            </p>
            <p className="font-montserrat text-[14px] leading-[24px] text-[#252B42]">
              georgia.young@ple.com
            </p>
          </div>
          <h5 className="font-montserrat font-bold text-[16px] leading-[24px] text-[#252B42] mb-4">
            Get Support
          </h5>
          <button className="font-montserrat text-[14px] leading-[24px] text-[#23A6F0] border border-[#23A6F0] rounded-[37px] px-9 py-3 hover:bg-[#23A6F0] hover:text-white transition-colors">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;