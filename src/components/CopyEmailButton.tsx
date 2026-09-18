'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  };

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="w-full flex items-center gap-3.5 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors text-left group cursor-pointer"
      title="Click to copy email address"
      aria-label="Copy email address skjainoddin36654@gmail.com"
    >
      <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-105 transition-transform">
        <Mail className="w-4 h-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs text-slate-600 font-medium">Email</div>
        <div className="text-sm font-semibold text-slate-900 truncate">
          {personalInfo.contact.email}
        </div>
      </div>
      {copied ? (
        <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" /> Copied
        </span>
      ) : (
        <span className="text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
          Copy
        </span>
      )}
    </button>
  );
}
