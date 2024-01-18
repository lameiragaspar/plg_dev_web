import React from 'react'
import './footer.css'

export default function Footer(props){
    return(
        <footer id={props.idFooter}>
            <div className='tam-max'>
                <h2>Contatos</h2>
                <section className='contatos'>
                    <div className='localizacao'>
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
                    <div className='formulario'>
                        <form action="" method="post">
                            <div className='dadosPessoal'>
                                <input type='text' name='nome' placeholder='Nome completo' required/>
                                <input type='email' name='email' placeholder='Seu email' required/>
                            </div>
                            <div className='assunto'>
                                <input type='text' name='assunto' placeholder='assunto' maxLength='30' required/>
                                <input type='text' id='sms' name='sms' placeholder='Sua mensagem' maxLength='500' size='' required/>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </footer>
    )
}