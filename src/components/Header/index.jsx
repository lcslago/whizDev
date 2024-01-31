import styled from "styled-components"

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    width: auto;
    height: 20%;
`

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;
`

const Header = () =>
    <StyledHeader>
        <HeaderContainer>
            imagem
            <h1>title</h1>
        </HeaderContainer>

        <HeaderContainer>
            theme selector
        </HeaderContainer>
    </StyledHeader>

export default Header