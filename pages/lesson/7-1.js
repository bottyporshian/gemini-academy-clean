import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Table, BarChart, Check, X, Wand2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Lesson7_1 = () => {
  return (
    <>
      <Head>
        <title>Lesson 7.1: Data Analysis Without Formulas | Gemini Academy</title>
        <meta name="description" content="Stop fighting with Excel. Learn how to clean data, analyze trends, and generate charts using plain English in Gemini." />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-[70%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
            <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
            <span>/</span>
            <span className="text-slate-900">Module 7</span>
            <span>/</span>
            <span className="text-slate-900">7.1 Data Analysis</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-wide uppercase mb-4">Module 7 • Data Analysis</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
              Stop Fighting With <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">Excel</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              You don't need to know VLOOKUP. You just need to know how to ask.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold mb-4 flex gap-2 items-center"><Table className="text-blue-500"/> The Problem</h3>
                <p className="text-slate-600 mb-4">
                   Messy data. Duplicates. Wrong formats.
                   <br/>
                   Usually, you spend hours fixing this manually.
                </p>
                <div className="p-3 bg-red-50 rounded border border-red-100 text-xs font-mono text-red-800">
                   John Doe, 555-1234, 2024-01-01<br/>
                   JOHN DOE, (555) 123-4444, Jan 1st<br/>
                   Jane Smith, ,, 2024/02/02
                </div>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold mb-4 flex gap-2 items-center"><Wand2 className="text-purple-500"/> The Fix</h3>
                <p className="text-slate-600 mb-4">
                   Upload the CSV to Gemini and say:
                </p>
                <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 font-bold text-purple-900 text-lg">
                   "Clean this data."
                </div>
             </div>
          </div>

          {/* SIMULATION: Data Cleaning */}
          <div className="mb-24 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative">
             <div className="text-center py-3 border-b border-slate-800 text-slate-400 text-xs font-mono uppercase tracking-widest">
                Gemini Data Analyst Simulation
             </div>
             <div className="p-8 md:p-12">
                <DataSimulation />
             </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-8 rounded-r-xl mb-16">
            <h3 className="text-xl font-bold text-green-900 mb-4">📊 The "Talk to Data" Prompt</h3>
            <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm font-mono text-sm text-slate-700">
              <p>
                "I am uploading a sales report. <br/><br/>
                1. <strong>Clean it:</strong> Remove duplicates and fix date formats.<br/>
                2. <strong>Analyze:</strong> Which product category has the highest growth month-over-month?<br/>
                3. <strong>Visualize:</strong> Create a bar chart showing sales by region."
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
            <Link href="/lesson/6-2" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Previous Lesson
            </Link>
            <Link href="/lesson/7-2" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20">
              Next: Forecasting <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

// --- DATA SIMULATION COMPONENT ---
const DataSimulation = () => {
  const [step, setStep] = useState(0); 

  useEffect(() => {
    const run = async () => {
      setStep(0); // Show messy table
      await new Promise(r => setTimeout(r, 2000));
      setStep(1); // User types "Clean this"
      await new Promise(r => setTimeout(r, 1000));
      setStep(2); // AI cleans (Green table)
      await new Promise(r => setTimeout(r, 3000));
      setStep(3); // User types "Visualize sales"
      await new Promise(r => setTimeout(r, 1000));
      setStep(4); // AI generates chart
      await new Promise(r => setTimeout(r, 4000));
      run();
    };
    run();
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl overflow-hidden shadow-2xl font-mono text-xs border border-slate-200">
       
       {/* Top Bar (Fake Excel) */}
       <div className="bg-green-700 text-white px-4 py-2 flex justify-between items-center">
          <div className="font-bold flex gap-2 items-center"><Table className="w-4 h-4"/> Sales_Data_Q3.csv</div>
          <div className="text-[10px] opacity-70">Read-Only</div>
       </div>

       {/* Content Area */}
       <div className="h-[300px] bg-slate-50 p-6 flex flex-col justify-center items-center relative overflow-hidden">
          
          <AnimatePresence mode="wait">
             {step === 0 && (
                <motion.div 
                   key="messy"
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -50 }}
                   className="w-full"
                >
                   <div className="text-center mb-2 text-red-500 font-bold uppercase tracking-wider text-[10px]">⚠️ Raw Data (Messy)</div>
                   <div className="bg-white border border-red-200 rounded shadow-sm overflow-hidden">
                      <div className="grid grid-cols-3 bg-red-50 border-b border-red-100 p-2 font-bold text-red-900">
                         <div>Name</div><div>Date</div><div>Amount</div>
                      </div>
                      <div className="p-2 border-b border-slate-100 text-slate-500">John Doe</div>
                      <div className="p-2 border-b border-slate-100 bg-red-50 text-red-600">JOHN DOE (Dup)</div>
                      <div className="p-2 border-b border-slate-100">Jane Smith</div>
                      <div className="p-2 border-b border-slate-100 text-red-600">NULL</div>
                   </div>
                </motion.div>
             )}

             {step === 2 && (
                <motion.div 
                   key="clean"
                   initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                   className="w-full"
                >
                   <div className="text-center mb-2 text-green-600 font-bold uppercase tracking-wider text-[10px] flex justify-center gap-2">
                      <Check className="w-3 h-3"/> Cleaned Data
                   </div>
                   <div className="bg-white border border-green-200 rounded shadow-sm overflow-hidden">
                      <div className="grid grid-cols-3 bg-green-50 border-b border-green-100 p-2 font-bold text-green-900">
                         <div>Name</div><div>Date</div><div>Amount</div>
                      </div>
                      <div className="p-2 border-b border-slate-100">John Doe</div>
                      <div className="p-2 border-b border-slate-100">Jane Smith</div>
                      <div className="p-2 border-b border-slate-100">Bob Jones</div>
                      <div className="p-2 border-b border-slate-100">Alice Wu</div>
                   </div>
                </motion.div>
             )}

             {step === 4 && (
                <motion.div 
                   key="chart"
                   initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                   className="w-full h-full flex flex-col justify-center items-center"
                >
                   <div className="text-center mb-4 text-blue-600 font-bold uppercase tracking-wider text-[10px]">
                      📈 Generated Chart: Sales Trend
                   </div>
                   <div className="flex items-end gap-4 h-32">
                      <motion.div initial={{ height: 0 }} animate={{ height: '40%' }} className="w-8 bg-blue-300 rounded-t"></motion.div>
                      <motion.div initial={{ height: 0 }} animate={{ height: '60%' }} className="w-8 bg-blue-400 rounded-t"></motion.div>
                      <motion.div initial={{ height: 0 }} animate={{ height: '30%' }} className="w-8 bg-blue-300 rounded-t"></motion.div>
                      <motion.div initial={{ height: 0 }} animate={{ height: '80%' }} className="w-8 bg-blue-500 rounded-t shadow-lg border-t-2 border-white"></motion.div>
                      <motion.div initial={{ height: 0 }} animate={{ height: '50%' }} className="w-8 bg-blue-400 rounded-t"></motion.div>
                   </div>
                   <div className="flex gap-4 text-[9px] text-slate-400 mt-2">
                      <span className="w-8 text-center">Jan</span>
                      <span className="w-8 text-center">Feb</span>
                      <span className="w-8 text-center">Mar</span>
                      <span className="w-8 text-center font-bold text-blue-600">Apr</span>
                      <span className="w-8 text-center">May</span>
                   </div>
                </motion.div>
             )}
          </AnimatePresence>

          {/* Prompt Overlay */}
          <AnimatePresence>
             {(step === 1 || step === 3) && (
                <motion.div 
                   initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}
                   className="absolute bottom-4 bg-slate-900 text-white px-4 py-2 rounded-full shadow-lg text-xs flex items-center gap-2"
                >
                   <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                   {step === 1 ? "Prompt: Clean this data and remove duplicates." : "Prompt: Visualize monthly sales trend."}
                </motion.div>
             )}
          </AnimatePresence>

       </div>
    </div>
  );
};

export default Lesson7_1;
