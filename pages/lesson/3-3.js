import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Video, Image as ImageIcon, Wand2, Play, Zap, Loader2, Sparkles } from 'lucide-react';
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

          {/* PART 1: TEXT TO VIDEO */}
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
                
                {/* INTERACTIVE VIDEO PLAYER 1 */}
                <VideoSimulation type="city" />
                
             </div>
          </div>

          {/* PART 2: THE WHISKEY TRICK (IMAGE TO VIDEO) */}
          <div className="mb-24">
             <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">2. The "Whiskey Commercial" Trick</h2>
                <p className="text-slate-600">How to turn a boring product photo into a luxury ad.</p>
             </div>
             
             <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                    {/* LEFT: INPUT */}
                    <div className="p-10 border-r border-slate-100 bg-slate-50">
                        <h3 className="font-bold text-slate-500 uppercase text-xs mb-6">Step 1: The Input</h3>
                        <div className="mb-6">
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 inline-block rotate-[-2deg]">
                                <div className="w-full h-48 bg-slate-200 rounded-lg flex items-center justify-center text-4xl">
                                    🥃
                                </div>
                                <p className="text-xs text-center text-slate-400 mt-2">static_bottle.jpg</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-200">
                            <p className="text-xs text-slate-400 font-bold mb-2">THE PROMPT:</p>
                            <p className="font-mono text-sm text-slate-700">
                                "Turn this image into a cinematic commercial. Slow zoom in. 
                                <span className="bg-yellow-100 text-yellow-800 px-1">Amber liquid swirling</span> inside the bottle. 
                                <span className="bg-yellow-100 text-yellow-800 px-1">Dim luxury bar lighting</span> in the background. 
                                4k, high resolution."
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: OUTPUT (SIMULATION) */}
                    <div className="p-10 bg-slate-900 text-white flex flex-col justify-center items-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-black"></div>
                        <h3 className="font-bold text-white/50 uppercase text-xs mb-6 relative z-10">Step 2: The Result</h3>
                        
                        {/* INTERACTIVE VIDEO PLAYER 2 */}
                        <VideoSimulation type="whiskey" />
                        
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

// --- SIMULATED VIDEO PLAYER COMPONENT ---
const VideoSimulation = ({ type }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
        setIsLoading(true);
        
        // Simulate "generation" time
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    // CITY ANIMATION (Background pan)
    if (type === 'city') {
        return (
            <div className="aspect-video bg-black rounded-xl overflow-hidden relative group max-w-2xl mx-auto border border-slate-700 cursor-pointer" onClick={!isPlaying ? handlePlay : undefined}>
                {!isPlaying ? (
                    // IDLE STATE
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/40"></div>
                        <div className="text-center z-10">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mx-auto mb-2 hover:scale-110 transition-transform">
                                <Play className="w-8 h-8 text-white fill-white ml-1" />
                            </div>
                            <span className="text-sm font-medium text-white/70">Click to Generate Video</span>
                        </div>
                    </div>
                ) : (
                    // PLAYING STATE
                    <div className="w-full h-full relative">
                        {isLoading ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-20">
                                <Loader2 className="w-8 h-8 text-purple-500 animate-spin mb-2" />
                                <span className="text-xs text-purple-300 font-mono animate-pulse">Generating video...</span>
                            </div>
                        ) : (
                            <div className="relative w-full h-full overflow-hidden">
                                {/* SIMULATED VIDEO MOVEMENT: Panning gradient/shapes */}
                                <motion.div 
                                    initial={{ scale: 1.2, x: -50 }}
                                    animate={{ scale: 1, x: 0 }}
                                    transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
                                    className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900"
                                >
                                    {/* City lights simulation */}
                                    <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full blur-[2px] shadow-[0_0_10px_#60a5fa]"></div>
                                    <div className="absolute top-1/3 left-3/4 w-1 h-1 bg-pink-400 rounded-full blur-[1px] shadow-[0_0_10px_#f472b6]"></div>
                                    <div className="absolute bottom-1/4 right-1/4 w-32 h-64 bg-black/30 rotate-12 blur-xl"></div>
                                </motion.div>
                                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                     <span className="text-[10px] text-white/50 bg-black/50 px-2 py-1 rounded">00:04 / 00:06</span>
                                </div>
                            </div>
                        )}
                        <div className="absolute bottom-4 right-4 text-xs text-white/50 z-20 flex items-center gap-1">
                             <Sparkles className="w-3 h-3" /> Generated with Veo
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // WHISKEY ANIMATION (Zoom & Glow)
    if (type === 'whiskey') {
        return (
            <div className="relative z-10 w-full aspect-[9/16] max-w-[200px] bg-black rounded-2xl overflow-hidden shadow-2xl border border-amber-500/30 group cursor-pointer" onClick={!isPlaying ? handlePlay : undefined}>
                {!isPlaying ? (
                    // IDLE
                     <div className="absolute inset-0 flex items-center justify-center bg-amber-950/50 hover:bg-amber-950/40 transition-colors">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform">
                             <Play className="w-5 h-5 text-white fill-white ml-1" />
                        </div>
                    </div>
                ) : (
                    // PLAYING
                    <div className="w-full h-full relative">
                        {isLoading ? (
                             <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-20">
                                <Loader2 className="w-6 h-6 text-amber-500 animate-spin" />
                             </div>
                        ) : (
                            <div className="w-full h-full relative overflow-hidden">
                                {/* Simulated Liquid Motion */}
                                <motion.div 
                                    animate={{ 
                                        scale: [1, 1.15],
                                        rotate: [0, 2, -1, 0]
                                    }}
                                    transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                                    className="w-full h-full bg-gradient-to-b from-amber-900/40 to-amber-600/20 flex items-center justify-center"
                                >
                                    <div className="relative">
                                        <div className="text-6xl filter drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">🥃</div>
                                        {/* Liquid reflections */}
                                        <motion.div 
                                            animate={{ opacity: [0, 0.5, 0], x: [-10, 10] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            className="absolute top-0 left-0 w-full h-full bg-white/20 blur-xl rounded-full"
                                        ></motion.div>
                                    </div>
                                </motion.div>
                                
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                                <div className="absolute bottom-6 left-0 w-full text-center z-10 pointer-events-none">
                                    <p className="text-amber-100 font-serif text-lg tracking-widest drop-shadow-lg">GOLD LABEL</p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
                
                <div className="absolute top-4 right-4 z-30 pointer-events-none">
                    <span className="bg-black/50 text-white text-[8px] px-1.5 py-0.5 rounded backdrop-blur-md border border-white/10">AI GENERATED</span>
                </div>
            </div>
        );
    }
};

export default Lesson3_3;