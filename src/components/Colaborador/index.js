import "./Colaborador.css"
import { TiDeleteOutline } from "react-icons/ti";
import { GoHeart, GoHeartFill } from "react-icons/go";

const Colaborador = (props) =>{

    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, actualizarLike} = props

    return <div className="colaborador">
        <TiDeleteOutline onClick={() => eliminarColaborador(id)}  className="eliminar" color="red"/>
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} />
            
        </div>

        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <GoHeartFill color="red" onClick={() => actualizarLike(id)} /> : <GoHeart onClick={() => actualizarLike(id)}/>}
        </div>

    </div>
} 

export default Colaborador