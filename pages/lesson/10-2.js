import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Table, BarChart, Check, X, Wand2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Lesson10_2 = () => {
  return (
    <>
      <Head>
        <title>Lesson 10.2: Final Project | Gemini Academy</title>
        <meta name="description" content="Build your own 'Life OS' dashboard with your top 5 reusable prompts." />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
           <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-full"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
             <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
             <span>/</span>
             <span className="text-slate-900">Module 10</span>
             <span>/</span>
             <span className="text-slate-900">10.2 Final Project</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
             <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold tracking-wide uppercase mb-4">Module 10 • Master Class</span>
             <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Life OS</span> Project
             </h1>
             <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
                Don't just use AI. Build a system.
             </p>
          </motion.div>

          <div className="mb-24 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative">
             <div className="text-center py-3 border-b border-slate-800 text-slate-400 text-xs font-mono uppercase tracking-widest">
                Gemini Life OS Dashboard
             </div>
             <div className="p-8 md:p-12">
                <LifeOSSimulation />
             </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-8 rounded-r-xl mb-16">
            <h3 className="text-xl font-bold text-purple-900 mb-4">🏆 Your Final Assignment</h3>
            <div className="bg-white p-4 rounded-lg border border-purple-200 shadow-sm font-mono text-sm text-slate-700">
              <p>
                Create a text file called <strong>My_Gemini_System.txt</strong> with your top 5 prompts:
                <br/><br/>
                1. <strong>Morning Planner:</strong> "Plan my day..."<br/>
                2. <strong>Email Responder:</strong> "Reply to this..."<br/>
                3. <strong>Content Drafter:</strong> "Write a post..."<br/>
                4. <strong>Meeting Summarizer:</strong> "Summarize notes..."<br/>
                5. <strong>Weekend Planner:</strong> "Find activities..."
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
             <Link href="/lesson/10-1" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Previous Lesson
            </Link>
            <Link href="/" className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all shadow-lg hover:shadow-purple-900/20">
              🎓 Graduate & Return Home <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const LifeOSSimulation = () => {
   const [active, setActive] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setActive((prev) => (prev + 1) % 5);
      }, 2000);
      return () => clearInterval(interval);
   }, []);

   const apps = [
      { name: "Daily Planner", icon: "📅", color: "bg-blue-500" },
      { name: "Email Triage", icon: "📧", color: "bg-green-500" },
      { name: "Content Engine", icon: "✍️", color: "bg-pink-500" },
      { name: "Meeting Notes", icon: "📝", color: "bg-orange-500" },
      { name: "Travel Agent", icon: "✈️", color: "bg-teal-500" },
   ];

   return (
      <div className="w-full max-w-2xl mx-auto bg-slate-950 rounded-xl overflow-hidden shadow-2xl font-mono text-sm border border-slate-800 p-8 h-[300px] flex items-center justify-center">
         <div className="grid grid-cols-5 gap-4 w-full">
            {apps.map((app, i) => (
               <motion.div 
                  key={i}
                  animate={active === i ? { scale: 1.1, y: -10, filter: 'brightness(1.2)' } : { scale: 1, y: 0, filter: 'brightness(0.7)' }}
                  className="flex flex-col items-center gap-3 transition-all cursor-pointer"
               >
                  <div className={`w-16 h-16 ${app.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg border-b-4 border-black/20`}>
                     {app.icon}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${active === i ? 'text-white' : 'text-slate-600'}`}>
                     {app.name}
                  </span>
                  {active === i && (
                     <motion.div layoutId="underline" className="w-12 h-1 bg-white rounded-full mt-1" />
                  )}
               </motion.div>
            ))}
         </div>
      </div>
   );
};

export default Lesson10_2;
