import Carousel from "../components/Carousel";
import ProductCardsSection from "../layout/ProductCardsSection";
import ShopCardsSection from "../layout/ShopCardsSection";
import BlogSection from "../layout/BlogSection";
import Container from "../layout/Container.jsx";

function HomePage() {
  return (
    <>
      <Carousel />
      <ShopCardsSection />
      <ProductCardsSection />
      <Carousel />
      <Container/>
      <BlogSection />
    </>
  );
}

export default HomePage;
