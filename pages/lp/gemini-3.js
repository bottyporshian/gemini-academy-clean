import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Sparkles, ArrowRight, CheckCircle, Zap } from 'lucide-react';

export default function Gemini3LP() {
  return (
    <>
      <Head>
        <title>Try Gemini 3 Free | The Official Guide (2026)</title>
        <meta name="description" content="Stop searching. Start using Gemini 3 today. Learn the 3 hidden features that make it superior to GPT-5. Free tutorial inside." />
      </Head>

      <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-blue-500 selection:text-white">
        {/* Simple Header */}
        <header className="p-6 flex justify-between items-center max-w-6xl mx-auto">
          <div className="font-bold text-xl flex items-center gap-2">
            <Sparkles className="text-blue-400" /> Gemini Academy
          </div>
          <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">
            Visit Main Site
          </Link>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold tracking-wide uppercase mb-8 border border-blue-500/30">
            <Zap className="w-3 h-3" /> New 2026 Model
          </div>

          {/* Hero */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Want to Try <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Gemini 3?</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Most users are still stuck on the old version. We'll show you how to unlock the <strong>Flash-Thinking</strong> engine and automate your life.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/lesson/try-gemini-3" className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold rounded-full shadow-lg shadow-blue-900/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Start Free Tutorial <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-slate-500 mt-2 sm:mt-0">No credit card required</p>
          </div>

          {/* Social Proof / Features */}
          <div className="grid md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5">
              <CheckCircle className="text-green-400 w-6 h-6 mb-3" />
              <h3 className="font-bold mb-1">Instant Reasoning</h3>
              <p className="text-sm text-slate-400">Solves logic puzzles 10x faster than GPT-4o.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5">
              <CheckCircle className="text-green-400 w-6 h-6 mb-3" />
              <h3 className="font-bold mb-1">Google Deep Integration</h3>
              <p className="text-sm text-slate-400">Connects to Docs, Drive, and Gmail natively.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5">
              <CheckCircle className="text-green-400 w-6 h-6 mb-3" />
              <h3 className="font-bold mb-1">100% Free Course</h3>
              <p className="text-sm text-slate-400">Join 10,000+ students mastering AI.</p>
            </div>
          </div>
        </main>

        <footer className="text-center py-10 text-slate-600 text-sm border-t border-white/5">
          © 2026 Gemini Academy. Not affiliated with Google.
        </footer>
      </div>
    </>
  );
}
