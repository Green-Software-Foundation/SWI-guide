---
sidebar_position: 3
title: Indirect Operational Water
---

<!--
Grounded in: SWI-Specification.md § Methodology summary → Operational water → Indirect operational water.
Guideline Requirement 4 (EWIF Data Source Guidance) — SWI-Guidelines-Requirements-Analysis.md (principle only; detail on subpages).
-->

# Indirect Operational Water

Indirect operational water (`W_O^ind`) is water used generating the
electricity a software system consumes — at the power plant, not at the
compute facility. It is calculated as:

```
W_O,b^ind = E × EWIF_b   (for each basis b: c = consumption, w = withdrawal)
```

where `E` is the energy consumed by the software system, in kWh, and
`EWIF_b` is the Electricity Water Intensity Factor for the selected basis
— litres of water consumed or withdrawn per kWh generated.

## The EWIF principle

The specification is deliberately principles-based here: `EWIF_b` should
reflect the water consumption or withdrawal of the power plants generating
the electricity, **at their point of generation** — not at the facility
where the software runs, and not averaged across a broad, loosely-defined
region if a more precise figure is available. The specification requires
three things of `EWIF_b`:

1. It matches the water accounting basis (`c` or `w`) used elsewhere in
   the calculation.
2. It corresponds to the geographic region, electricity supply, and
   reporting period of the energy actually consumed.
3. Its temporal resolution is disclosed — if only annual data is
   available, that has to be said, not silently treated as equivalent to
   monthly data.

Everything below that principle — which datasets to use, how to handle
generation types with unusual methodological wrinkles, whether to use
average or marginal intensity — is genuinely implementation detail, which
is exactly why it lives here rather than in the specification. See:

- **[EWIF — Data Sources and Implementation Guidance](./EWIFDataSources.md)**
  for the concrete datasets available today and how to choose between
  them.
- **[EWIF — Average vs. Marginal Water Intensity](./AverageVsMarginal.md)**
  for an open methodological question the specification deliberately does
  not resolve.
- **[EWIF — Hydropower Classification and Treatment](./Hydropower.md)** for
  the generation type the SSWG found most methodologically unsettled.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/SWI-guide/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Indirect+Operational+Water).
