import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyles"
import { BrowserRouter } from "react-router-dom"
import { DatabaseProvider } from "./context/ApiContext"
import { AppRoutes } from "./Routes"
import { ScoreProvider } from "./context/ScoreContext"

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 6rem;
`

const Background = styled.div`
  background-color: #313E51;
  font-family: 'Rubik', sans-serif;
  color: white;
  background-image: url('/pattern-background-desktop-dark.svg');
  background-repeat: no-repeat;
  background-size: 100vw;
  min-height: 100vh;
  padding: 0 10vw;
`

const App = () => {
  return (
    <BrowserRouter>
      <Background>
        <GlobalStyle />
        <DatabaseProvider>
          <ScoreProvider>
            <AppRoutes />
          </ScoreProvider>
        </DatabaseProvider>
      </Background >
    </BrowserRouter >
  )
}

export default App
