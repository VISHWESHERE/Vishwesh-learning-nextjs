

import React from 'react';

async function dataFetch() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    if (!response.ok) throw new Error("Couldn't fetch the data");
    const albums = await response.json();
    return (
        <div className="min-h-screen bg-gray-950 py-10 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-600 mb-6 text-center">Albums</h1>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {albums.map((album: { id: number; title: string }) => (
                        <div
                            key={album.id}
                            className="p-6 bg-gray-800 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
                        >
                            <h3 className="text-lg font-semibold text-gray-400 mb-2">{album.title}</h3>
                            <p className="text-sm text-gray-600">Album ID: {album.id}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default dataFetch;