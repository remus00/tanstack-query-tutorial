import { useNavigate } from 'react-router-dom';

export const BackToHome = () => {
    const navigate = useNavigate();

    return <button onClick={() => navigate('/')}>Back to home page</button>;
};
