import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Diamond, Code, Cpu, Hammer } from 'lucide-react';
import { motion } from 'framer-motion';

const Lesson5_1 = () => {
  return (
    <>
      <Head>
        <title>Lesson 5.1: Build Custom Gems | Gemini Academy</title>
        <meta name="description" content="Stop repeating yourself. Learn how to build custom 'Gems'—your own personalized AI experts that remember your instructions forever." />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-[100%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
            <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
            <span>/</span>
            <Link href="/lesson/4-1" className="hover:text-blue-600 transition-colors">4.1 Workspace</Link>
            <span>/</span>
            <span className="text-slate-900">5.1 Custom Gems</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-fuchsia-100 text-fuchsia-700 text-xs font-bold tracking-wide uppercase mb-4">Module 5 • Advanced</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600 pb-2">
              Clone Your Brain. <br />
              <span className="text-slate-800">Build a Gem.</span>
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              Tired of typing the same context prompt every time? Create a <strong>Gem</strong> once, and use it forever. It's like hiring a specialist.
            </p>
          </motion.div>

          {/* What is a Gem? */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
             <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative">
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-fuchsia-500 to-purple-600 w-20 h-20 rounded-2xl rotate-12 flex items-center justify-center shadow-lg">
                   <Diamond className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">The "Marketing Gem" Example</h3>
                <p className="text-slate-600 mb-6">
                   Instead of telling Gemini: "I am a marketing manager, write a post...", you simply open your <strong>"Marketing Pro"</strong> Gem.
                </p>
                <div className="bg-slate-50 p-4 rounded-xl text-sm border border-slate-200">
                   <p className="text-slate-500 text-xs uppercase font-bold mb-2">Pre-loaded Instructions:</p>
                   <p className="text-slate-700 font-mono">
                      "You are a Senior Copywriter. Tone: Witty, concise. Format: LinkedIn Carousel. Always include 3 viral hooks."
                   </p>
                </div>
             </div>
             <div>
                <h3 className="text-3xl font-bold mb-6 text-slate-900">Why Build Gems?</h3>
                <ul className="space-y-6">
                   <Benefit 
                      icon={<Cpu className="w-5 h-5 text-blue-500" />} 
                      title="Consistency" 
                      desc="The Gem never forgets its role. It won't drift out of character." 
                   />
                   <Benefit 
                      icon={<Hammer className="w-5 h-5 text-orange-500" />} 
                      title="Efficiency" 
                      desc="Save the 5 minutes of 'setup' time for every new chat." 
                   />
                   <Benefit 
                      icon={<Code className="w-5 h-5 text-green-500" />} 
                      title="Complexity" 
                      desc="Give it complex coding rules or brand guidelines that are too long to type repeatedly." 
                   />
                </ul>
             </div>
          </div>

          {/* Step-by-Step Guide */}
          <div className="mb-24">
             <h3 className="text-3xl font-bold mb-10 text-center text-slate-900">Create Your First Gem in 3 Steps</h3>
             <div className="grid md:grid-cols-3 gap-6">
                <StepCard 
                   step="1" 
                   title="Gem Manager" 
                   desc="Open Gemini Advanced. Click on 'Gem Manager' in the sidebar."
                />
                <StepCard 
                   step="2" 
                   title="Define Instructions" 
                   desc="Give it a name (e.g., 'Python Tutor') and write the system instructions. Be specific!"
                />
                <StepCard 
                   step="3" 
                   title="Save & Chat" 
                   desc="That's it. Your new Gem will appear in the sidebar. Click it to start a specialized chat."
                />
             </div>
          </div>

          {/* Graduation */}
          <div className="bg-slate-900 text-white p-12 rounded-3xl text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
             <h2 className="text-4xl font-extrabold mb-6 relative z-10">🎓 You've Completed the Course!</h2>
             <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
                You now know more about Gemini than 99% of users. 
                You understand reasoning, multimodal prompts, workspace integration, and custom gems.
             </p>
             <div className="flex justify-center gap-4 relative z-10">
                <Link href="/syllabus" className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-colors">
                   Back to Syllabus
                </Link>
                <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-500 transition-colors">
                   Start Building
                </a>
             </div>
          </div>

        </div>
      </div>
    </>
  );
};

const Benefit = ({ icon, title, desc }) => (
   <div className="flex gap-4">
      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
         {icon}
      </div>
      <div>
         <h4 className="font-bold text-slate-900">{title}</h4>
         <p className="text-sm text-slate-600">{desc}</p>
      </div>
   </div>
);

const StepCard = ({ step, title, desc }) => (
   <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg text-center">
      <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-md">
         {step}
      </div>
      <h4 className="font-bold text-lg text-slate-900 mb-3">{title}</h4>
      <p className="text-slate-600 text-sm">{desc}</p>
   </div>
);

export default Lesson5_1;