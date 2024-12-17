function AlterarItem() {
    return (
        <div className="modal fade" id="modalAlterar" tabIndex='-1' aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Aterar Produto</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor='recipient-name' className="col-form-label">Nome:</label>
                                <input type="text" className="form-control" id="recipient-name" name="nome" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor='recipient-name' className="col-form-label">Descrição:</label>
                                <input type="text" className="form-control" id="recipient-name" name="descricao" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor='recipient-name' className="col-form-label">categoria:</label>
                                <input type="text" className="form-control" id="recipient-name" name="categoria" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor='recipient-name' className="col-form-label">Preço:</label>
                                <input type="text" className="form-control" id="recipient-name" name="preco" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor='recipient-name' className="col-form-label">Url Da Imagem:</label>
                                <input type="text" className="form-control" id="recipient-name" name="img_url" />
                            </div>
                            <div className="modal-footer">
                                <button type="reset" className="btn btn-secondary">Limpar</button>
                                <button type="submit" className="btn btn-primary">Alterar Produto</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlterarItem