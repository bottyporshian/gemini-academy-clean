import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Lightbulb, Copy, CheckCircle, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Lesson2_1 = () => {
  return (
    <>
      <Head>
        <title>Lesson 2.1: The Perfect Prompt Formula | Gemini Academy</title>
        <meta name="description" content="Master the art of prompting. Learn the 4-part formula (Context, Task, Format, Persona) to get perfect results from Gemini every time." />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-[35%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
            <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
            <span>/</span>
            <span className="text-slate-900">2.1 Perfect Prompt Formula</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-wide uppercase mb-4">Module 2 • Prompt Mastery</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 pb-2">
              Stop Guessing. <br />
              <span className="text-slate-800">Use The Formula.</span>
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              "Garbage in, garbage out." If you want pro results, you need to speak the language of the model. 
              Here is the 4-part structure that works every time.
            </p>
          </motion.div>

          {/* The Formula Breakdown */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 ring-1 ring-slate-900/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full blur-[80px] opacity-20"></div>
               <h3 className="text-2xl font-bold mb-6 text-slate-900">The C.T.F.P. Method</h3>
               <div className="space-y-6">
                  <FormulaItem letter="C" title="Context" desc="Who are you? What is the background?" example="I am a fitness coach designing a plan for a beginner..." />
                  <FormulaItem letter="T" title="Task" desc="What exactly do you want done?" example="Create a 4-week workout schedule..." />
                  <FormulaItem letter="F" title="Format" desc="How should the output look?" example="Format it as a markdown table with columns for Date, Exercise, Sets, Reps..." />
                  <FormulaItem letter="P" title="Persona" desc="Who should the AI act like?" example="Act as an encouraging but strict personal trainer." />
               </div>
            </div>

            <div className="flex flex-col justify-center space-y-8">
               <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl">
                  <h4 className="text-lg font-bold mb-4 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-yellow-400" /> Bad Prompt</h4>
                  <p className="text-slate-400 font-mono text-sm bg-slate-800 p-4 rounded-xl border border-slate-700">
                    "Write a workout plan."
                  </p>
                  <p className="text-red-400 text-xs mt-2">Result: Generic, boring, unhelpful.</p>
               </div>

               <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-50 pattern-grid-lg"></div>
                  <h4 className="text-lg font-bold mb-4 flex items-center gap-2 relative z-10"><CheckCircle className="w-5 h-5 text-green-300" /> Pro Prompt</h4>
                  <p className="text-blue-50 font-mono text-sm bg-white/10 p-4 rounded-xl border border-white/20 relative z-10">
                    "Act as a strict personal trainer <strong>(P)</strong>. I am a busy dad with only 20 mins a day <strong>(C)</strong>. Create a 4-week bodyweight plan <strong>(T)</strong>. Format as a table <strong>(F)</strong>."
                  </p>
                  <p className="text-green-300 text-xs mt-2 relative z-10">Result: Tailored, actionable, perfect.</p>
               </div>
            </div>
          </div>

          {/* Interactive GIGO Example - High Contrast Redesign */}
          <div className="mb-24">
             <h3 className="text-4xl font-extrabold mb-10 text-center text-slate-900">Garbage In &rarr; Garbage Out</h3>
             
             <div className="flex flex-col md:flex-row gap-8 items-stretch">
                
                {/* The WRONG Way (High Contrast) */}
                <div className="flex-1 bg-red-50 border-4 border-red-500 rounded-3xl p-8 relative overflow-hidden shadow-xl">
                   <div className="absolute top-0 right-0 bg-red-500 text-white font-bold px-4 py-2 rounded-bl-xl uppercase tracking-widest text-sm">
                      Don&apos;t Do This
                   </div>
                   <div className="mb-6 flex items-center gap-4">
                      <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center border-4 border-red-500 text-red-600">
                         <X className="w-8 h-8" />
                      </div>
                      <h4 className="text-2xl font-bold text-red-900">The Lazy Prompt</h4>
                   </div>
                   
                   <div className="bg-white p-6 rounded-2xl border-2 border-red-200 shadow-inner mb-6">
                      <p className="text-xs text-red-400 font-bold uppercase mb-2">You Type:</p>
                      <p className="text-xl font-medium text-slate-400 italic">
                        &quot;Write a marketing email.&quot;
                      </p>
                   </div>

                   <div className="bg-red-100 p-6 rounded-2xl border border-red-200">
                      <p className="text-xs text-red-800 font-bold uppercase mb-2">Gemini Replies (Generic):</p>
                      <p className="font-mono text-sm text-red-900 leading-relaxed">
                         Subject: Product Offer<br/>
                         Dear Customer,<br/>
                         We have a new product available. It is high quality and good price. Please buy it at our website.<br/>
                         Sincerely, The Team.
                      </p>
                   </div>
                   <div className="mt-6 text-center">
                      <span className="inline-block bg-red-600 text-white font-bold px-6 py-2 rounded-full text-sm shadow-md">
                         ❌ Result: 0% Sales
                      </span>
                   </div>
                </div>

                {/* The RIGHT Way (High Contrast) */}
                <div className="flex-1 bg-green-50 border-4 border-green-500 rounded-3xl p-8 relative overflow-hidden shadow-xl">
                   <div className="absolute top-0 right-0 bg-green-500 text-white font-bold px-4 py-2 rounded-bl-xl uppercase tracking-widest text-sm">
                      Do This Instead
                   </div>
                   <div className="mb-6 flex items-center gap-4">
                      <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center border-4 border-green-500 text-green-700">
                         <CheckCircle className="w-8 h-8" />
                      </div>
                      <h4 className="text-2xl font-bold text-green-900">The Pro Prompt</h4>
                   </div>
                   
                   <div className="bg-white p-6 rounded-2xl border-2 border-green-200 shadow-inner mb-6">
                      <p className="text-xs text-green-600 font-bold uppercase mb-2">You Type (The Formula):</p>
                      <p className="text-lg font-medium text-slate-800">
                        &quot;Act as an <strong>Expert Copywriter</strong>. Write a sales email for <strong>Busy Moms</strong> about organic coffee. Hook: <strong>'Tired of reheating your cup?'</strong>&quot;
                      </p>
                   </div>

                   <div className="bg-green-100 p-6 rounded-2xl border border-green-200 relative">
                      <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm animate-bounce">
                         Magic! ✨
                      </div>
                      <p className="text-xs text-green-800 font-bold uppercase mb-2">Gemini Replies (Gold):</p>
                      <p className="font-sans text-sm text-green-900 leading-relaxed">
                         <strong>Subject:</strong> The 5 minutes of peace you deserve ☕️<br/><br/>
                         Hey Sarah,<br/>
                         We know the drill. You pour a coffee at 7 AM. You actually drink it at 2 PM (cold).<br/>
                         Meet <strong>MomFuel</strong>. Smooth, organic, and still tastes amazing after 3 reheats.
                      </p>
                   </div>
                   <div className="mt-6 text-center">
                      <span className="inline-block bg-green-600 text-white font-bold px-6 py-2 rounded-full text-sm shadow-md">
                         ✅ Result: Record Sales!
                      </span>
                   </div>
                </div>

             </div>
          </div>

          {/* Download Pack */}
          <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
                   <Copy className="w-6 h-6 text-blue-400" /> Steal Our Best Prompts
                </h3>
                <p className="text-slate-400 text-sm max-w-md">
                   Don&apos;t start from scratch. Download our "Swipe File" with 50+ copy-paste prompts for Marketing, Coding, and Productivity.
                </p>
             </div>
             <div className="flex flex-col gap-3 w-full md:w-auto">
                <a href="/prompts.md" download className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/20 text-center flex items-center justify-center gap-2">
                   Download Prompt Pack <span className="bg-blue-800 text-[10px] px-2 py-0.5 rounded text-blue-200">Free</span>
                </a>
                <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest">
                   Coming Soon: <span className="text-slate-400 border-b border-slate-700">Chrome Extension</span>
                </p>
             </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-slate-200 mt-16">
            <Link href="/lesson/1-2" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Previous Lesson
            </Link>
            <Link href="/lesson/2-2" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20 group">
              Next: Advanced Techniques <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const FormulaItem = ({ letter, title, desc, example }) => (
   <div className="flex gap-4">
      <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-xl text-slate-700 shrink-0 border border-slate-200">
         {letter}
      </div>
      <div>
         <h4 className="font-bold text-slate-900">{title}</h4>
         <p className="text-sm text-slate-600 mb-1">{desc}</p>
         <p className="text-xs text-slate-400 italic">Example: "{example}"</p>
      </div>
   </div>
);

export default Lesson2_1;