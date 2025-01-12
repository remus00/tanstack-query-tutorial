import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <button onClick={() => navigate('/todos')}>Todos page</button>
            <button onClick={() => navigate('/projects')}>Projects page</button>
        </div>
    );
};
