import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemCount from './components/Counter/ItemCount'
import Main from "./components/Main/Main";

function App() {
  // const saludo = 'Aquí van los items del carrito'

  const onAdd = () =>{
    console.log("Este botón sirve para agregar al carrito");
}
  return (
    <>
    <Header/>
    <Main/>
    {/* <ItemCount stock={10} initial={1} onAdd={onAdd} />  */}
      <Footer />
    </>
  );
}

export default App;
