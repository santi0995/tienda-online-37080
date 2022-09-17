import Navbar from "../Nav/Navbar";
import estilos from './footer.module.css';

const Footer = () => {
    return(
        <footer className={estilos.contenedorMain}>
            <Navbar isInHeader={false}/>
            <h5>Diseñado por Santiago Serrato</h5>
        </footer>
    )
}

export default Footer