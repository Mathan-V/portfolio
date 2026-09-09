import React, { useState } from 'react';
import {
  ArrowDown,
  FileText,
  Github,
  Linkedin,
  Mail,
  CheckCircle,
  Terminal,
  Server,
  Workflow,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import { developerInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<'frappe' | 'react' | 'sql'>('frappe');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Developer Identity & Status Pill */}
            <div className="flex items-center gap-3.5 mb-6 p-1.5 pr-4 rounded-2xl bg-white/[0.03] border border-slate-300/10 dark:border-white/10 backdrop-blur-xl shadow-lg">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-blue-400/40 shadow-[0_0_12px_rgba(59,130,246,0.25)] shrink-0 bg-[#0F0F14]">
                <img
                  src={developerInfo.avatarUrl}
                  alt={developerInfo.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0A0A0B] shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white tracking-tight">{developerInfo.name}</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-mono font-bold tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Scale
                  </span>
                </div>
                <span className="text-[11px] text-slate-900/50 dark:text-white/50 font-mono">
                  Full Stack Developer · Hyperready Technology
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-5 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 dark:from-white via-slate-900/90 dark:via-white/90 to-slate-900/60 dark:to-white/60">
              Full Stack Developer <br />
              Building Scalable <br />
              <span className="text-blue-500 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500">
                Enterprise Apps.
              </span>
            </h1>

            {/* Supporting Subheadline */}
            <p className="text-sm sm:text-base text-slate-900/50 dark:text-white/50 font-normal leading-relaxed max-w-xl mb-8">
              Experienced engineer at Hyperready Technology specializing in <span className="text-slate-900/80 dark:text-white/80 font-medium">Frappe Framework</span>, <span className="text-slate-900/80 dark:text-white/80 font-medium">Python</span>, and <span className="text-slate-900/80 dark:text-white/80 font-medium">React</span>. Transforming intricate business operations into resilient, high-performance digital ecosystems.
            </p>

            {/* Primary Action Buttons & Socials */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3 rounded-xl font-semibold text-sm transition-all shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/5 dark:bg-white/5 hover:bg-slate-900/10 dark:bg-white/10 text-slate-900 dark:text-white border border-slate-300/10 dark:border-white/10 hover:border-slate-300/20 dark:border-white/20 px-6 py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer hover:scale-[1.02] active:scale-95"
              >
                <span>Contact Me</span>
              </button>

              {/* Social Channels */}
              <div className="flex items-center gap-2.5 pt-2 sm:pt-0">
                <a
                  href={developerInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] border border-slate-300/10 dark:border-white/10 text-slate-900/60 dark:text-white/60 hover:text-slate-900 dark:text-white hover:border-slate-300/20 dark:border-white/20 hover:bg-slate-900/5 dark:bg-white/5 transition-all shadow-sm"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={developerInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] border border-slate-300/10 dark:border-white/10 text-slate-900/60 dark:text-white/60 hover:text-slate-900 dark:text-white hover:border-slate-300/20 dark:border-white/20 hover:bg-slate-900/5 dark:bg-white/5 transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-3 rounded-xl bg-white/[0.03] border border-slate-300/10 dark:border-white/10 text-slate-900/60 dark:text-white/60 hover:text-slate-900 dark:text-white hover:border-slate-300/20 dark:border-white/20 hover:bg-slate-900/5 dark:bg-white/5 transition-all shadow-sm relative cursor-pointer"
                  aria-label="Copy Email"
                  title="Copy Email address"
                >
                  {copiedEmail ? <CheckCircle className="w-4 h-4 text-emerald-700 dark:text-emerald-400" /> : <Mail className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Engineering Philosophy Micro-Bar from Immersive Theme */}
            <div className="w-full pt-6 border-t border-slate-300/5 dark:border-white/5">
              <h4 className="text-[10px] text-slate-900/40 dark:text-white/40 uppercase tracking-[0.2em] font-mono font-bold mb-4">
                Engineering Lifecycle & Disciplines
              </h4>
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {[
                  { num: '01', label: 'PLAN', active: true },
                  { num: '02', label: 'ARCH', active: true },
                  { num: '03', label: 'DEV', active: true },
                  { num: '04', label: 'TEST', active: true },
                  { num: '05', label: 'DEPLOY', active: true },
                ].map((step, idx) => (
                  <div key={step.num} className="flex items-center gap-2 shrink-0">
                    <div className="flex flex-col gap-1 items-center">
                      <span className="text-[10px] font-mono font-bold text-slate-900/80 dark:text-white/80">{step.num}</span>
                      <span className={`w-10 sm:w-14 h-[2px] rounded-full ${idx <= 2 ? 'bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.8)]' : 'bg-slate-900/15 dark:bg-white/15'}`}></span>
                      <span className="text-[9px] font-mono text-slate-900/40 dark:text-white/40">{step.label}</span>
                    </div>
                    {idx < 4 && <ChevronRight className="w-3 h-3 text-slate-900/20 dark:text-white/20 -mt-2" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code & Architecture Inspector */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl bg-white/[0.02] border border-slate-300/10 dark:border-white/10 shadow-2xl overflow-hidden backdrop-blur-2xl">
              {/* Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-black/40 border-b border-slate-300/10 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-slate-900/40 dark:text-white/40 ml-2">enterprise_core_engine</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveCodeTab('frappe')}
                    className={`px-3 py-1 rounded-md text-[11px] font-mono transition-all cursor-pointer ${
                      activeCodeTab === 'frappe' ? 'bg-blue-600/30 text-blue-700 dark:text-blue-300 border border-blue-500/40 shadow-sm' : 'text-slate-900/40 dark:text-white/40 hover:text-slate-900/80 dark:text-white/80'
                    }`}
                  >
                    api.py
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('react')}
                    className={`px-3 py-1 rounded-md text-[11px] font-mono transition-all cursor-pointer ${
                      activeCodeTab === 'react' ? 'bg-blue-600/30 text-blue-700 dark:text-blue-300 border border-blue-500/40 shadow-sm' : 'text-slate-900/40 dark:text-white/40 hover:text-slate-900/80 dark:text-white/80'
                    }`}
                  >
                    ReportBI.tsx
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('sql')}
                    className={`px-3 py-1 rounded-md text-[11px] font-mono transition-all cursor-pointer ${
                      activeCodeTab === 'sql' ? 'bg-blue-600/30 text-blue-700 dark:text-blue-300 border border-blue-500/40 shadow-sm' : 'text-slate-900/40 dark:text-white/40 hover:text-slate-900/80 dark:text-white/80'
                    }`}
                  >
                    query.sql
                  </button>
                </div>
              </div>

              {/* Code Panel Body */}
              <div className="p-4 font-mono text-xs text-slate-900/80 dark:text-white/80 leading-relaxed overflow-x-auto max-h-[340px] bg-slate-100/60 dark:bg-black/60">
                {activeCodeTab === 'frappe' && (
                  <pre className="text-slate-900/80 dark:text-white/80 space-y-1">
                    <div>
                      <span className="text-purple-700 dark:text-purple-400 font-semibold">import</span> frappe
                    </div>
                    <div>
                      <span className="text-purple-700 dark:text-purple-400 font-semibold">from</span> frappe <span className="text-purple-700 dark:text-purple-400 font-semibold">import</span> _
                    </div>
                    <div className="text-slate-900/30 dark:text-white/30 pt-1 font-sans italic text-[11px]"># Enterprise Whitelisted API with RBAC & Superset Token</div>
                    <div>
                      <span className="text-blue-400">@frappe.whitelist</span>(methods=[<span className="text-emerald-700 dark:text-emerald-300">"POST"</span>])
                    </div>
                    <div>
                      <span className="text-blue-400 font-semibold">def</span> <span className="text-yellow-700 dark:text-yellow-300 font-semibold">get_scoped_bi_session</span>(dashboard_id):
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-900/60 dark:text-white/60">user = frappe.session.user</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-700 dark:text-purple-400 font-semibold">if not</span> frappe.has_permission(<span className="text-emerald-700 dark:text-emerald-300">"BI Report"</span>, <span className="text-emerald-700 dark:text-emerald-300">"read"</span>):
                    </div>
                    <div className="pl-8">
                      frappe.throw(_(<span className="text-emerald-700 dark:text-emerald-300">"Access Denied: Insufficient Role Permissions"</span>))
                    </div>
                    <div className="pl-4 pt-1 text-slate-900/30 dark:text-white/30 font-sans italic text-[11px]">
                      # Issue scoped guest token for Apache Superset embed
                    </div>
                    <div className="pl-4">
                      token = generate_superset_guest_token(user, dashboard_id)
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-700 dark:text-purple-400 font-semibold">return</span> &#123;<span className="text-emerald-700 dark:text-emerald-300">"status"</span>: <span className="text-emerald-700 dark:text-emerald-300">"success"</span>, <span className="text-emerald-700 dark:text-emerald-300">"guest_token"</span>: token&#125;
                    </div>
                  </pre>
                )}

                {activeCodeTab === 'react' && (
                  <pre className="text-slate-900/80 dark:text-white/80 space-y-1">
                    <div>
                      <span className="text-purple-700 dark:text-purple-400 font-semibold">import</span> React, &#123; useEffect, useRef &#125; <span className="text-purple-700 dark:text-purple-400 font-semibold">from</span> <span className="text-emerald-700 dark:text-emerald-300">'react'</span>;
                    </div>
                    <div>
                      <span className="text-purple-700 dark:text-purple-400 font-semibold">import</span> &#123; embedDashboard &#125; <span className="text-purple-700 dark:text-purple-400 font-semibold">from</span> <span className="text-emerald-700 dark:text-emerald-300">'@superset-ui/embedded-sdk'</span>;
                    </div>
                    <div className="text-slate-900/30 dark:text-white/30 pt-1 font-sans italic text-[11px]">// Embedded BI Integration Component</div>
                    <div>
                      <span className="text-blue-400 font-semibold">export const</span> <span className="text-yellow-700 dark:text-yellow-300 font-semibold">KJDashboardView</span> = (&#123; dashboardId &#125;) =&gt; &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-400 font-semibold">const</span> containerRef = useRef&lt;HTMLDivElement&gt;(<span className="text-blue-400">null</span>);
                    </div>
                    <div className="pl-4 pt-1">
                      useEffect(() =&gt; &#123;
                    </div>
                    <div className="pl-8">
                      <span className="text-blue-400 font-semibold">const</span> mountDashboard = <span className="text-blue-400 font-semibold">async</span> () =&gt; &#123;
                    </div>
                    <div className="pl-12">
                      <span className="text-blue-400 font-semibold">const</span> token = <span className="text-blue-400 font-semibold">await</span> fetchGuestToken(dashboardId);
                    </div>
                    <div className="pl-12">
                      <span className="text-purple-700 dark:text-purple-400 font-semibold">await</span> embedDashboard(&#123;
                    </div>
                    <div className="pl-16">
                      id: dashboardId,
                    </div>
                    <div className="pl-16">
                      supersetDomain: <span className="text-emerald-700 dark:text-emerald-300">"https://bi.enterprise.internal"</span>,
                    </div>
                    <div className="pl-16">
                      mountPoint: containerRef.current!,
                    </div>
                    <div className="pl-16">
                      fetchGuestToken: () =&gt; token
                    </div>
                    <div className="pl-12">&#125;);</div>
                    <div className="pl-8">&#125;;</div>
                    <div className="pl-8">mountDashboard();</div>
                    <div className="pl-4">&#125;, [dashboardId]);</div>
                    <div className="pl-4 pt-1">
                      <span className="text-purple-700 dark:text-purple-400 font-semibold">return</span> &lt;<span className="text-sky-300">div</span> ref=&#123;containerRef&#125; className=<span className="text-emerald-700 dark:text-emerald-300">"w-full h-[650px]"</span> /&gt;;
                    </div>
                    <div>&#125;;</div>
                  </pre>
                )}

                {activeCodeTab === 'sql' && (
                  <pre className="text-slate-900/80 dark:text-white/80 space-y-1">
                    <div className="text-slate-900/30 dark:text-white/30 font-sans italic text-[11px]">-- High-Throughput Aggregation Query for KJ BI Reports</div>
                    <div>
                      <span className="text-purple-700 dark:text-purple-400 font-semibold">WITH</span> project_metrics <span className="text-purple-700 dark:text-purple-400 font-semibold">AS</span> (
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-700 dark:text-purple-400 font-semibold">SELECT</span> project_id,
                    </div>
                    <div className="pl-11">
                      <span className="text-yellow-700 dark:text-yellow-300 font-semibold">COUNT</span>(transaction_id) <span className="text-purple-700 dark:text-purple-400 font-semibold">AS</span> total_records,
                    </div>
                    <div className="pl-11">
                      <span className="text-yellow-700 dark:text-yellow-300 font-semibold">SUM</span>(net_amount) <span className="text-purple-700 dark:text-purple-400 font-semibold">AS</span> aggregated_value
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-700 dark:text-purple-400 font-semibold">FROM</span> tabEnterpriseTransactions
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-700 dark:text-purple-400 font-semibold">WHERE</span> status = <span className="text-emerald-700 dark:text-emerald-300">'Submitted'</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-700 dark:text-purple-400 font-semibold">GROUP BY</span> project_id
                    </div>
                    <div>)</div>
                    <div>
                      <span className="text-purple-700 dark:text-purple-400 font-semibold">SELECT</span> p.name, p.customer_name, pm.aggregated_value
                    </div>
                    <div>
                      <span className="text-purple-700 dark:text-purple-400 font-semibold">FROM</span> tabProject p
                    </div>
                    <div>
                      <span className="text-purple-700 dark:text-purple-400 font-semibold">JOIN</span> project_metrics pm <span className="text-purple-700 dark:text-purple-400 font-semibold">ON</span> p.name = pm.project_id
                    </div>
                    <div>
                      <span className="text-purple-700 dark:text-purple-400 font-semibold">ORDER BY</span> pm.aggregated_value <span className="text-purple-700 dark:text-purple-400 font-semibold">DESC</span>;
                    </div>
                  </pre>
                )}
              </div>

              {/* Status footer bar */}
              <div className="px-4 py-2.5 bg-slate-100 dark:bg-black/40 border-t border-slate-300/10 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-900/40 dark:text-white/40">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span className="text-slate-900/60 dark:text-white/60">STATUS: CLOUD_READY_DEPLOYED</span>
                </div>
                <span>Frappe v15 • React 18</span>
              </div>
            </div>

            {/* Quick Experience Badges below code widget with Immersive Theme styling */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-slate-300/10 dark:border-white/10 flex items-center gap-3 backdrop-blur-md hover:border-slate-300/20 dark:border-white/20 transition-all">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Workflow className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">ERP & BI Systems</div>
                  <div className="text-[11px] text-slate-900/40 dark:text-white/40 font-mono">Frappe • Superset • APIs</div>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-slate-300/10 dark:border-white/10 flex items-center gap-3 backdrop-blur-md hover:border-slate-300/20 dark:border-white/20 transition-all">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-400">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">Production Deployments</div>
                  <div className="text-[11px] text-slate-900/40 dark:text-white/40 font-mono">Docker • Nginx • Linux</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
