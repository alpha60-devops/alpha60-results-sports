<a id="broadcast-downloads"></a>
### Broadcast comparison downloads and counting rules

The stage-four source ledger records retrieval date, source version, market, language, platform, measurement provider, population, metric, window, overlap and exclusions. Published broadcaster releases are evidence of what was reported, not independent access to provider microdata. All quoted audience figures are kept separate from estimates and analyst assumptions.

- [Sources, measurements, fees and exclusions (JSON)](../data/world-cup-broadcast/sources-and-measurements.json)
- [Audience measurement ledger (CSV)](../data/world-cup-broadcast/broadcast-measurements.csv)
- [All 493 catalog dispositions and fixture joins (JSON)](../data/world-cup-broadcast/fixture-catalog.json)
- [One-, seven- and 28-day counts, names and coverage (JSON)](../data/world-cup-broadcast/fixture-windows.json)
- [Selected full torrent names and windows (CSV)](../data/world-cup-broadcast/fixture-torrents.csv)
- [Rank comparisons and all network/age sensitivities (JSON)](../data/world-cup-broadcast/comparisons.json)
- [Retained language and FOX sensitivity (JSON)](../data/world-cup-broadcast/retained-sensitivity.json)
- [Fixed catalog versus later additions (JSON)](../data/world-cup-broadcast/catalog-age-check.json)
- [Stage-three country roster and definition (JSON)](../data/world-cup-broadcast/country-roster.json)
- [2027 commercial assumptions, formulas and results (JSON)](../data/world-cup-broadcast/valuation.json)
- [2026 fee and allocation calculations (JSON)](../data/world-cup-broadcast/fee-proxies.json)
- [Read-only Gold cache input hashes (compressed JSON)](../data/world-cup-broadcast/cache-source-hashes.json.gz)

- world-cup-broadcast-us-audiences: [native SVG](../resources/world-cup-broadcast-us-audiences.svg) · [values and rendering specification](../data/world-cup-broadcast/world-cup-broadcast-us-audiences.json).
- world-cup-broadcast-us-torrents: [native SVG](../resources/world-cup-broadcast-us-torrents.svg) · [values and rendering specification](../data/world-cup-broadcast/world-cup-broadcast-us-torrents.json).
- world-cup-broadcast-observed-age: [native SVG](../resources/world-cup-broadcast-observed-age.svg) · [values and rendering specification](../data/world-cup-broadcast/world-cup-broadcast-observed-age.json).


The new age-window series unions downloader IPs from daily caches across canonical aliases and fixture versions. It uses frozen IPinfo country and privacy databases directly, without the map’s H3 threshold. Day one includes the first observed cache date; day 28 ends 27 calendar days later. Missing dates are recorded, never interpolated. A fixture union joins the independently aligned windows of its versions, not a single simultaneous audience. Unknown audio remains unknown; multi-audio releases can appear in more than one audio group, so language rows must not be summed.

The retained-geography table preserves the existing per-torrent H3r8 threshold of three downloaders. Hosting and VPN exclusions overlap and are performed separately. IP locations and network flags come from the archived database vintage; they do not establish residence. No IP addresses are included in these public downloads. The inventory hashes, cache hashes and database build dates are retained for reproduction.

<a id="broadcast-fee-scope"></a>
### Rights fees and revisions

Sources 14, 19 and 31–33 contain the fee reports. The $485M/$600M figures have conflicting standalone-versus-bundle descriptions. The 2017 fee-plus-host-bonus reports are historical conditional terms, not confirmations of the final bill. The analysis shows both full allocation and an assumed 75% allocation, without selecting an undisclosed contract allocation. No Canadian or Mexican rights are priced from the U.S. English/Spanish fees.

<a id="broadcast-2027-scope"></a>
The announced 2027 Netflix geography is supported by sources 17–18; source 19 reports $200M for 2027 US+Canada. Source 31 separately reports $300M for 2027+2031 US rights. They are not interchangeable. Actual contract schedules, Mexico comparables, future net CPM, account acquisition, retention and costs remain unknown. Source 29 confirms the production partner, not its fee. The valuation workbook labels all commercial assumptions and keeps Mexico separate.

Telemundo Mexico–England is 23.2M in source 21, replacing the 23.1M earlier report in source 30. The preliminary 22.6M final in source 34 is superseded by 23.9M. M6’s 20.3M semifinal in source 24 is consolidated J+28 (or J+7 if unavailable), whereas source 10 reports 20.2M at July 20; the paired M6 comparison uses the same July 21 release vintage. FOX USA–Belgium includes pre-match coverage (source 26) and is excluded from matched-window ranking. The expanded Nielsen OOH footprint (source 07) limits historical comparisons.

<a id="broadcast-gaps"></a>
### Coverage gaps and excluded comparisons

<div class="wc-table-wrap" tabindex="0" role="region" aria-label="Source gaps · absence is not zero">
<table class="wc-broadcast-table "><caption>Source gaps · absence is not zero</caption>
<thead><tr><th scope="col">Market</th><th scope="col">Treatment</th><th scope="col">Reason</th></tr></thead>
<tbody>
<tr><td>MEX</td><td>excluded</td><td>60M Mexico–England headline lacks sufficient metric/provider/universe definition; no verified Mexico 2027 rights fee comparable.</td></tr>
<tr><td>KOR</td><td>context-only</td><td>Household ratings for broadcaster-specific universes; no verified person-AMA series.</td></tr>
<tr><td>CHN</td><td>context-only</td><td>CSM 35-city share differs from national person AMA; total contacts cannot establish unique audience.</td></tr>
<tr><td>TUR</td><td>unavailable</td><td>2026 rights/distribution source found, no compatible reported post-event fixture audience verified. 2022 figures excluded.</td></tr>
<tr><td>GBR</td><td>outside-cache-window</td><td>ITV June 17 England–Croatia 14.2M match average predates June 29 sampling.</td></tr>
<tr><td>ARG</td><td>unavailable</td><td>No sufficiently defined primary fixture series verified in this bounded review.</td></tr>
<tr><td>JPN</td><td>unavailable</td><td>No sufficiently defined primary fixture series verified in this bounded review.</td></tr>
<tr><td>BRA</td><td>reach-only</td><td>142.7M Globo reach differs from average audience; deduplication/provider details insufficient for cross-market ranking.</td></tr>
<tr><td>ESP</td><td>context-only</td><td>RTVE final 14.5M and 33-match average 4.870M retained; competing all-channel and extra-time windows cannot be silently combined.</td></tr>
</tbody></table></div>

### External source register

<a id="broadcast-source-01" class="wc-broadcast-source"></a>

**source-01. [Broadcasters, services, and their distribution](https://alpha60-devops.github.io/alpha60-results-sports/docs/world-cup-ott-vendors.html)** · retrieved 2026-11-11 UTC. **S01. Broadcasters, services, and their distribution.** Existing sports report and the publication destination for the broadcast comparison and rights valuation.

<a id="broadcast-source-02" class="wc-broadcast-source"></a>

**source-02. [language-geography page](https://alpha60-devops.github.io/alpha60-results-sports/docs/world-cup-distro-en-es-fr.html)** · retrieved 2026-11-11 UTC. **S02. language-geography page.** Existing language evidence and the published French/Spanish map section. Full-country table totals differ from cropped map totals.

<a id="broadcast-source-03" class="wc-broadcast-source"></a>

**source-03. [Hollywood Reporter article](https://www.hollywoodreporter.com/tv/tv-news/world-cup-final-tv-ratings-fox-telemundo-1236652686/)** · retrieved 2026-11-11 UTC. **S03. Hollywood Reporter article.** User-supplied reporting lead. Full article unavailable: HTTP 402; no inaccessible content is quoted or assumed.

<a id="broadcast-source-04" class="wc-broadcast-source"></a>

**source-04. [FOX release, July 21](https://www.foxsports.com/stories/presspass/fifa-world-cup-2026-final-etches-place-record-books-most-watched-soccer-telecast-u-s-history)** · published 2026-07-21 · retrieved 2026-11-11 UTC. **S04. FOX release, July 21.** Primary broadcaster release, July 21, 2026, citing Nielsen. Governs the FOX final and tournament-average inputs.

<a id="broadcast-source-05" class="wc-broadcast-source"></a>

**source-05. [NBCUniversal release, July 21](https://www.nbcuniversal.com/article/telemundo-and-peacock-redefine-soccer-fandom-us-record-breaking-audiences-spanish-language-coverage)** · published 2026-07-21 · retrieved 2026-11-11 UTC. **S05. NBCUniversal release, July 21.** Primary NBCUniversal release, July 21, 2026. National TAD includes streaming; local-station measures have different universes and reach qualifiers.

<a id="broadcast-source-06" class="wc-broadcast-source"></a>

**source-06. [AP report, July 21](https://apnews.com/article/444951fd3ad6a19a8a1e1fabed868181)** · published 2026-07-21 · retrieved 2026-11-11 UTC. **S06. AP report, July 21.** Earlier AP report, July 21, 2026; its preliminary Spanish figure is retained as a revision, not mixed with the later NBCU value.

<a id="broadcast-source-07" class="wc-broadcast-source"></a>

**source-07. [Nielsen methodology announcement](https://www.nielsen.com/news-center/2025/nielsen-out-of-home-measurement-now-covers-100-of-the-united-states/)** · retrieved 2026-11-11 UTC. **S07. Nielsen methodology announcement.** Primary measurement notice, February 2025: expanded U.S. out-of-home coverage changes historical comparability.

<a id="broadcast-source-08" class="wc-broadcast-source"></a>

**source-08. [Bell Media](https://www.bellmedia.ca/the-lede/press/bell-media-smashes-records-with-canadas-biggest-fifa-world-cup-ever-as-fifa-world-cup-2026-reaches-more-than-30-million-canadians-on-tsn-rds-ctv-noovo-and-crave/)** · published 2026-07-21 · retrieved 2026-11-11 UTC. **S08. Bell Media.** Primary Canadian broadcaster release, July 21, 2026, citing preliminary Numeris and separate internal streaming data.

<a id="broadcast-source-09" class="wc-broadcast-source"></a>

**source-09. [RTVE](https://amp.rtve.es/rtve/20260722/mundial-2026-alcanza-3843-millones-espectadores-unicos-rtve/17165132.shtml)** · published 2026-07-22 · retrieved 2026-11-11 UTC. **S09. RTVE.** Primary Spanish broadcaster release, July 22, 2026, citing Fifty5Blue and distinct digital measures; limited to RTVE coverage.

<a id="broadcast-source-10" class="wc-broadcast-source"></a>

**source-10. [Groupe M6](https://www.groupem6.fr/fr/bilan-exceptionnel-pour-la-coupe-du-monde-2026-sur-m6-et-m6/)** · published 2026-07-21 · retrieved 2026-11-11 UTC. **S10. Groupe M6.** Primary French broadcaster release, July 21, 2026: Médiamétrie/Médiamat plus internal M6+ data.

<a id="broadcast-source-11" class="wc-broadcast-source"></a>

**source-11. [ITV](https://www.itv.com/presscentre/media-releases/itvs-fifa-world-cup-2026-england-match-coverage-peaks-154-million-viewers)** · published 2026-06-18 · retrieved 2026-11-11 UTC. **S11. ITV.** Primary UK broadcaster release, June 18, 2026. BARB specification still needed; the cited match predates Alpha60 sampling.

<a id="broadcast-source-12" class="wc-broadcast-source"></a>

**source-12. [Globo](https://ge.globo.com/futebol/copa-do-mundo/noticia/2026/07/21/globo-alcanca-1427-milhoes-de-pessoas-durante-a-copa-do-mundo-de-2026.ghtml)** · published 2026-07-21 · retrieved 2026-11-11 UTC. **S12. Globo.** Broadcaster-reported Brazilian tournament reach, July 21, 2026. Measurement vendor and deduplication remain unresolved.

<a id="broadcast-source-13" class="wc-broadcast-source"></a>

**source-13. [Claro Sports, July 8](https://www.clarosports.com/futbol/mundial-2026/la-mayor-audiencia-del-siglo-mexico-vs-inglaterra-rompe-todos-los-records-con-60-millones-de-espectadores/)** · published 2026-07-08 · retrieved 2026-11-11 UTC. **S13. Claro Sports, July 8.** Secondary Mexico benchmark, July 8, 2026. The roughly 60 million claim lacks an established metric/provider; excluded from governed comparisons.

<a id="broadcast-source-14" class="wc-broadcast-source"></a>

**source-14. [Earlier contract reporting](https://www.businesstimes.com.sg/lifestyle/fox-telemundo-set-us500m-windfall-2026-world-cup)** · published 2017-05-30 · retrieved 2026-11-11 UTC. **S14. Earlier contract reporting.** Bloomberg report republished by The Business Times, May 30, 2017. Describes fee bases and conditional hosting bonuses; does not establish final cash paid.

<a id="broadcast-source-15" class="wc-broadcast-source"></a>

**source-15. [Contemporary fee reporting](https://www.sportsbusinessjournal.com/Articles/2026/07/13/cost-of-world-cup-media-rights-likely-to-explode-amid-audience-surge/)** · published 2026-07-13 · retrieved 2026-11-11 UTC. Secondary reporting lead retained from the research plan. The accessible follow-up extract did not expose the fee amounts; the published calculations instead use sources 19 and 31–33.

<a id="broadcast-source-16" class="wc-broadcast-source"></a>

**source-16. [FT original, access limited](https://www.ft.com/content/ec7a4254-0216-455a-88be-910d18b4100d)** · published 2026-07-11 · retrieved 2026-11-11 UTC. Subscription-limited underlying reporting lead; not used as independently inspected evidence of a contract or fee allocation.

<a id="broadcast-source-17" class="wc-broadcast-source"></a>

**source-17. [Netflix's current coverage scope](https://www.netflix.com/tudum/features/fifa-womens-world-cup-2027)** · published 2026-08-21 · retrieved 2026-11-11 UTC. **S17. Netflix's current coverage scope.** Primary Netflix viewing information, updated August 21, 2026. Confirms Brazil dates, 64 matches, U.S./Canada territories and announced languages.

<a id="broadcast-source-18" class="wc-broadcast-source"></a>

**source-18. [FIFA's original U.S. agreement](https://legal.fifa.com/tournament-organisation/commercial/media-releases/fifa-netflix-historic-broadcast-deal-2027-2031-womens-world-cup)** · published 2024-12-20 · retrieved 2026-11-11 UTC. **S18. FIFA's original U.S. agreement.** Primary FIFA announcement, December 20, 2024. Original U.S. deal includes Puerto Rico, all languages, 2027 and 2031; no fee disclosed.

<a id="broadcast-source-19" class="wc-broadcast-source"></a>

**source-19. [Reported Netflix price](https://www.spokesman.com/stories/2026/jul/29/netflix-is-paying-200-million-for-2027-womens-worl/)** · published 2026-07-29 · retrieved 2026-11-11 UTC. **S19. Reported Netflix price.** Vanessa Perdomo report republished by The Spokesman-Review, July 29, 2026. Reports $200 million for 2027 U.S./Canada rights from unnamed sources; Netflix declined comment; 2031 price unknown.

<a id="broadcast-source-20" class="wc-broadcast-source"></a>

**source-20. [Historical Women's World Cup averages](https://www.sportsmediawatch.com/2023/08/womens-world-cup-viewership-down-big-early-timeslots-uswnt-exit/)** · retrieved 2026-11-11 UTC. **S20. Historical Women's World Cup averages.** Sports Media Watch, August 2023. Historical FOX/FS1 averages for the 2019 and 2023 women’s tournaments; differences in schedule, format and team progress limit comparison.

<a id="broadcast-source-21" class="wc-broadcast-source"></a>

**source-21. [NBCUniversal · final tournament fixture table](https://nbcuniversalnewsgroup.com/telemundo/2026/07/21/telemundo-and-peacock-redefine-soccer-fandom-in-the-us-with-record-breaking-audiences-for-spanish-language-coverage-of-fifa-world-cup-2026/)** · published 2026-07-21 · retrieved 2026-11-11 UTC. Nielsen Big Data + Panel, Live+Same Day, match-window TAD; Adobe Analytics. Updated Mexico–England 23.2M. Streaming is included in TAD, not additional.

<a id="broadcast-source-22" class="wc-broadcast-source"></a>

**source-22. [Match TV · tournament audience report](https://matchtv.ru/football/chempionat_mira/matchtvnews_NI2345860_Chempionat_mira_po_futbolu_FIFA_2026_posmotreli_na_Match_TV_boleje_50_millionov_chelovek)** · published 2026-07-22 · retrieved 2026-11-11 UTC. Mediascope Russia. Ratings: men 14–59; reach: all people 4+. Includes separate live and repeat reach. Do not convert rating percentages into average people.

<a id="broadcast-source-23" class="wc-broadcast-source"></a>

**source-23. [CCTV · 2026 tournament report](https://1118.cctv.cn/2026/07/22/ARTIy8AyQUC9gNbnkWFvic9r260722.shtml)** · published 2026-07-22 · retrieved 2026-11-11 UTC. CSM 35-city audience share. Cross-media contact and video-view totals are repeated exposures, not unique people.

<a id="broadcast-source-24" class="wc-broadcast-source"></a>

**source-24. [M6 · first-half financial results](https://www.groupem6.fr/fr/resultats-du-premier-semestre-2026/)** · published 2026-07-29 · retrieved 2026-11-11 UTC. July 29 financial release gives France–Spain 20.3M consolidated J+28, or J+7 when J+28 unavailable (footnote 9), versus July 21 release 20.2M at July 20. Keep the July 21 pair together for the same publication vintage.

<a id="broadcast-source-25" class="wc-broadcast-source"></a>

**source-25. [FOX · tournament press index](https://www.foxsports.com/soccer/fifa-world-cup/press)** · published 2026-07-08 · retrieved 2026-11-11 UTC. Mexico–England 21.742M, Mexico–Ecuador 10.430M. Fixture-level measurement details less complete than NBCU table.

<a id="broadcast-source-26" class="wc-broadcast-source"></a>

**source-26. [Sports Media Watch · USA–Belgium revision](https://www.sportsmediawatch.com/2026/07/usmnt-belgium-record-viewership-among-most-watched-sporting-events/)** · published 2026-07-09 · retrieved 2026-11-11 UTC. 33.09M includes pre-match coverage; do not treat as match-only window.

<a id="broadcast-source-27" class="wc-broadcast-source"></a>

**source-27. [Nielsen Korea result reported by JoyNews24](https://www.joynews24.com/view/1987090)** · published 2026-07-21 · retrieved 2026-11-11 UTC. Secondary report: JTBC final 3.4% nationwide pay-TV households. Reported combined 6.8% uses different broadcaster household universes; excluded from person-audience comparisons.

<a id="broadcast-source-28" class="wc-broadcast-source"></a>

**source-28. [TRT · 2026 tournament coverage announcement](https://cdn-o.pr.trt.com.tr/trtportal/pdf/21717335.pdf)** · published 2026-06 · retrieved 2026-11-11 UTC. Distribution context only. No verified comparable 2026 final audience extracted.

<a id="broadcast-source-29" class="wc-broadcast-source"></a>

**source-29. [IMG · Netflix 2027 production appointment](https://www.img.com/our-news/netflix-taps-img-as-production-partner-for-fifa-womens-world-cup-brazil-2027)** · published 2026-06 · retrieved 2026-11-11 UTC. Production responsibility verified; contract cost undisclosed.

<a id="broadcast-source-30" class="wc-broadcast-source"></a>

**source-30. [NBC Sports · earlier Mexico–England audience](https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/nearly-45-million-watched-england-vs-mexico-on-sunday-night)** · published 2026-07-08 · retrieved 2026-11-11 UTC. Earlier Telemundo 23.1M; superseded in July 21 tournament table by 23.2M.

<a id="broadcast-source-31" class="wc-broadcast-source"></a>

**source-31. [WSJ report reproduced by interviewee John Kosner](https://www.kosnermedia.com/news/kosner-wsj-world-cup-future-tv-rights)** · published 2026-07-20 · retrieved 2026-11-11 UTC. Reports FOX $485M and Telemundo $600M for packages including 2023 women and 2026 men. Reports Netflix $300M for 2027+2031 US rights. Conflicts in scope with later $200M 2027 US+Canada report; never subtract across scopes to infer 2031 price.

<a id="broadcast-source-32" class="wc-broadcast-source"></a>

**source-32. [Reuters · broadcaster fees and audience](https://www.fidelity.com/news/article/default/202607212304RTRSNEWSCOMBINED_KBN3TI04A-OUSSP_1)** · published 2026-07-21 · retrieved 2026-11-11 UTC. Reports approximate $485M FOX and $600M Comcast rights packages including the World Cup. Not a disclosed contract or standalone allocation.

<a id="broadcast-source-33" class="wc-broadcast-source"></a>

**source-33. [MediaPost · US rights estimates](https://www.mediapost.com/publications/article/416379/rights-for-2030-world-cup-as-much-as-2b.html?edition=143201)** · published 2026-07-09 · retrieved 2026-11-11 UTC. Estimates $485M English and $600M Spanish for 2026; use alongside conflicting bundle descriptions, not as audited contract prices.

<a id="broadcast-source-34" class="wc-broadcast-source"></a>

**source-34. [AP via NBC Dallas · tournament average and preliminary final](https://www.nbcdfw.com/world-cup/spain-argentina-ratings-tv-stream/4052466/)** · published 2026-07-21 · retrieved 2026-11-11 UTC. FOX 7.737M average across 104 broadcasts on FOX, FS1 and Tubi. Earlier Telemundo final 22.6M is superseded by the NBCU July 21 TAD 23.9M.

<a id="broadcast-telekom"></a>
**Existing branding attribution:** [Deutsche Telekom announcement](https://www.telekom.com/de/newsroom/aktuelles/medieninformationen/2026/05/fifa-wm-2026). The original vendor evidence and all 22 map plates below remain part of this report.

<a id="broadcast-ap-language"></a>
**Existing viewing-language context:** [San Antonio Express-News / Associated Press](https://www.expressnews.com/sports/article/in-any-language-english-speakers-are-tuning-into-22339950.php), July 9–10 reporting retained from the original page. Context about some English-speaking Telemundo viewers; no population share is inferred.
