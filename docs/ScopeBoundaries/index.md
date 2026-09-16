---
sidebar_position: 14
title: Scope Boundary Decisions — Rationale and Documentation
---

<!--
Grounded in: SWI-Specification.md § Key concepts, § Terms and definitions (3.9 software boundary).
Guideline Requirement 8 (Water Scope Boundary Decision Documentation) — SWI-Guidelines-Requirements-Analysis.md.
Part C, Open Questions 2 and 5 — SWI-Guidelines-Requirements-Analysis.md.
-->

# Scope Boundary Decisions — Rationale and Documentation

## Design philosophy

Every boundary decision in an SWI assessment — what's included, what's
excluded, at what level of detail — should be deliberate and
research-backed, never an unexamined default. This principle applies as
much to how the specification itself was scoped as it does to how any
individual implementer draws their own software boundary. Where a boundary
decision has been made, this guidance documents the reasoning behind it and
what it would take to change it in future; where a decision has not yet
been made, this guidance says so rather than quietly picking an answer.

## Consumption vs. withdrawal

This boundary is already resolved and covered in full on the
[Water Accounting Basis](../AccountingBasis/index.md) page: both $SWI_c$
and $SWI_w$ are required or recommended reporting outputs, and they must
never be conflated or summed.

## Freshwater vs. saltwater

:::caution Open methodological question
Whether to expand scope to include saltwater withdrawal remains an open
question. See [Open Methodological Questions](../OpenQuestions.md).
:::

**Current scope: freshwater only.** The specification, its recommended
characterization methods (AWARE and WRI Aqueduct), and this guidance all
currently address freshwater. Saltwater withdrawal was discussed and
explicitly **not included** in this version.

Why this matters, and why it isn't a trivial exclusion: saltwater
withdrawal is regulated in the United States because of its ecological
impact — some coastal power generation facilities on the US West Coast are
subject to specific regulatory requirements around once-through seawater
cooling, for example. That regulatory attention reflects a real
environmental impact that a freshwater-only SWI simply does not capture
today. At the same time, including saltwater would require an entirely
separate characterization framework, since both AWARE and WRI Aqueduct are
scoped to freshwater only — there is currently no equivalent, adopted
stress-characterization method for saltwater to plug into the same
mechanism.

A structured menu of scope options has been proposed within the SSWG,
narrowest to broadest:

1. Freshwater potable consumption only *(narrowest)*
2. Freshwater consumption and withdrawal
3. Freshwater consumption and withdrawal, with stress adjustment
4. The above, plus saltwater withdrawal *(broadest)*

**The current specification sits at option 3** — freshwater, both
consumption and withdrawal, with stress adjustment applied. Moving to
option 4 in a future version would require, at minimum, an accepted
saltwater characterization methodology and a decision on how (or whether)
saltwater results would be reported alongside freshwater ones without
being summed into them.

## Potable vs. non-potable freshwater

This distinction has been noted by the SSWG but is **not yet resolved** in
either direction — it is not currently part of the specification's scope,
and no decision has been made to add it. It is flagged here as a candidate
for a future scope expansion, not as a gap that this guidance can close on
the group's behalf. See
[Open Methodological Questions](../OpenQuestions.md).

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/SWI-guide/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Scope+Boundary+Decisions).
