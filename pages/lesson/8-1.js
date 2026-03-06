import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Table, BarChart, Check, X, Wand2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Lesson8_1 = () => {
  return (
    <>
      <Head>
        <title>Lesson 8.1: Advanced Copywriting | Gemini Academy</title>
        <meta name="description" content="Master copywriting frameworks like PAS and AIDA with Gemini." />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
           <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-[78%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
             <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
             <span>/</span>
             <span className="text-slate-900">Module 8</span>
             <span>/</span>
             <span className="text-slate-900">8.1 Copywriting</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
             <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold tracking-wide uppercase mb-4">Module 8 • Content Marketing</span>
             <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
                Write Copy That <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Sells</span>
             </h1>
             <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
                Use proven frameworks like PAS and AIDA to convert readers into buyers.
             </p>
          </motion.div>

          <div className="mb-24 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative">
             <div className="text-center py-3 border-b border-slate-800 text-slate-400 text-xs font-mono uppercase tracking-widest">
                Gemini Copywriting Simulation
             </div>
             <div className="p-8 md:p-12">
                <CopySimulation />
             </div>
          </div>

          <div className="bg-pink-50 border-l-4 border-pink-600 p-8 rounded-r-xl mb-16">
            <h3 className="text-xl font-bold text-pink-900 mb-4">✍️ The PAS Framework Prompt</h3>
            <div className="bg-white p-4 rounded-lg border border-pink-200 shadow-sm font-mono text-sm text-slate-700">
              <p>
                "Write a LinkedIn post about <strong>[Topic]</strong> using the <strong>PAS (Problem-Agitation-Solution)</strong> framework.
                <br/><br/>
                - Problem: Identify the pain point.
                <br/>- Agitation: Make it feel emotional/urgent.
                <br/>- Solution: Present my product as the relief."
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
             <Link href="/lesson/7-2" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Previous Lesson
            </Link>
            <Link href="/lesson/8-2" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20">
              Next: SEO Blog Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const CopySimulation = () => {
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
               <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="self-end bg-pink-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm">
                  Write a post about 'Burnout' using PAS.
               </motion.div>
            )}
         </AnimatePresence>
         <AnimatePresence>
            {step >= 2 && (
               <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full bg-white rounded border border-slate-200 p-4 relative font-serif text-slate-800 shadow-sm">
                  <h3 className="font-bold text-red-600 text-xs uppercase tracking-wider mb-2">Problem</h3>
                  <p className="mb-4">Are you waking up tired every single day?</p>
                  
                  <h3 className="font-bold text-orange-600 text-xs uppercase tracking-wider mb-2">Agitation</h3>
                  <p className="mb-4">It starts with fatigue. Then you lose passion. Finally, you burn out completely and lose months of progress.</p>
                  
                  <h3 className="font-bold text-green-600 text-xs uppercase tracking-wider mb-2">Solution</h3>
                  <p>Our 'Deep Rest Protocol' helps you recover in 7 days without quitting your job.</p>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
};

export default Lesson8_1;
