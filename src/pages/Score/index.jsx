import { Main } from "../../App"
import { Category, Header, HeaderTitle } from "../../components/Header"
import { MessageBox } from "../../components/MessageBox"
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

                    </MessageBox>



                </DelayedComponent>
            </Main>
        </>
    )
}