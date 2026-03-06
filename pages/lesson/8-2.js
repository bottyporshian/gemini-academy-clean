import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, PenTool, Layout, AlignLeft, CheckCircle, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Lesson8_2 = () => {
  return (
    <>
      <Head>
        <title>Lesson 8.2: Writing Long-Form Content | Gemini Academy</title>
        <meta name="description" content="Stop writing from scratch. Learn the 'Outline First' method to generate high-quality, SEO-optimized blog posts in minutes." />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-[80%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
            <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
            <span>/</span>
            <span className="text-slate-900">Module 8</span>
            <span>/</span>
            <span className="text-slate-900">8.2 Content Writing</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold tracking-wide uppercase mb-4">Module 8 • Content Marketing</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
              Write a Blog Post in <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">10 Minutes</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              The secret isn't asking for the whole article at once. It's building it, brick by brick.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold mb-4 flex gap-2 items-center"><PenTool className="text-red-500"/> Mistake #1</h3>
                <p className="text-slate-600 mb-4">
                   "Write me a blog post about X."
                   <br/>
                   <strong>Result:</strong> Generic, boring, robotic fluff.
                </p>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold mb-4 flex gap-2 items-center"><Layout className="text-blue-500"/> The Pro Method</h3>
                <p className="text-slate-600 mb-4">
                   1. Generate Outline<br/>
                   2. Write Section by Section<br/>
                   3. Add Human Stories<br/>
                   4. Optimize for SEO
                </p>
             </div>
          </div>

          {/* SIMULATION: Writing Workflow */}
          <div className="mb-24 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative">
             <div className="text-center py-3 border-b border-slate-800 text-slate-400 text-xs font-mono uppercase tracking-widest">
                Gemini Content Writer Simulation
             </div>
             <div className="p-8 md:p-12">
                <WritingSimulation />
             </div>
          </div>

          <div className="bg-pink-50 border-l-4 border-pink-600 p-8 rounded-r-xl mb-16">
            <h3 className="text-xl font-bold text-pink-900 mb-4">✍️ The "Outline First" Prompt</h3>
            <div className="bg-white p-4 rounded-lg border border-pink-200 shadow-sm font-mono text-sm text-slate-700">
              <p>
                "Create a detailed blog post outline for the topic: <strong>[TOPIC]</strong>.
                <br/><br/>
                Include:
                <br/>- H1 Headline (Catchy)
                <br/>- 5 H2 Subheaders
                <br/>- Bullet points for what goes in each section.
                <br/>- SEO Keywords to target."
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
             <Link href="/lesson/8-1" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Previous Lesson
            </Link>
            <Link href="/lesson/9-1" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20">
              Next: Workspace <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

// --- WRITING SIMULATION COMPONENT ---
const WritingSimulation = () => {
  const [step, setStep] = useState(0); 

  useEffect(() => {
    const run = async () => {
      setStep(0); // Blank page
      await new Promise(r => setTimeout(r, 1000));
      setStep(1); // Prompt: "Create Outline"
      await new Promise(r => setTimeout(r, 1000));
      setStep(2); // AI: Outline appears
      await new Promise(r => setTimeout(r, 3000));
      setStep(3); // Prompt: "Write Section 1"
      await new Promise(r => setTimeout(r, 1000));
      setStep(4); // AI: Text fills in
      await new Promise(r => setTimeout(r, 3000));
      setStep(5); // Prompt: "Optimize SEO"
      await new Promise(r => setTimeout(r, 1000));
      setStep(6); // AI: Keywords highlight
      await new Promise(r => setTimeout(r, 4000));
      run();
    };
    run();
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl overflow-hidden shadow-2xl font-serif text-sm border border-slate-200 flex">
       
       {/* Sidebar (Document Structure) */}
       <div className="w-1/4 bg-slate-50 border-r border-slate-200 p-4 hidden md:block">
          <div className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-wider">Structure</div>
          <div className="space-y-2">
             <div className="h-2 w-3/4 bg-slate-300 rounded"></div>
             <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
             <div className="h-2 w-2/3 bg-slate-200 rounded"></div>
             <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
          </div>
       </div>

       {/* Editor Area */}
       <div className="flex-1 p-8 h-[400px] overflow-y-auto relative bg-white">
          
          <AnimatePresence>
             {(step >= 2) && (
                <motion.div 
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                   className="space-y-6"
                >
                   {/* Headline */}
                   <motion.h1 
                      initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                      className="text-3xl font-bold text-slate-900"
                   >
                      The Ultimate Guide to Deep Work
                   </motion.h1>

                   {/* Outline (Grey text initially) */}
                   <div className="space-y-4">
                      <div className="text-slate-400 text-xs font-mono uppercase tracking-widest border-b border-slate-100 pb-2">Outline Generated</div>
                      
                      <h2 className="text-xl font-bold text-slate-800">1. What is Deep Work?</h2>
                      
                      {/* Section 1 Content */}
                      {(step >= 4) ? (
                         <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="text-slate-600 leading-relaxed space-y-3"
                         >
                            <p>
                               In an age of <span className={step === 6 ? "bg-yellow-200 font-bold px-1 rounded transition-colors" : ""}>constant distraction</span>, the ability to focus without interruption is a superpower.
                            </p>
                            <p>
                               Deep work is not just about working harder; it's about working smarter. It allows you to master <span className={step === 6 ? "bg-green-200 font-bold px-1 rounded transition-colors" : ""}>cognitive tasks</span> quickly and produce high-quality results in less time.
                            </p>
                         </motion.div>
                      ) : (
                         <div className="text-slate-300 italic">Writing Section 1...</div>
                      )}

                      <h2 className="text-xl font-bold text-slate-800 mt-6">2. The 4 Rules of Focus</h2>
                      <ul className="list-disc pl-5 text-slate-400">
                         <li>Work deeply</li>
                         <li>Embrace boredom</li>
                         <li>Quit social media</li>
                         <li>Drain the shallows</li>
                      </ul>
                   </div>
                </motion.div>
             )}
          </AnimatePresence>

          {/* User Prompt Overlay */}
          <AnimatePresence>
             {(step === 1 || step === 3 || step === 5) && (
                <motion.div 
                   initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
                   className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-2xl text-xs font-mono flex items-center gap-3 w-max z-20"
                >
                   <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                   {step === 1 && "Prompt: Create detailed outline."}
                   {step === 3 && "Prompt: Write Section 1 based on outline."}
                   {step === 5 && "Prompt: Highlight SEO keywords."}
                </motion.div>
             )}
          </AnimatePresence>

       </div>
    </div>
  );
};

export default Lesson8_2;
