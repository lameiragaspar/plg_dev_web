import { porjetos } from "../Dados/dados";

export const retornaProjeto = () => {
    return porjetos.slice(0, 6)
}

export const BuscaProjeto = (txtPesquisado) => (
    porjetos.filter(projeto =>
    projeto.titulo.toLocaleLowerCase().includes(txtPesquisado.toLocaleLowerCase()) ||
    projeto.tecnologia.toLocaleLowerCase().includes(txtPesquisado.toLocaleLowerCase())
    )
)