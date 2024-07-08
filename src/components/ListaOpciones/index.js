import "./ListaOpciones.css"

const ListaOpciones = () => {

    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión",
    ]

    return <div  className="lista-opciones">
    <label>Equipos</label>
    <select>
        
        {equipos.map( (equipo, index) =>  <option key={index}>{equipo}</option>)}
        
        {/* <option>Programación</option>
        <option>Front End</option>
        <option>Data Science</option>
        <option>Devops</option>
        <option>UX y Diseño</option>
        <option>Móvil</option>
        <option>Innovación y Gestión</option> */}
    </select>
    </div>
}

export default ListaOpciones