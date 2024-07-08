import "./CampoTexto.css"

const CampoTexto = (props) =>{
    const placeHolderModificado = `${props.placeHolder}...`
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={placeHolderModificado} required={props.required}/>
    </div>

}

export default CampoTexto