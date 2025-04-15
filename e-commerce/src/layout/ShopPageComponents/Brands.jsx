import HooliLogo from '../../assets/shoppage/brandicons/Vector1.png'
import LyftLogo from '../../assets/shoppage/brandicons/Vector2.png'
import LeafLogo from '../../assets/shoppage/brandicons/Vector3.png'
import StripeLogo from '../../assets/shoppage/brandicons/Vector4.png'
import AWSLogo from '../../assets/shoppage/brandicons/Vector5.png'
import RedditLogo from '../../assets/shoppage/brandicons/Vector6.png'

function Brands() {
  const brands = [
    { id: 1, logo: HooliLogo, alt: "Hooli" },
    { id: 2, logo: LyftLogo, alt: "Lyft" },
    { id: 3, logo: LeafLogo, alt: "Leaf" },
    { id: 4, logo: StripeLogo, alt: "Stripe" },
    { id: 5, logo: AWSLogo, alt: "AWS" },
    { id: 6, logo: RedditLogo, alt: "Reddit" }
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-[50px]">
      <div className="w-5/8 mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-[30px] flex-wrap">
          {brands.map((brand) => (
            <div key={brand.id} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={brand.logo} 
                alt={brand.alt}
                className="h-[50px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;