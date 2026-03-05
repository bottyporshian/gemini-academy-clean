import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Mail, FileText, Database, ShieldCheck, Settings, Check, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Lesson4_1 = () => {
  return (
    <>
      <Head>
        <title>Lesson 4.1: Gemini in Your Workspace | Gemini Academy</title>
        <meta name="description" content="Connect Gemini to your Google Docs, Gmail, and Drive. Learn how to summarize emails, find files, and draft documents without leaving the chat." />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-[80%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
            <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
            <span>/</span>
            <Link href="/lesson/3-3" className="hover:text-blue-600 transition-colors">3.3 Video</Link>
            <span>/</span>
            <span className="text-slate-900">4.1 Workspace</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase mb-4">Module 4 • Productivity</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 pb-2">
              Your Personal <br />
              <span className="text-slate-800">Chief of Staff.</span>
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              Stop searching for files. Stop reading long email chains. 
              Let Gemini access your Google Workspace and do the heavy lifting.
            </p>
          </motion.div>

          {/* The Privacy Note */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-16 flex gap-4 items-start">
             <ShieldCheck className="w-6 h-6 text-green-600 mt-1 shrink-0" />
             <div>
                <h4 className="font-bold text-green-900 mb-1">Privacy First</h4>
                <p className="text-sm text-green-800">
                   When you use Workspace extensions, Google does <strong>not</strong> use your personal data (Docs, Drive, Gmail) to train the public Gemini models. Your data stays yours.
                </p>
             </div>
          </div>

          {/* SIMULATION 1: HOW TO TURN IT ON */}
          <div className="mb-24">
             <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-6 text-slate-900">How to Turn It On</h3>
                    <ol className="relative border-l border-slate-200 ml-4 space-y-8">
                        <Step number="1" title="Open Settings" desc="Go to gemini.google.com and click the 'Settings' (gear icon) in the bottom left." />
                        <Step number="2" title="Extensions" desc="Select 'Extensions' from the menu." />
                        <Step number="3" title="Activate Google Workspace" desc="Toggle the switch to 'On'. You might need to sign in again to grant permission." />
                        <Step number="4" title="Use the @ Symbol" desc="In the chat, type '@Google Drive' or just ask naturally." />
                    </ol>
                </div>
                
                {/* THE VISUAL GUIDE (Simulation) */}
                <div className="flex-1 w-full">
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative aspect-[4/3] w-full">
                        <div className="absolute top-0 left-0 w-full bg-slate-100 p-2 flex items-center gap-2 border-b border-slate-200 z-10">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="bg-white px-3 py-1 rounded text-[10px] text-slate-400 flex-1 text-center">gemini.google.com/extensions</div>
                        </div>
                        
                        <WorkspaceSetupSimulation />
                    </div>
                    <p className="text-center text-xs text-slate-400 mt-4">Watch the animation above to see the exact clicks.</p>
                </div>
             </div>
          </div>

          {/* SIMULATION 2: FINDING EMAIL */}
          <div className="mb-24 bg-slate-900 rounded-3xl p-10 text-white shadow-2xl overflow-hidden relative">
             <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20"></div>
             
             <div className="relative z-10 text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">See it in Action</h3>
                <p className="text-slate-300">Finding that one email from HR without searching manually.</p>
             </div>

             <div className="max-w-2xl mx-auto bg-slate-800 rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
                <GmailSearchSimulation />
             </div>
          </div>

          {/* The Big 3 Integrations */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
             <IntegrationCard 
                icon={<Mail className="w-6 h-6 text-red-500" />}
                title="Gmail"
                prompt="Find the email from 'HR' about 'Benefits' sent last week and summarize the key changes."
             />
             <IntegrationCard 
                icon={<Database className="w-6 h-6 text-blue-500" />}
                title="Drive"
                prompt="Find the PDF named 'Q3 Report' and extract the revenue numbers for July."
             />
             <IntegrationCard 
                icon={<FileText className="w-6 h-6 text-blue-400" />}
                title="Docs"
                prompt="Read the document 'Project Alpha Proposal' and write a counter-argument."
             />
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
            <Link href="/lesson/3-3" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Previous
            </Link>
            <Link href="/lesson/5-1" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20 group">
              Next: Custom Gems <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

// --- SIMULATION 1: SETUP ---
const WorkspaceSetupSimulation = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 5);
        }, 2000); // Change step every 2 seconds
        return () => clearInterval(interval);
    }, []);

    // Cursor positions for each step
    const getCursorPos = () => {
        switch(step) {
            case 0: return { bottom: '20px', left: '20px' }; // Start near settings
            case 1: return { bottom: '20px', left: '20px' }; // Click Settings
            case 2: return { bottom: '80px', left: '20px' }; // Click Extensions (Menu pops up)
            case 3: return { top: '50%', left: '70%' }; // Move to Toggle
            case 4: return { top: '50%', left: '70%' }; // Click Toggle
            default: return { bottom: '20px', left: '20px' };
        }
    };

    return (
        <div className="w-full h-full bg-white relative pt-8 flex">
            {/* Sidebar */}
            <div className="w-16 bg-slate-50 border-r border-slate-200 h-full flex flex-col justify-end items-center pb-4 gap-4 relative z-0">
                <div className={`p-2 rounded-lg transition-colors ${step >= 1 && step < 3 ? 'bg-slate-200' : ''}`}>
                    <Settings className="w-5 h-5 text-slate-600" />
                </div>
                
                {/* Settings Menu Popup */}
                <AnimatePresence>
                    {step >= 2 && step < 5 && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8, x: -10 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute bottom-12 left-2 bg-white shadow-xl border border-slate-200 rounded-lg w-40 overflow-hidden z-20"
                        >
                            <div className="p-3 hover:bg-slate-50 text-xs font-medium text-slate-700">Dark Mode</div>
                            <div className={`p-3 text-xs font-medium text-slate-700 flex justify-between items-center ${step >= 2 ? 'bg-blue-50 text-blue-700' : ''}`}>
                                Extensions <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                            </div>
                            <div className="p-3 hover:bg-slate-50 text-xs font-medium text-slate-700">Settings</div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Main Content (Extensions Page) */}
            <div className="flex-1 p-6 bg-white">
                <AnimatePresence>
                    {step >= 2 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
                            <h4 className="font-bold text-slate-800 mb-4">Extensions</h4>
                            <div className="border border-slate-200 rounded-xl p-4 flex items-center justify-between shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                        <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
                                            <div className="bg-blue-500 rounded-sm"></div>
                                            <div className="bg-green-500 rounded-sm"></div>
                                            <div className="bg-yellow-500 rounded-sm"></div>
                                            <div className="bg-red-500 rounded-sm"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm text-slate-800">Google Workspace</div>
                                        <div className="text-[10px] text-slate-500">Docs, Drive, Gmail</div>
                                    </div>
                                </div>
                                
                                {/* TOGGLE SWITCH */}
                                <div className={`w-10 h-6 rounded-full p-1 transition-colors duration-300 ${step >= 4 ? 'bg-blue-600' : 'bg-slate-300'}`}>
                                    <motion.div 
                                        animate={{ x: step >= 4 ? 16 : 0 }}
                                        className="w-4 h-4 bg-white rounded-full shadow-sm"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Cursor Animation */}
            <motion.div 
                animate={getCursorPos()}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute z-50 w-6 h-6 pointer-events-none drop-shadow-xl"
            >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19823L11.4818 12.3673H5.65376Z" fill="black" stroke="white" strokeWidth="1.5"/>
                </svg>
            </motion.div>
        </div>
    );
};

// --- SIMULATION 2: GMAIL SEARCH ---
const GmailSearchSimulation = () => {
    const [phase, setPhase] = useState(0);
    const prompt = "@Gmail find emails from HR about benefits";

    useEffect(() => {
        const cycle = async () => {
            setPhase(0); // Start
            await new Promise(r => setTimeout(r, 1000));
            
            setPhase(1); // Typing
            await new Promise(r => setTimeout(r, 2000));
            
            setPhase(2); // Searching (Loading)
            await new Promise(r => setTimeout(r, 2000));
            
            setPhase(3); // Result Found
            await new Promise(r => setTimeout(r, 5000)); // Hold longer
            
            cycle();
        };
        cycle();
    }, []);

    return (
        <div className="w-full h-64 flex flex-col bg-slate-800 text-slate-200 font-sans text-sm">
            {/* Chat Area */}
            <div className="flex-1 p-6 overflow-hidden">
                {/* User Message */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-end mb-4"
                >
                    <div className="bg-slate-700 text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">
                        {phase === 0 ? <span className="animate-pulse">|</span> : prompt}
                    </div>
                </motion.div>

                {/* AI Response */}
                <AnimatePresence>
                    {phase >= 2 && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex gap-3 items-start"
                        >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shrink-0">
                                <Sparkles className="w-4 h-4 text-white" />
                            </div>
                            
                            <div className="flex-1">
                                {phase === 2 ? (
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <Mail className="w-4 h-4 animate-bounce" />
                                        <span>Searching Gmail...</span>
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        <p>I found one email from HR regarding benefits sent last Tuesday.</p>
                                        
                                        {/* Email Card */}
                                        <div className="bg-slate-900 border border-slate-700 rounded-xl p-3 hover:bg-slate-700/50 transition-colors cursor-pointer flex gap-3">
                                            <div className="w-8 h-8 bg-red-500/20 text-red-400 rounded-lg flex items-center justify-center shrink-0">
                                                <Mail className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-slate-200 text-xs mb-0.5">2026 Benefits Enrollment</div>
                                                <div className="text-[10px] text-slate-400">From: hr@company.com • Tue, Oct 12</div>
                                                <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                                                    Hi team, open enrollment begins next week. Please review the attached PDF...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

const IntegrationCard = ({ icon, title, prompt }) => (
   <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:-translate-y-2 transition-transform duration-300">
      <div className="flex items-center gap-3 mb-6">
         <div className="p-3 bg-slate-50 rounded-xl">{icon}</div>
         <h3 className="font-bold text-xl text-slate-900">{title}</h3>
      </div>
      <p className="text-xs text-slate-400 uppercase font-bold mb-2">Try asking:</p>
      <p className="text-slate-600 italic text-sm leading-relaxed">"{prompt}"</p>
   </div>
);

const Step = ({ number, title, desc }) => (
   <li className="pl-10 relative">
      <span className="absolute -left-4 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold ring-4 ring-white">
         {number}
      </span>
      <h4 className="font-bold text-lg text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-600">{desc}</p>
   </li>
);

// Sparkles Icon Component (Missing in original file)
const Sparkles = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    </svg>
)

export default Lesson4_1;