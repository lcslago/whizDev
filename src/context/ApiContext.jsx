import { createContext, useEffect, useState } from "react";
import { atkn, gDt, gQaDb } from "../firebase/api/main";

export const ApiContext = createContext();

export const DatabaseProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        gQaDb()
            .then(async () => setData(await gDt(atkn())))
            .then(() => setLoading(false))
    }, [])

    return (
        <ApiContext.Provider value={{ data, loading }}>
            {children}
        </ApiContext.Provider>
    )
}