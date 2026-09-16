# SWI Guidelines — Requirements Analysis
## Green Software Foundation | Software Standards Working Group
### Synthesised from SSWG Session Transcripts: June – September 2026

---

> **Purpose of this document:** This analysis identifies peripheral discussions from SSWG meetings that have not been incorporated into the formal SWI Specification, and consolidates them into a structured set of requirements that could form the basis of a companion SWI Guidelines document. The distinction between specification and guidelines follows the precedent established by the SCI framework: the specification contains normative requirements; the guidelines document provides implementer-facing explanation, data source guidance, worked examples, and interpretive context.

---

## Summary of Key Discussions

The key discussions included the following:

- The SSWG formally agreed (10 September 2026) that worked examples and explanatory diagrams should be housed in a companion guidelines document, decoupled from the formal specification, to protect against ISO-level version control obligations when those materials require updating.
- Across multiple sessions, substantive discussions were held on EWIF methodology, data source selection, hydropower classification, stress characterisation application, and scope boundary decision-making — none of which have been incorporated into the normative specification text but are materially significant for implementers.
- The SCI guidelines document and the SEI explainer slide deck were identified as reference models for the format and scope of the SWI guidelines.
- Henry Richardson's principles-based framing — that the specification states the principle and the guidelines explain how to fulfil it — was agreed by the group and should govern the structure of both documents.

---

## Part A — What the Specification Contains (for Reference)

The following normative content is confirmed as residing in the SWI Specification and should not be duplicated in the guidelines document:

- **Core formula:** SWI = W / R (water use divided by functional unit), with SWI-C and SWI-W as separate required reporting metrics
- **Scope section:** Applicability to cloud services, on-premise applications, ML workloads, serverless functions, and end-user device applications
- **Structural logic flow (6-step):** Basic formula → water accounting basis → stress characterisation → direct/indirect operational decomposition → embodied water → final combined formula
- **Stress characterisation placement:** Applied at the location of electricity generation (not the computing facility), introduced immediately after the master formula — agreed and adopted following Yi Ding's September 2026 revision
- **Operational/embodied boundary structure:** Operational (direct and indirect sub-categories) and embodied as the primary structural hierarchy, mirroring the SCI framework
- **Terms and definitions:** SWI-C, SWI-W, WUE, EWIF, Characterisation Factor (CF), functional unit, consumption, withdrawal, time share, resource share, stress-adjusted and unadjusted SWI
- **Normative references:** ISO/IEC 21031:2024 (SCI); ISO 14046:2014 (Water Footprint — pending group confirmation of compatibility)
- **EWIF principle (principles-based):** The specification will state only the principle — that EWIF should reflect the water consumption and withdrawal of power plants at their point of electricity generation — with implementation detail reserved for the guidelines

---

## Part B — Peripheral Discussions Suitable for Guidelines

The following content areas emerged across SSWG sessions but have not been incorporated into the normative specification. Each represents a requirements candidate for the SWI Guidelines document.

---

### Guideline Requirement 1: Purpose and Rationale — Why Guidelines Exist Alongside the Specification

**Source sessions:** 10 September 2026; 3 September 2026

- The guidelines document must open with a clear statement of its relationship to the specification: it is a companion, not a replacement, and does not carry normative weight.
- The rationale for decoupling the documents is that examples, diagrams, and data source references require more frequent revision than the specification. If housed in the specification, any update would trigger ISO-level version control obligations.
- The SCI guidelines document should be cited as the structural precedent.
- The SEI explainer slide deck (a visual walkthrough with annotated diagrams) should be cited as a format reference.

**Suggested guideline section:** Introduction and Document Governance

---

### Guideline Requirement 2: Formula Explanation, Annotated Diagrams, and Visual Aids

**Source sessions:** 10 September 2026; 3 September 2026; 9 July 2026

- The guidelines must include an annotated breakdown of the SWI formula, explaining each variable and its relationship to the others. This mirrors the approach taken in the Miroboard visual model developed during the specification review sessions.
- Yi Ding proposed incorporating diagrams equivalent to those used on the Miroboard to illustrate the formula decomposition — this should be a core deliverable of the guidelines.
- The SEI explainer slide deck was proposed by Gadhu Sundaram as a model: a visual walkthrough with annotated diagrams explaining each component of the formula. The guidelines should adopt a similar approach.
- Jon Turnbull noted the formula's structural resemblance to the SCI approach (water divided by functional units), and suggested this parallel be made explicit in the guidelines to assist readers already familiar with the SCI.

**Suggested guideline section:** Formula Walkthrough and Visual Reference

---

### Guideline Requirement 3: Worked Examples

**Source sessions:** 10 September 2026; 9 July 2026; July 2026 (Policy WG)

- The group agreed (10 September 2026) that worked examples should be developed and housed in the guidelines document.
- Jon Turnbull proposed — and the group supported — a worked example stress-testing the SWI formula across a realistic scenario involving multiple power generation units and a single data centre. He offered to prepare a draft for group review.
- The Workday example used in the SCI for AI specification was cited as the appropriate precedent for worked example structure and depth.
- The SCARF paper (Yanran Wu, Inez Hua, and Yi Ding, Purdue University — published at HotCarbon'25 and ACM SIGENERGY Energy Informatics Review, Vol. 5, Issue 2) was identified during the Policy WG session as a working real-world example that could inform or be referenced in the guidelines.
- Worked examples should be versioned independently and updated without triggering a specification revision cycle.

**Suggested guideline section:** Worked Examples

---

### Guideline Requirement 4: EWIF Data Source Guidance and Implementation Detail

**Source sessions:** 10 September 2026; 3 September 2026

The EWIF (Electricity Water Intensity Factor) section of the specification will be principles-based only. The guidelines must carry the full implementation detail. Based on group discussions, the following should be addressed:

**Primary data sources:**
- **NREL 2011 water intensity factors** — the dominant dataset for water intensity of electricity generation; may be used as a default when plant-level data is unavailable, subject to implementer disclosure. Note: Ryan Sholin flagged circularity in the research landscape — many secondary sources trace back to this same NREL 2011 dataset, so ground-truth data remains limited outside the US.
- **USGS survey (2008–2020 reanalysis)** — supplements NREL 2011 data; provides updated plant-level water consumption figures for the US.
- **EIA 923 Forms (US)** — primary source for plant-level water consumption and withdrawal data, available monthly and annually. Electricity Maps already processes this data for carbon purposes; Ryan Sholin confirmed that extending it to water is not significantly more complex.
- **WRI Aqueduct** — proposed for stress adjustment at plant level, using watershed boundary coordinates to map each power plant to the appropriate stress region; provides monthly data enabling seasonal stress-adjusted calculations.

**Regional data availability:**
- US plant-level data: available via EIA 923 forms (monthly and annual).
- EU equivalent: not yet available; expected from 2028.
- India: legislation is advancing data availability more rapidly than in other regions.
- Implementers should disclose which data source has been used, in line with the principle of transparency adopted from the SCI framework.

**Principles-based approach:**
- The core principle agreed by the group: **use the most granular data available**.
- Where granular plant-level data is unavailable, NREL 2011 regional factors may be used as defaults, provided the implementer discloses this explicitly.
- The guidelines should provide a data quality tier framework — similar to the approach used in the SCI for grid carbon intensity — identifying preferred sources, acceptable alternatives, and minimum disclosure requirements for each tier.

**Suggested guideline section:** EWIF — Data Sources and Implementation Guidance

---

### Guideline Requirement 5: Average vs. Marginal Water Intensity

**Source sessions:** 3 September 2026; 10 September 2026

- Henry Richardson confirmed that a meaningful concept of marginal water intensity exists and that average and marginal approaches may yield materially different results.
- The group agreed the specification must not specify a position on average versus marginal, as the question remains unresolved and has been disputed.
- The guidelines should present both approaches, explain their differences, and identify the conditions under which each may be more appropriate.
- Ryan Sholin committed to addressing this in the revised EWIF brief; the guidelines should adopt and expand on that treatment once resolved.
- This is an **open methodological question** that the guidelines must flag as such pending group resolution.

**Suggested guideline section:** EWIF — Average vs. Marginal Water Intensity

---

### Guideline Requirement 6: Hydropower Classification

**Source sessions:** 3 September 2026

The group identified hydropower as the most methodologically unsettled generation type in the EWIF context. The guidelines must address:

- **Reservoir hydro:** The NREL factor accounts for reservoir evaporation, apportioned across multiple industries (agriculture, electricity generation, and others). The guidelines must explain how this apportionment works and how implementers should handle it.
- **Run-of-river hydro:** No reservoir; negligible or zero freshwater consumption. Implementers must be able to identify and classify each hydropower installation accordingly.
- **Plant-level data requirement:** Henry Richardson confirmed that stress adjustment must be performed at plant level before any aggregation to the grid region level. Plant classification data is available from EIA 923 forms in the US.
- **Industry apportionment:** The guidelines should explain how to allocate reservoir evaporation across the relevant industries using available apportionment datasets.

**Suggested guideline section:** EWIF — Hydropower Classification and Treatment

---

### Guideline Requirement 7: Stress Characterisation — Application Guidance

**Source sessions:** 10 September 2026; 3 September 2026; 23 July 2026

The specification states that stress adjustment must be applied at the location of electricity generation, not at the computing facility. The guidelines must explain how to do this in practice:

- **AWARE framework** — consumption-based stress adjustment. Appropriate for SWI-C calculations.
- **WRI Aqueduct** — withdrawal-based stress adjustment; provides monthly data enabling seasonal variation to be captured. Appropriate for SWI-W calculations. Note: both AWARE and WRI Aqueduct are scoped to freshwater only.
- **Granularity — annual vs. monthly:** Henry Richardson raised the importance of monthly granularity, noting that power plant water consumption varies with season and ambient temperature. WRI Aqueduct provides monthly stress data. Ryan Sholin agreed to backtest the difference between annual and monthly approaches; the guidelines should document the outcome of that backtesting and provide a recommendation.
- **Plant-level stress application:** Stress factors must be applied at the level of individual power plants, using watershed boundary coordinates. Aggregation to the grid-region level follows stress application, not precedes it.

**Suggested guideline section:** Stress Characterisation — Practical Application

---

### Guideline Requirement 8: Water Scope Boundary Decision Documentation

**Source sessions:** 10 September 2026; 3 September 2026; 11 June 2026

A recurring theme across all sessions is that boundary decisions — what is included and excluded — must be deliberate, research-backed, and explicitly documented. The guidelines should contain a section devoted to this:

**Consumption vs. withdrawal:**
- Both SWI-C (consumption) and SWI-W (withdrawal) are required metrics; they must not be conflated.
- The guidelines should explain the material difference between the two and their respective environmental significance.

**Freshwater vs. saltwater:**
- The current specification scope is freshwater. The group discussed whether to include saltwater withdrawal.
- Henry Richardson's position: any inclusion or exclusion must be a deliberate, research-backed decision — not a default assumption. He noted that saltwater withdrawal is regulated in the US due to its ecological impact, citing at least one major generator on the US West Coast.
- Hongliu Cao confirmed that including saltwater would require a separate stress characterisation framework, as WRI Aqueduct and AWARE address freshwater only.
- Gadhu Sundaram supported drawing an explicit boundary for this version, with clear documentation and a commitment to revisit in a future version.
- Ryan Sholin outlined a range of potential scope options: freshwater potable consumption only (narrowest); freshwater consumption and withdrawal; freshwater with water stress; with saltwater withdrawal added (broadest).
- **Guidelines requirement:** Document the boundary decision taken, the reasoning behind it, and what would be required to expand the scope in a future version.

**Non-potable vs. potable water:**
- The group noted that non-potable and potable freshwater may warrant distinction; the guidelines should clarify the current treatment and flag this as a potential future scope expansion.

**Yi Ding's principle (endorsed by Henry Richardson):** The specification must be explicit and deliberate about each boundary decision, documenting the rationale rather than allowing decisions to emerge as unexamined defaults. This principle should be restated in the guidelines as a design philosophy.

**Suggested guideline section:** Scope Boundary Decisions — Rationale and Documentation

---

### Guideline Requirement 9: Motivating Context and Background — Why Water Matters for Software

**Source sessions:** 27 August 2026; 11 June 2026; Policy WG 21 July 2026

The specification's introduction does not currently carry sufficient motivating context. The guidelines should supply this, addressing:

- The relationship between software operation, electricity generation, and water use — establishing why water intensity is a meaningful metric for software systems.
- Geographic attribution: water consumed or withdrawn in a water-stressed region affects local availability in a way that has no analogue in global aggregation. This is why geographic specificity is essential to SWI in a way that has no direct parallel in the SCI.
- The "water footprint" concept as an umbrella framing — Hongliu Cao proposed this as an accessible entry point before introducing specific technical terms progressively.
- The four key concepts to be introduced early: consumption vs. withdrawal, stress characterisation, geographic attribution, and the operational/embodied boundary.
- Hyperscaler disclosure examples: AWS per-customer water withdrawal data (updated to include withdrawal as well as consumption) may serve as a real-world reference point for the scale of the problem.

**Suggested guideline section:** Background — The Water Footprint of Software

---

### Guideline Requirement 10: Terminology Clarifications and Language Guidance

**Source sessions:** 27 August 2026; 11 June 2026

Several terminology and language issues were raised across sessions that are too explanatory for the specification but material for implementers:

- **"Attributable" vs. "intensity of a software system":** Henry Richardson flagged "attributable to a software system" as potentially problematic; the preferred formulation is "a methodology for calculating the water intensity of a software system." The guidelines should explain this distinction and the reasoning behind it.
- **SWI-C vs. SWI-W:** The guidelines should clearly explain both metrics, their separate calculation paths, and their respective reporting requirements.
- **WUE as a complementary metric:** WUE (Water Usage Effectiveness) is a data centre operational metric, distinct from SWI. The guidelines should explain the relationship and clarify that WUE does not replace SWI-C or SWI-W.
- **Consumption vs. withdrawal:** These terms have precise technical meanings that are frequently conflated in industry usage. The guidelines should provide accessible definitions with worked examples of each.
- **Normative language (shall/should/may):** The specification uses ISO-standard modal verbs. The guidelines should explain what each means in practice for implementers.
- **ISO 14046:2014 relationship:** Once the group has confirmed compatibility (action: Sean McIlroy and Yi Ding), the guidelines should explain how SWI relates to ISO 14046 and what, if anything, ISO 14046 requires of implementers in the SWI context.

**Suggested guideline section:** Terminology and Implementer Language Guide

---

### Guideline Requirement 11: Implementation Tiers and Data Quality Framework

**Source sessions:** 10 September 2026; 3 September 2026

The group drew an explicit parallel with the SCI framework for grid carbon intensity data:

- The specification defines what is required.
- The guidance document indicates where to obtain the data, acknowledges data quality tiers, and requires implementers to disclose their chosen source.
- Implementers select a data source and disclose it.

The guidelines should establish a tiered framework for SWI data sources analogous to this approach:

| Tier | Description | Disclosure Requirement |
|---|---|---|
| Tier 1 | Plant-level measured water consumption/withdrawal data (e.g. EIA 923 forms) | Preferred; disclose source and time period |
| Tier 2 | Regional grid-level data derived from plant-level aggregation | Acceptable; disclose methodology and source |
| Tier 3 | Default NREL 2011 intensity factors | Permitted as fallback; must be explicitly disclosed |

- Ryan Sholin confirmed he would stop short of recommending a single fixed set of numbers for GSF to maintain annually. Instead, the guidelines should provide methodology and data source guidance, with region-specific considerations flagged.
- Region-specific notes should be included for the US (EIA 923 available), EU (data expected 2028), and India (advancing data availability).

**Suggested guideline section:** Data Quality and Implementation Tiers

---

## Part C — Open Methodological Questions to be Resolved Before Finalising Guidelines

The following questions were raised in SSWG sessions and remain unresolved. The guidelines cannot be finalised on these points until the group has reached a decision:

| # | Question | Status | Responsible |
|---|---|---|---|
| 1 | Average vs. marginal water intensity — which approach(es) should implementers use? | Open — Ryan Sholin to address in revised EWIF brief | Ryan Sholin |
| 2 | Freshwater vs. saltwater scope — should saltwater withdrawal be included in this version of the spec? | Open — requires research support; Ryan Sholin to prepare a structured "menu" of options | Ryan Sholin |
| 3 | Annual vs. monthly EWIF update cycle — what does backtesting of the difference reveal? | Open — Ryan Sholin committed to backtesting | Ryan Sholin |
| 4 | ISO 14046:2014 as normative reference — is it compatible with SWI's consumption/withdrawal definitions? | Open — awaiting review by Sean McIlroy and Yi Ding | Sean McIlroy / Yi Ding |
| 5 | Non-potable vs. potable freshwater distinction — should the spec distinguish between these? | Flagged but not resolved | Group |
| 6 | Reservoir hydro apportionment — agreed methodology for allocating evaporation across industries | Partially addressed; needs resolution in guidelines | Ryan Sholin / Yi Ding |

---

## Consolidated Action Items (Relevant to Guidelines Development)

| # | Action | Owner | Target |
|---|---|---|---|
| 1 | Develop engineer-friendly SWI guidelines document (decoupled from spec), modelled on the SCI guidelines approach | Sean McIlroy / Navveen Balani | To be introduced 17 September 2026 |
| 2 | Prepare a draft worked example stress-testing the SWI formula across multiple power generation units and a local data centre | Jon Turnbull | TBC |
| 3 | Revise EWIF methodology brief: add withdrawal; address saltwater scope with supporting research; incorporate average vs. marginal discussion; reflect principles-based framing | Ryan Sholin | 17 September 2026 |
| 4 | Prepare a structured "menu" of all possible EWIF and water boundary considerations for group review | Ryan Sholin | Ongoing |
| 5 | Confirm ISO 14046:2014 compatibility with SWI consumption/withdrawal definitions before merging as normative reference | Sean McIlroy / Yi Ding | Outstanding |
| 6 | Share updated EWIF brief as GSF Google Doc for collaborative editing | Ryan Sholin | 17 September 2026 |

---

## Proposed Topics for the Next Agenda

- Introduction of the SWI guidelines document structure and scope (Sean McIlroy / Navveen Balani)
- Review Jon Turnbull's draft worked example
- EWIF revised methodology brief — structured review of the "menu" of boundary and scope options
- Agreement on average vs. marginal approach
- Agreement on saltwater scope for this version
- ISO 14046 compatibility — confirm or defer as normative reference

---

## Self-Validation Notes

This document is a synthesis across multiple session transcripts, not a verbatim extraction from a single source. All material claims are grounded in confirmed minutes and self-validation tables from the following SSWG sessions:

| Session | Primary Topics Drawn On |
|---|---|
| 11 June 2026 | SWI naming, scope framework, operational/embodied hierarchy, WRI scopes |
| 2 July 2026 | Formula structure alignment with SCI, open questions list |
| 9 July 2026 | Formula W/R, EWIF concept, SWI-C vs SWI-W, WUE |
| 21 July 2026 (Policy WG) | SWI White Paper, SCARF paper reference, data source review |
| 23 July 2026 | AWARE, WRI Aqueduct, characterisation factor, granularity |
| 21 August 2026 | ISO 14046, attributable language, scope section, geographic attribution |
| 3 September 2026 | EWIF methodology, hydropower, EIA 923, average vs. marginal, saltwater |
| 10 September 2026 | Guidelines document proposal, worked examples, principles-based EWIF framing |
