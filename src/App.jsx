import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyles"
import Header from "./components/Header"
import MessageBox from "./components/MessageBox"
import OptionsList from "./components/OptionsList"
import { DatabaseProvider } from "./context/ApiContext"

const Background = styled.div`
  background-color: #313E51;
  font-family: 'Rubik', sans-serif;
  color: white;
  background-image: url('/pattern-background-desktop-dark.svg');
  background-repeat: no-repeat;
  background-size: 100vw;
  min-height: 100vh;
  padding: 0 10rem;
`

const Main = styled.main`
  display: flex;
  gap: 3rem;
`

const App = () => {
  return (
    <Background>
      <GlobalStyle />
      <Header></Header>
      <Main>
        <DatabaseProvider>
          <MessageBox content="WelcomeMessage"></MessageBox>
          <OptionsList></OptionsList>
        </DatabaseProvider>
      </Main>
    </Background >
  )
}

export default App
