import styled from "styled-components"

const MessageBoxContainer = styled.section`
    width: 50%;
    height: auto;
    margin: 0;
`

const WelcomeMessage = styled.div`
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

const MessageBox = (props) =>
    <MessageBoxContainer>
        {props.content === "WelcomeMessage" ?
            <WelcomeMessage>
                <h1 role="heading" aria-level="1">
                    Boas-vindas ao <span role="img" aria-label="whizDev">&lt;whizDev/&gt;</span>
                </h1>

                <p>Para começar escolha uma categoria</p>
            </WelcomeMessage> : ""}
    </MessageBoxContainer>

export default MessageBox
