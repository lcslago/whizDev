import { useContext } from "react"
import styled, { css } from "styled-components"
import { InputContext } from "../OptionsList"
import { QuizContext } from "../../pages/Quiz"
import { useNavigate } from "react-router-dom"
import { ScoreContext } from "../../context/ScoreContext"

const DefaultButtonStyles = css`
    width: 488px;
    height: 80px;
    background-color: #a629f6;
    color: white;
    font-weight: 500;
    font-size: 1.5rem;
    border: none;
    border-radius: 1.2rem;
    padding: 1rem;
    margin-top: .5rem;
`

const SubmitButton = styled.input`
    ${DefaultButtonStyles}
    cursor: ${props => props.cursor};
    opacity: ${props => props.opacity};
`

const GoHomeButtonStyled = styled.button`
    ${DefaultButtonStyles}
    cursor: pointer;
    width: 100%;
    user-select: none;
`

export const GoHomeButton = ({ children }) => {
    const navigate = useNavigate()

    return (
        <GoHomeButtonStyled type="button" onClick={() => navigate("/")}>
            {children}
        </GoHomeButtonStyled>
    )
}

export const SubmitAnswerButton = (props) => {
    const {
        inputChecked,
        setInputChecked,
        correctAnswer,
        setCorrectAnswer } = useContext(InputContext)

    const { index, setIndex } = useContext(QuizContext)
    const { setScore } = useContext(ScoreContext)
    const navigate = useNavigate()

    const checkAnswer = (e) => {
        e.preventDefault()
        const answerFromDB = props.answer
        const form = e.target.form
        const answerSubmited = Array.from(form)
            .map(input => input.checked && input.previousElementSibling.innerText)
            .filter(word => word !== false).toString()

        const answerIsCorrect = answerSubmited === answerFromDB
        setCorrectAnswer(answerIsCorrect)

        if (answerIsCorrect) {
            setScore(prevScore => prevScore + 1)
        }

    }

    const goToNextQuestion = (e) => {
        e.preventDefault()
        setIndex(prevIndex => prevIndex + 1)
        setCorrectAnswer(null)
        setInputChecked(false)
    }

    const goTo = (page, e) => {
        e.preventDefault()
        navigate(page)
    }

    return (
        <SubmitButton
            type="submit"
            cursor={!inputChecked ? "not-allowed" : "pointer"}
            opacity={!inputChecked ? ".5" : "1"}
            disabled={!inputChecked ? true : false}

            value={
                !inputChecked ? "Selecione uma alternativa" :
                    correctAnswer === null ? "Enviar Resposta" :
                        index === props.endOfQuiz - 1 ? "Finalizar Quiz" : "Próxima Questão"}

            onClick={
                correctAnswer === null ? checkAnswer :
                    index === props.endOfQuiz - 1 ? (e) => goTo("./resultado", e) : goToNextQuestion}>
        </SubmitButton>
    )
}