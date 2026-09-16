---
sidebar_position: 6
title: "EWIF — Hydropower Classification and Treatment"
---

<!--
Grounded in: SWI-Specification.md § Methodology summary → Indirect operational water, § Stress adjustment (plant-level requirement).
Guideline Requirement 6 (Hydropower Classification) — SWI-Guidelines-Requirements-Analysis.md.
Part C, Open Question 6 — SWI-Guidelines-Requirements-Analysis.md (apportionment methodology).
-->

# EWIF — Hydropower Classification and Treatment

Of all the generation types an EWIF calculation might encounter,
hydropower is the one the SSWG identified as the most methodologically
unsettled. Getting a plant's classification wrong here has an outsized
effect on the result, because the two kinds of hydro sit at opposite
extremes of water intensity.

## Reservoir hydro

A reservoir hydro plant impounds water behind a dam, creating a reservoir
with a large surface area exposed to evaporation. The NREL factor for
reservoir hydro accounts for that evaporation — but the water evaporating
from a reservoir is not attributable to electricity generation alone. The
same reservoir typically also serves agriculture, flood control, and other
industries, so the evaporation is **apportioned** across those uses rather
than charged entirely to electricity.

That apportionment is the genuinely unsettled part: it requires a
dataset describing how a given reservoir's water is shared across its
uses, and applying that split before treating any of the evaporation as
attributable to electricity generation. This apportionment methodology is
tracked as an [open question](../OpenQuestions.md) pending further
resolution within the SSWG — implementers should disclose which
apportionment dataset and method they used, since it is not yet a solved,
standardised step.

## Run-of-river hydro

A run-of-river plant has no meaningful reservoir: water flows through
generation and continues downstream essentially unimpeded. There is no
large standing reservoir surface to evaporate from, so run-of-river hydro's
freshwater consumption is negligible to zero. Treating a run-of-river
plant with a reservoir-hydro factor would substantially overstate its
water intensity.

## Classifying a plant correctly

Getting this distinction right requires plant-level classification data —
in the United States, EIA-923 forms identify which type a given hydro
facility is. This is one more reason plant-level data is preferable to
regional aggregates for indirect operational water: a regional average
that blends reservoir and run-of-river hydro together can misrepresent
both.

## Plant level before aggregation

This generalises beyond hydro: stress adjustment (and, implicitly, correct
EWIF treatment) must happen **at the level of the individual power plant**,
before any aggregation up to a grid-region figure. Aggregating first and
adjusting for stress afterward loses exactly the information — like
hydro's reservoir/run-of-river split — that plant-level data was meant to
preserve. See
[Stress Characterisation — Practical Application](../CF/PracticalApplication.md)
for how this ordering applies more generally.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/SWI-guide/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Hydropower+Classification).
