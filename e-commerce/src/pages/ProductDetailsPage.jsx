import ProductCard from "../components/ProductCard"
import ProductCardsSectionDt from "../layout/ProductDetailsComponents/ProductCardsSectionDt"
import ProductDescription from "../layout/ProductDetailsComponents/ProductDescription"
import Brands from "../layout/ShopPageComponents/Brands"
import ShopBar from "../layout/ShopPageComponents/ShopBar"


function ProductDetailsPage(){
    return(
        <>
            <ShopBar/>
            <ProductCard/>
            <ProductDescription/>
            <ProductCardsSectionDt/>
            <Brands/>

        </>
    )
}


export default ProductDetailsPage