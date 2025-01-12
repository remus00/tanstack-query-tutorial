import { useNavigate } from 'react-router-dom';

export const BackToHome = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate('/')}
            className="h-[40px] w-full max-w-[300px] rounded-[8px] bg-sky-400 text-white transition-all duration-300 hover:bg-sky-600"
        >
            Back to home page
        </button>
    );
};
