import styled from "styled-components"

const MessageBoxContainer = styled.section`
    width: 50%;
    height: auto;
    margin: 0;
`

const WelcomeMessageContainer = styled.div`
    user-select: none;
    font-size: 2rem;
    h1{
        font-weight: 300;
        margin: 0;
        span{
            font-weight: 500;
        }
    }
    p{
        font-size: 1.2rem;
        font-weight: 300;
        padding: 2rem 0;
        opacity: .8;
    }
`

const Question = styled.div`

`

export const MessageBox = ({ children }) =>
    <MessageBoxContainer>
        <WelcomeMessageContainer>
            {children}
        </WelcomeMessageContainer>
    </MessageBoxContainer>


export const WelcomeMessage = () =>
    <div>
        <h1 role="heading" aria-level="1">
            Boas-vindas ao <span role="img" aria-label="whizDev">&lt;whizDev/&gt;</span>
        </h1>

        <p>Para começar escolha uma categoria</p>
    </div>
