import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Zap, Code, ImageIcon, Brain, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const LessonGemini31Pro = () => {
  return (
    <>
      <Head>
        <title>Gemini 3.1 Pro: The Next Evolution | Gemini Academy</title>
        <meta name="description" content="Explore Gemini 3.1 Pro: next-gen reasoning, coding, and multimodal AI. Learn how to access its advanced capabilities today." />
        <meta name="keywords" content="gemini 3.1 pro, gemini 3.1 features, google gemini update, advanced ai, multimodal ai" />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="max-w-4xl mx-auto px-6 py-16">
          
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
            <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
            <span>/</span>
            <span className="text-slate-900">New Release • Gemini 3.1 Pro</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-4">New Release</span>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
              Introducing Gemini 3.1 Pro: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">The Next Evolution in AI</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
              Gemini 3.1 Pro takes the powerful capabilities of Gemini 3 and pushes them further, offering enhanced reasoning, superior coding assistance, and even more robust multimodal understanding.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg">
              <Brain className="w-10 h-10 text-purple-500 mb-6" />
              <h3 className="text-2xl font-bold mb-3">Advanced Reasoning</h3>
              <p className="text-slate-600">
                Tackle complex problems with Gemini 3.1 Pro's significantly improved analytical capabilities, delivering more accurate and insightful solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg">
              <Code className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-3">Superior Coding Assistant</h3>
              <p className="text-slate-600">
                From code generation to debugging and explanation, Gemini 3.1 Pro provides an unparalleled coding experience across multiple programming languages.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg">
              <ImageIcon className="w-10 h-10 text-green-500 mb-6" />
              <h3 className="text-2xl font-bold mb-3">Robust Multimodal Understanding</h3>
              <p className="text-slate-600">
                Seamlessly process and generate content across text, images, audio, and video, understanding context and nuances like never before.
              </p>
            </div>
             <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg">
              <Lock className="w-10 h-10 text-red-500 mb-6" />
              <h3 className="text-2xl font-bold mb-3">Enhanced Safety & Privacy</h3>
              <p className="text-slate-600">
                Built with even stronger safeguards and privacy controls, ensuring a more responsible and secure AI interaction.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-10 mb-16">
            <h3 className="text-2xl font-bold mb-6">How to Access Gemini 3.1 Pro</h3>
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <p className="font-bold text-lg">Gemini Advanced Subscription</p>
                  <p className="text-slate-400">Gemini 3.1 Pro is available to all <a href="https://gemini.google.com/advanced" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Gemini Advanced</a> subscribers.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <p className="font-bold text-lg">Google AI Studio</p>
                  <p className="text-slate-400">Developers can access the API through <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Google AI Studio</a> for integration into applications.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <p className="font-bold text-lg">Early Access Programs</p>
                  <p className="text-slate-400">Stay tuned for announcements regarding early access programs for enterprise clients and specific research initiatives.</p>
                </div>
              </li>
            </ol>
            <div className="mt-10">
              <a href="https://gemini.google.com/advanced" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors">
                Upgrade to Gemini Advanced <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
            <Link href="/syllabus" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Syllabus
            </Link>
            <Link href="/lesson/advanced-multimodal-applications" className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors">
              Next: Advanced Multimodal Apps <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default LessonGemini31Pro;
