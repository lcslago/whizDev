import { useContext } from "react"
import { ApiContext } from "../../context/ApiContext"
import { OptionLink } from "../OptionsList"
import { BarLoader } from "react-spinners"
import styled from "styled-components"

const LanguageIcon = styled.img`
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

                    <OptionLink>
                        <BarLoader
                            color="#F4F6FA"
                            cssOverride={{
                                'border-radius': '.2rem'
                            }}
                            width={"100%"}
                            height={8} />
                    </OptionLink>)}

            {!loading &&
                data.map(category =>
                    <OptionLink to={`/${category.title.toLowerCase()}`}>
                        <LanguageIcon
                            src={category.icon}
                            style={{ backgroundColor: category['icon-bg-color'] }} />

                        {category.title}
                    </OptionLink>)}
        </>
    )
}