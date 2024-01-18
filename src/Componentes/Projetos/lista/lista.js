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
                    Projeto desenvolvido com HTML e CSS puros! <br></br> É um projeto referente a um site de hospedagem onde seus clientes podem usufruir dos melhores serviços ao preço mais barato. 
                </p>
                </Card>

                <Card 
                    titulo="Barbearia"
                    imagem="/assets/barbearia.png"
                    codigo="https://github.com/lameiragaspar/Barbearia"
                    projeto="https://barbeariaplg.vercel.app/"
                    botao="Ver projeto">
                    <h3>Barbearia</h3>
                    <p>
                        Projeto desenvolvido em React JS! <br></br>
                        O projeto apresenta uma loadingPage de uma barbearia onde o usuário pode alterar os estilos da página entre ligth e dark.
                    </p>

                </Card>
                <Card 
                    titulo="Netflix"
                    imagem="/assets/andamento.jpg"
                    codigo
                    link
                    botao="Em andamento">
                    <h3>Netflix</h3>
                    <p>
                        Projeto desenvolvido só  com HTML E CSS! <br></br>
                        O projeto é um clone das páginas de login e cadastro do site da Netflix.
                    </p>
                </Card>
            </div>
        </div>
    )
}