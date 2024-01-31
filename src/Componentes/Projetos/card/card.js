import React, {useState} from "react";
import './card.css'

export default function Card(props){

    {/*Classes para a descição*/}
    const mostrar = 'ativo'
    const esconder = 'inativo'
    {/*Classes para o botão info*/}
    const click = 'clicou'
    const [info, setInfo] = useState(false)

    function alteraClass(){
        setInfo(!info)
    }

    return(
        <div className="box">
            <div className="card">
                {/*Texto com a descrição dos cards*/}
                <div className={info ? mostrar : esconder}>
                    {props.children}
                </div>
                {/*Fim do texto com a descrição dos cards*/}
                <h3>{props.titulo}</h3>
                <div className="imagemProjeto">
                    <img src={props.imagem} alt={props.titulo}/>
                </div>

                <div className="icones">

                    <img onClick={alteraClass} className={info ? click : ''} src="/assets/info.png" alt="Informações" title="Informacões"/>

                    <a href={props.codigo} target="_blanck"><img src="/assets/githubW.png" alt="GitHub" title="Ver código"/></a>

                </div>
                <a className="botao" href={props.projeto} target="_blank">{props.botao}</a>
                {/*
                    titulo
                    imagem
                    codigo
                    projeto
                    botao
                */}
            </div>
        </div>
    )
}