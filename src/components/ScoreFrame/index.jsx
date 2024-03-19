import { useContext, useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import styled from "styled-components";
import { ScoreContext } from "../../context/ScoreContext";

const ScoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;
    gap: 2rem;
    background-color: #3C4D67;
    width: 100%;
    height: auto;
    border-radius: 1.2rem;
    user-select: none;
`

const CircularProgressbarContainer = styled.div`
    width: 50%;
    cursor: default;
`

const ScoreNumbers = styled.div`
    width: 50%;
    text-align: center;

    p {
        font-size: 1rem;
        margin: 0;
        opacity: .7;
    }
`

export const ScoreFrame = (props) => {
    const { score } = useContext(ScoreContext)
    const [percentageScore, setScore] = useState(0)

    const numberOfQuestions = props.numberOfQuestions
    const percentageScoreEquation = Math.round((score / numberOfQuestions) * 100)

    useEffect(() => {
        const timeout = setTimeout(() => { setScore(percentageScoreEquation) }, 150)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <ScoreContainer>
            <CircularProgressbarContainer>
                <CircularProgressbar
                    value={percentageScore}
                    text={`${percentageScore}%`}
                    strokeWidth={6}

                    styles={{
                        trail: { stroke: '#313E51' },
                        text: { fontSize: '1.8rem' },
                        // path: { stroke: '#F4D03F' }
                    }} />
            </CircularProgressbarContainer>

            <ScoreNumbers>
                <p>{score} questões de {numberOfQuestions}</p>
            </ScoreNumbers>
        </ScoreContainer>
    )
}
