import { MessageBox } from "../../components/MessageBox";
import { OptionsList } from "../../components/OptionsList";
import { Header, HeaderTitle } from "../../components/Header";
import { Main } from "../../App";
import { WelcomeMessage } from "../../components/WelcomeMessage";
import { CategoryList } from "../../components/CategoryList";


export const Homepage = () =>
    <>
        <Header>
            <HeaderTitle />
        </Header>

        <Main>
            <MessageBox>
                <WelcomeMessage />
            </MessageBox>

            <OptionsList>
                <CategoryList />
            </OptionsList>
        </Main>
    </>
