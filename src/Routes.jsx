import { Route, Routes, useNavigate, useNavigationType } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { useContext, useEffect } from "react";
import { ApiContext } from "./context/ApiContext";
import { Quiz } from "./pages/Quiz";
import { Score } from "./pages/Score";

export const AppRoutes = () => {
    const { data, loading } = useContext(ApiContext)

    const navigate = useNavigate()
    const navigationType = useNavigationType()

    useEffect(() => { navigationType === "POP" && navigate("/", { replace: true }) })

    return (
        <Routes>
            <Route path="/" element={<Homepage />} />

            {!loading && data.map(category =>
                <>
                    <Route
                        path={`/${category.title.toLowerCase()}`}
                        element={<Quiz render={category} />}
                        key={category.id} />

                    <Route
                        path={`/${category.title.toLowerCase()}/resultado`}
                        element={<Score render={category} />} />
                </>
            )}

        </Routes>)
}