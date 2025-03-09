import UsuariosCadastrados from '../../components/usuariosCadastrados/usuariosCadastrados'
import './listaUsuarios.css'

const ListaUsuarios = () => {
    return (
        <div className='lista-usuarios mt-4 fade_in'>
            <h1>Lista de Usuários</h1>
            <UsuariosCadastrados />
        </div>
    )
}

export default ListaUsuarios