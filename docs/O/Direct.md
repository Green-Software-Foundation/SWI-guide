---
sidebar_position: 2
title: Direct Operational Water
---

<!--
Grounded in: SWI-Specification.md § Methodology summary → Operational water → Direct operational water.
-->

# Direct Operational Water

Direct operational water ($W_O^{dir}$) is water used directly by the
facility in which the software executes — cooling towers, humidification,
and similar facility-level operations. It is the operational water
component that does not depend on where the electricity came from; it
depends on how the facility itself is cooled.

## Measurement and allocation

The specification's preference order is straightforward: use
software- or workload-level measurements where they exist; where they
don't, allocate facility-level water to the software system using a
documented, disclosed allocation method. There is no single mandated
allocation method — what matters is that whatever method is used is
consistent and disclosed.

## Estimating with WUE

Water Usage Effectiveness (WUE) — a facility's water consumption per unit
of energy, in L/kWh — is **one** option for estimating direct operational
water consumption, not a required input and not the only valid method:

$$W_{O,c}^{dir} = E \times WUE$$

where $E$ is the energy the software system consumed, in kWh. If a
facility reports WUE, this is usually the easiest available estimate. If
it doesn't, or if better workload-level data exists, use that instead.

## The withdrawal data gap

Here is the limitation to keep in view: **WUE characterizes consumption,
not withdrawal.** There is currently no widely adopted facility-level
metric equivalent to WUE for allocating direct operational *withdrawal* to
a software workload. If a facility measures and discloses its own
withdrawal, that measured data can be used, or an organization-specific
allocation method can be applied where one is available and documented —
but absent one of those, direct operational withdrawal simply cannot be
quantified with the same rigor as consumption today.

This is a known, structural gap in current methodology, not something this
guidance can resolve by picking a workaround. Where an assessment cannot
quantify direct operational withdrawal, the specification requires that
omission — and what it means for the reported withdrawal results — to be
disclosed rather than silently left out. Reported $SWI_w$ results should be
read with this gap in mind: an unquantified direct operational withdrawal
component is not the same thing as a zero one.

---

Please submit any comments you have [here](https://github.com/Green-Software-Foundation/SWI-guide/issues/new?labels=Guidelines+Feedback&title=Feedback%3A+Direct+Operational+Water).
