function ContactCta() {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          {/* Üst Başlık */}
          <div className="flex items-center gap-2 mb-4">
            <svg 
              className="w-8 h-8 text-[#23A6F0] transform rotate-90"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
            <h6 className="font-montserrat font-bold text-[16px] leading-[24px] text-[#252B42] tracking-[0.2px]">
              WE Can't WAIT TO MEET YOU
            </h6>
          </div>
  
          {/* Ana Başlık */}
          <h2 className="font-montserrat font-bold text-[40px] md:text-[58px] leading-[50px] md:leading-[80px] text-[#252B42] mb-8">
            Let's Talk
          </h2>
  
          {/* CTA Butonu */}
          <button className="bg-[#23A6F0] text-white font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] px-10 py-4 rounded-md hover:bg-[#1a7ab3] transition-colors">
            Try it free now
          </button>
        </div>
      </div>
    );
  }
  
  export default ContactCta;