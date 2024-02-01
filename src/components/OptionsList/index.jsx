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
    list-style: none;

    img {
        width: 35px;
        padding: .5rem;
        border-radius: .5rem;
    }

    button {
        width: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        background-color: #3C4D67;
        font-weight: 500;
        font-size: 1.5rem;
        border: none;
        color: white;
        border-radius: 1.2rem;
        padding: 1rem;
        margin: 1.2rem 0;
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
                        <Option>
                            <button>
                                <img
                                    src={category.icon}
                                    style={{ backgroundColor: category['icon-bg-color'] }} />

                                {category.title}
                            </button>
                        </Option>)}
            </ul>
        </OptionsListContainer>

    )
}

export default OptionsList