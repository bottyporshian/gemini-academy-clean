import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, BookOpen, PenTool, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const Lesson3_3 = () => {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <Head>
        <title>Lesson 3.3: Guided Practice Workshop | Gemini Academy</title>
        <meta name="description" content="3 real-world exercises to test your prompt engineering skills. Email, Summary, and Idea Generation." />
      </Head>

      <div className="bg-white min-h-screen font-sans text-gray-900">
        <nav className="border-b border-gray-200 sticky top-0 bg-white/80 backdrop-blur-md z-50">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/syllabus" className="text-gray-600 hover:text-blue-600 flex items-center gap-2 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Syllabus
            </Link>
            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Module 3: Prompt Engineering
            </span>
          </div>
        </nav>

        <main className="max-w-3xl mx-auto px-6 py-12">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-gray-900 leading-tight">
              Guided Practice Workshop
            </h1>
            <div className="flex items-center gap-6 text-gray-500 text-sm">
              <span className="flex items-center gap-2"><BookOpen className="w-4 h-4" /> 30 min practice</span>
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide">Hands On</span>
            </div>
          </header>

          <article className="prose prose-lg prose-blue max-w-none">
            <p className="lead text-xl text-gray-600">
              Reading is not enough. Copy these prompts, paste them into Gemini, and see the magic happen.
            </p>

            {/* Exercise 1 */}
            <div className="my-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg"><PenTool className="w-6 h-6 text-blue-600" /></div>
                <h2 className="m-0 text-2xl font-bold">Exercise 1: The "Tough Email"</h2>
              </div>
              <p><strong>Scenario:</strong> You need to tell a client that their project will be late by one week because of a technical issue.</p>
              
              <div className="relative group">
                <div className="bg-gray-900 text-gray-200 p-6 rounded-xl font-mono text-sm leading-relaxed">
                  "Act as a senior project manager. Write an email to a client (John) explaining that the 'Website Redesign' project will be delayed by one week due to unexpected server issues. <br/><br/>
                  Key points:<br/>
                  - Apologize sincerely but confidently.<br/>
                  - Explain the issue briefly (don't get too technical).<br/>
                  - Offer a 5% discount on the next invoice as a goodwill gesture.<br/>
                  - Format: Professional email with a clear subject line."
                </div>
                <button 
                  onClick={() => copyToClipboard("Act as a senior project manager...", 1)}
                  className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors"
                >
                  {copied === 1 ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <hr className="border-gray-200 my-10" />

            {/* Exercise 2 */}
            <div className="my-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg"><PenTool className="w-6 h-6 text-purple-600" /></div>
                <h2 className="m-0 text-2xl font-bold">Exercise 2: The "Idea Machine"</h2>
              </div>
              <p><strong>Scenario:</strong> You are stuck and need ideas for a child's birthday party.</p>
              
              <div className="relative group">
                <div className="bg-gray-900 text-gray-200 p-6 rounded-xl font-mono text-sm leading-relaxed">
                  "I am planning a birthday party for a 7-year-old girl who loves space and dinosaurs. <br/><br/>
                  Action: Brainstorm 10 creative party themes that combine these two interests.<br/>
                  Format: A numbered list. For each theme, suggest one activity and one snack idea.<br/>
                  Tone: Fun and exciting."
                </div>
                <button 
                  onClick={() => copyToClipboard("I am planning a birthday party...", 2)}
                  className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors"
                >
                  {copied === 2 ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <hr className="border-gray-200 my-10" />

            {/* Exercise 3 */}
            <div className="my-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-lg"><PenTool className="w-6 h-6 text-green-600" /></div>
                <h2 className="m-0 text-2xl font-bold">Exercise 3: The "Simplifier"</h2>
              </div>
              <p><strong>Scenario:</strong> You found a complex text about Quantum Physics and want to explain it to a kid.</p>
              
              <div className="relative group">
                <div className="bg-gray-900 text-gray-200 p-6 rounded-xl font-mono text-sm leading-relaxed">
                  [Paste any complex text here, e.g., a Wikipedia paragraph]<br/><br/>
                  "Explain the text above to a 10-year-old. Use an analogy involving cars or video games to make it easy to understand."
                </div>
                <button 
                  onClick={() => copyToClipboard("Explain the text above...", 3)}
                  className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors"
                >
                  {copied === 3 ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

          </article>

          <div className="mt-16 flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/lesson/3-2" className="text-gray-500 hover:text-gray-900 font-medium transition-colors">
              &larr; Previous Lesson
            </Link>
            <Link href="/syllabus" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors shadow-lg">
              Finish Module 3 &rarr;
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default Lesson3_3;
