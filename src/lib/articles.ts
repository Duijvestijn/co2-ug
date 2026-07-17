export type Lang = "en";

export interface Article {
  slug: string;
  tag: string;
  date: string;
  readTime: number;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  content: Record<Lang, string>;
}

export const articles: Article[] = [
  {
    slug: "uganda-gorilla-carbon-projects-price-premium",
    tag: "Conservation",
    date: "May 2026",
    readTime: 5,
    title: {
      en: "Uganda's Gorilla Carbon Projects Command 40% Price Premium on Global Markets",
    },
    excerpt: {
      en: "New data from voluntary carbon market traders confirms that Uganda's biodiversity-rich carbon credits — particularly those with CCB certification in gorilla habitat — trade at a 40% premium over standard nature-based credits.",
    },
    content: {
      en: `<p class="lead">New data published by Ecosystem Marketplace and confirmed by voluntary carbon market brokers in Q2 2026 shows that carbon credits originating from Uganda's gorilla habitat zones are trading at a consistent 40% premium over equivalent-vintage, equivalent-volume African nature-based credits. The driver: Climate, Community and Biodiversity (CCB) certification, which is becoming the decisive differentiator for corporate sustainability buyers in 2026.</p>

<h2>Bwindi Impenetrable Forest and the Carbon Case for Gorilla Habitat</h2>
<p>Bwindi Impenetrable National Park, a UNESCO World Heritage Site in south-western Uganda, is home to approximately 459 of the world's remaining 1,063 mountain gorillas. The forest sits at elevation between 1,190 and 2,607 metres, a range that produces some of the highest above-ground biomass carbon densities recorded in East Africa — up to 380 tonnes of carbon per hectare in primary sections, compared to a sub-Saharan average of 160–210 tonnes per hectare.</p>
<p>Carbon projects in and around Bwindi are structured under Verra VCS, typically using the VM0009 or VM0015 methodologies for avoided deforestation (REDD+). The combination of documented deforestation pressure from smallholder agriculture at the forest boundary, verified carbon stock measurements from permanent sampling plots, and a robust 10-year monitoring track record gives these projects a high degree of credibility with voluntary market buyers.</p>

<h2>What CCB Certification Actually Adds</h2>
<p>CCB (Climate, Community and Biodiversity) Standards are managed by Verra alongside VCS certification. A project earns CCB accreditation by demonstrating verifiable positive impacts across three domains simultaneously: climate (the carbon sequestration itself), community (direct, documented benefit to adjacent communities), and biodiversity (measurable improvement or protection of ecosystem species richness).</p>
<p>In gorilla habitat, the biodiversity component is unusually strong. Mountain gorillas are classified as Endangered on the IUCN Red List and serve as an internationally recognised flagship species. Any project that can document stable or growing gorilla population within its monitoring area — verified by wildlife survey data from the Uganda Wildlife Authority — earns CCB Gold certification, the highest tier.</p>
<p>CCB Gold projects in gorilla zones are currently trading at $32–45 per tonne CO₂ in bilateral transactions, compared to $22–28 for standard East African REDD+ credits. The premium reflects genuine buyer willingness-to-pay: corporate buyers using credits for CSRD and TCFD disclosures increasingly need co-benefit narratives that resonate with stakeholders, and "protecting mountain gorillas" is as clear a narrative as carbon markets offer.</p>

<h2>Corporate Demand: Who Is Buying and Why</h2>
<p>The dominant buyers in the Ugandan gorilla credit segment are European and American technology companies — specifically those with large Scope 1 and 2 emissions from data centre energy consumption and manufacturing supply chains, who need high-quality offsets for residual emissions after operational decarbonisation.</p>
<p>In Q1 2026, three Fortune 500 tech companies publicly disclosed retirement of Uganda biodiversity credits in their sustainability reports, naming the gorilla co-benefit as a material consideration in supplier selection. For buyers operating under Science-Based Targets initiative (SBTi) frameworks, the credibility signal from CCB Gold certification substantially reduces reputational risk compared to generic nature-based credits.</p>

<h2>Community Revenue Sharing: The Third Pillar</h2>
<p>CCB certification requires documented community benefit, and Uganda's project structures typically achieve this through direct revenue-sharing agreements with communities adjacent to the project boundary. In the Bwindi corridor, this means 35–40% of gross credit revenue is distributed to parish-level community groups through a managed trust structure, with an independent social auditor verifying disbursements annually.</p>
<p>For communities that previously faced acute economic pressure to encroach on forest land, the carbon revenue transforms the economic calculus: a household in a participating parish receiving an average carbon dividend of $140–$220 per year is substantially less likely to clear forest for cropland. The co-benefit is simultaneously verified by the social auditor and visible in satellite deforestation monitoring.</p>

<h2>Outlook: Premium Expected to Widen</h2>
<p>With voluntary carbon market supply tightening — following the retirements of several large REDD+ registries and increased scrutiny of low-quality credits post-Verra methodology updates — high-integrity CCB Gold projects in charismatic biodiversity zones are positioned to see continued premium expansion through 2028. Green Earth Group's registered projects in Uganda are among the cohort certified or in-pipeline for CCB Gold status.</p>`,
    },
  },
  {
    slug: "uganda-national-carbon-market-framework",
    tag: "Policy",
    date: "April 2026",
    readTime: 6,
    title: {
      en: "Uganda's National Carbon Market Framework: What Developers Need to Know",
    },
    excerpt: {
      en: "The National Environment Management Authority (NEMA) has published updated guidelines for voluntary carbon project registration in Uganda, clarifying benefit-sharing requirements and community consent processes.",
    },
    content: {
      en: `<p class="lead">In March 2026, Uganda's National Environment Management Authority (NEMA) published the second edition of its Voluntary Carbon Market Project Guidelines — a comprehensive update to the 2022 framework that responds directly to the rapid growth of international buyer interest in Ugandan carbon assets. The new guidelines introduce mandatory minimum benefit-sharing thresholds, a codified Free, Prior and Informed Consent (FPIC) process, and a clarified pathway for Verra VCS project registration within Uganda's national reporting architecture.</p>

<h2>NEMA's Role in Uganda's Carbon Market</h2>
<p>NEMA, established under the National Environment Act (Cap. 153), functions as Uganda's primary environmental regulatory authority. For carbon market purposes, NEMA serves as the national focal point for the UNFCCC and administers the process through which voluntary carbon projects are recognised within Uganda's national greenhouse gas inventory and Nationally Determined Contribution (NDC) accounting.</p>
<p>Registration with NEMA does not replace Verra VCS or Gold Standard certification — it operates alongside it. A project can hold Verra registry listing without NEMA registration, but NEMA-registered projects gain several advantages: they qualify for Article 6 ITMO transactions with government endorsement, they receive priority treatment in future national compliance market frameworks currently under development, and they carry an additional layer of sovereign credibility that some corporate buyers explicitly require.</p>

<h2>Benefit-Sharing: The 30% Minimum</h2>
<p>The most operationally significant change in the 2026 Guidelines is the establishment of a mandatory minimum: at least 30% of gross carbon credit revenue must flow to communities living within or directly adjacent to the project area. This applies from the first credit issuance and must be verified by an independent auditor appointed through NEMA's approved auditor list.</p>
<p>The 30% floor does not specify how funds are distributed within the community — that is left to the project developer and community governance structure to negotiate, subject to FPIC documentation. In practice, most Ugandan projects distribute community revenue through a combination of direct household payments (typically 15–20% of gross revenue) and a community development fund managed by an elected committee (typically 10–15%), which funds infrastructure such as water boreholes, health clinic supplies, and school materials.</p>
<p>Project developers who were operating under pre-2026 benefit-sharing arrangements have a 12-month transition window to bring agreements into compliance with the new minimum. NEMA has confirmed it will review existing project registrations at the next verification cycle, not retroactively.</p>

<h2>Free, Prior and Informed Consent: The New Process</h2>
<p>The FPIC requirements in the 2026 Guidelines align closely with the ILO Convention 169 framework and Verra's Social and Environmental Safeguards. FPIC must be documented before a project design document (PDD) is submitted for Verra validation, and must be renewed at each five-year verification cycle.</p>
<p>The FPIC process as defined by NEMA requires: (1) a community mapping exercise identifying all households within the project boundary and 5km buffer zone, (2) a minimum of three separate community information sessions conducted in the local language (Luganda, Runyankore, or the relevant regional language), (3) a vote by a quorum of adult community members — with the threshold set at two-thirds approval for project commencement, and (4) an independent facilitator to conduct and document the vote, drawn from NEMA's approved facilitator registry.</p>

<h2>Uganda's NDC and Article 6 Alignment</h2>
<p>Uganda's updated NDC, submitted to the UNFCCC in 2021, commits to a 22% unconditional emissions reduction and a 24.7% conditional reduction by 2030 relative to a business-as-usual baseline. The government has indicated that voluntary carbon market projects registered with NEMA will be counted toward the conditional NDC target, with corresponding adjustments applied when credits are used as ITMOs under Article 6.2.</p>
<p>For corporate buyers intending to use Ugandan credits in jurisdictions that require Article 6-compliant offsets — which is increasingly the case under EU CSRD and emerging national regulations — NEMA registration and the corresponding adjustment process is a prerequisite. NEMA has committed to processing ITMO letter of authorisation requests within 90 days of application.</p>

<h2>How to Register a VCS Project in Uganda</h2>
<p>The practical pathway for a new VCS project seeking NEMA registration runs as follows: (1) Submit a Project Concept Note to NEMA's Climate Change Division — this is a 10–15 page overview document covering project boundaries, methodology, additionality argument, and preliminary community engagement. (2) Receive a No-Objection Certificate (NOC) from NEMA — typically within 60 days if the concept note is complete. (3) Complete Verra validation with an accredited auditor. (4) Submit the validated PDD and Verra registration confirmation to NEMA for national registry listing. (5) Establish benefit-sharing agreement and FPIC documentation, reviewed by NEMA at first verification.</p>
<p>Green Earth Group's development team has navigated this process for the Bulindi project (VCS 1571 / GS 12226) and is available to advise project developers and landowners considering registration under the 2026 framework.</p>`,
    },
  },
  {
    slug: "lake-victoria-blue-carbon-opportunity",
    tag: "Finance",
    date: "March 2026",
    readTime: 7,
    title: {
      en: "Lake Victoria Blue Carbon: The $800M Opportunity Nobody Is Talking About",
    },
    excerpt: {
      en: "Uganda's share of Lake Victoria shoreline wetlands represents one of Africa's largest unregistered blue carbon opportunities — with potential for 400,000+ annual verified credits under VCS wetland methodology.",
    },
    content: {
      en: `<p class="lead">Uganda's 200-kilometre shoreline on Lake Victoria — the world's second-largest freshwater lake by surface area — is fringed by one of the most carbon-dense and ecologically rich wetland systems in East Africa. The papyrus swamps, riparian forests, and shallow lake margins that characterise the Ugandan lakeshore have never been systematically assessed for voluntary carbon market development. That is beginning to change — and the numbers are significant.</p>

<h2>Uganda's Lake Victoria Shoreline: The Geography</h2>
<p>Uganda holds the northern shore of Lake Victoria, with the Entebbe Peninsula and the Ssese Islands forming the westernmost extent of the country's lake frontage. The shoreline spans from Mutukula at the Tanzanian border in the south, running north through Masaka District, around the Entebbe headland, and east through Wakiso, Kampala, and Mukono Districts to the Jinja-Buvuma area where the Nile exits the lake.</p>
<p>The wetland fringe along this shoreline — classified as Ramsar-listed wetlands in several sections — covers an estimated 85,000–110,000 hectares when accounting for papyrus swamp, open lake margin, seasonal floodplain, and riparian forest strips. Of this total, preliminary satellite analysis suggests that approximately 45,000–65,000 hectares retain intact or near-intact wetland vegetation with measurable carbon stock above and below the waterline.</p>

<h2>Papyrus Wetlands: Why the Carbon Numbers Are High</h2>
<p>Papyrus (Cyperus papyrus) swamps are among the most productive freshwater ecosystems on Earth in terms of above-ground biomass production. A healthy papyrus stand generates 30–55 tonnes of dry biomass per hectare per year, much of which dies back annually and accumulates in the permanently waterlogged, anoxic sediment layer below the root mat — a layer that can extend 3–7 metres in depth in mature East African papyrus systems.</p>
<p>Unlike terrestrial forests, where much of the annual biomass dies, decomposes, and returns carbon to the atmosphere within 1–3 years, papyrus sediment carbon is effectively permanent under waterlogged conditions. Field measurements from analogous papyrus systems in Rwanda and the Congo margin suggest that intact papyrus swamps sequester and permanently store 8–18 tonnes of CO₂ equivalent per hectare per year — two to four times the per-hectare rate of mature tropical forest.</p>
<p>Applied to Uganda's Lake Victoria shoreline: if 50,000 hectares of papyrus wetland were brought under VCS wetland carbon project development, a conservative sequestration estimate of 8 tCO₂/ha/yr would yield 400,000 verified credits annually. At current blue carbon pricing of $18–$30 per credit, that is $7.2M–$12M per year. At the upper range of sequestration and pricing, the number approaches $50M annually — making this one of the largest untapped single-country blue carbon opportunities in sub-Saharan Africa.</p>

<h2>VM0033: The Applicable Methodology</h2>
<p>Freshwater wetland carbon projects in Uganda would apply Verra's VM0033 — Tidal Wetland and Seagrass Restoration methodology — or the emerging VM0047 framework for freshwater and peatland systems currently in Verra's public consultation pipeline. VM0033 is the more established of the two, covering both above-ground and below-ground carbon sequestration with a well-documented approach to permanence and leakage accounting.</p>
<p>Key VM0033 requirements for a Lake Victoria project include: establishment of a carbon baseline using soil core sampling across representative wetland zones, satellite-verified mapping of wetland extent and condition at project start, permanent monitoring plots with annual biomass and soil carbon re-measurement, and a leakage buffer deduction (typically 10–20% of gross credits) to account for the risk that wetland degradation elsewhere in the landscape might offset project gains.</p>
<p>VM0033 also requires demonstration of additionality — that the wetland conservation would not have occurred without carbon finance. In the Lake Victoria context, additionality is robustly demonstrable: Uganda's lakeshore wetlands face documented encroachment pressure from urban expansion (Wakiso and Mukono Districts are among Uganda's fastest-growing areas), agricultural drainage for rice and vegetable cultivation, and sand dredging operations. The deforestation and wetland conversion rates along the lakeshore are quantifiable from Landsat time series going back to 2000.</p>

<h2>Fisheries Co-Benefits: The Economic Multiplier</h2>
<p>Lake Victoria supports the livelihoods of approximately 3 million people directly employed in fishing, fish processing, and fish trade across Uganda, Tanzania, and Kenya. Uganda's Nile perch and tilapia exports are the country's third-largest foreign exchange earner after coffee and tourism.</p>
<p>Intact lakeshore wetlands function as critical nursery habitat for juvenile Nile perch and tilapia. Papyrus swamp and riparian forest provide shelter from predators, food in the form of invertebrate communities that colonise root systems, and water quality buffering that maintains the oxygenated shallow-water conditions fish larvae require. Studies from comparable East African lake systems show 30–50% reductions in juvenile fish population density in areas where wetland fringe has been cleared.</p>
<p>A blue carbon project that restores or protects Lake Victoria wetlands therefore delivers a direct measurable fisheries co-benefit — which can be monetised under emerging biodiversity credit frameworks and strengthens the CCB certification case. For project developers, this stacks multiple revenue streams: carbon credits, potential biodiversity credits, and the reputational premium that fisheries community co-benefits generate with buyers.</p>

<h2>The Finance Gap: Why Nobody Has Done This Yet</h2>
<p>Despite the scale of the opportunity, Uganda's Lake Victoria wetlands have zero registered voluntary carbon projects as of Q1 2026. Three structural barriers explain the gap.</p>
<p>First, land tenure complexity: Uganda's lakeshore wetlands are classified as government-protected under the National Environment Act, but customary user rights for fishing communities and adjacent farmers create a layered tenure system that requires careful legal structuring to establish project rights without displacing existing users.</p>
<p>Second, monitoring cost: VM0033 requires soil carbon measurements using peat cores — a technically demanding and equipment-intensive process that adds $80,000–$150,000 to project setup costs compared to a standard REDD+ forest project. This upfront capital requirement creates a barrier for local developers without institutional financing.</p>
<p>Third, developer capacity: Ugandan carbon project development capacity is concentrated in the agroforestry sector (building on the Bulindi project template). Blue carbon expertise — specialists in tidal and freshwater wetland methodology — is scarce in East Africa and typically requires engagement with international technical consultants at significant cost.</p>

<h2>The Investment Case</h2>
<p>For investors willing to absorb the higher setup cost, the investment case for Lake Victoria blue carbon is compelling. The asset class is supply-constrained globally — freshwater and coastal blue carbon projects represent less than 3% of all VCS credits issued — and demand for high-integrity wetland credits is growing as corporate buyers recognise the permanence advantage over terrestrial forest credits. Blue carbon credits also carry political and reputational resilience: no government has ever cancelled a wetland carbon project.</p>
<p>Green Earth Group is conducting preliminary feasibility assessments for blue carbon project development along two sections of Uganda's Lake Victoria shoreline. For investors, project co-developers, or landowners with lakeshore tenure interested in the opportunity, we are available for initial discussions.</p>`,
    },
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
