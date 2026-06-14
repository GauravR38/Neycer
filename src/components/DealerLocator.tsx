import React, { useState, useMemo } from 'react';
import { MapPin, Phone, Compass, Search, AlertCircle, Building2 } from 'lucide-react';
import { DEALERS } from '../data';

export default function DealerLocator() {
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [searchedDealers, setSearchedDealers] = useState<typeof DEALERS>([]);
  const [hasSearched, setHasSearched] = useState(false);

  // Derive unique states listed in database
  const states = useMemo(() => {
    const list = new Set(DEALERS.map(d => d.state));
    return Array.from(list).sort();
  }, []);

  // Derive cities belonging strictly to selected state
  const cities = useMemo(() => {
    if (!selectedState) return [];
    const filtered = DEALERS.filter(d => d.state === selectedState);
    const list = new Set(filtered.map(d => d.city));
    return Array.from(list).sort();
  }, [selectedState]);

  // Handle cascaded update on state selection change
  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const stateVal = e.target.value;
    setSelectedState(stateVal);
    setSelectedCity(''); // Reset city cascading
  };

  const handleSearchDealers = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);

    if (!selectedState) {
      setSearchedDealers([]);
      return;
    }

    const filtered = DEALERS.filter(dealer => {
      const matchesState = dealer.state === selectedState;
      const matchesCity = selectedCity ? dealer.city === selectedCity : true;
      return matchesState && matchesCity;
    });

    setSearchedDealers(filtered);
  };

  const handleGetDirections = (address: string) => {
    const mapsQuery = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsQuery, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="dealer-locator-view" className="max-w-7xl mx-auto w-full px-4 py-8 flex flex-col gap-10 bg-white">
      {/* Editorial Title */}
      <div id="dealer-loc-header" className="text-center max-w-2xl mx-auto flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-widest text-[#1d4485]">
          Authorized Retail Partner Framework
        </span>
        <h1 id="dealer-loc-title" className="text-2xl md:text-3xl font-black text-brand-darkgray tracking-tight leading-tight">
          Neycer Dealer Locator
        </h1>
        <p id="dealer-loc-subtitle" className="text-xs md:text-sm text-brand-darkgray font-medium leading-relaxed">
          Locate certified Neycer dealers, corporate distributors, and project coordinators near you.
        </p>
      </div>

      {/* Filter and selector panel */}
      <section id="dealer-filter-form-box" className="p-6 bg-brand-lightblue/20 border border-brand-lightblue/60 rounded-xl max-w-4xl mx-auto w-full shadow-sm">
        <form id="dealer-locator-dropdowns" onSubmit={handleSearchDealers} className="flex flex-col sm:flex-row items-end gap-4">
          
          {/* Dropdown 1: State Selection */}
          <div id="wrapper-state-select" className="flex flex-col gap-1.5 flex-1 w-full">
            <label id="lbl-state-select" className="text-[11px] font-extrabold uppercase tracking-widest text-[#1d4485]">
              Select State *
            </label>
            <select
              id="state-select-dropdown"
              value={selectedState}
              onChange={handleStateChange}
              className="w-full px-3.5 py-3 bg-white border border-gray-200 rounded-md text-xs font-semibold text-brand-darkgray cursor-pointer focus:outline-none focus:border-[#1d4485] focus:ring-1 focus:ring-[#1d4485]/25 transition-all"
              required
            >
              <option value="">-- Select State --</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          {/* Dropdown 2: City Selection */}
          <div id="wrapper-city-select" className="flex flex-col gap-1.5 flex-1 w-full">
            <label id="lbl-city-select" className="text-[11px] font-extrabold uppercase tracking-widest text-[#1d4485]">
              Select City (Optional)
            </label>
            <select
              id="city-select-dropdown"
              value={selectedCity}
              disabled={!selectedState}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-3.5 py-3 bg-white border border-gray-200 rounded-md text-xs font-semibold text-brand-darkgray disabled:opacity-50 disabled:bg-gray-100 cursor-pointer focus:outline-none focus:border-[#1d4485] focus:ring-1 focus:ring-[#1d4485]/25 transition-all"
            >
              <option value="">All Cities / Distributors</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Query submit buttons */}
          <button
            id="dealer-search-btn"
            type="submit"
            className="w-full sm:w-auto bg-[#1d4485] hover:bg-brand-darkblue text-white font-bold text-xs px-8 py-3.5 rounded-md transition duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-sm"
          >
            <Search className="w-4 h-4" />
            <span>Search Partners</span>
          </button>
        </form>
      </section>

      {/* Lookup results matrix */}
      <section id="dealers-results-grid" className="max-w-6xl mx-auto w-full transition-all duration-300">
        {!hasSearched ? (
          /* Landing Promo/Instructions Banner */
          <div className="text-center py-10 bg-brand-lightblue/10 border border-brand-lightblue/30 rounded-xl p-8 flex flex-col items-center">
            <MapPin className="w-10 h-10 text-[#1d4485] mb-3 animate-pulse" />
            <h3 className="text-sm font-bold text-[#1d4485] uppercase tracking-wider">Search Authorized Neycer Partner Stores</h3>
            <p className="text-xs text-brand-darkgray max-w-lg mt-2 leading-relaxed">
              We have a nationwide distribution framework in states like Tamil Nadu, Telangana, Kerala, Andhra Pradesh, Puducherry, and Odisha. Select your region above and click "Search Partners" to view verified local locations.
            </p>
          </div>
        ) : (
          /* Searched Display state */
          <>
            <h3 id="dealers-results-heading" className="text-xs font-extrabold uppercase tracking-wider text-[#1d4485] border-b border-gray-100 pb-2 mb-6">
              Matched Partner Outlets ({searchedDealers.length})
            </h3>

            {searchedDealers.length > 0 ? (
              <div id="dealers-matrix-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                {searchedDealers.map((dealer, idx) => (
                  <div
                    key={idx}
                    id={`dealer-outlet-${idx}`}
                    className="bg-white border border-gray-150 p-5 rounded-lg hover:shadow-md hover:border-[#1d4485]/30 transition duration-300 flex flex-col justify-between gap-4"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start justify-between">
                        <span className="text-[10px] bg-brand-lightblue text-primary font-bold px-2.5 py-0.5 rounded tracking-wide font-mono">
                          {dealer.city}, {dealer.state}
                        </span>
                        <Building2 className="w-4.5 h-4.5 text-brand-lightgray" />
                      </div>
                      <h4 className="text-xs font-black text-brand-darkgray tracking-tight uppercase leading-tight">
                        {dealer.name}
                      </h4>
                      <div className="flex items-start gap-1.5 mt-1.5 text-xs text-brand-darkgray">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <p className="leading-relaxed text-[11.5px] font-medium">{dealer.address}</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 border-t border-gray-100 pt-3.5 mt-1">
                      <a
                        id={`dealer-phone-${idx}`}
                        href={`tel:${dealer.phone.replace(/\s+/g, '')}`}
                        className="flex items-center gap-1.5 text-xs text-brand-darkgray hover:text-primary font-semibold"
                      >
                        <Phone className="w-3.5 h-3.5 text-primary" />
                        <span>Contact: {dealer.phone}</span>
                      </a>

                      <button
                        id={`dealer-get-directions-${idx}`}
                        onClick={() => handleGetDirections(dealer.address)}
                        className="mt-1 w-full bg-brand-lightblue/50 hover:bg-[#1d4485] hover:text-white border border-[#1d4485]/20 hover:border-[#1d4485] text-brand-darkgray font-bold text-xs py-2 rounded transition cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <Compass className="w-3.5 h-3.5" />
                        <span>Get Custom Directions</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div id="no-dealers-alert" className="text-center py-16 bg-gray-50 border border-dashed border-gray-200 rounded-lg flex flex-col items-center gap-2">
                <AlertCircle className="w-8 h-8 text-red-500" />
                <h4 className="text-xs font-bold text-[#1d4485] font-mono uppercase tracking-wider">No matching outlets found</h4>
                <p className="text-xs text-brand-darkgray max-w-sm leading-relaxed px-4">
                  No authorized dealers found in this city. Contact our sales team at <a href="mailto:info@neycer.in" className="text-primary hover:underline font-bold">info@neycer.in</a> for direct support.
                </p>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
