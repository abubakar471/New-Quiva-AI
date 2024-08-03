"use client";

import React from 'react';

const DocumentationPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-200">
            <header className="bg-green-700 py-4">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-white">Quivox API Documentation</h1>
                    <nav className="space-x-4">
                        <a href="#overview" className="text-white hover:text-green-300">Overview</a>
                        <a href="#authentication" className="text-white hover:text-green-300">Authentication</a>
                        <a href="#endpoints" className="text-white hover:text-green-300">Endpoints</a>
                        <a href="#examples" className="text-white hover:text-green-300">Examples</a>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <section id="overview" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-green-400">API Overview</h2>
                    <p className="mb-4">Welcome to the Quivox API! This API allows you to interact with our services and integrate our features into your applications. Below you'll find the documentation for our API endpoints, authentication methods, and usage examples.</p>
                </section>

                <section id="authentication" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-green-400">Authentication</h2>
                    <p className="mb-4">To access the Quivox API, you need to authenticate using an API key. Follow the steps below to get started:</p>
                    <ol className="list-decimal ml-6 mb-4">
                        <li>Sign up for an account at <a href="https://quvox.org" className="text-green-300 hover:underline">Quivox</a>.</li>
                        <li>Navigate to the API section in your account dashboard.</li>
                        <li>Generate a new API key.</li>
                        <li>Use this key in the `Authorization` header for all API requests.</li>
                    </ol>
                    <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto">
                        <code>
                            {`Authorization: Bearer YOUR_API_KEY`}
                        </code>
                    </pre>
                </section>

                <section id="endpoints" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-green-400">API Endpoints</h2>

                    <div className="bg-gray-800 p-4 rounded-md mb-6">
                        <h3 className="text-xl font-semibold text-green-300">GET /api/v1/endpoint1</h3>
                        <p className="mb-2">Retrieve information from the first endpoint.</p>
                        <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                            <code>
                                {`curl -X GET "https://api.quvox.org/api/v1/endpoint1" -H "Authorization: Bearer YOUR_API_KEY"`}
                            </code>
                        </pre>
                        <div className="text-gray-400">
                            <p><strong>Query Parameters:</strong></p>
                            <ul className="list-disc ml-6">
                                <li><code>param1</code>: Description of parameter 1</li>
                                <li><code>param2</code>: Description of parameter 2</li>
                            </ul>
                            <p><strong>Response:</strong></p>
                            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                                <code>
                                    {`{
  "key": "value",
  "key2": "value2"
}`}
                                </code>
                            </pre>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-md mb-6">
                        <h3 className="text-xl font-semibold text-green-300">POST /api/v1/endpoint2</h3>
                        <p className="mb-2">Create a new resource with the second endpoint.</p>
                        <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                            <code>
                                {`curl -X POST "https://api.quvox.org/api/v1/endpoint2" -H "Authorization: Bearer YOUR_API_KEY" -H "Content-Type: application/json" -d '{"key": "value"}'`}
                            </code>
                        </pre>
                        <div className="text-gray-400">
                            <p><strong>Request Body:</strong></p>
                            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                                <code>
                                    {`{
  "key": "value",
  "key2": "value2"
}`}
                                </code>
                            </pre>
                            <p><strong>Response:</strong></p>
                            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                                <code>
                                    {`{
  "id": "new_id",
  "key": "value",
  "key2": "value2"
}`}
                                </code>
                            </pre>
                        </div>
                    </div>
                </section>

                <section id="examples" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-green-400">Usage Examples</h2>
                    <p className="mb-4">Here are some examples of how you can use the Quivox API in different scenarios:</p>

                    <div className="bg-gray-800 p-4 rounded-md mb-6">
                        <h3 className="text-xl font-semibold text-green-300">Example: Fetch Data</h3>
                        <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                            <code>
                                {`const fetchData = async () => {
    const response = await fetch('https://api.quvox.org/api/v1/endpoint1', {
        headers: {
            'Authorization': 'Bearer YOUR_API_KEY'
        }
    });
    const data = await response.json();
    console.log(data);
};`}
                            </code>
                        </pre>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-md mb-6">
                        <h3 className="text-xl font-semibold text-green-300">Example: Create Resource</h3>
                        <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                            <code>
                                {`const createResource = async () => {
    const response = await fetch('https://api.quvox.org/api/v1/endpoint2', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_API_KEY',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            key: 'value',
            key2: 'value2'
        })
    });
    const data = await response.json();
    console.log(data);
};`}
                            </code>
                        </pre>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 py-4">
                <div className="container mx-auto px-4 text-center text-gray-400">
                    <p>&copy; 2024 Quivox. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default DocumentationPage;
