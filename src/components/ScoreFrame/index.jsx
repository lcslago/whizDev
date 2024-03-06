import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import styled from "styled-components";

const ScoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;
    gap: 1.5rem;
    background-color: #3C4D67;
    width: 100%;
    height: auto;
    border-radius: 1.2rem;
`

const CircularProgressbarContainer = styled.div`
    width: 50%;
    cursor: default;
    user-select: none;
`

const ScoreNumbers = styled.div`
    width: 50%;
    text-align: center;

    p {
        font-size: 1rem;
        margin: 0;
        opacity: .6;
    }
`

export const ScoreFrame = () => {


    return (
        <ScoreContainer>
            <CircularProgressbarContainer>
                <CircularProgressbar
                    value={80}
                    text="80%"
                    strokeWidth={6}

                    styles={{
                        trail: { stroke: '#313E51' },
                        text: { fontSize: '1.8rem' }
                    }} />
            </CircularProgressbarContainer>

            <ScoreNumbers>
                <p>8 questões de 10</p>
            </ScoreNumbers>
        </ScoreContainer>
    )
}
