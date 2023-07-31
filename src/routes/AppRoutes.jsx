import {  Route, Routes } from "react-router-dom"
import { Clasificados, Home, Noticias } from "../Pages"
import { Login, Registro } from "../components/auth"

export const AppRoutes = () => {
    return (
        
        <Routes>
             <Route path="/auth/login" element={<Login/>}/>
             <Route path="/auth/registro" element={<Registro/>}/>


            <Route path="/" element={<Home/>}/>
            <Route path="/noticias" element={<Noticias/>}/>
            <Route path="/clasificados" element={<Clasificados/>}/>
            <Route path="/*" element={<Home/>}/>
        </Routes>
   
    )
} 