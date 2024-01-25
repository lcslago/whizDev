import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyles"
import Header from "./components/Header"
import MessageBox from "./components/MessageBox"
import OptionsList from "./components/OptionsList"
import { atkn, gDt, gQaDb } from "./firebase/api/main"
import { useEffect, useState } from "react"

const Background = styled.div`
  background-color: #313E51;
  font-family: 'Rubik', sans-serif;
  color: white;
  background-image: url('../../public/pattern-background-desktop-dark.svg');
  background-repeat: no-repeat;
  background-size: 100vw;
  min-height: 100vh;
  padding: 0 8rem;
`

const Main = styled.main`
  display: flex;
`

const App = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    gQaDb()
      .then(async () => setData(await gDt(atkn())))
      .then(() => setLoading(false))
  }, [])

  !loading && console.log(data[0].title)

  return (
    <Background>
      <GlobalStyle />
      <Header></Header>
      <Main>
        <MessageBox content="WelcomeMessage"></MessageBox>
        <OptionsList></OptionsList>
      </Main>
    </Background >
  )
}

export default App
