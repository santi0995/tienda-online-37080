import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/Counter/ItemCount'

function App() {
  const saludo = 'Aquí van los items del carrito'

  const onAdd = () =>{
    console.log("Este botón sirve para agregar al carrito");
}
  return (
    <>
      <Header/>
      {/* <ItemListContainer saludo={saludo}/> */}
      <Main test='Probando las propiedades'
            alumno = {{nombre: 'Santiago', curso: 'React'}}/>

    <ItemCount stock={10} initial={1} onAdd={onAdd} /> 
      <Footer />
    </>
  );
}

export default App;
