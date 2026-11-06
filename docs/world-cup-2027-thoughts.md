---
layout: default
title: "Preparing for the 2027 World Cup"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Begin before the opening match, track discovery and sampling coverage, and probe languages per file and track. Treat the 2026 findings as design evidence rather than a forecast of 2027 viewers."
---

<link rel="stylesheet" href="../resources/world-cup-stage1/report.css">
<article class="wc-report" markdown="1">

[![Alpha60](../resources/a60-logo-block-gray.simple.svg)](world-cup.html)

<nav class="wc-nav" aria-label="World Cup reports"><a href="world-cup.html">Overview</a><a href="world-cup-swarm-media.html">Formats and resolution</a><a href="world-cup-languages.html">Audio and subtitles</a><a href="world-cup-distro-en-es-fr.html">Language and geography</a><a href="world-cup-distro-usa-mex.html">North America and matches</a><a href="world-cup-ott-vendors.html">Broadcasters and services</a><a href="world-cup-asia-28.html">Asia-28 and China</a><a href="world-cup-2027-thoughts.html" aria-current="page">Preparing for 2027</a></nav>

<p class="wc-kicker">World Cup 2026 · Stage one · November 6, 2026</p>

# Preparing for the 2027 World Cup

Begin before the opening match, track discovery and sampling coverage, and probe languages per file and track. Treat the 2026 findings as design evidence rather than a forecast of 2027 viewers.

## What changes in 2027

The FIFA Women's World Cup in Brazil runs **June 24–July 25, 2027**, with **32 teams and 64 matches**. The 2026 men's event involved 48 teams and 104 matches. A smaller fixture count does not imply a proportional reduction in torrent supply or observed membership. Team participation, language coverage, broadcast distribution and release practices will differ. [FIFA 2027 information](https://ipt.fifa.com/organisation/president/news/womens-world-cup-brazil-2027-gianni-infantino-vai-ser-epico), [FIFA 2026 format](https://www.fifa.com/en/articles/article-fifa-world-cup-2026-mexico-canada-usa-new-format-tournament-football-soccer)

As checked on November 6, Netflix identifies itself as the exclusive home of the 2027 tournament in **the United States and Canada**, with English and Spanish coverage in the USA and English and French coverage in Canada. This changes the source-branding and language hypotheses for North America. It does not establish what torrent releases will appear, or that a Netflix logo alone will prove a capture path. [Netflix's 2027 viewing information](https://www.netflix.com/tudum/features/fifa-womens-world-cup-2027)

The present 2026 collection begins **June 29 — Round of 32**. A useful 2027 study should start before the opening match and preserve group-stage observations. The 32-team 2027 format should use its own stage registry; it should not inherit the men's 2026 Round of 32 labels.

## Expectations to test, not audience forecasts

1. **Portuguese-language supply may be more visible with Brazil hosting.** Test this with deliberate Portuguese-source discovery and file-level track probes, rather than treating host-country language as a known property of every release.
2. **North American branding may become more concentrated while audio choices remain multilingual.** Record service, channel, commentary language and capture evidence separately. Multiple audio tracks may belong to one canonical torrent.
3. **Discovery and seeding may matter as much as match timing.** The 2026 collection's growing catalog and long post-final tail show why release age and match date need distinct clocks. No defensible numerical forecast of 2027 viewers follows from these memberships.

## Start now: a prioritized implementation backlog

<div class="wc-table-wrap" tabindex="0" role="region" aria-label="Priority">
<table>
<thead><tr><th scope="col">Priority</th><th scope="col">Work</th><th scope="col">Concrete acceptance check</th></tr></thead>
<tbody>
<tr><td>1</td><td>Canonical identity and match registry</td><td>One BTIHA entry with original info-byte hashes, verified v1/v2 aliases, match ID, team IDs, stage, kickoff UTC and source provenance. No filename-only identity merges.</td></tr>
<tr><td>1</td><td>Observation and discovery ledger</td><td>Record discovery time, first successful poll, each attempt/error, tracker or DHT path, and active catalog membership. Distinguish an unobserved interval from a measured zero.</td></tr>
<tr><td>1</td><td>File- and track-level media inventory</td><td>Probe every relevant file in multi-file torrents. Preserve language, codec, channels, accessibility/disposition tags, duration and errors for each track. Report coverage per field.</td></tr>
<tr><td>2</td><td>Broadcaster evidence review</td><td>Retain filename claims, embedded metadata and several separated frames with hashes and timestamps. Require explicit conflict handling and an unknown category.</td></tr>
<tr><td>2</td><td>Matched comparison products</td><td>Produce fixed match cohorts plus 1-, 7- and 14-day windows after first observation. Publish active torrent counts and separate event-period and tail results.</td></tr>
<tr><td>2</td><td>Geographic accounting and uncertainty</td><td>Pin IPinfo snapshots, count missing coordinates, record H3r8 and H3r5 threshold losses, and retain independent country/region totals before H3 cell labels are assigned.</td></tr>
<tr><td>3</td><td>Network and sampling sensitivity</td><td>Store joint network-flag combinations so combined exclusions are unions, not sums. Stratify observation coverage and compare collector/trackers where available.</td></tr>
<tr><td>3</td><td>Reproducible publication</td><td>Version input manifests, identity joins, source evidence, transformations, chart data and validation receipts. Fail the build on unresolved joins or denominator drift.</td></tr>
</tbody></table>
</div>
The shared Python inventory, H3r8 wrapper support, threshold accounting and inspectable report exports built for this stage are reusable foundations. The remaining items above are a proposed 2027 backlog, not claims of completed infrastructure.

## Proposed preparation schedule

<div class="wc-table-wrap" tabindex="0" role="region" aria-label="When">
<table>
<thead><tr><th scope="col">When</th><th scope="col">Deliverable</th><th scope="col">Readiness check</th></tr></thead>
<tbody>
<tr><td>November–December 2026</td><td>Freeze the schema and build the discovery ledger</td><td>Replay a 2026 sample and reproduce canonical counts and first-observed windows without manual joins.</td></tr>
<tr><td>January–February 2027</td><td>Add file-level language probes and source evidence workflow</td><td>A multilingual multi-file fixture retains every track and records undecodable files explicitly.</td></tr>
<tr><td>March–April 2027</td><td>Pilot on a comparable football collection</td><td>Sampling failures, missing source classes and duplicate hashes appear in an operational coverage report.</td></tr>
<tr><td>May 2027</td><td>Run an end-to-end rehearsal</td><td>Regenerate a bounded sample, compare H3 resolutions and network exclusions, and publish all charts with reconciled denominators.</td></tr>
<tr><td>Before June 24, 2027</td><td>Begin the event collection and freeze the initial cohort definitions</td><td>All planned collection paths have recent successful health checks; the match registry and language/source sampling targets are reviewed.</td></tr>
<tr><td>During and after the tournament</td><td>Maintain event-time and release-age reports</td><td>Keep daily collection coverage and fixed 7- and 14-day match views; continue a clearly labeled post-final tail.</td></tr>
</tbody></table>
</div>
## Measurement rules worth preserving

- Report distinct torrents, IP–torrent memberships, and IP–torrent–day activity as different quantities. Never convert them into viewer counts without an independent validated measurement model.
- Keep a fixed cohort view alongside the expanding catalog. Normalize exposure only with a documented observation ledger.
- Analyze language availability separately from track selection, ethnicity, service branding and rights ownership.
- Cluster uncertainty by match or release family where those units are independent enough; a large count of repeated network observations does not provide millions of independent samples.
- Use H3r8 for geographic detail, H3r5 for sensitivity, and broader areas when geolocation uncertainty dominates. A defensible urban–rural study requires appropriate boundaries and location uncertainty, not city labels alone.

The highest-value next investment is **coverage instrumentation plus exhaustive file-level language metadata**. It directly addresses the largest limitations in this study: changing torrent supply, unknown tracks, and sparse Spanish/French source coverage.



<details class="wc-sources" markdown="1">
<summary>Sources, downloads, and counting rules</summary>

[2026 inventory and coverage](../data/world-cup-stage1/torrent-inventory.json.gz) · [Daily catalog changes](../data/world-cup-stage1/daily-catalog-coverage.json) · [Geographic loss accounting](../data/world-cup-stage1/resolution-sensitivity.json)

All content joins use the [shared inventory](../data/world-cup-stage1/torrent-inventory.json.gz): **493 canonical BTIHA**, with verified hybrid-hash aliases. Alpha60 sampling began **June 29, 2026 — Round of 32**, and ends November 3 in this snapshot. Earlier-event media found later does not establish earlier sampling.

Geographic counts are **IP–torrent memberships**, with an IP counted once per canonical torrent and role within the stated interval. They are not unique people, viewing choices, completed downloads, transferred bytes, or ratings. An address can occur in both roles. Daily sums count the same membership again on another day.

Main geography uses **IPinfo and H3 resolution 8**, the highest resolution used here. The native minimum is **three downloaders per cell**; uploaders are retained only where that downloader threshold passes. Content comparisons filter each torrent separately. Overall country and city comparisons filter after aggregating torrents, so their totals differ. Country and city labels are representative locations within cells, and the finer grid does not improve IPinfo accuracy. Hosting, VPN, proxy and mobile flags overlap; each sensitivity exclusion is applied separately.

See the [H3r8 manifest](../H3r8/manifest.json), [generation and validation evidence](../data/world-cup-stage1/validation-summary.json), [complete analytical reductions](../data/world-cup-stage1/analysis.json.gz), and [methods and coverage](world-cup.html#methods). Source hashes make the published snapshot inspectable.

</details>

</article>
