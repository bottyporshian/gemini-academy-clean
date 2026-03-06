import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Smartphone, Youtube, MapPin, Zap, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LessonAndroidGemini = () => {
  return (
    <>
      <Head>
        <title>Gemini for Android: The New Assistant | Gemini Academy</title>
        <meta name="description" content="Replace Google Assistant with Gemini on Android. Learn how to use the 'Overlay' feature to analyze your screen instantly." />
        <meta name="keywords" content="android gemini integration, gemini on android, replace google assistant with gemini, gemini overlay tutorial, gemini app android features" />
        <meta property="og:title" content="Gemini on Android: The Ultimate Guide (2026)" />
        <meta property="og:description" content="Turn your phone into an AI powerhouse. Learn the new Gemini Overlay features." />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
          <div className="h-full bg-gradient-to-r from-green-500 to-teal-500 w-[100%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
            <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
            <span>/</span>
            <span className="text-slate-900">Bonus</span>
            <span>/</span>
            <span className="text-slate-900">Android Integration</span>
          </div>

          {/* Lesson Header */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-wide uppercase mb-4">Bonus Module • Mobile AI</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
              Goodbye Assistant, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">Hello Gemini</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              Your Android phone just got a brain upgrade. Learn how to use Gemini <strong>on top of any app</strong>.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                   <Zap className="text-green-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">The "Overlay" Power</h3>
                <p className="text-slate-600">
                   You don't need to switch apps. Just hold the power button (or say "Hey Google"), and Gemini pops up <strong>over</strong> what you're doing.
                </p>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                   <Smartphone className="text-blue-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Screen Awareness</h3>
                <p className="text-slate-600">
                   Gemini can "see" your screen. Ask questions about a video, a map, or an email instantly.
                </p>
             </div>
          </div>

          {/* SIMULATION: Android Overlay */}
          <div className="mb-24 bg-slate-900 rounded-[3rem] p-4 max-w-sm mx-auto shadow-2xl border-4 border-slate-800 relative overflow-hidden">
             {/* Phone Notch/Island */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-50"></div>
             
             {/* Screen Content */}
             <div className="bg-black rounded-[2.5rem] overflow-hidden h-[600px] relative">
                <AndroidSimulation />
             </div>

             {/* Power Button Indicator */}
             <div className="absolute right-[-6px] top-32 w-1 h-12 bg-slate-700 rounded-r-md"></div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-8 rounded-r-xl mb-16">
            <h3 className="text-xl font-bold text-green-900 mb-4">📱 Try It Now</h3>
            <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm font-mono text-sm text-slate-700">
              <p>
                1. Open a YouTube video on your phone.
                <br/>2. Long-press the Power button.
                <br/>3. Tap "Add this screen".
                <br/>4. Ask: <strong>"Summarize this video for me."</strong>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
            <Link href="/syllabus" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Syllabus
            </Link>
            <Link href="/" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20">
              Go Home <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

// --- ANDROID SIMULATION COMPONENT ---
const AndroidSimulation = () => {
  const [step, setStep] = useState(0); 

  useEffect(() => {
    const cycle = async () => {
      setStep(0); // Normal App Usage (YouTube)
      await new Promise(r => setTimeout(r, 2000));
      
      setStep(1); // Long Press Power (Visual Cue)
      await new Promise(r => setTimeout(r, 1000));

      setStep(2); // Gemini Overlay Appears
      await new Promise(r => setTimeout(r, 1000));

      setStep(3); // User Asks Question
      await new Promise(r => setTimeout(r, 2000));

      setStep(4); // Gemini Answers
      await new Promise(r => setTimeout(r, 5000));
      
      cycle();
    };
    cycle();
  }, []);

  return (
    <div className="relative w-full h-full bg-black text-white font-sans overflow-hidden">
      
      {/* BACKGROUND APP: YouTube */}
      <div className={`absolute inset-0 bg-[#0f0f0f] transition-transform duration-500 ${step >= 2 ? 'scale-95 opacity-50 blur-[2px]' : 'scale-100 opacity-100'}`}>
         {/* Fake Video Player */}
         <div className="w-full aspect-video bg-slate-800 mt-12 relative group">
            <div className="absolute inset-0 flex items-center justify-center">
               <Youtube className="w-12 h-12 text-red-600" />
            </div>
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-700">
               <div className="h-full bg-red-600 w-[45%]"></div>
            </div>
         </div>
         
         {/* Video Info */}
         <div className="p-4 space-y-3">
            <div className="h-4 bg-slate-800 rounded w-3/4"></div>
            <div className="h-3 bg-slate-800 rounded w-1/2"></div>
            <div className="flex gap-4 mt-4">
               <div className="w-8 h-8 rounded-full bg-slate-700"></div>
               <div className="flex-1 space-y-2">
                  <div className="h-2 bg-slate-800 rounded w-full"></div>
                  <div className="h-2 bg-slate-800 rounded w-5/6"></div>
               </div>
            </div>
         </div>
      </div>

      {/* POWER BUTTON PRESS INDICATOR */}
      <AnimatePresence>
         {step === 1 && (
            <motion.div 
               initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
               className="absolute top-1/2 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white border border-white/10"
            >
               Long Press Power
            </motion.div>
         )}
      </AnimatePresence>

      {/* GEMINI OVERLAY PANEL */}
      <AnimatePresence>
         {step >= 2 && (
            <motion.div 
               initial={{ y: "100%" }} animate={{ y: "40%" }} exit={{ y: "100%" }}
               transition={{ type: "spring", damping: 25, stiffness: 200 }}
               className="absolute bottom-0 left-0 right-0 h-full bg-[#1e1e1e] rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-white/10 p-6 flex flex-col"
            >
               {/* Handle */}
               <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-6"></div>

               {/* Header */}
               <div className="flex items-center gap-2 mb-6">
                  <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" className="w-6 h-6" alt="Gemini"/>
                  <span className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Gemini</span>
               </div>

               {/* Chat Area */}
               <div className="flex-1 overflow-hidden relative">
                  <AnimatePresence mode="wait">
                     {step === 2 && (
                        <motion.div 
                           initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                           className="text-slate-400 text-sm text-center mt-8"
                        >
                           Listening...
                        </motion.div>
                     )}

                     {step === 3 && (
                        <motion.div 
                           initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                           className="bg-[#2d2d2d] p-3 rounded-2xl rounded-tr-sm self-end text-sm mb-4 inline-block max-w-[90%]"
                        >
                           Summarize this video.
                        </motion.div>
                     )}

                     {step === 4 && (
                        <motion.div 
                           initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
                           className="space-y-3"
                        >
                           <div className="bg-[#2d2d2d] p-3 rounded-2xl rounded-tr-sm self-end text-sm inline-block max-w-[90%] text-slate-300 opacity-50">
                              Summarize this video.
                           </div>
                           <div className="text-sm leading-relaxed text-slate-200">
                              <p className="mb-2">This video explains <strong>Quantum Physics</strong> for beginners.</p>
                              <ul className="list-disc pl-4 space-y-1 text-slate-300">
                                 <li>Particles can be waves.</li>
                                 <li>Observation changes reality.</li>
                                 <li>Schrödinger's Cat thought experiment.</li>
                              </ul>
                           </div>
                           <div className="flex gap-2 mt-4">
                              <button className="bg-[#333] px-3 py-1 rounded-full text-xs hover:bg-[#444]">Explain more</button>
                              <button className="bg-[#333] px-3 py-1 rounded-full text-xs hover:bg-[#444]">Copy text</button>
                           </div>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>

               {/* Mic Button Pulse */}
               {step === 2 && (
                  <div className="absolute bottom-8 right-8">
                     <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-blue-900/50">
                        <div className="w-4 h-4 bg-white rounded-sm"></div>
                     </div>
                  </div>
               )}

            </motion.div>
         )}
      </AnimatePresence>

    </div>
  );
};

export default LessonAndroidGemini;
