import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Brain, FileText, Sparkles, FolderOpen, Search, Database, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Lesson4_2 = () => {
  return (
    <>
      <Head>
        <title>Lesson 4.2: Building a Second Brain | Gemini Academy</title>
        <meta name="description" content="Turn Gemini into your second brain. Learn how to dump ideas into Docs and retrieve them instantly using semantic search." />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-[85%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
            <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
            <span>/</span>
            <Link href="/lesson/4-1" className="hover:text-blue-600 transition-colors">4.1 Workspace</Link>
            <span>/</span>
            <span className="text-slate-900">4.2 Second Brain</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-wide uppercase mb-4">Module 4 • Productivity</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500 pb-2">
              Never Forget <br />
              <span className="text-slate-800">An Idea Again.</span>
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              Your brain is for having ideas, not holding them. 
              Use Google Docs as your storage, and Gemini as your retrieval engine.
            </p>
          </motion.div>

          {/* Intro Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-24">
             <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4"><FileText className="w-5 h-5 text-orange-600" /></div>
                <h3 className="font-bold text-slate-900 mb-2">Capture Everything</h3>
                <p className="text-sm text-slate-600">Dump every meeting note, random thought, and PDF into Drive.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4"><Search className="w-5 h-5 text-blue-600" /></div>
                <h3 className="font-bold text-slate-900 mb-2">Ask, Don't Sort</h3>
                <p className="text-sm text-slate-600">Stop organizing folders. Just ask Gemini: "What did I decide about project X?"</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4"><Brain className="w-5 h-5 text-purple-600" /></div>
                <h3 className="font-bold text-slate-900 mb-2">Connect Dots</h3>
                <p className="text-sm text-slate-600">Find connections between a note from 2023 and an email from today.</p>
             </div>
          </div>

          {/* SIMULATION: THE SECOND BRAIN */}
          <div className="mb-24">
             <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
                <p className="text-slate-600">Watch Gemini turn a chaotic pile of documents into instant knowledge.</p>
             </div>
             
             <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                   <SecondBrainSimulation />
                </div>
             </div>
          </div>

          {/* The Method */}
          <div className="mb-24 bg-white p-10 rounded-3xl border border-slate-100 shadow-xl">
             <h3 className="text-3xl font-bold mb-8 text-slate-900">The "Knowledge Vault" Method</h3>
             <div className="space-y-8">
                <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center shrink-0 font-bold text-slate-500 text-xl">1</div>
                    <div>
                        <h4 className="font-bold text-xl text-slate-900 mb-2">Create a "Dump Doc"</h4>
                        <p className="text-slate-600">Start a Google Doc called "Daily Notes 2026". Write everything there. Date every entry. Don't worry about formatting.</p>
                    </div>
                </div>
                <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center shrink-0 font-bold text-slate-500 text-xl">2</div>
                    <div>
                        <h4 className="font-bold text-xl text-slate-900 mb-2">Upload Reference Material</h4>
                        <p className="text-slate-600">Save PDFs, ebooks, and reports to a specific folder in Drive (e.g., "Project Resources").</p>
                    </div>
                </div>
                <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center shrink-0 font-bold text-slate-500 text-xl">3</div>
                    <div>
                        <h4 className="font-bold text-xl text-slate-900 mb-2">Retrieve with Context</h4>
                        <p className="text-slate-600">When you need an answer, use the <code>@Google Drive</code> extension:</p>
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mt-3 font-mono text-sm text-slate-700">
                            "@Google Drive Check my 'Daily Notes' and 'Project Resources' folder. Based on my notes about pricing, draft a proposal for the client."
                        </div>
                    </div>
                </div>
             </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
            <Link href="/lesson/4-1" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Previous
            </Link>
            <Link href="/lesson/5-1" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20 group">
              Next: Building Gems <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

// --- SIMULATION: SECOND BRAIN ---
const SecondBrainSimulation = () => {
   const [phase, setPhase] = useState(0); 
   // 0: Chaos (Floating Docs)
   // 1: Query (Scanning)
   // 2: Connecting (Lines)
   // 3: Answer (Result)

   useEffect(() => {
     const cycle = async () => {
       setPhase(0);
       await new Promise(r => setTimeout(r, 2000));
       setPhase(1);
       await new Promise(r => setTimeout(r, 2000));
       setPhase(2);
       await new Promise(r => setTimeout(r, 2000));
       setPhase(3);
       await new Promise(r => setTimeout(r, 4000));
       cycle();
     };
     cycle();
   }, []);

   return (
      <div className="bg-slate-800 rounded-xl shadow-lg border border-slate-700 overflow-hidden h-[400px] relative">
         
         {/* SEARCH BAR (Always visible) */}
         <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[80%] z-20">
            <motion.div 
                animate={phase >= 1 ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0.5 }}
                className="bg-slate-700/80 backdrop-blur-md text-white px-6 py-3 rounded-full border border-slate-600 flex items-center gap-3 shadow-xl"
            >
                <Sparkles className={`w-5 h-5 ${phase >= 1 ? 'text-blue-400' : 'text-slate-500'}`} />
                <span className="font-mono text-sm text-slate-300">
                    {phase === 0 ? "Type to search..." : "@Drive What were my ideas for the Q4 launch?"}
                </span>
            </motion.div>
         </div>

         {/* DOCUMENTS FIELD */}
         <div className="absolute inset-0 z-10">
            {/* Doc 1 */}
            <FloatingDoc x="20%" y="40%" rotate="-10deg" delay={0} phase={phase} isRelevant={true}>
                <FileText className="w-8 h-8 text-slate-400 mb-2" />
                <div className="h-2 w-12 bg-slate-600 rounded mb-1"></div>
                <div className="h-2 w-8 bg-slate-600 rounded"></div>
            </FloatingDoc>
            
            {/* Doc 2 (Irrelevant) */}
            <FloatingDoc x="80%" y="30%" rotate="15deg" delay={1} phase={phase} isRelevant={false}>
                <FileText className="w-8 h-8 text-slate-600 mb-2" />
                <div className="h-2 w-12 bg-slate-700 rounded mb-1"></div>
                <div className="h-2 w-8 bg-slate-700 rounded"></div>
            </FloatingDoc>

            {/* Doc 3 (Relevant) */}
            <FloatingDoc x="50%" y="70%" rotate="5deg" delay={0.5} phase={phase} isRelevant={true}>
                <FileText className="w-8 h-8 text-slate-400 mb-2" />
                <div className="h-2 w-12 bg-slate-600 rounded mb-1"></div>
                <div className="h-2 w-8 bg-slate-600 rounded"></div>
            </FloatingDoc>

            {/* Doc 4 (Irrelevant) */}
            <FloatingDoc x="15%" y="80%" rotate="-20deg" delay={1.5} phase={phase} isRelevant={false}>
                <FileText className="w-8 h-8 text-slate-600 mb-2" />
                <div className="h-2 w-12 bg-slate-700 rounded mb-1"></div>
                <div className="h-2 w-8 bg-slate-700 rounded"></div>
            </FloatingDoc>
         </div>

         {/* CONNECTING LINES (Phase 2) */}
         <AnimatePresence>
            {phase === 2 && (
                <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
                    <motion.line 
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        x1="25%" y1="45%" x2="50%" y2="50%" 
                        stroke="#60a5fa" strokeWidth="2" strokeDasharray="5,5" 
                    />
                    <motion.line 
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        x1="55%" y1="75%" x2="50%" y2="50%" 
                        stroke="#60a5fa" strokeWidth="2" strokeDasharray="5,5" 
                    />
                </svg>
            )}
         </AnimatePresence>

         {/* BRAIN / PROCESSING CENTER */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
             <motion.div 
                animate={phase === 2 ? { scale: 1.2, boxShadow: "0 0 30px #3b82f6" } : { scale: 1 }}
                className="w-20 h-20 bg-slate-900 rounded-full border border-slate-600 flex items-center justify-center shadow-xl"
             >
                 {phase < 3 ? (
                     <Brain className={`w-10 h-10 ${phase >= 1 ? 'text-blue-400 animate-pulse' : 'text-slate-600'}`} />
                 ) : (
                     <CheckCircle className="w-10 h-10 text-green-400" />
                 )}
             </motion.div>
         </div>

         {/* RESULT POPUP (Phase 3) */}
         <AnimatePresence>
            {phase === 3 && (
                <motion.div 
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-[60%] left-1/2 -translate-x-1/2 bg-white text-slate-900 p-6 rounded-xl shadow-2xl z-40 w-[80%] max-w-sm"
                >
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-orange-500" /> Found 2 Ideas:
                    </h4>
                    <ul className="text-sm space-y-2 text-slate-600">
                        <li className="flex gap-2">
                            <span className="text-blue-500">•</span>
                            <span>Viral video campaign (from 'Meeting Notes Aug')</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-blue-500">•</span>
                            <span>Influencer partnership (from 'Random Ideas Doc')</span>
                        </li>
                    </ul>
                </motion.div>
            )}
         </AnimatePresence>

      </div>
   );
};

const FloatingDoc = ({ children, x, y, rotate, delay, phase, isRelevant }) => {
    // If relevant and phase >= 2, highlight it. Else if phase >= 2 fade out irrelevant ones.
    const isHighlighted = phase >= 1 && isRelevant;
    const isDimmed = phase >= 1 && !isRelevant;

    return (
        <motion.div 
            animate={{ 
                y: [0, -10, 0],
                opacity: isDimmed ? 0.1 : 1,
                scale: isHighlighted ? 1.1 : 1,
                boxShadow: isHighlighted ? "0 0 20px rgba(96, 165, 250, 0.5)" : "none",
                borderColor: isHighlighted ? "#60a5fa" : "#334155"
            }}
            transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay },
                default: { duration: 0.5 }
            }}
            style={{ left: x, top: y, rotate: rotate }}
            className="absolute bg-slate-800 p-4 rounded-lg border border-slate-700 w-24 h-32 flex flex-col items-center justify-center shadow-lg"
        >
            {children}
        </motion.div>
    );
};

const CheckCircle = ({className}) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>)

export default Lesson4_2;