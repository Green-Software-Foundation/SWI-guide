---
sidebar_position: 8
title: "Stress Characterisation — Practical Application"
---

<!--
Grounded in: SWI-Specification.md § Methodology summary → Stress adjustment.
Guideline Requirement 7 (Stress Characterisation — Application Guidance) — SWI-Guidelines-Requirements-Analysis.md.
Part C, Open Question 3 — SWI-Guidelines-Requirements-Analysis.md (annual vs monthly backtesting).
-->

# Stress Characterisation — Practical Application

The specification states that stress adjustment applies at the location of
electricity generation, never at the computing facility. This page covers
how to put that into practice.

## Apply at generation, never at the compute facility

This is worth stating plainly because it is easy to get backwards: the
characterization factor for indirect operational water is drawn from
**where the power plant is**, not from where the software's servers are.
If a workload runs in one region but draws power that was generated
elsewhere — common in interconnected grids — the stress factor follows the
generation location. The operating location of the software is never a
valid substitute, even when it would be more convenient to use.

This generalises across all three water components: direct operational
water is characterised at the facility's own watershed (since that's where
the water use actually happens), embodied water at the location of the
relevant lifecycle process, and indirect operational water at the
generation location as above.

## Plant level, then aggregate — never the other way round

Characterization factors are applied **per power plant**, using
watershed-boundary coordinates to map each plant to the correct stress
region. Aggregation up to a grid-region figure happens *after* stress
adjustment, not before. Aggregating first would average away exactly the
plant-to-plant variation — different watersheds, different hydro
classifications (see [Hydropower Classification](../O/Hydropower.md)) —
that stress characterisation exists to capture.

## Granularity: annual vs. monthly

Power plant water consumption is not constant through the year — it varies
with season and ambient temperature. WRI Aqueduct provides monthly stress
data specifically to let implementers capture that variation rather than
smoothing it away with an annual average.

:::caution Pending backtesting
Whether the difference between an annual and a monthly approach is large
enough to matter in practice — and therefore whether monthly granularity
should be a default recommendation rather than a nice-to-have — is the
subject of a backtest committed to within the SSWG but not yet completed.
Until that backtest concludes and a recommendation is documented here,
treat monthly granularity as available and preferable where feasible, not
as a settled requirement. See
[Open Methodological Questions](../OpenQuestions.md) for status.
:::

Whatever temporal resolution is actually used, disclose it — the
specification requires this explicitly, and it matters more than usual
here given the pending question above.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/SWI-guide/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Stress+Characterisation+Practical+Application).
