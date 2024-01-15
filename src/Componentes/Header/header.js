import React from 'react'
import './header.css'

export default function Header(){
    return(
        <header>
            <div className='tam-max'>
                <img className='logo' src='/assets/logo.jpg' alt='Logo'/>

                <nav>
                    <a href='#'>Home</a>
                    <a href='#'>Sobre</a>
                    <a href='#'>Projetos</a>
                    <a href='#'>Contatos</a>
                </nav>
            </div>
        </header>
    )
}