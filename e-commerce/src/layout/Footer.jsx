import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-[#FAFAFA]">
      <div className="px-58 sm:px-31 w-4/5 sm:mx-auto ">
        <div className="h-[13vw] max-sm:h-[31vw] max-sm:gap-4 flex flex-col sm:flex-row sm:justify-between sm:px-1 justify-center items-center gap-[11.5px] font-montserrat font-bold text-2xl leading-[32px] tracking-[0.1px] text-[#252B42]">
          <div>Bandage</div>
          <div className=" flex gap-[20px] text-[#23A6F0]">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>
      </div>

      {/* <div>
        <div className="w-full h-[400px] bg-blue-400">
          <div className="w-4/5 h-full bg-blue-200 mx-auto">
            <div className="h-[300px] bg-black my-auto ">
              <p>asdasd</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-white">
        <div>
          <p>Company Info</p>
          <div>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        <div>
          <p>Legal</p>
          <div>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        <div>
          <p>Features</p>
          <div>
            <p>Business Marketing</p>
            <p>User Analytic</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>
        </div>
        <div>
          <p>Resources</p>
          <div>
            <p>IOS & Android</p>
            <p>Watch a Demo</p>
            <p>Customers</p>
            <p>API</p>
          </div>
        </div>
        <div>
          <p>Get In Touch</p>
          <button>Subscribe</button>
          <p>Lore imp sum dolor Amit</p>
        </div>
      </div>

      <div className="bg-[#FAFAFA ]">
        <p>Made With Love By Findland All Right Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
