import { useState } from "react"
import "./CampoTexto.css"


const CampoTexto = (props) =>{

    // const [valor,setValor] = useState("");
    const manejarCambios = (e) => {
        props.actualizarValor(e.target.value);
    }


    const placeHolderModificado = `${props.placeHolder}...`
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
            placeholder={placeHolderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambios}
        />
    </div>

}

export default CampoTexto