import React, { useEffect, useState } from 'react';

function Github() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/Shehryar-dev')
            .then(response => response.json())
            .then(data => {
                setData(data);
            });
    }, []);

    if (!data) return <div className="text-center text-gray-500">Loading...</div>;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-slate-800 text-white p-6">
            <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 space-y-6">
                <div className="flex flex-col items-center space-y-3">
                    <img
                        src={data.avatar_url}
                        alt="GitHub Avatar"
                        className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-lg"
                    />
                    <h2 className="text-2xl font-bold">{data.name}</h2>
                    <a
                        href={data.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline"
                    >
                        @{data.login}
                    </a>
                </div>

                <div className="space-y-2 text-sm">
                    <p><span className="font-semibold">Bio:</span> {data.bio || "No bio provided"}</p>
                    <p><span className="font-semibold">Followers:</span> {data.followers}</p>
                    <p><span className="font-semibold">Following:</span> {data.following}</p>
                    <p><span className="font-semibold">Public Repos:</span> {data.public_repos}</p>
                </div>

                <div className="text-center">
                    <a
                        // href={data.followers_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm text-yellow-400 hover:text-yellow-300"
                    >
                        View Followers
                    </a>
                    <span className="mx-2">|</span>
                    <a
                        href={`https://github.com/${data.login}?tab=following`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm text-yellow-400 hover:text-yellow-300"
                    >
                        View Following
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Github;



export const githubHubInfo = async () => {
    let response = await fetch('https://api.github.com/users/Shehryar-dev');

    return response.json();
}