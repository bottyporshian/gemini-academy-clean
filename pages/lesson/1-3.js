import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  ArrowLeft, ArrowRight, MousePointer, Mic, Image as ImageIcon, Send, RotateCcw, Menu,
  Plus, SlidersHorizontal, ChevronDown, Zap, Plane, Building, FileText, Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Lesson1_3 = () => {
  return (
    <>
      <Head>
        <title>Lesson 1.3: The Interface & Power Bar | Gemini Academy</title>
        <meta name="description" content="Master the Gemini 3 interface. A deep dive into the new 'Power Bar', Tools menu, and Model settings." />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-[25%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
            <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
            <span>/</span>
            <Link href="/lesson/1-2" className="hover:text-blue-600 transition-colors">1.2 Comparison</Link>
            <span>/</span>
            <span className="text-slate-900">1.3 Interface Tour</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase mb-4">Module 1 • Basics</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
              Where do I click? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">The Grand Tour.</span>
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              Gemini has a clean screen, but it can be confusing at first. 
              Let's learn what every button does.
            </p>
          </motion.div>

          {/* SECTION 1: THE BASICS (Top Overview) */}
          <div className="mb-20 bg-white p-4 rounded-3xl shadow-xl border border-slate-200">
             <div className="bg-slate-100 rounded-2xl p-8 md:p-12 relative overflow-hidden text-center">
                <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-left relative min-h-[300px] flex flex-col">
                   {/* Sidebar Trigger */}
                   <div className="absolute top-4 left-4">
                      <div className="p-2 hover:bg-slate-100 rounded-full cursor-pointer group">
                         <Menu className="w-6 h-6 text-slate-600" />
                         <span className="absolute -top-12 -left-2 bg-slate-800 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            1. History Menu
                         </span>
                      </div>
                   </div>

                   {/* New Chat */}
                   <div className="absolute top-4 left-16">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full cursor-pointer hover:bg-slate-200 group">
                         <span className="text-sm font-medium text-slate-600">+ New chat</span>
                         <span className="absolute -top-12 left-0 bg-slate-800 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            2. Start Fresh
                         </span>
                      </div>
                   </div>

                   <div className="flex-1 flex items-center justify-center text-slate-300 italic mb-6">
                      (Conversation appears here...)
                   </div>

                   {/* Input Area Visual (Restored) */}
                   <div className="mt-8 border-2 border-blue-200 rounded-2xl p-4 bg-white shadow-lg relative group cursor-default">
                      <div className="absolute -top-3 left-4 bg-slate-500 text-white text-[10px] font-bold px-2 py-1 rounded">Old / Standard Input</div>
                      <div className="flex items-center gap-3">
                         <div className="p-2 bg-slate-100 rounded-full hover:bg-purple-100 transition-colors relative group/icon">
                            <ImageIcon className="w-5 h-5 text-slate-400 group-hover/icon:text-purple-600" />
                            {/* Hover Tooltip */}
                            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                               Upload Image
                            </div>
                         </div>
                         <div className="p-2 bg-slate-100 rounded-full hover:bg-red-100 transition-colors relative group/icon">
                            <Mic className="w-5 h-5 text-slate-400 group-hover/icon:text-red-600" />
                            {/* Hover Tooltip */}
                            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                               Voice Input
                            </div>
                         </div>
                         <div className="flex-1 h-2 bg-slate-100 rounded"></div>
                         <div className="p-3 bg-slate-300 rounded-full">
                            <Send className="w-4 h-4 text-white" />
                         </div>
                      </div>
                   </div>
                </div>
                <p className="mt-6 text-slate-500 text-sm font-medium">Basic Layout Overview</p>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
             <FeatureDetail 
                number="1" 
                title="The Menu (History)" 
                icon={<Menu className="w-6 h-6 text-slate-600" />}
                desc="Top left. Click to see past conversations. Think of this as your email inbox for chats."
             />
             <FeatureDetail 
                number="2" 
                title="New Chat" 
                icon={<RotateCcw className="w-6 h-6 text-green-600" />}
                desc="Always start a 'New Chat' for a new topic. Don't mix cooking recipes with work emails."
             />
             <FeatureDetail 
                number="3" 
                title="Upload Image" 
                icon={<ImageIcon className="w-6 h-6 text-purple-600" />}
                desc="Look for the '+' sign. Use this to give Gemini eyes. Show it a fridge photo or a document."
             />
             <FeatureDetail 
                number="4" 
                title="Microphone" 
                icon={<Mic className="w-6 h-6 text-red-600" />}
                desc="Don't like typing? Click the mic. It listens in almost any language and understands accents."
             />
          </div>

          {/* DIVIDER */}
          <div className="border-t border-slate-200 my-16"></div>

          {/* SECTION 2: DEEP DIVE (THE NEW POWER BAR) */}
          <div className="mb-24">
             <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold tracking-wide uppercase mb-4">New in Gemini 3</span>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-4">The &quot;Power Bar&quot; Explained</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                   The input bar isn't just for typing anymore. It's your control center.
                   <br/>Hover over the elements below to learn their secrets.
                </p>
             </div>

             {/* MINI TUTORIAL VIDEO: POWER BAR SIMULATION */}
             <div className="bg-slate-900 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
                <div className="relative z-10">
                   <MiniTutorial_PowerBar />
                </div>
             </div>

             {/* Deep Dive Details */}
             <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                   <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                      <SlidersHorizontal className="w-5 h-5 text-blue-600" />
                   </div>
                   <h3 className="font-bold text-slate-900 text-lg mb-2">Tools & Extensions</h3>
                   <p className="text-sm text-slate-600">
                      The gateway to the real world. Connect Gemini to <strong>Google Flights, Hotels, and Workspace</strong> here.
                      <br/><span className="text-blue-600 text-xs font-bold mt-2 block">Tip: The blue dot means an update!</span>
                   </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                   <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
                      <Zap className="w-5 h-5 text-amber-600" />
                   </div>
                   <h3 className="font-bold text-slate-900 text-lg mb-2">Model: Fast vs Smart</h3>
                   <p className="text-sm text-slate-600">
                      You are in control.
                      <br/><strong>Fast:</strong> Uses Gemini Flash (Instant answers).
                      <br/><strong>Smart:</strong> Uses Gemini Pro (Deep reasoning).
                   </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                   <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                      <Plus className="w-5 h-5 text-purple-600" />
                   </div>
                   <h3 className="font-bold text-slate-900 text-lg mb-2">Universal Add</h3>
                   <p className="text-sm text-slate-600">
                      Upload anything. Photos, PDFs, Audio files, or even entire folders.
                      It's cleaner and faster than before.
                   </p>
                </div>
             </div>
          </div>

          {/* Pro Tip */}
          <div className="bg-amber-50 border border-amber-200 p-8 rounded-3xl flex gap-6 items-start">
             <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
                <MousePointer className="w-6 h-6 text-amber-600" />
             </div>
             <div>
                <h3 className="font-bold text-amber-900 text-xl mb-2">The &quot;Enter&quot; Key Trap</h3>
                <p className="text-amber-800 leading-relaxed">
                   <strong>Common mistake:</strong> Many people press &quot;Enter&quot; thinking it will start a new line, but it sends the message!
                   <br/><br/>
                   <strong>Solution:</strong> Hold down <code className="bg-white px-2 py-1 rounded border border-amber-200 font-bold">Shift</code> + <code className="bg-white px-2 py-1 rounded border border-amber-200 font-bold">Enter</code> to go down a line without sending.
                </p>
             </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-12 border-t border-slate-200 mt-16">
            <Link href="/lesson/1-2" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Previous
            </Link>
            <Link href="/lesson/1-4" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20 group">
              Next: Voice Chat <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

// --- MINI TUTORIAL VIDEO: POWER BAR ---
const MiniTutorial_PowerBar = () => {
   const [toolsOpen, setToolsOpen] = useState(false);
   const [modelOpen, setModelOpen] = useState(false);

   return (
      <div className="w-full max-w-2xl mx-auto">
         {/* The Pill Container */}
         <div className="bg-white rounded-full shadow-lg p-2 pl-6 flex items-center h-16 relative z-20">
            
            {/* Input Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 md:opacity-100">
               <span className="text-slate-300 font-medium text-lg">Ask Gemini 3</span>
            </div>

            {/* Left Controls */}
            <div className="flex items-center gap-4 z-10">
               {/* Plus */}
               <motion.div whileHover={{ scale: 1.1 }} className="p-2 hover:bg-slate-100 rounded-full cursor-pointer text-slate-500">
                  <Plus className="w-6 h-6" />
               </motion.div>

               {/* Tools Button */}
               <div className="relative">
                  <motion.button 
                     onClick={() => { setToolsOpen(!toolsOpen); setModelOpen(false); }}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all ${toolsOpen ? 'bg-blue-50 text-blue-600' : 'hover:bg-slate-100 text-slate-600'}`}
                  >
                     <SlidersHorizontal className="w-5 h-5" />
                     <span className="font-medium text-sm">Tools</span>
                     <span className="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full border-2 border-white animate-pulse"></span>
                  </motion.button>

                  {/* Tools Dropdown Simulation */}
                  <AnimatePresence>
                     {toolsOpen && (
                        <motion.div 
                           initial={{ opacity: 0, y: 10, scale: 0.95 }}
                           animate={{ opacity: 1, y: 0, scale: 1 }}
                           exit={{ opacity: 0, y: 10, scale: 0.95 }}
                           className="absolute top-full left-0 mt-4 w-56 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50"
                        >
                           <div className="p-3 space-y-1">
                              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1">Extensions</div>
                              <div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
                                 <Plane className="w-4 h-4 text-blue-500" /> <span className="text-sm text-slate-700">Google Flights</span>
                              </div>
                              <div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
                                 <Building className="w-4 h-4 text-orange-500" /> <span className="text-sm text-slate-700">Google Hotels</span>
                              </div>
                              <div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
                                 <FileText className="w-4 h-4 text-green-500" /> <span className="text-sm text-slate-700">Workspace</span>
                              </div>
                           </div>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>
            </div>

            {/* Spacer */}
            <div className="flex-1"></div>

            {/* Right Controls */}
            <div className="flex items-center gap-4 z-10 pr-2">
               {/* Model Selector */}
               <div className="relative">
                  <motion.button 
                     onClick={() => { setModelOpen(!modelOpen); setToolsOpen(false); }}
                     className="flex items-center gap-1 text-slate-600 font-medium text-sm hover:bg-slate-100 px-3 py-2 rounded-full transition-colors"
                  >
                     Fast <ChevronDown className="w-4 h-4" />
                  </motion.button>

                   <AnimatePresence>
                     {modelOpen && (
                        <motion.div 
                           initial={{ opacity: 0, y: 10, scale: 0.95 }}
                           animate={{ opacity: 1, y: 0, scale: 1 }}
                           exit={{ opacity: 0, y: 10, scale: 0.95 }}
                           className="absolute bottom-full right-0 mb-4 w-48 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50 p-1"
                        >
                           <div className="flex items-center gap-3 p-2 bg-blue-50 rounded-lg cursor-pointer border border-blue-100">
                              <Zap className="w-4 h-4 text-blue-600" /> 
                              <div>
                                 <div className="text-xs font-bold text-blue-700">Gemini Flash</div>
                                 <div className="text-[10px] text-blue-500">Fastest (Default)</div>
                              </div>
                           </div>
                           <div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer opacity-50">
                              <Sparkles className="w-4 h-4 text-purple-600" /> 
                              <div>
                                 <div className="text-xs font-bold text-slate-700">Gemini Pro</div>
                                 <div className="text-[10px] text-slate-500">Deep Reasoning</div>
                              </div>
                           </div>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>

               {/* Mic */}
               <div className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center cursor-pointer transition-colors">
                  <Mic className="w-5 h-5 text-slate-700" />
               </div>
            </div>
         </div>
         
         {/* Cursor Hand */}
         <motion.div 
            initial={{ x: 300, y: 100, opacity: 0 }}
            animate={{ 
               x: [300, 80, 80, 450, 450, 300], 
               y: [100, 20, 20, 20, 20, 100],
               opacity: [0, 1, 1, 1, 1, 0] 
            }}
            transition={{ duration: 6, repeat: Infinity, repeatDelay: 2 }}
            className="fixed top-0 left-0 pointer-events-none z-50 drop-shadow-xl hidden md:block" // Hidden on mobile
            style={{ position: 'absolute' }}
         >
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19823L11.4818 12.3673H5.65376Z" fill="white" stroke="black" strokeWidth="1"/>
             </svg>
         </motion.div>

         <p className="text-center text-slate-400 text-xs mt-6 uppercase tracking-widest font-bold">Interactive Demo: Try clicking the &quot;Tools&quot; button above</p>
      </div>
   );
};

const FeatureDetail = ({ number, title, icon, desc }) => (
   <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
      <div className="flex flex-col items-center gap-2">
         <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">{number}</span>
         <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
      </div>
      <div>
         <h4 className="font-bold text-slate-900 text-lg mb-2">{title}</h4>
         <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
      </div>
   </div>
);

export default Lesson1_3;