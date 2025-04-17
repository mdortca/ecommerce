import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function InnerHeader() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Content */}
      <div className="flex flex-col items-center text-center">
        <p className="font-montserrat text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] mb-4">
          WHAT WE DO
        </p>
        
        <h1 className="font-montserrat font-bold text-[40px] md:text-[58px] leading-[50px] md:leading-[80px] tracking-[0.2px] text-[#252B42] mb-8">
          Innovation<br className="md:hidden" /> tailored for you
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2">
          <Link 
            to="/" 
            className="font-montserrat text-[14px] leading-[24px] text-[#252B42] hover:text-[#23A6F0]"
          >
            Home
          </Link>
          <ChevronRight size={16} className="text-[#737373]" />
          <span className="font-montserrat text-[14px] leading-[24px] text-[#737373]">
            Team
          </span>
        </div>
      </div>
    </div>
  );
}

export default InnerHeader;