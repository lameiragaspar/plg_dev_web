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
                    <div className='paragrafos'>
                        <p>
                        Como desenvolvedor web, reconheço a importância de um aprendizado contínuo, focado nos fundamentos sólidos de HTML, CSS, JavaScript e React JS.
                        </p>
                        <p>
                        A prática constante, a construção de projetos reais e a compreensão dos princípios de design e usabilidade são essenciais para desenvolver habilidades significativas e criar experiências web eficazes. Estou animado para compartilhar minhas experiências com desenvolvimento web.
                        </p>
                    </div>
                    <Formulario />
                </div>
            </div>
        </section>
    )
}