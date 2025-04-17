import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

function Cta() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center">
        {/* Başlık */}
        <h2 className="font-montserrat font-bold text-[40px] leading-[50px] text-[#252B42] mb-4">
          Start your{" "}
          <span className="md:hidden"><br /></span>
          14 days free trial
        </h2>

        {/* Alt Metin */}
        <p className="font-montserrat text-[14px] leading-[20px] text-[#737373] max-w-[470px] mb-8">
          Met minim Mollie non desert Alamo est sit cliquey dolor 
          do met sent. RELIT official consequent.
        </p>

        {/* CTA Button */}
        <button className="bg-[#23A6F0] text-white font-montserrat font-bold text-[14px] leading-[22px] px-10 py-4 rounded mb-8 hover:bg-[#1a7ab3] transition-colors">
          Try it free now
        </button>

        {/* Sosyal Medya İkonları */}
        <div className="flex gap-8">
          <a href="#" className="text-[#23A6F0] hover:text-[#1a7ab3] transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-[#23A6F0] hover:text-[#1a7ab3] transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-[#23A6F0] hover:text-[#1a7ab3] transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-[#23A6F0] hover:text-[#1a7ab3] transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cta;