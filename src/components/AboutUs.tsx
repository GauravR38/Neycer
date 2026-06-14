import { Award, Target, Landmark, CheckCircle } from 'lucide-react';

export default function AboutUs() {
  const milestones = [
    { year: '1960', title: 'Incorporation', desc: 'Incorporated in May 1960, with licensed capacity to manufacture 1800 MT of Ceramic Sanitarywares in technical collaboration with West Germany.' },
    { year: '1965', title: 'Commercial Operations', desc: 'Commercial production starts in October 1965 from the primary manufacturing estate in Vadalur near Pondicherry.' },
    { year: '1980s', title: 'Industrial Expansion', desc: 'Installed capacity expands systematically from the initial baseline up to an annual ceiling of 9000 MT.' },
    { year: '2000s', title: 'Spartek Consolidation', desc: 'Neycer officially integrates with the Spartek Group, combining sanitary expertise with legendary ceramic floor innovations.' },
    { year: 'Present', title: 'Five Decades of Trust', desc: 'Serving nationwide institutional networks, public utilities and luxury residential projects.' }
  ];

  return (
    <div id="about-us-view" className="max-w-7xl mx-auto w-full px-4 py-8 flex flex-col gap-12 bg-white">
      {/* Editorial Headline */}
      <div id="about-header" className="text-center max-w-3xl mx-auto flex flex-col gap-3">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          Our Heritage Since 1960
        </span>
        <h1 id="about-main-title" className="text-3xl md:text-4.5xl font-extrabold text-brand-deepblue tracking-tight leading-tight">
          Defining Sanitaryware Excellence Since 1960
        </h1>
        <p id="about-intro-p" className="text-sm text-brand-darkgray leading-relaxed font-medium">
          Neycer has spent over five decades blending style, colours, premium designs, and modern ceramic innovations with consistent quality.
        </p>
      </div>

      {/* Corporate Copy Block */}
      <div id="about-corp-details" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-brand-lightblue/20 p-6 md:p-8 rounded-xl border border-brand-lightblue/50">
        <div id="corp-text-left" className="lg:col-span-12 flex flex-col gap-5 text-sm leading-relaxed text-brand-darkgray">
          <p id="con-p1" className="text-[13px] md:text-[14px]">
            Neycer was incorporated in May 1960, with licensed capacity to manufacture 1800 MT of Ceramic Sanitarywares in technical collaboration with M/s. Elemental Baykeramik Vertriebs GmbH (KERAMAG) of West Germany. Our commercial production started from October 1965 onwards. Installed capacity of 1800 MT has since been increased to 9000 MT in various stages. The plant is located at Vadalur, near Pondicherry.
          </p>
          <p id="con-p2" className="text-[13px] md:text-[14px]">
            Neycer is now part of the renowned Spartek Group. Spartek, the pioneers in ceramic floor tiles in India, revolutionized the flooring industry in the mid-80's.
          </p>
          <p id="con-p3" className="text-[13px] md:text-[14px]">
            Neycer is a leading brand in India for more than 5 decades, reputed for its quality and Nationwide Distribution Network. Neycer Sanitarywares has a legacy of blending style, colours, design and innovations with consistently stellar quality to bring you exclusive and exquisite ranges for your living spaces.
          </p>
          <p id="con-p4" className="text-[13px] md:text-[14px]">
            In order to cater to the project segments, models conforming to ISI standards are being produced and supplied to projects of all sizes at national level.
          </p>
          <p id="con-p5" className="text-[13px] md:text-[14px]">
            Neycer also offers a comprehensive range of sanitaryware products including Concealed Tanks, PVC Cisterns, Toilet Seat Covers apart from ceramic Sanitaryware.
          </p>
        </div>
      </div>

      {/* Executive Stat Boxes (3 stats) */}
      <div id="about-stats-row" className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div id="stat-years" className="p-6 bg-white border border-gray-100 rounded-lg hover:shadow-md transition">
          <span className="text-3xl md:text-4xl font-extrabold text-primary block font-mono">
            60+ Years
          </span>
          <span className="text-xs font-bold text-brand-deepblue uppercase tracking-wider mt-2 block">
            Legacy of Distinction
          </span>
          <span className="text-xs text-brand-lightgray mt-1 block leading-normal">
            Manufacturing sanitaryware in technical collaboration with Western Germany since October 1965.
          </span>
        </div>

        <div id="stat-capacity" className="p-6 bg-white border border-gray-100 rounded-lg hover:shadow-md transition">
          <span className="text-3xl md:text-4xl font-extrabold text-primary block font-mono">
            9000 MT
          </span>
          <span className="text-xs font-bold text-brand-deepblue uppercase tracking-wider mt-2 block">
            Annual Plant Capacity
          </span>
          <span className="text-xs text-brand-lightgray mt-1 block leading-normal">
            High performance kiln facilities deployed at Vadalur near Pondicherry to cater to premium sectors.
          </span>
        </div>

        <div id="stat-distribution" className="p-6 bg-white border border-gray-100 rounded-lg hover:shadow-md transition">
          <span className="text-3xl md:text-4xl font-extrabold text-primary block font-mono">
            Nationwide
          </span>
          <span className="text-xs font-bold text-brand-deepblue uppercase tracking-wider mt-2 block">
            Distribution Network
          </span>
          <span className="text-xs text-brand-lightgray mt-1 block leading-normal">
            Comprehensive network of retail dealers, certified builders, and institutional distributors.
          </span>
        </div>
      </div>

      {/* Visual Timeline Panel */}
      <div id="timeline-sec" className="flex flex-col gap-6">
        <div id="timeline-intro" className="text-center">
          <h2 className="text-2xl font-bold text-brand-deepblue">Chronology of Achievements</h2>
          <p className="text-xs text-brand-lightgray mt-1 font-semibold uppercase tracking-wider">
            Tracing our growth milestones since initial incorporation
          </p>
        </div>

        <div id="timeline-milestones" className="relative border-l border-gray-200 ml-4 md:ml-32 py-4 flex flex-col gap-8">
          {milestones.map((item, idx) => (
            <div key={idx} id={`timeline-item-${idx}`} className="relative pl-6 md:pl-8 group">
              {/* Bullet node Indicator */}
              <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white group-hover:scale-125 transition-transform"></div>
              
              <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                {/* Year tag */}
                <div className="md:w-32 flex-shrink-0">
                  <span className="text-lg font-black text-primary font-mono select-none block md:text-right">
                    {item.year}
                  </span>
                </div>
                {/* Text descriptor */}
                <div className="flex-1">
                  <h4 className="text-sm font-extrabold text-brand-deepblue leading-tight uppercase">
                    {item.title}
                  </h4>
                  <p className="text-xs text-brand-darkgray mt-1 leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
