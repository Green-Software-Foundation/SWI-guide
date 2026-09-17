---
sidebar_position: 12
title: Water Accounting Basis
---

<!--
Grounded in: SWI-Specification.md § Terms and definitions (3.1–3.3), § Methodology summary → Water accounting basis.
-->

# Water Accounting Basis

Every water quantity in an SWI assessment has to be classified as one of
two things: consumption, or withdrawal. This classification is the **water
accounting basis**, and it is not optional or a matter of convenience —
the two describe genuinely different pressures on a water system and the
specification requires both to be quantified and reported.

## Consumption

**Water consumption** is water removed from the local water system and not
returned to the same watershed in a readily available form — water that is
evaporated, transpired, incorporated into products or waste, or otherwise
lost to that watershed. The clearest example: water that evaporates during
cooling-tower operation at a data centre or power plant. Once it has
evaporated, it is no longer available to that local watershed, even though
it hasn't been "destroyed" in any absolute sense.

## Withdrawal

**Water withdrawal** is water abstracted from a surface-water or
groundwater source, *regardless of whether it is subsequently returned*.
The clearest example: water drawn from a river for once-through cooling
and then discharged back into that same river. The water was withdrawn —
removed from the source, however briefly — even though most of it goes
back.

Every withdrawal event has a consumption event somewhere inside it (some
fraction of withdrawn water is typically lost to evaporation), but the two
numbers are not simply related by a fixed ratio — it depends entirely on
the cooling technology and process in question.

## Why they must never be summed or substituted

Consumption and withdrawal are different physical phenomena that stress
water systems differently, and the specification is explicit that they
**shall not be summed into a single water volume or SWI value.** A
facility that withdraws a large volume of water but returns nearly all of
it (once-through cooling) has a very different local impact from one that
consumes a smaller absolute volume outright (evaporative cooling) — adding
the two together would erase exactly the distinction that makes each
number meaningful.

## Both are required reporting outputs

```
W_c = W_O,c + W_M,c
SWI_c = W_c / R
```

```
W_w = W_O,w + W_M,w
SWI_w = W_w / R
```

Per the specification's Reporting clause, the consumption-basis results
(`SWI_c`, and its stress-adjusted counterpart `SWI_c^adj`) are
**mandatory**; the withdrawal-basis results (`SWI_w`, `SWI_w^adj`) are
**recommended** — reflecting, among other things, the withdrawal data gap
described on the [Direct Operational Water](../O/Direct.md) page. Neither
is an optional alternate to the other where both can be produced — `SWI_c`
and `SWI_w` answer different questions and both should be reported when
the underlying data supports it.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/SWI-guide/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Water+Accounting+Basis).
