import ProductCard1 from '../assets/product-cards/product-card-1.png'
import ProductCard2 from '../assets/product-cards/product-card-2.png'
import ProductCard3 from '../assets/product-cards/product-card-3.png'
import ProductCard4 from '../assets/product-cards/product-card-4.png'
import ProductCard5 from '../assets/product-cards/product-card-5.png'
import ProductCard67 from '../assets/product-cards/product-card-6-7.png'
import ProductCard8 from '../assets/product-cards/product-card-8.png'

function ProductCardsSection() {
    return(
        <section className="w-full mt-4">
            <div className="w-5/8 mx-auto bg-gray-400">
                <div className="">
                    <p>Featured Products</p>
                    <p>BESTSELLER PRODUCTS</p>
                    <p>Problems trying to resolve the conflict between</p>
                </div>
                <div>
                    <div><img src={ProductCard1} alt="" /></div>
                    <div><img src={ProductCard2} alt="" /></div>
                    <div><img src={ProductCard3} alt="" /></div>
                    <div><img src={ProductCard4} alt="" /></div>
                    <div><img src={ProductCard5} alt="" /></div>
                    <div><img src={ProductCard67} alt="" /></div>
                    <div><img src={ProductCard67} alt="" /></div>
                    <div><img src={ProductCard8} alt="" /></div>
                </div>
            </div>
        </section>
    )
}

export default ProductCardsSection