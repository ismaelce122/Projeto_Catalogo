import FormCadastro from '../../components/formCadastro/formCadastro'
import './cadastro.css'

function Cadastro() {
    return (
        <div>
            <div className='cadastro_produtos'>
                <h1>Cadastro de Produtos</h1>
            </div>
            <FormCadastro />
        </div>
    )
}

export default Cadastro