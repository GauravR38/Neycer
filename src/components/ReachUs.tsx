import React, { useState } from 'react';
import { MapPin, Phone, Mail, Landmark, CheckCircle, Send, ShieldAlert, HeartHandshake, Building2 } from 'lucide-react';

export default function ReachUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      // Simulate real submission
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div id="reach-us-view" className="max-w-7xl mx-auto w-full px-4 py-8 flex flex-col gap-12 bg-white">
      {/* Title block */}
      <div id="reach-header" className="text-center max-w-2xl mx-auto flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          Responsive Helpdesk & Logistics
        </span>
        <h1 id="reach-title" className="text-2xl md:text-3.5xl font-black text-brand-deepblue tracking-tight leading-tight">
          Reach Us — Technical Enquiries & Offices
        </h1>
        <p id="reach-subtitle" className="text-xs md:text-sm text-brand-darkgray font-medium leading-relaxed">
          Contact our customer service, download engineering specifications, or get in touch with our Chennai corporate headquarters directly.
        </p>
      </div>

      <div id="reach-content-layout" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Contact details */}
        <div id="reach-left-column" className="lg:col-span- così lg:col-span-5 flex flex-col gap-6">
          
          {/* Corporate Office Block */}
          <div id="corporate-hq-box" className="p-5 bg-brand-lightblue/20 border border-brand-lightblue/60 rounded-lg flex flex-col gap-3">
            <div className="flex items-center gap-2 text-primary">
              <Landmark className="w-5 h-5" />
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-brand-deepblue">
                Corporate Office
              </h3>
            </div>
            <div className="flex flex-col gap-2 text-xs text-brand-darkgray">
              <p id="corp-firm-name" className="font-extrabold text-brand-deepblue leading-snug">
                Neycer India Limited<br />
                <span className="text-[11px] font-semibold text-brand-lightgray">(also known as Spartek Ceramics India Ltd)</span>
              </p>
              <p id="corp-hq-address" className="flex items-start gap-1.5 leading-relaxed">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>145, St. Mary's Road, Alwarpet, Chennai – 600018</span>
              </p>
              <p id="corp-hq-tel" className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Phone: 044 – 45088111</span>
              </p>
              <p id="corp-hq-fax" className="flex items-center gap-1.5 text-gray-500 font-mono">
                <span>Fax: 044 – 45028222</span>
              </p>
              <p id="corp-hq-mail" className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Email: <a href="mailto:sales@neycer.in" className="hover:underline text-primary">sales@neycer.in</a></span>
              </p>
              <p id="corp-hq-tollfree" className="flex items-center gap-1.5 font-bold text-brand-deepblue bg-white p-2 rounded border border-gray-100">
                <Phone className="w-4 h-4 text-primary" />
                <span>Toll Free: 1800 572 6274</span>
              </p>
            </div>
          </div>

          {/* Plant/Factory Block */}
          <div id="factory-plant-box" className="p-5 bg-gray-50 border border-gray-200 rounded-lg flex flex-col gap-3">
            <div className="flex items-center gap-2 text-primary">
              <Building2 className="w-5 h-5 text-brand-darkblue" />
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-brand-deepblue">
                Manufacturing Plant
              </h3>
            </div>
            <div className="flex flex-col gap-2 text-xs text-brand-darkgray">
              <p id="plant-firm-name" className="font-extrabold text-brand-deepblue leading-snug">
                Neycer India Limited Factory
              </p>
              <p id="plant-address" className="flex items-start gap-1.5 leading-relaxed">
                <MapPin className="w-4 h-4 text-brand-darkblue flex-shrink-0 mt-0.5" />
                <span>Vadalur, Cuddalore District, Tamil Nadu – 607303</span>
              </p>
              <p id="plant-tel" className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-brand-darkblue flex-shrink-0" />
                <span>Phone: +91 4142 – 259387 / 396</span>
              </p>
              <p id="plant-fax" className="flex items-center gap-1.5 text-gray-500 font-mono">
                <span>Fax: +91 4142 – 299550</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div id="reach-right-column" className="lg:col-span-7 flex flex-col gap-6">
          <div id="contact-form-card" className="p-6 md:p-8 border border-gray-150 rounded-lg bg-white shadow-xs">
            <h3 id="form-card-title" className="text-base font-bold text-brand-deepblue border-b border-gray-150 pb-2.5 mb-4">
              Get In Touch
            </h3>

            <form id="inquires-contact-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Field 1: Name */}
              <div id="contact-field-name" className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-brand-deepblue uppercase tracking-wider">
                  Your Name *
                </label>
                <input
                  id="contact-input-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="px-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-brand-darkgray focus:outline-none focus:border-primary focus:bg-white transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Field 2: Email */}
                <div id="contact-field-email" className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-brand-deepblue uppercase tracking-wider">
                    Your Email *
                  </label>
                  <input
                    id="contact-input-email"
                    type="email"
                    name="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="px-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-brand-darkgray focus:outline-none focus:border-primary focus:bg-white transition"
                  />
                </div>

                {/* Field 3: Phone */}
                <div id="contact-field-phone" className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-brand-deepblue uppercase tracking-wider">
                    Mobile Number *
                  </label>
                  <input
                    id="contact-input-phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter 10-digit number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="px-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-brand-darkgray focus:outline-none focus:border-primary focus:bg-white transition"
                  />
                </div>
              </div>

              {/* Field 4: Message */}
              <div id="contact-field-msg" className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-brand-deepblue uppercase tracking-wider">
                  Your Message *
                </label>
                <textarea
                  id="contact-input-msg"
                  name="message"
                  required
                  rows={4}
                  placeholder="Outline your project requirements, estimated closet quantities, or delivery location..."
                  value={formData.message}
                  onChange={handleChange}
                  className="px-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-brand-darkgray focus:outline-none focus:border-primary focus:bg-white transition resize-none"
                ></textarea>
              </div>

              <button
                id="contact-form-submit-btn"
                type="submit"
                className="bg-primary hover:bg-brand-darkblue text-white font-bold text-xs px-6 py-3 rounded transition cursor-pointer flex items-center justify-center gap-1.5 mt-2 shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Query</span>
              </button>
            </form>

            {submitted && (
              <div id="contact-success-alert" className="mt-4 bg-emerald-50 text-emerald-800 border border-emerald-100 text-xs p-4 rounded flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-extrabold uppercase text-[10px] tracking-wider text-emerald-900">Query Recorded Successfully</span>
                  <span className="mt-0.5 leading-relaxed">Thank you. Your message has been received. Our sales representatives for Chennai/Tamil Nadu will respond in 24 hours.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Google Maps Embed placeholder */}
      <section id=" Chennai-office-map-frame" className="flex flex-col gap-4">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-brand-deepblue border-b border-gray-150 pb-2">
          Corporate Office Location Map
        </h3>
        <div id="styled-map-container" className="w-full h-80 bg-gray-100 rounded-lg border border-gray-200 overflow-hidden relative flex flex-col items-center justify-center text-center p-6 gap-3">
          {/* Abstract background grid mimicking maps */}
          <div className="absolute inset-0 bg-[radial-gradient(#a6a6a6_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
          
          <MapPin className="w-10 h-10 text-primary z-10 animate-bounce" />
          <div className="z-10 max-w-sm">
            <h4 className="text-sm font-extrabold text-brand-deepblue uppercase">
              Alwarpet HQ Coordinate
            </h4>
            <p className="text-xs text-brand-darkgray mt-1 leading-normal">
              145, St. Mary's Road, Alwarpet, Chennai – 600018, Tamil Nadu, India
            </p>
          </div>
          <button
            id="map-external-redirect"
            onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=145,+St.+Marys+Road,+Alwarpet,+Chennai+-+600018', '_blank', 'noreferrer')}
            className="z-10 bg-white hover:bg-gray-50 border border-gray-250 text-brand-deepblue font-bold text-xs px-4 py-2 rounded shadow-xs cursor-pointer transition"
          >
            Open in Google Maps
          </button>
        </div>
      </section>
    </div>
  );
}
