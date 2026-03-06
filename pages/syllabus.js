import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { BookOpen, Code, Image as ImageIcon, Zap, CheckCircle, Lock, Globe } from 'lucide-react';

const Syllabus = () => {
  return (
    <>
      <Head>
        <title>Syllabus | Gemini Academy: The Complete Roadmap</title>
        <meta name="description" content="From beginner to expert. Our step-by-step curriculum covers everything: Text generation, Image creation, and Workspace automation." />
        <meta property="og:title" content="Gemini Academy Curriculum (2026)" />
        <meta property="og:description" content="View the full roadmap. 5 Modules, 12 Lessons. Free forever." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Fundamentals (Gemini vs ChatGPT)",
                  "url": "https://geminiacademy.co/lesson/1-1"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Prompt Mastery (C.T.F.P Formula)",
                  "url": "https://geminiacademy.co/lesson/2-1"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Multimedia (Imagen 3)",
                  "url": "https://geminiacademy.co/lesson/3-1"
                }
              ]
            })
          }}
        />
      </Head>

      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold mb-4 text-slate-900">The Curriculum</h1>
            <p className="text-lg text-slate-600">Zero to Hero in 5 Modules.</p>
          </div>

          <div className="space-y-8">
            {/* Module 1 */}
            <ModuleCard 
              number="1" 
              title="Fundamentals" 
              desc="Understand the engine. Stop searching, start reasoning."
              icon={<Zap className="w-6 h-6 text-blue-600" />}
              color="blue"
            >
              <LessonRow id="1.1" title="Welcome to the Gemini Era" link="/lesson/1-1" status="ready" />
              <LessonRow id="1.2" title="Gemini vs. ChatGPT" link="/lesson/1-2" status="ready" />
              <LessonRow id="1.3" title="Interface Tour (For Beginners)" link="/lesson/1-3" status="ready" highlight={true} />
              <LessonRow id="1.4" title="Voice Mode: Don't Type, Talk" link="/lesson/1-4" status="ready" highlight={true} />
            </ModuleCard>

            {/* Module 2 */}
            <ModuleCard 
              number="2" 
              title="Prompt Mastery" 
              desc="The scientific formula for getting perfect responses."
              icon={<Code className="w-6 h-6 text-green-600" />}
              color="green"
            >
              <LessonRow id="2.1" title="The Perfect Prompt Formula (C.T.F.P)" link="/lesson/2-1" status="ready" />
              <LessonRow id="2.2" title="Advanced: System Instructions & Few-Shot" link="/lesson/2-2" status="ready" />
            </ModuleCard>

            {/* Module 3 */}
            <ModuleCard 
              number="3" 
              title="Multimedia & Vision" 
              desc="Working with images, video, and audio."
              icon={<ImageIcon className="w-6 h-6 text-pink-600" />}
              color="pink"
            >
              <LessonRow id="3.1" title="Generating Images (Imagen 3)" link="/lesson/3-1" status="ready" />
              <LessonRow id="3.2" title="Video Analysis & YouTube" link="/lesson/3-2" status="ready" />
              <LessonRow id="3.3" title="Video Creation: From Static to Magic (Veo)" link="/lesson/3-3" status="ready" />
            </ModuleCard>

            {/* Module 4 */}
            <ModuleCard 
              number="4" 
              title="Workspace Productivity" 
              desc="Connect Gemini to your real work (Docs, Drive, Gmail)."
              icon={<BookOpen className="w-6 h-6 text-orange-600" />}
              color="orange"
            >
              <LessonRow id="4.1" title="Integration: Docs, Drive & Gmail" link="/lesson/4-1" status="ready" />
              <LessonRow id="4.2" title="Building a Second Brain" link="/lesson/4-2" status="ready" />
            </ModuleCard>

            {/* Module 5 */}
            <ModuleCard 
              number="5" 
              title="Advanced Customization" 
              desc="Build your own AI agents (Gems)."
              icon={<Lock className="w-6 h-6 text-purple-600" />}
              color="purple"
            >
              <LessonRow id="5.1" title="Build Your Own Gem" link="/lesson/5-1" status="ready" />
              <LessonRow id="5.2" title="API & Python Basics" link="#" status="coming_soon" />
            </ModuleCard>

            {/* Module 6 */}
            <ModuleCard 
              number="6" 
              title="Advanced Thinking" 
              desc="Brainstorming & Strategic Decision Making."
              icon={<Zap className="w-6 h-6 text-yellow-600" />}
              color="yellow"
            >
              <LessonRow id="6.1" title="Advanced Brainstorming" link="/lesson/6-1" status="ready" highlight={true} />
              <LessonRow id="6.2" title="Decision Matrix & Analysis" link="/lesson/6-2" status="ready" highlight={true} />
            </ModuleCard>

            {/* Module 7 */}
            <ModuleCard 
              number="7" 
              title="Data Analyst" 
              desc="Cleaning, Analyzing & Visualizing Data."
              icon={<Code className="w-6 h-6 text-teal-600" />}
              color="teal"
            >
              <LessonRow id="7.1" title="Data Cleaning & Analysis" link="/lesson/7-1" status="ready" highlight={true} />
              <LessonRow id="7.2" title="Forecasting & Reporting" link="/lesson/7-2" status="ready" highlight={true} />
            </ModuleCard>

            {/* Module 8 */}
            <ModuleCard 
              number="8" 
              title="Content Marketing" 
              desc="Writing High-Ranking Blog Posts & Copy."
              icon={<BookOpen className="w-6 h-6 text-pink-600" />}
              color="pink"
            >
              <LessonRow id="8.1" title="Advanced Copywriting (PAS/AIDA)" link="/lesson/8-1" status="ready" highlight={true} />
              <LessonRow id="8.2" title="Long-Form Content (SEO Blog)" link="/lesson/8-2" status="ready" highlight={true} />
            </ModuleCard>

            {/* Module 9 */}
            <ModuleCard 
              number="9" 
              title="Ecosystem Extensions" 
              desc="Flights, Hotels, Maps & Real World."
              icon={<Globe className="w-6 h-6 text-orange-600" />}
              color="orange"
            >
              <LessonRow id="9.1" title="Deep Workspace Integration" link="/lesson/9-1" status="ready" highlight={true} />
              <LessonRow id="9.2" title="Extensions: Travel Agent Mode" link="/lesson/9-2" status="ready" highlight={true} />
            </ModuleCard>

            {/* Module 10 */}
            <ModuleCard 
              number="10" 
              title="Master Class" 
              desc="Custom Instructions & Life OS."
              icon={<CheckCircle className="w-6 h-6 text-purple-600" />}
              color="purple"
            >
              <LessonRow id="10.1" title="Custom Instructions (System Prompts)" link="/lesson/10-1" status="ready" highlight={true} />
              <LessonRow id="10.2" title="Course Summary & Final Project" link="/lesson/10-2" status="ready" highlight={true} />
            </ModuleCard>
          </div>
        </div>
      </div>
    </>
  );
};

const ModuleCard = ({ number, title, desc, icon, color, children }) => (
  <div className={`bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
    <div className={`bg-${color}-50 p-6 border-b border-${color}-100 flex items-center gap-4`}>
      <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm text-${color}-600`}>
        {icon}
      </div>
      <div>
        <h3 className={`font-bold text-lg text-slate-900`}>Module {number}: {title}</h3>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
    <div className="p-2">
      {children}
    </div>
  </div>
);

const LessonRow = ({ id, title, link, status }) => (
  <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg group transition-colors">
    <div className="flex items-center gap-4">
      <span className="font-mono text-sm text-slate-400 w-8">{id}</span>
      <span className={`font-medium ${status === 'ready' ? 'text-slate-700' : 'text-slate-400'}`}>{title}</span>
    </div>
    
    {status === 'ready' ? (
      <Link href={link} className="flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        Start Lesson
      </Link>
    ) : (
      <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full">Coming Soon</span>
    )}
  </div>
);

export default Syllabus;