import { Link } from "react-router-dom";
import { MessageBox } from "../../components/MessageBox";
import { OptionContainer, OptionsList } from "../../components/OptionsList";
import { ApiContext } from "../../context/ApiContext";
import { useContext } from "react";
import { Header, HeaderTitle } from "../../components/Header";
import { AppContainer, Main } from "../../App";
import { BarLoader } from "react-spinners";
import styled from "styled-components";

const WelcomeMessageContainer = styled.div`
    user-select: none;
    font-size: 2rem;

    h1 {
        font-weight: 300;
        margin: 0;

        span { 
            font-weight: 500;
        }
    }

    p {
        font-size: 1.2rem;
        font-weight: 300;
        padding: 2rem 0;
        opacity: .8;
    }
`

const WelcomeMessage = () =>
    <WelcomeMessageContainer>
        <h1 role="heading" aria-level="1">
            Boas-vindas ao <span role="img" aria-label="whizDev">&lt;whizDev/&gt;</span>
        </h1>

        <p>Para começar escolha uma categoria</p>
    </WelcomeMessageContainer>


const CategoryList = () => {
    const { data, loading } = useContext(ApiContext)
    const OptionsPerPage = 4

    return (
        <>
            {loading &&
                Array.from({ length: OptionsPerPage }).map((_, index) =>
                    <OptionContainer key={index}>
                        <BarLoader
                            color="#adc1d6"
                            width={450}
                            height={6} />
                    </OptionContainer>)}

            {!loading &&
                data.map(category =>
                    <OptionContainer key={category.id}>
                        <Link to={`/${category.title.toLowerCase()}`}>

                            <img
                                src={category.icon}
                                style={{ backgroundColor: category['icon-bg-color'] }} />

                            {category.title}
                        </Link>
                    </OptionContainer>
                )}
        </>
    )
}


export const Homepage = () =>
    <>
        <Header>
            <HeaderTitle />
        </Header>

        <Main>
            <AppContainer>
                <MessageBox>
                    <WelcomeMessage />
                </MessageBox>

                <OptionsList>
                    <CategoryList />
                </OptionsList>
            </AppContainer>
        </Main>
    </>
