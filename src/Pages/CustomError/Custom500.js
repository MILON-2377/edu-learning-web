// src/pages/500.js
import Link from 'next/link';

export default function Custom500() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">500</h1>
      <h2 className="text-2xl text-gray-600 mb-8">Internal Server Error</h2>
      <p className="text-gray-500 mb-8">
        Sorry, something went wrong on our end. Please try again later.
      </p>
      <Link href="/">
        <a className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go Home
        </a>
      </Link>
    </div>
  );
}
