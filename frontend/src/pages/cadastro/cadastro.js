import FormCadastro from '../../components/formCadastro/formCadastro'
import './cadastro.css'

function Cadastro() {
    return (
        <div className='mt-2'>
            <div className='cadastro_produtos mb-4'>
                <h1>Cadastrar Produto</h1>
            </div>
            <FormCadastro />
        </div>
    )
}

export default Cadastro