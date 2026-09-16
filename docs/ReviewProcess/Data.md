---
sidebar_position: 18
title: Review Process
---

<!--
Grounded in: SWI-Guidelines-Requirements-Analysis.md, Summary of Key Discussions (SCI guidelines/review process
cited as reference model; no separate SWI-specific intake workflow proposed as of this version).
-->

# Review Process

The SSWG has not proposed an SWI-specific intake workflow separate from
the one the SCI Open Data project already uses, so this guidance adapts
that process directly.

## Intake workflow

1. **Discussion** — Raise the submission (a data source, a case study, a
   correction) as a GitHub issue first, using the relevant template. This
   gives the SSWG and the wider community a chance to weigh in before any
   code or content is written.
2. **Draft PR against `dev`** — Once discussion settles, open a pull
   request targeting the `dev` branch containing the actual content
   change.
3. **Initial review** — A maintainer checks the submission for basic
   completeness: does it follow the expected structure, are sources cited,
   are assumptions disclosed.
4. **Working group review** — The SSWG reviews the submission for
   methodological soundness — does it correctly represent the SWI
   methodology, does it avoid resolving any open question on the group's
   behalf, is it appropriately scoped.
5. **Consistency review** — Periodically, on merge from `dev` to `main`,
   the full guidance is reviewed for internal consistency — do
   cross-references still resolve, do newly added pages contradict
   existing ones.

## What a submission should include

Whether the submission is a data source or a case study, it should
identify:

- **Title and description** — what is being submitted and why.
- **Dataset type or content category** — e.g. EWIF source, embodied-water
  dataset, worked case study.
- **Environment / context** — the generation type, region, or software
  system the submission applies to.
- **Computation logic** — how any figures were calculated or derived.
- **Submitter** — who is proposing this, for attribution and follow-up.
- **Dates** — when the underlying data was collected or the case study was
  performed.
- **Tags** — which page(s) of this guidance the submission relates to.
- **What gap it fills** — why this submission is needed; what was missing
  without it.
- **Assumptions** — every assumption made in producing the submission.
- **Exclusions** — what was deliberately left out, and why.

## Questions reviewers ask

When reviewing a data source submission specifically, reviewers should
consider:

- Is the dataset endorsed by a utility, grid operator, or original
  equipment manufacturer (OEM)?
- Is it public, and is it actively maintained (e.g. on GitHub)?
- Does it serve EWIF, embodied water, or both?
- What generation type and geographic context does it apply to?
- Is the methodology behind it explained clearly enough to evaluate?
- Are its exclusions and limitations stated?

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/SWI-guide/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Review+Process).
