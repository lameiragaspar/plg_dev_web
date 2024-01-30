import React from "react";
import './formulario.css'

function Formulario() {
    return (
        <div className="formulario">
            <form action="mailto:pedrolameira20@gmail.com" method="post" encType="text/plain">
                <p>Envie uma mensagem aqui</p>
                <div className="dadosPessoais">
                    <div>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" name="nome" placeholder="Seu nome completo" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Seu email" required />
                    </div>
                </div>
                <div className="mensagem">
                    <div>
                        <label htmlFor="assunto">Assunto</label>
                        <input type="text" id="assunto" name="assunto" placeholder="Assunto da mensagem" required />
                    </div>
                    <div className="txeEbotao">
                        <label htmlFor="sms">Sua mensagem</label>
                        <div className="tam-max-txt"><textarea id="sms" name="mensagem" placeholder="Escreva sua mensagem aqui" required></textarea></div>
                        <button type="submit">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Formulario