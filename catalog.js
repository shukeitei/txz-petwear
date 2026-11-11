/* HAFOD Catalog Data, Rich Lightbox (Photo + Video), and Multi-SKU Wholesale Inquiry Basket */

const VIDEOS = {
  sleeveWalk: {
    video: 'assets/videos/sleeve-walkthrough.mp4',
    src: 'assets/videos/sleeve-walkthrough-poster.jpg',
    cap: 'In-Motion Walkthrough — Full-stride stability, Cooling-Silk pad lining & adjustable strap'
  },
  padRebound: {
    video: 'assets/videos/pad-rebound.mp4',
    src: 'assets/videos/pad-rebound-poster.jpg',
    cap: '2x Macro Close-Up — 3-layer pad rebound & micro-porous Cooling-Silk contact surface'
  },
  insideOut: {
    video: 'assets/videos/inside-out.mp4',
    src: 'assets/videos/inside-out-poster.jpg',
    cap: 'Inside-Out Coverage Proof — Color-block sleeve matches internal wrap-around pad 1:1'
  },
  impactTest: {
    video: 'assets/videos/impact-test.mp4',
    src: 'assets/videos/impact-test-poster.jpg',
    audio: true,
    cap: 'Acoustic Impact Test (Sound On) — Bare-knuckle floor knock vs. cushioned 3D pad thud'
  },
  studioCraft: {
    video: 'assets/videos/studio-craft.mp4',
    src: 'assets/videos/studio-craft-poster.jpg',
    cap: 'In-House Studio Craft — Stitching the micro-porous Cooling-Silk + 3D pad into Peace Deer sleeve'
  },
  coolingMotion: {
    video: 'assets/videos/cooling-motion.mp4',
    src: 'assets/videos/cooling-motion-poster.jpg',
    cap: 'Outdoor Sprint Video — UPF50+ Dry-Touch Ice-Silk 4-way stretch mobility & dry-cooling'
  }
};

const SLEEVE_SHARED = [
  VIDEOS.sleeveWalk,
  { src: 'assets/details/pad-lining.jpg', cap: '3-layer pad interior: smooth micro-porous Cooling-Silk over encased 3D cushioning mesh' },
  { src: 'assets/details/pad-thickness.jpg', cap: 'Caliper-verified rebound core — cushions hard floors without bulky stiffness' },
  { src: 'assets/details/quick-buckle.jpg', cap: 'Side-release quick buckle + 2 mm rubber-core elastic strap (no fur pinching)' }
];

const CHARM_LIST = [
  { file: 'charm-01-tree.jpg', name: 'Snowy Pine Tree', dim: '6.5 × 10 cm' },
  { file: 'charm-02-gingerbread-house.jpg', name: 'Gingerbread Cottage', dim: '7 × 7.5 cm' },
  { file: 'charm-03-gingerbread-star.jpg', name: 'Star Gingerbread', dim: '5 × 6 cm' },
  { file: 'charm-04-reindeer.jpg', name: 'Sherpa Reindeer', dim: '6 × 5.5 cm' },
  { file: 'charm-05-snowman-redcap.jpg', name: 'Red-Cap Snowman', dim: '6 × 8.5 cm' },
  { file: 'charm-06-plaid-bow.jpg', name: 'Tartan Ribbon Bow', dim: '6 × 5.5 cm' },
  { file: 'charm-07-star-mitten.jpg', name: 'Star-Cottage Mitten', dim: '7 × 7.5 cm' },
  { file: 'charm-08-santa-redcap.jpg', name: 'Red-Cap Santa', dim: '5.5 × 9 cm' },
  { file: 'charm-09-santa-pinesuit.jpg', name: 'Pine-Suit Santa', dim: '5.5 × 9 cm' },
  { file: 'charm-10-classic-santa.jpg', name: 'Classic Santa', dim: '6.5 × 9 cm' },
  { file: 'charm-11-sherpa-star.jpg', name: 'Sherpa Star', dim: '6 × 6 cm' },
  { file: 'charm-12-festive-apple.jpg', name: 'Embroidered Apple', dim: '6 × 6 cm' },
  { file: 'charm-13-apple-bite.jpg', name: 'Crisp Red Apple', dim: '5.5 × 9 cm' },
  { file: 'charm-14-mini-santa.jpg', name: 'Cozy Mini Santa', dim: '5.5 × 6.5 cm' }
];

const TIER_PROFILES = {
  'sleeve-short': {
    kind: 'Gen-2 Elbow Sleeves (Short Cut)',
    sizes: 'L / XL / 2XL / 3XL (covers regular medium–large builds, 7.5–50 kg / 16–110 lbs)',
    status: 'Stable core line — safe for year-round listings; phase-outs flagged in advance',
    mat: '100% cotton printed double-knit shell (Class-A infant-grade) · encased 3D sandwich cushioning core + smooth micro-porous Cooling-Silk skin-contact layer · cotton-poly ribbed cuff · 2 mm rubber-core elastic strap & side-release buckle',
    pack: '1 pair per neutral size-labeled clear zip polybag (70–109 g with bag; zero Chinese text)',
    fitNote: 'Fits 90% of medium–large breeds (Retrievers, Labradors, Border Collies, German Shepherds). Match Limb Circumference (B) first.',
    points: [
      'Extended wrap-around pad cushions both direct elbow contact and lateral indoor roll-over posture',
      'Smooth Cooling-Silk inner surface glides over elbow calluses without chafing while dissipating joint heat',
      'Narrowed elastic ribbed cuff prevents paws from stepping inside the sleeve during walks'
    ]
  },
  'sleeve-long': {
    kind: 'Gen-2 Elbow Sleeves (Long Cut · +5 cm)',
    sizes: 'XL / 2XL / 3XL (+5 cm sleeve length vs. Short Cut; 10–50 kg / 22–110 lbs)',
    status: 'Stable specialty cut — continuous production',
    mat: '100% cotton printed double-knit shell (Class-A infant-grade) · encased 3D sandwich cushioning core + Cooling-Silk skin-contact layer · ribbed cuff & quick-release strap',
    pack: '1 pair per neutral size-labeled clear zip polybag (93–130 g with bag; zero Chinese text)',
    fitNote: 'Engineered specifically for tall, long-legged breeds (Standard Poodles, Afghan/Doodle builds). Regular retrievers & shepherds should choose Short Cut.',
    points: [
      'Adds ~5 cm sleeve length at identical limb circumference and cuff opening',
      'Prevents cuff ride-up on long-boned Standard Poodles without needing to oversize width',
      'Same 3-layer Cooling-Silk + 3D cushioning pad and quick-buckle harness system'
    ]
  },
  'sleeve-xmas': {
    kind: 'Gen-2 Elbow Sleeves · Q4 Holiday Capsule',
    sizes: 'L / XL / 2XL / 3XL (7.5–50 kg / 16–110 lbs)',
    status: 'Seasonal Q4 bestseller — early Q3/Q4 booking recommended for peak holiday stock',
    mat: '100% cotton printed double-knit shell · encased 3D cushioning core + Cooling-Silk contact layer · compatible with clip-on holiday plush charms',
    pack: '1 pair per neutral clear zip polybag (70–109 g); optional plush charm packs sold separately',
    fitNote: 'Standard Short Cut sizing. Pair with 3-pc or 5-pc Clip-on Plush Charm packs for holiday gift bundles.',
    points: [
      'Original woodland festive prints proven at $45+ USD retail price points in North America',
      'Pairs seamlessly with our 14 Clip-on Holiday Plush Charms for high-margin seasonal upsells',
      'Functional 4-season elbow protection that customers continue using well past the holidays'
    ]
  },
  'sleeve-cny': {
    kind: 'Gen-2 Elbow Sleeves · Lunar New Year Capsule',
    sizes: 'L / XL / 2XL / 3XL (7.5–50 kg / 16–110 lbs)',
    status: 'Festive capsule — available for seasonal & gifting orders',
    mat: '100% cotton printed double-knit shell · encased 3D cushioning core + Cooling-Silk contact layer',
    pack: '1 pair per neutral clear zip polybag (70–109 g)',
    fitNote: 'Standard Short Cut sizing. Matches our Fortune Deer & Lucky Koi Full-Length Elbow Hoodies.',
    points: [
      'Signature crimson & gold auspicious motifs tailored for Lunar New Year gifting & boutique displays',
      'Full 3-layer joint cushioning identical to our everyday core sleeves',
      'Coordinates with matching New Year plush charms and full-length hoodies'
    ]
  },
  'shirt-mesh': {
    kind: 'Half-Body Elbow Shirt · Open-Work Cotton Mesh',
    sizes: '3XL – 9XL (7 sizes, 7.5–50 kg / 16–110 lbs — see Elbow Suit size chart)',
    status: 'Current summer core line — confirm stock & lead time on inquiry',
    mat: '100% cotton open-work breathable eyelet mesh shell (Class-A infant-grade) · built-in Cooling-Silk + encased 3D sandwich mesh elbow pads · soft stretch ribbed collar & cuffs (cool-touch nylon-spandex rib on Chill Bunny)',
    pack: '1 shirt per neutral size-labeled clear zip polybag — dropship & retail ready',
    fitNote: 'Choose proper chest fit with slight breathing room — never oversize, or sleeves drop below the elbow joint.',
    points: [
      'True open-work 100% cotton mesh maximizes summer airflow while protecting front elbows on tile & hardwood',
      'Integrated chest bodice eliminates strap slippage on sleek short-coated breeds (Labradors, Pointers)',
      'Cropped half-back hem leaves the lower back uncovered so heavy double coats stay cool and airy'
    ],
    shared: [
      VIDEOS.padRebound,
      { src: 'assets/suits/detail-suit-pad-1.jpg', cap: '3-layer pad stack: smooth Cooling-Silk contact layer + encased 3D sandwich core' },
      { src: 'assets/suits/elbow-pad-icesilk.jpg', cap: 'One-piece elbow pad sewn securely inside the sleeve' }
    ]
  },
  'shirt-gauze': {
    kind: 'Half-Body Elbow Shirt · Sheer Jacquard Cotton Gauze',
    sizes: '3XL – 9XL (7 sizes, 7.5–50 kg / 16–110 lbs — see Elbow Suit size chart)',
    status: 'Current spring/summer line — confirm stock & lead time on inquiry',
    mat: '100% cotton sheer jacquard gauze shell · built-in Cooling-Silk + encased 3D sandwich mesh elbow pads · soft ribbed trim',
    pack: '1 shirt per neutral size-labeled clear zip polybag',
    fitNote: 'Light natural stretch; fit primarily by Chest Girth + Neck Girth with slight room.',
    points: [
      'Featherlight jacquard cotton sheer enough to see a hand silhouette through, ideal for warm indoor/outdoor wear',
      'Tightly spun fine cotton yarns prevent stiff short hairs (Labradors, Hounds) from poking through the weave',
      'Built-in 3-layer Cooling-Silk + 3D mesh pads cushion front elbows without trapping heat'
    ],
    shared: [
      VIDEOS.padRebound,
      { src: 'assets/suits/detail-suit-pad-1.jpg', cap: '3-layer pad stack: smooth Cooling-Silk contact layer + encased 3D sandwich core' },
      { src: 'assets/suits/elbow-pad-icesilk.jpg', cap: 'Inside view of sewn-in Cooling-Silk elbow pad' }
    ]
  },
  'shirt-linen': {
    kind: 'Half-Body Elbow Shirt · Silky Korean-Linen Mesh',
    sizes: '3XL – 9XL (7 sizes, 7.5–50 kg / 16–110 lbs — size up if between sizes)',
    status: 'Current spring–autumn line — confirm stock & lead time on inquiry',
    mat: 'Gen-2 Korean-linen silky fine mesh (100% polyester: chiffon-smooth drape with crisp linen-like breathability) · self-fabric bound collar, cuffs & hem · built-in Cooling-Silk + 3D mesh elbow pads',
    pack: '1 shirt per neutral size-labeled clear zip polybag',
    fitNote: 'IMPORTANT FIT NOTE: Horizontal micro-stretch only, zero vertical stretch. If chest or neck sits near the upper limit of a size, take the next size up.',
    points: [
      'Silky, non-cling drape resists fur buildup and glides smoothly over thick coats without matting',
      'Clean self-fabric bound edges at collar, cuffs and hem for an ultralight, chafe-free finish',
      'Built-in 3-layer elbow cushioning for spring through early autumn'
    ],
    shared: [VIDEOS.padRebound]
  },
  'shirt-jersey': {
    kind: 'Half-Body Elbow Shirt · Pad-Visible Cotton Jersey',
    sizes: '3XL – 9XL (7 sizes, 7.5–50 kg / 16–110 lbs — see Elbow Suit size chart)',
    status: 'Current all-season line — small-batch stocked; MTO restock from 60 pcs',
    mat: 'Combed cotton jersey shell (95% cotton / 5% spandex cool-touch jersey on Foxy Fables; 100% cotton jersey on Whale of a Tale) · color-block raglan sleeve = exact 1:1 internal pad area · Cooling-Silk + 3D mesh core',
    pack: '1 shirt per neutral size-labeled clear zip polybag',
    fitNote: 'Comfortable natural knit elasticity; fit by Chest Girth with slight room so pads stay centered on high-set elbows.',
    points: [
      'Pad-Visible Color-Blocking: solid sleeve panel visually maps 1:1 to the internal wrap-around pad zone',
      'Covers both direct front-elbow impact and lateral sides when dogs roll onto their side indoors',
      'Year-round T-shirt weight ideal for hardwood/tile homes and air-conditioned interiors'
    ],
    shared: [
      VIDEOS.insideOut,
      VIDEOS.padRebound,
      { src: 'assets/suits/detail-suit-pad-1.jpg', cap: '3-layer pad stack: Cooling-Silk contact layer + encased 3D sandwich core' }
    ]
  },
  'shirt-cotton': {
    kind: 'Half-Body Elbow Shirt · Midweight Cotton Double-Knit',
    sizes: '3XL – 9XL (7 sizes, 7.5–50 kg / 16–110 lbs — see Elbow Suit size chart)',
    status: 'Spring/Autumn double-knit line (Note: Peace Fox print fabric is limited to current cloth roll)',
    mat: '100% cotton printed double-knit shell · ribbed collar, cuffs & hem · built-in Cooling-Silk + encased 3D sandwich mesh elbow pads',
    pack: '1 shirt per neutral size-labeled clear zip polybag',
    fitNote: 'Structured, resilient double-knit cotton; fit by Chest Girth + Neck Girth.',
    points: [
      'Substantial 100% cotton double-knit body offers higher abrasion resistance for active indoor/outdoor dogs',
      'Stay-put half-body silhouette solves sleeve slippage while keeping hind quarters unrestricted',
      'Gentle Cooling-Silk inner pad surface protects callused elbows across spring, autumn and mild winter'
    ],
    shared: [
      VIDEOS.padRebound,
      { src: 'assets/suits/detail-suit-pad-1.jpg', cap: '3-layer pad stack: Cooling-Silk contact layer + encased 3D sandwich core' }
    ]
  },
  'hoodie-cny': {
    kind: 'Full-Length Elbow Sweatshirt · Cotton Double-Knit',
    sizes: '3XL – 9XL (7 sizes, 7.5–50 kg / 16–110 lbs — full neck-to-tail torso cut)',
    status: 'Seasonal / Early-Autumn line — confirm stock & MTO schedule on inquiry',
    mat: '100% cotton double-knit full-body sweatshirt (yarn-dyed speckled contrast sleeves on Lucky Koi; gold piping on Fortune Deer) · ribbed collar, cuffs & hem · built-in Cooling-Silk + 3D mesh elbow pads',
    pack: '1 sweatshirt per neutral size-labeled clear zip polybag',
    fitNote: 'Full-length back coverage; size primarily by Chest Girth + Back Length.',
    points: [
      'Full neck-to-tail torso coverage paired with hidden 3-layer front-elbow cushioning',
      'Elevated tailoring details — gold contrast piping and yarn-dyed speckled sleeves for boutique holiday racks',
      'Breathable 100% cotton double-knit warmth without static buildup'
    ],
    shared: [
      VIDEOS.impactTest,
      { src: 'assets/suits/elbow-pad-hoodie.jpg', cap: 'Inside view: Cooling-Silk + 3D mesh pad sewn into sweatshirt sleeve' }
    ]
  },
  'hoodie-brushed': {
    kind: 'Full-Length Elbow Sweatshirt · Soft-Brushed Cotton + Upgraded Pad',
    sizes: '3XL – 9XL (7 sizes, 7.5–50 kg / 16–110 lbs — full neck-to-tail torso cut)',
    status: 'Fall/Winter core line — rolling production runs',
    mat: 'Soft-brushed cotton knit (lightly peached warm exterior with low fur-cling; clean unbrushed combed-cotton interior) · UPGRADED high-density 3D sandwich elbow pad core + Cooling-Silk contact layer · double-layer ribbed collar & cuffs',
    pack: '1 sweatshirt per neutral size-labeled clear zip polybag',
    fitNote: 'Full-length sweatshirt cut; choose proper Chest Girth fit so upgraded high-density pads stay aligned over elbows.',
    points: [
      'Upgraded High-Density 3D Pad Core: extra rebound thickness built for heavy breeds resting on cold hard floors',
      'Low-Fur-Cling Exterior: lightly brushed outer face traps warmth while shedding stray dog hair far cleaner than polar fleece',
      'Clean, unbrushed combed-cotton interior prevents coat static and undercoat tangling'
    ],
    shared: [
      VIDEOS.impactTest,
      { src: 'assets/suits/elbow-pad-hoodie.jpg', cap: 'Upgraded high-density elbow pad with smooth Cooling-Silk contact surface' }
    ]
  },
  'hoodie-winter': {
    kind: 'Full-Length Winter Elbow Suit · 3-Layer Quilted Air-Knit',
    sizes: '3XL – 9XL (7 sizes, 7.5–50 kg / 16–110 lbs — full winter coverage)',
    status: 'Deep-winter seasonal line — confirm stock & MTO lead time on inquiry',
    mat: '3-layer quilted air-pocket insulated cotton knit · signature scalloped roll-edge cuffs · built-in Cooling-Silk + 3D sandwich mesh elbow pads',
    pack: '1 winter suit per neutral size-labeled clear zip polybag',
    fitNote: 'Thickest winter insulation in our catalog; size up one if your dog has a dense winter coat at the top of a chest bracket.',
    points: [
      'Three-layer quilted air-pocket fabric locks in body warmth for cold-climate walks and unheated floors',
      'Signature scalloped cuffs + original winter illustrations stand out from clinical black rehab gear',
      'Maintains breathable Cooling-Silk contact over the elbow joint so pads never feel clammy indoors'
    ],
    shared: [
      VIDEOS.impactTest,
      { src: 'assets/suits/winter-elbow-pad-worn.jpg', cap: 'Turned inside-out on model to reveal full Cooling-Silk elbow pad coverage' }
    ]
  },
  'fourleg-cotton': {
    kind: 'Gen-3 Four-Leg Joint-Padded Cotton Suit (Male / Female Cuts)',
    sizes: '3XL – 8XL (6 sizes, 9–45 kg / 20–99 lbs — dedicated Four-Leg Cotton chart)',
    status: 'Current all-season 4-leg line — specify Male or Female cut when inquiring',
    mat: 'Back panel: 100% cotton printed jersey · front chest, sleeves & legs: cool-touch cotton-spandex jersey (95% cotton / 5% spandex) · built-in Cooling-Silk + 3D mesh pads on front elbows + hind-leg resting contact zones · separate Male (open belly) & Female (full belly) patterns',
    pack: '1 four-leg suit per neutral size-labeled clear zip polybag',
    fitNote: 'Light stretch: if Chest Girth or Back Length sits at the top of a size, take the next size up. Separate Male/Female belly cuts.',
    points: [
      'Anatomical Dual-Zone Cushioning: pads front elbows PLUS hind-leg lower-front & lateral floor-contact areas when lying down — intentionally clearing the hock joint for unrestricted stride',
      'True Gender-Specific Tailoring: Male cut features clean open-belly potty clearance; Female cut offers full belly protection',
      '3-in-1 Retail Utility: hard-floor joint cushioning + indoor shedding containment + outdoor grass/burr/tick barrier'
    ],
    shared: [VIDEOS.padRebound]
  },
  'fourleg-ice': {
    kind: 'Gen-3 UPF50+ Dry-Touch Ice-Silk Four-Leg Suit (Male / Female Cuts)',
    sizes: '3XL – 8XL (6 sizes, 9–45 kg / 20–99 lbs — dedicated Ice-Silk Four-Leg chart)',
    status: 'Summer core cooling line — specify colorway (Zone-Out Green / Quiet Blue) & Male/Female cut',
    mat: 'UPF50+ dry-touch ice-silk knit (80% nylon / 20% spandex) · high 4-way stretch · separate Male (open belly) & Female (full belly) cuts (Note: unpadded ultralight sun & cooling suit)',
    pack: '1 cooling suit per neutral size-labeled clear zip polybag',
    fitNote: 'High 4-way stretch: sleek short-coated breeds stay in size even +2–3 cm over chest chart; thick double-coated breeds size up one.',
    points: [
      'Dry-Touch Contact Cooling — Never Soak in Water: keeps dense double coats dry and airy, avoiding the warm dampness of evaporative wet suits',
      'UPF50+ sun protection + full-leg grass, mud and outdoor bug defense for summer hikes',
      'Separate Male & Female belly cuts with high-recovery 4-way stretch for full sprint mobility'
    ],
    shared: [VIDEOS.coolingMotion]
  },
  'cooling-vest': {
    kind: 'Gen-3 UPF50+ Dry-Touch Raglan Cooling Vest',
    sizes: '3XL – 9XL (7 sizes, 8–50 kg / 18–110 lbs — dedicated Cooling Vest chart)',
    status: 'Summer core line — lightweight, low air-freight weight per unit',
    mat: 'UPF50+ dry-touch ice-silk knit (80% nylon / 20% spandex) · seamless raglan cap-sleeve shoulder · tummy-cinch elastic hem',
    pack: '1 cooling vest per neutral size-labeled clear zip polybag',
    fitNote: 'Lean short-coated breeds (Labrador, Springer) between sizes can size down; thick fluffy coats (Samoyed, Malamute) size up.',
    points: [
      'Dry-Touch Cooling (Zero Soaking): instant cool handfeel out of the bag — never wets or steams the dog’s undercoat',
      'Raglan Cap-Sleeve Cut: neatly covers awkward armpit fur tufts on fluffy breeds and prevents shoulder slip on slick short coats',
      'Tummy-Cinch Elastic Hem: hugs cleanly against the abdomen to prevent roll-up and keep male dogs dry on walks'
    ],
    shared: [
      VIDEOS.coolingMotion,
      { src: 'assets/suits/detail-vest-shoulder.jpg', cap: 'Seamless raglan cap-sleeve shoulder — smooth, zero-chafe stride' },
      { src: 'assets/suits/detail-vest-hem.jpg', cap: 'Tummy-cinch elastic hem keeps vest flat and dry' }
    ]
  },
  'holiday-charms': {
    kind: 'Q4 Seasonal Add-On · Clip-On Plush Charm Collection (14 Designs)',
    sizes: 'Mini (~5.5–6 cm) & Large (~6.5–10 cm) — universal clip fits all HAFOD sleeves, collars & harnesses',
    status: 'Seasonal holiday stock — wholesale solo by design or as 3-pc / 5-pc blind gift packs',
    mat: 'Soft sherpa, embroidered felt & plush construction · lightweight rear attachment clip (dog-safe, snag-free)',
    pack: 'Available individually bagged or pre-assorted in 3-pc / 5-pc mystery holiday packs (zero Chinese text)',
    fitNote: 'Clips onto the upper outer sleeve or collar D-ring/webbing in seconds; remove before washing garment.',
    points: [
      '14 original holiday motifs: Snowy Pine Tree, Gingerbread, Sherpa Reindeer, Tartan Bow, Santa & Festive Apples',
      'High-margin checkout add-on: lets pet parents refresh everyday or Christmas sleeves for holiday photos',
      'Flexible B2B ordering: pick specific motifs or order ready-to-hang 3-pc / 5-pc blind packs'
    ],
    shared: []
  },
  'lifestyle-sakura': {
    kind: 'Studio Capsule · Little Sakura Floral Apparel',
    sizes: 'Dresses: 3XL – 9XL · Shirt: 4XL – 9XL (detailed garment chart sent on inquiry)',
    status: 'Boutique studio capsule — confirm stock & sizes on inquiry',
    mat: 'Soft woven cotton floral print across coordinated silhouettes (built-in D-ring harness bow on Swing Dress)',
    pack: '1 piece per neutral clear zip polybag',
    fitNote: 'Send target breed mix or request the Little Sakura spec sheet when inquiring.',
    points: [
      'Coordinated boutique floral story across three silhouettes (Ruffle Pumpkin Dress, Harness Swing Dress & Shirt)',
      'Designed specifically for medium & large breeds rarely served by cute boutique dresses overseas'
    ],
    shared: []
  },
  'lifestyle-care': {
    kind: 'Gen-2 Skin-Friendly Sanitary Pants',
    sizes: '3XL – 8XL (6 sizes for medium–large females — chart sent on inquiry)',
    status: 'Current care item — confirm stock on inquiry',
    mat: 'Soft skin-friendly breathable knit in Moon Blue · secure comfort waist & tail opening',
    pack: '1 piece per neutral clear zip polybag',
    fitNote: 'Designed for medium & large females in season; pad-insert compatible.',
    points: [
      'Soft, non-crinkly skin-friendly fabric dogs tolerate indoors without fuss',
      'True medium-to-large breed grading (3XL–8XL)'
    ],
    shared: []
  }
};

const CATALOG = [
  // 01A · Everyday Short Sleeves (7 designs — including Snowman per studio curation)
  { slug: 'street-leopard', group: 'sleeve-daily', profile: 'sleeve-short', name: 'Street Leopard', zh: '潮豹 · Chao Bao',
    card: 'assets/products/street-leopard.jpg', tags: [['Short Cut', 'brand'], ['All-Season', '']],
    imgs: [{ src: 'assets/gallery/worn-street-leopard-1.jpg', cap: 'Worn (shown in Long cut; Short cut differs only by 5 cm length)' }, { src: 'assets/gallery/worn-street-leopard-2.jpg', cap: 'Pad stays centered over elbow through full stride' }] },
  { slug: 'folk-duck', group: 'sleeve-daily', profile: 'sleeve-short', name: 'Folk-Art Duck', zh: '年画鸭 · Nianhua Ya',
    card: 'assets/products/folk-duck.jpg', tags: [['Short Cut', 'brand'], ['All-Season', '']],
    imgs: [{ src: 'assets/gallery/worn-folk-duck-1.jpg', cap: 'Worn — Short cut' }, { src: 'assets/gallery/worn-folk-duck-2.jpg', cap: 'Standing fit view' }] },
  { slug: 'ice-leopard', group: 'sleeve-daily', profile: 'sleeve-short', name: 'Ice Leopard', zh: '冷豹力 · Leng Bao Li',
    card: 'assets/products/ice-leopard.jpg', tags: [['Short Cut', 'brand'], ['All-Season', '']],
    imgs: [{ src: 'assets/gallery/fit-golden-ice-leopard.jpg', cap: 'Worn on Golden Retriever' }] },
  { slug: 'goose-chase', group: 'sleeve-daily', profile: 'sleeve-short', name: 'Goose Chase', zh: '抓大鹅 · Zhua Da E',
    card: 'assets/products/goose-chase.jpg', tags: [['Short Cut', 'brand'], ['All-Season', '']], imgs: [] },
  { slug: 'lazy-fish', group: 'sleeve-daily', profile: 'sleeve-short', name: 'Lazy Fish', zh: '摸个鱼 · Mo Ge Yu',
    card: 'assets/products/lazy-fish.jpg', tags: [['Short Cut', 'brand'], ['All-Season', '']], imgs: [] },
  { slug: 'happy-bunny', group: 'sleeve-daily', profile: 'sleeve-short', name: 'Happy Bunny', zh: '兔个乐 · Tu Ge Le',
    card: 'assets/products/happy-bunny.jpg', tags: [['Short Cut', 'brand'], ['All-Season', '']], imgs: [] },
  { slug: 'snowman', group: 'sleeve-daily', profile: 'sleeve-short', name: 'Snowman', zh: '雪人精 · Xue Ren Jing',
    card: 'assets/products/snowman.jpg', tags: [['Short Cut', 'brand'], ['All-Season', '']],
    imgs: [{ src: 'assets/gallery/fit-malamute-snowman.jpg', cap: 'Worn on Alaskan Malamute' }] },

  // 01B · Tall-Breed Long Sleeves (+5 cm)
  { slug: 'street-leopard-long', group: 'sleeve-long', profile: 'sleeve-long', name: 'Street Leopard · Long', zh: '潮豹加长 · +5 cm',
    card: 'assets/products/street-leopard-long.jpg', tags: [['Long +5 cm', 'long'], ['Tall Breeds', '']],
    imgs: [{ src: 'assets/gallery/worn-street-leopard-1.jpg', cap: 'Worn — Long version' }, { src: 'assets/gallery/worn-street-leopard-2.jpg', cap: 'Full-stride coverage on long-legged builds' }] },
  { slug: 'folk-duck-long', group: 'sleeve-long', profile: 'sleeve-long', name: 'Folk-Art Duck · Long', zh: '年画鸭加长 · +5 cm',
    card: 'assets/products/folk-duck-long.jpg', tags: [['Long +5 cm', 'long'], ['Tall Breeds', '']],
    imgs: [{ src: 'assets/gallery/worn-folk-duck-1.jpg', cap: 'Shown in Short cut; Long version adds ~5 cm sleeve length' }, { src: 'assets/gallery/worn-folk-duck-2.jpg', cap: 'Standing view' }] },

  // 01C · Christmas Woodland Capsule (3 Sleeves + Charms Line)
  { slug: 'stocking', group: 'sleeve-xmas', profile: 'sleeve-xmas', name: 'Christmas Stocking', zh: '装满袜 · Zhuang Man Wa',
    card: 'assets/products/stocking.jpg', tags: [['Christmas', 'xmas'], ['Short Cut', '']],
    imgs: [{ src: 'assets/gallery/scene-xmas-1.jpg', cap: 'Holiday fireplace set styled with clip-on plush charms' }, { src: 'assets/gallery/scene-xmas-2.jpg', cap: 'Holiday studio lookbook' }, { src: 'assets/gallery/fit-husky-stocking.jpg', cap: 'Worn on Siberian Husky' }] },
  { slug: 'peace-fox', group: 'sleeve-xmas', profile: 'sleeve-xmas', name: 'Peace Fox', zh: '平安狐 · Ping’an Hu',
    card: 'assets/products/peace-fox.jpg', tags: [['Christmas', 'xmas'], ['Short Cut', '']],
    imgs: [{ src: 'assets/gallery/scene-xmas-1.jpg', cap: 'Styled with clip-on plush charms' }, { src: 'assets/gallery/scene-xmas-2.jpg', cap: 'Holiday studio lookbook' }, { src: 'assets/gallery/fit-akita-peace-fox.jpg', cap: 'Worn on Akita' }] },
  { slug: 'peace-deer', group: 'sleeve-xmas', profile: 'sleeve-xmas', name: 'Peace Deer', zh: '平安鹿 · Ping’an Lu',
    card: 'assets/products/peace-deer.jpg', tags: [['Christmas', 'xmas'], ['Short Cut', '']],
    imgs: [VIDEOS.studioCraft, { src: 'assets/gallery/scene-xmas-1.jpg', cap: 'Styled with clip-on plush charms' }, { src: 'assets/gallery/scene-xmas-3.jpg', cap: 'Holiday studio lookbook' }] },
  { slug: 'holiday-charms', group: 'charms-only', profile: 'holiday-charms', name: 'Clip-On Holiday Plush Charms (14 Designs)', zh: '圣诞毛绒配饰 · 14款可选/盲袋',
    card: 'assets/charms/charms-wreath-14.jpg', cardCap: 'All 14 clip-on holiday charm designs — order solo or in 3-pc / 5-pc blind packs',
    tags: [['14 Motifs', 'warm'], ['Add-On Line', 'xmas']],
    imgs: [
      { src: 'assets/gallery/scene-xmas-1.jpg', cap: 'Charms clipped onto Christmas sleeves on two dogs' },
      ...CHARM_LIST.slice(0, 8).map(c => ({ src: `assets/charms/${c.file}`, cap: `${c.name} (${c.dim}) — pure white background` }))
    ] },

  // 01D · Lunar New Year Capsule (2 Sleeves)
  { slug: 'lucky-koi', group: 'sleeve-cny', profile: 'sleeve-cny', name: 'Lucky Koi', zh: '锦鲤 · Jin Li',
    card: 'assets/products/lucky-koi.jpg', tags: [['Lunar New Year', 'cny'], ['Short Cut', '']],
    imgs: [{ src: 'assets/gallery/scene-cny-1.jpg', cap: 'Lunar New Year set styled with festive plush charms' }, { src: 'assets/gallery/scene-cny-2.jpg', cap: 'Festive studio scene' }, { src: 'assets/gallery/fit-collie-lucky-koi.jpg', cap: 'Worn on Border Collie (XL)' }] },
  { slug: 'fortune-deer', group: 'sleeve-cny', profile: 'sleeve-cny', name: 'Fortune Deer', zh: '福鹿 · Fu Lu',
    card: 'assets/products/fortune-deer.jpg', tags: [['Lunar New Year', 'cny'], ['Short Cut', '']],
    imgs: [{ src: 'assets/gallery/scene-cny-1.jpg', cap: 'Lunar New Year set styled with festive plush charms' }, { src: 'assets/gallery/scene-cny-2.jpg', cap: 'Festive studio scene' }, { src: 'assets/gallery/fit-chow-fortune-deer.jpg', cap: 'Worn on Chow mix (XL)' }] },

  // 02A · Half-Body Shirts — Tier 1: Summer Lightweight Breathable 100% Cotton (Eyelet Mesh + Sheer Jacquard Gauze)
  { slug: 'chill-bunny', group: 'shirt-summer-cotton', profile: 'shirt-mesh', name: 'Chill Bunny', zh: '凉到兔了 · Liang Dao Tu Le',
    card: 'assets/suits/chill-bunny.jpg', hasVid: true, tags: [['100% Cotton Eyelet Mesh', 'ice'], ['High Summer', '']],
    imgs: [{ src: 'assets/suits/worn-chill-bunny-1.jpg', cap: 'Worn — front sitting' }, { src: 'assets/suits/worn-chill-bunny-2.jpg', cap: 'Worn — standing, half-back breathable cut' }, { src: 'assets/suits/worn-chill-bunny-3.jpg', cap: 'Worn on merle Border Collie' }] },
  { slug: 'breezy-elephant', group: 'shirt-summer-cotton', profile: 'shirt-mesh', name: 'Breezy Elephant', zh: '大风吹象 · Dafeng Chui Xiang',
    card: 'assets/suits/breezy-elephant.jpg', hasVid: true, tags: [['100% Cotton Eyelet Mesh', 'ice'], ['High Summer', '']],
    imgs: [{ src: 'assets/suits/worn-breezy-elephant-1.jpg', cap: 'Worn outdoors' }, { src: 'assets/suits/worn-breezy-elephant-2.jpg', cap: 'Front chest bodice prevents slippage' }, { src: 'assets/suits/worn-breezy-elephant-3.jpg', cap: 'Two dogs in Breezy Elephant' }] },
  { slug: 'grow-wild', group: 'shirt-summer-cotton', profile: 'shirt-gauze', name: 'Grow Wild', zh: '随便长 · Suibian Zhang',
    card: 'assets/suits/grow-wild.jpg', hasVid: true, tags: [['100% Cotton Sheer Gauze', 'brand'], ['Summer Lightweight', '']],
    imgs: [{ src: 'assets/suits/worn-grow-wild-1.jpg', cap: 'Worn — front sitting' }, { src: 'assets/suits/worn-grow-wild-2.jpg', cap: 'Side standing — cropped half-back cut' }, { src: 'assets/lines/cooling-suit.jpg', cap: 'Worn on merle Border Collie' }, { src: 'assets/suits/worn-grow-wild-3.jpg', cap: 'Sitting view' }] },
  { slug: 'slow-beat', group: 'shirt-summer-cotton', profile: 'shirt-gauze', name: 'Slow Beat', zh: '慢半拍 · Man Ban Pai',
    card: 'assets/suits/slow-beat.jpg', hasVid: true, tags: [['100% Cotton Sheer Gauze', 'brand'], ['Summer Lightweight', '']],
    imgs: [{ src: 'assets/suits/worn-slow-beat-1.jpg', cap: 'Worn — front sitting' }, { src: 'assets/suits/worn-slow-beat-2.jpg', cap: 'Side standing — sleeve & back proportion' }, { src: 'assets/suits/worn-slow-beat-3.jpg', cap: 'Sitting view' }] },

  // 02B · Half-Body Shirts — Tier 2: Silky Korean-Linen Fine Mesh (100% Polyester · Self-Bound Edges)
  { slug: 'flower-frolic', group: 'shirt-linen', profile: 'shirt-linen', name: 'Flower Frolic', zh: '花式撒欢 · Huashi Sahuan',
    card: 'assets/suits/flower-frolic.jpg', hasVid: true, tags: [['Korean-Linen Fine Mesh', ''], ['Self-Bound Trim', '']],
    imgs: [{ src: 'assets/suits/detail-flower-frolic-1.jpg', cap: 'Silky fine Korean-linen mesh texture' }, { src: 'assets/suits/detail-flower-frolic-2.jpg', cap: 'Clean self-fabric bound cuff' }, { src: 'assets/suits/detail-flower-frolic-3.jpg', cap: 'Collar binding detail' }] },
  { slug: 'no-sleigh', group: 'shirt-linen', profile: 'shirt-linen', name: 'No Sleigh Today', zh: '不拉雪橇 · Bu La Xueqiao',
    card: 'assets/suits/no-sleigh.jpg', hasVid: true, tags: [['Korean-Linen Fine Mesh', ''], ['Christmas', 'xmas']],
    imgs: [{ src: 'assets/suits/detail-no-sleigh-1.jpg', cap: 'Holiday rocking-horse print on airy Korean-linen mesh' }, { src: 'assets/suits/detail-no-sleigh-2.jpg', cap: 'Self-fabric bound cuff' }] },

  // 02C · Half-Body Shirts — Tier 3: All-Season Cotton Jersey (Pad-Visible Color-Block)
  { slug: 'foxy-fables', group: 'shirt-jersey', profile: 'shirt-jersey', name: 'Foxy Fables', zh: '一派狐言 · Yipai Huyan',
    card: 'assets/suits/foxy-fables.jpg', hasVid: true, tags: [['95% Cotton Jersey', 'brand'], ['Pad-Visible Sleeve', 'warm']],
    imgs: [{ src: 'assets/suits/worn-foxy-fables-1.jpg', cap: 'Color-block raglan sleeves mark exact internal pad coverage' }, { src: 'assets/suits/worn-foxy-fables-2.jpg', cap: 'Side sitting on merle Border Collie' }, { src: 'assets/suits/worn-foxy-fables-3.jpg', cap: 'Lying down — back illustration' }, { src: 'assets/suits/detail-foxy-fables-1.jpg', cap: 'Original fox-and-fawn print closeup' }] },
  { slug: 'whale-tale', group: 'shirt-jersey', profile: 'shirt-jersey', name: 'Whale of a Tale', zh: '一鲸一乍 · Yijing Yizha',
    card: 'assets/suits/whale-tale.jpg', hasVid: true, tags: [['100% Cotton Jersey', 'brand'], ['Pad-Visible Sleeve', 'warm']],
    imgs: [{ src: 'assets/suits/worn-whale-tale-1.jpg', cap: 'Front standing — sky-blue padded sleeves' }, { src: 'assets/suits/worn-whale-tale-2.jpg', cap: 'Back view — cropped half-body cut' }, { src: 'assets/suits/worn-whale-tale-3.jpg', cap: 'Resting on hard floor — front elbow protection' }, { src: 'assets/suits/detail-whale-tale-1.jpg', cap: 'Whale-and-rainbow print detail' }] },

  // 02D · Half-Body Shirts — Tier 4: Spring/Fall Midweight 100% Cotton Double-Knit
  { slug: 'steady-llama', group: 'shirt-cotton', profile: 'shirt-cotton', name: 'Steady Llama', zh: '驼驼妥 · Tuo Tuo Tuo',
    card: 'assets/suits/worn-steady-llama-1.jpg', cardCap: 'Worn — white-background studio photo available on request', hasVid: true,
    tags: [['100% Cotton Double-Knit', 'brand'], ['Spring / Fall', '']], imgs: [] },
  { slug: 'rua-elephant', group: 'shirt-cotton', profile: 'shirt-cotton', name: 'Rua Elephant (Pink / Blue)', zh: 'rua个象 · Rua Ge Xiang',
    card: 'assets/suits/worn-rua-elephant-1.jpg', cardCap: 'Both colorways (Pink & Blue) — white-background photos available on request', hasVid: true,
    tags: [['100% Cotton Double-Knit', 'brand'], ['2 Colorways', '']], imgs: [] },
  { slug: 'peace-fox-suit', group: 'shirt-cotton', profile: 'shirt-cotton', name: 'Peace Fox · Half-Body Shirt', zh: '平安狐半截 · Ping’an Hu',
    card: 'assets/suits/worn-peace-fox-suit-1.jpg', cardCap: 'Holiday studio lookbook (white-background photo on request)', hasVid: true,
    tags: [['100% Cotton Double-Knit', 'brand'], ['Christmas', 'xmas'], ['Limited Fabric', 'limited']],
    imgs: [{ src: 'assets/suits/worn-peace-fox-suit-2.jpg', cap: 'Side view' }, { src: 'assets/suits/worn-peace-fox-suit-3.jpg', cap: 'Woodland fox print closeup' }] },

  // 03A · Full-Length Elbow Hoodies — Tier 1: Midweight Cotton Double-Knit (Lunar New Year)
  { slug: 'fortune-deer-hoodie', group: 'hoodie-cny', profile: 'hoodie-cny', name: 'Fortune Deer — Gold Trim', zh: '福鹿金边 · Fulu Jinbian',
    card: 'assets/suits/fortune-deer-hoodie.jpg', hasVid: true, tags: [['Cotton Double-Knit', 'brand'], ['Lunar New Year', 'cny']],
    imgs: [{ src: 'assets/suits/worn-fortune-deer-1.jpg', cap: 'Resting pose — full-body sweatshirt coverage' }, { src: 'assets/suits/worn-fortune-deer-2.jpg', cap: 'Standing full-length profile' }, { src: 'assets/suits/worn-cny-duo.jpg', cap: 'Paired with Lucky Koi Sweatshirt' }, { src: 'assets/suits/detail-fortune-deer-1.jpg', cap: 'Gold piping & ribbed cuff craftsmanship' }] },
  { slug: 'lucky-koi-hoodie', group: 'hoodie-cny', profile: 'hoodie-cny', name: 'Lucky Koi · Speckled Sleeve', zh: '锦鲤拼袖 · Jin Li',
    card: 'assets/suits/lucky-koi-hoodie.jpg', hasVid: true, tags: [['Cotton Double-Knit', 'brand'], ['Lunar New Year', 'cny']],
    imgs: [{ src: 'assets/suits/worn-lucky-koi-1.jpg', cap: 'Worn on merle Border Collie' }, { src: 'assets/suits/worn-cny-duo.jpg', cap: 'Paired with Fortune Deer Sweatshirt' }, { src: 'assets/suits/detail-lucky-koi-1.jpg', cap: 'Yarn-dyed speckled sleeve & charcoal ribbed cuff' }, { src: 'assets/suits/detail-lucky-koi-2.jpg', cap: 'Koi illustration & ribbed collar' }] },

  // 03B · Full-Length Elbow Hoodies — Tier 2: Soft-Brushed Cotton + Upgraded High-Density Pad
  { slug: 'lazy-duck', group: 'hoodie-brushed', profile: 'hoodie-brushed', name: 'Lazy Duck', zh: '摆烂鸭 · Bailan Ya',
    card: 'assets/suits/lazy-duck.jpg', hasVid: true, tags: [['Soft-Brushed · Low Fur-Cling', 'warm'], ['High-Density Pad', 'brand']],
    imgs: [{ src: 'assets/suits/worn-lazy-duck-1.jpg', cap: 'Full-length neck-to-tail standing fit' }, { src: 'assets/suits/worn-lazy-duck-2.jpg', cap: 'Side sitting view' }, { src: 'assets/suits/worn-lazy-duck-3.jpg', cap: 'Front view' }, { src: 'assets/suits/detail-lazy-duck-1.jpg', cap: 'Upgraded high-density pad sewn inside sleeve' }, { src: 'assets/suits/detail-lazy-duck-2.jpg', cap: 'Double-layer ribbed collar & cuff' }] },
  { slug: 'couch-pony', group: 'hoodie-brushed', profile: 'hoodie-brushed', name: 'Couch Pony', zh: '躺平马 · Tangping Ma',
    card: 'assets/suits/couch-pony.jpg', hasVid: true, tags: [['Soft-Brushed · Low Fur-Cling', 'warm'], ['High-Density Pad', 'brand']],
    imgs: [{ src: 'assets/suits/worn-couch-pony-1.jpg', cap: 'Front sitting fit' }, { src: 'assets/suits/worn-couch-pony-2.jpg', cap: 'Side standing profile' }, { src: 'assets/suits/worn-hoodie-duo.jpg', cap: 'Side-by-side with Lazy Duck' }, { src: 'assets/suits/detail-couch-pony-1.jpg', cap: 'Soft-brushed low-fur-cling sleeve exterior' }] },

  // 03C · Full-Length Elbow Hoodies — Tier 3: Deep-Winter 3-Layer Quilted Air-Knit
  { slug: 'winter-parade', group: 'hoodie-winter', profile: 'hoodie-winter', name: 'Winter Parade', zh: '冬日万物 · Dongri Wanwu',
    card: 'assets/suits/worn-winter-parade-1.jpg', cardCap: 'Worn — white-background photo available on request', hasVid: true,
    tags: [['3-Layer Quilted Air-Knit', 'warm'], ['Deep Winter', '']],
    imgs: [{ src: 'assets/suits/worn-winter-parade-2.jpg', cap: 'Front sitting view' }, { src: 'assets/suits/worn-winter-parade-3.jpg', cap: 'Worn on merle Border Collie' }] },
  { slug: 'winter-elephant', group: 'hoodie-winter', profile: 'hoodie-winter', name: 'Winter Elephant', zh: '冬日伴象 · Dongri Banxiang',
    card: 'assets/suits/worn-winter-elephant-1.jpg', cardCap: 'Worn — white-background photo available on request', hasVid: true,
    tags: [['3-Layer Quilted Air-Knit', 'warm'], ['Deep Winter', '']],
    imgs: [{ src: 'assets/suits/worn-winter-elephant-3.jpg', cap: 'Worn on merle Border Collie — scalloped cuff detail' }] },

  // 04A · Four-Leg Joint-Padded Cotton Suits (Male / Female Cuts)
  { slug: 'deer-stroll', group: 'fourleg-cotton', profile: 'fourleg-cotton', name: 'Deer Stroll', zh: '梅事溜达 · Meishi Liuda',
    card: 'assets/fourleg/deer-stroll.jpg', hasVid: true, tags: [['Cotton · Padded 4-Leg', 'brand'], ['Male & Female Cuts', '']],
    imgs: [{ src: 'assets/fourleg/worn-deer-stroll-1.jpg', cap: 'Side standing — full 4-leg coverage' }, { src: 'assets/fourleg/worn-deer-stroll-2.jpg', cap: 'Unrestricted hind-leg hock clearance' }, { src: 'assets/fourleg/worn-deer-stroll-3.jpg', cap: 'Back illustration' }, { src: 'assets/fourleg/detail-deer-stroll-pad.jpg', cap: 'Built-in cushioning pad on leg contact zone' }] },
  { slug: 'dino-holler', group: 'fourleg-cotton', profile: 'fourleg-cotton', name: 'Dino Holler', zh: '有事吼我 · Youshi Houwo',
    card: 'assets/fourleg/dino-holler.jpg', hasVid: true, tags: [['Cotton · Padded 4-Leg', 'brand'], ['Male & Female Cuts', '']],
    imgs: [{ src: 'assets/fourleg/worn-dino-holler-1.jpg', cap: 'Front sitting view' }, { src: 'assets/fourleg/worn-dino-holler-2.jpg', cap: 'Standing profile' }, { src: 'assets/fourleg/worn-dino-holler-3.jpg', cap: 'Worn on merle Border Collie' }, { src: 'assets/fourleg/detail-dino-holler-back.jpg', cap: 'Back print & rear tailoring' }] },

  // 04B · Summer UPF50+ Dry-Touch Ice-Silk Series (4-Leg Suit + Raglan Vests)
  { slug: 'ice-fourleg', group: 'cooling-line', profile: 'fourleg-ice', name: 'Zone-Out Green / Quiet Blue · 4-Leg', zh: '放空绿 · 降噪蓝 (3代冰丝四脚衣)',
    card: 'assets/fourleg/ice-fourleg.jpg', cardCap: 'Both colorways worn (white-background photos available on request)', hasVid: true,
    tags: [['UPF50+ Dry-Touch Ice-Silk', 'ice'], ['4-Leg · M/F Cuts', '']], imgs: [] },
  { slug: 'vest-phantom-purple', group: 'cooling-line', profile: 'cooling-vest', name: 'Phantom Purple · Cooling Vest', zh: '神隐紫 · Shenyin Zi (3代凉感背心)',
    card: 'assets/suits/vest-phantom-purple.jpg', hasVid: true, tags: [['UPF50+ Dry-Touch Ice-Silk', 'ice'], ['Raglan Cap-Sleeve', '']],
    imgs: [{ src: 'assets/suits/worn-vest-purple-1.jpg', cap: 'Full side view — tummy-cinch hem' }, { src: 'assets/suits/worn-vest-purple-2.jpg', cap: 'Sitting view' }, { src: 'assets/suits/worn-vest-purple-3.jpg', cap: 'Raglan shoulder hides fluffy armpit line' }, { src: 'assets/suits/worn-vest-duo.jpg', cap: 'Phantom Purple & Paddle Green together' }] },
  { slug: 'vest-paddle-green', group: 'cooling-line', profile: 'cooling-vest', name: 'Paddle Green · Cooling Vest', zh: '划水绿 · Huashui Lü (3代凉感背心)',
    card: 'assets/suits/vest-paddle-green.jpg', hasVid: true, tags: [['UPF50+ Dry-Touch Ice-Silk', 'ice'], ['Raglan Cap-Sleeve', '']],
    imgs: [{ src: 'assets/suits/worn-vest-green-1.jpg', cap: 'Full side view' }, { src: 'assets/suits/worn-vest-green-2.jpg', cap: 'Walking — zero shoulder slippage' }, { src: 'assets/suits/worn-vest-green-3.jpg', cap: 'Front close-up' }, { src: 'assets/suits/worn-vest-duo.jpg', cap: 'Both colorways together' }] },

  // 05 · Secondary Lifestyle Drawer
  { slug: 'sakura-pumpkin-dress', group: 'more-lifestyle', profile: 'lifestyle-sakura', name: 'Ruffle Pumpkin Dress', zh: '小撒库拉 · 飞边南瓜裙',
    card: 'assets/more/sakura-pumpkin-dress.jpg', cardCap: 'Worn', tags: [['Little Sakura Set', ''], ['3XL–9XL', '']],
    imgs: [{ src: 'assets/more/sakura-duo-2.jpg', cap: 'Right: Ruffle Pumpkin Dress · Left: Harness Swing Dress' }] },
  { slug: 'sakura-swing-dress', group: 'more-lifestyle', profile: 'lifestyle-sakura', name: 'Harness Swing Dress', zh: '小撒库拉 · 胸背大摆裙',
    card: 'assets/more/sakura-swing-dress.jpg', cardCap: 'Worn — built-in D-ring harness bow', tags: [['Little Sakura Set', ''], ['3XL–9XL', '']],
    imgs: [{ src: 'assets/more/sakura-duo-1.jpg', cap: 'Left: Harness Swing Dress · Right: Little Sakura Shirt' }, { src: 'assets/more/sakura-duo-2.jpg', cap: 'Left: Harness Swing Dress · Right: Ruffle Pumpkin Dress' }] },
  { slug: 'sakura-shirt', group: 'more-lifestyle', profile: 'lifestyle-sakura', name: 'Little Sakura Shirt', zh: '小撒库拉 · 衬衫',
    card: 'assets/more/sakura-shirt.jpg', cardCap: 'Worn', tags: [['Little Sakura Set', ''], ['4XL–9XL', '']],
    imgs: [{ src: 'assets/more/sakura-duo-1.jpg', cap: 'Right: Little Sakura Shirt · Left: Harness Swing Dress' }] },
  { slug: 'sanitary-pants', group: 'more-lifestyle', profile: 'lifestyle-care', name: 'Sanitary Pants Gen-2 — Moon Blue', zh: '生理裤2代 · 亲肤月白蓝',
    card: 'assets/more/sanitary-pants.jpg', cardCap: 'Worn', tags: [['Female Care', 'ice'], ['3XL–8XL', '']], imgs: [] }
];

/* Multi-Design Inquiry Basket State */
const inquirySet = new Set();

function renderCard(item) {
  const inQ = inquirySet.has(item.slug);
  const tagsHtml = item.tags.map(([t, cls]) => `<span class="tag ${cls}">${t}</span>`).join('');
  return `
    <article class="card ${inQ ? 'in-quote' : ''}" data-slug="${item.slug}">
      <div class="card-img-wrap" data-open="${item.slug}">
        <img src="${item.card}" alt="${item.name}" loading="lazy">
        ${item.hasVid || item.profile.startsWith('sleeve-') ? `<span class="vid-indicator">Video</span>` : ''}
      </div>
      <div class="meta">
        <div class="name" data-open="${item.slug}">${item.name}</div>
        <div class="zh">${item.zh}</div>
        <div class="tags">${tagsHtml}</div>
        <div class="card-foot">
          <span class="view-hint" data-open="${item.slug}">Specs &amp; media →</span>
          <button type="button" class="quote-toggle ${inQ ? 'added' : ''}" data-quote="${item.slug}" aria-label="Add ${item.name} to inquiry">
            ${inQ ? '✓ In Quote' : '+ Quote'}
          </button>
        </div>
      </div>
    </article>`;
}

function mountGrids() {
  const groups = [
    'sleeve-daily', 'sleeve-long', 'sleeve-xmas', 'sleeve-cny',
    'shirt-summer-cotton', 'shirt-linen', 'shirt-jersey', 'shirt-cotton',
    'hoodie-cny', 'hoodie-brushed', 'hoodie-winter',
    'fourleg-cotton', 'cooling-line', 'more-lifestyle'
  ];
  groups.forEach(g => {
    const el = document.getElementById(`grid-${g}`);
    if (el) {
      el.innerHTML = CATALOG.filter(x => x.group === g).map(renderCard).join('');
    }
  });

  const charmStrip = document.getElementById('charms-strip');
  if (charmStrip) {
    charmStrip.innerHTML = CHARM_LIST.map(c => `
      <div class="charm-item" data-open="holiday-charms" title="${c.name} (${c.dim})">
        <img src="assets/charms/${c.file}" alt="${c.name} plush charm" loading="lazy">
        <span>${c.name}</span>
      </div>`).join('');
  }
}

function buildInquiryText() {
  const items = [...inquirySet].map(slug => {
    const it = CATALOG.find(x => x.slug === slug);
    return it ? `- ${it.name} (${TIER_PROFILES[it.profile].kind})` : `- ${slug}`;
  });
  return [
    'Hi HAFOD Studio,',
    '',
    'We would like to request your wholesale price list and current stock/lead-time sheet for:',
    ...(items.length ? items : ['- [Please list designs or full catalog]']),
    '',
    'Estimated order type: [Trial wholesale (6 pcs/style or 10 pcs mixed) / Paid sample / Custom ODM (60+ pcs)]',
    'Destination country & store/channel:',
    'China freight forwarder warehouse ready: [Yes / Need recommendation]',
    '',
    'Thank you!'
  ].join('\n');
}

function syncInquiryUI() {
  document.querySelectorAll('.card[data-slug]').forEach(card => {
    const slug = card.dataset.slug;
    const on = inquirySet.has(slug);
    card.classList.toggle('in-quote', on);
    const btn = card.querySelector('.quote-toggle');
    if (btn) {
      btn.classList.toggle('added', on);
      btn.textContent = on ? '✓ In Quote' : '+ Quote';
    }
  });

  const bar = document.getElementById('inquiry-bar');
  const countEl = document.getElementById('inq-count');
  const namesEl = document.getElementById('inq-names');
  const mailLink = document.getElementById('inq-mailto');
  if (!bar) return;

  const n = inquirySet.size;
  bar.classList.toggle('visible', n > 0);
  countEl.textContent = `${n} ${n === 1 ? 'design' : 'designs'}`;
  const names = [...inquirySet].map(s => (CATALOG.find(x => x.slug === s) || {}).name).filter(Boolean);
  namesEl.textContent = names.slice(0, 3).join(', ') + (names.length > 3 ? ` +${names.length - 3} more` : '');

  const subject = `Wholesale Quote Request — ${n} Selected Design${n > 1 ? 's' : ''} (HAFOD)`;
  mailLink.href = `mailto:shukeitei1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildInquiryText())}`;

  const lbAddBtn = document.getElementById('lb-add-quote');
  if (lbAddBtn && lbAddBtn.dataset.slug) {
    const inQ = inquirySet.has(lbAddBtn.dataset.slug);
    lbAddBtn.textContent = inQ ? '✓ Added to Inquiry List' : '+ Add to Inquiry List';
  }
}

function toggleQuote(slug) {
  if (inquirySet.has(slug)) inquirySet.delete(slug);
  else inquirySet.add(slug);
  syncInquiryUI();
}

/* Lightbox Controller (supports inline video + image slides) */
const lb = document.getElementById('lb');
let currentLbVideo = null;

function stopLbVideo() {
  if (currentLbVideo) {
    currentLbVideo.pause();
    currentLbVideo = null;
  }
}

function openDesign(slug) {
  const item = CATALOG.find(x => x.slug === slug);
  if (!item) return;
  const prof = TIER_PROFILES[item.profile];
  const isSleeve = item.profile.startsWith('sleeve-');
  const shared = isSleeve ? SLEEVE_SHARED : (prof.shared || []);

  const slides = [
    { src: item.card, cap: item.cardCap || 'Listing-ready product photo (watermark-free, zero Chinese text)' },
    ...item.imgs,
    ...shared
  ];

  document.getElementById('lb-name').textContent = item.name;
  document.getElementById('lb-zh').textContent = `${item.zh} · ${prof.kind}`;
  document.getElementById('lb-tags').innerHTML = item.tags.map(([t, cls]) => `<span class="tag ${cls}">${t}</span>`).join('');

  document.getElementById('lb-points-list').innerHTML = prof.points.map(p => `<li>${p}</li>`).join('');
  document.getElementById('lb-sizes').textContent = prof.sizes;
  document.getElementById('lb-fit').textContent = prof.fitNote;
  document.getElementById('lb-mat').textContent = prof.mat;
  document.getElementById('lb-status').textContent = prof.status;
  document.getElementById('lb-pack').textContent = `${prof.pack} · Hand wash cold ≤30°C, do not tumble dry or iron pad`;

  const lbAdd = document.getElementById('lb-add-quote');
  lbAdd.dataset.slug = item.slug;
  lbAdd.textContent = inquirySet.has(item.slug) ? '✓ Added to Inquiry List' : '+ Add to Inquiry List';

  const singleSubj = `Wholesale Quote — ${item.name} (${prof.kind})`;
  const singleBody = `Hi HAFOD Studio,\n\nI'd like wholesale pricing and current stock availability for:\n- ${item.name} (${prof.kind})\n\nSizes & quantities:\nDestination country:\nChina forwarder warehouse ready: yes / no\n\nThanks!`;
  document.getElementById('lb-quote').href = `mailto:shukeitei1@gmail.com?subject=${encodeURIComponent(singleSubj)}&body=${encodeURIComponent(singleBody)}`;

  const stage = document.getElementById('lb-stage');
  const capEl = document.getElementById('lb-cap');
  const thumbs = document.getElementById('lb-thumbs');

  thumbs.innerHTML = slides.map((s, i) => `
    <div class="lb-thumb ${i === 0 ? 'on' : ''}" data-i="${i}">
      <img src="${s.src}" alt="">
      ${s.video ? `<span class="vtag">▶ Video</span>` : ''}
    </div>`).join('');

  const showSlide = idx => {
    stopLbVideo();
    const s = slides[idx];
    if (s.video) {
      stage.innerHTML = `<video src="${s.video}" poster="${s.src}" controls autoplay loop playsinline ${s.audio ? '' : 'muted'}></video>`;
      currentLbVideo = stage.querySelector('video');
    } else {
      stage.innerHTML = `<img src="${s.src}" alt="${item.name}">`;
    }
    capEl.textContent = s.cap || '';
    thumbs.querySelectorAll('.lb-thumb').forEach((t, j) => t.classList.toggle('on', j === idx));
  };

  thumbs.querySelectorAll('.lb-thumb').forEach(t => {
    t.onclick = () => showSlide(+t.dataset.i);
  });

  showSlide(0);
  if (!lb.open) lb.showModal();
}

document.addEventListener('DOMContentLoaded', () => {
  mountGrids();

  document.body.addEventListener('click', e => {
    const qBtn = e.target.closest('[data-quote]');
    if (qBtn) {
      e.stopPropagation();
      toggleQuote(qBtn.dataset.quote);
      return;
    }
    const openEl = e.target.closest('[data-open]');
    if (openEl) {
      openDesign(openEl.dataset.open);
    }
  });

  document.getElementById('lb-add-quote').addEventListener('click', e => {
    const slug = e.currentTarget.dataset.slug;
    if (slug) toggleQuote(slug);
  });

  document.getElementById('inq-clear').addEventListener('click', () => {
    inquirySet.clear();
    syncInquiryUI();
  });

  const copyBtn = document.getElementById('inq-copy');
  copyBtn.addEventListener('click', async () => {
    const text = `To: shukeitei1@gmail.com\n\n${buildInquiryText()}`;
    try {
      await navigator.clipboard.writeText(text);
      const orig = copyBtn.textContent;
      copyBtn.textContent = '✓ Copied Email & List!';
      setTimeout(() => { copyBtn.textContent = orig; }, 2200);
    } catch (_) {}
  });

  lb.addEventListener('close', stopLbVideo);
  lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });

  // Pause other homepage videos when one starts playing
  const inlineVideos = document.querySelectorAll('.vid-stage video');
  inlineVideos.forEach(v => {
    v.addEventListener('play', () => {
      inlineVideos.forEach(other => { if (other !== v) other.pause(); });
    });
  });

  // Preserve ?d=<slug> deep-linking
  const deep = new URLSearchParams(location.search).get('d');
  if (deep && CATALOG.some(x => x.slug === deep)) {
    openDesign(deep);
  }
});
