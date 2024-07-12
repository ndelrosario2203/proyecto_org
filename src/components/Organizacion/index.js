        import "./Organizacion.css"


const Organizacion = (props) =>{
    // const [Mostrar, actualizarMostrar] = useState(true)

    // const manejarClick = () =>{
    //     actualizarMostrar(!Mostrar)
        
    // }

    return <section className="OrgSection">
        <h3 className="title">
            Mi Organización
        </h3>
        <img src={process.env.PUBLIC_URL + "/img/add.png"} alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default Organizacion
