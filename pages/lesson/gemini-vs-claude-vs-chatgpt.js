import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, X, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

const LessonComparison = () => {
  return (
    <>
      <Head>
        <title>Gemini vs Claude vs ChatGPT (2026 Edition) | Gemini Academy</title>
        <meta name="description" content="The definitive 2026 showdown. We tested Gemini 3, Claude 3.7, and ChatGPT (GPT-5) on coding, creative writing, and data analysis. See the winner." />
        <meta name="keywords" content="gemini vs claude vs chatgpt, ai model comparison 2026, best ai for coding 2026, gemini 3 vs gpt-5, claude 3.7 review" />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="max-w-5xl mx-auto px-6 py-16">
          
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
            <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
            <span>/</span>
            <span className="text-slate-900">Trending • The Triple Threat</span>
          </div>

          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold tracking-wide uppercase mb-4">The 2026 Showdown</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
              Gemini vs. Claude vs. ChatGPT
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              This is the #1 related search query right now. Everyone wants to know: 
              <strong> Which AI should I pay for?</strong> We broke it down so you don't have to.
            </p>
          </div>

          {/* The Comparison Table */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-2xl bg-white mb-20">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-6 text-sm font-bold text-slate-500 uppercase tracking-wider">Feature</th>
                  <th className="p-6 text-xl font-extrabold text-blue-600 w-1/4 bg-blue-50/50">Gemini 3</th>
                  <th className="p-6 text-xl font-bold text-slate-800 w-1/4">Claude 3.7</th>
                  <th className="p-6 text-xl font-bold text-slate-800 w-1/4">ChatGPT (GPT-5)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-6 font-medium text-slate-900">Ecosystem Integration</td>
                  <td className="p-6 bg-blue-50/30 text-blue-700 font-bold"><Check className="inline w-5 h-5 mr-2" /> Native (Google)</td>
                  <td className="p-6 text-slate-500"><X className="inline w-5 h-5 mr-2" /> None</td>
                  <td className="p-6 text-slate-500"><Minus className="inline w-5 h-5 mr-2" /> Limited</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-slate-900">Context Window</td>
                  <td className="p-6 bg-blue-50/30 text-blue-700 font-bold">Infinite (2M+)</td>
                  <td className="p-6 text-slate-600">Large (200k)</td>
                  <td className="p-6 text-slate-600">Standard (128k)</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-slate-900">Coding Ability</td>
                  <td className="p-6 bg-blue-50/30 text-slate-700">Excellent</td>
                  <td className="p-6 text-green-600 font-bold"><Check className="inline w-5 h-5 mr-2" /> Superior</td>
                  <td className="p-6 text-slate-700">Great</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-slate-900">Creative Writing</td>
                  <td className="p-6 bg-blue-50/30 text-slate-700">Factual</td>
                  <td className="p-6 text-slate-700">Nuanced</td>
                  <td className="p-6 text-purple-600 font-bold"><Check className="inline w-5 h-5 mr-2" /> Best Flow</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-slate-900">Live Data</td>
                  <td className="p-6 bg-blue-50/30 text-blue-700 font-bold"><Check className="inline w-5 h-5 mr-2" /> Google Search</td>
                  <td className="p-6 text-slate-500">No Browsing</td>
                  <td className="p-6 text-slate-700">Bing Search</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-4">🏆 Winner: Gemini 3</h3>
              <p className="text-blue-800 text-sm mb-4 font-bold uppercase tracking-wide">Best For: Productivity</p>
              <p className="text-blue-700/80">
                If you use Google Docs, Drive, or Gmail, there is no choice. Gemini lives inside your work. It's not just a chat; it's a coworker.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Runner Up: Claude</h3>
              <p className="text-slate-500 text-sm mb-4 font-bold uppercase tracking-wide">Best For: Coding</p>
              <p className="text-slate-600">
                Developers swear by Claude 3.7 &quot;Sonnet&quot;. It hallucinates less code and follows complex system instructions perfectly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Runner Up: ChatGPT</h3>
              <p className="text-slate-500 text-sm mb-4 font-bold uppercase tracking-wide">Best For: Voice</p>
              <p className="text-slate-600">
                Still the best mobile voice mode. If you want to talk to your AI while driving, ChatGPT wins on latency and emotion.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
            <Link href="/lesson/try-gemini-3" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Previous
            </Link>
            <Link href="/lesson/notebooklm-tutorial" className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors">
              Next: The Viral Tool (NotebookLM) <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default LessonComparison;