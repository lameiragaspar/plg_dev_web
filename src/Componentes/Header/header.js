import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default function Header(){
    return(
        <header>
            <div className='tam-max'>
                <img className='logo' src='/assets/logo.jpg' alt='Logo'/>   
            
                <nav>
                    <Link to='/' className='a'>Home</Link>
                    <a href='#Sobre' className='a'>Sobre</a>
                    <a href='#Projetos' className='a'>Projetos</a>
                    <a href='#Contatos' className='a'>Contatos</a>
                </nav>
            
            </div>
        </header>
    )
}