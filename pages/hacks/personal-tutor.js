
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function PersonalTutor() {
  return (
    <div className="container">
      <Head>
        <title>Turn Gemini Into a Personal Math Tutor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Turn Gemini Into a Personal Math Tutor
        </h1>

        <p className="description">
          Struggling with a complex concept? Gemini can act as your personal tutor, explaining topics, quizzing you, and clarifying mistakes using the Socratic method.
        </p>

        <div className="grid">
          <div className="card">
            <h3>Step 1: Introduce the Concept &rarr;</h3>
            <p>Tell Gemini what you want to learn. Be specific about the level of detail you need.</p>
            <code>"Explain the concept of derivatives in calculus. Assume I know basic algebra but nothing about calculus."</code>
          </div>

          <div className="card">
            <h3>Step 2: Ask for a Simple Explanation &rarr;</h3>
            <p>Request an explanation in simple terms, using analogies if possible.</p>
            <code>"Can you explain derivatives using a real-world analogy, like speed or a graph's slope?"</code>
          </div>

          <div className="card">
            <h3>Step 3: Quiz Yourself &rarr;</h3>
            <p>Ask Gemini to create practice problems to test your understanding.</p>
            <code>"Give me 3 practice problems on calculating derivatives using the power rule."</code>
          </div>

          <div className="card">
            <h3>Step 4: Explain Your Mistakes (Socratic Method) &rarr;</h3>
            <p>When you get a problem wrong, don't just ask for the answer. Ask Gemini to guide you to the solution.</p>
            <code>"I got problem 1 wrong. My answer was [your answer]. Can you walk me through where I made a mistake without giving me the direct answer?"</code>
          </div>

          <div className="card">
            <h3>Pro Tip: Explore Related Concepts &rarr;</h3>
            <p>Once you grasp a concept, ask Gemini to introduce related topics or real-world applications.</p>
            <code>"Now that I understand derivatives, what's the next logical concept to learn, and how are derivatives used in engineering?"</code>
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
