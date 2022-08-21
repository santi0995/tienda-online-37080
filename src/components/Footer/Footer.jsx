import estilos from './footer.module.css';
import Navbar from "../Nav/Navbar";

const Footer = () => {
    return(
        <footer className={estilos.contenedorMain}>
            <Navbar isFooter={true}/>
            <h5>Diseñado por Santiago Serrato</h5>
        </footer>
    )
}

export default Footer