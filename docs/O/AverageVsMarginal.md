---
sidebar_position: 5
title: "EWIF — Average vs. Marginal Water Intensity"
---

<!--
Grounded in: SWI-Specification.md § Methodology summary → Indirect operational water (principle only).
Guideline Requirement 5 (Average vs. Marginal Water Intensity) — SWI-Guidelines-Requirements-Analysis.md.
Part C, Open Question 1 — SWI-Guidelines-Requirements-Analysis.md.
-->

# EWIF — Average vs. Marginal Water Intensity

**In short:** there are two different, both legitimate, ways to answer
"how thirsty is this electricity" — the average across everything
generating power right now, or the specific plant that would ramp up if
your workload used more. They can give different numbers for the same
situation, and the SSWG hasn't yet settled which one implementers should
default to.

:::caution Open methodological question
This is an **open, unresolved question** within the SSWG, not a settled
methodology choice. The specification deliberately takes no position on
average versus marginal water intensity. This page presents both
approaches and the considerations relevant to each — it does not tell you
which to use. See [Open Methodological Questions](../OpenQuestions.md) for
current status.
:::

## The two approaches

**Average water intensity** uses the water intensity of the overall
generation mix supplying a region over a given period — every plant
feeding the grid, weighted by its share of generation.

**Marginal water intensity** uses the water intensity of whichever
generation source responds to a *change* in demand — the plant that would
ramp up or down if the software's electricity consumption changed at the
margin.

A meaningful concept of marginal water intensity does exist for
electricity generation, in the same way it does for carbon intensity, and
the two approaches — average and marginal — can produce materially
different results for the same workload, in the same region, over the
same period.

## Why this remains unresolved

Unlike some other open questions in this guidance, this one is not simply
awaiting a dataset. It is a genuine methodological dispute about which
question an SWI assessment is trying to answer:

- An **average** intensity answers: *what water is this workload's fair
  share of, given how the grid actually generates electricity today?*
- A **marginal** intensity answers: *what water impact would result from a
  marginal change in this workload's demand?*

Both are legitimate questions; they are not interchangeable, and neither
is a rounding error of the other. Which one is more appropriate can depend
on what the SWI result is being used for — reporting an existing baseline
versus evaluating the effect of a proposed change (see
[Comparing an SWI to a Baseline](https://github.com/Green-Software-Foundation/SWI)
in the specification).

## Status

A revised EWIF methodology brief addressing this question, among others,
has been committed to within the SSWG. Until that work concludes and the
group reaches a position, implementers should:

- Choose whichever approach — average or marginal — best matches the
  purpose of the assessment.
- Disclose explicitly which approach was used; do not present an average
  figure and a marginal figure as if they were the same metric.
- Expect this guidance to be updated, and this caution notice removed or
  narrowed, once the SSWG resolves the question.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/SWI-guide/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Average+vs+Marginal+Water+Intensity).
