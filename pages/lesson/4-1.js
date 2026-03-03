import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Mail, FileText, Database, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

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
            <Link href="/lesson/3-2" className="hover:text-blue-600 transition-colors">3.2 Video</Link>
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

          {/* The Privacy Note (Crucial) */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-16 flex gap-4 items-start">
             <ShieldCheck className="w-6 h-6 text-green-600 mt-1 shrink-0" />
             <div>
                <h4 className="font-bold text-green-900 mb-1">Privacy First</h4>
                <p className="text-sm text-green-800">
                   When you use Workspace extensions, Google does <strong>not</strong> use your personal data (Docs, Drive, Gmail) to train the public Gemini models. Your data stays yours.
                </p>
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

          {/* How to Enable */}
          <div className="mb-24 bg-white p-10 rounded-3xl border border-slate-100 shadow-xl">
             <h3 className="text-3xl font-bold mb-8 text-slate-900">How to Turn It On</h3>
             <ol className="relative border-l border-slate-200 ml-4 space-y-12">
                <Step 
                   number="1" 
                   title="Open Settings" 
                   desc="Go to gemini.google.com and click the 'Settings' (gear icon) in the bottom left." 
                />
                <Step 
                   number="2" 
                   title="Extensions" 
                   desc="Select 'Extensions' from the menu." 
                />
                <Step 
                   number="3" 
                   title="Activate Google Workspace" 
                   desc="Toggle the switch to 'On'. You might need to sign in again to grant permission." 
                />
                <Step 
                   number="4" 
                   title="Use the @ Symbol" 
                   desc="In the chat, type '@Google Drive' or just ask naturally. Gemini will know where to look." 
                />
             </ol>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
            <Link href="/lesson/3-2" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors group">
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

export default Lesson4_1;