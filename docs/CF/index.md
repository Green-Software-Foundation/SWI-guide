---
sidebar_position: 7
title: Stress Characterisation
---

<!--
Grounded in: SWI-Specification.md § Key concepts → Stress adjustment, § Methodology summary → Stress adjustment.
-->

# Stress Characterisation

The same physical volume of water does not carry the same consequence
everywhere. One cubic metre consumed in a water-abundant region and one
cubic metre consumed in a severely stressed basin are physically identical
but represent very different pressures on the systems they came from.
Stress characterisation is the mechanism that lets SWI reflect that
difference.

## The mechanism

A **characterization factor**, `CF_b,i`, is a dimensionless multiplier
applied to a physical water volume to reflect the water-stress conditions
of the region or watershed `i` where that water use actually occurred, for
accounting basis `b`. Applying it converts an unadjusted, physical-volume
result into a stress-adjusted one:

```
SWI_b^adj = sum over region i of (W_b,i × CF_b,i) / R
(for each basis b: c = consumption, w = withdrawal)
```

Setting `CF_b,i = 1` for every region recovers the unadjusted result —
but the specification is explicit that an unadjusted result must always be
*reported* as a physical water intensity, never presented as if it were
stress-adjusted.

Neither result replaces the other. The unadjusted metric supports basic
physical water accounting and efficiency comparisons; the stress-adjusted
metric supports interpreting that physical use in the context of local
water conditions. Both are required or recommended reporting outputs (see
the Specification's Reporting clause) precisely because they answer
different questions.

## Recommended methods

- **AWARE** is recommended for stress-adjusting **water consumption**
  (`SWI_c^adj`).
- **WRI Aqueduct** is recommended for stress-adjusting **water
  withdrawal** (`SWI_w^adj`).

Both methods are scoped to **freshwater only** — a boundary decision
discussed further on the
[Scope Boundary Decisions](../ScopeBoundaries/index.md) page. Whichever
method is used, its version, geographic resolution, temporal resolution,
and any mapping or aggregation assumptions must be disclosed alongside the
result.

For the practical mechanics of applying these — where in the pipeline
stress adjustment happens, at what geographic granularity, and at what
temporal resolution — see
[Stress Characterisation — Practical Application](./PracticalApplication.md).

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/SWI-guide/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Stress+Characterisation).
