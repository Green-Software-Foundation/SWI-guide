---
sidebar_position: 15
title: Terminology and Implementer Language Guide
---

<!--
Grounded in: SWI-Specification.md § Terms and definitions, § Introduction.
Guideline Requirement 10 (Terminology Clarifications and Language Guidance) — SWI-Guidelines-Requirements-Analysis.md.
Part C, Open Question 4 — SWI-Guidelines-Requirements-Analysis.md (ISO 14046 compatibility).
-->

# Terminology and Implementer Language Guide

**In short:** a handful of terms on this site get misread or conflated
more often than the rest — this page collects them in one place, in plain
language, so you don't have to reconstruct the precise meaning from
context every time one comes up.

## "Attributable to" vs. "intensity of"

You may see an SWI assessment described either as measuring water
"attributable to" a software system, or as measuring the "water intensity
of" a software system. These are not quite interchangeable, and the second
formulation is the preferred one: describe SWI as **a methodology for
calculating the water intensity of a software system**, rather than
leading with "attributable to." "Attributable to" can be read as implying
a stronger causal claim than the methodology actually supports — SWI
allocates and estimates water use associated with a system using
disclosed methods and assumptions; it does not claim to trace every litre
to a single definitive cause. "Intensity of," matching the SCI's own
framing ("Software *Carbon Intensity*"), better reflects what the number
actually is: a rate, calculated under stated assumptions.

## SWI-C and SWI-W

You'll see these written as `SWI_c` and `SWI_w` throughout this guidance
and the specification. They are the consumption-basis and withdrawal-basis
results respectively — two separate metrics with two separate calculation
paths, not two ways of expressing the same number. See
[Water Accounting Basis](../AccountingBasis/index.md) for the full
explanation of the underlying consumption/withdrawal distinction, and the
specification's Reporting clause for which of the two (and their
stress-adjusted counterparts) are mandatory versus recommended.

## WUE is not a substitute for SWI

Water Usage Effectiveness (WUE) is a **facility-level operational
metric** — water consumed per unit of energy at a given data centre. It is
useful, and it's one input option for estimating
[direct operational water](../O/Direct.md). But it is not itself an SWI
value: it doesn't cover indirect operational water, it doesn't cover
embodied water, and it isn't expressed per functional unit. Reporting a
facility's WUE is not the same thing as reporting that facility's tenants'
`SWI_c` or `SWI_w`, and one should never be presented as standing in for
the other.

## Consumption vs. withdrawal, in plain terms

Industry usage often blurs these together as just "water use." They are
precise, distinct technical terms in SWI:

- **Consumption** = water that's gone, from that watershed's perspective —
  like water that evaporated from a cooling tower.
- **Withdrawal** = water that was taken out, whether or not it came back —
  like river water drawn for cooling and discharged back into the river.

A useful test: if you returned the water to exactly where you got it, was
anything permanently lost? If yes, that portion is consumption. The act of
taking it out in the first place — regardless of what happened next — is
the withdrawal.

## What `shall`, `should`, and `may` mean

The specification uses ISO-standard modal verbs, and they are not
interchangeable pleasantries:

- **shall** — a requirement. An implementer following the specification
  must do this; there is no discretion.
- **should** — a recommendation. Strongly encouraged, but a documented,
  disclosed deviation is permitted where justified.
- **may** — a permission. This is one acceptable option among others; no
  particular choice is mandated.

When reading the specification, treat these words as load-bearing: a
"should" that gets silently treated as a "shall" over-constrains an
implementation unnecessarily, and a "shall" that gets treated as a "may"
produces a non-conformant assessment.

## ISO 14046:2014

:::caution Pending confirmation
Whether ISO 14046:2014 (*Environmental management — Water footprint —
Principles, requirements and guidelines*) is fully compatible with SWI's
specific consumption/withdrawal definitions is a review still in progress
within the SSWG. This guidance does not assert compatibility ahead of that
review concluding. See
[Open Methodological Questions](../OpenQuestions.md).
:::

ISO 14046:2014 is listed as a normative reference in the specification,
but its precise relationship to SWI's own terms and definitions is still
being confirmed. Until that review concludes, treat ISO 14046 as
directionally relevant background rather than a settled source of
additional requirements for SWI implementers.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/SWI-guide/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Terminology).
