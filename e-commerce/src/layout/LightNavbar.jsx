import { User, ShoppingCart, Search, Menu, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function LightNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex flex-col gap-24 md:gap-44">
        <div className="flex flex-row items-center px-4 py-4 max-sm:justify-center gap-[85px]">
          <Link className="font-montserrat font-bold text-2xl leading-8 tracking-tight">
            Bandage
          </Link>
          <div className="sm:hidden flex gap-[24px]">
            <Link to="" className="">
              <User />
            </Link>
            <Link to="" className="">
              <Search />
            </Link>
            <Link to="" className="">
              <ShoppingCart />
            </Link>
            <button to="" className="" onClick={() => setIsOpen(!isOpen)}>
              <Menu />
            </button>
          </div>

          <div className="hidden sm:flex justify-between w-full">
            <div className="flex gap-[15px]">
              <Link to="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link to="/shop" className="text-gray-700 hover:text-blue-600">
                Shop
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600">
                Blog
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-blue-600">
                Pricing
              </Link>
              <Link to="/team" className="text-gray-700 hover:text-blue-600">
                Team
              </Link>
            </div>
            <div className="flex gap-[15px]">
              <Link className="flex gap-[4px] text-[#23A6F0]">
                <User />
                Login/Register
              </Link>
              <Link>
                <Search className="text-[#23A6F0]" />
              </Link>
              <Link className="flex gap-[4px] text-[#23A6F0]">
                <ShoppingCart />1
              </Link>
              <Link className="flex gap-[4px] text-[#23A6F0]">
                <Heart />
                <span>1</span>
              </Link>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden bg-white flex flex-col items-center pb-8 gap-6 text-[#737373] text-[30px] leading-[45px] tracking-[0.2px] text-center font-semibold">
            <Link
              to="/"
              className="hover:font-normal transition-all duration-200"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="hover:font-normal transition-all duration-200"
            >
              Product
            </Link>
            <Link
              to="/pricing"
              className="hover:font-normal transition-all duration-200"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="mb-8 hover:font-normal transition-all duration-200"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default LightNavbar;
