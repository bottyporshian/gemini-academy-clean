import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, BookOpen, List, Scissors } from 'lucide-react';

const Lesson4_2 = () => {
  return (
    <>
      <Head>
        <title>Lesson 4.2: Summarization | Gemini Academy</title>
        <meta name="description" content="Learn how to summarize long articles, reports, and emails. Extract action items instantly." />
      </Head>

      <div className="bg-white min-h-screen font-sans text-gray-900">
        <nav className="border-b border-gray-200 sticky top-0 bg-white/80 backdrop-blur-md z-50">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/syllabus" className="text-gray-600 hover:text-blue-600 flex items-center gap-2 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Syllabus
            </Link>
            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Module 4: Use Cases
            </span>
          </div>
        </nav>

        <main className="max-w-3xl mx-auto px-6 py-12">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-gray-900 leading-tight">
              Summarization, Translation & Organization
            </h1>
            <div className="flex items-center gap-6 text-gray-500 text-sm">
              <span className="flex items-center gap-2"><BookOpen className="w-4 h-4" /> 20 min read</span>
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide">Beginner Level</span>
            </div>
          </header>

          <article className="prose prose-lg prose-blue max-w-none">
            <p className="lead text-xl text-gray-600">
              We live in information overload. Gemini is your filter. It can take a wall of text and give you the 3 things that actually matter.
            </p>

            <h2>The "TL;DR" Prompt</h2>
            <p>TL;DR stands for "Too Long; Didn't Read".</p>
            <div className="bg-gray-50 p-4 border border-gray-200 rounded-lg my-4">
              <p className="font-bold text-sm text-gray-500 uppercase mb-2">Try this:</p>
              <code className="text-sm font-mono text-blue-600">"Summarize this article in 3 simple bullet points. Focus on the main argument."</code>
            </div>

            <h2>Extracting Action Items</h2>
            <p>This is a superpower for meetings.</p>
            <ol>
              <li>Paste your messy meeting notes.</li>
              <li>Type: <strong>"Turn these notes into a list of Action Items. Who needs to do what?"</strong></li>
              <li>Gemini will format it: <em>John to Send report by Friday.</em></li>
            </ol>

            <h2>Smart Translation</h2>
            <p>Gemini is better than Google Translate because it understands context.</p>
            <div className="bg-blue-50 p-4 border-l-4 border-blue-500 my-4 font-mono text-sm">
              "Translate this email to Spanish. Keep the tone professional but friendly. It's for a business partner in Madrid."
            </div>

            <h2>Structuring Chaos</h2>
            <p>If you have a messy list of ideas, Gemini can organize them.</p>
            <p><strong>Prompt:</strong> "Take this list of brainstorming ideas and group them into categories (e.g., Marketing, Product, Sales)."</p>

          </article>

          <div className="mt-16 flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/lesson/4-1" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">
              &larr; Previous Lesson
            </Link>
            <Link href="/syllabus" className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-lg font-bold transition-colors shadow-lg">
              Finish Course (Summary) &rarr;
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default Lesson4_2;