import { useState } from 'react';
import { FileText, Download, Briefcase, Calendar, ChevronRight, Scale, TrendingUp, AlertCircle, Building } from 'lucide-react';

export default function Investors() {
  const [activeSection, setActiveSection] = useState<string>('Annual Reports');

  const sections = [
    'Annual Reports',
    'Audited Results',
    'Board of Directors',
    'Chairperson\'s Speech',
    'Code of Conduct',
    'Compliances',
    'Corporate News',
    'Investors Relations',
    'Policies'
  ];

  const handleDownloadStub = (fileName: string) => {
    alert(`Retrieved mock file from server: ${fileName}. For official signed disclosures, please check SEBI public filings or write the corporate secretary.`);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'Annual Reports':
        return (
          <div id="investor-annual-reports" className="flex flex-col gap-5 animate-fadeIn">
            <h3 className="text-base font-bold text-brand-deepblue border-b border-gray-100 pb-2 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <span>Annual Reports & Disclosures</span>
            </h3>
            <p className="text-xs text-brand-darkgray leading-relaxed">
              Consolidated financial sheets and audit certificates conforming to Section 134 of the Indian Companies Act, 2013.
            </p>
            <div className="flex flex-col gap-3 mt-2 font-mono">
              {[
                { year: 'FY 2024 - 2025', desc: 'Annual Statutory Report & Audited Accounts (Neycer)' },
                { year: 'FY 2023 - 2014', desc: '64th Annual Financial Consolidation Dossier' },
                { year: 'FY 2022 - 2023', desc: '63rd Annual Statement of Shareholdings & Profit' },
                { year: 'FY 2021 - 2022', desc: '62nd Comprehensive Corporate Governance Report' }
              ].map((doc, idx) => (
                <div key={idx} className="p-3 bg-gray-50 border border-gray-150 rounded flex justify-between items-center text-xs">
                  <div className="flex flex-col">
                    <span className="font-extrabold text-brand-deepblue">{doc.year}</span>
                    <span className="text-[10px] text-brand-lightgray mt-0.5">{doc.desc}</span>
                  </div>
                  <button
                    onClick={() => handleDownloadStub(`Neycer_Annual_Report_${idx}.pdf`)}
                    className="p-1.5 border border-primary hover:bg-primary hover:text-white rounded text-primary transition cursor-pointer flex items-center gap-1 font-sans text-[11px] font-bold"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>PDF</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Audited Results':
        return (
          <div id="investor-audited-results" className="flex flex-col gap-5 animate-fadeIn">
            <h3 className="text-base font-bold text-brand-deepblue border-b border-gray-100 pb-2">
              Audited Financial Results & Balance Sheets
            </h3>
            <p className="text-xs text-brand-darkgray leading-relaxed">
              Quarterly performance sheets and statutory disclosures submitted to national stock exchanges. Approved by the Audit Committee.
            </p>
            <div className="overflow-hidden border border-gray-150 rounded">
              <table className="w-full text-left border-collapse text-xs font-mono">
                <thead>
                  <tr className="bg-gray-100 font-sans font-bold text-brand-deepblue">
                    <th className="p-2.5">Reporting Quarter</th>
                    <th className="p-2.5 text-right">Revenue (₹ Lakhs)</th>
                    <th className="p-2.5 text-right">Auditor Pin</th>
                    <th className="p-2.5 text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-50">
                    <td className="p-2.5 font-bold">Q4 Ended March 31, 2025</td>
                    <td className="p-2.5 text-right">4,821.50</td>
                    <td className="p-2.5 text-right">SRB-92</td>
                    <td className="p-2.5 text-center"><span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-[10px] font-bold">Signed</span></td>
                  </tr>
                  <tr className="border-b border-gray-50 bg-gray-50/50">
                    <td className="p-2.5 font-bold">Q3 Ended Dec 31, 2024</td>
                    <td className="p-2.5 text-right">4,510.12</td>
                    <td className="p-2.5 text-right">SRB-92</td>
                    <td className="p-2.5 text-center"><span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-[10px] font-bold">Signed</span></td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="p-2.5 font-bold">Q2 Ended Sep 30, 2024</td>
                    <td className="p-2.5 text-right">4,345.90</td>
                    <td className="p-2.5 text-right">PKF-51</td>
                    <td className="p-2.5 text-center"><span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-[10px] font-bold">Signed</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'Board of Directors':
        return (
          <div id="investor-board-members" className="flex flex-col gap-5 animate-fadeIn">
            <h3 className="text-base font-bold text-brand-deepblue border-b border-gray-100 pb-2">
              Board of Directors — Executive Leadership
            </h3>
            <p className="text-xs text-brand-darkgray leading-relaxed">
              Our directors possess extensive decades of expertise in heavy industrial production, vitrified ceramics, and financial frameworks.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
              {[
                { name: 'Shri. Krishnakumar M.', role: 'Chairman / Managing Director (Spartek Group)', type: 'Executive Director' },
                { name: 'Dr. Subramanian S.', role: 'Lead Director / Audit Advisor', type: 'Non-Executive Independent' },
                { name: 'Smt. Radhika R.', role: 'Strategic Alliances & Corporate Ethics', type: 'Independent Director' },
                { name: 'Shri. Venkatesh G.', role: 'Operations & Plant Logistics Chief', type: 'Whole-Time Director' }
              ].map((member, idx) => (
                <div key={idx} className="p-4 bg-gray-50 border border-gray-150 rounded flex gap-3 items-start">
                  <div className="p-2 bg-brand-lightblue rounded text-primary">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-brand-deepblue uppercase tracking-tight">{member.name}</span>
                    <span className="text-[11px] text-primary font-medium mt-0.5">{member.role}</span>
                    <span className="text-[9px] text-brand-lightgray font-mono mt-1 uppercase block font-semibold">{member.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Chairperson\'s Speech':
        return (
          <div id="investor-chair-speech" className="flex flex-col gap-4 animate-fadeIn">
            <h3 className="text-base font-bold text-brand-deepblue border-b border-gray-100 pb-2">
              64th Annual General Meeting (AGM) — Chairperson's Address
            </h3>
            <p className="text-xs text-brand-darkgray leading-relaxed leading-5">
              "Dear Shareholders, despite the raw materials pricing stress and energy tariff enhancements across the southern grids, Neycer managed to expand our premium segment output by 12% in the last fiscal year. Integration within the Spartek Group has solidified our supply logistic chains, resulting in greater penetrations into tier-2 builder zones in AP, Kerala and Tamil Nadu. We remain committed to executing on water-conserving rimless closets and low-emission furnace upgrades at Vadalur."
            </p>
            <span className="text-[11px] text-brand-lightgray block font-bold uppercase tracking-wider font-mono mt-2">
              — Delivered by Krishnakumar M., Chennai HQ
            </span>
          </div>
        );
      case 'Code of Conduct':
        return (
          <div id="investor-ethics-codes" className="flex flex-col gap-4 animate-fadeIn">
            <h3 className="text-base font-bold text-brand-deepblue border-b border-gray-100 pb-2 flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" />
              <span>Core Code of Business Conduct & Ethics</span>
            </h3>
            <p className="text-xs text-brand-darkgray leading-relaxed leading-5">
              This Code outlines our structural commitments to full compliance, preventing conflicts of interest, executing transparent transaction lists, and maintaining rigorous product sanitary quality. All board members and executive directors verify and sign off on this Code annually.
            </p>
            <button
              onClick={() => handleDownloadStub('Neycer_Code_of_Conduct_Disclosures.pdf')}
              className="mt-2 bg-brand-lightblue/50 hover:bg-primary border border-brand-lightblue hover:border-primary text-brand-deepblue hover:text-white font-bold text-xs px-5 py-2 rounded-md self-start transition cursor-pointer flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              <span>Retrieve full Ethics PDF Document</span>
            </button>
          </div>
        );
      case 'Compliances':
        return (
          <div id="investor-compliances" className="flex flex-col gap-4 animate-fadeIn">
            <h3 className="text-base font-bold text-brand-deepblue border-b border-gray-150 pb-2">
              Regulatory Compliances & SEBI Filings
            </h3>
            <p className="text-xs text-brand-darkgray leading-relaxed leading-5">
              Weekly and monthly compliance reports submitted under Regulation 55 of the SEBI Listing Obligations and Disclosure Requirements (LODR) Regulations, 2015.
            </p>
            <div className="flex flex-col gap-3 font-mono text-xs">
              <div className="p-3 bg-gray-50 border border-gray-150 rounded flex justify-between items-center">
                <span>SEBI Regulation 7(3) — Compliance Certificate</span>
                <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-sans font-bold">Complied</span>
              </div>
              <div className="p-3 bg-gray-50 border border-gray-150 rounded flex justify-between items-center">
                <span>SEBI Regulation 40(9) — Transfer Verifications</span>
                <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-sans font-bold">Complied</span>
              </div>
              <div className="p-3 bg-gray-50 border border-gray-150 rounded flex justify-between items-center">
                <span>Environmental Clearances — Pondicherry Board</span>
                <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-sans font-bold">Complied</span>
              </div>
            </div>
          </div>
        );
      case 'Corporate News':
        return (
          <div id="investor-corp-news" className="flex flex-col gap-4 animate-fadeIn">
            <h3 className="text-base font-bold text-brand-deepblue border-b border-gray-100 pb-2">
              Corporate News & Disseminations
            </h3>
            <div className="flex flex-col gap-4 font-sans text-xs">
              <div className="p-4 bg-brand-lightblue/20 rounded border border-brand-lightblue/50 flex flex-col gap-2">
                <span className="font-bold text-brand-deepblue uppercase text-[10px] tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>April 18, 2025</span>
                </span>
                <h4 className="font-extrabold text-[13px] text-brand-deepblue">Neycer commissions low emission kiln upgrades at Cuddalore Vadalur plant</h4>
                <p className="text-brand-darkgray leading-relaxed">
                  In alignment with clean-energy mandates, the new kiln reduces gas emissions by 18% while enhancing the glossy structural glazing speed of our popular closets by 10%.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded border border-gray-200 flex flex-col gap-2">
                <span className="font-bold text-brand-darkgray uppercase text-[10px] tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gray-500" />
                  <span>January 24, 2025</span>
                </span>
                <h4 className="font-extrabold text-[13px] text-brand-deepblue">Direct Supply Framework with PWD Kerala logged successfully</h4>
                <p className="text-brand-darkgray leading-relaxed">
                  Neycer secures supply partnership for 4,000+ water closets matching state sanitary specifications for administrative complexes.
                </p>
              </div>
            </div>
          </div>
        );
      case 'Investors Relations':
        return (
          <div id="investor-relations" className="flex flex-col gap-4 animate-fadeIn">
            <h3 className="text-base font-bold text-brand-deepblue border-b border-gray-100 pb-2">
              Shareholder Relations & Coordinator Contact
            </h3>
            <p className="text-xs text-brand-darkgray leading-relaxed leading-5">
              For share transfers, physical certificate conversions, dividend queries, or copy of previous financial balance filings, contact our dedicated coordinate:
            </p>
            <div className="p-4 bg-gray-50 border border-gray-150 rounded text-xs flex flex-col gap-2 leading-relaxed">
              <span className="font-extrabold text-brand-deepblue">Neycer Investor Relations Cell</span>
              <span>145, St. Mary's Road, Alwarpet, Chennai – 600018</span>
              <span>Email: <a href="mailto:investor@neycer.in" className="text-primary hover:underline font-bold">investor@neycer.in</a></span>
              <span>Direct Hotline: <strong className="font-semibold text-brand-deepblue">044-45088111</strong> ext 104</span>
            </div>
          </div>
        );
      case 'Policies':
        return (
          <div id="investors-policies" className="flex flex-col gap-4 animate-fadeIn">
            <h3 className="text-base font-bold text-brand-deepblue border-b border-gray-100 pb-2">
              Statutory Corporate Governance Policies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              {[
                'Whistle Blower Protection Policy',
                'Material Subsidiaries Policy',
                'Related Party Transactions Policy',
                'Dividend Distribution Guidelines',
                'Determination of Materiality Policy',
                'Archival & Data Retention Policy'
              ].map((policy, idx) => (
                <div key={idx} className="p-3 bg-gray-50 border border-gray-150 rounded flex justify-between items-center">
                  <span className="font-bold text-brand-deepblue uppercase text-[10px] tracking-tight">{policy}</span>
                  <button
                    onClick={() => handleDownloadStub(`${policy.replace(/\s+/g, '_')}.pdf`)}
                    className="p-1 border border-primary hover:bg-primary hover:text-white rounded text-primary transition cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div id="investor-disclosure-view" className="max-w-7xl mx-auto w-full px-4 py-8 flex flex-col gap-8 bg-white">
      {/* Title */}
      <div id="investor-header" className="border-b border-gray-150 pb-5">
        <h1 id="investor-main-title" className="text-2xl md:text-3.5xl font-black text-brand-deepblue tracking-tight leading-none leading-tight">
          Neycer Investor Relations Portal
        </h1>
        <p id="investor-subtitle-p" className="text-xs text-brand-lightgray font-bold uppercase mt-1 tracking-wider">
          Statutory declarations, audited fiscal quarterly results, and chairperson AGM statements of Neycer India Limited
        </p>
      </div>

      <div id="investors-grid-layout" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left menu sidebar */}
        <aside id="investors-sidebar" className="col-span-1 lg:col-span-3 bg-gray-50 rounded border border-gray-150 p-4">
          <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-brand-lightgray border-b border-gray-200 pb-2 mb-3.5">
            Investor Resources
          </h4>
          <div id="investors-menu-elements" className="flex flex-col gap-1.5 text-xs">
            {sections.map((sec) => (
              <button
                key={sec}
                id={`investor-tab-${sec.replace(/[^a-zA-Z]/g, '').toLowerCase()}`}
                onClick={() => setActiveSection(sec)}
                className={`text-left px-3.5 py-2.5 rounded font-bold cursor-pointer transition ${
                  activeSection === sec
                    ? 'bg-primary text-white'
                    : 'text-brand-deepblue hover:bg-white hover:text-primary'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>
        </aside>

        {/* Right sub-view renderer */}
        <main id="investors-rendering-outlet" className="col-span-1 lg:col-span-9 p-5 md:p-6 border border-gray-100 rounded-lg shadow-xs bg-white">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
