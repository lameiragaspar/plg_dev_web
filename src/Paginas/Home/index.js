import React from 'react'
import Header from '../../Componentes/Header/header.js'
import Lista from '../../Componentes/Projeto/lista.js'
import './style.css'

export default function Home(){
    return(
        <>
            <Header/>
            <main>
                <section className='banner'>
                    {/*Imagem de fundo*/}
                    <div className='apresentacao'>
                        <h1>Olá! Eu sou o Pedro</h1>
                        <p>Desenvolvedor Web</p>
                        <div className="tecnologias">
                            <img src='/assets/html.png' alt='HTML' title='HTML'/>
                            <img src='/assets/css3.png' alt='CSS'  title='CSS'/>
                            <img src='/assets/js.png' alt='JavaSript' title='JavaSript'/>
                            <img src='/assets/react.png' alt='React JS' title='React JS'/>
                        </div>
                        <a href='#'>Agende agora</a>
                    </div>
                </section>
                <section id='Sobre'>
                    <div className='tam-max'>
                        
                        <div className='sobre'>
                            <h2>Sobre</h2>
                            <p>
                            Sou um apaixonado desenvolvedor Web com especialização em HTML, CSS, JavaScript e foco em React JS, dedicado a transformar ideias criativas em experiências digitais envolventes. Minha trajetória profissional é marcada pela constante busca de inovação, mantendo-me atualizado com as tendências do setor.Atualmente atuo como freelancer e minha abordagem visa criar interfaces intuitivas para aprimorar a interação do usuário.
                            </p>
                            <p>
                             Entre em contato para obter mais informações sobre minhas habilidades e disponibilidade.
                            </p>
                            <div className='contatos'>
                                <a href='https://github.com/lameiragaspar' target='_blank'><img src='/assets/github.png' alt='GitHub'/></a>
                                <a href='https://www.linkedin.com/in/pedro-lameira-gaspar-b53056274/' target='_blank'><img src='/assets/linkdin.png' alt='Linkdin'/></a>
                                <a href='https://www.instagram.com/lameira_dev_web/' target='_blank'><img src='/assets/insta.png' alt='Instagram'/></a>
                            </div>
                        </div>
                        <div className='foto'>
                            {/*minha foto*/}
                        </div>
                    </div>
                </section>
                <section id='Projetos'>
                    <h2>Projetos</h2>
                        <Lista />
                </section>
            </main>
        </>
    )
}