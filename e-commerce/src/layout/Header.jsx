import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import DarkNavbar from './DarkNavbar';
import LightNavbar from './LightNavbar';




function Header() {
    const Location = useLocation();
    let mode = 'default';   
    if (location.pathname === '/shop') {
      mode = 'shop'
    }
    return (
        <>
        <div className="hidden sm:block">
            <DarkNavbar mode={mode}/>
        </div>
            <LightNavbar/>

        </>
    )
}

export default Header;