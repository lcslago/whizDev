import { Route, Routes, useNavigate, useNavigationType } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { useContext, useEffect } from "react";
import { ApiContext } from "./context/ApiContext";
import { Quiz } from "./pages/Quiz";

export const AppRoutes = () => {
    const { data, loading } = useContext(ApiContext)

    const navigate = useNavigate()
    const navigationType = useNavigationType()

    useEffect(() => { navigationType === "POP" && navigate("/", { replace: true }) })

    return (
        <Routes>
            <Route path="/" element={<Homepage />} />

            {!loading && data.map(category =>
                <Route
                    path={`/${category.title.toLowerCase()}`}
                    element={<Quiz />}
                    key={category.id} />)}
        </Routes>)
}