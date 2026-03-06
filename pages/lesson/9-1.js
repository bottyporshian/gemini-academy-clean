import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Table, BarChart, Check, X, Wand2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Lesson9_1 = () => {
  return (
    <>
      <Head>
        <title>Lesson 9.1: Workspace Integration | Gemini Academy</title>
        <meta name="description" content="Connect Gemini to Gmail, Docs, and Drive for ultimate productivity." />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
           <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-[85%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
             <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
             <span>/</span>
             <span className="text-slate-900">Module 9</span>
             <span>/</span>
             <span className="text-slate-900">9.1 Workspace</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
             <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-wide uppercase mb-4">Module 9 • Ecosystem</span>
             <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
                Your Inbox on <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Autopilot</span>
             </h1>
             <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
                Connect your life. Gemini can see your Gmail, Docs, and Drive.
             </p>
          </motion.div>

          <div className="mb-24 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative">
             <div className="text-center py-3 border-b border-slate-800 text-slate-400 text-xs font-mono uppercase tracking-widest">
                Gemini Workspace Simulation
             </div>
             <div className="p-8 md:p-12">
                <WorkspaceSimulation />
             </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-600 p-8 rounded-r-xl mb-16">
            <h3 className="text-xl font-bold text-orange-900 mb-4">📧 The Cross-App Prompt</h3>
            <div className="bg-white p-4 rounded-lg border border-orange-200 shadow-sm font-mono text-sm text-slate-700">
              <p>
                "<strong>@Gmail</strong> Find the email from 'Travel Agent' sent last week and extract the flight dates.
                <br/><br/>
                Then <strong>@Drive</strong> summarize the document 'Project Alpha Report' into 3 bullet points."
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
             <Link href="/lesson/8-2" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Previous Lesson
            </Link>
            <Link href="/lesson/9-2" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20">
              Next: Extensions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const WorkspaceSimulation = () => {
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
               <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="self-end bg-orange-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm">
                  @Gmail Find 'Project Budget' email from Moti.
               </motion.div>
            )}
         </AnimatePresence>
         <AnimatePresence>
            {step >= 2 && (
               <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full bg-slate-800 rounded p-4 border border-slate-700 text-slate-300">
                  <div className="flex items-center gap-2 mb-2 text-orange-400 font-bold text-xs uppercase tracking-wider">
                     <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span> Found 1 Email
                  </div>
                  <div className="bg-slate-900 p-3 rounded border border-slate-700 mb-2">
                     <div className="font-bold text-white">Subject: Project Budget Approval</div>
                     <div className="text-xs text-slate-500 mb-2">From: Moti Porshian • Yesterday</div>
                     <div className="text-xs text-slate-400 line-clamp-2">"Hi Team, I've approved the budget for Q3. Please see the attached breakdown..."</div>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 text-xs font-bold underline">Summarize this email</button>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
};

export default Lesson9_1;
