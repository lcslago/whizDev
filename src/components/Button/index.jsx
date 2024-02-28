import { useContext } from "react"
import styled, { css } from "styled-components"
import { InputContext } from "../OptionsList"
import { QuizContext } from "../../pages/Quiz"
import { useNavigate } from "react-router-dom"

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

export const SubmitAnswerButton = (props) => {
    const {
        inputChecked,
        setInputChecked,
        correctAnswer,
        setCorrectAnswer } = useContext(InputContext)

    let { index, setIndex } = useContext(QuizContext)
    const navigate = useNavigate()

    const checkAnswer = (e) => {
        e.preventDefault()
        const correctAnswer = props.answer
        const form = e.target.form
        const answer = Array.from(form)
            .map(input => input.checked && input.previousElementSibling.innerText)
            .filter(word => word !== false).toString()

        setCorrectAnswer(answer === correctAnswer)
    }

    const goToNextQuestion = (e) => {
        e.preventDefault()
        index += 1
        setIndex(index)
        setCorrectAnswer(null)
        setInputChecked(false)
    }

    const goToFinalScore = (e) => {
        e.preventDefault()
        navigate(`./resultado`)
    }

    return (
        <SubmitButton
            type="submit"
            cursor={!inputChecked ? "not-allowed" : "pointer"}
            opacity={!inputChecked ? ".5" : "1"}
            disabled={!inputChecked ? true : false}
            value={
                !inputChecked ?
                    "Selecione uma alternativa" :
                    correctAnswer === null ?
                        "Enviar Resposta" :
                        index === props.endOfQuiz - 1 ?
                            "Finalizar Quiz" :
                            "Próxima Questão"}

            onClick={
                correctAnswer === null ?
                    checkAnswer :
                    index === props.endOfQuiz - 1 ?
                        goToFinalScore :
                        goToNextQuestion}>
        </SubmitButton>
    )
}