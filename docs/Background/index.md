---
sidebar_position: 3
title: Background — The Water Footprint of Software
---

<!--
Grounded in: SWI-Specification.md § Introduction ("How software systems use water", "Key concepts").
Guideline Requirement 9 (Motivating Context and Background) — SWI-Guidelines-Requirements-Analysis.md.
-->

# Background — The Water Footprint of Software

**In short:** software doesn't use water the way a factory does, but it
causes water use all the same — through the electricity it draws, the
data centres it runs in, and the hardware it's built from. Unlike carbon,
where a tonne of CO₂ matters the same everywhere, water matters differently
depending on exactly where it was used — which is the one idea on this
page worth sitting with longest.

## Why water, and why now

Software does not use water directly in any way most practitioners are
used to thinking about. It uses electricity, and it runs on hardware — and
both of those things are surprisingly water-intensive. Think of it as
software's **water footprint**: the water use that follows, indirectly but
measurably, from running and building the systems software depends on.

That water footprint reaches software through three separate pathways:

1. **Direct water use at data centres.** The facilities where software
   actually executes use water for cooling, humidification, and other
   operations. This scales with the energy the workload consumes.
2. **Indirect water use through electricity generation.** Power plants use
   water — often a great deal of it — to generate the electricity a
   software system consumes. How much depends on both the software's
   energy intensity and the water intensity of whatever is generating its
   electricity.
3. **Embodied water in hardware manufacturing.** The servers, network
   equipment, and other infrastructure software runs on required water
   throughout their own lifecycle: extracting raw materials, manufacturing
   components and devices, and transporting them.

## Four concepts you need before the details

Water intensity measurement introduces ideas that carbon intensity
measurement does not need, because the impact of water use is highly
dependent on context. Before going further into any specific component of
the SWI formula, it helps to have these four in place:

- **Consumption vs. withdrawal** — two different things happen to water
  when it's used, and they matter differently. See
  [Water Accounting Basis](../AccountingBasis/index.md).
- **Stress adjustment** — the same volume of water means something very
  different depending on how scarce water already is where it happened.
  See [Stress Characterisation](../CF/index.md).
- **Geographic attribution** — *where* a water use event happens is not
  incidental detail; it's central to what the number means (see below).
- **Operational vs. embodied** — water used while software runs, versus
  water used building the hardware it runs on. See
  [Operational Water](../O/index.md) and [Embodied Water](../M/index.md).

## The one thing that has no SCI analogue: location matters

If you're coming to SWI from the Software Carbon Intensity (SCI)
specification, this is the idea to sit with, because SCI has nothing quite
like it. Carbon dioxide is a global pollutant: a tonne of CO₂ has
essentially the same climate effect no matter which power plant emitted
it. Water is not like that. Water stress is **regional**. A cubic metre of
water consumed in a basin that is already under severe stress represents a
fundamentally more significant impact than the same cubic metre consumed
somewhere water-abundant — and water saved in one basin does nothing to
help a different basin under stress. There is no "netting out" across
geography the way there implicitly can be with carbon.

This has a direct, practical consequence that recurs throughout this
guidance: **the location where software runs is not necessarily the
location where its water impact happens.** A software system might run in
a facility in one place, while the electricity it consumes was generated
at a power plant somewhere else entirely, under very different water
conditions. The specification is explicit that the software's operating
location is never a valid substitute for the location where the
underlying water use actually occurred — direct operational water is
attributed to the facility's watershed, indirect operational water to
wherever the electricity was generated, and embodied water to wherever the
relevant lifecycle process took place. Getting this geographic attribution
right is arguably the single most consequential correctness question in
an SWI assessment.

## A sense of scale

Public water-use disclosures from major cloud providers — for example,
hyperscaler reporting that breaks down per-customer water use, including
both consumption and withdrawal — give a useful, if illustrative, sense of
just how much water sits behind everyday cloud computing. This guidance
does not treat any specific disclosed figure as an SWI reference value;
they are examples of the kind of transparency that exists in the industry
today, not inputs to plug into a calculation.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/SWI-guide/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Background).
