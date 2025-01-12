import { useLocation, useNavigate } from 'react-router-dom';
import { BackToHome } from './back-to-home';

export const NavigateCTA = () => {
    const path = useLocation();
    const navigate = useNavigate();

    const handleNavigateClick = () => {
        if (path.pathname === '/todos') {
            return navigate('/projects');
        } else {
            return navigate('/todos');
        }
    };

    return (
        <div className="flex items-center gap-4">
            <BackToHome />
            <button
                onClick={handleNavigateClick}
                className="h-[40px] w-full max-w-[300px] rounded-[8px] bg-sky-400 text-white transition-all duration-300 hover:bg-sky-600"
            >
                Go to {path.pathname === '/todos' ? 'Projects' : 'Todos'}
            </button>
        </div>
    );
};
