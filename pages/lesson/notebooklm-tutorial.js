import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Headphones, FileText, Mic, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const LessonNotebookLM = () => {
  return (
    <>
      <Head>
        <title>NotebookLM Tutorial: The Viral AI Researcher | Gemini Academy</title>
        <meta name="description" content="Master NotebookLM, the viral Google tool that turns PDFs into podcasts. Learn source grounding, audio overviews, and how to study 10x faster." />
        <meta name="keywords" content="notebooklm tutorial, google notebooklm, ai podcast generator, study with ai, notebooklm guide" />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="max-w-4xl mx-auto px-6 py-16">
          
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
            <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
            <span>/</span>
            <span className="text-slate-900">Trending • NotebookLM</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-wide uppercase mb-4">Viral Tool</span>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
              Turn Your Notes Into a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">Deep Dive Podcast.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
              NotebookLM is the fastest-growing tool in the Gemini ecosystem (+40% this week). 
              Why? Because it fixes the biggest problem with AI: <strong>Hallucinations.</strong>
            </p>
          </motion.div>

          {/* Feature Highlight: Audio Overview */}
          <div className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl mb-20 relative">
            <div className="absolute top-0 right-0 p-32 bg-green-500/20 rounded-full blur-[100px]"></div>
            <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-bold text-green-300 mb-6 border border-white/10">
                  <Headphones className="w-4 h-4" /> The Viral Feature
                </div>
                <h3 className="text-3xl font-bold mb-4">Audio Overviews</h3>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Upload a 50-page PDF, a Google Doc, or a website. NotebookLM generates a 
                  <strong> stunningly realistic podcast</strong> where two AI hosts discuss your material.
                  They banter, use metaphors, and summarize deep concepts.
                </p>
                <div className="flex gap-4">
                  <button className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-slate-200 transition-colors flex items-center gap-2">
                    <Mic className="w-4 h-4" /> Listen to Demo
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-white/10 flex items-center justify-center">
                <div className="flex gap-2 items-end h-20">
                  <div className="w-3 bg-green-500 rounded-full animate-[bounce_1s_infinite] h-12"></div>
                  <div className="w-3 bg-green-500 rounded-full animate-[bounce_1.2s_infinite] h-20"></div>
                  <div className="w-3 bg-green-500 rounded-full animate-[bounce_0.8s_infinite] h-8"></div>
                  <div className="w-3 bg-green-500 rounded-full animate-[bounce_1.1s_infinite] h-16"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Why It's Different */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Source Grounding</h3>
              <p className="text-slate-600">
                Regular Gemini uses the whole internet. NotebookLM <strong>only</strong> uses the documents you upload. 
                If it's not in your source, it won't say it. Zero hallucinations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Instant Citations</h3>
              <p className="text-slate-600">
                Every answer comes with footnotes. Click a citation ([1]), and it jumps to the exact paragraph in your PDF where the info came from.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
            <Link href="/lesson/gemini-vs-claude-vs-chatgpt" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Previous Lesson
            </Link>
            <Link href="/syllabus" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors">
              Back to Syllabus
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default LessonNotebookLM;