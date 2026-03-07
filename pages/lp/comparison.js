import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Sparkles, ArrowRight, X, Check, Minus } from 'lucide-react';

export default function ComparisonLP() {
  return (
    <>
      <Head>
        <title>Gemini vs Claude vs ChatGPT (2026 Winner)</title>
        <meta name="description" content="We tested all 3 major AI models on coding, writing, and logic. See the results and why one model is the clear winner for productivity." />
      </Head>

      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-purple-100 selection:text-purple-900">
        <header className="p-6 flex justify-between items-center max-w-6xl mx-auto border-b border-slate-100">
          <div className="font-bold text-xl flex items-center gap-2">
            <span className="bg-purple-600 text-white p-1 rounded">VS</span> The Showdown
          </div>
          <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
            Gemini Academy Main Site &rarr;
          </Link>
        </header>

        <main className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Gemini vs. Claude vs. ChatGPT
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            The debate ends here. We ran the benchmarks for 2026. <br />
            <strong>Only one AI</strong> actually integrates with your work.
          </p>

          <div className="overflow-x-auto mb-16">
            <div className="inline-block min-w-full align-middle">
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xl">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Feature</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-slate-900 bg-blue-50">Gemini 3</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-slate-500">ChatGPT (GPT-5)</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-slate-500">Claude 3.7</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900">Google Docs Integration</td>
                      <td className="px-6 py-4 whitespace-nowrap text-blue-600 font-bold bg-blue-50"><Check className="inline w-4 h-4 mr-1"/> Native</td>
                      <td className="px-6 py-4 whitespace-nowrap text-slate-400"><X className="inline w-4 h-4 mr-1"/> No</td>
                      <td className="px-6 py-4 whitespace-nowrap text-slate-400"><X className="inline w-4 h-4 mr-1"/> No</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900">Context Window</td>
                      <td className="px-6 py-4 whitespace-nowrap text-blue-600 font-bold bg-blue-50">Infinite</td>
                      <td className="px-6 py-4 whitespace-nowrap text-slate-500">128k</td>
                      <td className="px-6 py-4 whitespace-nowrap text-slate-500">200k</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900">Price</td>
                      <td className="px-6 py-4 whitespace-nowrap text-blue-600 font-bold bg-blue-50">Free Tier</td>
                      <td className="px-6 py-4 whitespace-nowrap text-slate-500">$20/mo</td>
                      <td className="px-6 py-4 whitespace-nowrap text-slate-500">$20/mo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <Link href="/lesson/gemini-vs-claude-vs-chatgpt" className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-10 py-5 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
            Read the Full Comparison <ArrowRight className="w-5 h-5" />
          </Link>
          
        </main>
      </div>
    </>
  );
}
