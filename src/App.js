import { useState } from "react"
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import Organizacion from './components/Organizacion';
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor"
    },
    {
      equipo: "Programación",
      foto: "https://github.com/genesysR-dev.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora"
    },
    {
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam"
    },
    {
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor"
    },
    {
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack"
    }

  ])
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //lista de equipos
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },

    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },

    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },

    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },

    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },

    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },

    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }

  ]

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador", colaborador);

    //Spread Operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  return (
    <div>
      <Header />

      {/* Mostrar o no el formulario al momento de darle al botón */}
      {

        mostrarFormulario ? <Formulario equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        /> : <></>

      }

      <Organizacion cambiarMostrar={cambiarMostrar} />

 
      {/* Se crean los distintos equipos */}
      {
        equipos.map((equipo) => <Equipo 
        key={equipo.titulo} 
        datos={equipo}
        colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        />)
      }

      <Footer />

    </div>
  );
}

export default App;
