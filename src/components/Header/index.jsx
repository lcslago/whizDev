import styled from "styled-components"

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0 2rem 0;
    width: auto;
    height: 10vh;
`

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;
`

const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    user-select: none;
    gap: 1rem;

    h1 {
        margin: 0;
        font-weight: 500;
        font-size: 1.5rem;
    }
`
const LanguageIcon = styled.img`
    width: 25px;
    padding: .3rem;
    border-radius: .5rem;
`

export const Header = ({ children }) =>
    <StyledHeader>
        {children}
        <ThemeSelector />
    </StyledHeader>

export const HeaderTitle = ({ children }) =>
    <HeaderContainer>
        {children}
    </HeaderContainer>

export const Category = (props) =>
    <CategoryContainer>
        <LanguageIcon
            src={props.imgSrc}
            style={{ backgroundColor: props.bgColor }}
        />
        <h1> {props.title} </h1>
    </CategoryContainer>

export const ThemeSelector = () =>
    <HeaderContainer>
        theme selector
    </HeaderContainer>