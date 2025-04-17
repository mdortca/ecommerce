import ProductCard1 from "../../assets/product-cards/product-card-1.png";
import ProductCard2 from "../../assets/product-cards/product-card-2.png";
import ProductCard3 from "../../assets/product-cards/product-card-3.png";
import ProductCard4 from "../../assets/product-cards/product-card-4.png";

function ProductCards() {
  const products = [
    {
      id: 1,
      img: ProductCard1,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"],
    },
    {
      id: 2,
      img: ProductCard2,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"],
    },
    {
      id: 3,
      img: ProductCard3,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"],
    },
    {
      id: 4,
      img: ProductCard4,
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"],
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-[30px] w-full max-w-[360px] pt-13 pb-13 mx-auto sm:mx-[310px] sm:flex-row">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center bg-white">
            <div className="w-full sm:w-[200px] h-[360px] sm:h-full">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center py-[25px] gap-[10px] w-full">
              <h5 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                {product.title}
              </h5>
              <p className="font-normal text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                {product.department}
              </p>
              <div className="flex gap-[5px]">
                <span className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#BDBDBD] line-through">
                  {product.oldPrice}
                </span>
                <span className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#23856D]">
                  {product.newPrice}
                </span>
              </div>
              <div className="flex gap-[6px]">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-[16px] h-[16px] rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-[10px] mt-[30px] pb-[31px]">
        <button className="px-[20px] py-[15px] text-[#BDBDBD] border border-[#E9E9E9] rounded-l-lg">
          First
        </button>
        <button className="px-[20px] py-[15px] text-[#BDBDBD] border border-[#E9E9E9]">
          1
        </button>
        <button className="px-[20px] py-[15px] text-white bg-[#23A6F0] border border-[#E9E9E9]">
          2
        </button>
        <button className="px-[20px] py-[15px] text-[#BDBDBD] border border-[#E9E9E9]">
          3
        </button>
        <button className="px-[20px] py-[15px] text-[#23A6F0] border border-[#E9E9E9] rounded-r-lg">
          Next
        </button>
      </div>
    </>
  );
}

export default ProductCards;
