import React from 'react'
import { Link } from 'react-router-dom'
import Formulario from '../../Componentes/footer/formulario/form'
import './loading.css'

export default function LoadingPage(){
    return(
        <section className='loadingPage'>
            {/**/}
            <div className='logoEform'>
                <div className='imagemLogo'>
                    <img src='/assets/logo.jpg'/>
                </div>
                <div className='boasVindas'>
                    <nav>
                        <Link to='/' className='link'>Home</Link>
                    </nav>
                    <Formulario />
                </div>
            </div>
        </section>
    )
}