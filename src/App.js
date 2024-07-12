import { useState } from "react"
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import Organizacion from './components/Organizacion';
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";


function App() {

  //Hooks
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysR-dev.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: true
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: true
    }])
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },

    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },

    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },

    { 
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },

    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },

    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },

    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }

  ])
  //Mostrar/Ocultar formulario  
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador", colaborador);

    //Spread Operator
    actualizarColaboradores([...colaboradores, colaborador])
  }


  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }


  //Actualizar color del equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }

      return equipo

    })

    actualizarEquipos(equiposActualizados);
  }

  //Crear equipos
  const crearEquipo = (equipoNuevo) =>{
    console.log(equipoNuevo)
    actualizarEquipos([...equipos, {...equipoNuevo, id: uuid()}])
  }
  
  const actualizarLike = (id) =>{
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id ===id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />

      {/* Mostrar o no el formulario al momento de darle al botón */}
      {

        mostrarFormulario ? <Formulario equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo = {crearEquipo}
        /> : <></>

      }

      <Organizacion cambiarMostrar={cambiarMostrar} />


      {/* Se crean los distintos equipos */}
      {
        equipos.map((equipo) => <Equipo
          key={equipo.id}
          datos={equipo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          actualizarLike = {actualizarLike}
        />)
      }

      <Footer />

    </div>
  );
}

export default App;
