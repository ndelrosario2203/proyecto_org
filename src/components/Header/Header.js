import "./Header.css";

function Header(){
    return <header className="header">
        <img src={process.env.PUBLIC_URL + "/img/Header.png" } alt='Org'/>

    </header>
    
}

export default Header