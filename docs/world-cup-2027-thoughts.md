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

<!-- BEGIN discovery-study -->

<link rel="stylesheet" href="../resources/world-cup-china/discovery.css">
<a id="spanish-portuguese-discovery"></a>
## Finding more Spanish and Portuguese material

**Expand the discovery frame before expanding the sampler.** The 2026 inventory measures files Alpha60 found; a small Spanish or Portuguese cohort can reflect search coverage as well as supply. For 2027, maintain separate discovery lanes for Spanish, Brazilian Portuguese and European Portuguese, and measure their coverage against the same fixture list. Keep multi-audio files eligible even when their titles advertise only English.

### Start with the actual broadcast feeds

As checked on November 6, 2026, Netflix confirms Spanish-language coverage in the USA. Add `Netflix` and `NF` as source candidates for that territory, with the match, date and language terms. A broadcaster token is a search hint; the filename does not prove the audio language or capture source. Canada’s announced Netflix languages are English and French. [Netflix’s 2027 coverage](https://www.netflix.com/tudum/features/fifa-womens-world-cup-2027).

For Brazil, FIFA confirms Globo and CazéTV, including all 64 matches on SporTV and CazéTV. Add `Globo`, `SporTV`, `CazéTV` and `CazeTV` to the source registry. Free official digital coverage also supplies a useful reference feed for language and graphics checks; its availability does not predict how many torrent versions will appear. [FIFA’s Brazilian broadcaster announcement](https://ipt.fifa.com/tournament-organisation/commercial/news/globo-cazetv-broadcast-platforms-brazil-womens-world-cup-2027).

For Portugal, LiveMode’s July 27 announcement identifies LiveModeTV and plans 25 matches, one per day. Treat this as a separate European Portuguese discovery lane, with its announced coverage recorded. Recheck all rights and schedules before collection; use verified territory-specific announcements for Spain and Latin America rather than carrying over the 2026 men’s broadcasters. [LiveMode’s announcement](https://www.globenewswire.com/news-release/2026/07/27/3333839/0/en/livemode-opens-landmark-commercial-program-for-the-fifa-women-s-world-cup-brazil-2027-which-it-will-broadcast-in-brazil-and-portugal.html).

### A repeatable language search strategy

<div class="wc-table-wrap wc-prose-table" tabindex="0" role="region" aria-label="Discovery comparison" markdown="1">

| Lane | Search vocabulary and aliases | Verification |
| --- | --- | --- |
| Spanish | `Copa Mundial Femenina`, `Mundial Femenino`, `fútbol`, `futbol`, `partido completo`, `español`, `espanol`, `castellano`, `latino`, `ESP`, `SPA`, `ES` | Probe every audio track; retain Spanish as the language and record regional commentary only when independently supported. `ESP` can also mean the Spain team. |
| Brazilian Portuguese | `Copa do Mundo Feminina`, `Copa Feminina`, `futebol`, `jogo completo`, `português`, `portugues`, `PT-BR`, `PTBR`, `POR`, `narração` | Confirm Portuguese audio and review any Brazil-specific claim; country of the peer or broadcaster branding alone does not establish the audio track. |
| European Portuguese | `Mundial Feminino`, `Campeonato do Mundo Feminino`, `futebol`, `PT-PT`, `PTPT`, `português`, `LiveModeTV` | Keep separate from Brazilian Portuguese at discovery time; retain generic Portuguese when the variety is unverified. |
| Multi-audio and weak labels | `dual audio`, `multi audio`, `MULTI`, language-neutral fixture/date searches, first-half and second-half variants | Inspect all files and tracks, not just the first video or default audio. Keep commentary, subtitles and ambient stadium audio distinct. |

</div>

Generate queries from **fixture ID + local team aliases + date + language/source hints**. Search accented and unaccented spellings, `YYYY-MM-DD` and local date formats, both team orders, and UTC/local dates around midnight. A template such as `"Copa do Mundo Feminina" "{team A}" "{team B}" "2027"` is more selective than `POR` alone. Include `1T`, `2T`, `primeiro tempo`, `segundo tempo`, `primer tiempo`, `segundo tiempo`, extra time and penalties; classify highlights, full matches and studio programs separately. These are proposed search rules, not claims that matching releases exist.

Use a proposed polling schedule of 6.0, 24.0 and 72.0 hours and 7.0 days after each fixture for replay-file discovery, plus scheduled index-feed collection where available. Adjust to the source’s documented request limits. Log the query, source, retrieval UTC, result ID, title, claimed languages, first-seen time and success/error state. Preserve an actual zero-result response separately from a failed request.

### Is there a specialized sports tracker?

**Yes: SportsCult is a documented private sports-tracker candidate.** Jackett’s current adapter identifies it as private and exposes International Soccer, La Liga, Primeira Portugal and other sports categories. That establishes a sports-oriented index and adapter, not its current invitation availability, 2027 inventory, or Spanish/Portuguese coverage. The adapter’s `en-US` value describes the index language, not all audio tracks. [Jackett’s SportsCult definition](https://github.com/Jackett/Jackett/blob/master/src/Jackett.Common/Definitions/sportscult.yml).

Include it in a coverage pilot if the project has normal account access and research collection is permitted there. Record its results as a distinct sampling stratum. Also pilot football replay indexes and regional language communities using their published search or RSS facilities; count verified new files each contributes before deciding where to invest collection effort. No additional named source is treated here as verified without checking its current catalog and access conditions.

A torrent **index** helps discover releases; a BitTorrent **tracker** helps locate peers for a known infohash. Adding more generic announce URLs does not create missing Spanish or Portuguese release metadata. Private torrents are also not a public-DHT substitute: the private-torrent specification restricts peer discovery. Consequently, public Alpha60 swarm observations cannot be assumed to represent private-tracker distribution. [BitTorrent protocol](https://www.bittorrent.org/beps/bep_0003.html), [private torrents](https://www.bittorrent.org/beps/bep_0027.html).

### Verify supply and measure discovery coverage

Reuse the shared canonical BTIHA inventory for every discovered torrent, preserving source-specific listing IDs as aliases. Add a **media-asset layer** for identical files appearing under different torrents or on file hosts: whole-file SHA-256 proves byte identity, while audiovisual fingerprints can support a separately labeled relationship between remuxes or encodes. Similar names, sizes or watermarks are candidate matches, not identity proofs.

For material available to the study, run `ffprobe` on every relevant file and audio/subtitle track. Where tags are absent or conflicting, use speech-language detection on several commentary passages as a screening step, followed by bilingual review of a stratified sample and all conflicts. Crowd noise, music and brief announcer names are poor language evidence. Retain `unknown`, `claimed` and `verified` separately, with the method and confidence attached to each track.

Track **fixtures with at least one verified Spanish audio asset**, **fixtures with at least one verified Portuguese audio asset**, distinct assets per language, discovery delay, source overlap, unmatched identities, unknown-language share and successful query coverage. Use the same observed fixtures and follow-up period for language comparisons. Report each source’s incremental canonical discoveries and verified-language yield, including its zero-result and inaccessible strata. A large number of versions of one match should not hide missing matches.

<a id="streaming-torrents-and-other-sources"></a>
## Streaming, IPTV, torrents and downloadable files

**They are different distribution paths that can carry related recordings.** IPTV describes delivery of television over IP; it includes licensed services as well as unauthorized redistribution. Web streaming may carry a live match or an on-demand replay. BitTorrent exchanges file pieces among peers, while a file host serves a downloadable object. “Streaming” alone does not determine whether the delivery is licensed.

The technical boundary is also less sharp than “stream versus file” suggests. For example, HLS delivers playlists and media segments and can advertise alternative audio renditions. Record language metadata for each rendition where available, rather than assuming the video has only one commentary track. [HTTP Live Streaming specification](https://www.rfc-editor.org/rfc/rfc8216.html#section-2).

A plausible supply chain is: broadcast or OTT feed → live restream and/or recorded asset → remuxes and re-encodes → torrent releases, direct-download mirrors and on-demand streams. Some branches can start independently from the same broadcast, and a torrent file can later become a streaming replay. This is a hypothesis to test per asset, not an established lineage for the current World Cup collection. A logo can identify a feed family; it cannot prove which intermediary supplied a later copy. Use dated observations and content fingerprints, keeping first observed time distinct from true publication time.

<div class="wc-table-wrap wc-prose-table" tabindex="0" role="region" aria-label="Discovery comparison" markdown="1">

| Delivery path | Useful observable unit | What Alpha60 can infer |
| --- | --- | --- |
| BitTorrent | Canonical torrent, observed peer membership and interval | Sampled file-distribution geography, with discovery, role, threshold and IPinfo limitations. |
| Live web/IPTV delivery | Channel or event listing, timestamped availability check, manifest or stream metadata when accessible to the study | Availability and infrastructure. A server IP locates infrastructure; it does not reveal the viewers. |
| File host / cloud download | Listing or object ID, observed file metadata, content hash when available | Persistence, mirrors and language supply. Published download counters require independent validation. |
| On-demand video platform | Video ID, upload time, duration, metadata and exposed counters | Platform-specific availability and reported engagement; these are not unique cross-platform viewers. |

</div>

**Do not add these measures into a single “piracy audience.”** A torrent peer, a site visit, a file listing, a stream endpoint and a concurrent-viewer estimate have different denominators. The same recording or person may appear in several channels. Low torrent activity alongside widespread streaming listings is compatible with a channel shift, a discovery gap, or low demand; those data alone do not distinguish the explanations.

EUIPO’s cross-channel research explicitly treats visits to IPTV registration websites as a proxy for interest and models possible users separately. This is a useful methodological precedent: a registration-page visit is not an observed live match view. Its European aggregate results should not be transferred directly to Brazil, China, or a particular World Cup. [EUIPO study and methodology](https://www.euipo.europa.eu/es/publications/online-copyright-infringement-in-the-european-union-films-music-publications-software-and-tv-2017-2023).

## Non-torrent sources for the 2027 study

<div class="wc-table-wrap wc-prose-table" tabindex="0" role="region" aria-label="Discovery comparison" markdown="1">

| Source | Access and useful fields | Main limitation |
| --- | --- | --- |
| Official broadcaster schedules, EPGs and replay catalogs | Public pages or documented feeds; fixture, territory, commentary language, channel, live/replay times. Start with the verified broadcasters above. | A reference for supply and timing, not an unauthorized-distribution measure. Some feeds and archives require agreements. |
| YouTube Data API and official channel catalogs | Documented API with quota/key requirements; video ID, title, duration, publish time, live status and available counters. Useful for CazéTV/LiveModeTV references and public replay discovery. | API availability and metadata vary; live concurrent-viewer fields stop being tracked after the event and may differ from processed analytics. Title language is not verified commentary. [YouTube video fields](https://developers.google.com/youtube/v3/docs/videos). |
| Public replay forums, file-host listing pages and public event/stream indexes | Timestamped metadata observations through permitted public access, search/RSS or documented APIs; listing URL/ID, claimed language, event, host, first/last seen. | Uneven discovery, duplicates, rotating links and short lifetimes. Counts describe available listings or objects, not users. No current coverage estimate is claimed. |
| Google copyright Transparency Report and Lumen | Google supplies downloadable report data and links to participating takedown notices. Useful fields include reported URL/domain, reporting party and notice date; detailed Lumen access should be confirmed with the project. | Allegations and enforcement activity, not adjudicated infringement or demand. Reporting intensity and missing contributors bias the sample. [Google report and Lumen description](https://transparencyreport.google.com/copyright), [download instructions](https://support.google.com/transparencyreport/answer/7347561?co=GENIE.Platform%3DDesktop&hl=en). |
| Common Crawl | Public CDX/URL indexes and archived web content; domains, URLs, capture timestamps and replay-listing text. | Useful for retrospective discovery and link changes, but crawl gaps and delays make it unsuitable as a complete live-match monitor. [Common Crawl URL index](https://www.commoncrawl.org/url-index). |
| OONI measurements | Public existing website-connectivity measurements, with time, country, network and test results. | Access/blocking context only. An anomaly is not automatically confirmed blocking, and neither result counts viewers. Match coverage must be checked before using it. [OONI interpretation guide](https://ooni.org/support/interpreting-ooni-data/). |
| Licensed commercial measurement, such as MUSO | Discuss event, territory, language, live-sports and delivery-channel coverage with the provider; request methodology and a sample before purchase. | Commercial access and modeled/platform-dependent measures. General industry coverage does not establish World Cup title-level or IPTV completeness. [MUSO’s published scope](https://www.muso.com/2024-piracy-trends-and-insights). |

</div>

Public social posts and search results can supply additional discovery leads, but they need a documented sampling frame and duplicate handling. Private groups, subscription-platform analytics and server logs are not open research datasets. Broadcaster or platform partnerships could provide stronger aggregate audience measurements, if available; none are assumed in the present plan.

### A concrete pilot before the tournament

Use a proposed **14.0-day pilot around at least four football fixtures** with confirmed Spanish and Portuguese feeds. Keep the same fixtures and observation schedule across sources. Run language-focused and language-neutral searches, one documented sports-index lane, public replay/file-host metadata collection, and official-feed controls. This tests discovery mechanics; it does not estimate the entire 2027 ecosystem.

Create one observation ledger keyed by source record and timestamp, linked to fixture ID and a separate media-asset ID. Attach BTIHA only when a torrent exists. Record delivery type, claimed/verified track languages, original source URL, accessible/error/removed status, source-code version and input checksum. Publish aggregate counts and coverage; strip access tokens and account-specific URLs from exports.

The pilot succeeds when every scheduled query has a success/error record, all candidate identities are either joined or explicitly unresolved, language decisions carry evidence, and the report exposes incremental discoveries by source and missing fixtures by language. If a source adds no verified assets, report that result rather than assuming its catalog is comprehensive. Add a separate event-time availability panel for streaming and a replay-distribution panel for files; join their content evidence without merging their audience denominators.

These are implementation recommendations and documented source candidates as of November 6, 2026. No new tracker account, paid dataset, private-group access or non-torrent collection has been acquired as part of this page update.

[Source-check record and access limitations](../data/world-cup-china/discovery-research-sources.json).

<!-- END discovery-study -->

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
