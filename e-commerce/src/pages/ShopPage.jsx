import Brands from "../layout/ShopPageComponents/Brands"
import FilterProductCards from "../layout/ShopPageComponents/FilterProductCards"
import ProductCards from "../layout/ShopPageComponents/ProductCards"
import ShopBar from "../layout/ShopPageComponents/ShopBar"
import ShopCards from "../layout/ShopPageComponents/ShopCards"


function ShopPage(){
    return(
        <>
            <ShopBar/>
            <ShopCards/>
            <FilterProductCards/>
            <ProductCards/>
            <Brands/>
        </>
    )
}


export default ShopPage