function Stats() {
  return (
    <div className="container mx-auto py-20">
      <div className="flex flex-col md:flex-row justify-center items-center gap-20">
        <div className="flex flex-col items-center">
          <h2 className="font-montserrat font-bold text-[58px] leading-[80px] text-[#252B42]">
            15K
          </h2>
          <p className="font-montserrat text-[16px] leading-[24px] text-[#737373]">
            Happy Customers
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="font-montserrat font-bold text-[58px] leading-[80px] text-[#252B42]">
            150K
          </h2>
          <p className="font-montserrat text-[16px] leading-[24px] text-[#737373]">
            Monthly Visitors
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="font-montserrat font-bold text-[58px] leading-[80px] text-[#252B42]">
            15
          </h2>
          <p className="font-montserrat text-[16px] leading-[24px] text-[#737373]">
            Countries Worldwide
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="font-montserrat font-bold text-[58px] leading-[80px] text-[#252B42]">
            100+
          </h2>
          <p className="font-montserrat text-[16px] leading-[24px] text-[#737373]">
            Top Partners
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;