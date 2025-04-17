import Carousel from '../../assets/aboutpage/none.png'


function AboutCarousel() {
  return (
    <div
      className={`flex flex-col sm:flex-row pt-13 gap-58 px-13`}
    >
      
      
      <div className="px-13  flex flex-col justify-center">
        <div className="flex flex-col items-center sm:items-start">
          <p className="hidden sm:block text-[#23A6F0] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] mb-8">
            ABOUT COMPANY
          </p>
          
          <h1 className="font-montserrat text-center font-bold text-[58px] leading-[80px] tracking-[0.2px] text-black mb-8">
            ABOUT US
          </h1>
          <p className="font-montserrat text-[20px] leading-[30px] text-black/70 mb-10">
              We know how large objects will act,
              but things on a small scale
            </p>
          
          <div className="max-w-md">

            
            <button className="bg-[#23A6F0] hover:bg-[#1a7ab3] transition-colors text-white font-bold py-4 px-10 rounded-md text-[14px] tracking-[0.2px]">
              Get Quote Now
            </button>
          </div>
        </div>
      </div>
      <div><img src={Carousel} alt="" /></div>

    </div>
  );
}

export default AboutCarousel;