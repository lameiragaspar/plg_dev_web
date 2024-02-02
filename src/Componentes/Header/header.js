import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import './mediasHeader.css'

export default function Header(){

    /**nova Classe do menu!*/
    const mostrar = 'mostrar'
    const esconderIcone = 'esconder'
    const [mostrarMenu, setMostrarMenu] = useState(false)

    function AbrirFecharMenu(){
        setMostrarMenu(!mostrarMenu)
    }
    return(
        <header>
            <div className='tam-max'>
                <img className='logo' src='/assets/logo.jpg' alt='Logo'/>   

                <nav className='menuOriginal'>
                    <Link to='/' className='a'>Home</Link>
                    <a href='#Sobre' className='a'>Sobre</a>
                    <a href='#Projetos' className='a'>Projetos</a>
                    <a href='#Contatos' className='a'>Contatos</a>
                </nav>

                {/**Responsivo */}
                <div className= 'menu'>
                    <img onClick={AbrirFecharMenu} className={mostrarMenu ? esconderIcone : 'hamburguer'} src='assets/menu.png'/>

                    <nav className={mostrarMenu ? mostrar :'opcoes'}>
                        <img onClick={AbrirFecharMenu} src='assets/close.png'/>
                        <Link onClick={AbrirFecharMenu} to='/' className='a'>Home</Link>
                        <a onClick={AbrirFecharMenu} href='#Sobre' className='a'>Sobre</a>
                        <a onClick={AbrirFecharMenu} href='#Projetos' className='a'>Projetos</a>
                        <a onClick={AbrirFecharMenu} href='#Contatos' className='a'>Contatos</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}