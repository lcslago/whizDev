import { createContext, useContext, useState } from "react"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

const OptionsListContainer = styled.section`
    width: 50%;
    height: auto;

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0;
        margin: 0;
    }
`

const AnswerForm = styled.form`
    height: auto;
    align-items: end;
`

export const OptionStyles = css`
    width: 450px;
    height: 50px;
    word-wrap: break-word;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 1.5rem;
    border: none;
    border-radius: 1.2rem;
    padding: 1rem;
    gap: 1.5rem;
    background-color: #3C4D67;
    color: white;
`

const AlternativeLetterStyles = css`
    font-size: 32px;
    width: 35px;
    height: 35px;
    padding: .5rem;
    border-radius: .5rem;
    text-align: center;
`

const OptionLinkStyled = styled(Link)`
    ${OptionStyles}
    border: .2rem solid #3C4D67;
    text-decoration: none;
`

const AnswerContainer = styled.div`
    label {
        ${OptionStyles}
        border: .2rem solid #3C4D67;
        user-select: none;
        cursor: ${props => props.cursor};

        h4 {
            font-weight: 500;
            width: 80%;
            text-align: left;
            margin: 0;
        }
        span {
            ${AlternativeLetterStyles}
            background-color: #f5f6fa;
            color: #3C4D67;
        }
        input {
            display: none;
        }
    }   
    label:has(input:checked) {
        border-color: ${props => props.color};

        span {
            background-color: ${props => props.color};
            color: #f5f6fa;
        }
    }    
`


export const InputContext = createContext()
const InputContextProvider = ({ children }) => {
    const [inputChecked, setInputChecked] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState(null)

    return (
        <InputContext.Provider value={{
            inputChecked,
            setInputChecked,
            correctAnswer,
            setCorrectAnswer
        }}>
            {children}
        </InputContext.Provider>
    )
}

export const OptionsList = ({ children }) =>
    <OptionsListContainer>
        <InputContextProvider>
            <AnswerForm>
                {children}
            </AnswerForm>
        </InputContextProvider>
    </OptionsListContainer>


export const OptionLink = ({ children, to }) =>
    <OptionLinkStyled to={to}>
        {children}
    </OptionLinkStyled>

export const Answer = (props) => {
    const { setInputChecked, correctAnswer } = useContext(InputContext)
    const isAnswerRight = correctAnswer === true
    const isAnswerWrong = correctAnswer === false

    return (
        <AnswerContainer
            color={isAnswerRight ? "#26D782" : isAnswerWrong ? "#EE5454" : "#A729F5"}
            cursor={correctAnswer !== null ? "default" : "pointer"}>

            <label htmlFor={props.id}>
                <span>
                    {props.alternative}
                </span>
                <h4>{props.title}</h4>
                <input
                    type="radio"
                    id={props.id}
                    name="answer"
                    disabled={correctAnswer !== null && true}
                    onChange={() => setInputChecked(true)} />
            </label>
        </AnswerContainer >
    )
}
