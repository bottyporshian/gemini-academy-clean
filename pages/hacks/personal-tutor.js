
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const messages = [
  {
    speaker: "User",
    text: "Explain the concept of derivatives in calculus. Assume I know basic algebra but nothing about calculus.",
    delay: 0,
  },
  {
    speaker: "Gemini",
    text: "Imagine you're driving a car. Your speed is constantly changing. A derivative helps us figure out your exact speed at any given moment, even if it's just for an instant! It's essentially the 'rate of change' or the 'slope of a curve' at a specific point.",
    delay: 2,
  },
  {
    speaker: "User",
    text: "Okay, I think I get the analogy. Can you give me a simple problem to test my understanding?",
    delay: 5,
  },
  {
    speaker: "Gemini",
    text: "Certainly! If a ball's height (h) at time (t) is given by the function h(t) = 5t^2 + 3t. What is the derivative of h(t)? In simple terms, what's the formula for the ball's instantaneous speed?",
    delay: 7,
  },
  {
    speaker: "User",
    text: "Hmm, I think it's 10t + 3. Is that right?",
    delay: 10,
  },
  {
    speaker: "Gemini",
    text: "That's a great attempt! You're very close. The power rule states that for t^n, the derivative is n*t^(n-1). Apply that rule to each term. You've got the idea for 5t^2. What about the 3t term?",
    delay: 12,
  },
  {
    speaker: "User",
    text: "Ah, for 3t, it would just be 3. So the answer is 10t + 3!",
    delay: 15,
  },
  {
    speaker: "Gemini",
    text: "Excellent! You've got it. That's the instantaneous rate of change of the ball's height. Any more questions or ready for another problem?",
    delay: 17,
  },
];

const PersonalTutorSimulation = () => {
  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="simulation-container">
      <h3 className="simulation-title">Your Personal Gemini Math Tutor:</h3>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            className={`chat-message ${msg.speaker.toLowerCase()}`}
            variants={messageVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: msg.delay }}
          >
            <span className="speaker">{msg.speaker}:</span> {msg.text}
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .simulation-container {
          background-color: #f0f2f5;
          border-radius: 12px;
          padding: 30px;
          margin: 40px auto;
          max-width: 700px;
          box-shadow: 0 6px 30px rgba(0, 0, 0, 0.1);
        }
        .simulation-title {
          color: #212121;
          font-family: 'Google Sans', sans-serif;
          text-align: center;
          margin-bottom: 30px;
          font-size: 1.8rem;
          font-weight: 700;
        }
        .chat-window {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 20px;
          height: 450px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 15px;
          box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.08);
        }
        .chat-message {
          padding: 12px 18px;
          border-radius: 20px;
          max-width: 85%;
          word-wrap: break-word;
          font-size: 0.95rem;
          line-height: 1.5;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }
        .chat-message.user {
          align-self: flex-end;
          background-color: #e2f4ff;
          color: #2196f3;
          border-bottom-right-radius: 5px;
        }
        .chat-message.gemini {
          align-self: flex-start;
          background-color: #f3f3f3;
          color: #424242;
          border-bottom-left-radius: 5px;
        }
        .speaker {
          font-weight: bold;
          margin-right: 5px;
        }
      `}</style>
    </div>
  );
};

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

        <PersonalTutorSimulation />

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
