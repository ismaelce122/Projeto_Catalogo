import React, { useState, useEffect } from 'react'
import ImageCarousel from '../../components/carrossel/carrossel'
import './home.css'

function Home() {
    const [usuario, setUsuario] = useState('')
    useEffect(() => {
        const storedUsuario = localStorage.getItem('usuario')
        if(storedUsuario) {
            setUsuario(storedUsuario)
        }
    },[])
    return(
        <div className="container-fluid fade_in text-center mt-2">
            <div className='box'>
                {usuario && <h1 className='titulo'>Bem-Vindo(a), {usuario}</h1>}
            </div>
            <ImageCarousel />
        </div>
    )
}

export default Home