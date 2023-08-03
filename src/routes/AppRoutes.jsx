import {  Route, Routes } from "react-router-dom"
import { Home, Noticias } from "../Pages"
import { Login, Registro } from "../components/auth"
import { ClasificadosArticulos, ClasificadosHome, ClasificadosTrabajos } from "../clasificados"

export const AppRoutes = () => {
    return (
        
        <Routes>
             <Route path="/auth/login" element={<Login/>}/>
             <Route path="/auth/registro" element={<Registro/>}/>


            <Route path="/" element={<Home/>}/>
            <Route path="/noticias" element={<Noticias/>}/>
            <Route path="/clasificados" element={<ClasificadosHome/>}/>
            <Route path="/clasificados/trabajos" element={<ClasificadosTrabajos/>}/>
            <Route path="/clasificados/articulos" element={<ClasificadosArticulos/>}/>
            <Route path="/*" element={<Home/>}/>
        </Routes>
   
    )
} 