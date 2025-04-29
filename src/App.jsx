import { ProjectProvider } from "./context/ProjectContext";
import Home from "./pages/Home";

function App() {
    return (
        <ProjectProvider>
            <Home />
        </ProjectProvider>
    );
}

export default App;
