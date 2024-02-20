import styled from "styled-components";

const ProgressBarStyled = styled.label`
    progress {
        appearance: none;
        width: 450px;
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

export const ProgressBar = (props) =>
    <ProgressBarStyled>
        <progress
            max={props.max}
            value={props.value} />

    </ProgressBarStyled>