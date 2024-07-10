import './Equipo.css'
import Colaborador from '../Colaborador'


const equipo = (props) => {

    const {colorPrimario, colorSecundario, titulo} = props.datos
    const {colaboradores} = props
    const background = {
        backgroundColor:colorSecundario
    }
    const bordeTitulo = {
        borderColor:colorPrimario
    }

    return <>
    {   
        colaboradores.length > 0 &&
        <section className="equipo" style={ background }>
            <h3 style={bordeTitulo}>{titulo}</h3>
            <div className='colaboradores'>   
                {
                    colaboradores.map((colaborador, index) => 
                    <Colaborador 
                    datos={colaborador} 
                    key={index}
                    colorPrimario = {colorPrimario}
                    colorSecundario = {colorSecundario}
                    />)
                }
            </div>
        </section>
        }
    </>
}

export default equipo;