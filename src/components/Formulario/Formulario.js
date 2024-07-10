import { useState } from "react"

import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState('')
    const [foto, actualizarFoto] = useState('')
    const [equipo, actualizarEquipo] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosAEnviar);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>
                Rellena el formulario para crear el colaborador.
                <CampoTexto 
                    titulo="Nombre" 
                    placeHolder="Ingresar nombre" 
                    required valor={nombre} 
                    actualizarValor={actualizarNombre} 
                />
                <CampoTexto 
                    titulo="Puesto" 
                    placeHolder="Ingresar puesto" 
                    required valor={puesto} 
                    actualizarValor={actualizarPuesto} 
                />
                <CampoTexto 
                    titulo="Foto" 
                    placeHolder="Ingresar enlace de foto" 
                    required valor={foto} 
                    actualizarValor={actualizarFoto} 
                />
                <ListaOpciones 
                    valor={equipo} 
                    actualizarValor={actualizarEquipo}
                />
                <Boton texto="Crear" />
            </h2>
        </form>
    </section>
}

export default Formulario