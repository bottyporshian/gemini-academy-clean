
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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

        <div className="grid">
          <div className="card">
            <h3>Step 1: Ideation & Prompting &rarr;</h3>
            <p>Start by describing your app idea to Gemini in plain language. Be as detailed as possible.</p>
            <code>"I want to build a simple web application that takes a user's name and displays a personalized greeting. It should be a Python backend with a React frontend."</code>
          </div>

          <div className="card">
            <h3>Step 2: Code Generation &rarr;</h3>
            <p>Gemini can generate the initial code for both your frontend and backend.</p>
            <code>"Generate the Python Flask code for a backend that accepts a name and returns a greeting. Also, create the React component for the frontend that inputs a name and displays the greeting from the backend."</code>
          </div>

          <div className="card">
            <h3>Step 3: Debugging & Error Handling &rarr;</h3>
            <p>Encountered an error? Paste the error message into Gemini and ask for a solution.</p>
            <code>"I'm getting a 'ModuleNotFoundError: No module named 'flask'' error. How do I fix this?"</code>
          </div>

          <div className="card">
            <h3>Step 4: Deployment Assistance &rarr;</h3>
            <p>Once your app is ready, Gemini can guide you through the deployment process.</p>
            <code>"How do I deploy this Python Flask and React app to a platform like Vercel or Heroku?"</code>
          </div>

          <div className="card">
            <h3>Pro Tip: Iterative Development &rarr;</h3>
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
          color: #0070f3;
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
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          text-align: center;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
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
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
