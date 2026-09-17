---
sidebar_position: 9
title: Embodied Water
---

<!--
Grounded in: SWI-Specification.md § Methodology summary → Embodied water.
-->

# Embodied Water

**In short:** embodied water (`W_M`) is water used across the lifecycle of
the hardware and infrastructure a software system depends on —
raw-material extraction, component and hardware manufacturing,
transportation, and end-of-life treatment. It is distinct from
[operational water](../O/index.md), which is used while that hardware is
actually running. Embodied water asks: what's your fair share of the water
it took to build the machine you're borrowing? You're only charged for the
slice of its lifetime you actually used, and the slice of its capacity you
actually used — not the water it took to build the whole thing.

If you've worked with the SCI specification's embodied carbon (`M`)
calculation, this will already feel familiar — it is the identical
time-share/resource-share allocation mechanism, applied to a water total
instead of a carbon total.

## Allocating shared hardware

Most software does not have hardware to itself; it shares it with other
workloads. The specification allocates only the fraction of a piece of
hardware's total embodied water that this software is actually responsible
for.

**Shape:** total water to build the whole machine × (fraction of its life
you used) × (fraction of its capacity you used) = your share. Like
splitting a shared taxi fare by both how many stops you rode for *and* how
many people were in the car.

**Worked:** building the server cost 4,000 L across its lifetime; you used
it for 1 month out of an expected 48-month life (a **time share** of
1/48); you used 4 of its 32 CPUs (a **resource share** of 4/32); your
share = 4,000 × (1/48) × (4/32) ≈ 10.4 L. *(illustrative placeholder, not
real data)*

**Precise notation**, using the same time-share / resource-share mechanics
the SCI specification uses for embodied carbon:

```
W_M,b = TW_b × TS × RS   (for each basis b: c = consumption, w = withdrawal)
```

where `TW_b` is the hardware's total lifecycle water for basis `b`, `TS` is
the **time share** of the hardware's expected lifetime reserved for this
software, and `RS` is the **resource share** of the hardware's total
resources reserved for it. Both shares are themselves ratios:

```
TS = TiR / EL
RS = RR / ToR
```

- `TiR` — time reserved for the software; `EL` — the hardware's expected
  operational lifetime.
- `RR` — resources (e.g. CPU cores, memory) reserved for the software;
  `ToR` — total resources the hardware has available.

Putting it together:

```
W_M,b = TW_b × (TiR / EL) × (RR / ToR)
```

## What this requires in practice

The specification requires an embodied water estimate for **every**
hardware component that materially contributes within the software
boundary — not just the most obvious one (e.g. the server), but network
equipment, storage, and other infrastructure where material. The most
granular lifecycle data available should be used; where measured or
supplier-specific data isn't available, disclosed modelled estimates may
be used instead.

Two practical questions follow from this: *where do the lifecycle water
totals (`TW_b`) themselves come from* — see
[Datasets](./Datasets.md) — and *how should `TS` and `RS` actually be
chosen for a real, shared piece of cloud hardware* — see
[Allocation Calculations](./AllocationCalculations.md).

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/SWI-guide/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Embodied+Water).
