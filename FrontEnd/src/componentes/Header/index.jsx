// FrontEnd\src\componentes\Header\index.jsx

import {Link} from 'react-router-dom';
import './styles.css';

function Header() {
    return (
        <header classname="header-container">
            <div className='logo'> Sistemas de Clientes</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cadastro">Cadastrar</Link>
                <Link to="/lista"> Listar</Link>
            </nav>
        </header>
    );
}

export default  Header;

