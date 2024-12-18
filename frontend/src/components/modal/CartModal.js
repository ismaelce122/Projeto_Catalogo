import React, { useState } from "react"
import IconeExcluir from './excluir.png'

function ModalCart() {
    const [carrinho] = useState(() => {
        const salvandoCarrinho = localStorage.getItem('carrinho')
        return salvandoCarrinho ? JSON.parse(salvandoCarrinho) : []
    })

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex='-1' aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Carrinho De Compras</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="card mx-2 mt-1 mb-1 p-2">
                        <div>
                        {carrinho.length === 0 ? (<h4 className="text-center">O Seu Carrinho está Vazio :-(</h4>) : (
                            <div>
                                {carrinho.map((cart) => {
                                    return (
                                        <div key={cart.id} className='d-flex justify-content-between p-1'>
                                            <div className="d-flex flex-colunm align-items-center">
                                                <div>
                                                    <img src={cart.img_url} alt={cart.nome} style={{ width: '50px', height: '50px' }} />
                                                </div>
                                                <span>{cart.nome}</span>
                                                <span className="ms-4">{cart.preco}</span>
                                            </div>
                                            <div>
                                                <button type='button' className='btn btn-danger' title='excluir item'><img src={IconeExcluir} alt='...' /></button>
                                            </div>
                                        </div>
                                    ) 
                                })}
                            </div>
                        )}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
                        <button type="button" className="btn btn-primary">Avança</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCart