---
sidebar_position: 16
title: Data Quality and Implementation Tiers
---

<!--
Grounded in: SWI-Specification.md § Methodology summary → General (disclosure requirements for modeled data).
Guideline Requirement 11 (Implementation Tiers and Data Quality Framework) — SWI-Guidelines-Requirements-Analysis.md.
-->

# Data Quality and Implementation Tiers

The specification tells implementers *what* to quantify. It deliberately
does not tell them exactly *which dataset* to use for every input — data
availability varies too much by region and by generation type for a single
prescribed source to work everywhere. This guidance instead provides a
tiered framework for evaluating whatever data source is chosen, modelled
directly on how the SCI framework handles grid carbon intensity data
quality: same shape of problem, same shape of answer.

## The three tiers

| Tier | Description | Disclosure requirement |
| --- | --- | --- |
| Tier 1 | Plant-level measured water consumption/withdrawal data (e.g. EIA-923 forms) | Preferred; disclose source and time period |
| Tier 2 | Regional grid-level data derived from plant-level aggregation | Acceptable; disclose methodology and source |
| Tier 3 | Default NREL 2011 intensity factors | Permitted as fallback; must be explicitly disclosed |

This tiering applies most directly to EWIF (see
[EWIF — Data Sources and Implementation Guidance](../O/EWIFDataSources.md)
for the tier-by-tier source mapping), but the same logic — prefer
measured, plant-level data; accept aggregated regional data with
disclosure; permit a disclosed default as a last resort — applies wherever
an SWI assessment needs a water intensity or stress figure and cannot
measure it directly.

## No fixed lookup table

GSF does not maintain, and has no plan to maintain, a single fixed set of
water-intensity numbers for implementers to look up and plug in. This is a
deliberate choice, not an oversight: water data availability, quality, and
methodology are evolving quickly enough across regions that a static
lookup table would go stale and could mislead implementers into treating a
snapshot as ground truth. This guidance instead points to methodology and
current data sources, and expects implementers to select and disclose
their own source for each input.

## Region-specific notes

| Region | Status |
| --- | --- |
| United States | Tier 1 data available now via EIA-923 (monthly and annual). |
| European Union | No equivalent Tier 1 source yet; expected around 2028. |
| India | Data availability improving as relevant legislation advances, ahead of most other regions outside the US. |

Where an implementer is working in a region without an available Tier 1 or
Tier 2 source, falling back to Tier 3 (disclosed) is expected and
permitted — the tiering exists to make that fallback visible and
comparable across reports, not to penalise implementers for data gaps that
are, at present, outside their control.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/SWI-guide/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Data+Quality).
