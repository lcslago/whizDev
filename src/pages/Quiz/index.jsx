import { useState } from "react"
import { Header, HeaderTitle } from "../../components/Header"

const DelayedComponent = ({ children, loadAnimation }) => {
    const [timesUp, setTimer] = useState(false)

    useState(() => {
        const timeout = setTimeout(() => { setTimer(true) }, 1500)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <>
            {!timesUp && <>{loadAnimation}</>}
            {timesUp && <> {children} </>}
        </>
    )
}

const Category = () =>
    <>
        imagem
        <h1> title</h1>
    </>

export const Quiz = () =>
    <>
        <Header>
            <HeaderTitle>
                <DelayedComponent>
                    <Category />
                </DelayedComponent>
            </HeaderTitle>
        </Header>
    </>




