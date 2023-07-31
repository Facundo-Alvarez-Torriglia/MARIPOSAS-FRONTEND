import { BrowserRouter } from "react-router-dom"
import { Footer } from "./components/views/Footer"
import { Nabvar } from "./components/views/Nabvar"
import { AppRoutes } from "./routes/AppRoutes"

export const MariposasApp = () => {
    return (
        <>
            <BrowserRouter>
                <Nabvar />
                <AppRoutes />
                <Footer />
            </BrowserRouter>

        </>
    )
} 