import { useState } from "react"
import { Header, HeaderTitle } from "../../components/Header"
import styled from "styled-components"
import { Main } from "../../App"
import { MessageBox } from "../../components/MessageBox"
import { OptionContainer, OptionsList } from "../../components/OptionsList"

const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    img {
        width: 35px;
        padding: .5rem;
        border-radius: .5rem;
    }

    h1 {
        margin: 0;
        font-weight: 500;
        font-size: 2rem;
    }
`

const QuestionContainer = styled.div`
    user-select: none;
    font-size: 1.5rem;

    h2 {
        font-weight: 500;
        margin: 0;
    }
`

const AnswerContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    h3 {
        font-size: 1.5rem;
        font-weight: 500;
        color: white;
        margin: 0;
    }

    span {
        font-size: 32px;
        background-color: #f5f6fa;
        color: #3C4D67;
        width: 35px;
        height: 35px;
        padding: .5rem;
        border-radius: .5rem;
    }
`

const DelayedComponent = ({ children, loadAnimation }) => {
    const [timesUp, setTimer] = useState(false)

    useState(() => {
        const timeout = setTimeout(() => { setTimer(true) }, 1500)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <>
            {!timesUp && <>{loadAnimation}</>}
            {timesUp && <> {children} </>}
        </>
    )
}

const Category = (props) =>
    <CategoryContainer>
        <img
            src={props.imgSrc}
            style={{ backgroundColor: props.bgColor }}
        />
        <h1> {props.title} </h1>
    </CategoryContainer>

export const Quiz = (props) => {
    let index = 0

    const icon = props.render.icon
    const bgColor = props.render['icon-bg-color']
    const title = props.render.title
    const questions = props.render.questions
    const options = questions[index].options

    return (
        <>
            <Header>
                <HeaderTitle>
                    <DelayedComponent>
                        <Category
                            imgSrc={icon}
                            title={title}
                            bgColor={bgColor}
                        />
                    </DelayedComponent>
                </HeaderTitle>
            </Header>

            <Main>
                <MessageBox>
                    <QuestionContainer>
                        <h2>{questions[index].question}</h2>
                    </QuestionContainer>
                </MessageBox>

                <OptionsList>
                    {options.map((option, index) =>
                        <OptionContainer>
                            <AnswerContainer>
                                <span>{String.fromCharCode(65 + index)}</span>
                                <h3>{option}</h3>
                            </AnswerContainer>
                        </OptionContainer>
                    )}
                </OptionsList>
            </Main>
        </>
    )
}




