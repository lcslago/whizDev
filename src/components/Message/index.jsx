import styled from "styled-components"

const MessageContainer = styled.div`
    user-select: none;
    font-size: 2rem;

    h1 {
        font-weight: 300;
        margin: 0;

        b {
            font-weight: 500;
        }
    }

    p {
        font-size: 1.2rem;
        font-weight: 300;
        padding: 2rem 0;
        opacity: .8;
    }
`

export const Message = ({ children }) =>
    <MessageContainer>
        {children}
    </MessageContainer>