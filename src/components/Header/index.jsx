import styled from "styled-components"

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    width: auto;
    height: 10vh;
`

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;
`

export const Header = ({ children }) =>
    <StyledHeader>
        {children}
    </StyledHeader>

export const HeaderContent = () =>
    <>
        <HeaderContainer>
            imagem
            <h1>title</h1>
        </HeaderContainer>
        <HeaderContainer>
            theme selector
        </HeaderContainer>
    </>