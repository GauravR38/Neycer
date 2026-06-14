export default function PrivacyPolicy() {
  return (
    <div id="privacy-policy-view" className="max-w-4xl mx-auto w-full px-4 py-8 flex flex-col gap-6 bg-white text-xs md:text-sm text-brand-darkgray leading-relaxed">
      <div id="privacy-header" className="border-b border-gray-150 pb-5">
        <h1 id="privacy-main-title" className="text-2xl md:text-3xl font-black text-brand-deepblue tracking-tight">
          Privacy Policy
        </h1>
        <p id="privacy-subtitle" className="text-xs text-brand-lightgray mt-1 font-mono">
          Last Updated: June 12, 2026
        </p>
      </div>

      <div id="privacy-content-blocks" className="flex flex-col gap-5">
        <p>
          At Neycer India Limited (reputed as "Neycer"), we are committed to respecting and protecting your privacy. This statement explains how we gather, process, and protect your information when you interact with our catalog, dealer networks, and digital customer channels.
        </p>

        <h3 className="text-sm font-bold text-brand-deepblue uppercase mt-2">
          1. Information We Collect
        </h3>
        <p>
          When you fill out direct booking estimates, application forms for our Business Associate Program, or request documentation catalog PDFs, we collect standard identifiers such as your Name, Email Address, Contact Number, and Business/Company particulars. 
        </p>

        <h3 className="text-sm font-bold text-brand-deepblue uppercase mt-2">
          2. How We Use Your Data
        </h3>
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>To route catalog requests and direct product estimations to certified retail dealers near your state.</li>
          <li>To process partnership applications under the Neycer Associate Program.</li>
          <li>To distribute promotional campaigns, price lists, or corporate news releases (subject to your consent).</li>
        </ul>

        <h3 className="text-sm font-bold text-brand-deepblue uppercase mt-2">
          3. Security & Safety
        </h3>
        <p>
          Your information is stored securely in systems employing firewalls and technical safeguards. We are strictly committed to never renting, trading, or selling your customer contact logs with external third-party agencies.
        </p>

        <h3 className="text-sm font-bold text-brand-deepblue uppercase mt-2">
          4. Contact Details
        </h3>
        <p>
          For questions regarding data retention, purging, or cookie controls on our official website, write to us at:<br />
          <strong>Neycer India Limited</strong>, 145, St. Mary's Road, Alwarpet, Chennai – 600018, Tamil Nadu. Email: <a href="mailto:sales@neycer.in" className="text-primary hover:underline">sales@neycer.in</a>
        </p>
      </div>
    </div>
  );
}
