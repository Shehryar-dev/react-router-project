import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br  from-gray-900 to-slate-800 text-white px-4">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md text-center border border-blue-400">
        <h1 className="text-3xl font-bold mb-4 text-blue-300">👤 User Profile</h1>
        <p className="text-lg font-semibold">
          Viewing details for user:
        </p>
        <div className="mt-4 text-2xl font-extrabold text-yellow-300">
          {id}
        </div>
        <p className="mt-6 text-sm text-gray-400">
          You can customize this user view with dynamic content fetched from an API or database.
        </p>
      </div>
    </div>
  );
}

export default User;
