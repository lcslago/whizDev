import { useContext } from "react"
import { ApiContext } from "../../context/ApiContext"
import { OptionContainer } from "../OptionsList"
import { BarLoader } from "react-spinners"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const LanguageIcon = styled.img`
    width: 35px;
    padding: .5rem;
    border-radius: .5rem;
`

export const CategoryList = () => {
    const { data, loading } = useContext(ApiContext)
    const OptionsPerPage = 4

    return (
        <>
            {loading &&
                Array.from({ length: OptionsPerPage }).map((_, index) =>
                    <OptionContainer key={index}>
                        <BarLoader
                            color="#f5f6fa"
                            width={"100%"}
                            height={6} />
                    </OptionContainer>)}

            {!loading &&
                data.map(category =>
                    <OptionContainer key={category.id}>
                        <Link to={`/${category.title.toLowerCase()}`}>

                            <LanguageIcon
                                src={category.icon}
                                style={{ backgroundColor: category['icon-bg-color'] }} />

                            {category.title}
                        </Link>
                    </OptionContainer>
                )}
        </>
    )
}