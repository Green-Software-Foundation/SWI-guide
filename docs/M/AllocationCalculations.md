---
sidebar_position: 11
title: "Embodied Water — Allocation Calculations"
---

<!--
Grounded in: SWI-Specification.md § Methodology summary → Embodied water (TS/RS/TiR/EL/RR/ToR definitions).
-->

# Embodied Water — Allocation Calculations

This page walks through choosing the four inputs that determine how much
of a shared piece of hardware's embodied water is allocated to a given
software system: $TiR$, $EL$, $RR$, and $ToR$. If you have allocated
embodied carbon under the SCI specification, this will be a very familiar
exercise — the mechanics are the same, applied to a water total instead of
a carbon total.

## Time share: $TS = TiR / EL$

- **$EL$ — expected operational lifetime.** How long the hardware is
  expected to remain in service before replacement. Use the
  manufacturer's or operator's own expected-lifetime figure where
  available; where it isn't, a documented, disclosed assumption is
  acceptable (e.g. a typical server refresh cycle for the deployment
  context).
- **$TiR$ — time reserved for the software.** How long, within that
  lifetime, this specific software system had the hardware reserved for
  it. For a long-running dedicated server, this may simply be the full
  reporting period. For hardware that is provisioned and torn down
  dynamically (e.g. autoscaled instances, serverless execution
  environments), this should reflect actual reservation time for the
  reporting period being assessed, not the hardware's full lifetime.

## Resource share: $RS = RR / ToR$

- **$ToR$ — total resources available.** The hardware's total capacity in
  whatever resource dimension is most meaningful for the allocation — CPU
  cores, memory, or another consistent unit.
- **$RR$ — resources reserved for the software.** The software's actual
  claim on that capacity. For a workload with a dedicated resource
  reservation (a fixed number of vCPUs, a fixed memory allocation), this is
  usually straightforward. For workloads that share resources dynamically
  with other tenants, this should reflect an average or peak reservation
  over the reporting period, disclosed as such.

## Shared cloud hardware, specifically

Cloud hardware is almost always shared, which makes both $TS$ and $RS$
non-trivial to pin down precisely. Some practical points:

- Where a cloud provider discloses per-instance resource entitlements
  (e.g. "this instance type is allocated N vCPUs of a M-vCPU physical
  host"), that ratio is a reasonable basis for $RS$.
- Where time-sharing is dynamic (e.g. serverless, autoscaling), $TS$
  should be computed from actual measured reservation time for the
  reporting period, not from a theoretical maximum.
- Whatever data source and method is used for either share, disclose it —
  the specification's general disclosure requirements for allocation
  methods and assumptions apply here just as much as to the water totals
  themselves.

For where the underlying lifecycle water totals ($TW_b$) come from, see
[Embodied Water — Datasets](./Datasets.md).

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/SWI-guide/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Embodied+Water+Allocation).
