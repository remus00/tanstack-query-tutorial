import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-4 p-4">
            <h1 className="text-center text-xl font-semibold">
                This is a project use to learn tanstack query
            </h1>
            <button
                onClick={() => navigate('/todos')}
                className="h-[40px] w-full max-w-[300px] rounded-[8px] bg-sky-400 text-white transition-all duration-300 hover:bg-sky-600"
            >
                Todos page
            </button>
            <button
                onClick={() => navigate('/projects')}
                className="h-[40px] w-full max-w-[300px] rounded-[8px] bg-sky-400 text-white transition-all duration-300 hover:bg-sky-600"
            >
                Projects page
            </button>
        </div>
    );
};
