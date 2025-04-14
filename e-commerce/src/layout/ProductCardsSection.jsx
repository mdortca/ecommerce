import ProductCard1 from '../assets/product-cards/product-card-1.png'
import ProductCard2 from '../assets/product-cards/product-card-2.png'
import ProductCard3 from '../assets/product-cards/product-card-3.png'
import ProductCard4 from '../assets/product-cards/product-card-4.png'
import ProductCard5 from '../assets/product-cards/product-card-5.png'
import ProductCard6 from '../assets/product-cards/product-card-6-7.png'
import ProductCard7 from '../assets/product-cards/product-card-6-7.png'
import ProductCard8 from '../assets/product-cards/product-card-8.png'

function ProductCardsSection() {
  const products = [
    { id: 1, img: ProductCard1, title: "Graphic Design", price: "$4.45", colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"] },
    { id: 2, img: ProductCard2, title: "Graphic Design", price: "$4.45", colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"] },
    { id: 3, img: ProductCard3, title: "Graphic Design", price: "$4.45", colors: ["#23A6F0", "#2DC071", "#E77C40"] },
    { id: 4, img: ProductCard4, title: "Graphic Design", price: "$4.45", colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"] },
    { id: 5, img: ProductCard5, title: "Graphic Design", price: "$4.45", colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"] },
    { id: 6, img: ProductCard6, title: "Graphic Design", price: "$4.45", colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"] },
    { id: 7, img: ProductCard7, title: "Graphic Design", price: "$4.45", colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"] },
    { id: 8, img: ProductCard8, title: "Graphic Design", price: "$4.45", colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"] }
  ];

  return (
    <section className="w-full mt-4">
      <div className="w-5/8 mx-auto">
        <div className="flex flex-col items-center gap-[10px] mb-[24px]">
          <h6 className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
            BESTSELLER PRODUCTS
          </h6>
          <h2 className="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h2>
          <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-[20px]">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col sm:w-[239px]">
              <div className="relative">
                <img src={product.img} alt="" className="w-full h-[427px] object-cover" />
              </div>
              <div className="flex flex-col items-center py-[25px] gap-[10px]">
                <h5 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                  {product.title}
                </h5>
                <p className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                  English Department
                </p>
                <p className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                  {product.price}
                </p>
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
      </div>
    </section>
  );
}

export default ProductCardsSection;