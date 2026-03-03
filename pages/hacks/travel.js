import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Plane, Map, CreditCard, Copy, Check, ArrowRight, Star } from 'lucide-react';

const TravelHack = () => {
  const [copied, setCopied] = useState(false);

  const viralPrompt = "Act as an expert travel hacker. I have a budget of $100 total. I am currently in [YOUR CITY]. Find me a destination within 3 hours by train/bus OR a cheap flight error fare for this coming weekend. Use Google Flights and Google Hotels extensions to find real-time prices. Create a 48-hour itinerary that includes free walking tours and cheap street food spots. My goal is to maximize experience vs cost.";

  const copyPrompt = () => {
    navigator.clipboard.writeText(viralPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      <Head>
        <title>The $100 Weekend Hack | Gemini Academy</title>
        <meta name="description" content="How to use Google Gemini to book a weekend getaway for under $100. The viral travel hack exposed." />
        <meta property="og:title" content="I Planned a Weekend Trip for $100 Using AI. Here's How." />
        <meta property="og:image" content="https://gemini-academy-start.surge.sh/og-travel.jpg" />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white font-sans selection:bg-purple-500 selection:text-white">
        
        <nav className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Gemini Academy
            </Link>
            <Link href="/syllabus" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Full Course &rarr;
            </Link>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          
          {/* Viral Hook */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 text-yellow-400 text-sm font-bold mb-6 border border-yellow-500/20">
              <Star className="w-4 h-4 fill-yellow-400" /> Viral Strategy #1
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">$100</span> Weekend Hack
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Most people use AI to write emails. <strong>Smart people use it to see the world.</strong> Learn how to force Gemini to find "error fares" and hidden deals.
            </p>
          </div>

          {/* The Secret Sauce */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why This Works (And ChatGPT Fails)</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                ChatGPT cannot see real-time flight prices. Gemini is connected directly to <strong>Google Flights</strong> and <strong>Google Hotels</strong>. It doesn't just "guess" prices; it finds live tickets you can book right now.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-blue-500/20 p-2 rounded-lg"><Plane className="w-5 h-5 text-blue-400" /></div>
                  <span className="font-medium">Real-time Flight Data</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-purple-500/20 p-2 rounded-lg"><Map className="w-5 h-5 text-purple-400" /></div>
                  <span className="font-medium">Hidden Hotel Deals</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-2 rounded-lg"><CreditCard className="w-5 h-5 text-green-400" /></div>
                  <span className="font-medium">Budget Enforcement</span>
                </li>
              </ul>
            </div>
            
            {/* The Prompt Box */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-2xl">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">The Magic Prompt</span>
                  <span className="text-xs text-blue-400 font-mono">Gemini Pro / Flash</span>
                </div>
                <p className="font-mono text-sm text-gray-300 mb-6 leading-relaxed">
                  "Act as an expert travel hacker. I have a budget of $100 total. I am currently in [YOUR CITY]. Find me a destination within 3 hours by train/bus OR a cheap flight error fare..."
                </p>
                <button 
                  onClick={copyPrompt}
                  className="w-full py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group-active:scale-95"
                >
                  {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
                  {copied ? "Copied! Paste into Gemini" : "Copy This Prompt"}
                </button>
              </div>
            </div>
          </div>

          {/* Proof / Steps */}
          <div className="border-t border-gray-800 pt-16">
            <h2 className="text-3xl font-bold mb-10 text-center">How to Execute</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-800">
                <span className="text-4xl font-black text-gray-700 mb-4 block">01</span>
                <h3 className="text-xl font-bold mb-2 text-white">Enable Extensions</h3>
                <p className="text-gray-400 text-sm">Go to Gemini Settings &gt; Extensions. Make sure "Google Flights" and "Google Hotels" are turned ON.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-800">
                <span className="text-4xl font-black text-gray-700 mb-4 block">02</span>
                <h3 className="text-xl font-bold mb-2 text-white">Paste the Prompt</h3>
                <p className="text-gray-400 text-sm">Replace [YOUR CITY] with your location. Don't be afraid to ask it to "try again" if the first result is boring.</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-800">
                <span className="text-4xl font-black text-gray-700 mb-4 block">03</span>
                <h3 className="text-xl font-bold mb-2 text-white">Ask for the "Vibe"</h3>
                <p className="text-gray-400 text-sm">Once it finds a cheap flight, ask: "Create a hipster itinerary for this place focusing on free art and street food."</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <Link href="/syllabus" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:-translate-y-1">
              Want more hacks? Start the Course <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </main>
      </div>
    </>
  );
};

export default TravelHack;
