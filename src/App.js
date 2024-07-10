import { useState } from "react"
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import Organizacion from './components/Organizacion';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      <Header />
      { mostrarFormulario ? <Formulario /> : <></> }
      
      <Organizacion cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
