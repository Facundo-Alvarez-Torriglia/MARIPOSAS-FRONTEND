import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Noticias } from "../Pages"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/noticias" element={<Noticias/>}/>
            <Route path="/*" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    )
} 