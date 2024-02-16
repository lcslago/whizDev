import { useState } from "react"
import { Header, HeaderTitle } from "../../components/Header"
import styled from "styled-components"
import { Main } from "../../App"
import { MessageBox } from "../../components/MessageBox"
import { LanguageIcon, OptionContainer, OptionsList } from "../../components/OptionsList"

const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    user-select: none;
    gap: 1.5rem;

    h1 {
        margin: 0;
        font-weight: 500;
        font-size: 2rem;
    }
`

const QuestionContainer = styled.div`
    display: flex;
    height: 50vh;
    flex-direction: column;
    gap: 1.5rem;
    user-select: none;
    font-size: 2rem;
`

const QuestionCounter = styled.h2`
    font-size: 1rem;
    margin: 0;
    font-weight: 300;
    opacity: .8;
    font-style: italic;
`

const Question = styled.h3`
    font-weight: 500;
    margin: 0;
`

const ProgressBar = styled.label`
    progress {
        appearance: none;
        width: 90%;
        height: 13px;
    }

    progress::-webkit-progress-bar{
        background-color: #3C4D67;
        border-radius: 1rem;
    }

    progress::-webkit-progress-value {
        background-color: #a629f6;
        border: .2rem solid #3C4D67;
        border-radius: 1rem;
    } 
`

const AnswerContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    h4 {
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
        <LanguageIcon
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
                        <QuestionCounter>
                            Questão {index + 1} de {questions.length}
                        </QuestionCounter>

                        <Question>{questions[index].question}</Question>
                    </QuestionContainer>
                    <ProgressBar><progress max={questions.length} value={index + 1}></progress></ProgressBar>
                </MessageBox>

                <OptionsList>
                    {options.map((option, index) =>
                        <OptionContainer>
                            <AnswerContainer>
                                <span>{String.fromCharCode(65 + index)}</span>
                                <h4>{option}</h4>
                            </AnswerContainer>
                        </OptionContainer>
                    )}
                </OptionsList>
            </Main>
        </>
    )
}




