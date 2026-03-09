
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const codeSnippet = [
  "// app.py (Python Flask backend)",
  "from flask import Flask, request, jsonify",
  "app = Flask(__name__)",
  "",
  "@app.route('/greet', methods=['POST'])",
  "def greet():",
  "    data = request.json",
  "    name = data.get('name', 'Guest')",
  "    return jsonify({'message': f'Hello, {name}!'})",
  "",
  "if __name__ == '__main__':",
  "    app.run(debug=True)",
  "",
  "// App.js (React frontend)",
  "import React, { useState } from 'react';",
  "import axios from 'axios';",
  "",
  "function App() {",
  "    const [name, setName] = useState('');",
  "    const [greeting, setGreeting] = useState('');",
  "",
  "    const handleSubmit = async () => {",
  "        const response = await axios.post('/greet', { name });",
  "        setGreeting(response.data.message);",
  "    };",
  "",
  "    return (",
  "        <div>",
  "            <input type=\'text\' value={name} onChange={(e) => setName(e.target.value)} placeholder=\'Enter your name\' />",
  "            <button onClick={handleSubmit}>Get Greeting</button>",
  "            {greeting && <p>{greeting}</p>}",
  "        </div>",
  "    );",
  "}",
  "",
  "export default App;"
];

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.03,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const CodeGenerationSimulation = () => {
  return (
    <div className="simulation-container">
      <h3 className="simulation-title">Watch Gemini Generate Code:</h3>
      <motion.div
        className="code-block"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {codeSnippet.map((line, lineIndex) => (
          <p key={lineIndex} className="code-line">
            {line.split("").map((char, charIndex) => (
              <motion.span key={charIndex} variants={letter}>
                {char}
              </motion.span>
            ))}
          </p>
        ))}
      </motion.div>
      <style jsx>{`
        .simulation-container {
          background-color: #000000; /* Dark background */
          border-radius: 8px;
          padding: 20px;
          margin: 40px auto;
          max-width: 700px;
          box-shadow: 0 0 20px rgba(0, 255, 0, 0.6); /* Neon green glow */
        }
        .simulation-title {
          color: #00ff00; /* Neon green */
          font-family: 'Fira Code', monospace;
          text-align: center;
          margin-bottom: 20px;
          font-size: 1.5rem;
          text-shadow: 0 0 5px #00ff00; /* Subtle neon glow */
        }
        .code-block {
          white-space: pre-wrap;
          word-break: break-all;
        }
        .code-line {
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
          line-height: 1.4;
          color: #00ff00; /* Neon green */
          margin: 0;
          height: 1.4em; /* Ensure consistent line height for animation */
          overflow: hidden; /* Hide overflow during animation */
          text-shadow: 0 0 2px rgba(0, 255, 0, 0.7); /* Subtle neon glow */
        }
      `}</style>
    </div>
  );
};

export default function CodingNoCode() {
  return (
    <div className="container">
      <Head>
        <title>How to Build Apps Without Knowing How to Code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          How to Build Apps Without Knowing How to Code
        </h1>

        <p className="description">
          Unlock your app development potential with the power of AI, even if you've never written a line of code.
          Gemini can be your personal coding assistant, helping you bring your ideas to life.
        </p>

        <CodeGenerationSimulation />

        <div className="grid">
          <div className="card">
            <h3>Step 0: Set Up Your Replit Environment &rarr;</h3>
            <p>
              Go to <a href="https://replit.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00ffff', textDecoration: 'underline' }}>Replit.com</a> and create a new Repl.
              If you're working with Python and React, choose the "Flask" template for the backend and a "Node.js" or "React" template for the frontend.
            </p>
            <ul>
                <li style={{ color: '#00cc00' }}><b>For Python Backend:</b> Create a new Repl with the "Flask" template.</li>
                <li style={{ color: '#00cc00' }}><b>For React Frontend:</b> Create a new Repl with a "React" or "Node.js" template.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Step 1: Paste Your Code &rarr;</h3>
            <p>
              Once Gemini generates the code, copy the Python code into your Flask Repl's `main.py` (or `app.py`) file.
              For the React code, paste it into your React Repl's `App.js` or `index.js` file.
            </p>
          </div>
          <div className="card">
            <h3>Step 2: Run Your Replit &rarr;</h3>
            <p>
              In your Replit environment, click the "Run" button. Replit will automatically install dependencies and start your application.
              You should see your app running in the built-in browser or get a public URL.
            </p>
          </div>

          <div className="card">
            <h3>Step 4: Code Generation &rarr;</h3>
            <p>Gemini can generate the initial code for both your frontend and backend.</p>
            <code>"Generate the Python Flask code for a backend that accepts a name and returns a greeting. Also, create the React component for the frontend that inputs a name and displays the greeting from the backend."</code>
          </div>

          <div className="card">
            <h3>Step 5: Debugging & Error Handling &rarr;</h3>
            <p>Encountered an error? Paste the error message into Gemini and ask for a solution.</p>
            <code>"I'm getting a 'ModuleNotFoundError: No module named 'flask'' error. How do I fix this?"</code>
          </div>

          <div className="card">
            <h3>Step 6: Deployment Assistance &rarr;</h3>
            <p>Once your app is ready, Gemini can guide you through the deployment process.</p>
            <code>"How do I deploy this Python Flask and React app to a platform like Vercel or Heroku?"</code>
          </div>

          <div className="card">
            <h3>Step 7: Pro Tip: Iterative Development &rarr;</h3>
            <p>Don't stop at the first version! Ask Gemini to add new features, refactor code, or improve UI/UX.</p>
            <code>"Now, add a feature to my React app where the user can choose different greeting messages."</code>
          </div>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #1a1a1a; /* Ensure consistency */
          color: #00ff00; /* Neon green text */
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title a {
          color: #00ff00; /* Neon green */
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
          color: #00ff00; /* Neon green title */
          text-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          text-align: center;
          color: #00cc00; /* Slightly dimmer neon green */
        }

        code {
          background: #0d0d0d; /* Darker background for code blocks */
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: 'Fira Code', monospace;
          color: #00ff00; /* Neon green code */
          border: 1px solid #00cc00; /* Neon green border */
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: #00ff00; /* Neon green card text */
          text-decoration: none;
          border: 1px solid #00cc00; /* Neon green border */
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
          background-color: #0d0d0d; /* Dark background for cards */
          box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #00ffff; /* Brighter neon on hover */
          border-color: #00ffff; /* Brighter neon on hover */
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          color: #00ff00; /* Neon green heading */
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
          color: #00cc00; /* Slightly dimmer neon green for paragraphs */
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background-color: #1a1a1a; /* Dark background for the whole page */
          color: #00ff00; /* Neon green text */
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        a {
          color: #00ff00; /* Neon green links */
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
