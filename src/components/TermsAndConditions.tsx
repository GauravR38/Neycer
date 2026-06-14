export default function TermsAndConditions() {
  return (
    <div id="terms-conditions-view" className="max-w-4xl mx-auto w-full px-4 py-8 flex flex-col gap-6 bg-white text-xs md:text-sm text-brand-darkgray leading-relaxed">
      <div id="terms-header" className="border-b border-gray-150 pb-5">
        <h1 id="terms-main-title" className="text-2xl md:text-3xl font-black text-brand-deepblue tracking-tight">
          Terms & Conditions
        </h1>
        <p id="terms-subtitle" className="text-xs text-brand-lightgray mt-1 font-mono">
          Last Updated: June 12, 2026
        </p>
      </div>

      <div id="terms-content-blocks" className="flex flex-col gap-5">
        <h3 className="text-sm font-bold text-brand-deepblue uppercase">
          1. Intellectual Property & Brand Names
        </h3>
        <p>
          The wordmark "Neycer" and the accompanying hand-lettered logo, design patterns, product item codes, catalogs, and technical drawings are the exclusive intellectual property of Neycer India Limited and Spartek Group. You are prohibited from compiling, reproducing, or scraping product pages without explicit written consent from the Alwarpet Chennai administrative head office.
        </p>

        <h3 className="text-sm font-bold text-brand-deepblue uppercase mt-2">
          2. Product Accuracy, Prices & Specifications
        </h3>
        <p>
          All measurements, shapes, weights, and Snow White (SW) colors listed in our digital catalogue are represented as accurately as possible. However, during high-temperature ceramic firing processes in kiln chambers, small dimensional deviations conformable with Indian ISI tolerance indices are expected. Neycer reserves the absolute legal right to modify prices and retire technical patterns without advance notices.
        </p>

        <h3 className="text-sm font-bold text-brand-deepblue uppercase mt-2">
          3. Limitation of Liabilities
        </h3>
        <p>
          Under no legal circumstances shall Neycer India Limited or the Spartek Group be held liable for any installation damages, business interruption losses, or indirect freight delays resulting from improper fitting or transit accidents. All installations must be executed by certified plumbing professionals following industry codes.
        </p>

        <h3 className="text-sm font-bold text-brand-deepblue uppercase mt-2">
          4. Governing Law & Dispute Resolution
        </h3>
        <p>
          These terms and your interaction with Neycer official portal channels are governed and interpreted under the law of India. Any litigation, mediation, or legal claims arising from purchase orders, dealer allocations, or website use shall fall strictly under the jurisdiction of courts in <strong>Chennai, Tamil Nadu, India</strong>.
        </p>
      </div>
    </div>
  );
}
