import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Mic, Volume2, Globe, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Lesson1_4 = () => {
  return (
    <>
      <Head>
        <title>Lesson 1.4: Talking to Gemini (Voice Mode) | Gemini Academy</title>
        <meta name="description" content="Learn how to speak to Gemini instead of typing. Perfect for long stories, practicing languages, or if you just hate keyboards." />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-[30%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
            <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
            <span>/</span>
            <Link href="/lesson/1-3" className="hover:text-blue-600 transition-colors">1.3 Interface</Link>
            <span>/</span>
            <span className="text-slate-900">1.4 Voice Mode</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold tracking-wide uppercase mb-4">Module 1 • Basics</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
              Don't Type. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Just Talk.</span>
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              Typing can be slow and tiring. Gemini has ears. Use them.
            </p>
          </motion.div>

          {/* The Live Button Demo - ANIMATED */}
          <div className="mb-24 flex justify-center">
             <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden p-8">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
                <h3 className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">Live Simulation</h3>
                
                {/* The Input Box Simulation */}
                <div className="border border-slate-200 rounded-2xl p-4 flex items-center gap-3 bg-slate-50 relative">
                   {/* The Mic Button */}
                   <motion.div 
                     animate={{ 
                       scale: [1, 1.2, 1],
                       boxShadow: ["0px 0px 0px rgba(239, 68, 68, 0)", "0px 0px 20px rgba(239, 68, 68, 0.5)", "0px 0px 0px rgba(239, 68, 68, 0)"]
                     }}
                     transition={{ duration: 2, repeat: Infinity }}
                     className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-sm border border-slate-200 z-10"
                   >
                      <Mic className="w-5 h-5 text-red-500" />
                   </motion.div>

                   {/* The Ghost Text */}
                   <div className="flex-1 text-slate-700 font-medium text-lg">
                      <TypewriterText text="Tell me a bedtime story about a brave robot..." delay={1} />
                   </div>

                   {/* Send Button */}
                   <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-blue-600" />
                   </div>
                </div>

                {/* Status Indicator */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.8, 1] }}
                  className="mt-4 flex justify-center items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest"
                >
                   <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                   Listening...
                </motion.div>
             </div>
          </div>

          {/* Why Voice? */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
             <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600"><MessageCircle className="w-6 h-6" /></div>
                <h3 className="font-bold text-slate-900 mb-2">Tell Stories</h3>
                <p className="text-slate-600 text-sm">Perfect for telling a long, complicated story without getting tired fingers.</p>
             </div>
             <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg text-center">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600"><Globe className="w-6 h-6" /></div>
                <h3 className="font-bold text-slate-900 mb-2">Practice Languages</h3>
                <p className="text-slate-600 text-sm">Speak in French/Spanish and ask Gemini to correct your pronunciation.</p>
             </div>
             <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg text-center">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600"><Volume2 className="w-6 h-6" /></div>
                <h3 className="font-bold text-slate-900 mb-2">Listen Back</h3>
                <p className="text-slate-600 text-sm">On the mobile app, Gemini can talk back to you like a real person.</p>
             </div>
          </div>

          {/* Step-by-Step Instructions */}
          <div className="bg-slate-900 text-white p-10 rounded-3xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-[100px] opacity-10"></div>
             <h3 className="text-2xl font-bold mb-8 relative z-10">How to do it (Desktop)</h3>
             <ol className="space-y-6 relative z-10">
                <li className="flex items-center gap-4">
                   <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-sm">1</span>
                   <p className="text-lg">Look for the <strong className="text-red-400">Microphone icon</strong> inside the text box.</p>
                </li>
                <li className="flex items-center gap-4">
                   <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-sm">2</span>
                   <p className="text-lg">Click it once. You might need to click "Allow" on the browser popup.</p>
                </li>
                <li className="flex items-center gap-4">
                   <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-sm">3</span>
                   <p className="text-lg">Start talking! When you stop, it will automatically type what you said.</p>
                </li>
             </ol>
          </div>

          <div className="flex justify-between items-center pt-12 border-t border-slate-200 mt-16">
            <Link href="/lesson/1-3" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Previous
            </Link>
            <Link href="/lesson/2-1" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20 group">
              Next Module: Prompt Mastery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

const TypewriterText = ({ text, delay }) => {
  const [displayedText, setDisplayedText] = React.useState('');

  React.useEffect(() => {
    const startTimeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i > text.length) {
          clearInterval(interval);
          setTimeout(() => setDisplayedText(''), 2000); // Reset
        }
      }, 50); // Typing speed
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  return <span>{displayedText}<span className="animate-pulse">|</span></span>;
};

export default Lesson1_4;