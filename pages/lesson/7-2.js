import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Table, BarChart, Check, X, Wand2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Lesson7_2 = () => {
  return (
    <>
      <Head>
        <title>Lesson 7.2: Forecasting & Reporting | Gemini Academy</title>
        <meta name="description" content="Use historical data to predict future trends and generate executive reports in seconds." />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
           <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-[75%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
             <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
             <span>/</span>
             <span className="text-slate-900">Module 7</span>
             <span>/</span>
             <span className="text-slate-900">7.2 Forecasting</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
             <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-wide uppercase mb-4">Module 7 • Data Analyst</span>
             <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
                Predict the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">Future</span>
             </h1>
             <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
                Turn past data into future strategy.
             </p>
          </motion.div>

          <div className="mb-24 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative">
             <div className="text-center py-3 border-b border-slate-800 text-slate-400 text-xs font-mono uppercase tracking-widest">
                Gemini Forecasting Simulation
             </div>
             <div className="p-8 md:p-12">
                <ForecastSimulation />
             </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-8 rounded-r-xl mb-16">
            <h3 className="text-xl font-bold text-green-900 mb-4">🔮 The Forecasting Prompt</h3>
            <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm font-mono text-sm text-slate-700">
              <p>
                "Based on the growth trend in this data for the last 6 months, project the likely numbers for the next 3 months.
                <br/><br/>
                List 3 key assumptions you are making."
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
             <Link href="/lesson/7-1" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Previous Lesson
            </Link>
            <Link href="/lesson/8-1" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20">
              Next Module: Marketing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const ForecastSimulation = () => {
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
               <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="self-end bg-teal-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm">
                  Project sales for Q4 based on Q1-Q3 data.
               </motion.div>
            )}
         </AnimatePresence>
         <AnimatePresence>
            {step >= 2 && (
               <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full h-48 bg-slate-900 rounded border border-slate-700 p-4 relative flex items-end justify-around">
                  <div className="absolute top-2 left-2 text-xs text-slate-400 uppercase font-bold tracking-widest">Sales Projection</div>
                  <div className="w-8 bg-blue-500 h-[40%] rounded-t opacity-50">Q1</div>
                  <div className="w-8 bg-blue-500 h-[50%] rounded-t opacity-70">Q2</div>
                  <div className="w-8 bg-blue-500 h-[60%] rounded-t">Q3</div>
                  <div className="w-8 border-2 border-dashed border-green-400 h-[75%] rounded-t bg-green-500/20 relative group">
                     <span className="text-green-400 font-bold text-xs absolute -top-5 left-0">Q4?</span>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
};

export default Lesson7_2;
