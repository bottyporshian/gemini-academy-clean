import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Brain, Zap, MessageSquare, Image as ImageIcon, Check, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Lesson1_1 = () => {
  return (
    <>
      <Head>
        <title>Lesson 1.1: Welcome to the Gemini Era | Gemini Academy</title>
        <meta name="description" content="Start here: The complete beginner's guide to Google Gemini. Learn what it is, how it differs from ChatGPT, and set up your free account today." />
        <meta name="keywords" content="Gemini tutorial for beginners, Google Gemini course, Gemini AI introduction, Free Gemini course" />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-[10%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
            <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
            <span>/</span>
            <span className="text-slate-900">1.1 What is Gemini?</span>
          </div>

          {/* Lesson Header */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase mb-4">Module 1 • Fundamentals</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 pb-2">
              Gemini is NOT Just a Chatbot. <br />
              <span className="text-slate-400 font-bold">It's a Reasoning Engine.</span>
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              Most people treat AI like a smarter Google Search. That's a mistake. 
              Search finds information. Gemini <strong>processes</strong> information.
            </p>
          </motion.div>

          {/* Content Block 1: The Shift */}
          <div className="prose prose-lg prose-slate max-w-none mb-20">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 ring-1 ring-slate-900/5">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">The Big Shift: Search vs. Reasoning</h3>
              <p className="text-slate-600 mb-8">
                When you use Google Search, you ask a question and get a list of websites. 
                You still have to do the work: click, read, synthesize, and write.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <h4 className="text-slate-700 font-bold mb-3 flex items-center gap-2 uppercase text-xs tracking-wider">
                    <Zap className="w-4 h-4" /> The Old Way (Search)
                  </h4>
                  <p className="text-slate-600 text-sm italic">
                    &quot;Find me a template for a marketing email.&quot;
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <p className="text-xs text-slate-500 font-mono">Output: 10 links. You do the work.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100 ring-1 ring-blue-500/20">
                  <h4 className="text-blue-700 font-bold mb-3 flex items-center gap-2 uppercase text-xs tracking-wider">
                    <Brain className="w-4 h-4" /> The New Way (Gemini)
                  </h4>
                  <p className="text-slate-800 text-sm italic">
                    &quot;Write a marketing email for my new coffee shop, targeting students, tone: witty.&quot;
                  </p>
                  <div className="mt-4 pt-4 border-t border-blue-200/50">
                    <p className="text-xs text-blue-700 font-mono font-bold">Output: The finished email. Ready to send.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Block 2: Multimodal */}
          <div className="mb-24">
            <h3 className="text-3xl font-extrabold mb-8 text-center text-slate-900">Why &quot;Multimodal&quot; Changes Everything</h3>
            <p className="text-xl text-slate-600 mb-12 text-center max-w-2xl mx-auto">
              Gemini was built from the ground up to understand more than just text. 
              It sees, hears, and speaks natively.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<MessageSquare className="w-6 h-6 text-blue-600" />}
                title="Text"
                desc="Summarize 100-page PDFs in seconds."
                color="blue"
              />
              <FeatureCard 
                icon={<ImageIcon className="w-6 h-6 text-purple-600" />}
                title="Images"
                desc="Upload a photo of your fridge &rarr; Get a recipe."
                color="purple"
              />
              <FeatureCard 
                icon={<Zap className="w-6 h-6 text-amber-500" />}
                title="Video"
                desc="Upload a YouTube video &rarr; Get the key takeaways."
                color="amber"
              />
            </div>
          </div>

          {/* Content Block 3: Getting Started + SIMULATION */}
          <div className="mb-24 relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl">
             <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
             <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-purple-500 rounded-full blur-[100px] opacity-20"></div>
             
             <div className="relative z-10 p-10 md:p-14">
              <h3 className="text-3xl font-bold mb-8 text-center">Start Your Journey</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2">Gemini <span className="text-xs bg-white/20 px-2 py-0.5 rounded text-white/80">Free</span></h4>
                  <p className="text-sm text-gray-400 mb-6">Perfect for getting started. Available to everyone.</p>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-center gap-3"><span className="text-green-400">✓</span> Standard reasoning speed</li>
                    <li className="flex items-center gap-3"><span className="text-green-400">✓</span> Web search access</li>
                    <li className="flex items-center gap-3"><span className="text-green-400">✓</span> Image generation</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 ring-1 ring-blue-400/20">
                  <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2">Gemini Advanced <span className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 px-2 py-0.5 rounded text-white">Paid</span></h4>
                  <p className="text-sm text-gray-300 mb-6">For power users and developers.</p>
                  <ul className="space-y-3 text-sm text-gray-200">
                    <li className="flex items-center gap-3"><span className="text-blue-400">🚀</span> Ultra 1.0 model (Smarter)</li>
                    <li className="flex items-center gap-3"><span className="text-blue-400">🐍</span> Python coding environment</li>
                    <li className="flex items-center gap-3"><span className="text-blue-400">📊</span> 1TB Storage (Google One)</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mb-12">
                <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-white/20">
                  Create Free Account <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* THE SIGN UP SIMULATION */}
              <div className="bg-slate-950/50 rounded-2xl p-6 border border-white/5">
                 <p className="text-center text-slate-400 text-xs uppercase font-bold tracking-widest mb-6">Watch: How to Sign Up in 10 Seconds</p>
                 <SignUpSimulation />
              </div>

            </div>
          </div>

          {/* Action Item */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 ring-1 ring-slate-900/5 mb-16 text-center">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">🚀 Your First Mission</h3>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
              Don&apos;t just read. Do. Open Gemini right now and try this prompt to see the reasoning engine in action:
            </p>
            <div className="bg-slate-50 p-6 rounded-xl font-mono text-sm mb-8 inline-block text-left border border-slate-200 text-slate-700 shadow-inner">
              &quot;I am planning a trip to Tokyo for 5 days. I love ramen and history. Create a day-by-day itinerary formatted as a table.&quot;
            </div>
            <div>
               <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Notice the structure? That's intelligence.</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8">
            <Link href="/syllabus" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Syllabus
            </Link>
            <Link href="/lesson/1-2" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20 group">
              Next Lesson <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

const FeatureCard = ({ icon, title, desc, color }) => (
  <div className={`p-8 bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:-translate-y-1 transform`}>
    <div className={`mb-6 bg-${color}-50 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>
    <h4 className="font-bold text-slate-900 mb-3 text-lg">{title}</h4>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

// --- SIGN UP ANIMATION (REALISTIC REPLICA) ---
const SignUpSimulation = () => {
  const [step, setStep] = useState(0); 

  useEffect(() => {
    const cycle = async () => {
      // 0: Start (Landing Page)
      setStep(0);
      await new Promise(r => setTimeout(r, 1000));
      
      // 1: Move to "Sign in" button
      setStep(1);
      await new Promise(r => setTimeout(r, 1500));
      
      // 2: Click
      setStep(2);
      await new Promise(r => setTimeout(r, 500));

      // 3: Show Google Login & Move to Email
      setStep(3);
      await new Promise(r => setTimeout(r, 1000));

      // 4: Type Email
      setStep(4);
      await new Promise(r => setTimeout(r, 1500));

      // 5: Click Next
      setStep(5);
      await new Promise(r => setTimeout(r, 800));

      // 6: Show Password & Type
      setStep(6);
      await new Promise(r => setTimeout(r, 1500));

      // 7: Success
      setStep(7);
      await new Promise(r => setTimeout(r, 4000));
      
      cycle();
    };
    cycle();
  }, []);

  const getCursorPos = () => {
     switch(step) {
        case 0: return { top: '60%', left: '50%' }; // Start Center
        case 1: return { top: '10%', left: '92%' }; // Move to Sign In (Top Right)
        case 2: return { top: '10%', left: '92%' }; // Click
        case 3: return { top: '45%', left: '30%' }; // Login Field
        case 4: return { top: '45%', left: '50%' }; // Typing
        case 5: return { top: '65%', left: '85%' }; // Next Button
        case 6: return { top: '55%', left: '50%' }; // Password
        case 7: return { top: '50%', left: '50%' }; // Success
        default: return { top: '50%', left: '50%' };
     }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto h-96 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col cursor-none font-sans">
      
      {/* SCENE 1: GEMINI LANDING PAGE (Exact Replica) */}
      <AnimatePresence mode="wait">
         {step <= 2 && (
            <motion.div 
               key="landing"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="absolute inset-0 bg-[#F0F4F9] p-6 flex flex-col"
            >
               {/* Navbar */}
               <div className="flex justify-between items-center mb-16">
                  <div className="text-xl font-medium text-slate-600">Gemini</div>
                  <div className="flex items-center gap-4">
                     <span className="text-sm font-medium text-slate-600 hidden sm:block">Try Gemini Advanced</span>
                     <motion.button 
                        animate={step === 2 ? { scale: 0.95 } : { scale: 1 }}
                        className="bg-[#1a73e8] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                     >
                        Sign in
                     </motion.button>
                  </div>
               </div>

               {/* Hero Content */}
               <div className="flex-1 flex flex-col items-start max-w-3xl mx-auto w-full">
                  <h1 className="text-5xl font-medium text-[#1f1f1f] mb-8 leading-tight tracking-tight">
                     <span className="inline-block mr-3 align-middle">
                        <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" alt="" className="w-12 h-12" />
                     </span>
                     Meet Gemini, your personal AI assistant
                  </h1>

                  {/* The Fake Input Bar */}
                  <div className="w-full h-16 bg-white rounded-full shadow-sm border border-slate-200 flex items-center px-6 gap-4">
                     <div className="text-lg text-slate-400 font-normal">Ask Gemini 3</div>
                     <div className="ml-auto flex items-center gap-4 text-slate-400">
                        <Mic className="w-6 h-6" />
                        <ImageIcon className="w-6 h-6" />
                     </div>
                  </div>
                  
                  {/* Pills */}
                  <div className="flex gap-3 mt-6 ml-4">
                     {['Write', 'Plan', 'Research'].map((text) => (
                        <div key={text} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-600 shadow-sm border border-slate-100">
                           {text}
                        </div>
                     ))}
                  </div>
               </div>
            </motion.div>
         )}

         {/* SCENE 2: GOOGLE SIGN IN */}
         {(step >= 3 && step <= 6) && (
            <motion.div 
               key="login"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0 }}
               className="absolute inset-0 bg-white flex flex-col items-center justify-center"
            >
               <div className="w-full max-w-md p-8 border border-slate-200 rounded-xl shadow-sm bg-white">
                  <div className="flex justify-center mb-6">
                     <span className="font-bold text-2xl text-slate-700"><span className="text-blue-500">G</span>oogle</span>
                  </div>
                  <h2 className="text-center text-xl font-medium text-slate-900 mb-2">Sign in</h2>
                  <p className="text-center text-sm text-slate-600 mb-8">to continue to Gemini</p>

                  <div className="space-y-6">
                     <div className="border border-slate-300 rounded px-3 py-3 w-full text-base text-slate-800 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
                        {step >= 4 ? <span className="text-slate-900">user@gmail.com</span> : <span className="text-slate-400">Email or phone</span>}
                     </div>
                     
                     {step >= 6 && (
                        <motion.div 
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: 'auto', opacity: 1 }}
                           className="border border-slate-300 rounded px-3 py-3 w-full text-base text-slate-800"
                        >
                           ••••••••
                        </motion.div>
                     )}

                     <div className="flex justify-end">
                        <button className={`bg-[#1a73e8] text-white px-6 py-2 rounded font-medium text-sm transition-transform ${step === 5 ? 'scale-95' : ''}`}>
                           Next
                        </button>
                     </div>
                  </div>
               </div>
            </motion.div>
         )}

         {/* SCENE 3: SUCCESS */}
         {step === 7 && (
            <motion.div 
               key="success"
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               className="absolute inset-0 bg-[#F0F4F9] flex flex-col items-center justify-center"
            >
               <div className="text-center">
                  <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
                     <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" alt="" className="w-16 h-16 animate-pulse" />
                  </div>
                  <h2 className="text-3xl font-medium text-slate-800 mb-2">Welcome, Moti</h2>
                  <p className="text-slate-500">You are ready to start.</p>
               </div>
            </motion.div>
         )}
      </AnimatePresence>

      {/* CURSOR */}
      <motion.div
         className="absolute z-50 pointer-events-none drop-shadow-xl"
         animate={getCursorPos()}
         transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19823L11.4818 12.3673H5.65376Z" fill="black" stroke="white" strokeWidth="1"/>
         </svg>
      </motion.div>
    </div>
  );
};

const Typewriter = ({ text }) => {
   const [display, setDisplay] = useState('');
   useEffect(() => {
      let i = 0;
      const timer = setInterval(() => {
         setDisplay(text.substring(0, i));
         i++;
         if (i > text.length) clearInterval(timer);
      }, 50);
      return () => clearInterval(timer);
   }, [text]);
   return <span>{display}</span>;
}

const Sparkles = ({ className }) => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
);

export default Lesson1_1;