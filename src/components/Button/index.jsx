import { useContext } from "react"
import styled, { css } from "styled-components"
import { InputContext } from "../OptionsList"
import { QuizContext } from "../../pages/Quiz"

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
                        "Próxima Questão"}

            onClick={correctAnswer === null ? checkAnswer : goToNextQuestion}>
        </SubmitButton>
    )
}