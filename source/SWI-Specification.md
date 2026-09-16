---
Version 0.1.0
---
# Software Water Intensity (SWI) Specification

## Introduction

Global freshwater resources are under increasing pressure from population
growth, industrial demand, agricultural use, and climate change. The digital
economy contributes to this pressure in ways that are not yet widely measured
or understood. Data centres that power software systems withdraw and consume
significant volumes of water for cooling and other facility operations. The
electricity consumed by those systems draws on power plants that use water when generating electricity. The hardware on which software runs requires water
throughout its manufacturing lifecycle. As software systems grow in scale and
complexity, their cumulative water impact grows.

Software practitioners currently lack a standardised method for quantifying
the water use associated with a software system. Without consistent
measurement, it is not possible to evaluate the relative water impact
of different systems, identify opportunities for improvement, or make informed
decisions about infrastructure, location, or the timing of computation.
The Software Water Intensity (SWI) specification addresses this gap. The
purpose of the SWI is to enable software practitioners to quantify, evaluate,
and reduce the water use associated with software systems. 

### How software systems use water

Software systems cause water use through three principal pathways:

- **Direct water use at data centres.** Facilities in which software executes
  use water directly for cooling, humidification, and other operations. This
  direct water use scales with the energy consumed by the software workload.

- **Indirect water use through electricity generation.** The electricity
  consumed by a software system is generated at power plants that use water
  to generate electricity. This indirect water impact depends on the
  energy intensity of the software system and the water intensity of the generators
  supplying that electricity.

- **Embodied water in hardware manufacturing.** The hardware and
  infrastructure on which software runs require water throughout their
  lifecycle, including raw-material extraction, component and device
  manufacturing, and transportation.

### Key concepts

Water intensity measurement introduces concepts that are not present in
carbon intensity measurement because the impact of water use is highly context dependent. Three of these concepts are fundamental to understanding
and applying the SWI.

**Types of Water Use.** There are two types of water use, water consumption and water withdrawl. Water consumption
is water removed from the local water system and not returned to the same
watershed — for example, water evaporated during cooling tower operation.
Water withdrawal is water extracted from a surface-water or groundwater
source some portion of which may be subsequently returned — for example,
water drawn for once-through cooling and discharged back to a river.
Consumption and withdrawal exert different pressures on water systems and
cannot not be summed or substituted for one another.

**Stress adjustment.** The same volume of water consumed or withdrawn does
not have the same consequence everywhere. One cubic metre consumed in a
water-abundant region has a fundamentally different impact from one cubic
metre consumed in a severely water-stressed basin. Water stress is the ratio of water demand to water availability. Stress adjustment weights
physical water volumes by the relative scarcity of the local watershed,
enabling the SWI to reflect not only how much water a software system uses,
but how significant that use is in its geographic context.

**Global versus local impact.** Unlike carbon dioxide — a global pollutant
whose climate effects are independent of where emissions occur — water
stress is inherently regional. Water consumed in a water-stressed basin in
one part of the world does not affect water availability elsewhere. This
means that the geographic location of each water use event is essential to
a meaningful SWI assessment. For example, the location where software operates is not a
valid substitute for the location where the underlying indirect water use of electricity generation actually
occurs.

### Structure of this specification

The SWI is a rate: the water use associated with a software system, expressed
per functional unit. It follows the structural pattern of the Software Carbon
Intensity (SCI) specification (ISO/IEC 21031:2024). Total water use is
expanded into operational and embodied components; operational water is
further divided into direct and indirect components. Each component is
quantified separately on a consumption basis and a withdrawal basis. Stress
adjustment is then applied to the resulting physical water volumes.

The SWI can be calculated for any software application, including a
distributed cloud service, an on-premise application, a machine-learning
workload, a serverless function, or an application running on end-user
devices.
## Scope

This document specifies a methodology for quantifying and reporting the water attributable to a software system per functional unit, referred to in this document as the Software Water Intensity (SWI).

This document is applicable to software systems, including distributed cloud services, on-premise applications, machine-learning workloads, serverless functions, and applications running on end-user devices.

This document specifies:

- the classification of water attributable to a software system into operational water and embodied water;
- the classification of operational water into direct operational water and indirect operational water;
- the quantification of water on a consumption basis and a withdrawal basis;
- the application of stress adjustment to physical water volumes using regional water-stress characterization factors;
- requirements for reporting SWI results; and
- a method for comparing an SWI result with a baseline.

## Normative references

The following documents are referred to in the text in such a way that some or all of their content constitutes requirements of this document.

- ISO/IEC 21031:2024, *Information technology — Software Carbon Intensity (SCI) specification*
- ISO 14046:2014, *Environmental management — Water footprint — Principles, requirements and guidelines*

## Terms and definitions

**3.1 water consumption**
water removed from the local water system and not returned to the same watershed in a readily available form, including water that is evaporated, transpired, incorporated into products or waste, or otherwise not returned to the same watershed

**3.2 water withdrawal**
water abstracted from a surface-water or groundwater source, regardless of whether it is subsequently returned

**3.3 water accounting basis**
the classification of a quantified water value as either water consumption (3.1) or water withdrawal (3.2)

**3.4 operational water**
water used during operation of the infrastructure required to deliver a software system, consisting of direct operational water (3.5) and indirect operational water (3.6)

**3.5 direct operational water**
operational water (3.4) used directly by the facility in which the software executes, including water associated with cooling, humidification, and other facility operations

**3.6 indirect operational water**
operational water (3.4) used in generating the electricity consumed by the software system

**3.7 embodied water**
water used throughout the lifecycle of the hardware and infrastructure required to deliver a software system, including raw-material extraction, component and hardware manufacturing, transportation, and end-of-life treatment

**3.8 functional unit**
quantified performance characteristic of a software system that serves as the reference unit against which water attributable to the software system is normalized

**3.9 software boundary**
the defined set of software components, supporting infrastructure, and lifecycle stages included in an SWI assessment

**3.10 water usage effectiveness**
**WUE**
facility-level metric expressing the ratio of water consumed to energy used at a facility, in litres per kilowatt-hour

**3.11 electricity water intensity factor**
**EWIF**
litres of water consumed or withdrawn, for a given water accounting basis (3.3), in the generation of one kilowatt-hour of electricity

**3.12 characterization factor**
**CF**
dimensionless factor applied to a physical water volume to reflect the water-stress conditions of the geographic region or watershed in which the corresponding water use occurs

**3.13 unadjusted SWI**
SWI value expressed as a physical water volume per functional unit (3.8), without the application of a characterization factor (3.12)

**3.14 stress-adjusted SWI**
SWI value obtained by applying a characterization factor (3.12) to physical water volumes before dividing by the functional unit (3.8)

**3.15 time share**
the proportion of a piece of hardware's expected operational lifetime that is reserved for a given software system

**3.16 resource share**
the proportion of a piece of hardware's total resources that is reserved for a given software system

## Symbols and abbreviated terms

| Symbol | Description |
| --- | --- |
| $b$ | Water accounting basis, where $b \in \{c, w\}$ |
| $c$ | Water consumption basis |
| $w$ | Water withdrawal basis |
| $i$ | Geographic region or watershed |
| $R$ | Functional unit, e.g., API call, user, or AI training run |
| $SWI$ | Software Water Intensity before selection of a water accounting basis |
| $SWI_b$ | Unadjusted Software Water Intensity for basis $b$ |
| $SWI_b^{adj}$ | Stress-adjusted Software Water Intensity for basis $b$ |
| $W$ | Total water attributable to the software system before selection of a water accounting basis |
| $W_b$ | Total water attributable to the software system for basis $b$ |
| $W_{b,i}$ | Water attributable to the software system for basis $b$ in region $i$ |
| $CF_{b,i}$ | Water-stress characterization factor for basis $b$ in region $i$ |
| $W_O$ | Operational water attributable to the software system |
| $W_{O,b}$ | Operational water for basis $b$ |
| $W_{O,b}^{dir}$ | Direct operational water for basis $b$ |
| $W_{O,b}^{ind}$ | Indirect operational water for basis $b$ |
| $E$ | Energy consumed by the software system, in kWh |
| $WUE$ | Water Usage Effectiveness, in L/kWh |
| $EWIF_b$ | Electricity Water Intensity Factor for basis $b$, in L/kWh |
| $W_M$ | Embodied water attributable to the software system |
| $W_{M,b}$ | Embodied water for basis $b$ |
| $TW_b$ | Total lifecycle water attributable to the hardware for basis $b$ |
| $TS$ | Time share allocated to the software |
| $RS$ | Resource share allocated to the software |
| $TiR$ | Time reserved for the software |
| $EL$ | Expected operational lifetime of the hardware |
| $RR$ | Hardware resources reserved for the software |
| $ToR$ | Total hardware resources available |

## Procedure

The steps required to calculate and report an SWI are:

1. **Bound** — Define the software boundary and identify the software components, supporting infrastructure, and lifecycle stages included in the assessment.
2. **Scale** — Select the functional unit $R$ that best describes how the software system scales.
3. **Define** — For each component within the software boundary, select a quantification method based on measurement, allocation, or modeling.
4. **Quantify** — Quantify operational and embodied water separately for the consumption and withdrawal bases. Calculate both unadjusted and stress-adjusted results.
5. **Report** — Disclose the required SWI results together with the software boundary, functional unit, data sources, characterization factors, allocation methods, assumptions, and limitations.

## Methodology summary

### General

The SWI encourages the use of granular, real-world data. Where measured data are unavailable, modeled estimates may be used, provided that the data sources, allocation methods, assumptions, geographic resolution, temporal resolution, and limitations are disclosed.

SWI is a rate: water attributable to a software system per one unit of $R$. The overarching equation is:

$$SWI = \frac{W}{R}$$

where:

- $W$ is the total water attributable to the software system; and
- $R$ is the functional unit.

All elements in the SWI calculation shall scale to the same functional unit $R$.

The total water attributable to the software system can be expanded as:

$$W = W_O + W_M$$

where:

- $W_O$ is the operational water attributable to operating the software system; and
- $W_M$ is the embodied water attributable to the hardware and infrastructure required to deliver the software system.

Operational and embodied water shall subsequently be quantified separately for water consumption and water withdrawal, as specified in the Water accounting basis clause below.

### Operational water

#### General

Operational water represents water used during operation of the infrastructure required to deliver the software system. It consists of direct operational water used at the computing facility and indirect operational water associated with the generation of electricity consumed by the software system.

Operational water is defined as:

$$W_O = W_O^{dir} + W_O^{ind}$$

After the water accounting basis is selected, this equation becomes:

$$W_{O,b} = W_{O,b}^{dir} + W_{O,b}^{ind}, \quad b \in \{c, w\}$$

#### Direct operational water

Direct operational water represents water used directly by the facilities in which the software executes, including water associated with cooling, humidification, and other facility operations.

- Where software- or workload-level measurements are available, measured values should be used.
- Where direct measurements are unavailable, direct operational water may be estimated by allocating facility-level water to the software system.
- The allocation method and all assumptions shall be disclosed.

Water Usage Effectiveness (WUE) is one calculation option for estimating direct operational water consumption. When WUE is used:

$$W_{O,c}^{dir} = E \times WUE$$

where:

- $E$ is the energy consumed by the software system, in kWh; and
- $WUE$ is the facility's water consumption per unit of energy, in L/kWh.

WUE shall not be treated as a mandatory input or as the only valid method for quantifying direct operational water consumption. Other measurement or allocation methods may be used when they are documented and applied consistently.

**Water withdrawal data gap.** WUE characterizes water consumption and does not provide a corresponding estimate of direct operational water withdrawal. There is currently no widely adopted facility-level metric equivalent to WUE for allocating withdrawal to software workloads. Direct operational withdrawal may therefore be quantified using measured facility data or an organization-specific allocation method where available. The absence of a standardized withdrawal allocation method is a known limitation and can reduce comparability among reported withdrawal results.

#### Indirect operational water

Indirect operational water represents water used in generating the electricity consumed by the software system. It is calculated as:

$$W_{O,b}^{ind} = E \times EWIF_b, \quad b \in \{c, w\}$$

where:

- $E$ is the energy consumed by the software system, in kWh; and
- $EWIF_b$ is the electricity water intensity factor corresponding to the selected consumption or withdrawal basis, in L/kWh.

The $EWIF_b$ shall match the water accounting basis used in the SWI calculation. It shall also correspond to the geographic region, electricity supply, and reporting period associated with the energy consumed by the software system. Where temporally granular data are unavailable, the lowest temporal resolution used shall be disclosed.

### Embodied water

Embodied water represents water used throughout the lifecycle of the hardware and infrastructure required to deliver the software system. Relevant lifecycle processes can include raw-material extraction, component and hardware manufacturing, transportation, and end-of-life treatment.

When software uses shared hardware, only a fraction of the hardware's total embodied water is allocated to the software. Consistent with the SCI specification, this fraction consists of a time share and a resource share.

The embodied water attributable to the software is:

$$W_{M,b} = TW_b \times TS \times RS, \quad b \in \{c, w\}$$

where:

- $TW_b$ is the total lifecycle water attributable to the hardware for basis $b$;
- $TS$ is the share of the hardware's expected operational lifetime reserved for the software; and
- $RS$ is the share of the hardware's total resources reserved for the software.

The allocation factors are:

$$TS = \frac{TiR}{EL} \qquad RS = \frac{RR}{ToR}$$

where:

- $TiR$ is the length of time the hardware is reserved for the software;
- $EL$ is the expected operational lifetime of the hardware;
- $RR$ is the quantity of hardware resources reserved for the software; and
- $ToR$ is the total quantity of hardware resources available.

Therefore:

$$W_{M,b} = TW_b \times \frac{TiR}{EL} \times \frac{RR}{ToR}$$

An estimate of embodied water for all hardware that materially contributes within the software boundary shall be included. The most granular available lifecycle data should be used. Where measured or supplier-specific lifecycle data are unavailable, modeled estimates may be used if their sources and assumptions are disclosed.

### Water accounting basis

After operational and embodied sources have been identified, each water component shall be quantified separately using the following water accounting bases.

#### Water consumption

Water consumption is water removed from the local water system and not returned to the same watershed in a readily available form. It includes water that is evaporated, transpired, incorporated into products or waste, or otherwise not returned to the same watershed.

For the consumption basis:

$$W_c = W_{O,c} + W_{M,c}$$

The unadjusted consumption-based SWI is:

$$SWI_c = \frac{W_c}{R}$$

#### Water withdrawal

Water withdrawal is water abstracted from a surface-water or groundwater source, regardless of whether it is subsequently returned.

For the withdrawal basis:

$$W_w = W_{O,w} + W_{M,w}$$

The unadjusted withdrawal-based SWI is:

$$SWI_w = \frac{W_w}{R}$$

Consumption and withdrawal describe different forms of pressure on water systems and shall not be summed into a single water volume or SWI value.

More generally, the unadjusted SWI for basis $b$ is:

$$SWI_b = \frac{W_b}{R}, \quad b \in \{c, w\}$$

### Stress adjustment

Unadjusted SWI reports the physical water volume attributable to the software per functional unit. Stress-adjusted SWI additionally accounts for the water conditions in the geographic regions or watersheds where water consumption or withdrawal occurs.

Water shall be assigned to the region in which the relevant water use occurs. For direct operational water, this is normally the facility's watershed. For indirect operational water, this is the location of electricity generation. For embodied water, this is the location of the relevant lifecycle process. The operating location of the software shall not be used as a substitute when the underlying water use occurs elsewhere.

The stress-adjusted SWI for basis $b$ is:

$$SWI_b^{adj} = \frac{\sum_i \left( W_{b,i} \times CF_{b,i} \right)}{R}, \quad b \in \{c, w\}$$

where:

- $W_{b,i}$ is the water attributable to the software system for basis $b$ that occurs in region $i$;
- $CF_{b,i}$ is the characterization factor applicable to basis $b$ in region $i$; and
- $R$ is the functional unit.

The physical water total is:

$$W_b = \sum_i W_{b,i}$$

The unadjusted SWI can equivalently be obtained by setting $CF_{b,i} = 1$ for every region. However, the unadjusted result shall be reported as a physical water intensity, not as a stress-adjusted value.

The AWARE characterization factor is recommended for stress-adjusted water consumption. WRI Aqueduct is recommended for stress-adjusted water withdrawal. The selected characterization method shall be appropriate to the water accounting basis and shall be disclosed together with its version, geographic resolution, temporal resolution, and any mapping or aggregation assumptions.

Stress-adjusted results shall not replace unadjusted results. The unadjusted metric supports physical water accounting and efficiency evaluation, while the stress-adjusted metric supports interpretation and decision-making in the context of local water conditions.

### Functional unit conversion

An aggregate SWI can be composed of SWI values for multiple software components. To sum component values, all components shall use the same functional unit $R$, water accounting basis, adjustment status, system boundary, and compatible characterization methodology.

If a component uses a different functional unit, its result shall be converted to the aggregate functional unit before aggregation. All conversion factors and assumptions shall be disclosed.

Consumption and withdrawal results shall not be aggregated with one another. Unadjusted and stress-adjusted results shall not be aggregated with one another.

## Reporting

An SWI assessment shall distinguish:

1. water consumption from water withdrawal; and
2. unadjusted physical water intensity from stress-adjusted water intensity.

The four reporting outputs are shown below.

| Water basis | Characterization | Reported metric | Reporting status |
| --- | --- | --- | --- |
| Consumption | Unadjusted, $CF_{c,i} = 1$ | $SWI_c$ | Mandatory |
| Consumption | Stress-adjusted; AWARE recommended | $SWI_c^{adj}$ | Mandatory |
| Withdrawal | Unadjusted, $CF_{w,i} = 1$ | $SWI_w$ | Recommended |
| Withdrawal | Stress-adjusted; WRI Aqueduct recommended | $SWI_w^{adj}$ | Recommended |

Each reported result shall identify:

- the software boundary and included infrastructure;
- the functional unit $R$;
- whether the result represents consumption or withdrawal;
- whether the result is unadjusted or stress-adjusted;
- the operational and embodied water components;
- the direct and indirect operational water components;
- data sources and whether each value was measured, allocated, or modeled;
- geographic and temporal resolution;
- the characterization method and version used for stress adjustment;
- allocation methods, including time-share and resource-share assumptions for embodied water; and
- material exclusions, data gaps, uncertainty, and limitations.

Where direct operational withdrawal is reported, the facility measurement or allocation methodology used shall be identified. Where direct operational withdrawal cannot be quantified, that omission and its implications for the reported withdrawal results shall be disclosed.

## Comparing an SWI to a baseline

When an action is evaluated for its effect on SWI, the result should be compared with a baseline calculated using the same software boundary, functional unit, water accounting basis, adjustment status, data sources, characterization methodology, and allocation assumptions. Only the action being evaluated should differ between the baseline and comparison case.
