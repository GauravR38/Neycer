import { Product, Dealer, Blog } from './types';

export const CATEGORIES = [
  'Single Piece Closets',
  'Wall Hung Closets',
  'Table Top Wash Basins',
  'Wash Basins with Pedestals',
  'Half Pedestals with Wash Basins',
  'Integrated Pedestals',
  'Wall Hung Wash Basins',
  'Over Counter Basins',
  'Under Counter Basins',
  'Kitchen Sinks / Sinks',
  'Traps & Channels',
  'Urinals',
  'Pan / IWC',
  'Floor Mounted EWC'
];

export const PRODUCTS: Product[] = [
  // CATEGORY: SINGLE PIECE CLOSETS
  {
    id: 'spc-alaska',
    name: 'ALASKA',
    code: 'S-1188/1189, P-1190',
    price: '₹14,965',
    dimensions: '670x375x740mm',
    notes: 'S-225/300mm & P-190mm. Available with UF Seat Cover. Rimless, Syphonal flushing.',
    category: 'Single Piece Closets'
  },
  {
    id: 'spc-inox',
    name: 'INOX',
    code: '1128, 1144',
    price: '₹13,730',
    dimensions: '670x370x747mm',
    notes: 'S-225/300mm. 4D Available only in 225mm. Syphonic, Rimless flushing, 4D Technology.',
    category: 'Single Piece Closets'
  },
  {
    id: 'spc-cora',
    name: 'CORA',
    code: '1129',
    price: '₹14,040',
    dimensions: '660x360x740mm',
    notes: 'S-225mm. Syphonic flushing, 5D Technology.',
    category: 'Single Piece Closets'
  },
  {
    id: 'spc-sixer',
    name: 'SIXER',
    code: '1210',
    price: '₹14,150',
    dimensions: '650x360x740mm',
    notes: 'S-225mm. Syphonic, 6D Flush Technology.',
    category: 'Single Piece Closets'
  },
  {
    id: 'spc-chelsea',
    name: 'CHELSEA',
    code: '933',
    price: '₹14,500',
    dimensions: '670x365x750mm',
    notes: 'S-300mm. Rimless, Syphonic flushing.',
    category: 'Single Piece Closets'
  },
  {
    id: 'spc-enzo',
    name: 'ENZO',
    code: '200',
    price: '₹14,040',
    dimensions: '650x360x745mm',
    notes: 'S-225mm. 4D Rimless flushing, Syphonic technology.',
    category: 'Single Piece Closets'
  },
  {
    id: 'spc-cape',
    name: 'CAPE',
    code: '1126/1153',
    price: '₹11,800',
    dimensions: '675x365x725mm',
    notes: 'S-225/300mm. Syphonic flushing.',
    category: 'Single Piece Closets'
  },
  {
    id: 'spc-sage',
    name: 'SAGE',
    code: '1137/1138',
    price: '₹10,200',
    originalPrice: '₹11,500',
    badge: 'Special Offer',
    dimensions: '675x360x710mm',
    notes: 'S-200/300mm. Syphonic flushing.',
    category: 'Single Piece Closets'
  },
  {
    id: 'spc-sage-sleek',
    name: 'SAGE SLEEK',
    code: '1139/1140',
    price: '₹12,100',
    dimensions: '675x360x710mm',
    notes: 'S-200/300mm. Sleek profile with Syphonic flushing.',
    category: 'Single Piece Closets'
  },
  {
    id: 'spc-diamond',
    name: 'DIAMOND',
    code: 'S-1182, P-1183',
    price: '₹9,800',
    originalPrice: '₹10,909',
    badge: 'Special Offer',
    dimensions: '640x360x700mm',
    notes: 'S-225mm & P-180mm. Antibacterial glazed surface. Special Syphonic flush.',
    category: 'Single Piece Closets'
  },
  {
    id: 'spc-cabio',
    name: 'CABIO',
    code: '—',
    price: '₹10,300',
    dimensions: '640x350x710mm',
    notes: 'P-180mm. S: ₹10,300, Syphonic: ₹11,100, S-100/225/300mm: ₹11,800. Very responsive Syphonic wash.',
    category: 'Single Piece Closets'
  },
  {
    id: 'spc-elko',
    name: 'ELKO',
    code: '1006',
    price: '₹10,900',
    dimensions: '605x350x715mm',
    notes: 'S-225mm. Optimized water usage closet design.',
    category: 'Single Piece Closets'
  },
  {
    id: 'spc-juno',
    name: 'JUNO',
    code: 'S-194/P-195',
    price: '₹12,100',
    dimensions: '700x370x690mm',
    notes: 'S-225mm/P-180mm. Sleek design.',
    category: 'Single Piece Closets'
  },
  {
    id: 'spc-cute',
    name: 'CUTE',
    code: '1213',
    price: '₹10,300',
    dimensions: '655x350x745mm',
    notes: 'S-225mm. Elegant compact structure.',
    category: 'Single Piece Closets'
  },
  {
    id: 'spc-cliff',
    name: 'CLIFF',
    code: 'P-1134, S-1012/1141/1123',
    price: '₹13,100',
    dimensions: '645x365x730mm',
    notes: 'S-100/225/300mm P-180mm. High utility premium closet.',
    category: 'Single Piece Closets'
  },
  {
    id: 'spc-valencia',
    name: 'VALENCIA',
    code: 'P-198, S-197',
    price: '₹13,100',
    dimensions: '710x375x740mm',
    notes: 'S-225mm / P-180mm. Stately elegant design.',
    category: 'Single Piece Closets'
  },
  {
    id: 'spc-chase',
    name: 'CHASE',
    code: '952/1143/1122',
    price: '₹11,800',
    dimensions: '715x350x775mm',
    notes: 'S-100/225/300mm. Powerful flush action.',
    category: 'Single Piece Closets'
  },
  {
    id: 'spc-nema',
    name: 'NEMA',
    code: '1211/1213',
    price: '₹11,500',
    dimensions: '640x350x720mm',
    notes: 'S-200/300mm. Tornado flushing system.',
    category: 'Single Piece Closets'
  },

  // CATEGORY: WALL HUNG CLOSETS
  {
    id: 'whc-indigo',
    name: 'INDIGO',
    code: '956',
    price: '₹10,080',
    dimensions: '490x350x350mm',
    notes: 'P-230mm. With Premium Soft Close Seat Cover.',
    category: 'Wall Hung Closets'
  },
  {
    id: 'whc-stan',
    name: 'STAN',
    code: '962',
    price: '₹7,500',
    dimensions: '480x360x335mm',
    notes: 'P-240mm. With Premium Soft Close Seat Cover. Rimless flushing.',
    category: 'Wall Hung Closets'
  },
  {
    id: 'whc-lumina',
    name: 'LUMINA',
    code: '1192',
    price: '₹10,500',
    dimensions: '540x360x370mm',
    notes: 'With Premium Soft Close Seat Cover.',
    category: 'Wall Hung Closets'
  },
  {
    id: 'whc-amaze',
    name: 'AMAZE',
    code: '961',
    price: '₹9,120',
    dimensions: '535x355x350mm',
    notes: 'P-230mm. With Premium Soft Close Seat Cover. Rimless flushing.',
    category: 'Wall Hung Closets'
  },
  {
    id: 'whc-paige',
    name: 'PAIGE',
    code: '960',
    price: '₹7,320',
    dimensions: '505x358x366mm',
    notes: 'P-240mm. With Premium Soft Close Seat Cover.',
    category: 'Wall Hung Closets'
  },
  {
    id: 'whc-cass',
    name: 'CASS',
    code: '959',
    price: '₹6,540',
    dimensions: '495x385x365mm',
    notes: 'P-230mm. With Premium Soft Close Seat Cover.',
    category: 'Wall Hung Closets'
  },
  {
    id: 'whc-chrome',
    name: 'CHROME',
    code: '955',
    price: '₹9,480',
    dimensions: '500x360x330mm',
    notes: 'P-180mm. With Premium Soft Close Seat Cover. Rimless.',
    category: 'Wall Hung Closets'
  },
  {
    id: 'whc-crotia',
    name: 'CROTIA',
    code: '1194',
    price: '₹7,140',
    dimensions: '525x345x340mm',
    notes: 'With Premium Soft Close Seat Cover. Rimless flushing.',
    category: 'Wall Hung Closets'
  },
  {
    id: 'whc-canon',
    name: 'CANON',
    code: '1193',
    price: '₹7,000',
    originalPrice: '₹7,914',
    badge: 'Special Offer',
    dimensions: '505x360x350mm',
    notes: 'With Premium Soft Close Seat Cover. In-built Jet.',
    category: 'Wall Hung Closets'
  },
  {
    id: 'whc-cruze',
    name: 'CRUZE',
    code: '1171',
    price: '₹8,400',
    dimensions: '559x350x350mm',
    notes: 'Soft Close / UF Seat Cover available. Standard seat cover model ₹8,400, UF model is ₹10,300.',
    category: 'Wall Hung Closets'
  },
  {
    id: 'whc-kalina',
    name: 'KALINA',
    code: '1155',
    price: '₹9,100',
    dimensions: '480x345x355mm',
    notes: 'With Premium Soft Close Seat Cover. Rimless design.',
    category: 'Wall Hung Closets'
  },
  {
    id: 'whc-ratt',
    name: 'RATT (Back to Wall / Floor Mounted)',
    code: '1169',
    price: '₹6,720',
    dimensions: '559x350x350mm',
    notes: 'With Premium Soft Close Seat Cover.',
    category: 'Wall Hung Closets'
  },
  {
    id: 'whc-vito',
    name: 'VITO (Extended Wall Hung)',
    code: '979',
    price: '₹13,100',
    dimensions: '650x355x760mm',
    notes: 'P-250mm long profile. Offers unmatched utility & ergonomics.',
    category: 'Wall Hung Closets'
  },

  // CATEGORY: TABLE TOP WASH BASINS
  {
    id: 'ttb-kent',
    name: 'KENT',
    code: '946',
    price: '₹4,500',
    dimensions: '500x435x400mm',
    notes: 'Versatile basin. Also highly suited as a Wall Hung Basin.',
    category: 'Table Top Wash Basins'
  },
  {
    id: 'ttb-kola',
    name: 'KOLA',
    code: '965',
    price: '₹6,420',
    dimensions: '415x415x115mm',
    notes: 'Square basin with rounded interior boundaries.',
    category: 'Table Top Wash Basins'
  },
  {
    id: 'ttb-stan',
    name: 'STAN',
    code: '967',
    price: '₹5,000',
    dimensions: '460x460x130mm',
    notes: 'Generous basin size with clean contemporary design.',
    category: 'Table Top Wash Basins'
  },
  {
    id: 'ttb-orio',
    name: 'ORIO',
    code: '970',
    price: '₹4,850',
    dimensions: '450x450x120mm',
    notes: 'Also commonly used as Wall Hung Basin.',
    category: 'Table Top Wash Basins'
  },
  {
    id: 'ttb-porto',
    name: 'PORTO',
    code: '972',
    price: '₹2,380',
    dimensions: '390x300x160mm',
    notes: 'Comfortable, compact basin. Also used as Wall Hung Basin.',
    category: 'Table Top Wash Basins'
  },
  {
    id: 'ttb-nola',
    name: 'NOLA',
    code: '977',
    price: '₹3,300',
    dimensions: '410x300x150mm',
    notes: 'Sleek tabletop model.',
    category: 'Table Top Wash Basins'
  },
  {
    id: 'ttb-lena',
    name: 'LENA',
    code: '1007',
    price: '₹2,750',
    dimensions: '430x338x112mm',
    notes: 'Durable, smooth premium glaze.',
    category: 'Table Top Wash Basins'
  },
  {
    id: 'ttb-isla',
    name: 'ISLA',
    code: '976',
    price: '₹4,100',
    dimensions: '425x425x125mm',
    notes: 'Perfect circular/square visual balance.',
    category: 'Table Top Wash Basins'
  },
  {
    id: 'ttb-olive',
    name: 'OLIVE',
    code: '971',
    price: '₹3,750',
    dimensions: '450x345x120mm',
    notes: 'Multi-use basin. Also used as Wall Hung.',
    category: 'Table Top Wash Basins'
  },
  {
    id: 'ttb-alex',
    name: 'ALEX',
    code: '1199',
    price: '₹3,000',
    dimensions: '355x355x120mm',
    notes: 'Compact circular design.',
    category: 'Table Top Wash Basins'
  },
  {
    id: 'ttb-passion',
    name: 'PASSION',
    code: '1165',
    price: '₹6,250',
    dimensions: '510x380x150mm',
    notes: 'Exquisite modern curves and deep bowl container.',
    category: 'Table Top Wash Basins'
  },
  {
    id: 'ttb-lucas',
    name: 'LUCAS',
    code: '1200',
    price: '₹3,000',
    dimensions: '360x360x120mm',
    notes: 'Minimalistic tabletop bowl size, also used as Wall Hung.',
    category: 'Table Top Wash Basins'
  },
  {
    id: 'ttb-gem',
    name: 'GEM',
    code: '1198',
    price: '₹3,000',
    dimensions: '415x415x150mm',
    notes: 'Gleaming, heavy duty construction.',
    category: 'Table Top Wash Basins'
  },
  {
    id: 'ttb-juhu',
    name: 'JUHU',
    code: '1166',
    price: '₹4,800',
    dimensions: '540x310x150mm',
    notes: 'Asymmetrical elongated visual style.',
    category: 'Table Top Wash Basins'
  },
  {
    id: 'ttb-dove',
    name: 'DOVE',
    code: '1164',
    price: '₹4,800',
    dimensions: '380x380x150mm',
    notes: 'Gentle curvature evoking organic shapes.',
    category: 'Table Top Wash Basins'
  },
  {
    id: 'ttb-beauty-white',
    name: 'BEAUTY PARLOUR BASIN (White)',
    code: '1201',
    price: '₹4,095',
    dimensions: '560x498x300mm',
    notes: 'Specifically designed for beauty salon / grooming stations.',
    category: 'Table Top Wash Basins'
  },
  {
    id: 'ttb-beauty-black',
    name: 'BEAUTY PARLOUR BASIN (Black)',
    code: '1202',
    price: '₹5,150',
    dimensions: '560x498x300mm',
    notes: 'Elegant deep rich black glaze. Specifically designed for salon utilities.',
    category: 'Table Top Wash Basins'
  },

  // CATEGORY: WASH BASINS WITH PEDESTALS
  {
    id: 'wbp-harmony',
    name: 'HARMONY',
    code: '365 + 1113',
    price: '₹3,500',
    originalPrice: '₹4,020',
    badge: 'Special Offer',
    dimensions: 'WB: 590x415x220mm, Pedestal: 645x210x180mm',
    notes: 'Set Price: ₹4,020 (Offer: ₹3,500). Wash Basin Code: 365 (₹2,100), Pedestal Code: 1113 (₹1,920). Elegant curves.',
    category: 'Wash Basins with Pedestals',
    wbCode: '365',
    pedestalCode: '1113',
    wbPrice: '₹2,100',
    pedestalPrice: '₹1,920'
  },
  {
    id: 'wbp-alto',
    name: 'ALTO',
    code: '981 + 1113',
    price: '₹5,050',
    dimensions: 'WB: 615x455x175mm, Pedestal: 160x175x680mm',
    notes: 'Set Price: ₹5,050. Wash Basin Code: 981 (₹3,130), Pedestal Code: 1113 (₹1,920). Long-lasting robust design.',
    category: 'Wash Basins with Pedestals',
    wbCode: '981',
    pedestalCode: '1113',
    wbPrice: '₹3,130',
    pedestalPrice: '₹1,920'
  },
  {
    id: 'wbp-nile-white',
    name: 'NILE (White)',
    code: '309 + 355',
    price: '₹4,095',
    dimensions: 'WB: 550x420x215mm, Pedestal: 645x210x180mm',
    notes: 'Set Price: ₹4,095. Wash Basin Code: 309 (₹2,175), Pedestal Code: 355 (₹1,920). Premium white glazed finish.',
    category: 'Wash Basins with Pedestals',
    wbCode: '309',
    pedestalCode: '355',
    wbPrice: '₹2,175',
    pedestalPrice: '₹1,920'
  },
  {
    id: 'wbp-nile-colour',
    name: 'NILE (Colour)',
    code: '309 + 355',
    price: '₹5,825',
    dimensions: 'WB: 550x420x215mm, Pedestal: 645x210x180mm',
    notes: 'Set Price: ₹5,825. Wash Basin Code: 309 (₹3,000), Pedestal Code: 355 (₹2,825). Multi-tonal glazed options available on request.',
    category: 'Wash Basins with Pedestals',
    wbCode: '309',
    pedestalCode: '355',
    wbPrice: '₹3,000',
    pedestalPrice: '₹2,825'
  },
  {
    id: 'wbp-glamour-sw',
    name: 'GLAMOUR (SW)',
    code: '160 + 355',
    price: '₹3,720',
    dimensions: 'WB: 500x400x200mm, Pedestal: 645x210x180mm',
    notes: 'Set Price: ₹3,720. Wash Basin Code: 160 (₹1,800), Pedestal Code: 355 (₹1,920). Snow White finish.',
    category: 'Wash Basins with Pedestals',
    wbCode: '160',
    pedestalCode: '355',
    wbPrice: '₹1,800',
    pedestalPrice: '₹1,920'
  },
  {
    id: 'wbp-glamour-colour',
    name: 'GLAMOUR (Colour)',
    code: '160 + 355',
    price: '₹5,040',
    dimensions: 'WB: 500x400x200mm, Pedestal: 645x210x180mm',
    notes: 'Set Price: ₹5,040 (approx). Wash Basin Code: 160 (₹3,120), Pedestal Code: 355 (₹1,920). Resilient dual shade potential.',
    category: 'Wash Basins with Pedestals',
    wbCode: '160',
    pedestalCode: '355',
    wbPrice: '₹3,120',
    pedestalPrice: '₹1,920'
  },
  {
    id: 'wbp-lisbon',
    name: 'LISBON',
    code: '944 + 1114',
    price: '₹4,720',
    dimensions: 'WB: 560x420x185mm, Pedestal: 152x190x710mm',
    notes: 'Set Price: ₹4,720. Wash Basin Code: 944 (₹2,520), Pedestal Code: 1114 (₹2,200). Solid upright stability.',
    category: 'Wash Basins with Pedestals',
    wbCode: '944',
    pedestalCode: '1114',
    wbPrice: '₹2,520',
    pedestalPrice: '₹2,200'
  },

  // CATEGORY: HALF PEDESTALS WITH WASH BASINS
  {
    id: 'hpb-lisbon',
    name: 'LISBON',
    code: '982 + 1117',
    price: '₹3,200',
    dimensions: 'WB: 560x420x185mm, Pedestal+WB: 270x220x335mm',
    notes: 'Set Price: ₹3,200. Wash Basin: ₹1,900, Half Pedestal: ₹1,300. Ideal for semi-lofted space.',
    category: 'Half Pedestals with Wash Basins',
    wbCode: '982',
    pedestalCode: '1117',
    wbPrice: '₹1,900',
    pedestalPrice: '₹1,300'
  },
  {
    id: 'hpb-zen',
    name: 'ZEN',
    code: '1161 + 1162',
    price: '₹2,480',
    dimensions: 'WB: 410x360x140mm, Pedestal+WB: 410x360x410mm',
    notes: 'Set Price: ₹2,480. Wash Basin: ₹1,170, Pedestal Set: ₹1,310. Perfectly minimalist look.',
    category: 'Half Pedestals with Wash Basins',
    wbCode: '1161',
    pedestalCode: '1162',
    wbPrice: '₹1,170',
    pedestalPrice: '₹1,310'
  },
  {
    id: 'hpb-canton',
    name: 'CANTON',
    code: '986 + 1116',
    price: '₹4,125',
    dimensions: 'WB: 545x430x215mm, Pedestal+WB: 260x220x340mm',
    notes: 'Set Price: ₹4,125. Wash Basin: ₹2,450, Pedestal Code: 1116 (₹1,675). Angular professional profile.',
    category: 'Half Pedestals with Wash Basins',
    wbCode: '986',
    pedestalCode: '1116',
    wbPrice: '₹2,450',
    pedestalPrice: '₹1,675'
  },
  {
    id: 'hpb-lyme',
    name: 'LYME',
    code: '985 + 1115',
    price: '₹4,375',
    dimensions: 'WB: 575x460x205mm, Pedestal+WB: 260x220x340mm',
    notes: 'Set Price: ₹4,375. Wash Basin: ₹2,700, Pedestal Code: 1115 (₹1,675). Rounded ergonomics design.',
    category: 'Half Pedestals with Wash Basins',
    wbCode: '985',
    pedestalCode: '1115',
    wbPrice: '₹2,700',
    pedestalPrice: '₹1,675'
  },
  {
    id: 'hpb-kent',
    name: 'KENT',
    code: '946 + 947',
    price: '₹6,250',
    dimensions: 'WB: 500x435x400mm, Pedestal+WB: 280x180x290mm',
    notes: 'Set Price: ₹6,250. Wash Basin: ₹3,600, Pedestal: ₹2,650. Heavy wall mounted set.',
    category: 'Half Pedestals with Wash Basins',
    wbCode: '946',
    pedestalCode: '947',
    wbPrice: '₹3,600',
    pedestalPrice: '₹2,650'
  },
  {
    id: 'hpb-olive',
    name: 'OLIVE',
    code: '971 + 1180',
    price: '₹4,935',
    dimensions: 'WB: 450x350x120mm, Pedestal+WB: 450x350x400mm',
    notes: 'Set Price: ₹4,935. Wash Basin: ₹2,990, Pedestal: ₹1,945. Modern shallow oval build.',
    category: 'Half Pedestals with Wash Basins',
    wbCode: '971',
    pedestalCode: '1180',
    wbPrice: '₹2,990',
    pedestalPrice: '₹1,945'
  },
  {
    id: 'hpb-milton',
    name: 'MILTON',
    code: '987 + 1118',
    price: '₹3,200',
    dimensions: 'WB: 445x365x165mm, Pedestal+WB: 230x220x310mm',
    notes: 'Set Price: ₹3,200. Wash Basin: ₹1,900, Pedestal: ₹1,300. Cozy space saver unit.',
    category: 'Half Pedestals with Wash Basins',
    wbCode: '987',
    pedestalCode: '1118',
    wbPrice: '₹1,900',
    pedestalPrice: '₹1,300'
  },

  // CATEGORY: INTEGRATED PEDESTALS
  {
    id: 'ip-berlin',
    name: 'BERLIN',
    code: '1131',
    price: '₹5,310',
    dimensions: '480x430x323mm',
    notes: 'Monobloc style integrated wall projection.',
    category: 'Integrated Pedestals'
  },
  {
    id: 'ip-cube',
    name: 'CUBE',
    code: '1132',
    price: '₹5,300',
    dimensions: '465x407x330mm',
    notes: 'Strict cubical geometry design for modern layouts.',
    category: 'Integrated Pedestals'
  },
  {
    id: 'ip-glen',
    name: 'GLEN',
    code: '1008',
    price: '₹8,100',
    dimensions: '555x470x395mm',
    notes: 'Grand design with extra deep basin container.',
    category: 'Integrated Pedestals'
  },
  {
    id: 'ip-roman',
    name: 'ROMAN',
    code: '1196',
    price: '₹4,550',
    dimensions: '380x370x250mm',
    notes: 'Classic curved lines with easy maintenance profiles.',
    category: 'Integrated Pedestals'
  },
  {
    id: 'ip-proton',
    name: 'PROTON',
    code: '1197',
    price: '₹5,000',
    dimensions: '400x385x280mm',
    notes: 'Fluid transitions, fully sanitizable design structure.',
    category: 'Integrated Pedestals'
  },

  // CATEGORY: WALL HUNG WASH BASINS
  {
    id: 'whb-june',
    name: 'JUNE',
    code: '993',
    price: '₹7,350',
    dimensions: '420x420x180mm',
    notes: 'Very versatile. Also looks beautiful as Table Top Basin.',
    category: 'Wall Hung Wash Basins'
  },
  {
    id: 'whb-tony',
    name: 'TONY',
    code: '1212',
    price: '₹1,950',
    originalPrice: '₹2,300',
    badge: 'Special Offer',
    dimensions: '310x310x150mm',
    notes: 'Compact wall model. Also works as premium tabletop bowl.',
    category: 'Wall Hung Wash Basins'
  },
  {
    id: 'whb-marine',
    name: 'MARINE',
    code: '1163',
    price: '₹1,720',
    dimensions: '460x310x140mm',
    notes: 'Compact rectangular space saver.',
    category: 'Wall Hung Wash Basins'
  },
  {
    id: 'whb-symphony',
    name: 'SYMPHONY NICE',
    code: '997',
    price: '₹1,900',
    dimensions: '520x425x170mm',
    notes: 'Smooth, graceful oval depression with built-in spillway.',
    category: 'Wall Hung Wash Basins'
  },
  {
    id: 'whb-kent',
    name: 'KENT',
    code: '946',
    price: '₹4,860',
    dimensions: '500x435x400mm',
    notes: 'Heavy weight robust wall basin. Multi-functional.',
    category: 'Wall Hung Wash Basins'
  },
  {
    id: 'whb-corner-sw',
    name: 'CORNER (SW)',
    code: '159',
    price: '₹1,350',
    dimensions: '405x415x210mm',
    notes: 'Snow White finish. Designed specifically for tight corners.',
    category: 'Wall Hung Wash Basins'
  },
  {
    id: 'whb-corner-col',
    name: 'CORNER (Colour)',
    code: '159',
    price: '₹1,860',
    dimensions: '405x415x210mm',
    notes: 'Colored option to blend flawlessly with bathroom tiles.',
    category: 'Wall Hung Wash Basins'
  },
  {
    id: 'whb-indus-sw',
    name: 'INDUS (SW)',
    code: '301',
    price: '₹1,200',
    dimensions: '460x310x225mm',
    notes: 'Snow White traditional space saver.',
    category: 'Wall Hung Wash Basins'
  },
  {
    id: 'whb-indus-col',
    name: 'INDUS (Colour)',
    code: '301',
    price: '₹1,690',
    dimensions: '460x310x225mm',
    notes: 'Artistic colors for modular public rest bays.',
    category: 'Wall Hung Wash Basins'
  },
  {
    id: 'whb-santo',
    name: 'SANTO',
    code: '1121',
    price: '₹1,290',
    dimensions: '450x365x170mm',
    notes: 'Sleek rounded half loop design.',
    category: 'Wall Hung Wash Basins'
  },
  {
    id: 'whb-delta-sw',
    name: 'DELTA (SW)',
    code: '303',
    price: '₹930',
    dimensions: '460x230x150mm',
    notes: 'Ultra slim depth profiles for utility closets.',
    category: 'Wall Hung Wash Basins'
  },
  {
    id: 'whb-delta-col',
    name: 'DELTA (Colour)',
    code: '303',
    price: '₹1,240',
    dimensions: '460x230x150mm',
    notes: 'Compact design available in multiple custom colors.',
    category: 'Wall Hung Wash Basins'
  },
  {
    id: 'whb-sasha-sw',
    name: 'SASHA (SW)',
    code: '158',
    price: '₹1,470',
    dimensions: '455x330x195mm',
    notes: 'Comfortable hand washed depth. Snow White glaze.',
    category: 'Wall Hung Wash Basins'
  },
  {
    id: 'whb-sasha-col',
    name: 'SASHA (Colour)',
    code: '158',
    price: '₹2,270',
    dimensions: '455x330x195mm',
    notes: 'Specially color pigmented and scratch proofed.',
    category: 'Wall Hung Wash Basins'
  },
  {
    id: 'whb-excel-sw',
    name: 'EXCEL (SW)',
    code: '176',
    price: '₹990',
    dimensions: '360x300x180mm',
    notes: 'Economic, highly reliable sanitary basin.',
    category: 'Wall Hung Wash Basins'
  },
  {
    id: 'whb-excel-col',
    name: 'EXCEL (Colour)',
    code: '176',
    price: '₹1,540',
    dimensions: '360x300x180mm',
    notes: 'Color variations suitable for creative interior themes.',
    category: 'Wall Hung Wash Basins'
  },
  {
    id: 'whb-ocean-sw',
    name: 'OCEAN (SW)',
    code: '382',
    price: '₹1,600',
    dimensions: '490x360x180mm',
    notes: 'Mid-sized elegant ocean wave profiles.',
    category: 'Wall Hung Wash Basins'
  },
  {
    id: 'whb-ocean-col',
    name: 'OCEAN (Colour)',
    code: '382',
    price: '₹2,280',
    dimensions: '490x360x180mm',
    notes: 'Premium colored ocean-grade glaze.',
    category: 'Wall Hung Wash Basins'
  },
  {
    id: 'whb-glamour-sw',
    name: 'GLAMOUR (SW)',
    code: '160',
    price: '₹1,720',
    dimensions: '500x400x200mm',
    notes: 'Classic flat rear wall attachment. Snow White.',
    category: 'Wall Hung Wash Basins'
  },
  {
    id: 'whb-glamour-col',
    name: 'GLAMOUR (Colour)',
    code: '160',
    price: '₹2,970',
    dimensions: '500x400x200mm',
    notes: 'Vibrant color tones for modern interior decors.',
    category: 'Wall Hung Wash Basins'
  },

  // CATEGORY: OVER COUNTER BASINS
  {
    id: 'ocb-sheraton',
    name: 'SHERATON',
    code: '329',
    price: '₹2,500',
    dimensions: '580x450x210mm',
    notes: 'Premium commercial grade, beautifully integrated with counter.',
    category: 'Over Counter Basins'
  },
  {
    id: 'ocb-rhine',
    name: 'RHINE',
    code: '324',
    price: '₹2,500',
    dimensions: '490x190mm',
    notes: 'Perfect circular overflow design.',
    category: 'Over Counter Basins'
  },
  {
    id: 'ocb-terra-sw',
    name: 'TERRA (SW)',
    code: '367',
    price: '₹2,770',
    dimensions: '590x450x190mm',
    notes: 'Snow White counter-top basin with soft visual aesthetics.',
    category: 'Over Counter Basins'
  },
  {
    id: 'ocb-terra-col',
    name: 'TERRA (Colour)',
    code: '367',
    price: '₹4,020',
    dimensions: '590x450x190mm',
    notes: 'Stunning premium color options.',
    category: 'Over Counter Basins'
  },

  // CATEGORY: UNDER COUNTER BASINS
  {
    id: 'ucb-opal',
    name: 'OPAL',
    code: '1000',
    price: '₹2,800',
    badge: 'Dealer Discount',
    dimensions: '545x405x200mm / Oval 555x388',
    notes: 'Perfect fit under composite counters. Features a high glaze easy clean rim.',
    category: 'Under Counter Basins'
  },
  {
    id: 'ucb-opal-mini',
    name: 'OPAL MINI',
    code: '1002',
    price: '₹1,705',
    dimensions: '450x325x175mm / Oval 450x325',
    notes: 'Compact model designed for tight counter depths.',
    category: 'Under Counter Basins'
  },

  // CATEGORY: KITCHEN SINKS / SINKS
  {
    id: 'sink-lab',
    name: 'LAB SINK',
    code: '405',
    price: '₹2,500',
    dimensions: '500x350x150mm',
    notes: 'Acid and chemical resistant ceramic structure. Heavily used in clinics/schools.',
    category: 'Kitchen Sinks / Sinks'
  },
  {
    id: 'sink-kitchen',
    name: 'KITCHEN SINK (Vitreous)',
    code: '402',
    price: '₹5,850',
    dimensions: '600x450x250mm',
    notes: 'Vitreous china construction, heavy-duty build preventing bacterial lodgments.',
    category: 'Kitchen Sinks / Sinks'
  },

  // CATEGORY: TRAPS & CHANNELS
  {
    id: 'tc-onefoot',
    name: 'ONE FOOT CHANNEL',
    code: '520',
    price: '₹525',
    dimensions: '300x150x85mm',
    notes: 'Used widely in public showers or industrial wash basins drainage.',
    category: 'Traps & Channels'
  },
  {
    id: 'tc-ptrap',
    name: 'P TRAP',
    code: '118',
    price: '₹360',
    dimensions: '310x130x150mm',
    notes: 'Highly resistant vitreous clay construct for sewer odor block.',
    category: 'Traps & Channels'
  },
  {
    id: 'tc-strap',
    name: 'S TRAP',
    code: '120',
    price: '₹470',
    dimensions: '410x190x150mm',
    notes: 'Optimized vertical discharge pipe fit.',
    category: 'Traps & Channels'
  },

  // CATEGORY: URINALS
  {
    id: 'uri-happer',
    name: 'HAPPER',
    code: '1009',
    price: '₹3,540',
    dimensions: '440x300x520mm',
    notes: 'Integrated design with high performance flushing capabilities.',
    category: 'Urinals'
  },
  {
    id: 'uri-divplate',
    name: 'DIVISION PLATE',
    code: '508',
    price: '₹3,500',
    dimensions: '700x325x85mm',
    notes: 'High privacy partition pane in vitreous sanitary finish.',
    category: 'Urinals'
  },
  {
    id: 'uri-halfstall',
    name: 'HALF STALL',
    code: '948',
    price: '₹5,040',
    dimensions: '330x370x620mm',
    notes: 'Stately structure with optimized rear projection.',
    category: 'Urinals'
  },
  {
    id: 'uri-squatting',
    name: 'URINAL SQUATING',
    code: '505',
    price: '₹2,550',
    dimensions: '450x325x100mm',
    notes: 'Traditional floor mount squat commercial urinal.',
    category: 'Urinals'
  },
  {
    id: 'uri-flatback',
    name: 'FLAT BACK SW',
    code: '501',
    price: '₹2,460',
    dimensions: '440x360x270mm',
    notes: 'Classic flat back wall hanger with targeted rinse holes.',
    category: 'Urinals'
  },

  // CATEGORY: PAN / IWC
  {
    id: 'pan-orissa',
    name: 'ORISSA PAN',
    code: '108',
    price: '₹2,585',
    dimensions: '585x440x280mm',
    notes: 'Heavy weight robust classic Orissa style squatting pan. Conforms to ISI standards.',
    category: 'Pan / IWC'
  },
  {
    id: 'pan-asian',
    name: 'ASIAN PAN',
    code: '130',
    price: '₹2,090',
    swPrice: '₹2,090',
    colourPrice: '₹3,245',
    dimensions: '520x410x165mm',
    notes: 'Compact, sturdy construct. SW: ₹2,090, Color glaze: ₹3,245.',
    category: 'Pan / IWC'
  },
  {
    id: 'pan-thrift',
    name: 'THRIFT PAN',
    code: '107',
    price: '₹2,090',
    swPrice: '₹2,090',
    colourPrice: '₹3,245',
    dimensions: '530x450x295mm',
    notes: 'Highly economical pan with specialized anti slip footpads. SW: ₹2,090, Color glaze: ₹3,245.',
    category: 'Pan / IWC'
  },
  {
    id: 'pan-ultra',
    name: '23" ULTRA PAN',
    code: '1152',
    price: '₹2,100',
    dimensions: '575x465x300mm',
    notes: 'Premium 23 inch heavy duty pan.',
    category: 'Pan / IWC'
  },
  {
    id: 'pan-aqua',
    name: 'AQUA PAN',
    code: '1179',
    price: '₹1,310',
    dimensions: '535x445x260mm',
    notes: 'Shallow pan with high dynamic pressure cleaning shape.',
    category: 'Pan / IWC'
  },

  // CATEGORY: FLOOR MOUNTED EWC
  {
    id: 'ewc-perry',
    name: 'EWC PERRY',
    code: '1150/1195',
    price: '₹3,800', // Offer price
    originalPrice: '₹4,250',
    badge: 'Special Offer',
    dimensions: '550x360x400mm', // standard size similar to Prima
    notes: 'Combo Full Set Price: was ₹4,250 (now ₹3,800 for offer). Component prices: EWC S-Trap/P-Trap (₹1,890) | PVC Tank (₹1,450) | Seat Cover (₹730) | Combo S/P Set (₹3,930 normally).',
    category: 'Floor Mounted EWC'
  },
  {
    id: 'ewc-square',
    name: 'EWC SQUARE WITH SEAT COVER',
    code: '1151',
    price: '₹5,050',
    dimensions: '515x342x405mm',
    notes: 'Complete Set: ₹5,050. Components: EWC S + Seat Cover (₹3,600) | PVC Tank (₹1,450). Striking square geometry.',
    category: 'Floor Mounted EWC'
  },
  {
    id: 'ewc-prima',
    name: 'PRIMA',
    code: '206/208',
    price: '₹3,800',
    originalPrice: '₹4,250',
    badge: 'Special Offer',
    dimensions: '550x360x400mm',
    notes: 'Combo Full Set P/S: was ₹4,250 (now ₹3,800 for offer). Component prices: EWC P-180 / EWC S-210 (₹2,190) | PVC Tank (₹1,450) | Seat Cover (₹730) | Combo Full Set S/P (₹4,250 normally).',
    category: 'Floor Mounted EWC'
  },
  {
    id: 'ewc-universal',
    name: 'UNIVERSAL',
    code: '224/226',
    price: '₹6,570',
    badge: 'Dealer Discount',
    dimensions: '580x480x395mm',
    notes: 'Set Price SW: ₹6,570. Colour options set: ₹5,600–₹8,290. Components: EWC P-180 / EWC S-290 (₹4,250) | PVC Tank (₹1,450) | Seat Cover (₹870). Perfect ergonomics.',
    category: 'Floor Mounted EWC'
  },
  {
    id: 'ewc-torrent',
    name: 'TORRENT',
    code: '175',
    price: '₹4,980',
    dimensions: '570x350x390mm',
    notes: 'Complete Set: ₹4,980. Components: EWC S-220 (₹2,800) | PVC Tank (₹1,450) | Seat Cover (₹730).',
    category: 'Floor Mounted EWC'
  }
];

export const CLIENTS = [
  { name: 'Andhra Pradesh State Housing Corporation (APSHC)', type: 'Government/PSU' },
  { name: 'Chaitanya Foundations', type: 'Property Developer' },
  { name: 'Satyamev Jayate (Govt of India)', type: 'Government' },
  { name: 'Central Public Works Department (CPWD)', type: 'Government/PSU' },
  { name: 'Indian Railways', type: 'Government/PSU' },
  { name: 'KMV Projects Ltd.', type: 'Contractor/Developer' },
  { name: 'KPC Projects', type: 'Contractor/Developer' },
  { name: 'Military Engineer Services (MES)', type: 'Government/Defense' },
  { name: 'Oberoi Hotels & Resorts', type: 'International Hotel Chain' },
  { name: 'Pradhan Mantri Awas Yojana – Gramin (PMAY-G)', type: 'Government Scheme' },
  { name: 'Pride Hotels & Resorts', type: 'Hotel Chain' },
  { name: 'Public Works Department (PWD) Tamil Nadu', type: 'Government/PSU' },
  { name: 'S&A Overseas', type: 'International Partner' },
  { name: 'SBD Housing / Construction', type: 'Developer' },
  { name: 'Starworth Infrastructure & Construction Ltd.', type: 'Developer/Contractor' },
  { name: 'Government of Telangana', type: 'Government' },
  { name: 'Tamil Nadu Housing Board (TNHB)', type: 'Government/PSU' },
  { name: 'HNP', type: 'PSU/Partner' },
  { name: 'TPSODL', type: 'Utility/Power' },
  { name: 'Trident Hotels', type: 'International Hotel Chain' },
  { name: 'IIT Madras', type: 'Premier Educational Institution' },
  { name: 'Life Insurance Corporation of India (LIC)', type: 'PSU' },
  { name: 'GKC Projects Limited', type: 'Developer' },
  { name: 'The Oberoi Mumbai', type: 'International Hotel Chain' },
  { name: 'BNR Hotels', type: 'Hotel Chain' },
  { name: 'The Taj Mahal Palace Mumbai', type: 'International Hotel Chain' },
  { name: 'ITC Limited', type: 'Premium conglomerate/Hotels' },
  { name: 'Vijay Nirman Company Pvt. Ltd.', type: 'Contractor/Developer' },
  { name: 'NLC India Limited (Neyveli Lignite Corporation)', type: 'PSU' }
];

export const BLOGS: Blog[] = [
  {
    id: 'kids-bathtime-oasis',
    title: 'A Bright Bathtime Oasis for Kids',
    summary: "A savvy mom helps perfect a spot that's comfortable, safe, and just plain fun. Former preschool teacher Nadia Blair knew exactly what to put where.",
    content: `A savvy mom helps perfect a spot that's comfortable, safe, and just plain fun. Former preschool teacher Nadia Blair knew exactly what to put where — and why — when she and her husband Aaron added a bath for their boys to their Austin, Texas, house. She put a premium on safety, choosing a low tub, sink faucets that help prevent scalding, tub-shower controls out of kids' reach, and textured floor tile. Working with CG&S Design-Build during a whole-house redo, she lobbied for extra space alongside the tub to ease the bathtime routine. As for finishes, "I wanted the bath to transition with the kids, to be fun and cheerful but not childish."`,
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600'
  },
  {
    id: 'designing-dream-bathroom',
    title: 'Designing Your Dream Bathroom',
    summary: 'A step-by-step master guide detailing how to correctly map dimensions, select elegant toilets, choice table-top basins, and maintain perfect ventilation.',
    content: `Designing your dream bathroom begins with understanding ergonomics and structural spacing. A perfect layout respects the clearance zones around your single piece closets (usually requiring at least 15-18 inches from the center line to any wall or obstacle) and table top basins. In this guide, we consult senior architects to discuss standard bathroom schematics, aesthetic matching with Snow White (SW) glazes, and modern layout design principles.`,
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600'
  },
  {
    id: 'sustainability-sanitaryware',
    title: 'Sustainability in Sanitaryware',
    summary: 'How Neycer engineering helps conserve water daily with our advanced Rimless, Tornado, and 6D flushing mechanisms.',
    content: `In an era of rising ecological concerns, conserving water is vital. Neycer has spent decades innovating flushing systems like our 4D, 5D, and 6D Syphonic and Tornado flushing mechanisms. By carefully modeling internal dual flushing traps, Neycer closets can cleanse completely using 3/4.5 liters of water instead of the legacy 9-liter systems, making a massive reduction in utility costs and community resource depletion.`,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600'
  },
  {
    id: 'art-modern-washroom',
    title: 'The Art of the Modern Washroom',
    summary: 'A look into how minimalistic integrated pedestal designs and wall hung units create spacious environments even in compact floorplans.',
    content: `Modern urban living demands space efficiency. Traditional floor fixtures block footpaths and limit visual clarity. Integrating wall-hung wash basins and concealed cistern systems elevate the floor clearance, creating an immediate psychological sense of cleanliness and spaciousness. Learn from leading interior designers how minimalist lines represent the future of hospitality and corporate washroom projects.`,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600'
  }
];

export const DEALERS: Dealer[] = [
  // Andhra Pradesh
  {
    name: 'M/S. Sikhakolli Brothers',
    address: '#27-6-12, Prakasam Road, Sri Hari Complex, Governor Pet, Vijayawada, AP 520002',
    phone: '8666657005',
    city: 'Vijayawada',
    state: 'Andhra Pradesh'
  },
  // Telangana
  {
    name: 'M/S. Jai Hanuman Agencies',
    address: '16-9-287, Kalyan Nagar, Godavarikhani, Ramagundam, Telangana 505209',
    phone: '9989497825',
    city: 'Ramagundam',
    state: 'Telangana'
  },
  {
    name: 'M/S. Rajeev Sanitary Mart',
    address: '4-1-555/6, Troop Bazar, Abids, Hyderabad, Telangana 500001',
    phone: '9849012358',
    city: 'Hyderabad',
    state: 'Telangana'
  },
  {
    name: 'M/S. RAO SANITARY STORES',
    address: 'H.no: 6-1-44, Lashkar Bazar, Hanamkonda, Warangal - 506001, Beside Indian Bank',
    phone: '9866574887',
    city: 'Warangal',
    state: 'Telangana'
  },
  {
    name: 'M/S. SRI LAXMI SANITATION',
    address: '4-5-6&7, Lala Temple St, Pan Bazar, Secunderabad, Telangana 500003',
    phone: '040 6632 2430',
    city: 'Secunderabad',
    state: 'Telangana'
  },
  {
    name: 'M/S. Sri Balaji Engineering & Sanitary Corporation',
    address: '8-10-34, Central Bank Of India Down, JP Narayan Road, Sherpura, Warangal, Telangana 506002',
    phone: '093967 00258',
    city: 'Warangal',
    state: 'Telangana'
  },
  // Tamil Nadu
  {
    name: 'M/S. ROYAL SANITARY STORES',
    address: '156/254 Thambu Chetty Street, Broadway Rd, Parrys, Chennai, TN 600001',
    phone: '9790775791',
    city: 'Chennai',
    state: 'Tamil Nadu'
  },
  {
    name: 'M/S. ALLIANCE TOOLS & HARDWARE CORPORATION',
    address: '927 B, Avinashi Rd, Below Flyover, Gopalapuram, Coimbatore, TN 641018',
    phone: '098430 21605',
    city: 'Coimbatore',
    state: 'Tamil Nadu'
  },
  {
    name: 'M/S. Anbu Traders',
    address: 'No 78/96c, Virudhachalam - Cuddalore Rd, Virudhachalam, TN 606001',
    phone: '8754261247',
    city: 'Virudhachalam',
    state: 'Tamil Nadu'
  },
  {
    name: 'M/S. GANGA HOME DECOR',
    address: 'Easai Towers, Salem - Ulundurpettai Hwy, Bye Pass, Kallakkurichi, TN 606202',
    phone: '04151 291 516',
    city: 'Kallakkurichi',
    state: 'Tamil Nadu'
  },
  {
    name: 'M/S. KALIMA ELECTRICALS',
    address: 'Parangipettai, Tamil Nadu 608502',
    phone: '9003720355',
    city: 'Parangipettai',
    state: 'Tamil Nadu'
  },
  // Puducherry
  {
    name: 'M/S. Harish Agency',
    address: '270, Ranga Pillai St, MG Road Area, Puducherry 605001',
    phone: '0413 420 0774',
    city: 'Puducherry',
    state: 'Puducherry'
  },
  {
    name: 'M/S. M. Sokkalingam Enterprises',
    address: 'No.7, Pettayanchathiram, Kamaraj Salai, Thattanchavady, Puducherry 605009',
    phone: '0413 227 2681',
    city: 'Puducherry',
    state: 'Puducherry'
  },
  {
    name: 'M/S. Eswari Agencies',
    address: 'NH 45A, Moogambigai Nagar, Thirubhuvanai, Puducherry 605107',
    phone: '097872 52125',
    city: 'Puducherry',
    state: 'Puducherry'
  },
  {
    name: 'M/S. J S STEEL',
    address: 'No-23, Pondy-Cuddalore Main Road, Mullodai, Pondicherry',
    phone: '9843161176',
    city: 'Puducherry',
    state: 'Puducherry'
  },
  {
    name: 'M/S. SRI ABHIRAMI TILES',
    address: 'Ozhandai Keerapalaiyam, Mudaliarpet, Puducherry 605004',
    phone: '944334580',
    city: 'Puducherry',
    state: 'Puducherry'
  },
  // Odisha
  {
    name: 'M/S. Rameswar Traders',
    address: 'No. 15, BAM, 10933, 1st Military Lines, Berhampur, Ganjam, Odisha 760001',
    phone: '9338090910',
    city: 'Berhampur',
    state: 'Odisha'
  },
  {
    name: 'M/S MOHINI DEVI TRADERS',
    address: 'Panchasakha Nagar, Plot No. 699, Near Areter College, PO-Dumuduma, Bhubaneswar, Khardha, Odisha 751019',
    phone: '94373 89453',
    city: 'Bhubaneswar',
    state: 'Odisha'
  },
  {
    name: 'M/S VISTAR ENTERPRISES',
    address: 'NH 26, Near Jaganath Petrol Pump Jeypore, Koraput, Odisha 764002',
    phone: '76818 36454',
    city: 'Jeypore',
    state: 'Odisha'
  },
  {
    name: 'M/S SRI DURGA ASSOCIATES',
    address: 'Plot No-1068, Near Ganesh Mandir, Kapilaprasad, Sundarpada, Bhubaneswar, Khordha, Odisha 751002',
    phone: '8847811628',
    city: 'Bhubaneswar',
    state: 'Odisha'
  },
  // Kerala
  {
    name: 'M/S VIBRANS TRADE LINKS',
    address: 'Ground Floor, 18/283A-283B, Edyepuram, Aluva, Ernakulam, Kerala 683101',
    phone: '8547775752 / 7736647468',
    city: 'Aluva',
    state: 'Kerala'
  },
  {
    name: 'M/S ALAVEES',
    address: '#22/543A, Koottalungal, Nellikuth, Manjeri Malappuram, Kerala 676122',
    phone: '9895652031 / 7358027289',
    city: 'Manjeri',
    state: 'Kerala'
  },
  {
    name: 'M/S UNIVERSAL TRADING COMPANY',
    address: 'Kittunni Road, P.O. Pallikkunnu, Kannur 670004, Kerala',
    phone: '94474 87089 / 73580 27289',
    city: 'Kannur',
    state: 'Kerala'
  },
  {
    name: 'M/S NEXA TRADE LINKS',
    address: '#4/159, Karukulangara, Narikkuni, Kozhikode, Kerala 673585',
    phone: '9605904381',
    city: 'Kozhikode',
    state: 'Kerala'
  },
  {
    name: 'M/S SREE ENTERPRISES',
    address: 'Mukkola, Nettayam, Thiruvananthapuram, Kerala 695013',
    phone: '9447167735',
    city: 'Thiruvananthapuram',
    state: 'Kerala'
  },
  // Maharashtra
  {
    name: 'M/S ROCK CERAMIC & SANITARY',
    address: '#17, Bagadganj, Opp-Vimal Medical, Gangabai Ghat, Nagpur 440008',
    phone: '8767228808 / 8788143602',
    city: 'Nagpur',
    state: 'Maharashtra'
  },
  // West Bengal
  {
    name: 'M/S MAJUMDAR ENTERPRISE',
    address: 'Gobinda Nagar Bus Stand, P.O. Kenduadihi, Bankura, West Bengal 722101',
    phone: '9434008779',
    city: 'Bankura',
    state: 'West Bengal'
  }
];

export const OFFERS_PRODUCTS = PRODUCTS.filter(p => p.badge);
