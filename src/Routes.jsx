import { Route, Routes } from "react-router-dom";
import { DefaultUI } from "./pages/Default";

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<DefaultUI />} />
        </Routes>)
}