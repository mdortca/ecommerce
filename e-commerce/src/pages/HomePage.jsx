import Carousel from '../components/Carousel';
import ProductCardsSection from '../layout/ProductCardsSection';
import ShopCardsSection from '../layout/ShopCardsSection';
import BlogSection from '../layout/BlogSection';

function HomePage() {

    return(
        <div className="flex flex-col">
        <Carousel />
        <ShopCardsSection />
        <ProductCardsSection />
        <Carousel />
        <BlogSection />
      </div>
    )
}


export default HomePage