import ListaProdutos from "../../components/ListaDeProdutos/listaProdutos"
import './catalogo.css'
function Catalogo() {
    return (
        <div>
            <div className="catalogo">
                <h1>Catálogo De Produtos</h1>
            </div>
            <ListaProdutos />
        </div>
    )
}

export default Catalogo