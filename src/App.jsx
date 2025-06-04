import { ProjectProvider } from "./context/ProjectContext";
import Filmography from "./pages/Filmography";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (
        <ProjectProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/films" element={<Filmography />} />
                </Routes>
            </BrowserRouter>
        </ProjectProvider>
    );
}

// function App() {
//     return (
//         <ProjectProvider>
//             <Home />
//             <Filmography />
//         </ProjectProvider>
//     );
// }

export default App;