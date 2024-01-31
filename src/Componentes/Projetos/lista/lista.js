import React from "react";
import Card from "../card/card.js";
import { porjetos } from "../Dados/dados.js";
import './lista.css'

export default function Lista(){
    return(
        <div className="lista">
            <div className="tam-max">
                {porjetos.map(projeto =>(
                    <Card
                        key={projeto.id}
                        titulo={projeto.titulo}
                        imagem={projeto.imagem}
                        codigo ={projeto.codigo}
                        projeto={projeto.projeto}
                        botao={projeto.botao}>

                        <h3>{projeto.titulo}</h3>
                        <p>{projeto.descricao}</p>
                    </Card>
                ))}
            </div>
        </div>
    )
}