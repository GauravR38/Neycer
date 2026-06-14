import React, { useState } from 'react';
import { Tag, Trophy, Handshake, Monitor, CheckCircle, Send, ShieldAlert } from 'lucide-react';

export default function BusinessAssociate() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    companyName: '',
    companyAddress: '',
    profession: '',
    experience: '',
    areaInterested: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.email && formData.companyName) {
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        companyName: '',
        companyAddress: '',
        profession: '',
        experience: '',
        areaInterested: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const benefits = [
    {
      icon: <Tag className="w-5 h-5 text-primary" />,
      title: 'Exclusive Deals',
      desc: 'Get valuable deals, special distributor price tiers, and exclusive marketing discounts.'
    },
    {
      icon: <Trophy className="w-5 h-5 text-primary" />,
      title: 'Priority Access',
      desc: 'Be the first to see our new additions, luxury designs, and updated retail lists.'
    },
    {
      icon: <Handshake className="w-5 h-5 text-primary" />,
      title: 'Extended Support',
      desc: 'Have greater access to our executive team for project clearances, ISI compliance papers and freight solutions.'
    },
    {
      icon: <Monitor className="w-5 h-5 text-primary" />,
      title: 'Online Ordering',
      desc: 'Browse our extensive collections and compile direct dealer estimate requests from the comfort of your office.'
    }
  ];

  return (
    <div id="associate-program-view" className="max-w-7xl mx-auto w-full px-4 py-8 flex flex-col gap-12 bg-white">
      {/* Title */}
      <div id="assoc-header" className="text-center max-w-2xl mx-auto flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          Strategic Channels Onboarding
        </span>
        <h1 id="assoc-title" className="text-2xl md:text-3.5xl font-black text-brand-deepblue tracking-tight leading-tight">
          Business Associate Program — The Associate Advantage
        </h1>
        <p id="assoc-subtitle" className="text-xs md:text-sm text-brand-darkgray font-medium leading-relaxed">
          Align your distribution network with India's pioneering ceramic sanitary brand. Enjoy volume discounts, technical document assistance, and priority manufacturing schedules.
        </p>
      </div>

      {/* Advantage benefit cards */}
      <div id="assoc-benefits-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            id={`benefit-card-${idx}`}
            className="p-5 border border-gray-150 rounded-lg bg-gray-50/50 hover:bg-white hover:shadow-md transition duration-300 flex flex-col gap-3"
          >
            <div className="p-2.5 bg-brand-lightblue rounded-lg self-start">
              {benefit.icon}
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-deepblue">
              {benefit.title}
            </h3>
            <p className="text-[11.5px] leading-relaxed text-brand-darkgray">
              {benefit.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Registration Application Form */}
      <section id="assoc-form-card" className="max-w-3xl mx-auto w-full p-6 md:p-8 bg-white border border-gray-150 rounded-lg shadow-xs">
        <h3 id="assoc-form-title" className="text-base font-bold text-brand-deepblue border-b border-gray-150 pb-2.5 mb-6">
          Submit Partnership Application
        </h3>

        <form id="associate-application-inputs" onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          {/* Section 1: Contact Information */}
          <div id="form-sec-contact" className="flex flex-col gap-3.5">
            <h4 className="text-[11.5px] font-extrabold uppercase text-primary tracking-widest border-l-2 border-primary pl-2 mb-1">
              1. Contact Information
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div id="wrap-assoc-name" className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-brand-deepblue uppercase tracking-wider">Name *</label>
                <input
                  id="assoc-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded text-xs text-brand-darkgray focus:outline-none focus:border-primary focus:bg-white"
                />
              </div>

              <div id="wrap-assoc-phone" className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-brand-deepblue uppercase tracking-wider">Contact Number *</label>
                <input
                  id="assoc-phone"
                  type="tel"
                  name="phone"
                  required
                  placeholder="10 digit phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded text-xs text-brand-darkgray focus:outline-none focus:border-primary focus:bg-white"
                />
              </div>

              <div id="wrap-assoc-email" className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-brand-deepblue uppercase tracking-wider">Email ID *</label>
                <input
                  id="assoc-email"
                  type="email"
                  name="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded text-xs text-brand-darkgray focus:outline-none focus:border-primary focus:bg-white"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Business Details */}
          <div id="form-sec-business" className="flex flex-col gap-3.5">
            <h4 className="text-[11.5px] font-extrabold uppercase text-primary tracking-widest border-l-2 border-primary pl-2 mb-1">
              2. Business Information
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div id="wrap-assoc-company" className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-brand-deepblue uppercase tracking-wider">Company Name *</label>
                <input
                  id="assoc-companyName"
                  type="text"
                  name="companyName"
                  required
                  placeholder="Enter registered business name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded text-xs text-brand-darkgray focus:outline-none focus:border-primary focus:bg-white"
                />
              </div>

              <div id="wrap-assoc-profession" className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-brand-deepblue uppercase tracking-wider">Current Profession/Business *</label>
                <input
                  id="assoc-profession"
                  type="text"
                  name="profession"
                  required
                  placeholder="e.g. Sanitaryware retailer, Builder, Architect"
                  value={formData.profession}
                  onChange={handleChange}
                  className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded text-xs text-brand-darkgray focus:outline-none focus:border-primary focus:bg-white"
                />
              </div>
            </div>

            <div id="wrap-assoc-address" className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-brand-deepblue uppercase tracking-wider">Company Address *</label>
              <textarea
                id="assoc-companyAddress"
                name="companyAddress"
                required
                rows={2}
                placeholder="Full operational warehouse or company address"
                value={formData.companyAddress}
                onChange={handleChange}
                className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded text-xs text-brand-darkgray focus:outline-none focus:border-primary focus:bg-white resize-none"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div id="wrap-assoc-exp" className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-brand-deepblue uppercase tracking-wider">Experience (If any)</label>
                <input
                  id="assoc-experience"
                  type="text"
                  name="experience"
                  placeholder="e.g. 5 Years in retail distribution"
                  value={formData.experience}
                  onChange={handleChange}
                  className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded text-xs text-brand-darkgray focus:outline-none focus:border-primary focus:bg-white"
                />
              </div>

              <div id="wrap-assoc-area" className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-brand-deepblue uppercase tracking-wider">Area/City Interested for Association *</label>
                <input
                  id="assoc-areaInterested"
                  type="text"
                  name="areaInterested"
                  required
                  placeholder="e.g. Hyderabad, Secunderabad, Coimbatore"
                  value={formData.areaInterested}
                  onChange={handleChange}
                  className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded text-xs text-brand-darkgray focus:outline-none focus:border-primary focus:bg-white"
                />
              </div>
            </div>
          </div>

          <button
            id="assoc-submit-btn"
            type="submit"
            className="bg-primary hover:bg-brand-darkblue text-white font-bold text-xs px-8 py-3.5 rounded transition cursor-pointer flex items-center justify-center gap-1.5 self-start shadow-xs mt-2"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit Candidacy Application</span>
          </button>
        </form>

        {submitted && (
          <div id="assoc-success-notice" className="mt-6 bg-emerald-50 text-emerald-800 border border-emerald-150 p-4 rounded flex items-start gap-2.5 animate-fadeIn">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div className="flex flex-col text-xs">
              <span className="font-extrabold uppercase text-[10px] tracking-wider text-emerald-950">Onboarding Record Submitted</span>
              <span className="mt-0.5 leading-relaxed">Thank you. Your dossier is logged. Our strategic alliances manager for Spartek Group will review the area viability and contact you within 48 business hours.</span>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
