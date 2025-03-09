import ListaProdutos from "../../components/ListaDeProdutos/listaProdutos"
import './catalogoProdutos.css'

function CatalogoProdutos() {
    return (
        <div className="mt-2">
            <div className="container catalogo mb-2">
                <h1>Catálogo De Produtos</h1>
            </div>
            <ListaProdutos />
        </div>
    )
}

export default CatalogoProdutos