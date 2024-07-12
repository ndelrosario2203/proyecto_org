import { useState } from "react"
import { v4 as uuid } from 'uuid';
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState('')
    const [foto, actualizarFoto] = useState('')
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e) => {
        e.preventDefault();
        let id = uuid()
        let datosAEnviar = {
            id,
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario:color})
    }

    return <section className="formulario">
        {/* Creación de colaboradores */}
        <form onSubmit={manejarEnvio}>
            <h2>
                Rellena el formulario para crear el colaborador.
            </h2>
                <CampoTexto 
                    titulo="Nombre" 
                    placeHolder="Ingresar nombre" 
                    required 
                    valor={nombre} 
                    actualizarValor={actualizarNombre} 
                />
                <CampoTexto 
                    titulo="Puesto" 
                    placeHolder="Ingresar puesto" 
                    required 
                    valor={puesto} 
                    actualizarValor={actualizarPuesto} 
                />
                <CampoTexto 
                    titulo="Foto" 
                    placeHolder="Ingresar enlace de foto" 
                    required 
                    valor={foto} 
                    actualizarValor={actualizarFoto} 
                />
                <ListaOpciones 
                    valor={equipo} 
                    actualizarValor={actualizarEquipo}
                    equipos = {props.equipos}
                />
                <Boton texto="Crear" />
            
        </form>
        {/* Creación de equipos */}
        <form onSubmit={manejarNuevoEquipo}>
            <h2>
                Rellena el formulario para crear el equipo.
            </h2>
                <CampoTexto 
                    titulo="Equipo" 
                    placeHolder="Ingresar el nombre del equipo" 
                    required 
                    valor={titulo} 
                    actualizarValor={actualizarTitulo} 
                />
                <CampoTexto 
                    titulo="Color" 
                    placeHolder="Ingresar color en Hex" 
                    required 
                    valor={color} 
                    actualizarValor={actualizarColor}
                    type="color"
                />

                <Boton texto="Registrar equipo" />
        </form>
    </section>
}

export default Formulario