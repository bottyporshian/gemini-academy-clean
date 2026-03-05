import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Image as ImageIcon, Camera, Palette, Wand2, Send, Sparkles, Banana, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Lesson3_1 = () => {
  return (
    <>
      <Head>
        <title>Lesson 3.1: Generating Images with Imagen 3 | Gemini Academy</title>
        <meta name="description" content="Create photorealistic images with Google's Imagen 3 inside Gemini. Learn the best prompts for logos, art, and stock photos." />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-[55%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
            <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
            <span>/</span>
            <Link href="/lesson/2-2" className="hover:text-blue-600 transition-colors">2.2 Advanced</Link>
            <span>/</span>
            <span className="text-slate-900">3.1 Visual Magic</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold tracking-wide uppercase mb-4">Module 3 • Multimedia</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 pb-2">
              Visual Magic: <br />
              <span className="text-slate-800">Create Anything.</span>
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              You don't need to be a designer. With <strong>Imagen 3</strong> (built into Gemini), you can generate stunning, photorealistic images in seconds.
            </p>
          </motion.div>

          {/* Intro Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-24">
             <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-4"><Camera className="w-5 h-5 text-pink-600" /></div>
                <h3 className="font-bold text-slate-900 mb-2">Photorealistic</h3>
                <p className="text-sm text-slate-600">Create stock photos that look real.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4"><Palette className="w-5 h-5 text-orange-600" /></div>
                <h3 className="font-bold text-slate-900 mb-2">Artistic Styles</h3>
                <p className="text-sm text-slate-600">Oil painting, pixel art, 3D render.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4"><Wand2 className="w-5 h-5 text-blue-600" /></div>
                <h3 className="font-bold text-slate-900 mb-2">Text Rendering</h3>
                <p className="text-sm text-slate-600">Finally, AI that can spell correctly.</p>
             </div>
          </div>

          {/* SIMULATION: IMAGE GENERATION */}
          <div className="mb-24">
             <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Watch: From Text to Image</h2>
                <p className="text-slate-600">See how writing a detailed prompt creates a masterpiece.</p>
             </div>
             
             <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                   <ImageGenSimulation />
                </div>
             </div>
          </div>

          {/* The Prompt Recipe */}
          <div className="mb-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 rounded-full blur-[100px] opacity-20"></div>
             
             <h3 className="text-3xl font-bold mb-8 relative z-10">The Image Prompt Recipe</h3>
             <div className="grid md:grid-cols-2 gap-12 relative z-10">
                <div className="space-y-6">
                   <p className="text-lg text-slate-300">Just like text, images need specific instructions. Use this formula:</p>
                   <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                         <span className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-xs font-bold">1</span>
                         <span><strong>Subject:</strong> What is the main thing? (A cat)</span>
                      </li>
                      <li className="flex items-center gap-3">
                         <span className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-xs font-bold">2</span>
                         <span><strong>Setting:</strong> Where is it? (In space)</span>
                      </li>
                      <li className="flex items-center gap-3">
                         <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">3</span>
                         <span><strong>Style:</strong> Look and feel? (Cinematic lighting, 8k, unreal engine 5)</span>
                      </li>
                   </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                   <p className="text-xs text-slate-400 uppercase font-bold mb-4">Try this prompt:</p>
                   <p className="font-mono text-sm text-pink-200 mb-6">
                      "create me a super girl flying at the sky with pink and purple uniform with the letter G for girl on her uniform holding big stone on her back"
                   </p>
                   <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="block text-center bg-white text-slate-900 py-3 rounded-lg font-bold hover:bg-slate-200 transition-colors">
                      Generate Now
                   </a>
                </div>
             </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
            <Link href="/lesson/2-2" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Previous
            </Link>
            <Link href="/lesson/3-2" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20 group">
              Next: Video Analysis <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

// --- MINI TUTORIAL VIDEO: IMAGE GEN ---
const ImageGenSimulation = () => {
   const [step, setStep] = useState(0); 
   const promptText = "create me a super girl flying at the sky with pink and purple uniform with the letter G for girl on her uniform holding big stone on her back";

   useEffect(() => {
     const cycle = async () => {
       // 0: Start (Empty)
       setStep(0);
       await new Promise(r => setTimeout(r, 1000));
       
       // 1: Typing
       setStep(1);
       await new Promise(r => setTimeout(r, promptText.length * 30)); 
       
       // 2: Click Tools
       setStep(2);
       await new Promise(r => setTimeout(r, 1000));

       // 3: Select Nano Banana 2
       setStep(3);
       await new Promise(r => setTimeout(r, 1000));

       // 4: Click Create Image (Bottom)
       setStep(4);
       await new Promise(r => setTimeout(r, 800));

       // 5: Loading
       setStep(5);
       await new Promise(r => setTimeout(r, 3000));

       // 6: Show Image
       setStep(6);
       await new Promise(r => setTimeout(r, 6000));
       
       cycle();
     };
     cycle();
   }, []);

   const getCursorPos = () => {
      switch(step) {
         case 0: return { top: '50%', left: '50%' };
         case 1: return { top: '50%', left: '50%' }; // Typing
         case 2: return { top: '65%', left: '20%' }; // Tools button location
         case 3: return { top: '58%', left: '20%' }; // Dropdown item location (Nano Banana)
         case 4: return { top: '85%', left: '15%' }; // Create Image button (Bottom Left)
         case 5: return { top: '85%', left: '15%' }; 
         case 6: return { top: '50%', left: '90%' };
         default: return { top: '50%', left: '50%' };
      }
   };

   return (
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col h-[550px] relative">
         {/* Chat Interface */}
         <div className="flex-1 p-6 flex flex-col relative bg-[#F0F4F9]">
            
            {/* Header: Hi Motty (Removed as requested) */}
            {step === 0 && (
               <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-8"
               >
                  <h1 className="text-4xl text-[#C4C7C5] font-medium">Where should we start?</h1>
               </motion.div>
            )}

            {/* User Bubble */}
            <AnimatePresence>
               {(step >= 1) && (
                  <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="bg-[#f0f4f9] border border-slate-200 text-slate-800 p-6 rounded-[2rem] w-full mb-6 shadow-sm min-h-[140px] relative transition-all"
                  >
                     <div className="text-lg text-slate-700 leading-relaxed font-sans">
                        {step === 1 ? <Typewriter text={promptText} speed={30} /> : promptText}
                     </div>
                     
                     {/* Input Actions Bar */}
                     <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-100 relative">
                        <div className="flex gap-4">
                           <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm cursor-pointer hover:bg-slate-50">
                              <PlusCircle className="w-4 h-4 text-slate-500" />
                           </div>
                           
                           {/* TOOLS BUTTON */}
                           <motion.div 
                              animate={step === 2 ? { scale: 0.95, backgroundColor: '#f1f5f9' } : { scale: 1, backgroundColor: '#ffffff' }}
                              className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm cursor-pointer relative"
                           >
                              <SettingsIcon className="w-4 h-4 text-slate-500" /> <span className="text-xs font-medium text-slate-600">Tools</span>
                              
                              {/* TOOLS DROPDOWN */}
                              <AnimatePresence>
                                 {(step === 2 || step === 3) && (
                                    <motion.div 
                                       initial={{ opacity: 0, y: 10 }}
                                       animate={{ opacity: 1, y: 0 }}
                                       exit={{ opacity: 0, y: 10 }}
                                       className="absolute bottom-full left-0 mb-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 p-1 z-50 overflow-hidden"
                                    >
                                       <div className="px-3 py-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider">Extensions</div>
                                       <motion.div 
                                          animate={step === 3 ? { backgroundColor: '#eff6ff' } : { backgroundColor: 'transparent' }}
                                          className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer"
                                       >
                                          <Banana className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                          <span className="text-sm font-medium text-slate-700">Image Nano Banana 2</span>
                                          {step === 3 && <Check className="w-3 h-3 text-blue-500 ml-auto" />}
                                       </motion.div>
                                       <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-50 opacity-50">
                                          <Wand2 className="w-4 h-4 text-slate-400" />
                                          <span className="text-sm font-medium text-slate-600">Standard Gen</span>
                                       </div>
                                    </motion.div>
                                 )}
                              </AnimatePresence>
                           </motion.div>
                        </div>
                        <div className="flex items-center gap-4">
                           <span className="text-xs font-medium text-slate-500">Fast</span>
                           <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white">
                              <ArrowRight className="w-4 h-4" />
                           </div>
                        </div>
                     </div>
                  </motion.div>
               )}
            </AnimatePresence>

            {/* Gemini Response Area */}
            <div className="flex-1 flex items-center justify-center min-h-[250px]">
               <AnimatePresence mode="wait">
                  {step === 5 && (
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="flex flex-col items-center gap-4"
                     >
                        <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full animate-spin blur-sm"></div>
                        <p className="text-slate-500 font-medium animate-pulse flex items-center gap-2">
                           <Banana className="w-4 h-4 text-yellow-500" /> Generating with Nano Banana...
                        </p>
                     </motion.div>
                  )}

                  {step === 6 && (
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full h-full rounded-2xl overflow-hidden shadow-md border-4 border-white"
                     >
                        {/* THE SUPER GIRL IMAGE */}
                        <img 
                           src="/supergirl.png"
                           alt="Super Girl" 
                           className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm flex items-center gap-1">
                           <Banana className="w-3 h-3 text-yellow-400" /> Generated with Nano Banana 2
                        </div>
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
         </div>

         {/* Bottom Action Bar (Banana Button) */}
         <div className="bg-white p-4 border-t border-slate-200 relative z-10">
            <div className="flex gap-2 overflow-x-auto pb-2">
               {/* BANANA BUTTON - TARGET FOR CLICK */}
               <motion.button 
                  animate={step === 4 ? { scale: 0.9, backgroundColor: "#e2e8f0" } : { scale: 1, backgroundColor: "#f1f5f9" }}
                  className="flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors shrink-0 border border-slate-200"
               >
                  <Banana className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-bold text-slate-700">Create image</span>
               </motion.button>

               <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shrink-0">
                  <span className="text-red-500">🎸</span> <span className="text-sm font-medium text-slate-600">Create music</span>
               </button>
               <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shrink-0">
                  <span className="text-sm font-medium text-slate-600">Write anything</span>
               </button>
            </div>
         </div>

         {/* Cursor */}
         <motion.div 
            animate={getCursorPos()}
            className="absolute w-8 h-8 pointer-events-none z-50 drop-shadow-xl hidden md:block"
            transition={{ duration: 0.5, ease: "easeInOut" }}
         >
             <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19823L11.4818 12.3673H5.65376Z" fill="black" stroke="white" strokeWidth="1.5"/>
             </svg>
         </motion.div>
      </div>
   );
};

const Typewriter = ({ text, speed }) => {
   const [display, setDisplay] = useState('');
   useEffect(() => {
      let i = 0;
      const timer = setInterval(() => {
         setDisplay(text.substring(0, i));
         i++;
         if (i > text.length) clearInterval(timer);
      }, speed);
      return () => clearInterval(timer);
   }, [text, speed]);
   return <span>{display}</span>;
}

// Icons
const PlusCircle = ({className}) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>)
const SettingsIcon = ({className}) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>)

export default Lesson3_1;