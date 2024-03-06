import { Main } from "../../App"
import { Category, Header, HeaderTitle } from "../../components/Header"
import { Message } from "../../components/Message"
import { MessageBox } from "../../components/MessageBox"
import { ScoreFrame } from "../../components/ScoreFrame"
import { DelayedComponent } from "../Quiz"

export const Score = (props) => {
    const icon = props.render.icon
    const bgColor = props.render['icon-bg-color']
    const title = props.render.title

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

                    <MessageBox>
                        <ScoreFrame />
                    </MessageBox>
                </DelayedComponent>
            </Main>
        </>
    )
}