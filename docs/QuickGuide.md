---
sidebar_position: 2
title: Worked Examples
---

<!--
Grounded in: SWI-Specification.md § Procedure, § Methodology summary.
Guideline Requirement 3 (Worked Examples) — SWI-Guidelines-Requirements-Analysis.md.
-->

# Worked Examples

This page walks one small, concrete scenario through every term in the SWI
formula, the same way the SCI Guidance Quick Guide walks an
`e2-standard-4` VM through `SCI = (E×I) + M per R`. All numbers below are
**illustrative placeholders**, clearly labelled as such — they demonstrate
the mechanics of the calculation, not published water-intensity factors.
Do not treat any figure on this page as a real measurement.

## The scenario

A containerised API workload runs on a single virtual machine in a cloud
region, handling a steady stream of requests. We want its SWI, on both a
consumption and a withdrawal basis, for one month of operation.

## Step 1 — Bound

Following the spec's **Bound** step: the software boundary for this example
is the containerised application and the virtual machine it runs on, for
one calendar month. We exclude the client devices making requests and any
downstream services not controlled by this workload.

## Step 2 — Scale

Following **Scale**: this API's costs scale with traffic, so we choose
$R = $ **1,000 API requests** as the functional unit. (An illustrative
example only — a real assessment would justify this choice against how the
specific workload actually scales, per the
[Functional Unit](./R/index.md) guidance.)

## Step 3 — Define

Following **Define**: for this illustrative walkthrough we use modelled
estimates throughout — energy from the cloud provider's usage dashboard,
WUE and EWIF from published facility/regional figures (illustrative
values, not sourced from a specific real facility for this example),
embodied water from a time-share/resource-share allocation of the VM's
underlying hardware.

## Step 4 — Quantify

**Inputs (illustrative placeholders):**

| Input | Placeholder value |
| --- | --- |
| Energy consumed, $E$ (for 20,000 requests this month) | 5 kWh |
| Facility $WUE$ | 0.3 L/kWh *(illustrative)* |
| $EWIF_c$ (consumption basis) | 1.8 L/kWh *(illustrative)* |
| $EWIF_w$ (withdrawal basis) | 4.2 L/kWh *(illustrative)* |
| Embodied water allocated to this VM, $W_{M,c}$ / $W_{M,w}$ | 0.4 L / 0.9 L *(illustrative, already time-share/resource-share allocated)* |

**Direct operational water (consumption basis):**

$$W_{O,c}^{dir} = E \times WUE = 5 \times 0.3 = 1.5\ \text{L}$$

*(No standardised withdrawal equivalent to WUE exists — see
[Direct Operational Water](./O/Direct.md) for why direct operational
withdrawal is left unquantified in this example.)*

**Indirect operational water:**

$$W_{O,c}^{ind} = E \times EWIF_c = 5 \times 1.8 = 9.0\ \text{L}$$

$$W_{O,w}^{ind} = E \times EWIF_w = 5 \times 4.2 = 21.0\ \text{L}$$

**Totals for 20,000 requests this month:**

| | Consumption | Withdrawal |
| --- | --- | --- |
| $W_O^{dir}$ | 1.5 L | *not quantified (data gap)* |
| $W_O^{ind}$ | 9.0 L | 21.0 L |
| $W_M$ | 0.4 L | 0.9 L |
| **$W_b$** | **10.9 L** | **21.9 L** (indirect + embodied only) |

**Step 5 — Report, unadjusted SWI, scaled to $R = 1{,}000$ requests:**

$$SWI_c = \frac{10.9}{20} = 0.545\ \text{L per 1,000 requests}$$

$$SWI_w = \frac{21.9}{20} = 1.095\ \text{L per 1,000 requests}$$

A full report would also apply characterization factors ($CF_{c,i}$,
$CF_{w,i}$) for the region where the electricity was generated, per
[Stress Characterisation](./CF/index.md), to produce $SWI_c^{adj}$ and
$SWI_w^{adj}$ — omitted here since this walkthrough is illustrating the
unadjusted mechanics only.

## What this example is not

A single-VM, single-month illustration like this is deliberately small. A
more rigorous worked example — stress-testing the formula across multiple
power generation units feeding a single data centre, with real
characterization data — has been proposed within the SSWG and is expected
to be contributed as a full page or case study once drafted. It is not
fabricated here; when it lands, it will supersede this page as the primary
worked example and this page will likely narrow to the introductory role
the SCI Quick Guide's `e2-standard-4` example plays. The
[Workday AI worked example](https://github.com/Green-Software-Foundation/sci-guide)
in the SCI-for-AI guidance is the precedent for the depth expected of that
fuller example.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/SWI-guide/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Worked+Examples).
