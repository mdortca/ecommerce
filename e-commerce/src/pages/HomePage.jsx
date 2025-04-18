import Carousel from "../components/Carousel";
import ProductCardsSection from "../layout/ProductCardsSection";
import ShopCardsSection from "../layout/ShopCardsSection";
import BlogSection from "../layout/BlogSection";
import HomeCarousel2 from "../layout/HomePageComponents/HomeCarousel2.jsx";

function HomePage() {
  return (
    <>
      <Carousel />
      <ShopCardsSection />
      <ProductCardsSection />
      <HomeCarousel2 />
      <BlogSection />
    </>
  );
}

export default HomePage;
