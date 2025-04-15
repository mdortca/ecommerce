import { ChevronDown, Grid, List } from "lucide-react";

function FilterProductCards() {
  return (
    <>
      <div className="w-5/8 mx-auto sm-flex">
        <div className="flex flex-coljustify-between items-center sm:gap-[285px] py-[24px] border-t border-b border-[#ECECEC]">
          <div className="flex items-center gap-[15px]">
            <p className="font-bold text-[14px] text-[#737373]">
              Showing all 12 results
            </p>
          </div>
          <div className="flex flex-col items-center gap-[15px] sm:flex sm:flex-row sm:gap-[285px]">
            <div className="flex items-center gap-[20px]">
              <p className="text-[#737373]">Views:</p>
              <Grid className="text-[#252B42]" size={16} />
              <List className="text-[#737373]" size={16} />
            </div>
            <button className="flex items-center gap-[10px] px-[20px] py-[10px] border border-[#DDDDDD] rounded-[5px]">
              <span className="text-[#737373]">Filter</span>
              <ChevronDown className="text-[#737373]" size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterProductCards;
