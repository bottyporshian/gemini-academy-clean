import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Sparkles, ArrowRight, Headphones, FileText, CheckCircle } from 'lucide-react';

export default function NotebookLMLP() {
  return (
    <>
      <Head>
        <title>NotebookLM Tutorial: Turn PDFs into Podcasts (Free)</title>
        <meta name="description" content="The viral AI tool everyone is talking about. Upload your notes, get a podcast. Zero hallucinations. Learn how in 5 minutes." />
      </Head>

      <div className="min-h-screen bg-green-50 font-sans text-slate-900">
        <main className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-green-200 text-green-800 text-xs font-bold tracking-wide uppercase mb-6">Viral Tool Alert</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
              Don't Read Your Notes. <br />
              <span className="text-green-600">Listen to Them.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              NotebookLM turns boring documents into engaging, two-host podcasts. It's the ultimate study hack for 2026.
            </p>
            
            <Link href="/lesson/notebooklm-tutorial" className="inline-flex items-center gap-2 bg-green-600 text-white px-10 py-5 rounded-full font-bold hover:bg-green-700 transition-all shadow-lg hover:-translate-y-1">
              Start Free Tutorial <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-green-100">
              <Headphones className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Audio Overviews</h3>
              <p className="text-slate-600">Two AI hosts discuss your material, make jokes, and use metaphors to help you learn.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-green-100">
              <CheckCircle className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Zero Hallucinations</h3>
              <p className="text-slate-600">Unlike ChatGPT, it <strong>only</strong> uses the sources you upload. It won't make things up.</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
