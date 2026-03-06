import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Table, BarChart, Check, X, Wand2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Lesson10_1 = () => {
  return (
    <>
      <Head>
        <title>Lesson 10.1: Custom Instructions | Gemini Academy</title>
        <meta name="description" content="Teach Gemini who you are once, and never repeat yourself again." />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
           <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-[95%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
             <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
             <span>/</span>
             <span className="text-slate-900">Module 10</span>
             <span>/</span>
             <span className="text-slate-900">10.1 Custom Instructions</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
             <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold tracking-wide uppercase mb-4">Module 10 • Master Class</span>
             <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
                Train Your Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Chief of Staff</span>
             </h1>
             <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
                Stop starting from zero. Teach Gemini your context, style, and rules permanently.
             </p>
          </motion.div>

          <div className="mb-24 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative">
             <div className="text-center py-3 border-b border-slate-800 text-slate-400 text-xs font-mono uppercase tracking-widest">
                Gemini Custom Instructions Simulation
             </div>
             <div className="p-8 md:p-12">
                <CustomSimulation />
             </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-8 rounded-r-xl mb-16">
            <h3 className="text-xl font-bold text-purple-900 mb-4">🧠 The "User Manual" Prompt</h3>
            <div className="bg-white p-4 rounded-lg border border-purple-200 shadow-sm font-mono text-sm text-slate-700">
              <p>
                "For this session, you are my <strong>Chief of Staff</strong>.
                <br/><br/>
                - My Name: Moti
                <br/>- My Business: Gemini Academy
                <br/>- My Tone: Direct, professional, no fluff.
                <br/>- My Audience: Beginners in Israel.
                <br/><br/>
                Always format output as: <strong>Bottom Line Up Front (BLUF)</strong>."
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
             <Link href="/lesson/9-2" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Previous Lesson
            </Link>
            <Link href="/lesson/10-2" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20">
              Next: Final Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const CustomSimulation = () => {
   const [step, setStep] = useState(0);
   useEffect(() => {
      const run = async () => {
         setStep(0); await new Promise(r => setTimeout(r, 1000));
         setStep(1); await new Promise(r => setTimeout(r, 1000));
         setStep(2); await new Promise(r => setTimeout(r, 4000));
         run();
      };
      run();
   }, []);

   return (
      <div className="w-full max-w-2xl mx-auto bg-slate-950 rounded-xl overflow-hidden shadow-2xl font-mono text-sm border border-slate-800 p-6 h-[350px] flex flex-col gap-4">
         <AnimatePresence>
            {step >= 1 && (
               <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="self-end bg-purple-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm">
                  Write a meeting invite.
               </motion.div>
            )}
         </AnimatePresence>
         <AnimatePresence>
            {step >= 2 && (
               <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full bg-slate-800 rounded p-4 border border-slate-700 text-slate-300">
                  <div className="flex items-center gap-2 mb-2 text-purple-400 font-bold text-xs uppercase tracking-wider">
                     <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span> Context Applied: Chief of Staff
                  </div>
                  <div className="bg-slate-900 p-3 rounded border border-slate-700 mb-2 font-serif italic text-slate-400">
                     "Hi Team,<br/><br/>
                     <strong>BLUF:</strong> We need to align on Q3 goals.<br/><br/>
                     Agenda:<br/>1. Review KPIs<br/>2. Approve budget<br/><br/>
                     See you there,<br/>Moti"
                  </div>
                  <div className="text-xs text-green-400 font-bold">✓ Short ✓ Direct ✓ Tone Matched</div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
};

export default Lesson10_1;
