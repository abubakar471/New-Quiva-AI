"use client";

import React from 'react';

const DocumentationPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-200 overflow-x-hidden">
            {/* Custom Hero Section with Gradient Animation */}
            <section className="relative bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-white py-20 bg-fixed">
                <div className="absolute inset-0">
                    {/* Add your particle background component here */}
                    {/* <ParticlesComponent /> */}
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Quivox API Documentation</h1>
                        <p className="text-lg mb-8">Explore the comprehensive guide to integrate and use the Quivox API effectively in your applications.</p>
                        <nav className="flex flex-wrap gap-x-4 gap-y-2 items-center justify-center">
                            <a href="#overview" className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-md transition">Overview</a>
                            <a href="#authentication" className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-md transition">Authentication</a>
                            <a href="#endpoints" className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-md transition">Endpoints</a>
                            <a href="#examples" className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-md transition">Examples</a>
                        </nav>
                    </div>
                </div>
                {/* Gradient animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 opacity-50 animate-gradient-xy"></div>
            </section>

            <main className="container mx-auto px-4 py-16">
                <section id="overview" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-green-400">API Overview</h2>
                    <p className="mb-4">Welcome to the Quivox API! This API allows you to interact with our services and integrate our features into your applications. Below you&apos;ll find the documentation for our API endpoints, authentication methods, and usage examples.</p>
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
                        <h3 className="text-xl font-semibold text-green-300">POST /api/v2/generate-response</h3>
                        <p className="mb-2">Retrieve information from the endpoint.</p>
                        <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                            <code>
                                {`curl -X POST https://ai.quivox.org/api/v2/generate-response -H "Authorization: your key" -H "Content-Type: application/json" -d '{"text": "your_message", "name": "your_name", "id": "your_id_for_history", "username": "your_username"}'`}
                            </code>
                        </pre>
                        <div className="text-gray-400">
                            <p><strong>Query Parameters:</strong></p>
                            <ul className="list-disc ml-6">
                                <li><code>text</code>: The content of the message being sent.</li>
                                <li><code>name</code>: The username of the author of the message.</li>
                                <li><code>id</code>: The ID of the author of the message.</li>
                                <li><code>username</code>: Your username (the one making the request).</li>
                            </ul>
                            <p><strong>Response:</strong></p>
                            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                                <code>
                                    {`{
  "data": "The generated response from the API",
  "error": null
}`}
                                </code>
                            </pre>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-md mb-6">
                        <h3 className="text-xl font-semibold text-green-300">POST /api/v3/generate-response</h3>
                        <p className="mb-2">Retrieve information from the endpoint.</p>
                        <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                            <code>
                                {`curl -X POST https://ai.quivox.org/api/v3/generate-response -H "Authorization: your key" -H "Content-Type: application/json" -d '{"text": "your_message", "name": "your_name", "id": "your_id_for_history", "username": "your_username"}'`}
                            </code>
                        </pre>
                        <div className="text-gray-400">
                            <p><strong>Query Parameters:</strong></p>
                            <ul className="list-disc ml-6">
                                <li><code>text</code>: The content of the message being sent.</li>
                                <li><code>name</code>: The username of the author of the message.</li>
                                <li><code>id</code>: The ID of the author of the message.</li>
                                <li><code>username</code>: Your username (the one making the request).</li>
                            </ul>
                            <p><strong>Response:</strong></p>
                            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                                <code>
                                    {`{
  "data": {
    "text": "The generated response from the API"
  },
  "error": null
}`}
                                </code>
                            </pre>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-md mb-6">
                        <h3 className="text-xl font-semibold text-green-300">POST /api/generate-response</h3>
                        <p className="mb-2">Retrieve information from the endpoint.</p>
                        <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                            <code>
                               {` curl -X POST "https://ai.quivox.org/api/generate-response" -H "Authorization: your_quiva_api_key" -H "Content-Type: application/json"`}
                            </code>
                        </pre>
                        <div className="text-gray-400">
                            <p><strong>Request Body:</strong></p>
                            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                                <code>
                                    {`{
text: "your_text_here",
username: "your_username",
}`}
                                </code>
                            </pre>
                            <p><strong>Response:</strong></p>
                            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                                <code>
                                    {`{
  "data": {
    "response": "The generated response from the API"
  },
  "error": null
}`}
                                </code>
                            </pre>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-md mb-6">
                        <h3 className="text-xl font-semibold text-green-300">POST /api/v2-01/generate-response</h3>
                        <p className="mb-2">Generates responses with personalized information such as location and time.</p>
                        <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                            <code>
                                {`const axios = require('axios');

const requestBody = {
    text: "your_text_here", 
    username: "your_username_here",
    id: "your_id_here",
    location: "your_location_here",
    time: "your_time_here",
    name: "your_name_here"
};

const authToken = 'your_quiva_api_key';

axios.post('https://ai.quivox.org/api/v2-01/generate-response', requestBody, {
    headers: {
        'Authorization': \`\${authToken}\`
    }
})
.then(response => {
    console.log('Generated text response:', response.data);
})
.catch(error => {
    console.error('Error:', error.message);
});`}
                            </code>
                        </pre>
                        <div className="text-gray-400">
                            <p><strong>Query Parameters:</strong></p>
                            <ul className="list-disc ml-6">
                                <li><code>text</code>: The content of the message being sent.</li>
                                <li><code>username</code>: Your Quiva username.</li>
                                <li><code>id</code>: A unique ID to identify the user.</li>
                                <li><code>location</code>: The user&apos;s location for personalized responses.</li>
                                <li><code>time</code>: The current or specified time for personalized responses.</li>
                                <li><code>name</code>: The name to address the user with.</li>
                            </ul>
                            <p><strong>Response:</strong></p>
                            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                                <code>
                                    {`{
  "data": "The generated response from the API",
  "error": null
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

                    <div className="bg-gray-800 p-4 rounded-md mb-6 overflow-x-auto">
                        <h3 className="text-xl font-semibold text-green-300">Free Personalities</h3>
                        <table className="min-w-full bg-gray-900 text-gray-400">
                            <thead>
                                <tr className="border-b border-gray-700">
                                    <th className="py-2 px-4 text-left">Username</th>
                                    <th className="py-2 px-4 text-left">Description</th>
                                    <th className="py-2 px-4 text-left">Free-to-use</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-700">
                                    <td className="py-2 px-4">QuivaCoder</td>
                                    <td className="py-2 px-4">A coding support AI which is made for Quivox&apos;s Old website.</td>
                                    <td className="py-2 px-4">true</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="py-2 px-4">spidermanfree</td>
                                    <td className="py-2 px-4">A personality of Spiderman from Marvel.</td>
                                    <td className="py-2 px-4">true</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="py-2 px-4">ironmanfree</td>
                                    <td className="py-2 px-4">An advanced personality of Tony Stark/Iron Man from Marvel.</td>
                                    <td className="py-2 px-4">true</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="py-2 px-4">batmanfree</td>
                                    <td className="py-2 px-4">Advanced AI personality of Batman who protects Gotham city from DC.</td>
                                    <td className="py-2 px-4">true</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="py-2 px-4">cindrellafree</td>
                                    <td className="py-2 px-4">An advanced personality of Cinderella from Disney.</td>
                                    <td className="py-2 px-4">true</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="py-2 px-4">quivoxsupport</td>
                                    <td className="py-2 px-4">Powerful well-structured Quivox support AI.</td>
                                    <td className="py-2 px-4">true</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="py-2 px-4">evelynfree</td>
                                    <td className="py-2 px-4">A mysterious magical friendly girl with unknown powers.</td>
                                    <td className="py-2 px-4">true</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="py-2 px-4">leofree</td>
                                    <td className="py-2 px-4">A small boy who&apos;s passionate about skateboarding.</td>
                                    <td className="py-2 px-4">true</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="py-2 px-4">priyafree</td>
                                    <td className="py-2 px-4">A Kerala girl who is talented and lovely.</td>
                                    <td className="py-2 px-4">true</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="py-2 px-4">Finnian</td>
                                    <td className="py-2 px-4">A powerful, rich young man who is an entrepreneur (TopG).</td>
                                    <td className="py-2 px-4">true</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </section>
            </main>

            {/* Inline Styles for Gradient Animation */}
            <style jsx>{`
                @keyframes gradient-x {
                    0% {
                        background-position: 0% 0%;
                    }
                    100% {
                        background-position: 100% 100%;
                    }
                }

                @keyframes gradient-y {
                    0% {
                        background-position: 0% 0%;
                    }
                    100% {
                        background-position: 0% 100%;
                    }
                }

                .animate-gradient-xy {
                    animation: gradient-x 15s ease infinite, gradient-y 15s ease infinite;
                    background: linear-gradient(45deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
                    background-size: 400% 400%;
                }
            `}</style>
        </div>
    );
};

export default DocumentationPage;
