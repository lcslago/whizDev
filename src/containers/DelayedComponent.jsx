import { useEffect, useState } from "react"

export const DelayedComponent = ({ children, loadAnimation }) => {
    const [timesUp, setTimer] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => { setTimer(true) }, 100)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <>
            {!timesUp && <>{loadAnimation}</>}
            {timesUp && <> {children} </>}
        </>
    )
}