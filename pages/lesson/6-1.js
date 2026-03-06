import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Lightbulb, Zap, Brain, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Lesson6_1 = () => {
  return (
    <>
      <Head>
        <title>Lesson 6.1: Advanced Brainstorming | Gemini Academy</title>
        <meta name="description" content="Learn how to use Gemini as your brainstorming partner. Move beyond generic ideas to radical innovation using the '10x Idea' method." />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-[60%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
            <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
            <span>/</span>
            <span className="text-slate-900">Module 6</span>
            <span>/</span>
            <span className="text-slate-900">6.1 Brainstorming</span>
          </div>

          {/* Lesson Header */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold tracking-wide uppercase mb-4">Module 6 • Advanced Thinking</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
              Never Run Out of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Ideas</span> Again
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              Stop treating AI like a search engine. Treat it like the smartest creative partner in the room.
            </p>
          </motion.div>

          {/* The Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <X className="text-red-500" /> The Old Way
              </h3>
              <p className="text-slate-600 mb-6">
                Most people ask: <em>"Give me 5 blog post ideas."</em>
                <br />
                The result? Boring, generic lists that look like everyone else's content.
              </p>
              <div className="bg-slate-100 p-4 rounded-lg text-slate-500 text-sm font-mono mb-8 opacity-70">
                1. How to work from home<br/>
                2. Top 10 productivity tips<br/>
                3. Why remote work is great...
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <CheckIcon className="text-green-500" /> The "10x Idea" Way
              </h3>
              <p className="text-slate-600 mb-6">
                We use the <strong>Radical Constraints</strong> method.
                <br />
                Force Gemini to think sideways by asking for the <em>impossible</em> or the <em>terrible</em>.
              </p>
            </div>
          </div>

          {/* SIMULATION VIDEO: Brainstorming */}
          <div className="mb-24 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative">
             <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
             </div>
             <div className="text-center py-3 border-b border-slate-800 text-slate-400 text-xs font-mono uppercase tracking-widest">
                Gemini Creative Mode Simulation
             </div>
             <div className="p-8 md:p-12">
                <BrainstormSimulation />
             </div>
          </div>

          {/* The Prompt to Copy */}
          <div className="bg-purple-50 border-l-4 border-purple-600 p-8 rounded-r-xl mb-16">
            <h3 className="text-xl font-bold text-purple-900 mb-4">📋 Copy This Prompt</h3>
            <div className="bg-white p-4 rounded-lg border border-purple-200 shadow-sm font-mono text-sm text-slate-700 relative group">
              <p>
                "Generate 10 radical, unconventional ideas about <strong>[TOPIC]</strong>. 
                <br/><br/>
                Constraint: Avoid all common clichés. I want ideas that are surprising, controversial, or counter-intuitive.
                <br/><br/>
                Then, select the best 3 and explain <strong>why</strong> they would go viral."
              </p>
              <button className="absolute top-2 right-2 bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-1 rounded text-xs font-bold transition-colors">
                Copy
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
            <Link href="/lesson/1-2" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Previous Lesson
            </Link>
            <Link href="/lesson/6-2" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20">
              Next: Decision Matrix <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

const CheckIcon = ({ className }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// --- BRAINSTORM SIMULATION COMPONENT ---
const BrainstormSimulation = () => {
  const [stage, setStage] = useState(0); 
  // 0: Typing bad prompt
  // 1: Bad results
  // 2: Deleting / Typing GOOD prompt
  // 3: Good results generating

  useEffect(() => {
    const cycle = async () => {
      setStage(0);
      await new Promise(r => setTimeout(r, 1500)); // Wait before start
      setStage(1); // Bad results appear
      await new Promise(r => setTimeout(r, 3000)); // Read bad results
      setStage(2); // Typing new prompt
      await new Promise(r => setTimeout(r, 2000)); // Typing...
      setStage(3); // Good results appear
      await new Promise(r => setTimeout(r, 6000)); // Read good results
      cycle();
    };
    cycle();
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto bg-slate-950 rounded-xl overflow-hidden shadow-2xl font-mono text-sm border border-slate-800">
      
      {/* Chat Area */}
      <div className="h-[400px] p-6 flex flex-col gap-6 overflow-hidden relative">
        
        {/* User Message 1 (Bad) */}
        <AnimatePresence>
          {(stage >= 1) && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
              className="self-end bg-slate-800 text-slate-200 px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%]"
            >
              Give me blog ideas about Remote Work.
            </motion.div>
          )}
        </AnimatePresence>

        {/* AI Response 1 (Boring) */}
        <AnimatePresence>
          {(stage === 1) && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="self-start text-slate-400 max-w-[90%]"
            >
              <div className="flex gap-3">
                 <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0 mt-1"></div>
                 <div>
                    <p className="mb-2">Here are 5 ideas:</p>
                    <ul className="list-disc pl-4 space-y-1">
                       <li>Pros and Cons of WFH</li>
                       <li>How to set up a home office</li>
                       <li>Zoom meeting tips</li>
                       <li>Staying productive at home</li>
                       <li>Remote work tools 2026</li>
                    </ul>
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* User Message 2 (Good) */}
        <AnimatePresence>
          {(stage >= 2) && (
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
               className="self-end bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-[90%] shadow-lg shadow-blue-900/20"
             >
               <span className="font-bold text-blue-200 text-xs block mb-1">IMPROVED PROMPT</span>
               Generate 5 <span className="text-yellow-300 font-bold">RADICAL</span> ideas about Remote Work. 
               Constraint: No clichés. Make them controversial.
             </motion.div>
          )}
        </AnimatePresence>

         {/* AI Response 2 (Creative) */}
         <AnimatePresence>
          {(stage === 3) && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="self-start text-slate-200 max-w-[95%]"
            >
              <div className="flex gap-3">
                 <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0 mt-1 animate-pulse"></div>
                 <div className="space-y-3">
                    <p className="text-slate-400 text-xs uppercase tracking-wide">Analyzing Constraints...</p>
                    
                    <div className="p-3 bg-slate-900/50 border-l-2 border-yellow-500 rounded-r">
                       <h4 className="font-bold text-yellow-400 mb-1">1. The "Death of the Home Office"</h4>
                       <p className="text-xs text-slate-400">Argue that WFH is destroying cities and we should move to "Third Places" (cafes/libraries) exclusively to save society.</p>
                    </div>

                    <div className="p-3 bg-slate-900/50 border-l-2 border-pink-500 rounded-r">
                       <h4 className="font-bold text-pink-400 mb-1">2. "Asynchronous Only" Challenge</h4>
                       <p className="text-xs text-slate-400">A guide to banning ALL video calls for 30 days. Communication happens only via text. Why voice is obsolete.</p>
                    </div>

                    <div className="p-3 bg-slate-900/50 border-l-2 border-green-500 rounded-r">
                       <h4 className="font-bold text-green-400 mb-1">3. Pay by Output, Not Hour</h4>
                       <p className="text-xs text-slate-400">Controversial take: Remote workers should work 2 hours a day if they finish their tasks. The end of the 9-to-5.</p>
                    </div>

                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Input Bar Simulation */}
      <div className="h-16 border-t border-slate-800 bg-slate-900 flex items-center px-4 gap-3">
         <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-500">+</div>
         <div className="flex-1 h-10 bg-slate-950 rounded-lg border border-slate-800 flex items-center px-3 text-slate-500 text-xs">
            {stage === 0 && <span className="animate-pulse">Typing...</span>}
            {stage === 2 && <span className="text-blue-400">Refining prompt parameters...</span>}
            {stage === 3 && <span>Waiting for response...</span>}
         </div>
         <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${stage === 2 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-600'}`}>
            <ArrowRight className="w-4 h-4" />
         </div>
      </div>
    </div>
  );
};

export default Lesson6_1;
