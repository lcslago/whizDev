import { useContext } from "react"
import styled from "styled-components"
import { ApiContext } from "../../context/ApiContext"
import BarLoader from "react-spinners/BarLoader"
import { Link } from "react-router-dom"

const OptionsListContainer = styled.section`
    width: 50%;
    height: auto;

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
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
        background-color: #3C4D67;
        font-weight: 500;
        font-size: 1.5rem;
        border: none;
        border-radius: 1.2rem;
        padding: 1rem;
        gap: 1.5rem;
        color: white;
    }
`

const StyledLink = styled(Link)`
        text-decoration: none;
`

const OptionContainer = ({ children }) =>
    <Option>
        <button>
            {children}
        </button>
    </Option>

export const OptionsList = ({ children }) =>
    <OptionsListContainer>
        {children}
    </OptionsListContainer>

export const CategoryList = () => {
    const { data, loading } = useContext(ApiContext)
    const OptionsPerPage = 4

    return (
        <ul>
            {loading &&
                Array.from({ length: OptionsPerPage }).map((_, index) =>
                    <OptionContainer key={index}>
                        <BarLoader
                            color="#adc1d6"
                            width={450}
                            height={6} />
                    </OptionContainer>)}

            {!loading &&
                data.map(category =>
                    <StyledLink to={`/${category.title.toLowerCase()}`} key={category.id}>
                        <OptionContainer>
                            <img
                                src={category.icon}
                                style={{ backgroundColor: category['icon-bg-color'] }} />

                            {category.title}
                        </OptionContainer>
                    </StyledLink>)}
        </ul>)
}