import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Image as ImageIcon, Camera, Palette, Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';

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
                      "Generate an image of a futuristic eco-city <span className="text-white/50">(Subject)</span> built into a vertical jungle cliff <span className="text-white/50">(Setting)</span>. Cinematic lighting, photorealistic, 8k resolution, wide angle shot <span className="text-white/50">(Style)</span>."
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

export default Lesson3_1;