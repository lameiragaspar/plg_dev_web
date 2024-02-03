import React from 'react'
import Formulario from './formulario/form'
import './footer.css'

export default function Footer(props){
    return(
        <footer id={props.idFooter}>
            <div className='tam-max'>
                <section className='contatos'> 
                    <div className='localizacao'>
                        <h2>Contatos</h2>
                        <p><span>Pedro</span> Manuel <span>Lameira</span> <span>Gaspar</span></p>
                        <p>Luanda, Angola</p>
                        <p>E-mail: <a href='mailto:pedrolameira20@gmai.com' target='_blanck'>pedrolameira20@gmai.com</a></p>
                    </div>
                    <div className='redesSociais'>
                        <span>Permaneça conectado</span>
                        <a href='https://github.com/lameiragaspar' target='_blanck'><img src='/assets/github.png'/>GitHub</a>
                        <a href='https://www.linkedin.com/in/pedro-lameira-gaspar-b53056274/' target='_blanck'><img src='/assets/linkdin.png'/>Linkdin</a>
                        <a href='https://www.instagram.com/lameira_dev_web/'><img src='/assets/insta.png' target='_blanck'/>instagram</a>
                    </div>
                    <Formulario />
                </section>
            </div>
        </footer>
    )
}