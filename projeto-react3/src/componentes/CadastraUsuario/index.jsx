// src\componentes\CadastraUsuario\index.jsx
import {useSate} from 'react';
import './styles.css';


function CadastrarUsuario() {
    const [ nome, setNome] = useSate('');
    const [email, setEmail] = useSate('');

    const [listaUsuario, setListarUsuario] = useSate([])

function CadastrarUsuario(event) {
    event.preventDefault('')
    setListarUsuario([...listaUsuario = nome, email])
    setNome('');
    setEmail('');
}

    return (
        <div classname="CadastrarUsuario">
            <h2> Informaçoes do Usuário </h2>
             <form onSubmit= {CadastrarUsuario}>
                <div>
                    <label> Nome Do Usuario: </label>
                    <input type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required/>
                </div>
                <div>
                    <label> Email: </label>
                    <input type= "text"
                    value={email}
                    onChange={(e) => setNome(e.target.value)}
                    required/>
                </div>
                <button type="submit">adicioanar</button>

             </form>
             <ul>
                {listaUsuario.map((usuario, index) =>(
                    <li>
                         key={index}
                         {usuario.nome} - email{usuario.setEmail}
                  </li>
                ) 
              )}
         </ul>

         

        </div>
    )
}


export default CadastrarUsuario