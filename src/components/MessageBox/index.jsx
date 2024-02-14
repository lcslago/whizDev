import styled from "styled-components"

const MessageBoxContainer = styled.section`
    width: 50%;
    height: auto;
    margin: 0;
`

const Question = styled.div`

`

export const MessageBox = ({ children }) =>
    <MessageBoxContainer>
        {children}
    </MessageBoxContainer>
