import Image1 from '../../assets/teampage/team-1-user-3.jpg';
import { Facebook, Instagram, Twitter } from "lucide-react";


function Team() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Başlık */}
      <h2 className="text-center font-montserrat font-bold text-[40px] leading-[50px] text-[#252B42] mb-16">
        Meet Our Team
      </h2>

      {/* Desktop Layout */}
      <div className="hidden md:flex md:flex-col gap-8">
        {/* Üst Sıra */}
        <div className="grid grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full h-[290px] mb-4">
                <img
                  src={Image1}
                  alt={`Team Member ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h5 className="font-montserrat font-bold text-[16px] leading-[24px] text-[#252B42] mb-2">
                Username
              </h5>
              <p className="font-montserrat text-[14px] leading-[24px] text-[#737373] mb-4">
                Profession
              </p>
              <div className="flex gap-4">
                <Facebook className="w-6 h-6 text-[#23A6F0]" />
                <Instagram className="w-6 h-6 text-[#23A6F0]" />
                <Twitter className="w-6 h-6 text-[#23A6F0]" />
              </div>
            </div>
          ))}
        </div>

        {/* Alt Sıra */}
        <div className="grid grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <div key={index + 3} className="flex flex-col items-center">
              <div className="w-full h-[290px] mb-4">
                <img
                  src={Image1}
                  alt={`Team Member ${index + 4}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h5 className="font-montserrat font-bold text-[16px] leading-[24px] text-[#252B42] mb-2">
                Username
              </h5>
              <p className="font-montserrat text-[14px] leading-[24px] text-[#737373] mb-4">
                Profession
              </p>
              <div className="flex gap-4">
                <Facebook className="w-6 h-6 text-[#23A6F0]" />
                <Instagram className="w-6 h-6 text-[#23A6F0]" />
                <Twitter className="w-6 h-6 text-[#23A6F0]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full h-[290px] mb-4">
              <img
                src={Image1}
                alt={`Team Member ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] text-[#252B42] mb-2">
              Username
            </h5>
            <p className="font-montserrat text-[14px] leading-[24px] text-[#737373] mb-4">
              Profession
            </p>
            <div className="flex gap-4">
              <Facebook className="w-6 h-6 text-[#23A6F0]" />
              <Instagram className="w-6 h-6 text-[#23A6F0]" />
              <Twitter className="w-6 h-6 text-[#23A6F0]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;