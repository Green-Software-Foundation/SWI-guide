---
sidebar_position: 1
title: Formula Walkthrough and Visual Reference
---

<!--
Grounded in: SWI-Specification.md § Symbols and abbreviated terms, § Methodology summary.
Guideline Requirement 2 (Formula Explanation, Annotated Diagrams, and Visual Aids) —
SWI-Guidelines-Requirements-Analysis.md.
Section 1b of the SWI Guidance build brief (Formula Card method): every formula below
follows the same four-step pattern — plain-English sentence, shape, small worked
example, precise notation — rather than a symbol-definition table.
-->

# Formula Walkthrough and Visual Reference

This page walks through every formula in the SWI specification, one at a
time, the same way each time: first in plain words, then as a "recipe"
shape, then with a small worked number so you can see the arithmetic
actually happen, and only then with the precise notation from the
specification. If a formula here is unfamiliar, read it top to bottom —
each one builds on the one before it.

The worked numbers throughout are a single running, hypothetical example —
a service handling 100,000 requests in a month — used purely to show the
arithmetic chaining together. **They are illustrative placeholders, not
published water-intensity factors.** Do not treat any number on this page
as real data.

## The decomposition, as a tree

![Decomposition tree: total water W splits into operational water W_O and embodied water W_M; operational water splits further into direct and indirect; every leaf resolves to a consumption or withdrawal basis, then a characterization factor.](/img/formula-decomposition-tree.svg)

This recreates, in diagram form, the decomposition the SSWG worked through
on its shared Miroboard during specification review; it is not a literal
reproduction of that board. Each leaf is quantified twice — once as a
physical volume (unadjusted) and once weighted by local water stress
(stress-adjusted) — before being divided by the functional unit to produce
an SWI value. The formula cards below walk down this tree from the top.

## Master formula: `SWI = W / R`

SWI answers one question — for every single thing your software did, how
much water did that cost?

**Shape:** total water used ÷ how much the software did = water cost per
unit of work.

**Worked:** a service used 500 L of water in a month and handled 100,000
requests that month → 500 ÷ 100,000 = 0.005 L per request. *(illustrative)*

**Precise notation:** `SWI = W / R`, where `W` is the total water
attributable to the software system and `R` is the functional unit — the
thing you're measuring water "per," such as an API call, a user, or an AI
training run (see [Functional Unit](./R/index.md)).

## Splitting the total: `W = W_O + W_M`

Every drop in that total came from one of two buckets: water used while
the software was actually running, or water used building the hardware it
runs on in the first place.

**Shape:** running-water bucket + hardware-making-water bucket = total
water.

**Worked:** 500 L total = 420 L operational + 80 L embodied. *(illustrative)*

**Precise notation:** `W = W_O + W_M`, where `W_O` is
[operational water](./O/index.md) and `W_M` is
[embodied water](./M/index.md).

## Splitting operational water: `W_O = W_O^dir + W_O^ind`

The running-water bucket itself splits two ways: water the data centre
uses directly to cool itself, and water used somewhere else entirely — at
the power plant — to generate the electricity the data centre is drawing.

**Shape:** cooling-tower water + power-plant water = operational water.

**Worked:** 420 L = 150 L direct + 270 L indirect. *(illustrative)*

**Precise notation:** `W_O = W_O^dir + W_O^ind`, split further per
accounting basis as `W_O,b = W_O,b^dir + W_O,b^ind` (see
[Water Accounting Basis](./AccountingBasis/index.md) for what "basis"
means here).

## Direct operational water: `W_O,c^dir = E × WUE`

Direct water scales with how much electricity your workload used,
multiplied by how thirsty that particular data centre is per unit of
electricity — the same shape as "miles driven × gallons per mile = gallons
used," just water and electricity instead of fuel and distance.

**Shape:** energy used × water-per-unit-of-energy (the facility's WUE) =
direct operational water.

**Worked:** 300 kWh × 0.5 L/kWh = 150 L. *(illustrative)*

**Precise notation:** `W_O,c^dir = E × WUE`, in L/kWh. This formula only
covers *consumption* — there's currently no equivalent, widely-used
formula for direct operational *withdrawal*, and that's a disclosed
limitation of current methodology, not an oversight. See
[Direct Operational Water](./O/Direct.md) for the full picture, including
that gap.

## Indirect operational water: `W_O,b^ind = E × EWIF_b`

Indirect water follows exactly the same shape as direct water — it's just
measuring thirst at the power plant instead of the data centre.

**Shape:** energy used × water-per-unit-of-energy-generated (the
Electricity Water Intensity Factor, or EWIF) = indirect operational water.

**Worked:** 300 kWh × 0.9 L/kWh = 270 L. *(illustrative)*

**Precise notation:** `W_O,b^ind = E × EWIF_b`. Worth saying explicitly:
this is the *same* `E` as the direct-water formula above — one energy
number, asked two different "how thirsty" questions. See
[Indirect Operational Water](./O/Indirect.md).

## Embodied water: `W_M,b = TW_b × TS × RS`

Embodied water asks: what's your fair share of the water it took to build
the machine you're borrowing? You're only charged for the slice of its
lifetime you actually used, and the slice of its capacity you actually
used — not the water it took to build the whole thing.

**Shape:** total water to build the whole machine × (fraction of its life
you used) × (fraction of its capacity you used) = your share. Like
splitting a shared taxi fare by both how many stops you rode for *and* how
many people were in the car.

**Worked:** building the server cost 4,000 L across its lifetime; you used
it for 1 month out of an expected 48-month life (a **time share** of
1/48); you used 4 of its 32 CPUs (a **resource share** of 4/32); your
share = 4,000 × (1/48) × (4/32) ≈ 10.4 L. *(illustrative)*

**Precise notation:** `W_M,b = TW_b × TS × RS`, where `TS = TiR / EL` and
`RS = RR / ToR` — `TiR` is time reserved for the software, `EL` is the
hardware's expected operational lifetime, `RR` is resources reserved for
the software, and `ToR` is total resources available. See
[Embodied Water](./M/index.md).

## Splitting by accounting basis: `W_c = W_O,c + W_M,c` and `W_w = W_O,w + W_M,w`

Do the whole add-up above twice, not once — once counting only water that
left the local watershed for good (**consumption**), and again counting
all water pulled from the ground or a river regardless of whether it came
back (**withdrawal**). These are two different questions about two
different kinds of pressure on a water system, not two ways of asking the
same thing — so they're never averaged or summed together.

**Precise notation:** `W_c = W_O,c + W_M,c` and `W_w = W_O,w + W_M,w`;
generally `SWI_b = W_b / R` for each basis `b` (`c` = consumption, `w` =
withdrawal). See [Water Accounting Basis](./AccountingBasis/index.md) for
why these can never be conflated.

## Stress adjustment: `SWI_b^adj = Σᵢ(W_b,i × CF_b,i) / R`

This asks a second question on top of the first — not just how much water
did this cost, but how much did it matter, given where it happened? A
litre taken from a place with plenty of water counts for less than a litre
taken from a place that's already running dry.

**Shape:** for each place your water use happened, multiply the water used
there by that place's scarcity score; add those all up; divide by the
functional unit.

**Worked:** 150 L direct water used in Region A (scarcity score 1.2) + 270 L
indirect water generated in Region B (scarcity score 3.5) →
(150 × 1.2) + (270 × 3.5) = 180 + 945 = 1,125 stress-weighted litres ÷
100,000 requests ≈ 0.01125 L per request (stress-adjusted). Compare that
directly to the unadjusted 420 ÷ 100,000 = 0.0042 L per request from the
operational-only figures above — geography alone changed the answer by
more than 2.5×. *(illustrative)*

**Precise notation:** `SWI_b^adj = (sum over region i of W_b,i × CF_b,i) / R`,
where `CF_b,i` is the scarcity score — the **characterization factor** —
for basis `b` in region `i`. See
[Stress Characterisation](./CF/index.md).

## The parallel to SCI

Readers coming from the Software Carbon Intensity (SCI) specification will
recognise this shape. SWI follows the same structural pattern (ISO/IEC
21031:2024), decomposed the same way:

| SCI | SWI | Relationship |
| --- | --- | --- |
| `E` (energy) and `I` (grid carbon intensity) | `W_O^dir` and `W_O^ind` (operational water) | Operational carbon is one multiplication (`E × I`); operational water is two parallel calculations — one for the facility itself, one for the electricity behind it — because water, unlike carbon intensity, has a meaningful *direct* component at the facility as well as an *indirect* one at the power plant. |
| `M` (embodied carbon) | `W_M` (embodied water) | Structurally identical: both use a time-share × resource-share allocation of a hardware total across the software sharing that hardware. |
| `R` (functional unit) | `R` (functional unit) | Identical in concept — pick the unit that matches how the software scales. |
| *(no equivalent)* | `CF_b,i` (characterization factor) | SWI's one genuinely new mechanism. Carbon dioxide's climate effect does not depend on where it's emitted; water stress is local, so SWI needs an extra step — stress adjustment — that SCI has no analogue for. |

If you already know SCI, the fastest way to think about SWI is: *the same
`E`/`M`/`R` skeleton, water counted twice (consumption and withdrawal)
instead of once, and a stress-weighting step bolted on because location
matters for water in a way it doesn't for carbon.*

The small worked numbers above exist to make each individual formula's
arithmetic click — they're deliberately minimal and don't need to form one
continuous scenario. For a fuller, single, start-to-finish walkthrough
that chains everything together on one real-feeling scenario, following
the specification's five-step Procedure, see
[Worked Examples](./QuickGuide.md).

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/SWI-guide/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Formula+Walkthrough).
