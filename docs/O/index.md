---
sidebar_position: 1
title: Operational Water
---

<!--
Grounded in: SWI-Specification.md § Terms and definitions (3.4–3.6), § Methodology summary → Operational water.
Formula Card per §1b of the SWI Guidance build brief.
-->

# Operational Water

**In short:** operational water is the water used while a software
system's infrastructure is actually running — as distinct from
[embodied water](../M/index.md), which is used building that
infrastructure in the first place. It splits two ways: water the data
centre uses directly to cool itself, and water used somewhere else
entirely — at the power plant — to generate the electricity the data
centre is drawing.

**Shape:** cooling-tower water + power-plant water = operational water.

**Worked:** a workload's operational water for one month totals 420 L —
150 L direct (at the facility) + 270 L indirect (at the power plant).
*(illustrative placeholder, not a real measurement)*

**Precise notation:**

```
W_O = W_O^dir + W_O^ind
```

- **[Direct operational water](./Direct.md)** (`W_O^dir`) — water used
  directly by the facility the software executes in: cooling,
  humidification, and similar facility operations.
- **[Indirect operational water](./Indirect.md)** (`W_O^ind`) — water
  used generating the electricity the software consumes, at whichever
  power plant supplied it.

Both are quantified separately for the consumption basis and the
withdrawal basis (see [Water Accounting Basis](../AccountingBasis/index.md)):

```
W_O,b = W_O,b^dir + W_O,b^ind   (for each basis b: c = consumption, w = withdrawal)
```

The direct/indirect split matters because the two components come from
different places, use different data, and — as the
[Direct Operational Water](./Direct.md) page explains — have different
levels of methodological maturity today. Indirect operational water is
where most of the implementation detail lives: see
[EWIF Data Sources](./EWIFDataSources.md),
[Average vs. Marginal Water Intensity](./AverageVsMarginal.md), and
[Hydropower Classification](./Hydropower.md).

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/SWI-guide/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Operational+Water).
