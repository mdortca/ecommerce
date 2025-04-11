import {
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
} from "lucide-react";

function DarkNavbar() {
  return (
    <div className="p-4 bg-[#252B42] text-white">
      <div className="flex justify-between">
        <div className="flex gap-[10px]">
        <Phone /> <h6 className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px]">(440) 240-4444</h6>
        <Mail /> <p className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px]">m4ca4444@gmail.com</p>
        </div>
        <p className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px]">Follow Us and get a chance to win 80% off</p>
        <div className="flex gap-[10px]">
          <p className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px]">Follow us : </p>
          <Instagram />
          <Youtube />
          <Facebook />
          <Twitter />
        </div>
      </div>
    </div>
  );
}

export default DarkNavbar;
