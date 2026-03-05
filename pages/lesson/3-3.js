import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Video, Image as ImageIcon, Wand2, Play, Zap, Loader2, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Lesson3_3 = () => {
  return (
    <>
      <Head>
        <title>Lesson 3.3: Video Creation with Veo | Gemini Academy</title>
        <meta name="description" content="Turn text and images into video using Google's Veo model inside Gemini. Create commercials from static photos." />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
          <div className="h-full bg-gradient-to-r from-pink-600 to-purple-600 w-[65%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
            <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
            <span>/</span>
            <Link href="/lesson/3-2" className="hover:text-blue-600 transition-colors">3.2 Video Analysis</Link>
            <span>/</span>
            <span className="text-slate-900">3.3 Video Creation (Veo)</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold tracking-wide uppercase mb-4">Module 3 • Multimedia</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 pb-2">
              From Static to Magic: <br />
              <span className="text-slate-800">Creating Video.</span>
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              Meet <strong>Veo</strong>, Google's generative video model. It can turn a simple sentence—or a boring photo—into a cinematic movie.
            </p>
          </motion.div>

          {/* Intro Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-24 max-w-2xl mx-auto">
             <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4"><Zap className="w-5 h-5 text-purple-600" /></div>
                <h3 className="font-bold text-slate-900 mb-2">Text-to-Video</h3>
                <p className="text-sm text-slate-600">Type "A cyberpunk city in rain" and watch it come alive.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-4"><ImageIcon className="w-5 h-5 text-pink-600" /></div>
                <h3 className="font-bold text-slate-900 mb-2">Image-to-Video</h3>
                <p className="text-sm text-slate-600"><strong>The Whiskey Trick:</strong> Turn product photos into commercials.</p>
             </div>
          </div>

          {/* PART 1: TEXT TO VIDEO (REAL ASSETS) */}
          <div className="mb-24">
             <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">1. Text-to-Video</h2>
                <p className="text-slate-600">Just like image generation, but it moves. Click play to see it in action.</p>
             </div>
             
             <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-center group">
                <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-left max-w-lg mx-auto mb-8">
                   <p className="text-xs text-slate-400 uppercase font-bold mb-2">The Prompt:</p>
                   <p className="font-mono text-lg text-purple-300">"Cinematic drone shot of a futuristic city with neon lights, 4k, realistic"</p>
                </div>
                
                {/* REAL VIDEO PLAYER 1 (City) */}
                <div className="aspect-video bg-black rounded-xl overflow-hidden relative group max-w-2xl mx-auto border border-slate-700 shadow-2xl">
                    <video 
                        controls 
                        className="w-full h-full object-cover"
                        poster="https://images.pexels.com/videos/32288208/free-video-32288208.jpg?auto=compress&cs=tinysrgb&fit=crop&h=720&w=1280"
                    >
                        <source src="/city.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute bottom-4 left-4 text-xs text-white/50 pointer-events-none drop-shadow-md">Generated with Veo</div>
                </div>
                
             </div>
          </div>

          {/* PART 2: THE WHISKEY TRICK (IMAGE TO VIDEO) - REAL ASSETS */}
          <div className="mb-24">
             <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">2. The "Whiskey Commercial" Trick</h2>
                <p className="text-slate-600">How to turn a boring product photo into a luxury ad.</p>
             </div>
             
             <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                    {/* LEFT: INPUT (Static Image) */}
                    <div className="p-10 border-r border-slate-100 bg-slate-50 flex flex-col justify-center">
                        <h3 className="font-bold text-slate-500 uppercase text-xs mb-6 text-center">Step 1: The Input</h3>
                        <div className="mb-6 flex justify-center">
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 inline-block rotate-[-2deg] max-w-[220px]">
                                {/* REAL IMAGE */}
                                <img 
                                    src="/macallan.jpg" 
                                    alt="Static Whiskey Bottle" 
                                    className="rounded-lg mb-2 w-full h-auto object-cover" 
                                />
                                <p className="text-xs text-center text-slate-400 mt-2">static_bottle.jpg</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-200">
                            <p className="text-xs text-slate-400 font-bold mb-2">THE PROMPT:</p>
                            <p className="font-mono text-sm text-slate-700 leading-relaxed">
                                "Turn this image into a cinematic commercial. Slow zoom in. 
                                <span className="bg-yellow-100 text-yellow-800 px-1 rounded mx-1">Amber liquid swirling</span> inside the bottle. 
                                <span className="bg-yellow-100 text-yellow-800 px-1 rounded mx-1">Dim luxury bar lighting</span> in the background. 
                                4k, high resolution."
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: OUTPUT (Real Video) */}
                    <div className="p-10 bg-slate-900 text-white flex flex-col justify-center items-center relative overflow-hidden min-h-[500px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/40 to-black"></div>
                        <h3 className="font-bold text-white/50 uppercase text-xs mb-6 relative z-10">Step 2: The Result</h3>
                        
                        {/* REAL VIDEO PLAYER 2 (Whiskey) */}
                        <div className="relative z-10 w-full max-w-[280px] bg-black rounded-2xl overflow-hidden shadow-2xl border border-amber-500/30 group aspect-[9/16]">
                            <video 
                                controls 
                                poster="/macallan.jpg"
                                className="w-full h-full object-cover"
                            >
                                <source src="/whisky-commercial.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            <div className="absolute top-4 right-4 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="bg-black/50 text-white text-[8px] px-1.5 py-0.5 rounded backdrop-blur-md border border-white/10">AI GENERATED</span>
                            </div>
                        </div>
                        
                        <p className="mt-6 text-sm text-slate-400 text-center relative z-10 max-w-xs">
                            Gemini understands the physics of liquid and lighting, creating movement where there was none.
                        </p>
                    </div>
                </div>
             </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
            <Link href="/lesson/3-2" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Previous
            </Link>
            <Link href="/lesson/4-1" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20 group">
              Module 4: Workspace <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lesson3_3;