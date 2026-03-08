
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function MeetingNotes() {
  return (
    <div className="container">
      <Head>
        <title>Automate Your Meeting Notes Forever</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Automate Your Meeting Notes Forever
        </h1>

        <p className="description">
          Never dread taking meeting notes again! Gemini can transform raw transcripts into actionable insights, summaries, and email drafts in seconds.
        </p>

        <div className="grid">
          <div className="card">
            <h3>Step 1: Get Your Transcript &rarr;</h3>
            <p>Use a tool like Otter.ai, Zoom's transcription, or Google Meet captions to get a text transcript of your meeting.</p>
            <code>"[00:00:05] John: Welcome everyone to the Q3 planning meeting... [00:00:15] Sarah: I've reviewed the latest sales figures..."</code>
          </div>

          <div className="card">
            <h3>Step 2: Paste into Gemini & Prompt &rarr;</h3>
            <p>Paste the full transcript into Gemini and ask for specific outputs.</p>
            <code>"Here is a meeting transcript. Please provide:
- A concise summary of key decisions.
- A list of action items with owners and deadlines.
- A draft email to attendees summarizing the meeting."</code>
          </div>

          <div className="card">
            <h3>Step 3: Refine & Customize &rarr;</h3>
            <p>Ask Gemini to adjust the output to fit your needs, e.g., change tone, add details, or focus on specific topics.</p>
            <code>"Make the email draft more formal and highlight the next steps for the marketing team."</code>
          </div>

          <div className="card">
            <h3>Example Output: Action Items &rarr;</h3>
            <ul>
              <li>**John:** Follow up with sales team on Q3 targets by EOD Friday.</li>
              <li>**Sarah:** Prepare a presentation on Q4 marketing strategy by next Monday.</li>
              <li>**Mike:** Research competitor analysis tools by Wednesday.</li>
            </ul>
          </div>

          <div className="card">
            <h3>Example Output: Meeting Summary &rarr;</h3>
            <p>The Q3 planning meeting focused on reviewing sales figures, discussing Q4 marketing strategies, and assigning action items for upcoming initiatives. Key decisions included prioritizing lead generation and exploring new market segments.</p>
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

        .card p,
        .card ul {
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
