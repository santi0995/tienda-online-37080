import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <Header/>
      <ItemListContainer saludo='Aquí van los items del carrito'/>
      <Main test='Probando las propiedades'
            alumno = {{nombre: 'Santiago', curso: 'React'}}/>
      <Footer />
    </>
  );
}

export default App;
