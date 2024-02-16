import styled from "styled-components"

const QuestionContainerStyled = styled.div`
    display: flex;
    height: 50vh;
    flex-direction: column;
    gap: 1.5rem;
    user-select: none;
    font-size: 2rem;
`

const QuestionCounterStyled = styled.h2`
    font-size: 1rem;
    margin: 0;
    font-weight: 300;
    opacity: .8;
    font-style: italic;
`

const QuestionStyled = styled.h3`
    font-weight: 500;
    margin: 0;
`

export const QuestionContainer = ({ children }) =>
    <QuestionContainerStyled>
        {children}
    </QuestionContainerStyled>

export const QuestionCounter = ({ children }) =>
    <QuestionCounterStyled>
        {children}
    </QuestionCounterStyled>

export const Question = ({ children }) =>
    <QuestionStyled>
        {children}
    </QuestionStyled>