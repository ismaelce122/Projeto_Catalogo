import Comentario from '../../components/comentario/comentario'
import './comentarioUsuarios.css'

const ComentarioUsuarios = () => {
    return (
        <div className='lista-usuarios mt-4 fade_in'>
            <h1>Comentários</h1>
            <Comentario />
        </div>
    )
}

export default ComentarioUsuarios