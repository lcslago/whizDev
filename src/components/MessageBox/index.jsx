import styled from "styled-components"

const MessageBoxContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    height: auto;
    padding: .5rem 0 5rem 0;
    margin: 0;
`

export const MessageBox = ({ children }) =>
    <MessageBoxContainer>
        {children}
    </MessageBoxContainer>
