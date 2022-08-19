import Navbar from "../Nav/Navbar";
import estilos from './header.module.css';

const Header = () => {
    return(
        <header className={estilos.navbar}>
            <Navbar />
        </header>
    )
}

export default Header