import React from "react";
import Card from "../card/card.js";
import './lista.css'

export default function Lista(){
    return(
        <div className="lista">
            <div className="tam-max">
                
                <Card
                    titulo="Alfa-Tech"
                    imagem="/assets/alfa.png"
                    codigo = "https://github.com/lameiragaspar/alfa-tech"
                    projeto="https://lameiragaspar.github.io/alfa-tech/"
                    botao="Ver projeto"> 
                <h3>Alfa-Tech</h3>
                <p>
                    Projeto feito em react com as tecnnologias... 
                </p>
                </Card>

                <Card 
                    titulo="Barbearia"
                    imagem="/assets/barbearia.png"
                    codigo="https://github.com/lameiragaspar/Barbearia"
                    projeto="https://barbeariaplg.vercel.app/"
                    botao="Ver projeto">

                </Card>
                <Card 
                    titulo="Netflix"
                    imagem="/assets/andamento.jpg"
                    codigo
                    link
                    botao="Em andamento">
                    
                </Card>
            </div>
        </div>
    )
}