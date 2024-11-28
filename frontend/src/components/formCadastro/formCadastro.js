import './formCadastro.css'

function FormCadastro() {
    return(
        <div>
            <form className='form_cadastro'>
                <label>Nome:</label>
                <input className='input_produtos' type='text' name='nome' />
                <label>Descrição:</label>
                <input className='input_produtos' type='text' name='descricao' />
                <label>Categoria:</label>
                <input className='input_produtos' type='text' name='categoria' />
                <label>Preço:</label>
                <input className='input_produtos' type='text' name='preco' />
                <label>Validade:</label>
                <input className='input_produtos' type='text' name='validade' />
                <button className='btn_cadastrar' type='submit'>Cadastrar Produto</button>
            </form>
        </div>
    )
}

export default FormCadastro