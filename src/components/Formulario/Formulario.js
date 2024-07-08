import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () => {

    const manejarEnvio = (e) =>{
        e.preventDefault();
        console.log("Hola Mundo", e)

    }
    
    return<section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>
                Rellena el formulario para crear el colaborador.
                <CampoTexto titulo="Nombre" placeHolder="Ingresar nombre" required/>
                <CampoTexto titulo="Puesto" placeHolder="Ingresar puesto" required/>
                <CampoTexto titulo="Foto" placeHolder="Ingresar enlace de foto" required/>
                <ListaOpciones />
                <Boton texto="Crear"/>
            </h2>
        </form>
    </section>
}

export default Formulario