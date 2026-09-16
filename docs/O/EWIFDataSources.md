---
sidebar_position: 4
title: "EWIF — Data Sources and Implementation Guidance"
---

<!--
Grounded in: SWI-Specification.md § Methodology summary → Indirect operational water.
Guideline Requirement 4 (EWIF Data Source Guidance and Implementation Detail) —
SWI-Guidelines-Requirements-Analysis.md.
-->

# EWIF — Data Sources and Implementation Guidance

The specification states the EWIF principle — reflect the water intensity
of electricity generation at its point of generation, matched to the
correct accounting basis, region, and period — but deliberately leaves
dataset selection to implementers. This page collects the primary sources
the SSWG has discussed as candidates.

## Core principle: use the most granular data available

Before any specific source: the guiding rule agreed by the working group is
to **use the most granular data available** for the electricity actually
consumed, and to disclose whichever source was used. Regional or default
factors exist as a fallback for when granular data isn't available — not
as a first resort.

## Primary data sources

**NREL 2011 water intensity factors.** The dominant dataset in this space
today, and usable as a disclosed default when plant-level data is
unavailable. Worth understanding its limitation directly: much of the
secondary literature on electricity water intensity ultimately traces back
to this same 2011 NREL dataset. That circularity means independently
verified, ground-truth data outside the United States remains genuinely
limited — using NREL 2011 as a fallback is reasonable, but it should not
be mistaken for an independently corroborated global baseline.

**USGS water-use surveys (2008–2020 reanalysis).** Supplements NREL 2011
with updated plant-level water consumption figures for the United States.

**EIA-923 Forms (United States).** The primary source for plant-level
water consumption and withdrawal data, reported monthly and annually.
Electricity Maps already processes this same data for carbon-intensity
purposes, and extending equivalent processing to water is understood not
to be significantly harder — this is one of the more tractable
near-term data pipelines available to implementers working in the US.

**WRI Aqueduct.** Primarily a stress-characterization dataset (see
[Stress Characterisation](../CF/index.md)), but also relevant here: it
provides monthly data at watershed-boundary resolution, which is what
enables plant-level, seasonally-aware stress adjustment once EWIF values
are available.

## Regional availability

| Region | Status |
| --- | --- |
| United States | Available now, via EIA-923 (monthly and annual). |
| European Union | Not yet available; an equivalent is expected around 2028. |
| India | Legislation is advancing data availability faster than in most other regions, though a standardised plant-level source is not yet in place. |

Where granular data genuinely isn't available for a region — which today
includes most of the world outside the US — that gap, and the fallback
used to cover it, should be disclosed explicitly.

## A data quality tier framework

The SSWG drew an explicit parallel to how the SCI framework handles grid
carbon intensity data: the specification defines *what* is required, this
guidance indicates *where* to get it and what quality tier it sits at, and
implementers select a source and disclose it. The full tier table lives on
the [Data Quality and Implementation Tiers](../DataQuality/index.md) page;
for EWIF specifically, the tiers map as:

| Tier | EWIF source | Disclosure requirement |
| --- | --- | --- |
| Tier 1 | Plant-level measured data (e.g. EIA-923) | Preferred; disclose source and time period |
| Tier 2 | Regional grid-level data derived from plant-level aggregation | Acceptable; disclose methodology and source |
| Tier 3 | Default NREL 2011 regional factors | Permitted as fallback; must be explicitly disclosed |

GSF does not maintain, and does not currently plan to maintain, a single
fixed set of EWIF numbers for implementers to plug in. This guidance
points to methodology and sources; it is not a lookup table of ground
truth.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/SWI-guide/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+EWIF+Data+Sources).
