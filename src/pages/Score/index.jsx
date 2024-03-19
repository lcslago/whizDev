import { Main } from "../../App"
import { GoHomeButton } from "../../components/Button"
import { Category, Header, HeaderTitle } from "../../components/Header"
import { Message } from "../../components/Message"
import { MessageBox } from "../../components/MessageBox"
import { OptionsList } from "../../components/OptionsList"
import { ScoreFrame } from "../../components/ScoreFrame"
import { DelayedComponent } from "../../containers/DelayedComponent"

export const Score = (props) => {
    const icon = props.render.icon
    const bgColor = props.render['icon-bg-color']
    const title = props.render.title

    const questionsLength = props.questionsLength

    return (
        <>
            <Header>
                <HeaderTitle>
                    <DelayedComponent>
                        <Category
                            imgSrc={icon}
                            title={title}
                            bgColor={bgColor}
                        />
                    </DelayedComponent>
                </HeaderTitle>
            </Header>

            <Main>
                <DelayedComponent>
                    <MessageBox>
                        <Message>
                            <h1>Quiz finalizado <br />
                                <b>Você acertou...</b>
                            </h1>
                        </Message>
                    </MessageBox>

                    <OptionsList>
                        <ScoreFrame numberOfQuestions={questionsLength} />
                        <GoHomeButton>
                            Tentar Novamente
                        </GoHomeButton>
                    </OptionsList>
                </DelayedComponent>
            </Main>
        </>
    )
}