import { useContext } from "react"
import styled from "styled-components"
import { ApiContext } from "../../context/ApiContext"

const OptionsListContainer = styled.section`
    width: 50%;
    height: auto;

    ul {
        padding: 0;
    }
`

const Option = styled.li`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    list-style: none;
    background-color: #3C4D67;
    font-weight: 500;
    font-size: 1.5rem;
    border-radius: 1.2rem;
    padding: 1rem;
    margin: 1.2rem 0;

    img {
        width: 35px;
        padding: .5rem;
        background-color: white; //MUDAR PARAR RESPECTIVAS CORES DOS ICONES
        border-radius: .5rem;
    }
`

//CRIAR UMA ANIMAÇÃO DE LOADING ATÉ A RENDERIZAÇÃO DA LISTA DE CATEGORIAS

const OptionsList = () => {
    const { data, loading } = useContext(ApiContext);

    return (
        <OptionsListContainer>
            <ul>
                {!loading && data
                    .map(category =>
                        <Option><img src={category.icon} id="icon" /> {category.title} </Option>)}
            </ul>
        </OptionsListContainer>

    )
}

export default OptionsList