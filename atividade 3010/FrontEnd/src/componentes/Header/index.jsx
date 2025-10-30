// FrontEnd\src\componentes\Header\index.jsx

import {Link} from 'react-router-dom';
import "./styles.css";

function Header() {
    return (
        <header className="header - container">
            <div>Gerenciamento de Usuários!</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">Cadastrar</Link>
                <Link to="/listar">Listar Usuários</Link>
            </nav>
        </header>
    );
}

export default Header;