import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-[#FAFAFA]">
      <div className=" mx-auto flex flex-col  gap-[50px] py-[50px]">
        <div className="flex flex-col pl-[22px] sm:justify-center sm:items-center gap-[20px]">
          <h3 className="font-bold text-2xl text-[#252B42]">Bandage</h3>
          <div className="flex gap-[20px] text-[#23A6F0]">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between bg-[#FFFFFF] px-22 gap-[30px]">
          <div className="flex flex-col gap-[20px]">
            <h5 className="font-bold text-[16px] text-[#252B42]">Company Info</h5>
            <div className="flex flex-col gap-[10px] text-[#737373]">
              <a href="#" className="hover:text-[#252B42]">About Us</a>
              <a href="#" className="hover:text-[#252B42]">Carrier</a>
              <a href="#" className="hover:text-[#252B42]">We are hiring</a>
              <a href="#" className="hover:text-[#252B42]">Blog</a>
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <h5 className="font-bold text-[16px] text-[#252B42]">Legal</h5>
            <div className="flex flex-col gap-[10px] text-[#737373]">
              <a href="#" className="hover:text-[#252B42]">About Us</a>
              <a href="#" className="hover:text-[#252B42]">Carrier</a>
              <a href="#" className="hover:text-[#252B42]">We are hiring</a>
              <a href="#" className="hover:text-[#252B42]">Blog</a>
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <h5 className="font-bold text-[16px] text-[#252B42]">Features</h5>
            <div className="flex flex-col gap-[10px] text-[#737373]">
              <a href="#" className="hover:text-[#252B42]">Business Marketing</a>
              <a href="#" className="hover:text-[#252B42]">User Analytic</a>
              <a href="#" className="hover:text-[#252B42]">Live Chat</a>
              <a href="#" className="hover:text-[#252B42]">Unlimited Support</a>
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <h5 className="font-bold text-[16px] text-[#252B42]">Resources</h5>
            <div className="flex flex-col gap-[10px] text-[#737373]">
              <a href="#" className="hover:text-[#252B42]">IOS & Android</a>
              <a href="#" className="hover:text-[#252B42]">Watch a Demo</a>
              <a href="#" className="hover:text-[#252B42]">Customers</a>
              <a href="#" className="hover:text-[#252B42]">API</a>
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <h5 className="font-bold text-[16px] text-[#252B42]">Get In Touch</h5>
            <div className="flex flex-col gap-[10px]">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="px-5 py-3 bg-[#F9F9F9] border border-[#E6E6E6] rounded-l"
                />
                <button className="px-5 py-3 bg-[#23A6F0] text-white rounded-r">
                  Subscribe
                </button>
              </div>
              <p className="text-[#737373]">Lore imp sum dolor Amit</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E6E6E6] py-[25px]">
        <div className="w-4/5 mx-auto">
          <p className="text-[#737373] text-[14px]">Made With Love By Finland All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;