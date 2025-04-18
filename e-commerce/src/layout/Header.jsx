import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import DarkNavbar from './DarkNavbar';
import LightNavbar from './LightNavbar';




function Header() {
    const Location = useLocation();
    let mode = 'default';   
    if (location.pathname === '/shop') {
      mode = 'shop'
    } 

    const shouldShowDarkNavbar = !['/about', '/team', '/contact', '/pricing'].includes(location.pathname);
    return (
        <>
        {shouldShowDarkNavbar && (
        <div className="hidden sm:block">
            <DarkNavbar mode={mode}/>
        </div>
        )
        }
            <LightNavbar/>

        </>
    )
}

export default Header;