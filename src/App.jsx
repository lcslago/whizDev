import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyles"
import { BrowserRouter } from "react-router-dom"
import { DatabaseProvider } from "./context/ApiContext"
import { AppRoutes } from "./Routes"

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
`

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

const App = () => {
  return (
    <BrowserRouter>
      <Background>
        <GlobalStyle />
        <DatabaseProvider>
          <AppRoutes />
        </DatabaseProvider>
      </Background >
    </BrowserRouter >
  )
}

export default App
