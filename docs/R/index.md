---
sidebar_position: 13
title: Functional Unit (R)
---

<!--
Grounded in: SWI-Specification.md § Terms and definitions (3.8), § Methodology summary → General, § Functional unit conversion.
-->

# Functional Unit (R)

$R$ is the reference unit an SWI value is expressed **per**: an API call, a
user, an AI training run, or whatever quantified performance
characteristic best describes how the software system actually scales.
Every SWI value is a rate — water per unit of $R$ — so choosing $R$ well is
foundational to the result being meaningful at all.

## Choosing $R$

The specification's own guidance is simple to state and easy to get wrong
in practice: **the functional unit should match how the software scales.**
A batch training job scales with training runs, not with wall-clock time;
a user-facing API scales with requests or active users, not with server
count. Pick the unit that tracks the thing that actually drives the
software's resource use, not the unit that happens to be easiest to
measure.

This is the same discipline the SCI specification applies to its own
functional unit — if you've chosen $R$ for an SCI assessment of the same
system, that choice is very likely to transfer directly to its SWI
assessment.

## Every component must scale to the same $R$

All elements of the SWI calculation — direct operational water, indirect
operational water, and embodied water — must be expressed against the
*same* functional unit before they're combined. It's not enough for the
final result to be labelled "per $R$"; each underlying component has to
actually have been measured or estimated on a basis that scales
consistently with $R$.

## Combining components with different functional units

Sometimes an aggregate SWI is composed from sub-components that were
naturally measured against different functional units — one service
scales per request, another per user session. Where that happens, the
specification requires:

- All components to share the same functional unit, water accounting
  basis, adjustment status (unadjusted or stress-adjusted), system
  boundary, and a compatible characterization methodology before they can
  be summed.
- Any component using a different functional unit to be **converted** to
  the aggregate's functional unit before aggregation — with the conversion
  factor and its assumptions fully disclosed.
- Consumption and withdrawal results never aggregated with one another,
  and unadjusted and stress-adjusted results never aggregated with one
  another — this is the same non-substitution principle covered on the
  [Water Accounting Basis](../AccountingBasis/index.md) page, extended to
  the point of aggregation.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/SWI-guide/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Functional+Unit).
