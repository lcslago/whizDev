import { useContext } from "react"
import styled, { css } from "styled-components"
import { InputContext } from "../OptionsList"

const ButtonStyles = css`
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
    ${ButtonStyles}
    cursor: pointer;
`

const SubmitButtonDeactivated = styled.input`
    ${ButtonStyles}
    opacity: .5;
    cursor: not-allowed;
`

export const SubmitAnswerButton = (props) => {
    const { inputChecked, setCorrectAnswer } = useContext(InputContext)

    const handleSubmition = (e) => {
        e.preventDefault()

        const correctAnswer = props.answer
        const form = e.target.form
        const answer = Array.from(form)
            .map(input => input.checked && input.previousElementSibling.innerText)
            .filter(word => word !== false).toString()

        setCorrectAnswer(answer === correctAnswer)
    }

    return (
        <>
            {!inputChecked &&
                <SubmitButtonDeactivated type="submit" value="Selecione uma alternativa"></SubmitButtonDeactivated>
            }
            {inputChecked &&
                <SubmitButton type="submit" value="Enviar Resposta" onClick={handleSubmition}></SubmitButton>
            }
        </>
    )
}