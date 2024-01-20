import React,{useState} from "react";
import './formulario.css'

const Formulario = () =>{
    return(
        <div className="formulario">
        <form>
            <p>Ou envie uma mensagem aqui</p>
            <div className="dadosPessoais">
                <div>
                    <input type="text" name="nome" id="nome" placeholder="nome completo" color="black" required/>
                    <label for="nome">Nome</label>
                </div>
                <div>
                    <input type="email" name="email" id="email" placeholder="email" required/>
                    <label for="email">Email</label>
                </div>
            </div>
            <div className="mensagem">
                <div> 
                    <input type="text" name="assunto" id="assunto" placeholder="assunto" required/>
                    <label for="assunto">Assunto</label>
                </div>
                <div className="txeEbotao">
                    <input type="text" name="sms" id="sms" placeholder="escreva aqui" required />
                    <label for="sms">sua mensagem</label>
                    <button>Enviar</button>
                </div>
            </div>
        </form>
    </div>
    )
}
    
export default Formulario