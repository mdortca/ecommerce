import BlogCard1 from "../assets/blog-cards/blog-1.png";
import BlogCard2 from "../assets/blog-cards/blog-2.png";
import BlogCard3 from "../assets/blog-cards/blog-3.png";
import { Clock, ChartArea, ChevronRight } from "lucide-react";

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
      <div className="flex flex-col sm:flex-row gap-[30px]">
        <div className="relative flex flex-col">
          <img
            src={BlogCard1}
            className="relative object-cover w-4/5 sm:w-full mx-auto"
            alt=""
          />
          <div className="flex flex-col w-4/5 mx-auto mt-[25px] pb-[35px]  gap-[10px] pr-[44px]">
            <div className="flex gap-[10px]">
              <p className="font-normal text-[12px] leading-[16px] tracking-[0.2px] font-montserrat text-[#8EC2F2]">
                Google
              </p>
              <p className="font-normal text-[12px] leading-[16px] tracking-[0.2px] font-montserrat text-[#737373]">
                Trending
              </p>
              <p className="font-normal text-[12px] leading-[16px] tracking-[0.2px] font-montserrat text-[#737373]">
                New
              </p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="font-normal text-[29px] leading-[30px] tracking-[0.2px] font-montserrat text-[#252B42] max-w-[310px]">
                Loudest à la Madison #1 (L'integral)
              </p>
              <p className="font-normal text-[14px] max-w-[310px] leading-[20px] tracking-[0.2px] font-montserrat text-[#737373]">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
            </div>
            <div className="flex justify-between">
              <p className="flex gap-[5px] items-center">
                <Clock className="text-[#23A6F0]" size={22} /> 22 April 2021
              </p>
              <p className="flex items-center text-[#737373] font-normal text-[12px] leading-[16px] tracking-[0.2px] font-montserrat">
                <ChartArea className="text-[#23856D]" />
                10 comments
              </p>
            </div>
            <div className="flex font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">Learn More <ChevronRight className="text-[#23A6F0]"/></div>

            <button className="absolute top-0 left-0 w-[56px] h-[24px] absolute top-[20px] left-[20px] rounded-[3px] pr-[10px] pl-[10px] text-white bg-[#E74040] font-montserrat font-bold tracking-[0.2px]">NEW</button>
          </div>
        </div>
        <div className="relative flex flex-col">
          <img
            src={BlogCard2}
            className="object-cover w-4/5 sm:w-full mx-auto"
            alt=""
          />
          <div className="flex flex-col w-4/5 mx-auto mt-[25px] pb-[35px]  gap-[10px] pr-[44px]">
            <div className="flex gap-[10px]">
              <p className="font-normal text-[12px] leading-[16px] tracking-[0.2px] font-montserrat text-[#8EC2F2]">
                Google
              </p>
              <p className="font-normal text-[12px] leading-[16px] tracking-[0.2px] font-montserrat text-[#737373]">
                Trending
              </p>
              <p className="font-normal text-[12px] leading-[16px] tracking-[0.2px] font-montserrat text-[#737373]">
                New
              </p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="font-normal text-[29px] leading-[30px] tracking-[0.2px] font-montserrat text-[#252B42] max-w-[310px]">
                Loudest à la Madison #1 (L'integral)
              </p>
              <p className="font-normal text-[14px] max-w-[310px] leading-[20px] tracking-[0.2px] font-montserrat text-[#737373]">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
            </div>
            <div className="flex justify-between">
              <p className="flex gap-[5px] items-center">
                <Clock className="text-[#23A6F0]" size={22} /> 22 April 2021
              </p>
              <p className="flex items-center text-[#737373] font-normal text-[12px] leading-[16px] tracking-[0.2px] font-montserrat">
                <ChartArea className="text-[#23856D]" />
                10 comments
              </p>
            </div>
            <div className="flex font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">Learn More <ChevronRight className="text-[#23A6F0]"/></div>

            <button className="absolute top-0 left-0 w-[56px] h-[24px] absolute top-[20px] left-[20px] rounded-[3px] pr-[10px] pl-[10px] text-white bg-[#E74040] font-montserrat font-bold tracking-[0.2px]">NEW</button>
          </div>
        </div>
        <div className="relative flex flex-col">
          <img
            src={BlogCard3}
            className="object-cover w-4/5 sm:w-full mx-auto"
            alt=""
          />
          <div className="flex flex-col w-4/5 mx-auto mt-[25px] pb-[35px]  gap-[10px] pr-[44px]">
            <div className="flex gap-[10px]">
              <p className="font-normal text-[12px] leading-[16px] tracking-[0.2px] font-montserrat text-[#8EC2F2]">
                Google
              </p>
              <p className="font-normal text-[12px] leading-[16px] tracking-[0.2px] font-montserrat text-[#737373]">
                Trending
              </p>
              <p className="font-normal text-[12px] leading-[16px] tracking-[0.2px] font-montserrat text-[#737373]">
                New
              </p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="font-normal text-[29px] leading-[30px] tracking-[0.2px] font-montserrat text-[#252B42] max-w-[310px]">
                Loudest à la Madison #1 (L'integral)
              </p>
              <p className="font-normal text-[14px] max-w-[310px] leading-[20px] tracking-[0.2px] font-montserrat text-[#737373]">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
            </div>
            <div className="flex justify-between">
              <p className="flex gap-[5px] items-center">
                <Clock className="text-[#23A6F0]" size={22} /> 22 April 2021
              </p>
              <p className="flex items-center text-[#737373] font-normal text-[12px] leading-[16px] tracking-[0.2px] font-montserrat">
                <ChartArea className="text-[#23856D]" />
                10 comments
              </p>
            </div>
            <div className="flex font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">Learn More <ChevronRight className="text-[#23A6F0]"/></div>

            <button className="absolute top-0 left-0 w-[56px] h-[24px] absolute top-[20px] left-[20px] rounded-[3px] pr-[10px] pl-[10px] text-white bg-[#E74040] font-montserrat font-bold tracking-[0.2px]">NEW</button>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default BlogSection;
