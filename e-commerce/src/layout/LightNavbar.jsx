import { User, ShoppingCart, Search } from 'lucide-react';

function LightNavbar(){
    return(
        <>

            <nav className="flex flex-row gap-0 md:gap-13">
                <a href=""><User size={24}/></a><a href=""><Search/></a><a href=""><ShoppingCart/></a><a href="">Blog</a><a href="">Contact</a>
            </nav>
        </>
    )
}


export default LightNavbar