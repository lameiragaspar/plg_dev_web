import React from "react";
import Card from "./card/card.js";
import './lista.css'

export default function Lista(){
    return(
        <div className="lista">
            <div className="tam-max">
                <Card
                    titulo="Alfa-Tech"
                    imagem="/assets/alfa.png"
                    descricao="Hospedagem para sites!"
                    link="https://lameiragaspar.github.io/alfa-tech/"
                    tecnologia="(HTML e CSS Puros)"
                    projeto="Ver projeto"
                />
                <Card
                    titulo="Barbearia"
                    imagem="/assets/barbearia.png"
                    descricao="Loading Page de uma barbearia!"
                    link="https://barbeariaplg.vercel.app/"
                    tecnologia="(React)"
                    projeto="Ver projeto"
                />
                <Card
                    titulo="Netflix"
                    imagem="/assets/andamento.jpg"
                    descricao="Clone da Netflix!"
                    tecnologia="(HTML e CSS Puros)"
                    link
                    projeto="Em andamento"
                />
            </div>
        </div>
    )
}