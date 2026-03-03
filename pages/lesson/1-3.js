import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, MousePointer, Mic, Image as ImageIcon, Send, RotateCcw, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Lesson1_3 = () => {
  return (
    <>
      <Head>
        <title>Lesson 1.3: Tour the Interface | Gemini Academy</title>
        <meta name="description" content="A step-by-step guide to the Gemini screen. Learn what every button does, where to type, and how to start a new chat." />
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

          {/* The Interactive Map */}
          <div className="mb-20 bg-white p-4 rounded-3xl shadow-xl border border-slate-200">
             <div className="bg-slate-100 rounded-2xl p-8 md:p-12 relative overflow-hidden text-center">
                {/* Simulated Gemini Interface */}
                <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-left relative">
                   
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

                   <div className="h-32 flex items-center justify-center text-slate-300 italic mb-6">
                      (Conversation appears here...)
                   </div>

                   {/* Input Area Visual */}
                   <div className="mt-8 border-2 border-blue-200 rounded-2xl p-4 bg-white shadow-lg relative">
                      <div className="absolute -top-3 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">The Magic Box</div>
                      <div className="flex items-center gap-3">
                         <div className="p-2 bg-slate-100 rounded-full cursor-pointer hover:bg-slate-200 transition-colors relative group">
                            <ImageIcon className="w-5 h-5 text-slate-500" />
                            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-32 bg-slate-800 text-white text-xs p-2 rounded text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                               Upload Photo
                            </div>
                         </div>
                         <div className="p-2 bg-slate-100 rounded-full cursor-pointer hover:bg-slate-200 transition-colors relative group">
                            <Mic className="w-5 h-5 text-slate-500" />
                            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-32 bg-slate-800 text-white text-xs p-2 rounded text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                               Voice Input
                            </div>
                         </div>
                         <input type="text" placeholder="Type your prompt here..." className="flex-1 outline-none text-slate-600 bg-transparent font-medium" disabled />
                         <div className="p-3 bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700 shadow-md transition-transform hover:scale-105">
                            <Send className="w-4 h-4 text-white" />
                         </div>
                      </div>
                   </div>
                </div>
                <p className="mt-6 text-slate-500 text-sm font-medium">👇 Hover over the icons above to see what they do!</p>
             </div>
          </div>

          {/* Detailed Explanations */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
             <FeatureDetail 
                number="1" 
                title="The Menu (History)" 
                icon={<Menu className="w-6 h-6 text-slate-600" />}
                desc="Top left corner. Click this to see your past conversations. It's like your email inbox."
             />
             <FeatureDetail 
                number="2" 
                title="New Chat" 
                icon={<RotateCcw className="w-6 h-6 text-green-600" />}
                desc="Important! Always start a 'New Chat' when you change topics. Don't mix a recipe request with a work email."
             />
             <FeatureDetail 
                number="3" 
                title="Upload Image" 
                icon={<ImageIcon className="w-6 h-6 text-purple-600" />}
                desc="The '+' or Image icon. Click this to select a photo from your computer to show Gemini."
             />
             <FeatureDetail 
                number="4" 
                title="Microphone" 
                icon={<Mic className="w-6 h-6 text-red-600" />}
                desc="Don't like typing? Click this and just speak. It understands accents perfectly."
             />
          </div>

          {/* Pro Tip for Seniors */}
          <div className="bg-amber-50 border border-amber-200 p-8 rounded-3xl flex gap-6 items-start">
             <div className="bg-white p-3 rounded-full shadow-sm">
                <MousePointer className="w-6 h-6 text-amber-600" />
             </div>
             <div>
                <h3 className="font-bold text-amber-900 text-xl mb-2">The "Enter" Key Trap</h3>
                <p className="text-amber-800 leading-relaxed">
                   <strong>Common mistake:</strong> Many people press "Enter" on their keyboard thinking it will start a new line, but it sends the message!
                   <br/><br/>
                   <strong>Solution:</strong> Hold down the <code className="bg-white px-2 py-1 rounded border border-amber-200 font-bold">Shift</code> key and then press <code className="bg-white px-2 py-1 rounded border border-amber-200 font-bold">Enter</code> to go down a line without sending.
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