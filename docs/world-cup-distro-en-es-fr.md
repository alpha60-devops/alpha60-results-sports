---
layout: default
title: "Language and North American geography"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "English-audio files circulate in Mexico. The seven identified Spanish-audio torrents do not support a stable positive geographic association with Spanish-speaking or Hispanic populations."
---

<link rel="stylesheet" href="../resources/world-cup-stage1/report.css">
<article class="wc-report" markdown="1">

[![Alpha60](../resources/a60-logo-block-gray.simple.svg)](world-cup.html)

<nav class="wc-nav" aria-label="World Cup reports"><a href="world-cup.html">Overview</a><a href="world-cup-swarm-media.html">Formats and resolution</a><a href="world-cup-languages.html">Audio and subtitles</a><a href="world-cup-distro-en-es-fr.html" aria-current="page">Language and geography</a><a href="world-cup-distro-usa-mex.html">North America and matches</a><a href="world-cup-ott-vendors.html">Broadcasters and services</a><a href="world-cup-asia-28.html">Asia-28 and China</a><a href="world-cup-2027-thoughts.html">Preparing for 2027</a></nav>

<p class="wc-kicker">World Cup 2026 · Stage one · November 6, 2026</p>

# Language and North American geography

English-audio files circulate in Mexico. The seven identified Spanish-audio torrents do not support a stable positive geographic association with Spanish-speaking or Hispanic populations.

## Where identified languages circulate

**English-audio torrents are observed in Mexico**, with 384,652 retained downloader memberships. This establishes distribution of files containing English audio; it cannot establish whether anyone listened to that track, spoke English, or watched the match.

<div class="wc-table-wrap" tabindex="0" role="region" aria-label="D = retained IP–torrent downloader memberships; per-torrent H3r8 threshold">
<table>
<caption>D = retained IP–torrent downloader memberships; per-torrent H3r8 threshold</caption>
<thead><tr><th scope="col">Country</th><th scope="col">All torrents: D</th><th scope="col">EN: D</th><th scope="col">EN share</th><th scope="col">ES: D</th><th scope="col">ES share</th><th scope="col">FR: D</th><th scope="col">FR share</th></tr></thead>
<tbody>
<tr><td>United States</td><td>2,881,163</td><td>1,092,583</td><td>37.9%</td><td>56,672</td><td>2.0%</td><td>18,553</td><td>0.6%</td></tr>
<tr><td>Mexico</td><td>1,023,951</td><td>384,652</td><td>37.6%</td><td>21,692</td><td>2.1%</td><td>6,536</td><td>0.6%</td></tr>
<tr><td>Canada</td><td>1,410,387</td><td>526,678</td><td>37.3%</td><td>28,283</td><td>2.0%</td><td>9,467</td><td>0.7%</td></tr>
<tr><td>Spain</td><td>1,533,258</td><td>569,327</td><td>37.1%</td><td>31,943</td><td>2.1%</td><td>9,623</td><td>0.6%</td></tr>
<tr><td>Argentina</td><td>413,361</td><td>155,806</td><td>37.7%</td><td>8,875</td><td>2.1%</td><td>2,452</td><td>0.6%</td></tr>
<tr><td>Colombia</td><td>165,975</td><td>62,597</td><td>37.7%</td><td>3,575</td><td>2.2%</td><td>974</td><td>0.6%</td></tr>
<tr><td>France</td><td>2,102,681</td><td>777,139</td><td>37.0%</td><td>42,334</td><td>2.0%</td><td>13,016</td><td>0.6%</td></tr>
</tbody></table>
</div>
Spanish-audio share is 2.1% in Mexico, 2.1% in Spain, and 2.1% in Argentina, versus 2.0% in the USA and Canada. These differences are small compared with the coverage limitation: **only seven Spanish-audio torrents and two French-audio torrents are identified**. Unknown-language torrents remain in each country's denominator. The categories overlap because one torrent may contain several languages.

## Does Spanish-audio distribution track US language or ethnicity?

We joined IPinfo's GeoNames city identifiers to its state fields, then compared state aggregates with **2024 ACS one-year estimates**. Language is Spanish spoken at home among residents aged five or older (`C16001`); ethnicity is Hispanic or Latino origin among residents of all ages (`B03003`). The two measures are analyzed separately. These are ecological comparisons across 50 states and DC, not classifications of peers. [ACS tables and documentation](https://www.census.gov/programs-surveys/acs/data/summary-file.2024.html)

<div class="wc-table-wrap" tabindex="0" role="region" aria-label="Excluded network flag">
<table>
<thead><tr><th scope="col">Excluded network flag</th><th scope="col">Census measure</th><th scope="col">Spearman rho</th><th scope="col">Leave-one-Spanish-torrent-out range</th></tr></thead>
<tbody>
<tr><td>none</td><td>Spanish at home</td><td>-0.117</td><td>-0.238 to 0.079</td></tr>
<tr><td>none</td><td>Hispanic / Latino origin</td><td>-0.132</td><td>-0.265 to 0.047</td></tr>
<tr><td>hosting</td><td>Spanish at home</td><td>0.010</td><td>-0.118 to 0.102</td></tr>
<tr><td>hosting</td><td>Hispanic / Latino origin</td><td>-0.007</td><td>-0.149 to 0.073</td></tr>
<tr><td>vpn</td><td>Spanish at home</td><td>-0.025</td><td>-0.153 to 0.082</td></tr>
<tr><td>vpn</td><td>Hispanic / Latino origin</td><td>-0.042</td><td>-0.178 to 0.055</td></tr>
<tr><td>proxy</td><td>Spanish at home</td><td>-0.112</td><td>-0.237 to 0.084</td></tr>
<tr><td>proxy</td><td>Hispanic / Latino origin</td><td>-0.127</td><td>-0.264 to 0.051</td></tr>
<tr><td>mobile</td><td>Spanish at home</td><td>-0.083</td><td>-0.227 to 0.117</td></tr>
<tr><td>mobile</td><td>Hispanic / Latino origin</td><td>-0.114</td><td>-0.270 to 0.071</td></tr>
</tbody></table>
</div>
<figure><a href="../resources/world-cup-stage1/spanish-state-census.svg"><picture><source media="(max-width: 700px)" srcset="../resources/world-cup-stage1/spanish-state-census-mobile.png"><img src="../resources/world-cup-stage1/spanish-state-census.png" alt="State scatter plots before and after excluding hosting-flagged memberships." loading="lazy"></picture></a><figcaption>Each point is a state or DC. Census language measures describe residents; torrent shares describe observed distribution. ACS uncertainty and shared matches among torrent versions prevent an independence-based significance claim. <a href="../resources/world-cup-stage1/spanish-state-census.svg">Open full-size chart (SVG)</a>.</figcaption></figure>
The association is **not a stable positive one**: the unfiltered network comparison has rho −0.118 for Spanish at home and −0.132 for Hispanic origin. Removing hosting flags moves both close to zero. Omitting one of the seven Spanish-tagged torrents can change the sign. These are descriptive sensitivity results, not confidence intervals or a population hypothesis test. ACS margins of error are retained in the downloadable data but are not propagated into these coefficients.

## Canada and Mexico require different demographic definitions

Quebec accounts for **38.6% of Canadian French-audio memberships**, compared with **38.5% of all Canadian memberships**. This sample offers little French-specific geographic concentration. In Canada's 2021 census, French alone is the language most often spoken at home for 77.5% of Quebec's population under the table's undistributed multiple-response definition. That resident measure is not the same denominator as Quebec's share of Canadian torrent memberships. [Statistics Canada, table 15-10-0033-01](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1510003301)

The Canadian table groups non-official languages and does not supply a Spanish-only provincial comparison here. US Hispanic-origin categories are not transferred to Canada or Mexico. No quantitative claim about a “high Latino population” area outside the USA is made without a compatible local measure.

## Findings and improvements

1. **Language-bearing files cross national language boundaries.** English-tagged files circulate in Mexico; this does not reveal listening behavior.
2. **Spanish-specific regional enrichment is weak in the identified sample.** Country shares cluster near 2.0%, and the state association is sensitive to network flags and individual torrents.
3. **French supply is too sparse for strong market conclusions.** Two identified torrents cannot represent the Canadian or French-language broadcast market.
4. **Prioritize better supply coverage and match controls.** Probe every file and every audio/subtitle track, deliberately monitor Spanish and French release sources, record discovery time, and compare versions of the same match over the same observation age. Add compatible Canadian Spanish-language and Mexican language measures before extending the demographic analysis.



<details class="wc-sources" markdown="1">
<summary>Sources, downloads, and counting rules</summary>

[State census comparison CSV](../data/world-cup-stage1/usa-census-language.csv) · [Country memberships by torrent](../data/world-cup-stage1/torrent-country-memberships.csv) · [Census calculations and sensitivity](../data/world-cup-stage1/supplement.json)

All content joins use the [shared inventory](../data/world-cup-stage1/torrent-inventory.json.gz): **493 canonical BTIHA**, with verified hybrid-hash aliases. Alpha60 sampling began **June 29, 2026 — Round of 32**, and ends November 3 in this snapshot. Earlier-event media found later does not establish earlier sampling.

Geographic counts are **IP–torrent memberships**, with an IP counted once per canonical torrent and role within the stated interval. They are not unique people, viewing choices, completed downloads, transferred bytes, or ratings. An address can occur in both roles. Daily sums count the same membership again on another day.

Main geography uses **IPinfo and H3 resolution 8**, the highest resolution used here. The native minimum is **three downloaders per cell**; uploaders are retained only where that downloader threshold passes. Content comparisons filter each torrent separately. Overall country and city comparisons filter after aggregating torrents, so their totals differ. Country and city labels are representative locations within cells, and the finer grid does not improve IPinfo accuracy. Hosting, VPN, proxy and mobile flags overlap; each sensitivity exclusion is applied separately.

See the [H3r8 manifest](../H3r8/manifest.json), [generation and validation evidence](../data/world-cup-stage1/validation-summary.json), [complete analytical reductions](../data/world-cup-stage1/analysis.json.gz), and [methods and coverage](world-cup.html#methods). Source hashes make the published snapshot inspectable.

</details>

</article>
