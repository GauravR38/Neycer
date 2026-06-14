import React, { useState } from 'react';
import { ArrowDownToLine, Check, Grid, Sparkles, FolderDown, FileSpreadsheet } from 'lucide-react';
import { Page } from '../types';
import { CATEGORIES } from '../data';

interface CatalogueProps {
  setCurrentPage: (page: Page) => void;
}

export default function Catalogue({ setCurrentPage }: CatalogueProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      setDownloadSuccess(true);
      
      // Programmatically trigger download of the uploaded brochure / PDF
      const link = document.createElement('a');
      link.href = '/assets/spartek-brochure.pdf';
      link.setAttribute('download', 'Neycer_Spartek_Product_Catalogue.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setName('');
      setEmail('');
      setTimeout(() => setDownloadSuccess(false), 5000);
    }
  };

  return (
    <div id="literature-catalogue-view" className="max-w-7xl mx-auto w-full px-4 py-8 flex flex-col gap-10 bg-white">
      {/* Editorial Title */}
      <div id="catalogue-header" className="text-center max-w-2xl mx-auto flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          Instant Document Delivery
        </span>
        <h1 id="catalogue-title" className="text-2xl md:text-3.5xl font-black text-brand-deepblue tracking-tight leading-tight">
          Download Neycer Product Catalogue
        </h1>
        <p id="catalogue-subtitle" className="text-xs md:text-sm text-brand-darkgray font-medium leading-relaxed">
          Enter your details below to instantly download the comprehensive Neycer Sanitaryware Retail Price List and technical catalog.
        </p>
      </div>

      {/* Download sign up card */}
      <section id="download-request-form-card" className="max-w-xl mx-auto w-full p-6 md:p-8 bg-brand-lightblue/20 border border-brand-lightblue/50 rounded-lg shadow-xs">
        <div className="flex items-center gap-2 text-primary border-b border-brand-lightblue/50 pb-3 mb-5">
          <FolderDown className="w-5 h-5 text-primary" />
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-brand-deepblue">
            Request Price List PDF
          </h3>
        </div>

        <form id="catalogue-literature-form" onSubmit={handleDownloadSubmit} className="flex flex-col gap-4">
          {/* Form input 1: Name */}
          <div id="wrapper-downloader-name" className="flex flex-col gap-1">
            <label className="text-[11px] font-bold text-brand-deepblue uppercase tracking-wider">
              Your Name *
            </label>
            <input
              id="downloader-name-input"
              type="text"
              required
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-2 bg-white border border-gray-200 rounded text-xs text-brand-darkgray focus:outline-none focus:border-primary transition"
            />
          </div>

          {/* Form input 2: Email */}
          <div id="wrapper-downloader-email" className="flex flex-col gap-1">
            <label className="text-[11px] font-bold text-brand-deepblue uppercase tracking-wider">
              Email Address *
            </label>
            <input
              id="downloader-email-input"
              type="email"
              required
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 bg-white border border-gray-200 rounded text-xs text-brand-darkgray focus:outline-none focus:border-primary transition"
            />
          </div>

          {/* Action trigger */}
          <button
            id="catalogue-trigger-download-btn"
            type="submit"
            className="bg-primary hover:bg-brand-darkblue text-white font-bold text-xs py-3 rounded transition cursor-pointer flex items-center justify-center gap-2 shadow-xs"
          >
            <ArrowDownToLine className="w-4 h-4" />
            <span>Download High-Resolution PDF Catalogue</span>
          </button>
        </form>

        {downloadSuccess && (
          <div id="download-success-banner" className="mt-4 bg-emerald-50 text-emerald-800 border border-emerald-150 p-4 rounded flex items-start gap-2.5 animate-fadeIn">
            <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="font-extrabold uppercase text-[10px] tracking-wider text-emerald-950">Catalogue Retrieved</span>
              <span className="mt-0.5 text-xs">Your browser download has started for the Neycer Price List! If it didn't trigger automatically, please click [Download Brochure] on the top bar.</span>
            </div>
          </div>
        )}
      </section>

      {/* Browsable categories visual grid overview */}
      <section id="catalogue-overview-grid-sec" className="flex flex-col gap-6 pt-6">
        <div id="cats-overview-banner" className="text-center">
          <h3 className="text-lg font-bold text-brand-deepblue">
            Browsable Product Categories
          </h3>
          <p className="text-xs text-brand-lightgray uppercase tracking-widest mt-1 font-semibold">
            Click any section below to immediately explore verified codes & specifications
          </p>
        </div>

        <div id="cats-overview-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              id={`cat-overview-slot-${idx}`}
              onClick={() => setCurrentPage('products')}
              className="p-4 border border-gray-100 rounded bg-gray-50/50 hover:bg-white hover:border-primary hover:shadow-xs transition duration-200 text-left flex flex-col gap-2 group cursor-pointer"
            >
              <span className="text-[10px] text-primary/70 font-mono font-bold uppercase tracking-wider">
                CAT - {(idx+1).toString().padStart(2, '0')}
              </span>
              <span className="text-xs font-bold text-brand-deepblue leading-tight group-hover:text-primary transition-colors">
                {cat}
              </span>
              <span className="text-[10px] text-brand-lightgray italic group-hover:underline mt-1 block">
                Browse catalog models →
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
