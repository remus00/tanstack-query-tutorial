import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home-page';
import { ProjectsPage } from './pages/projects-page';
import { TodosPage } from './pages/todos-page';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/todos" element={<TodosPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
