---
layout: default
title: "World Cup Piracy Beyond BitTorrent"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "IPTV channel bundles, cyberlocker replays and debrid caches offer three ways to follow a World Cup match. A Round of 32 case shows which of them the 2026 archive can measure."
---

<link rel="stylesheet" href="../resources/world-cup-stage1/report.css">
<link rel="stylesheet" href="../resources/world-cup-china/discovery.css">
<article class="wc-report" markdown="1">

[![Alpha60](../resources/a60-logo-block-gray.simple.svg)](world-cup.html)

<nav class="wc-nav" aria-label="World Cup research"><a href="world-cup.html#broadcast-and-2027">World Cup research index</a><a href="world-cup-ott-vendors.html">Broadcasters And Services</a></nav>

<a id="emergent-iptv"></a>
<a id="iptv-emergent"></a>

# World Cup Piracy Beyond BitTorrent

During the 2026 men’s World Cup, IPTorrents reportedly offered **five to ten live channel choices for each Round of 32 match**. That figure comes from a retrospective account supplied to Alpha60. The public archive independently identifies **29 replay releases** whose titles carry the `[IPT]` tag, covering all 16 fixtures. [FIFA match schedule][fifa] · [Alpha60 title and language inventory][inventory]

The three business models come from *Emergent Pirate Behavior*, a 2025 Association of Internet Researchers (AoIR) submission co-authored by **Aaron**. The paper looks beyond the release groups that competed to publish a copy first. An IPTV reseller sells a channel lineup. A cyberlocker hosts a file. A debrid subscriber pays a third party to retrieve and cache a copy. A supporter can encounter all three through the same player. [Martin Paul Eve’s history of release groups][warez]

<a id="from-a-live-feed-to-a-replay"></a>

## IPTV sells a live channel lineup

Internet Protocol television (IPTV) delivers television over IP networks. Licensed broadcasters use it too. In the unauthorized subscription market studied by Pandey and colleagues, a reseller can bundle channels from several sources. The reported IPTorrents offering at `iptorrents.com` illustrates what that looks like at kickoff. Five to ten menu entries represent choices offered to a subscriber. A dated lineup could identify the channel labels. Checking the feeds would establish which carried different pictures or commentary. [Pandey et al.][pandey]

**South Africa–Canada** opened the round on June 28. Alpha60’s torrent observations began June 29. One tagged release is labelled 720p HDTV and has identified English audio and subtitles. Another is labelled 1080p WEB-DL and its languages are unclassified. Their distinct torrent hashes establish two releases. Which live channel, if any, supplied either recording remains open. Two independent recordings of the same broadcast could carry the same logo. [Round of 32 schedule][round] · [Audio and Subtitles][languages] · [Title and language inventory][inventory]

## Cyberlockers host the replay file

A cyberlocker stores an uploaded file. A football replay site can earn advertising revenue by listing or embedding it, while the host can sell faster access or a premium account. Several sites can point to one upload. Conversely, the same match can survive on several hosts after one link disappears. Lauinger and colleagues’ study of one-click hosting documents the distinction between sites that index links and services that store the files. [Lauinger et al.][locker]

For South Africa–Canada, a dated host listing would support a claim that a replay was offered. A matching whole-file hash would show that a host held the same bytes as one of the archived recordings. The 2026 inventory supplies the torrent evidence for that comparison. A fixture-specific cyberlocker copy has yet to be verified.

## Debrid services sell retrieval and cached delivery

A debrid subscriber pays a service to retrieve a file from a supported host or torrent. The service can keep a cached copy and deliver it directly to later subscribers. Aaron’s paper discusses Real-Debrid as an example and describes how a separate player such as Stremio can present the result. Real-Debrid’s own terms prohibit infringing downloads. [Real-Debrid service terms][debrid]

If a debrid server fetched the South Africa–Canada replay by torrent, Alpha60 might see that server participate once. Subsequent plays from its cache could generate no further torrent observations. The public evidence for this fixture ends at the torrent. A dated service record tied to the file could establish cache availability, and delivery records could establish plays.

<a id="measuring-interest-in-iptv"></a>

## Why convenience matters

The AoIR paper extends Abigail De Kosnik’s argument about why people choose a television source. At kickoff, the question might be “Which service carries my team in my language on this phone?” After a late shift, it might be “Can I still watch the whole match?” Local prices, purchasing power, territorial rights and devices change the answer. A broadcaster could address both questions on one fixture page listing the local price, commentary choices and the time the full replay expires. [De Kosnik][convenience]

An open-source player such as Kodi or Stremio can bring sources together while other organizations operate the feeds, hosts or caches. Counting available add-ons measures software supply. A viewer’s choice of player alone leaves the source of a specific match unresolved. [Xiao et al.][kodi]

Enforcement also changes what a researcher can see. DNS blocking can make a site unreachable from one territory while a copy remains hosted elsewhere. The EU Intellectual Property Office counted visits to IPTV registration sites in 2022 and 2023 and modelled possible subscriptions separately. Estimating a World Cup audience would require viewing data for the specific match. [EUIPO methodology][euipo] · [European Commission recommendation on live events][commission]

<a id="what-each-delivery-path-shows"></a>

## What to record in 2027

Use the same fixture and territory for each check. Compare the official offer’s local price, supported devices, commentary and replay window with what each service lists. A live feed can offer several audio tracks. Inspect the tracks before assigning a language to the whole feed. [HLS audio renditions][hls] · [Preparing For 2027][pilot]

<div class="wc-table-wrap wc-prose-table" tabindex="0" role="region" aria-label="Evidence to collect for each business model" markdown="1">

| Business model | Counting unit | Evidence to retain |
| --- | --- | --- |
| IPTV | Channel choice per fixture at kickoff | Time, territory, channel label, available commentary and whether the feed played. Keep an inaccessible check distinct from an empty lineup. |
| Cyberlocker | Hosted replay file | Host and file ID, first and last observation, duration and a file hash where available. Group matching copies while retaining each host location. |
| Debrid | Fixture file confirmed in a particular service’s cache at a given time | Dated, attributable cache evidence and a file match. Report downstream plays only if the service supplies a measured count. |

</div>

The BitTorrent comparison counts observed IP addresses per torrent. One supporter could find a replay in a listing, open a hosted file and later play the same recording from a cache. Adding those entries would count several steps taken by one person. [World Cup counting rules](world-cup.html#methods)

## Sources and counting notes

- **Research framework.** Aaron, co-author, *Emergent Pirate Behavior: Using Technical and Operation Obfuscation to Evade Enforcement*. AoIR 2025 conference submission. The three business models and the convenience argument come from this manuscript. Martin Paul Eve supplies its historical account of competitive release groups. [*Warez*, 2021][warez]
- **Industry studies.** Prakhar Pandey et al., [*Iniquitous Cord-Cutting*, 2019][pandey]. Tobias Lauinger et al., [*Clickonomics*, 2013][locker]. Yunming Xiao et al., [*Decoding the Kodi Ecosystem*][kodi]. Abigail De Kosnik, [*Piracy Is the Future of Television*, 2010][convenience].
- **Round of 32 evidence.** The five-to-ten range comes from the account supplied for this report. To reproduce the replay count, take the 493 canonical rows observed June 29–November 3, 2026, select titles containing both `[IPT]` and `Round of 32` without regard to case, and count distinct torrent hashes. Group the 29 results by the two teams, reconciling names such as Cape Verde and Cabo Verde. The published archive has no match-time channel ledger against which to check the reported range. [Download the title inventory][inventory] · [FIFA fixture list][fifa] · [DISH’s complete Round of 32 schedule][round]

[fifa]: https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums
[round]: https://www.dish.com/dig/sports/soccer/world-cup-round-of-32
[inventory]: ../data/world-cup-stage1/torrent-language-indicators.csv
[languages]: world-cup-languages.html
[pilot]: world-cup-2027-thoughts.html#non-torrent-sources-for-the-2027-study
[pandey]: https://doi.org/10.1109/EuroSPW.2019.00054
[locker]: https://www.ndss-symposium.org/ndss2013/ndss-2013-programme/clickonomics-determining-effect-anti-piracy-measures-one-click-hosting/
[debrid]: https://real-debrid.com/terms
[convenience]: https://cms.mit.edu/piracy-is-the-future-of-televison/
[kodi]: https://doi.org/10.1145/3563700
[warez]: https://punctumbooks.com/catalog/10.53288/0339.1.00
[euipo]: https://euipo.europa.eu/tunnel-web/secure/webdav/guest/document_library/observatory/documents/reports/2024_online_copyright_infringement/2024_online_copyright_infringement_in_the_EU_ExSum_en.pdf
[commission]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023H1018
[hls]: https://www.rfc-editor.org/rfc/rfc8216.html#section-4.3.4.1

</article>
