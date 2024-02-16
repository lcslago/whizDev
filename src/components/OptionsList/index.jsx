import styled from "styled-components"

const OptionsListContainer = styled.section`
    width: 50%;
    height: auto;

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0;
        margin: 0;
    }
`

const Option = styled.li`
    list-style: none;  
    user-select: none;

    button {
        width: 500px;
        height: 85px;
        word-wrap: break-word;
        cursor: pointer;
        display: flex;
        align-items: center;
        background-color: #3C4D67;
        font-weight: 500;
        font-size: 1.5rem;
        border: none;
        border-radius: 1.2rem;
        padding: 1rem;

        a {
            text-decoration: none;
            display: flex;
            align-items: center;
            color: white;
            gap: 1.5rem;

        }
    }   
`

const AnswerContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 1.5rem;

    h4 {
        font-size: 1.5rem;
        font-weight: 500;
        width: 80%;
        text-align: left;
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


export const OptionsList = ({ children }) =>
    <OptionsListContainer>
        <ul>
            {children}
        </ul>
    </OptionsListContainer>

export const OptionContainer = ({ children }) =>
    <Option>
        <button>
            {children}
        </button>
    </Option>

export const Answer = (props) =>
    <AnswerContainer>
        <span>
            {props.alternative}
        </span>

        <h4>{props.title}</h4>
    </AnswerContainer>

