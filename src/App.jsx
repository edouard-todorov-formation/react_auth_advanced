import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/registerForm.jsx"

function App() {
    return (
        <>
        {/* active le systeme de router */}
        <BrowserRouter>
            {/* defini le conteneur des routes */}
            <Routes>
                <Route path="*" element={<RegisterForm />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App
