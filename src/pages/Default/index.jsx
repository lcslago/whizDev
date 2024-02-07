import { useLocation } from "react-router-dom";
import { MessageBox, WelcomeMessage } from "../../components/MessageBox";
import { CategoryList, OptionsList } from "../../components/OptionsList";
import { ApiContext } from "../../context/ApiContext";
import { useContext } from "react";
import styled from "styled-components";
import { Header, HeaderContent } from "../../components/Header";

const Main = styled.main`
  display: flex;
  gap: 3rem;
`

const AppContainer = styled.div`
    display: flex;
    gap: 5rem;
`

export const DefaultUI = () => {
    const { data, loading } = useContext(ApiContext)

    const location = useLocation()
    const HomePage = location.pathname === "/"
    const QuestionPage = `/${data.map(category => category.title.toLowerCase())}`


    return (
        <>
            <Header>
                {HomePage && <HeaderContent />}
            </Header>
            <Main>
                <AppContainer>
                    <MessageBox>
                        {HomePage && <WelcomeMessage />}
                    </MessageBox>
                    <OptionsList>
                        {HomePage && <CategoryList />}
                    </OptionsList>
                </AppContainer>
            </Main>
        </>)
}
