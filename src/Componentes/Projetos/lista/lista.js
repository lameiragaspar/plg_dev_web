import React, {useState} from "react";
import { BuscaProjeto, retornaProjeto } from "./servicos.js";
import Card from "../card/card.js";
import './lista.css'

export default function Lista(){
    //Class Input --> Serve para mostrar ou esconder o input a cada clique
    const on = "mostrarBusca"

    const [campoDeBusca, setCampoDeBusca] = useState(false)
    function mostrarInput (){
        setCampoDeBusca(!campoDeBusca)
    }
    
    //Fim da configuração
    const [listaProjetos, setListaProjetos] = useState(retornaProjeto())
    const [buscaProjeto, setBuscaProjeto] = useState("")

    const handleBuscaProjeto = (txtPesquisado) => {
        setBuscaProjeto(txtPesquisado)
        setListaProjetos(BuscaProjeto(txtPesquisado))
    }

    return(
        <section>
            <div className='tam-max tema'>
                <h2>Projetos</h2>
                <div className='pesquisa'>
                    <input className={campoDeBusca ? on : ""}
                    type='text'
                    placeholder='Pesquise uma tecnologia ou projeto'
                    value={buscaProjeto}
                    onChange={(event) => handleBuscaProjeto(event.target.value)}/>
                    <img onClick={mostrarInput} className='lupa' src='/assets/lupa.png'/>
                </div>
            </div>
            <div className="lista">
                <div className="tam-max">
                    {listaProjetos.map(projeto =>(
                        <Card
                            key={projeto.id}
                            titulo={projeto.titulo}
                            imagem={projeto.imagem.valueOf() === "" ? "/assets/projetos/andamento.jpg" : projeto.imagem}
                            codigo ={projeto.codigo}
                            projeto={projeto.projeto}
                            botao={projeto.botao.valueOf() !== "Ver projeto" ? "Em andamenteto": "Ver projeto"}
                        >
                            <h3>{projeto.titulo}</h3>
                            <p>{projeto.descricao}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}