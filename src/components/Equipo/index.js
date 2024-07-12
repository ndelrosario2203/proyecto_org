import './Equipo.css'
import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';


const equipo = (props) => {

    const {colorPrimario, colorSecundario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, actualizarLike} = props
    const background = {
        backgroundColor:hexToRgba(colorPrimario, 0.2)
    }
    const bordeTitulo = {
        borderColor:colorPrimario
    }

    return <>
    {   
        colaboradores.length > 0 &&
        <section className="equipo" style={ background }>

            <input 
                type='color' 
                className= 'input-color' 
                value={colorPrimario}
                onChange={(e) => 
                    actualizarColor(e.target.value, id)
                }
                />
        

            <h3 style={bordeTitulo}>{titulo}</h3>
            <div className='colaboradores'>   
                {
                    colaboradores.map((colaborador, index) => 
                    <Colaborador 
                    datos={colaborador} 
                    key={index}
                    colorPrimario = {colorPrimario}
                    colorSecundario = {colorSecundario}
                    eliminarColaborador = {eliminarColaborador}
                    actualizarLike = {actualizarLike}
                    />)
                }
            </div>
        </section>
        }
    </>
}

export default equipo;