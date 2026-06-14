import { Building2, Landmark, GraduationCap, Hotel, Library, ShieldAlert } from 'lucide-react';
import { CLIENTS } from '../data';

export default function Clients() {
  // Helper to map client names or styles to icons to make the layout extremely custom and polished
  const getClientIcon = (name: string) => {
    const text = name.toLowerCase();
    if (text.includes('hotel') || text.includes('oberoi') || text.includes('taj') || text.includes('trident') || text.includes('resorts')) {
      return <Hotel className="w-6 h-6 text-brand-darkblue" />;
    }
    if (text.includes('housing') || text.includes('foundations') || text.includes('projects') || text.includes('infrastructure') || text.includes('construction') || text.includes('housing board')) {
      return <Building2 className="w-6 h-6 text-brand-darkblue" />;
    }
    if (text.includes('iit') || text.includes('madras')) {
      return <GraduationCap className="w-6 h-6 text-brand-darkblue" />;
    }
    return <Landmark className="w-6 h-6 text-brand-darkblue" />;
  };

  return (
    <div id="clients-view" className="max-w-7xl mx-auto w-full px-4 py-8 flex flex-col gap-10 bg-white">
      {/* Editorial Title */}
      <div id="clients-header" className="text-center max-w-3xl mx-auto flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          Our Valued Collaborations
        </span>
        <h1 id="clients-main-title" className="text-2xl md:text-3.5xl font-extrabold text-brand-deepblue tracking-tight leading-tight">
          Trust & Acceptance
        </h1>
        <p id="clients-intro-paragraph" className="text-xs md:text-sm text-brand-darkgray leading-relaxed font-semibold">
          Neycer has wide acceptance from International Hotel Chains, Reputed Property Developers, Premier Educational Institutions, Central & State Governments and PSUs.
        </p>
      </div>

      {/* Styled Grid of client cards (3 on desktop, 2 on mobile) */}
      <div id="clients-grid" className="grid grid-cols-2 md:grid-cols-3 gap-5 animate-fadeIn">
        {CLIENTS.map((client, idx) => (
          <div
            key={idx}
            id={`client-card-${idx}`}
            className="p-5 md:p-6 bg-white border border-gray-100 rounded-lg hover:shadow-md hover:border-primary/25 transition duration-300 flex flex-col gap-3 justify-between"
          >
            {/* Logo placeholder - Standard Grey design */}
            <div className="flex items-center justify-between">
              <div className="p-2.5 bg-gray-100 rounded-lg text-brand-lightgray flex items-center justify-center">
                {getClientIcon(client.name)}
              </div>
              <span className="text-[9px] font-extrabold font-mono text-brand-lightgray tracking-wider uppercase bg-gray-50 px-2 py-0.5 rounded">
                Ref ID: {(idx + 100).toString()}
              </span>
            </div>

            {/* Client Info */}
            <div className="flex flex-col gap-1.5 pt-1">
              <h3 className="text-[12px] md:text-xs font-bold text-brand-deepblue tracking-tight leading-snug">
                {client.name}
              </h3>
              <span className="text-[10px] text-primary/75 font-semibold uppercase tracking-wider">
                {client.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
