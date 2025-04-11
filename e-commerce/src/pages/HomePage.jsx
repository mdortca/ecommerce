import Carousel from "../components/Carousel";
import ProductCardsSection from "../layout/ProductCardsSection";
import ShopCardsSection from "../layout/ShopCardsSection";
import BlogSection from "../layout/BlogSection";

function HomePage() {
  return (
    <>
      <Carousel />
      <ShopCardsSection />
      <ProductCardsSection />
      <Carousel />
      <section>container</section>
      <BlogSection />
    </>
  );
}

export default HomePage;
