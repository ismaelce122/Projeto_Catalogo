import ListaProdutos from "../../components/ListaDeProdutos/listaProdutos"
import './catalogo.css'
function Catalogo() {
    return (
        <div className="mt-2">
            <div className="container catalogo mb-2">
                <h1>Catálogo De Produtos</h1>
            </div>
            <ListaProdutos />
        </div>
    )
}

export default Catalogo