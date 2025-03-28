import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    const manejarCambios = (e) =>{
        props.actualizarValor(e.target.value)
    }

    return <div  className="lista-opciones">
    <label>Equipos</label>
    <select value={props.valor} onChange={manejarCambios} required>

        <option value="" disabled defaultValue='' hidden>Seleccionar equipo...</option>
        {props.equipos.map( (equipo, index) =>  <option key={index} value={equipo}>{equipo} </option>)}
        
    </select>
    </div>
}

export default ListaOpciones