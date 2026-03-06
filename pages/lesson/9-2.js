import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Plane, MapPin, Mail, Calendar, Check, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Lesson9_2 = () => {
  return (
    <>
      <Head>
        <title>Lesson 9.2: Gemini Extensions (Flights, Maps, YouTube) | Gemini Academy</title>
        <meta name="description" content="Turn Gemini into your personal travel agent and research assistant using Google Extensions." />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-[90%]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
            <Link href="/syllabus" className="hover:text-blue-600 transition-colors">Syllabus</Link>
            <span>/</span>
            <span className="text-slate-900">Module 9</span>
            <span>/</span>
            <span className="text-slate-900">9.2 Extensions</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-wide uppercase mb-4">Module 9 • Ecosystem</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900">
              Your Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Travel Agent</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              Don't open 10 tabs to plan a trip. Do it all in one chat.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold mb-4 flex gap-2 items-center"><Globe className="text-blue-500"/> The Old Way</h3>
                <p className="text-slate-600 mb-4">
                   - Tab 1: Skyscanner<br/>
                   - Tab 2: Booking.com<br/>
                   - Tab 3: Google Maps<br/>
                   - Tab 4: Gmail<br/>
                   <strong>Result:</strong> Chaos.
                </p>
             </div>
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold mb-4 flex gap-2 items-center"><Check className="text-green-500"/> The Gemini Way</h3>
                <p className="text-slate-600 mb-4">
                   Just ask:<br/>
                   "<strong>@Flights</strong> find tickets to London and <strong>@Maps</strong> find a hotel near the museum."
                </p>
             </div>
          </div>

          {/* SIMULATION: Travel Planning */}
          <div className="mb-24 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative">
             <div className="text-center py-3 border-b border-slate-800 text-slate-400 text-xs font-mono uppercase tracking-widest">
                Gemini Extensions Simulation
             </div>
             <div className="p-8 md:p-12">
                <ExtensionsSimulation />
             </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-600 p-8 rounded-r-xl mb-16">
            <h3 className="text-xl font-bold text-orange-900 mb-4">✈️ The "Trip Planner" Prompt</h3>
            <div className="bg-white p-4 rounded-lg border border-orange-200 shadow-sm font-mono text-sm text-slate-700">
              <p>
                "<strong>@Flights</strong> find me non-stop flights from Tel Aviv to London for next weekend under $600.
                <br/><br/>
                Then <strong>@Maps</strong> find a 4-star hotel near 'The British Museum'.
                <br/><br/>
                Finally, <strong>@Gmail</strong> draft an email to my partner with the itinerary."
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-slate-200">
            <Link href="/lesson/9-1" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Previous Lesson
            </Link>
            <Link href="/lesson/10-1" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20">
              Next: Master Class <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

// --- EXTENSIONS SIMULATION COMPONENT ---
const ExtensionsSimulation = () => {
  const [step, setStep] = useState(0); 

  useEffect(() => {
    const run = async () => {
      setStep(0); 
      await new Promise(r => setTimeout(r, 1000));
      setStep(1); // Prompt: @Flights
      await new Promise(r => setTimeout(r, 1000));
      setStep(2); // AI: Flight Card
      await new Promise(r => setTimeout(r, 3000));
      setStep(3); // Prompt: @Maps
      await new Promise(r => setTimeout(r, 1000));
      setStep(4); // AI: Map Card
      await new Promise(r => setTimeout(r, 3000));
      setStep(5); // Prompt: @Gmail
      await new Promise(r => setTimeout(r, 1000));
      setStep(6); // AI: Email Draft
      await new Promise(r => setTimeout(r, 4000));
      run();
    };
    run();
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto bg-slate-950 rounded-xl overflow-hidden shadow-2xl font-sans text-sm border border-slate-800">
       
       {/* Chat Area */}
       <div className="h-[400px] p-6 flex flex-col gap-6 overflow-y-auto scroll-smooth">
          
          {/* USER: FLIGHTS */}
          <AnimatePresence>
             {step >= 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="self-end bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">
                   <span className="font-bold bg-white/20 px-1 rounded mr-1">@Flights</span> to London next weekend.
                </motion.div>
             )}
          </AnimatePresence>

          {/* AI: FLIGHT CARD */}
          <AnimatePresence>
             {step >= 2 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="self-start w-full max-w-[90%]">
                   <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-lg">
                      <div className="flex items-center gap-2 mb-3 text-slate-400 text-xs uppercase font-bold tracking-wider border-b border-slate-700 pb-2">
                         <Plane className="w-3 h-3"/> Google Flights
                      </div>
                      <div className="flex justify-between items-center mb-2">
                         <div className="text-white font-bold text-lg">TLV ➔ LHR</div>
                         <div className="text-green-400 font-bold">$450</div>
                      </div>
                      <div className="text-slate-400 text-xs flex justify-between">
                         <span>Fri, Mar 14 • 07:00 AM</span>
                         <span>Non-stop • 5h 20m</span>
                      </div>
                      <div className="mt-3 w-full h-8 bg-blue-600/20 text-blue-400 rounded flex items-center justify-center font-bold text-xs hover:bg-blue-600/30 cursor-pointer transition-colors">
                         Select Flight
                      </div>
                   </div>
                </motion.div>
             )}
          </AnimatePresence>

          {/* USER: MAPS */}
          <AnimatePresence>
             {step >= 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="self-end bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">
                   <span className="font-bold bg-white/20 px-1 rounded mr-1">@Maps</span> hotel near British Museum.
                </motion.div>
             )}
          </AnimatePresence>

          {/* AI: MAP CARD */}
          <AnimatePresence>
             {step >= 4 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="self-start w-full max-w-[90%]">
                   <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-lg">
                      <div className="flex items-center gap-2 mb-3 text-slate-400 text-xs uppercase font-bold tracking-wider border-b border-slate-700 pb-2">
                         <MapPin className="w-3 h-3"/> Google Maps
                      </div>
                      <div className="flex gap-4">
                         <div className="w-20 h-20 bg-slate-700 rounded flex items-center justify-center text-slate-500 text-[10px]">Map View</div>
                         <div className="flex-1">
                            <div className="text-white font-bold">The Montague on the Gardens</div>
                            <div className="text-yellow-400 text-xs">★★★★☆ (4.5)</div>
                            <div className="text-slate-400 text-xs mt-1">0.1 miles away</div>
                            <div className="text-green-400 font-bold mt-1">$220/night</div>
                         </div>
                      </div>
                   </div>
                </motion.div>
             )}
          </AnimatePresence>

          {/* USER: GMAIL */}
          <AnimatePresence>
             {step >= 5 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="self-end bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">
                   <span className="font-bold bg-white/20 px-1 rounded mr-1">@Gmail</span> send itinerary to Moti.
                </motion.div>
             )}
          </AnimatePresence>

          {/* AI: EMAIL DRAFT */}
          <AnimatePresence>
             {step >= 6 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="self-start w-full max-w-[90%]">
                   <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-lg">
                      <div className="flex items-center gap-2 mb-3 text-slate-400 text-xs uppercase font-bold tracking-wider border-b border-slate-700 pb-2">
                         <Mail className="w-3 h-3"/> Gmail Draft
                      </div>
                      <div className="bg-slate-900 p-3 rounded text-slate-300 text-xs font-mono space-y-2 border border-slate-700">
                         <div><span className="text-slate-500">To:</span> Moti</div>
                         <div><span className="text-slate-500">Subject:</span> Trip Itinerary: London</div>
                         <div className="pt-2 border-t border-slate-800">
                            Hi Moti,<br/><br/>
                            Here is the plan for London:<br/>
                            - Flight: TLV-LHR, Fri Mar 14<br/>
                            - Hotel: The Montague<br/><br/>
                            Best,<br/>Gemini
                         </div>
                      </div>
                      <div className="mt-3 flex gap-2">
                         <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold hover:bg-blue-500 transition-colors">Send</button>
                         <button className="bg-slate-700 text-slate-300 px-3 py-1 rounded text-xs font-bold hover:bg-slate-600 transition-colors">Edit</button>
                      </div>
                   </div>
                </motion.div>
             )}
          </AnimatePresence>

       </div>
    </div>
  );
};

export default Lesson9_2;
