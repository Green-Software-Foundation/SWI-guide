---
sidebar_position: 10
title: "Embodied Water — Datasets"
---

<!--
Grounded in: SWI-Specification.md § Methodology summary → Embodied water (data-source requirement only).
No dataset content in this page is drawn from SWI-Guidelines-Requirements-Analysis.md — none was identified
in SSWG source material; this page states that gap rather than inventing a source.
-->

# Embodied Water — Datasets

This page is a placeholder for hardware lifecycle water datasets:
manufacturing, raw-material extraction, transportation, and end-of-life
treatment.

## There is currently no identified dataset

Unlike [indirect operational water](../O/EWIFDataSources.md), where NREL,
USGS, EIA-923, and WRI Aqueduct give implementers somewhere concrete to
start, no credible, public dataset for hardware lifecycle water intensity
has been identified in SSWG discussions to date. Rather than fill this gap
with an invented or unverified figure, this guidance states that plainly:
**as of this version, implementers have no standard reference source for
`TW_b` (total lifecycle water for a piece of hardware).**

This mirrors, in a more acute form, the same data-availability challenge
seen elsewhere in this guidance (compare
[EWIF's regional data gaps](../O/EWIFDataSources.md)) — but here there is
no fallback tier equivalent to NREL 2011 regional factors to reach for.

## What implementers can do today

- Use supplier- or manufacturer-disclosed lifecycle water figures where a
  hardware vendor publishes them, disclosing the source and its scope.
- Use organization-specific modelled estimates, with assumptions and
  methodology fully disclosed, consistent with the specification's general
  allowance for modelled data when measured data is unavailable.
- Treat any such figure as provisional, and expect this page to be
  updated as better sources emerge.

## Contributing a dataset

If you are aware of a public, credible dataset for hardware lifecycle
water — even a partial one, covering a specific component category or
manufacturer — please contribute it via the same intake process used for
[Case Studies](../CaseStudies.md): open an issue using the case-study
template, describing the dataset, its scope, its methodology, and its
limitations, and it will be reviewed per the
[Review Process](../ReviewProcess/Data.md).

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/SWI-guide/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Embodied+Water+Datasets).
