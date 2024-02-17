import { porjetos } from "../Dados/dados";

export const retornaProjeto = () => {
    return porjetos.slice(0, 6)
}

export const BuscaProjeto = (txtPesquisado) => (
    porjetos.filter(projeto =>
    projeto.titulo.toLocaleLowerCase().trim().includes(txtPesquisado.toLocaleLowerCase().trim()) ||
    projeto.tecnologia.toLocaleLowerCase().trim().includes(txtPesquisado.toLocaleLowerCase().trim())
    )
)