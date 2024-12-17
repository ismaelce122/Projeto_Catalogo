function RemoverItem() {
    // Modal Remover Item
    return (
        <div className="modal fade" id="modalRemover" tabIndex='-1' aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Você tem Certeza que Deseja Remover este Item?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary">Excluir Item</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RemoverItem