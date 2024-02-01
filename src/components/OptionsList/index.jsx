import { useContext } from "react"
import styled from "styled-components"
import { ApiContext } from "../../context/ApiContext"
import BarLoader from "react-spinners/BarLoader"

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
        height: 90px;
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

const OptionContainer = ({ children }) =>
    <Option>
        <button>
            {children}
        </button>
    </Option>

const OptionsList = () => {
    const { data, loading } = useContext(ApiContext);
    const OptionsPerPage = 4;

    return (
        <OptionsListContainer>
            <ul>
                {loading &&
                    Array.from({ length: OptionsPerPage }).map((_, index) =>
                        <OptionContainer key={index}>
                            <BarLoader
                                color="#adc1d6"
                                width={450}
                                height={8}
                            />
                        </OptionContainer>)}

                {!loading &&
                    data.map(category =>
                        <OptionContainer key={category.id}>
                            <img
                                src={category.icon}
                                style={{ backgroundColor: category['icon-bg-color'] }} />

                            {category.title}
                        </OptionContainer>)}
            </ul>
        </OptionsListContainer>

    )
}

export default OptionsList