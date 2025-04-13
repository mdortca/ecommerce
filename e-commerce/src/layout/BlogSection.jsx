import BlogCard1 from "../assets/blog-cards/blog-1.png";
import BlogCard2 from "../assets/blog-cards/blog-2.png";
import BlogCard3 from "../assets/blog-cards/blog-3.png";
import { Clock, ChartArea } from 'lucide-react';


function BlogSection() {
  return (
    <section className="flex flex-col pt-[130px] items-center gap-[80px]">
      <div className="flex flex-col gap-[10px] items-center text-center">
        <p className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center font-montserrat text-[#23A6F0]">
          Practice Advice
        </p>
        <p className="font-bold text-[40px] max-w-[200px] leading-[50px] tracking-[0.2px] text-center font-montserrat text-[#252B42]">
          Featured Products
        </p>
        <p className="font-normal text-[24px] max-w-[330px] leading-[24px] tracking-[0.2px] text-center font-montserrat text-[#737373]">
          Problems trying to resolve the conflict between the two major
        </p>
      </div>
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col">
          <img src={BlogCard1} className="object-cover w-56 h-56" alt="" />
          <div className="flex flex-col pt-[25px] pr-[25px] pb-[35px] pl-[25px] gap-[10px] pr-[44px]">
            <div className="flex gap-[10px]">
              <p className="font-normal text-[12px] leading-[16px] tracking-[0.2px] font-montserrat text-[#8EC2F2]">Google</p>
              <p className="font-normal text-[12px] leading-[16px] tracking-[0.2px] font-montserrat text-[#737373]">Trending</p>
              <p className="font-normal text-[12px] leading-[16px] tracking-[0.2px] font-montserrat text-[#737373]">New</p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="font-normal text-[29px] leading-[30px] tracking-[0.2px] font-montserrat text-[#252B42] max-w-[310px]">Loudest à la Madison #1 (L'integral)</p>
              <p className="font-normal text-[14px] max-w-[310px] leading-[20px] tracking-[0.2px] font-montserrat text-[#737373]">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
            </div>
            <div className="flex justify-between">
              <p className="flex gap-[5px] items-center"><Clock className="text-[#23A6F0]" size={22}/> 22 April 2021</p>
              <p className="flex items-center text-[#737373] font-normal text-[12px] leading-[16px] tracking-[0.2px] font-montserrat"><ChartArea className="text-[#23856D]"/>10 comments</p>
            </div>
            <div className="flex">Learn More {/* Simge */}</div>

            <p>NEW BUTONU</p>
          </div>
        </div>
        <div className="">
          <img src={BlogCard1} alt="" />
          <div className="flex">
            <p>Google</p>
            <p>Trending</p>
            <p>New</p>
          </div>
          <div>
            <p>Loudest à la Madison #1 (L'integral)</p>
            <p>
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
          </div>
          <div className="flex">
            <p>22 April 2021</p> <p>10 comments</p>
          </div>
          <div className="flex">Learn More {/* Simge */}</div>

          <p>NEW BUTONU</p>
        </div>
        <div>
          <img src={BlogCard1} alt="" />
          <div className="flex">
            <p>Google</p>
            <p>Trending</p>
            <p>New</p>
          </div>
          <div>
            <p>Loudest à la Madison #1 (L'integral)</p>
            <p>
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
          </div>
          <div className="flex">
            <p>22 April 2021</p> <p>10 comments</p>
          </div>
          <div className="flex">Learn More {/* Simge */}</div>

          <p>NEW BUTONU</p>
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default BlogSection;
