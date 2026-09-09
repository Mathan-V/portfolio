import React, { useState } from 'react';
import {
  ArrowRight,
  Database,
  FileCheck,
  ShieldCheck,
  Zap,
  Globe,
  Lock,
  BarChart3,
  Repeat
} from 'lucide-react';

export const ArchitectureVisualizer: React.FC = () => {
  const [activeDiagram, setActiveDiagram] = useState<'kj' | 'tally' | 'cleartax'>('kj');

  return (
    <section id="architecture" className="py-24 relative border-t border-slate-300/5 dark:border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-mono font-bold tracking-widest mb-3">
              <span>SYSTEM ARCHITECTURES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 dark:from-white via-slate-900 dark:via-white to-slate-900/60 dark:to-white/60">
              Interactive Integration Blueprints
            </h2>
            <p className="text-slate-900/50 dark:text-white/50 text-sm sm:text-base mt-2 max-w-2xl">
              Inspect how data and security boundaries flow across production modules engineered by Mathan V.
            </p>
          </div>

          {/* Diagram Selector */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-white/[0.03] border border-slate-300/10 dark:border-white/10 backdrop-blur-md self-start md:self-auto">
            <button
              onClick={() => setActiveDiagram('kj')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                activeDiagram === 'kj'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-900/60 dark:text-white/60 hover:text-slate-900 dark:text-white hover:bg-slate-900/5 dark:bg-white/5'
              }`}
            >
              KJ BI Reporting Engine
            </button>
            <button
              onClick={() => setActiveDiagram('tally')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                activeDiagram === 'tally'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-900/60 dark:text-white/60 hover:text-slate-900 dark:text-white hover:bg-slate-900/5 dark:bg-white/5'
              }`}
            >
              ERPNext → Tally Sync
            </button>
            <button
              onClick={() => setActiveDiagram('cleartax')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                activeDiagram === 'cleartax'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-900/60 dark:text-white/60 hover:text-slate-900 dark:text-white hover:bg-slate-900/5 dark:bg-white/5'
              }`}
            >
              ClearTax e-Invoicing Bridge
            </button>
          </div>
        </div>

        {/* Blueprint Canvas */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.025] border border-slate-300/10 dark:border-white/10 shadow-2xl backdrop-blur-xl">
          {activeDiagram === 'kj' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-300/10 dark:border-white/10 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">KJ BI Reporting & Analytics Architecture</h3>
                  <p className="text-xs text-slate-900/40 dark:text-white/40 font-mono mt-0.5">
                    React Frontend + Frappe RBAC Gateway + Embedded Apache Superset + PostgreSQL Database
                  </p>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                  End-to-End Encrypted & RBAC Governed
                </span>
              </div>

              {/* Node diagram */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                {/* Node 1 */}
                <div className="p-5 rounded-2xl bg-slate-100 dark:bg-black/40 border border-blue-500/30 text-center flex flex-col items-center hover:border-blue-400 transition-colors">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-3">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">1. React SPA Client</div>
                  <div className="text-[11px] text-slate-900/50 dark:text-white/50 mt-1">User auth, custom filter panels & dashboard container</div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex justify-center text-slate-900/30 dark:text-white/30">
                  <ArrowRight className="w-5 h-5 text-blue-400 animate-pulse" />
                </div>

                {/* Node 2 */}
                <div className="p-5 rounded-2xl bg-slate-100 dark:bg-black/40 border border-purple-500/30 text-center flex flex-col items-center hover:border-purple-400 transition-colors">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">2. Frappe Auth & RBAC</div>
                  <div className="text-[11px] text-slate-900/50 dark:text-white/50 mt-1">Validates user roles, mints scoped Superset guest token</div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex justify-center text-slate-900/30 dark:text-white/30">
                  <ArrowRight className="w-5 h-5 text-blue-400 animate-pulse" />
                </div>

                {/* Node 3 */}
                <div className="p-5 rounded-2xl bg-slate-100 dark:bg-black/40 border border-indigo-500/30 text-center flex flex-col items-center hover:border-indigo-400 transition-colors">
                  <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-3">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">3. Apache Superset</div>
                  <div className="text-[11px] text-slate-900/50 dark:text-white/50 mt-1">Renders charts with row-level security (RLS) constraints</div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex justify-center text-slate-900/30 dark:text-white/30">
                  <ArrowRight className="w-5 h-5 text-blue-400 animate-pulse" />
                </div>

                {/* Node 4 */}
                <div className="p-5 rounded-2xl bg-slate-100 dark:bg-black/40 border border-emerald-500/30 text-center flex flex-col items-center hover:border-emerald-400 transition-colors">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-3">
                    <Database className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">4. PostgreSQL Storage</div>
                  <div className="text-[11px] text-slate-900/50 dark:text-white/50 mt-1">Indexed analytical tables & high-speed SQL views</div>
                </div>
              </div>
            </div>
          )}

          {activeDiagram === 'tally' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-300/10 dark:border-white/10 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">ERPNext to Tally Automated Accounting Pipeline</h3>
                  <p className="text-xs text-slate-900/40 dark:text-white/40 font-mono mt-0.5">
                    DocType Triggers → Background Queue → XML Serialization → Tally Service Verification
                  </p>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                  Zero Manual Data Entry
                </span>
              </div>

              {/* Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="p-5 rounded-2xl bg-slate-100 dark:bg-black/40 border border-slate-300/10 dark:border-white/10 text-center flex flex-col items-center hover:border-slate-300/20 dark:border-white/20 transition-colors">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-3">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">1. Invoice Submitted</div>
                  <div className="text-[11px] text-slate-900/50 dark:text-white/50 mt-1">ERPNext sales/purchase invoice state validated</div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-100 dark:bg-black/40 border border-slate-300/10 dark:border-white/10 text-center flex flex-col items-center hover:border-slate-300/20 dark:border-white/20 transition-colors">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-3">
                    <Repeat className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">2. Python Job Queue</div>
                  <div className="text-[11px] text-slate-900/50 dark:text-white/50 mt-1">Async worker picks up sync job with retry logic</div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-100 dark:bg-black/40 border border-slate-300/10 dark:border-white/10 text-center flex flex-col items-center hover:border-slate-300/20 dark:border-white/20 transition-colors">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">3. Tally XML Engine</div>
                  <div className="text-[11px] text-slate-900/50 dark:text-white/50 mt-1">Maps accounts & transforms payload to Tally schema</div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-100 dark:bg-black/40 border border-slate-300/10 dark:border-white/10 text-center flex flex-col items-center hover:border-slate-300/20 dark:border-white/20 transition-colors">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-3">
                    <Database className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">4. Reconciled Voucher</div>
                  <div className="text-[11px] text-slate-900/50 dark:text-white/50 mt-1">Tally confirms voucher ID; audit log updated</div>
                </div>
              </div>
            </div>
          )}

          {activeDiagram === 'cleartax' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-300/10 dark:border-white/10 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">ClearTax e-Invoicing & GST Compliance Integration</h3>
                  <p className="text-xs text-slate-900/40 dark:text-white/40 font-mono mt-0.5">
                    Pre-Flight GST Validation → Signed JSON Payload → IRN & QR Code Persistence
                  </p>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                  100% Tax Compliant
                </span>
              </div>

              {/* Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="p-5 rounded-2xl bg-slate-100 dark:bg-black/40 border border-slate-300/10 dark:border-white/10 text-center flex flex-col items-center hover:border-slate-300/20 dark:border-white/20 transition-colors">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">1. GST Rule Check</div>
                  <div className="text-[11px] text-slate-900/50 dark:text-white/50 mt-1">Client and line-item tax numbers verified locally</div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-100 dark:bg-black/40 border border-slate-300/10 dark:border-white/10 text-center flex flex-col items-center hover:border-slate-300/20 dark:border-white/20 transition-colors">
                  <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-3">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">2. Token & Auth Header</div>
                  <div className="text-[11px] text-slate-900/50 dark:text-white/50 mt-1">Secure JWT auth generated for ClearTax API Gateway</div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-100 dark:bg-black/40 border border-slate-300/10 dark:border-white/10 text-center flex flex-col items-center hover:border-slate-300/20 dark:border-white/20 transition-colors">
                  <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 mb-3">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">3. ClearTax API Response</div>
                  <div className="text-[11px] text-slate-900/50 dark:text-white/50 mt-1">NIC returns 64-char IRN, ACK number, and signed QR</div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-100 dark:bg-black/40 border border-slate-300/10 dark:border-white/10 text-center flex flex-col items-center hover:border-slate-300/20 dark:border-white/20 transition-colors">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-3">
                    <Database className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">4. Invoice Stamped</div>
                  <div className="text-[11px] text-slate-900/50 dark:text-white/50 mt-1">Tax QR code attached to PDF print formats permanently</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
