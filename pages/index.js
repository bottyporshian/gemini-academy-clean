import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, ShieldCheck, Users } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <Head>
        <title>How to Use Gemini 3 | The #1 Free AI Course & Guide 2026</title>
        <meta name="description" content="Master Google Gemini 3.1 with our free, interactive course. Learn prompt engineering, workspace automation, and image generation (Imagen 3). Start from zero." />
        <meta name="keywords" content="how to use gemini 3, google gemini course free, gemini 3.1 features, gemini vs chatgpt 2026, android gemini integration, google workspace ai automation, learn ai for free, imagen 3 tutorial, prompt engineering guide, ai agent tutorials 2026, try gemini 3, gemini vs claude vs chatgpt, notebooklm tutorial, gemini 3 features, gemini 3.1 pro, gemini seo 2026, google gemini prompts for productivity, march pixel drop ai tools, mastering google gemini ai 2026" />
        <meta property="og:title" content="The Ultimate Free Guide to Google Gemini 3 (2026)" />
        <meta property="og:description" content="Don't just chat. Master reasoning. Join 10,000+ students learning to automate their life with Gemini." />
        <meta property="og:image" content="https://geminiacademy.co/og-image.jpg" />
        <meta property="og:url" content="https://geminiacademy.co/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://geminiacademy.co/" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Gemini Academy: Zero to Hero",
              "description": "A comprehensive free course to master Google Gemini AI, prompt engineering, and productivity workflows.",
              "provider": {
                "@type": "Organization",
                "name": "Gemini Academy",
                "sameAs": "https://geminiacademy.co"
              },
              "offers": {
                "@type": "Offer",
                "category": "Free",
                "price": "0",
                "priceCurrency": "USD"
              },
              "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "Online",
                "courseWorkload": "PT2H"
              }
            })
          }}
        />
      </Head>

      <div className="bg-white text-gray-900 font-sans antialiased overflow-x-hidden">
        {/* Navbar */}
        <nav className="flex justify-between items-center py-6 px-8 max-w-7xl mx-auto">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2 cursor-pointer">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Sparkles className="w-6 h-6 text-blue-600 fill-purple-200" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Gemini Academy
            </span>
          </div>
          <button className="hidden md:block px-6 py-2 rounded-full border border-gray-200 hover:border-gray-400 transition-colors text-sm font-medium">
            Sign In
          </button>
        </nav>

        {/* Hero Section */}
        <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-8 border border-blue-100">
              <Sparkles className="w-4 h-4" />
              <span>Updated for Gemini 3.1 & 2026 Features</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              How to Use Gemini 3 <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                (The Complete Guide)
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              The only tutorial you need. From <strong>Prompt Engineering</strong> to <strong>Google Workspace Automation</strong>.
              Practical, proven, and designed for real productivity.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link href="/syllabus" className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Start Learning Free <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/syllabus" className="w-full md:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 hover:border-gray-400 hover:bg-gray-50 text-lg font-medium rounded-xl transition-all">
                View 2026 Syllabus
              </Link>
            </div>

            <p className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2">
              <Users className="w-4 h-4" /> Join 10,000+ students mastering AI today
            </p>

            {/* Viral Banner */}
            <div className="mt-12">
              <Link href="/hacks/travel" className="inline-block group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative px-6 py-3 bg-white border border-gray-100 rounded-lg flex items-center gap-4 shadow-sm group-hover:shadow-md transition-all">
                  <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">New Viral Hack</span>
                  <span className="font-semibold text-gray-900">How to book a weekend trip for $100 using Gemini</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-600 transition-colors" />
                </div>
              </Link>
            </div>

            {/* Trending Now Section */}
            <div className="mt-12 grid gap-4 max-w-2xl mx-auto">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">🔥 Trending Now (2026)</p>
              
              <Link href="/lesson/gemini-3-1-pro" className="block p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all text-left group">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Gemini 3.1 Pro</h3>
                    <p className="text-sm text-slate-500">The next evolution in AI is here.</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-500" />
                </div>
              </Link>

              <Link href="/lesson/try-gemini-3" className="block p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all text-left group">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Try Gemini 3</h3>
                    <p className="text-sm text-slate-500">Why everyone is searching for it right now.</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500" />
                </div>
              </Link>

              <Link href="/lesson/gemini-vs-claude-vs-chatgpt" className="block p-4 bg-white border border-slate-200 rounded-xl hover:border-purple-300 hover:shadow-md transition-all text-left group">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-purple-600 transition-colors">Gemini vs. Claude vs. ChatGPT</h3>
                    <p className="text-sm text-slate-500">The definitive 2026 showdown. Who wins?</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-purple-500" />
                </div>
              </Link>

              <Link href="/lesson/notebooklm-tutorial" className="block p-4 bg-white border border-slate-200 rounded-xl hover:border-green-300 hover:shadow-md transition-all text-left group">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-green-600 transition-colors">NotebookLM Tutorial</h3>
                    <p className="text-sm text-slate-500">Turn PDFs into viral podcasts. Zero hallucinations.</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-green-500" />
                </div>
              </Link>
            </div>
          </motion.div>
        </main>

        {/* New "Life Hacks (Viral)" Section */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500">
            🚀 Life Hacks (Viral)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/hacks/coding-no-code" className="block p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow text-left group">
              <h3 className="font-bold text-xl text-gray-900 group-hover:text-green-600 transition-colors mb-2">How to Build Apps Without Knowing How to Code &rarr;</h3>
              <p className="text-gray-600">Let Gemini write your Python/React code, debug errors, and deploy with ease.</p>
            </Link>

            <Link href="/hacks/meeting-notes" className="block p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow text-left group">
              <h3 className="font-bold text-xl text-gray-900 group-hover:text-teal-600 transition-colors mb-2">Automate Your Meeting Notes Forever &rarr;</h3>
              <p className="text-gray-600">Paste transcripts into Gemini for instant action items, summaries, and email drafts.</p>
            </Link>

            <Link href="/hacks/personal-tutor" className="block p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow text-left group">
              <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-2">Turn Gemini Into a Personal Math Tutor &rarr;</h3>
              <p className="text-gray-600">Prompts to make Gemini teach complex concepts, quiz you, and explain mistakes (Socratic method).</p>
            </Link>
          </div>
        </section>

        {/* Features Grid (Social Proof / Value) */}
        <section className="bg-gray-50 py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-blue-600" />}
              title="Save 10+ Hours/Week"
              desc="Learn the exact prompts to automate emails, summaries, and reports instantly."
            />
            <FeatureCard
              icon={<ShieldCheck className="w-8 h-8 text-purple-600" />}
              title="Zero Tech Skills Needed"
              desc="Designed for non-technical professionals. If you can type, you can master this."
            />
            <FeatureCard
              icon={<Sparkles className="w-8 h-8 text-pink-600" />}
              title="Certified Expertise"
              desc="Get a certificate of completion that boosts your LinkedIn profile and career."
            />
          </div>
        </section>
      </div>
    </>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="flex flex-col items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="mb-4 p-3 bg-gray-50 rounded-xl">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

export default Hero;// Trigger deploy Sat Mar  7 17:08:55 IST 2026
