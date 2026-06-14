export default function ShippingReturnPolicy() {
  return (
    <div id="shipping-return-policy-view" className="max-w-4xl mx-auto w-full px-4 py-8 flex flex-col gap-6 bg-white text-xs md:text-sm text-brand-darkgray leading-relaxed">
      <div id="shipping-header" className="border-b border-gray-150 pb-5">
        <h1 id="shipping-main-title" className="text-2xl md:text-3xl font-black text-brand-deepblue tracking-tight">
          Shipping & Return Policy
        </h1>
        <p id="shipping-subtitle" className="text-xs text-brand-lightgray mt-1 font-mono">
          Last Updated: June 12, 2026
        </p>
      </div>

      <div id="shipping-content-blocks" className="flex flex-col gap-5">
        <h3 className="text-sm font-bold text-brand-deepblue uppercase">
          1. Direct Dealer Dispatch & Delivery Channels
        </h3>
        <p>
          Products compiled in the booking cart are passed to verified Neycer authorized showrooms located near your designated billing state. Real delivery times, carriage charges, and freight schedules vary depending on crate weights, distance from factory warehouses in Vadalur near Pondicherry, and local road conditions.
        </p>

        <h3 className="text-sm font-bold text-brand-deepblue uppercase mt-2">
          2. Damages in Transit & Inspection
        </h3>
        <p>
          Clay wares, Vitreous china sanitary closets, wash basins and pedestal components are highly fragile. We recommend inspecting all ceramic items thoroughly immediately upon delivery at the builder site or home. Any hairline cracks, glaze chippings, or dimensional mismatches must be marked immediately on the carrier's Waybill.
        </p>

        <h3 className="text-sm font-bold text-brand-deepblue uppercase mt-2">
          3. Returns & Replacements Policy
        </h3>
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>Defective sanitary pieces showing verified manufacturing flaws are covered under Neycer standard warranties and are eligible for 100% item replacements through your supplying dealer.</li>
          <li>Custom pigmented clay items or custom-ordered pastel closet suites cannot be returned or refunded if ordered incorrectly.</li>
          <li>Returns are subject to a 10% restocking fee unless found to have systemic manufacturing material flaws.</li>
        </ul>

        <h3 className="text-sm font-bold text-brand-deepblue uppercase mt-2">
          4. Refund Settlement Timeframes
        </h3>
        <p>
          Any approved credit adjustments or refunds are processed back within 7 to 10 working days, dispatched directly via the account ledger of the supplying authorized dealer.
        </p>
      </div>
    </div>
  );
}
