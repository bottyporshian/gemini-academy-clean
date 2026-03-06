import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Table, Activity, TrendingUp, DollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Lesson6_2 = () => {
  return (
    <>
      <Head>
        <title>Lesson 6.2: Decision Matrix | Gemini Academy</title>
        <meta name="description" content="Use Gemini to make difficult decisions using a weighted Decision Matrix." />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
           <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-[65%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
             <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
             <span>/</span>
             <span className="text-slate-900">Module 6</span>
             <span>/</span>
             <span className="text-slate-900">6.2 Decisions</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
             <span className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold tracking-wide uppercase mb-4">Module 6 • Strategic Thinking</span>
             <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
                Make Hard Decisions in <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Seconds</span>
             </h1>
             <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
                Stop guessing. Turn your intuition into a scored data table.
             </p>
          </motion.div>

          {/* SIMULATION: Decision Matrix */}
          <div className="mb-24 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative">
             <div className="text-center py-3 border-b border-slate-800 text-slate-400 text-xs font-mono uppercase tracking-widest">
                Gemini Strategy Simulation
             </div>
             <div className="p-8 md:p-12">
                <DecisionSimulation />
             </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-r-xl mb-16">
            <h3 className="text-xl font-bold text-yellow-900 mb-4">⚖️ The Decision Matrix Prompt</h3>
            <div className="bg-white p-4 rounded-lg border border-yellow-200 shadow-sm font-mono text-sm text-slate-700">
              <p>
                "I need to choose between <strong>[Option A]</strong> and <strong>[Option B]</strong>.
                <br/><br/>
                Create a decision matrix comparing them on:
                <br/>- Cost
                <br/>- Speed
                <br/>- Impact
                <br/>- Risk
                <br/><br/>
                Assign a score of 1-5 for each and calculate the total to recommend the winner."
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
             <Link href="/lesson/6-1" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Previous Lesson
            </Link>
            <Link href="/lesson/7-1" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20">
              Next Module: Data Analysis <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

// --- SIMULATION ---
const DecisionSimulation = () => {
   const [step, setStep] = useState(0);

   useEffect(() => {
      const run = async () => {
         setStep(0); await new Promise(r => setTimeout(r, 1000));
         setStep(1); await new Promise(r => setTimeout(r, 1000)); // Prompt
         setStep(2); await new Promise(r => setTimeout(r, 4000)); // Table
         run();
      };
      run();
   }, []);

   return (
      <div className="w-full max-w-2xl mx-auto bg-slate-950 rounded-xl overflow-hidden shadow-2xl font-mono text-sm border border-slate-800 p-6 h-[350px] flex flex-col gap-4">
         <AnimatePresence>
            {step >= 1 && (
               <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="self-end bg-yellow-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm">
                  Help me choose: Hire Agency vs. In-House Team.
               </motion.div>
            )}
         </AnimatePresence>

         <AnimatePresence>
            {step >= 2 && (
               <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                  <div className="bg-slate-900 p-2 text-slate-400 text-xs border-b border-slate-700 flex justify-between">
                     <span>Decision Matrix</span>
                     <span className="text-yellow-500 font-bold">Winner: In-House</span>
                  </div>
                  <table className="w-full text-left text-slate-300">
                     <thead className="bg-slate-900/50 text-slate-500 text-xs uppercase">
                        <tr><th className="p-2">Criteria</th><th className="p-2">Agency</th><th className="p-2">In-House</th></tr>
                     </thead>
                     <tbody className="divide-y divide-slate-700/50">
                        <tr><td className="p-2">Cost (1-5)</td><td className="p-2 text-red-400">2 (Expensive)</td><td className="p-2 text-green-400">4 (Salary)</td></tr>
                        <tr><td className="p-2">Speed</td><td className="p-2 text-green-400">5 (Fast)</td><td className="p-2 text-red-400">2 (Slow hire)</td></tr>
                        <tr><td className="p-2">Control</td><td className="p-2">3</td><td className="p-2 text-green-400">5 (Full)</td></tr>
                        <tr className="bg-slate-700/30 font-bold text-white"><td className="p-2">TOTAL</td><td className="p-2">10</td><td className="p-2 text-yellow-400">11 🏆</td></tr>
                     </tbody>
                  </table>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
};

export default Lesson6_2;
