import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, X, Shield, Zap, FileText, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const Lesson1_2 = () => {
  return (
    <>
      <Head>
        <title>Lesson 1.2: Gemini vs ChatGPT | Gemini Academy</title>
        <meta name="description" content="Gemini vs ChatGPT: The definitive comparison for 2026. Discover why Gemini's massive context window and Google integration make it the superior choice for productivity." />
        <meta name="keywords" content="Gemini vs ChatGPT comparison, Gemini context window, Is Gemini better than ChatGPT, Google AI vs OpenAI" />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-[20%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
            <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
            <span>/</span>
            <Link href="/lesson/1-1" className="hover:text-blue-600 transition-colors">1.1 Intro</Link>
            <span>/</span>
            <span className="text-slate-900">1.2 Gemini vs ChatGPT</span>
          </div>

          {/* Lesson Header */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold tracking-wide uppercase mb-4">Module 1 • Fundamentals</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 pb-2">
              The Battle of the Titans: <br />
              <span className="text-slate-800">Gemini vs. ChatGPT</span>
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              It's not about which one is "smarter". It's about which one fits your workflow. 
              Here is why Gemini wins on <strong>Integration</strong> and <strong>Memory</strong>.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <div className="mb-20 overflow-hidden rounded-3xl border border-slate-200 shadow-xl bg-white">
            <div className="grid grid-cols-3 bg-slate-900 text-white p-6 text-sm font-bold uppercase tracking-wider">
              <div>Feature</div>
              <div className="text-center text-blue-400">Google Gemini</div>
              <div className="text-center text-green-400">ChatGPT (OpenAI)</div>
            </div>
            
            <CompareRow 
              feature="Context Window (Memory)" 
              gemini="1M+ Tokens (Massive)" 
              gpt="128k Tokens (Limited)" 
              winner="gemini"
            />
            <CompareRow 
              feature="Ecosystem Integration" 
              gemini="Native (Docs, Drive, Gmail)" 
              gpt="None (Standalone)" 
              winner="gemini"
            />
            <CompareRow 
              feature="Video Understanding" 
              gemini="Native (Watch & Analyze)" 
              gpt="Frame Sampling (Basic)" 
              winner="gemini"
            />
            <CompareRow 
              feature="Creative Writing" 
              gemini="Solid, Factual" 
              gpt="More Nuanced/Creative" 
              winner="gpt"
            />
             <CompareRow 
              feature="Live Data" 
              gemini="Google Search (Real-time)" 
              gpt="Bing Search" 
              winner="tie"
            />
          </div>

          {/* Key Differentiator 1: The Context Window */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-slate-900">1. The "Million Token" Advantage</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                ChatGPT can read a long article. Gemini can read <strong>10 books at once</strong>. 
                <br /><br />
                This is the "Context Window". Gemini 1.5 Pro has a context window of up to 2 million tokens. 
                You can upload your entire company codebase, a year's worth of financial reports, or a 3-hour video, and ask questions about specific details.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl mb-8">
                <p className="font-bold text-blue-900 text-sm">💡 Pro Tip:</p>
                <p className="text-blue-800 text-sm mb-4">Don't summarize documents one by one. Upload the whole folder to Gemini and ask: "Find the contradictions between these 5 contracts."</p>
                
                {/* Upload Demo Video (Live) */}
                <div className="rounded-lg overflow-hidden border border-blue-200 shadow-sm">
                  <iframe 
                    src="/components/lesson_1_2_demo.html" 
                    className="w-full h-[280px] border-0" 
                    title="Gemini Upload Demo"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-100 to-white p-8 rounded-3xl border border-slate-200 shadow-inner">
               <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 opacity-50">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"><span className="text-xs font-bold text-green-600">GPT</span></div>
                    <div className="h-2 bg-slate-100 rounded-full flex-1 w-32"></div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg border-2 border-blue-500 relative transform scale-105">
                     <div className="absolute -right-3 -top-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-md">Winner</div>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"><span className="text-xs font-bold text-blue-600">Gem</span></div>
                    <div className="h-2 bg-blue-500 rounded-full flex-1 w-full"></div>
                  </div>
                  <p className="text-center text-xs text-slate-400 mt-2 font-mono">Visual representation of memory capacity</p>
               </div>
            </div>
          </div>

           {/* Key Differentiator 2: Google Ecosystem */}
           <div className="mb-24 bg-white p-10 rounded-3xl border border-slate-100 shadow-xl">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                   <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                      <Youtube className="w-6 h-6 text-red-600" />
                   </div>
                   <h3 className="text-3xl font-bold mb-4 text-slate-900">2. It Lives Where You Work</h3>
                   <p className="text-lg text-slate-600 mb-6">
                      ChatGPT is a destination website. Gemini is a layer on top of your Google life.
                      With <strong>Gemini Extensions</strong>, you can say:
                   </p>
                   <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                        <span className="text-slate-700">"Find the email from Moti about the budget and summarize it."</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                        <span className="text-slate-700">"Check my Calendar for free slots next Tuesday."</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                        <span className="text-slate-700">"Analyze this Google Sheet for trends."</span>
                      </li>
                   </ul>
                </div>
                <div className="flex-1 bg-slate-50 p-6 rounded-2xl border border-dashed border-slate-300">
                    <p className="text-xs text-slate-400 uppercase font-bold mb-4 text-center">Gemini Workflow</p>
                    <div className="flex justify-between items-center text-slate-300">
                        <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl">📧</div>
                        <div className="h-0.5 bg-slate-300 flex-1"></div>
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg flex items-center justify-center text-3xl z-10">✨</div>
                        <div className="h-0.5 bg-slate-300 flex-1"></div>
                        <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl">📅</div>
                    </div>
                </div>
              </div>
           </div>

          {/* Action Item */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-10 rounded-3xl shadow-2xl text-center mb-16">
            <h3 className="text-2xl font-bold mb-4">🚀 Try the "Impossible" Prompt</h3>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              ChatGPT would choke on this. Gemini eats it for breakfast.
            </p>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl font-mono text-sm mb-8 inline-block text-left border border-white/10 text-slate-200">
              &quot;Here is a YouTube link to a 1-hour lecture. Summarize the 3 key arguments the speaker makes between minute 20 and minute 40.&quot;
            </div>
             <div>
               <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-bold transition-colors">
                  Open Gemini & Test It <ArrowRight className="w-4 h-4" />
               </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
            <Link href="/lesson/1-1" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Previous: Intro
            </Link>
            <Link href="/lesson/2-1" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20 group">
              Next Module: Mastering Prompts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

const CompareRow = ({ feature, gemini, gpt, winner }) => (
  <div className="grid grid-cols-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
    <div className="p-4 font-medium text-slate-700 flex items-center gap-2 text-sm">
      {feature}
    </div>
    <div className={`p-4 text-center text-sm flex items-center justify-center gap-2 ${winner === 'gemini' ? 'font-bold text-blue-700 bg-blue-50/50' : 'text-slate-600'}`}>
      {winner === 'gemini' && <Check className="w-4 h-4" />} {gemini}
    </div>
    <div className={`p-4 text-center text-sm flex items-center justify-center gap-2 ${winner === 'gpt' ? 'font-bold text-green-700 bg-green-50/50' : 'text-slate-600'}`}>
      {winner === 'gpt' && <Check className="w-4 h-4" />} {gpt}
    </div>
  </div>
);

export default Lesson1_2;