import TestimonialImage from '../../assets/aboutpage/testimonialsph.png';


function Testimonials() {
  return (
    <section className="bg-[#23A6F0] min-h-screen md:min-h-fit">
      <div className="container mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2">
          {/* Sol Taraf - İçerik */}
          <div className="flex flex-col px-8 py-20 text-white justify-center items-start">
            <p className="uppercase font-montserrat text-[16px] leading-[24px] tracking-[0.1px] mb-4">
              WORK WITH US
            </p>
            <h2 className="font-montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px] mb-8">
              Now Let's grow Yours
            </h2>
            <p className="font-montserrat text-[14px] leading-[20px] tracking-[0.2px] max-w-[400px] mb-8">
              The gradual accumulation of information about atomic and 
              small-scale behavior during the first quarter of the 20th
            </p>
            <button className="border border-white px-10 py-4 text-white font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] hover:bg-white hover:text-[#23A6F0] transition-colors">
              Button
            </button>
          </div>
          {/* Sağ Taraf - Görsel */}
          <div className="h-full">
            <img
              src={TestimonialImage}
              alt="Testimonial"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col">
          {/* İçerik */}
          <div className="px-4 py-16 text-white text-center">
            <p className="uppercase font-montserrat text-[16px] leading-[24px] tracking-[0.1px] mb-4">
              WORK WITH US
            </p>
            <h2 className="font-montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px] mb-8">
              Now Let's<br />grow Yours
            </h2>
            <p className="font-montserrat text-[14px] leading-[20px] tracking-[0.2px] mb-8">
              The gradual accumulation of information about atomic and 
              small-scale behavior during the first quarter of the 20th
            </p>
            <button className="border border-white px-10 py-4 text-white font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] hover:bg-white hover:text-[#23A6F0] transition-colors">
              Button
            </button>
          </div>
          {/* Görsel */}
          <div className="hidden h-[500px]">
            <img
              src={TestimonialImage}
              alt="Testimonial"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;