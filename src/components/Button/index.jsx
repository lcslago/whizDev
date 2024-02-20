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

export const SubmitAnswerButton = () => {

    const { inputChecked, setInputCheck } = useContext(InputContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target.form
        const
            inputsChecked = Array.from(form)
                .map(input => input.checked)
                .some((checked) => checked)

        // !inputsChecked && setChecked(false)
        inputsChecked && console.log("Uma resposta foi selecionada")
    }

    return (
        <>
            {!inputChecked &&
                <SubmitButtonDeactivated type="submit" value="Selecione uma alternativa"></SubmitButtonDeactivated>
            }
            {inputChecked &&
                <SubmitButton type="submit" value="Enviar Resposta" onClick={handleSubmit}></SubmitButton>
            }
        </>
    )
}