import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Settings, Code, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const Lesson2_2 = () => {
  return (
    <>
      <Head>
        <title>Lesson 2.2: Advanced Prompt Engineering | Gemini Academy</title>
        <meta name="description" content="Go beyond basic prompts. Learn how to use System Instructions and Few-Shot Prompting to make Gemini behave exactly like you want." />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-[45%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
            <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
            <span>/</span>
            <Link href="/lesson/2-1" className="hover:text-blue-600 transition-colors">2.1 Formula</Link>
            <span>/</span>
            <span className="text-slate-900">2.2 Advanced Techniques</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-4">Module 2 • Prompt Mastery</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 pb-2">
              Beyond the Basics: <br />
              <span className="text-slate-800">System Instructions & Few-Shot.</span>
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              Sometimes a good prompt isn't enough. You need to change <strong>how the model thinks</strong>.
            </p>
          </motion.div>

          {/* Technique 1: System Instructions */}
          <div className="mb-24 grid md:grid-cols-2 gap-12 items-center">
             <div>
                <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                   <Settings className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-slate-900">1. System Instructions</h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                   Think of this as "God Mode". Instead of asking Gemini to act a certain way in every chat, you set a global rule.
                   <br/><br/>
                   <strong>Use Case:</strong> You want Gemini to always reply in Hebrew, or always act as a Python coding assistant.
                </p>
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-xl">
                   <p className="font-bold text-indigo-900 text-sm">How to do it:</p>
                   <p className="text-indigo-800 text-sm">In AI Studio, look for the "System Instructions" box on the left. Paste your persona there.</p>
                </div>
             </div>
             <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-800 font-mono text-sm text-green-400 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 text-xs text-slate-500 uppercase font-bold">System Prompt</div>
                <p className="mb-4 text-slate-400"># You are "CodeBot"</p>
                <p className="mb-4">
                  - You only answer with code snippets.<br/>
                  - Do not explain the code unless asked.<br/>
                  - Always use Python 3.12 syntax.<br/>
                  - If the request is not about code, reply: "I only speak code."
                </p>
             </div>
          </div>

          {/* Technique 2: Few-Shot Prompting */}
          <div className="mb-24 bg-white p-10 rounded-3xl border border-slate-100 shadow-xl relative overflow-hidden">
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
              
              <div className="relative z-10">
                 <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                    <Layers className="w-6 h-6 text-purple-600" />
                 </div>
                 <h3 className="text-3xl font-bold mb-4 text-slate-900">2. Few-Shot Prompting (The "Show, Don't Tell" Rule)</h3>
                 <p className="text-lg text-slate-600 mb-8 max-w-3xl">
                    The best way to get a specific format is to <strong>give examples</strong>. 
                    Instead of describing what you want, show Gemini 2-3 examples of &quot;Input &rarr; Output&quot;.
                 </p>

                 <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                       <h4 className="font-bold text-red-500 mb-2 text-sm uppercase">Zero-Shot (Risky)</h4>
                       <p className="text-slate-600 text-sm italic mb-2">"Extract the sentiment from this tweet."</p>
                       <div className="h-px bg-slate-200 my-4"></div>
                       <p className="text-slate-800 font-bold text-sm">Output: "The sentiment is generally positive."</p>
                    </div>

                    <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100 ring-1 ring-green-500/20">
                       <h4 className="font-bold text-green-600 mb-2 text-sm uppercase">Few-Shot (Perfect)</h4>
                       <p className="text-slate-600 text-xs font-mono mb-2">
                          Tweet: &quot;I love this!&quot; &rarr; Sentiment: Positive<br/>
                          Tweet: &quot;This sucks.&quot; &rarr; Sentiment: Negative<br/>
                          Tweet: &quot;It&apos;s okay I guess.&quot; &rarr; Sentiment: Neutral<br/>
                          Tweet: &quot;Gemini is fast.&quot; &rarr; Sentiment:
                       </p>
                       <div className="h-px bg-green-200 my-4"></div>
                       <p className="text-green-800 font-bold text-sm">Output: Positive</p>
                    </div>
                 </div>
              </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
            <Link href="/lesson/2-1" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Previous
            </Link>
            <Link href="/lesson/3-1" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20 group">
              Next Module: Visual Magic <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lesson2_2;