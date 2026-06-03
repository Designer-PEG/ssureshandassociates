import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-10 text-center">
        <div className="text-8xl font-black text-primary mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Please visit our home page or reach out to us.
        </p>
        <div className="flex justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark shadow-md transition-all duration-300"
          >
            Go to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}