import FormProdutos from '../../components/formProdutos/formProdutos'
import './cadastroProduto.css'

function CadastroProduto() {
    return (
        <div className='mt-2'>
            <div className='cadastro_produtos mb-4'>
                <h1>Cadastrar Produto</h1>
                <FormProdutos />
            </div>
            
        </div>
    )
}

export default CadastroProduto