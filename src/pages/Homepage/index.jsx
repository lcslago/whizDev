import { MessageBox } from "../../components/MessageBox";
import { OptionsList } from "../../components/OptionsList";
import { Header, HeaderTitle } from "../../components/Header";
import { Main } from "../../App";
import { Message } from "../../components/Message";
import { CategoryList } from "../../components/CategoryList";


export const Homepage = () =>
    <>
        <Header>
            <HeaderTitle />
        </Header>

        <Main>
            <MessageBox>
                <Message>
                    <h1 role="heading" aria-level="1">
                        Boas-vindas ao <br />

                        <b role="img" aria-label="whizDev">
                            &lt;whizDev/&gt;
                        </b>
                    </h1>
                    <p>Para começar escolha uma categoria</p>
                </Message>
            </MessageBox>

            <OptionsList>
                <CategoryList />
            </OptionsList>
        </Main>
    </>
