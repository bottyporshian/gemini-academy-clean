import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Play, Upload, MessageSquare, Youtube, Copy, Check, Search, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Lesson3_2 = () => {
  return (
    <>
      <Head>
        <title>Lesson 3.2: Video Analysis & Summary | Gemini Academy</title>
        <meta name="description" content="Stop watching hours of video. Learn how to use Gemini to summarize YouTube videos, find key moments, and extract data instantly." />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-[65%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
            <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
            <span>/</span>
            <Link href="/lesson/3-1" className="hover:text-blue-600 transition-colors">3.1 Images</Link>
            <span>/</span>
            <span className="text-slate-900">3.2 Video Analysis</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold tracking-wide uppercase mb-4">Module 3 • Multimedia</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 pb-2">
              Don't Watch. <br />
              <span className="text-slate-800">Just Ask.</span>
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              Gemini can watch a 3-hour lecture in 30 seconds. It doesn't just read the transcript; it <strong>sees</strong> the video.
            </p>
          </motion.div>

          {/* THE LIVE SIMULATION VIDEO */}
          <div className="mb-24">
             <VideoWorkflowSimulation />
          </div>

          {/* The Killer Feature */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
             <div>
                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                   <Youtube className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-slate-900">The YouTube Superpower</h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                   Imagine you need to learn a new skill from a tutorial, but it's 40 minutes long and full of fluff.
                   <br/><br/>
                   With Gemini, you paste the link and ask: "What are the 5 steps mentioned?" or "At what timestamp does he explain the installation?"
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl">
                   <p className="font-bold text-red-900 text-sm">Prerequisite:</p>
                   <p className="text-red-800 text-sm">Make sure the "Google Workspace" extension is active in Gemini settings.</p>
                </div>
             </div>
             <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-200 relative">
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">LIVE DEMO</div>
                <div className="aspect-video bg-slate-900 rounded-xl mb-4 flex items-center justify-center text-slate-500">
                   <Play className="w-12 h-12 opacity-50" />
                </div>
                <div className="space-y-3">
                   <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 shrink-0"></div>
                      <div className="bg-slate-100 p-3 rounded-lg text-sm w-full">
                         <p className="text-slate-700">Summarize this video: https://youtu.be/...</p>
                      </div>
                   </div>
                   <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shrink-0"></div>
                      <div className="bg-white border border-blue-100 p-3 rounded-lg text-sm w-full shadow-sm">
                         <p className="text-slate-800 font-bold mb-2">Here is a summary of the video:</p>
                         <ul className="list-disc list-inside space-y-1 text-slate-600">
                            <li><strong>00:00</strong> - Introduction to the topic.</li>
                            <li><strong>05:23</strong> - The main problem defined.</li>
                            <li><strong>12:40</strong> - The 3-step solution revealed.</li>
                         </ul>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Use Cases */}
          <div className="mb-24">
             <h3 className="text-3xl font-bold mb-8 text-center text-slate-900">3 Ways to Use This Today</h3>
             <div className="grid md:grid-cols-3 gap-6">
                <UseCaseCard 
                   icon={<MessageSquare className="w-5 h-5 text-blue-600" />}
                   title="Lectures & Webinars"
                   desc="Get the key takeaways without sitting through the whole hour."
                />
                <UseCaseCard 
                   icon={<Upload className="w-5 h-5 text-green-600" />}
                   title="Review Your Own Zoom"
                   desc="Upload a recording of your meeting to Drive and ask: 'What did we agree on?'"
                />
                <UseCaseCard 
                   icon={<Play className="w-5 h-5 text-purple-600" />}
                   title="Find Specifics"
                   desc="Ask: 'What brand of shoes is the runner wearing in this clip?' (Gemini sees pixels!)"
                />
             </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
            <Link href="/lesson/3-1" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Previous
            </Link>
            <Link href="/lesson/4-1" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20 group">
              Next Module: Workspace <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const UseCaseCard = ({ icon, title, desc }) => (
   <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:translate-y-1 transition-transform">
      <div className="mb-4 bg-slate-50 w-10 h-10 rounded-lg flex items-center justify-center border border-slate-100">
         {icon}
      </div>
      <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-sm text-slate-600">{desc}</p>
   </div>
);

// --- THE ANIMATION COMPONENT ---
const VideoWorkflowSimulation = () => {
  const [step, setStep] = useState(0); 

  useEffect(() => {
    const cycle = async () => {
      // 0: Start (YouTube)
      setStep(0);
      await new Promise(r => setTimeout(r, 1000));
      
      // 1: Mouse moves to URL bar & Highlights
      setStep(1);
      await new Promise(r => setTimeout(r, 1500));
      
      // 2: Copy feedback
      setStep(2);
      await new Promise(r => setTimeout(r, 1000));

      // 3: Switch Tab (Mouse moves to Gemini Tab)
      setStep(3);
      await new Promise(r => setTimeout(r, 1000));

      // 4: Show Gemini Interface (empty)
      setStep(4);
      await new Promise(r => setTimeout(r, 1000));

      // 5: Mouse moves to input & Paste URL
      setStep(5);
      await new Promise(r => setTimeout(r, 1000));

      // 6: Type prompt
      setStep(6);
      await new Promise(r => setTimeout(r, 2000));

      // 7: Mouse moves to Send & Click
      setStep(7);
      await new Promise(r => setTimeout(r, 500));

      // 8: Show Result
      setStep(8);
      await new Promise(r => setTimeout(r, 5000));
      
      cycle();
    };
    cycle();
  }, []);

  // Cursor Position Logic based on step
  const getCursorPos = () => {
     switch(step) {
        case 0: return { top: '50%', left: '50%' }; // Center
        case 1: return { top: '15px', left: '150px' }; // URL Bar
        case 2: return { top: '15px', left: '150px' }; // Stay on URL
        case 3: return { top: '-30px', left: '120px' }; // Gemini Tab (simulated)
        case 4: return { top: '50%', left: '50%' }; // Center Gemini
        case 5: return { top: '85%', left: '10%' }; // Input Box
        case 6: return { top: '85%', left: '40%' }; // Typing...
        case 7: return { top: '85%', left: '95%' }; // Send Button
        case 8: return { top: '60%', left: '80%' }; // Idle
        default: return { top: '50%', left: '50%' };
     }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto h-96 bg-slate-900 rounded-3xl shadow-2xl border-4 border-slate-800 overflow-hidden flex flex-col cursor-none">
      
      {/* Tab Bar Simulation */}
      <div className="h-12 bg-slate-800 flex items-end px-4 gap-2 border-b border-slate-700">
         {/* YouTube Tab */}
         <div className={`px-4 py-2 rounded-t-lg text-xs font-bold flex items-center gap-2 transition-colors ${step <= 3 ? 'bg-white text-slate-900' : 'bg-slate-700 text-slate-400'}`}>
            <Youtube className="w-3 h-3 text-red-500" /> YouTube
         </div>
         {/* Gemini Tab */}
         <div className={`px-4 py-2 rounded-t-lg text-xs font-bold flex items-center gap-2 transition-colors ${step >= 4 ? 'bg-white text-slate-900' : 'bg-slate-700 text-slate-400'}`}>
            <Sparkles className="w-3 h-3 text-blue-500" /> Gemini
         </div>
      </div>

      {/* Browser Bar */}
      <div className="h-10 bg-slate-100 flex items-center px-4 gap-2 border-b border-slate-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 ml-4 bg-white rounded-md h-6 flex items-center px-3 text-xs text-slate-500 border border-slate-200 overflow-hidden relative">
           {step <= 3 ? (
              <span className="flex items-center gap-2">youtube.com/watch?v=dQw4w9WgXcQ</span>
           ) : (
              <span className="flex items-center gap-2">gemini.google.com</span>
           )}
           
           {/* Address Bar Highlight */}
           {step === 1 && (
              <motion.div 
                layoutId="highlight"
                className="absolute inset-0 bg-blue-500/20"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
              />
           )}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 relative bg-white overflow-hidden">
        <AnimatePresence mode="wait">
          {step <= 3 ? (
            <motion.div 
              key="youtube"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white flex flex-col"
            >
               {/* YouTube Video Player */}
               <div className="flex-1 bg-black relative flex items-center justify-center group">
                  <Play className="w-16 h-16 text-white opacity-80" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
                  <div className="absolute bottom-4 left-4 text-white text-sm font-bold">1 Hour Lecture on Quantum Physics</div>
               </div>
               
               {/* Copy Feedback */}
               {step === 2 && (
                  <motion.div 
                     initial={{ scale: 0.8, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     className="absolute top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 z-20"
                  >
                     <Copy className="w-4 h-4" /> Copied URL
                  </motion.div>
               )}
            </motion.div>
          ) : (
            <motion.div 
              key="gemini"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white p-6 flex flex-col justify-end"
            >
               {/* Result Area */}
               <div className="flex-1 overflow-hidden p-2">
                  {step >= 8 && (
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-slate-700 space-y-2"
                     >
                        <div className="flex items-center gap-2 font-bold text-blue-700 mb-2">
                           <Sparkles className="w-4 h-4" /> Video Summary
                        </div>
                        <ul className="list-disc list-inside pl-1 space-y-1 text-xs md:text-sm">
                           <li><strong>05:23</strong> - The speaker defines "Superposition".</li>
                           <li><strong>12:40</strong> - Key formula explained.</li>
                           <li><strong>45:00</strong> - Q&A Session summary.</li>
                        </ul>
                     </motion.div>
                  )}
               </div>

               {/* Input Area */}
               <div className="mt-2 border border-slate-300 rounded-full p-2 flex items-center gap-2 bg-white relative z-10">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                     <Upload className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1 text-sm text-slate-600 font-mono truncate">
                     {step === 5 && <span className="text-slate-400">Paste URL...</span>}
                     {step >= 6 && (
                        <span className="text-slate-800">Summarize this: https://youtu.be/...</span>
                     )}
                  </div>
                  <motion.div 
                     animate={step === 7 ? { scale: 0.9 } : { scale: 1 }}
                     className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${step >= 7 ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}
                  >
                     <ArrowRight className="w-4 h-4" />
                  </motion.div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* THE CURSOR */}
        <motion.div
           className="absolute z-50 pointer-events-none drop-shadow-xl"
           animate={getCursorPos()}
           transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19823L11.4818 12.3673H5.65376Z" fill="black" stroke="white" strokeWidth="1"/>
           </svg>
        </motion.div>

      </div>
    </div>
  );
};

// Helper for typing effect
const Typewriter = ({ text }) => {
   const [display, setDisplay] = useState('');
   useEffect(() => {
      let i = 0;
      const timer = setInterval(() => {
         setDisplay(text.substring(0, i));
         i++;
         if (i > text.length) clearInterval(timer);
      }, 30);
      return () => clearInterval(timer);
   }, [text]);
   return <span>{display}</span>;
}

export default Lesson3_2;