import React from "react";
import './card.css'

export default function Card(props){
    return(
        <div className="box">
            <div className="card">
                <h3>{props.titulo}</h3>
                <div>
                    <img src={props.imagem} alt={props.titulo}/>
                </div>
                <p>{props.descricao} <span>{props.tecnologia}</span></p>
                <a href={props.link} target="_blank">{props.projeto}</a>
            </div>
        </div>
    )
}