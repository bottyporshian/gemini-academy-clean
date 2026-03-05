import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, X, Shield, Zap, FileText, Youtube, Upload, File } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
                
                {/* UPLOAD SIMULATION */}
                <div className="rounded-lg overflow-hidden border border-blue-200 shadow-sm bg-white">
                   <p className="text-center text-slate-400 text-[10px] uppercase font-bold tracking-widest py-2 bg-slate-50 border-b border-slate-100">Watch: How to Upload Files</p>
                   <FileUploadSimulation />
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

// --- FILE UPLOAD ANIMATION (Replica of Gemini Interface) ---
const FileUploadSimulation = () => {
  const [step, setStep] = useState(0); 

  useEffect(() => {
    const cycle = async () => {
      // 0: Start (Cursor near files)
      setStep(0);
      await new Promise(r => setTimeout(r, 1000));
      
      // 1: Select (Highlight all 3)
      setStep(1);
      await new Promise(r => setTimeout(r, 800));

      // 2: Drag Start (Grab Stack)
      setStep(2);
      await new Promise(r => setTimeout(r, 1000));
      
      // 3: Drag Over Chat (Drop Zone Active)
      setStep(3);
      await new Promise(r => setTimeout(r, 1000));

      // 4: Drop (Files appear in chat)
      setStep(4);
      await new Promise(r => setTimeout(r, 3000));
      
      cycle();
    };
    cycle();
  }, []);

  const getCursorPos = () => {
     switch(step) {
        case 0: return { top: '30%', left: '85%' }; // Start
        case 1: return { top: '30%', left: '75%' }; // Select Sweep
        case 2: return { top: '35%', left: '80%' }; // Grab Center
        case 3: return { top: '75%', left: '50%' }; // Over Chat
        case 4: return { top: '75%', left: '50%' }; // Release
        default: return { top: '50%', left: '50%' };
     }
  };

  return (
    <div className="relative w-full h-64 bg-[#f0f4f9] overflow-hidden flex flex-col cursor-none font-sans">
      
      {/* BACKGROUND: DESKTOP WALLPAPER */}
      <div className="absolute inset-0 bg-slate-100">
         {/* Desktop Icons (3 Files) */}
         <div className="absolute top-6 right-6 flex gap-4">
            {[ 
               { name: "Report.pdf", color: "text-red-500", bg: "bg-red-50" },
               { name: "Data.csv", color: "text-green-500", bg: "bg-green-50" },
               { name: "Image.png", color: "text-blue-500", bg: "bg-blue-50" }
            ].map((file, i) => (
               <motion.div 
                  key={i}
                  animate={step >= 1 && step <= 3 ? { scale: 0.9, opacity: 0.5, y: -5 } : { scale: 1, opacity: 1, y: 0 }}
                  className={`flex flex-col items-center gap-2 transition-all ${step === 1 ? 'ring-2 ring-blue-400 rounded-lg bg-blue-50/50 p-1' : ''}`}
               >
                  <div className={`w-10 h-12 bg-white border border-slate-200 shadow-sm rounded flex items-center justify-center`}>
                     <FileText className={`${file.color} w-5 h-5`} />
                  </div>
                  <span className="text-[9px] text-slate-500 font-medium">{file.name}</span>
               </motion.div>
            ))}
         </div>
         
         {/* Selection Box Simulation */}
         {step === 1 && (
            <motion.div 
               initial={{ width: 0, opacity: 0 }}
               animate={{ width: 180, height: 80, opacity: 0.2 }}
               className="absolute top-4 right-4 bg-blue-500 border border-blue-600 rounded"
            />
         )}
      </div>

      {/* GEMINI CHAT INTERFACE (Bottom Half) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white rounded-t-2xl shadow-lg border-t border-slate-200 p-4 z-10">
         <div className="flex items-center gap-2 mb-2">
            <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" alt="" className="w-5 h-5" />
            <span className="text-sm font-medium text-slate-700">Gemini</span>
         </div>

         {/* Input Area (Drop Zone) */}
         <motion.div 
            animate={step === 3 ? { borderColor: '#1a73e8', backgroundColor: '#e8f0fe' } : { borderColor: '#e2e8f0', backgroundColor: '#f8fafc' }}
            className="w-full h-16 border-2 border-dashed rounded-xl flex items-center px-4 relative transition-colors overflow-hidden"
         >
            <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center mr-3 text-slate-500 font-bold shrink-0">+</div>
            
            <AnimatePresence mode="wait">
               {step === 4 ? (
                  <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="flex gap-2 overflow-x-auto"
                  >
                     {/* 3 Uploaded Files Pills */}
                     {[ "Report.pdf", "Data.csv", "Image.png" ].map((name, i) => (
                        <div key={i} className="px-3 py-1 bg-white border border-slate-300 rounded-lg flex items-center gap-2 shadow-sm shrink-0">
                           <FileText className="w-3 h-3 text-slate-500" />
                           <span className="text-[10px] font-medium text-slate-700">{name}</span>
                           <div className="w-2 h-2 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                     ))}
                  </motion.div>
               ) : (
                  <span className="text-slate-400 text-sm truncate">Type a message or drag files...</span>
               )}
            </AnimatePresence>
         </motion.div>
      </div>

      {/* DRAGGED STACK (Ghost) */}
      {(step === 2 || step === 3) && (
         <motion.div
            className="absolute z-50 pointer-events-none"
            initial={getCursorPos()}
            animate={getCursorPos()}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
         >
            <div className="relative -mt-8 -ml-8">
               <div className="absolute top-0 left-0 w-12 h-14 bg-white border border-slate-300 shadow-xl rounded flex items-center justify-center rotate-12 z-10">
                  <FileText className="text-blue-500 w-6 h-6" />
               </div>
               <div className="absolute top-1 left-1 w-12 h-14 bg-white border border-slate-300 shadow-xl rounded flex items-center justify-center rotate-6 z-20">
                  <FileText className="text-green-500 w-6 h-6" />
               </div>
               <div className="absolute top-2 left-2 w-12 h-14 bg-white border border-slate-300 shadow-xl rounded flex items-center justify-center z-30">
                  <FileText className="text-red-500 w-6 h-6" />
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">3</div>
               </div>
            </div>
         </motion.div>
      )}

      {/* CURSOR */}
      <motion.div
         className="absolute z-[60] pointer-events-none drop-shadow-xl"
         animate={getCursorPos()}
         transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19823L11.4818 12.3673H5.65376Z" fill="black" stroke="white" strokeWidth="1"/>
         </svg>
      </motion.div>
    </div>
  );
};

export default Lesson1_2;// Update timestamp: Tue Mar  3 18:04:49 IST 2026
