import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Zap, Star, Cpu, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const LessonTryGemini3 = () => {
  return (
    <>
      <Head>
        <title>Try Gemini 3: The New Standard | Gemini Academy</title>
        <meta name="description" content="Why everyone is searching 'Try Gemini 3'. Experience the speed, multimodal reasoning, and seamless Google integration of the new v3 model." />
        <meta name="keywords" content="try gemini 3, gemini 3 features, google gemini update, gemini 3 vs 2, ai model comparison 2026" />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="max-w-4xl mx-auto px-6 py-16">
          
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
            <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
            <span>/</span>
            <span className="text-slate-900">Trending • Try Gemini 3</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold tracking-wide uppercase mb-4">Trending Now</span>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
              Why Everyone Is Searching <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-500">&quot;Try Gemini 3&quot;</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
              The search trends don't lie. Gemini 3 has arrived, and it's not just an update—it's a new species of AI. Here is why you need to switch today.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg">
              <Zap className="w-10 h-10 text-yellow-500 mb-6" />
              <h3 className="text-2xl font-bold mb-3">Instant Reasoning</h3>
              <p className="text-slate-600">
                Gemini 3 doesn't just guess next words. It thinks. The new &quot;Flash-Thinking&quot; architecture means complex logic puzzles that took 30 seconds now take 2.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg">
              <Globe className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-3">Real-Time World Model</h3>
              <p className="text-slate-600">
                Unlike competitors cut off from data, Gemini 3 lives in the live web. It knows the stock price <i>now</i>, not yesterday.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-10 mb-16">
            <h3 className="text-2xl font-bold mb-6">How to Try Gemini 3 Right Now</h3>
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <p className="font-bold text-lg">Go to gemini.google.com</p>
                  <p className="text-slate-400">If you have a Google account, you already have access.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <p className="font-bold text-lg">Check the Model Dropdown</p>
                  <p className="text-slate-400">Ensure &quot;Gemini Advanced&quot; or &quot;Gemini 3 Experimental&quot; is selected in the top left.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <p className="font-bold text-lg">Run the &quot;Impossible&quot; Test</p>
                  <p className="text-slate-400">Ask it: <i>&quot;Look at this image of my fridge and plan a 3-course meal for a keto diet, then add the ingredients to my Keep shopping list.&quot;</i> Only Gemini 3 can do the last part.</p>
                </div>
              </li>
            </ol>
            <div className="mt-10">
              <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
                Launch Gemini 3 <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
            <Link href="/syllabus" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Syllabus
            </Link>
            <Link href="/lesson/gemini-vs-claude-vs-chatgpt" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
              Next: The Big Comparison <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default LessonTryGemini3;