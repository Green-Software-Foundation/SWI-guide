---
sidebar_position: 1
title: Operational Water
---

<!--
Grounded in: SWI-Specification.md § Terms and definitions (3.4–3.6), § Methodology summary → Operational water.
-->

# Operational Water

Operational water is the water used while a software system's
infrastructure is actually running — as distinct from
[embodied water](../M/index.md), which is used building that
infrastructure in the first place.

The specification splits operational water into two components:

$$W_O = W_O^{dir} + W_O^{ind}$$

- **[Direct operational water](./Direct.md)** ($W_O^{dir}$) — water used
  directly by the facility the software executes in: cooling,
  humidification, and similar facility operations.
- **[Indirect operational water](./Indirect.md)** ($W_O^{ind}$) — water
  used generating the electricity the software consumes, at whichever
  power plant supplied it.

Both are quantified separately for the consumption basis and the
withdrawal basis (see [Water Accounting Basis](../AccountingBasis/index.md)):

$$W_{O,b} = W_{O,b}^{dir} + W_{O,b}^{ind}, \quad b \in \{c, w\}$$

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
