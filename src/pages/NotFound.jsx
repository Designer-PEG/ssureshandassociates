import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden p-8 text-center">
        <div className="text-9xl font-bold text-indigo-600 mb-4">404</div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          If you've been redirected here, the redirection is not working right now.
          Please visit our home page and navigate to the available pages.
        </p>
        <div className="flex justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Go to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}