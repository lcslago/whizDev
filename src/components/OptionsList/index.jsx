import { useContext } from "react"
import styled from "styled-components"
import { ApiContext } from "../../context/ApiContext"

const OptionsListContainer = styled.section`
    width: 50%;
    height: auto;
`

//CRIAR UMA ANIMAÇÃO DE LOADING ATÉ A RENDERIZAÇÃO DA LISTA DE CATEGORIAS

const OptionsList = () => {
    const { data, loading } = useContext(ApiContext);

    return (
        <OptionsListContainer>
            <ul>
                {!loading && data
                    .map(category =>
                        <li> {category.title} </li>)}
            </ul>
        </OptionsListContainer>
    )
}

export default OptionsList