import ProductImage1 from '../../assets/deskcarousel1.jpg'; // Görsel yollarını projenize göre güncelleyin


function BestsellerProducts() {
  const products = [
    { id: 1, img: ProductImage1, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 2, img: ProductImage1, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 3, img: ProductImage1, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 4, img: ProductImage1, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 5, img: ProductImage1, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 6, img: ProductImage1, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 7, img: ProductImage1, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 8, img: ProductImage1, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Başlık */}
      <h3 className="font-montserrat font-bold text-[20px] leading-[30px] text-[#252B42] text-center md:text-left mb-8">
        BESTSELLER PRODUCTS
      </h3>

      {/* Ürün Grid'i */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center text-center bg-white pb-6">
            {/* Görsel */}
            <div className="w-full h-[238px] mb-6">
              <img 
                src={product.img} 
                alt={product.title} 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Ürün Bilgileri */}
            <h5 className="font-montserrat font-bold text-[16px] leading-[24px] text-[#252B42] mb-2">
              {product.title}
            </h5>
            <p className="font-montserrat text-[14px] leading-[24px] text-[#737373] mb-2">
              {product.department}
            </p>
            {/* Fiyat */}
            <div className="flex gap-2">
              <span className="font-montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD] line-through">
                {product.oldPrice}
              </span>
              <span className="font-montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
                {product.newPrice}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestsellerProducts;