import DarkNavbar from './DarkNavbar';
import LightNavbar from './LightNavbar';




function Header() {
    return (
        <>
        <div className="hidden sm:block">
            <DarkNavbar/>
        </div>
            <LightNavbar/>
        </>
    )
}

export default Header;