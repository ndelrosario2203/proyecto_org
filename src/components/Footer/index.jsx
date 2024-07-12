import "./Footer.css"

const Footer = () =>{
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src={ process.env.PUBLIC_URL + "/img/facebook.png"} alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src={process.env.PUBLIC_URL + "/img/twitter.png"} alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src={ process.env.PUBLIC_URL + "/img/instagram.png"} alt='instagram' />
            </a>
        </div>
        <img src={ process.env.PUBLIC_URL + '/img/Logo.png'} alt='org' />
        <strong>Desarrollado por Noel Del Rosario</strong>
    </footer>
}

export default Footer
