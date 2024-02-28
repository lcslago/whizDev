import { createContext, useEffect, useState } from "react"
import { Category, Header, HeaderTitle } from "../../components/Header"
import { Main } from "../../App"
import { MessageBox } from "../../components/MessageBox"
import { Answer, OptionsList } from "../../components/OptionsList"
import { Question, QuestionContainer, QuestionCounter } from "../../components/Question"
import { ProgressBar } from "../../components/ProgressBar"
import { SubmitAnswerButton } from "../../components/Button"


export const DelayedComponent = ({ children, loadAnimation }) => {
    const [timesUp, setTimer] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => { setTimer(true) }, 100)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <>
            {!timesUp && <>{loadAnimation}</>}
            {timesUp && <> {children} </>}
        </>
    )
}

export const QuizContext = createContext()

export const Quiz = (props) => {
    const [index, setIndex] = useState(0)

    const icon = props.render.icon
    const bgColor = props.render['icon-bg-color']
    const title = props.render.title
    const questions = props.render.questions
    const options = questions[index].options
    const answer = questions[index].answer

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
                <DelayedComponent>
                    <MessageBox>
                        <QuestionContainer>
                            <QuestionCounter>
                                Questão {index + 1} de {questions.length}
                            </QuestionCounter>

                            <Question>
                                {questions[index].question}
                            </Question>
                        </QuestionContainer>

                        <ProgressBar
                            max={questions.length}
                            value={index + 1} />

                    </MessageBox>


                    <OptionsList>
                        {options.map((option, index) =>
                            <Answer
                                alternative={String.fromCharCode(65 + index)}
                                title={option}
                                id={`answer${index + 1}`}
                                key={option} />
                        )}

                        <QuizContext.Provider value={{ index, setIndex }}>
                            <SubmitAnswerButton
                                answer={answer}
                                endOfQuiz={questions.length}
                                title={title} />

                        </QuizContext.Provider>
                    </OptionsList>
                </DelayedComponent>
            </Main>
        </>
    )
}




