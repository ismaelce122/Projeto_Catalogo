import ImageCarousel from '../../components/carrossel/carrossel'
import ProductsPage from '../../components/paginaCarrinho/carrinho'
import './home.css'

function Home() {
    return(
        <div className="container-fluid fade_in text-center mt-2">
            <ImageCarousel />
            <ProductsPage />
        </div>
    )
}

export default Home