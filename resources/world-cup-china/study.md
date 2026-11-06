<a id="china-world-cup-kung-fu-soccer"></a>
## China: World Cup versus Kung Fu Soccer

**Many of the same hubs, with markedly different concentration.** In each collection’s first 14 observed days, Nanjing accounts for **30.3% of World Cup downloader memberships and 59.9% of Kung Fu Soccer’s**. Eight cities appear in both top-ten lists, but the normalized city distributions overlap by only **59.5%**. World Cup activity is more spread across Shanghai, Hangzhou and Shenzhen. This describes the geography of observed distribution; it does not estimate viewers or comparative national popularity.

**The network profiles also differ.** Hosting flags cover **5.05% versus 0.53%** of China downloader memberships; VPN flags cover **2.04% versus 1.09%**. Mobile-carrier shares are closer. Neither collection has a retained satellite-flagged China membership in any of the four windows. A zero flag count does not establish that a network type was absent.

### Comparable windows and coverage

The main comparison uses **H3 resolution 8 for both objects**, freshly regenerated Kung Fu Soccer geography, the same frozen IPinfo databases and the same minimum of three downloaders per cell. World Cup sampling starts **June 29, 2026 — Round of 32**. Kung Fu Soccer starts October 3. Comparing the first 14 dates controls observation age; comparing the same October dates controls calendar time. Neither controls release type or discovery effort.

<div class="wc-table-wrap" tabindex="0" role="region" aria-label="Primary comparison · collection aggregate threshold · H3r8">
<table><caption>Primary comparison · collection aggregate threshold · H3r8</caption><thead><tr><th scope="col">Collection</th><th scope="col">First 14 dates</th><th scope="col">Torrents with daily cache / full catalog</th><th scope="col">China D-days</th><th scope="col">China U-days</th><th scope="col">China share of world D-days</th></tr></thead><tbody>
<tr><td>World Cup</td><td>2026-06-29 to 2026-07-12</td><td>323 of 493</td><td>359,440</td><td>8,191</td><td>10.4%</td></tr>
<tr><td>Kung Fu Soccer</td><td>2026-10-03 to 2026-10-16</td><td>34 of 35</td><td>399,602</td><td>80,717</td><td>55.2%</td></tr>
</tbody></table></div>

D-days and U-days are sums of daily IP–canonical-torrent memberships. The same address can count on several torrents and days, and in both roles. They are neither completed transfers nor bandwidth. “Torrents with cache” measures observation coverage, not how many have China activity.

### Explore places and network types

The controls update both charts and the exact network table. The prose and tables below the explorer retain the first-14-day comparison unless explicitly labeled otherwise.

<link rel="stylesheet" href="../resources/world-cup-china/china.css">
<section id="china-explorer" aria-label="China comparison explorer" data-renderer="izzi">
<div class="china-controls">
<label>Observation window <select id="china-window">
<option value="first14">First 14 collection days</option>
<option value="next14">Collection days 15–28</option>
<option value="oct03_16">Same dates: October 3–16</option>
<option value="oct17_30">Same dates: October 17–30</option>
</select></label>
<label>Membership role <select id="china-role"><option value="downloaders">Downloaders</option><option value="uploaders">Uploaders</option></select></label>
<button type="button" id="china-reset">Reset comparison</button>
</div>
<p id="china-caption" aria-live="polite"></p>
<p id="china-overlap"></p>
<p class="wc-izzi-legend"><span>WC = World Cup</span><span>KFS = Kung Fu Soccer</span></p>
<p>Bars use a shared zero baseline within each chart. Axis maxima adjust to the selected comparison. Hover, focus or tap a value for exact counts. On narrow screens, scroll within each chart.</p>
<div id="china-city-chart" class="wc-izzi-scroll" tabindex="0" role="region" aria-label="China city distributions">{% include china-first14-downloaders-city.svg %}</div>
<p><a id="china-city-svg" href="../resources/china-first14-downloaders-city.svg">Open city chart (SVG)</a> · <a id="china-city-spec" href="../data/world-cup-izzi/china-first14-downloaders-city.json">City chart values (JSON)</a></p>
<div id="china-network-chart" class="wc-izzi-scroll" tabindex="0" role="region" aria-label="China network flags">{% include china-first14-downloaders-network.svg %}</div>
<p><a id="china-network-svg" href="../resources/china-first14-downloaders-network.svg">Open network chart (SVG)</a> · <a id="china-network-spec" href="../data/world-cup-izzi/china-first14-downloaders-network.json">Network chart values (JSON)</a></p>
<details><summary>Exact values for the selected network comparison</summary><div id="china-network-values" class="wc-table-wrap" tabindex="0" role="region" aria-label="Selected network counts"></div></details>
<p id="china-chart-error" hidden>Interactive charts could not load. The first-14-day results and downloadable tables remain available below.</p>
<noscript><p>Enable JavaScript to change the charts. Exact first-14-day figures and CSV downloads are provided below.</p></noscript>
</section>
<script type="module" src="../resources/world-cup-china/china.js"></script>

### Where the distributions coincide—and diverge

<div class="wc-table-wrap" tabindex="0" role="region" aria-label="Union of downloader top-ten cities · first 14 days">
<table><caption>Union of downloader top-ten cities · first 14 days</caption><thead><tr><th scope="col">IPinfo city</th><th scope="col">Province or municipality</th><th scope="col">World Cup D-days</th><th scope="col">WC China share</th><th scope="col">Kung Fu Soccer D-days</th><th scope="col">KFS China share</th></tr></thead><tbody>
<tr><td>Nanjing</td><td>Jiangsu</td><td>109,031</td><td>30.3%</td><td>239,472</td><td>59.9%</td></tr>
<tr><td>Shanghai</td><td>Shanghai</td><td>55,506</td><td>15.4%</td><td>23,287</td><td>5.8%</td></tr>
<tr><td>Hangzhou</td><td>Zhejiang</td><td>53,747</td><td>15.0%</td><td>6,131</td><td>1.5%</td></tr>
<tr><td>Shenzhen</td><td>Guangdong</td><td>38,074</td><td>10.6%</td><td>16,160</td><td>4.0%</td></tr>
<tr><td>Xi’an</td><td>Shaanxi</td><td>5,782</td><td>1.6%</td><td>25,732</td><td>6.4%</td></tr>
<tr><td>Wuxi</td><td>Jiangsu</td><td>2,160</td><td>0.6%</td><td>16,397</td><td>4.1%</td></tr>
<tr><td>Jiaxing</td><td>Zhejiang</td><td>10,865</td><td>3.0%</td><td>5,811</td><td>1.5%</td></tr>
<tr><td>Beijing</td><td>Beijing</td><td>9,361</td><td>2.6%</td><td>5,511</td><td>1.4%</td></tr>
<tr><td>Suzhou</td><td>Jiangsu</td><td>6,265</td><td>1.7%</td><td>1,408</td><td>0.4%</td></tr>
<tr><td>Zhengzhou</td><td>Henan</td><td>5,078</td><td>1.4%</td><td>4,225</td><td>1.1%</td></tr>
<tr><td>Qingdao</td><td>Shandong</td><td>5,063</td><td>1.4%</td><td>4,486</td><td>1.1%</td></tr>
<tr><td>Chengdu</td><td>Sichuan</td><td>3,902</td><td>1.1%</td><td>4,503</td><td>1.1%</td></tr>
</tbody></table></div>

<div class="wc-table-wrap" tabindex="0" role="region" aria-label="Seven leading province-level labels · first 14 days">
<table><caption>Seven leading province-level labels · first 14 days</caption><thead><tr><th scope="col">Province or municipality</th><th scope="col">World Cup D share</th><th scope="col">Kung Fu Soccer D share</th></tr></thead><tbody>
<tr><td>Jiangsu</td><td>32.9%</td><td>64.5%</td></tr>
<tr><td>Zhejiang</td><td>20.1%</td><td>3.7%</td></tr>
<tr><td>Shanghai</td><td>15.4%</td><td>5.8%</td></tr>
<tr><td>Guangdong</td><td>12.7%</td><td>4.7%</td></tr>
<tr><td>Shaanxi</td><td>1.6%</td><td>6.4%</td></tr>
<tr><td>Beijing</td><td>2.6%</td><td>1.4%</td></tr>
<tr><td>Fujian</td><td>2.5%</td><td>0.5%</td></tr>
</tbody></table></div>

Jiangsu’s larger Kung Fu Soccer share is chiefly Nanjing, with Wuxi also prominent. World Cup distribution has substantially larger Zhejiang, Shanghai and Guangdong shares. All retained China memberships in the compared windows join to a province-level label in the pinned IPinfo crosswalk; that is join completeness, not a measurement of geolocation accuracy.

For uploaders, Nanjing’s shares are **54.7% and 80.4%**. The first-14-day city overlap is 70.7%, with seven common top-ten cities. This stronger pooled overlap is sensitive to the observation window and torrent weighting; it should not be read as evidence of a shared seeding organization.

The overlap statistic sums the smaller of the two normalized shares at every city. Identical city distributions score 100%; disjoint distributions score 0%. It never counts shared IPs or people. Spearman city-rank correlations are 0.706 for downloaders and 0.800 for uploaders, computed across the union of observed cities with absent memberships set to zero. These are descriptive, with no population significance test.

### Network characteristics: retain role and denominator

<div class="wc-table-wrap" tabindex="0" role="region" aria-label="All retained China memberships · first 14 days · overlapping flags">
<table><caption>All retained China memberships · first 14 days · overlapping flags</caption><thead><tr><th scope="col">Positive flag</th><th scope="col">WC D count (share)</th><th scope="col">KFS D count (share)</th><th scope="col">WC U count (share)</th><th scope="col">KFS U count (share)</th></tr></thead><tbody>
<tr><td>Hosting</td><td>18,146 (5.048%)</td><td>2,137 (0.535%)</td><td>223 (2.723%)</td><td>94 (0.116%)</td></tr>
<tr><td>VPN</td><td>7,347 (2.044%)</td><td>4,362 (1.092%)</td><td>94 (1.148%)</td><td>900 (1.115%)</td></tr>
<tr><td>Mobile carrier</td><td>4,136 (1.151%)</td><td>5,312 (1.329%)</td><td>244 (2.979%)</td><td>310 (0.384%)</td></tr>
<tr><td>Satellite</td><td>0 (0.000%)</td><td>0 (0.000%)</td><td>0 (0.000%)</td><td>0 (0.000%)</td></tr>
<tr><td>Proxy</td><td>95 (0.026%)</td><td>47 (0.012%)</td><td>2 (0.024%)</td><td>4 (0.005%)</td></tr>
<tr><td>Relay</td><td>0 (0.000%)</td><td>25 (0.006%)</td><td>0 (0.000%)</td><td>0 (0.000%)</td></tr>
<tr><td>Tor (IPinfo)</td><td>0 (0.000%)</td><td>0 (0.000%)</td><td>0 (0.000%)</td><td>0 (0.000%)</td></tr>
<tr><td>Tor (exit list)</td><td>0 (0.000%)</td><td>0 (0.000%)</td><td>0 (0.000%)</td><td>0 (0.000%)</td></tr>
<tr><td>Named privacy service</td><td>0 (0.000%)</td><td>25 (0.006%)</td><td>0 (0.000%)</td><td>0 (0.000%)</td></tr>
</tbody></table></div>

The largest first-window difference is hosting. World Cup uploader mobile and hosting shares are also higher, while uploader VPN shares are nearly equal. The 25 Kung Fu Soccer downloader relay flags and 25 named-service flags are separate marginal totals; matching counts do not establish that they refer to the same memberships.

IPinfo’s hosting and VPN fields identify network characteristics; its mobile database maps IP ranges to carrier information. Mobile does not establish that a handset was used, and a VPN flag does not identify the person’s location or motivation. “Named privacy service” means an identified privacy-service provider, not an OTT broadcaster. Carrier names, ASNs and service names are not retained in these aggregate products, so this analysis cannot establish that the two collections used the same operators. [IPinfo privacy fields](https://ipinfo.io/developers/privacy-detection-database), [mobile-carrier fields](https://ipinfo.io/developers/ip-to-mobile-carrier-database).

The native outputs do not report per-record classification completeness. Missing classifications can contribute zero flags; therefore unflagged activity cannot be labeled residential, direct, or known non-VPN. Tor uses both an IPinfo field and a separate exit-list field, shown separately.

### How much of the network gap is the city mix?

Both collections are standardized to the same city weights: the mean of their two within-China city shares, restricted to cities observed in both. This is a descriptive adjustment, not a causal model. The common-city subset retains 99.9% of each downloader distribution and at least 99.7% of each uploader distribution.

<div class="wc-table-wrap" tabindex="0" role="region" aria-label="Observed and standardized rates use the same common-city subset · first 14 days">
<table><caption>Observed and standardized rates use the same common-city subset · first 14 days</caption><thead><tr><th scope="col">Role / flag</th><th scope="col">Observed WC rate</th><th scope="col">Observed KFS rate</th><th scope="col">Same-city-weight WC rate</th><th scope="col">Same-city-weight KFS rate</th></tr></thead><tbody>
<tr><td>Downloaders / Hosting</td><td>5.05%</td><td>0.51%</td><td>3.52%</td><td>1.06%</td></tr>
<tr><td>Downloaders / VPN</td><td>2.04%</td><td>1.09%</td><td>1.81%</td><td>1.24%</td></tr>
<tr><td>Downloaders / Mobile carrier</td><td>1.15%</td><td>1.32%</td><td>1.49%</td><td>1.61%</td></tr>
<tr><td>Uploaders / Hosting</td><td>2.73%</td><td>0.11%</td><td>1.76%</td><td>0.20%</td></tr>
<tr><td>Uploaders / VPN</td><td>1.15%</td><td>1.12%</td><td>1.08%</td><td>1.07%</td></tr>
<tr><td>Uploaders / Mobile carrier</td><td>2.98%</td><td>0.38%</td><td>1.86%</td><td>0.74%</td></tr>
</tbody></table></div>

For downloaders, the World Cup–Kung Fu Soccer hosting gap is 4.54 percentage points on the common-city subset. The symmetric decomposition assigns 2.07 points to the different city mix and 2.47 points to differences within cities. Higher World Cup hosting rates persist after matching the city weights.

### Does the finding survive alternative comparisons?

<div class="wc-table-wrap" tabindex="0" role="region" aria-label="Time-window sensitivity · all memberships · H3r8">
<table><caption>Time-window sensitivity · all memberships · H3r8</caption><thead><tr><th scope="col">Window</th><th scope="col">WC dates</th><th scope="col">KFS dates</th><th scope="col">D city overlap</th><th scope="col">U city overlap</th><th scope="col">WC Nanjing D share</th><th scope="col">KFS Nanjing D share</th></tr></thead><tbody>
<tr><td>First 14 collection days</td><td>2026-06-29 to 2026-07-12</td><td>2026-10-03 to 2026-10-16</td><td>59.5%</td><td>70.7%</td><td>30.3%</td><td>59.9%</td></tr>
<tr><td>Collection days 15–28</td><td>2026-07-13 to 2026-07-26</td><td>2026-10-17 to 2026-10-30</td><td>48.0%</td><td>44.5%</td><td>28.6%</td><td>73.1%</td></tr>
<tr><td>Same dates: October 3–16</td><td>2026-10-03 to 2026-10-16</td><td>2026-10-03 to 2026-10-16</td><td>54.7%</td><td>21.1%</td><td>26.8%</td><td>59.9%</td></tr>
<tr><td>Same dates: October 17–30</td><td>2026-10-17 to 2026-10-30</td><td>2026-10-17 to 2026-10-30</td><td>46.2%</td><td>33.3%</td><td>27.6%</td><td>73.1%</td></tr>
</tbody></table></div>

Kung Fu Soccer is more concentrated in Nanjing in every window. Uploader geography is much less stable: World Cup’s October 3–16 uploader distribution is led by Shanghai at 47.0%, while Kung Fu Soccer’s is led by Nanjing at 80.4%. Matching dates therefore gives only 21.1% uploader city overlap. Calendar matching compares an older World Cup catalog with newly observed Kung Fu Soccer releases.

<div class="wc-table-wrap" tabindex="0" role="region" aria-label="One flag removed at a time · first 14 days · no new cell threshold">
<table><caption>One flag removed at a time · first 14 days · no new cell threshold</caption><thead><tr><th scope="col">Separate exclusion</th><th scope="col">D overlap</th><th scope="col">WC Nanjing D share</th><th scope="col">KFS Nanjing D share</th></tr></thead><tbody>
<tr><td>None</td><td>59.5%</td><td>30.3%</td><td>59.9%</td></tr>
<tr><td>Hosting</td><td>61.1%</td><td>31.9%</td><td>60.2%</td></tr>
<tr><td>VPN</td><td>59.7%</td><td>30.6%</td><td>59.9%</td></tr>
<tr><td>Mobile carrier</td><td>59.1%</td><td>30.6%</td><td>60.7%</td></tr>
<tr><td>Proxy</td><td>59.5%</td><td>30.3%</td><td>59.9%</td></tr>
</tbody></table></div>

The location difference persists when each flag is removed separately. Nanjing itself has only 65 World Cup and nine Kung Fu Soccer hosting-flagged downloader memberships in this window. Removing the observed hosting flags does not explain away its concentration. It also does not establish residential demand, because unflagged infrastructure and geolocation centroids remain possible.

<div class="wc-table-wrap" tabindex="0" role="region" aria-label="First two observed weeks · per-torrent threshold · IP–torrent–week memberships">
<table><caption>First two observed weeks · per-torrent threshold · IP–torrent–week memberships</caption><thead><tr><th scope="col">Collection / role</th><th scope="col">China-positive torrents</th><th scope="col">Largest torrent share</th><th scope="col">Pooled Nanjing share</th><th scope="col">Equal-torrent Nanjing share</th><th scope="col">Nanjing share after dropping one torrent</th></tr></thead><tbody>
<tr><td>World Cup / downloaders</td><td>276</td><td>1.6%</td><td>30.5%</td><td>27.5%</td><td>29.8% to 30.5%</td></tr>
<tr><td>World Cup / uploaders</td><td>256</td><td>12.4%</td><td>58.0%</td><td>13.4%</td><td>53.5% to 59.3%</td></tr>
<tr><td>Kung Fu Soccer / downloaders</td><td>34</td><td>5.2%</td><td>61.9%</td><td>58.9%</td><td>61.3% to 62.6%</td></tr>
<tr><td>Kung Fu Soccer / uploaders</td><td>34</td><td>7.2%</td><td>81.5%</td><td>72.0%</td><td>81.1% to 81.9%</td></tr>
</tbody></table></div>

This separate weighting check uses weekly products so each canonical torrent can receive equal weight. Its counts differ from the daily aggregate because both the interval and threshold placement differ. Downloader city overlap remains 59.3% with equal torrent weights, and no single omitted torrent removes the Nanjing gap. Equal weighting changes uploader overlap to 35.8%, versus 72.8% when weekly memberships are pooled. A “typical torrent” and the dominant uploader mass answer different questions; small torrents get much more influence under equal weighting.

Across all four windows and both roles, changing H3r8 to H3r5 changes city overlap by less than 0.2 percentage points. Resolution sensitivity is small here, but city centroids remain city centroids at either grid resolution. There is no defensible neighborhood-scale or urban–rural claim.

<details class="wc-sources" markdown="1">
<summary>China study: sources, exports and reproducibility</summary>

- [All city/window counts, H3r8 and H3r5 (CSV)](../data/world-cup-china/china-city-day-memberships.csv)
- [Canonical torrent × city weekly counts (CSV)](../data/world-cup-china/first14-torrent-city-weeks.csv)
- [Complete reductions and input hashes (JSON gzip)](../data/world-cup-china/analysis.json.gz)
- [Chart data for every control state (JSON)](../data/world-cup-china/chart-data.json)
- [Kung Fu Soccer canonical inventory (JSON gzip)](../data/world-cup-china/kung-fu-soccer-inventory.json.gz)
- [China city-to-province crosswalk (JSON gzip)](../data/world-cup-china/china-location-index.json.gz)
- [Kung Fu Soccer H3r8 products and checksums](../data/world-cup-china/H3r8/manifest.json)
- [Validation and source manifest](../data/world-cup-china/provenance.json)
- [Analysis implementation](https://github.com/bdekoz/alpha60/blob/main/scripts/analyze-world-cup-china.py)

China means the native `CHN` label; `HKG`, `MAC` and `TWN` remain separate geographic codes. A cell’s country and city labels come from the first retained constituent location, not a dominant-location vote. Province labels join GeoNames IDs to the same IPinfo location snapshot, dated May 5, 2026. All five frozen database checksums are recorded. The shared snapshot makes backend versions comparable; it does not establish location or network accuracy on the collection dates.

Kung Fu Soccer has 36 original torrent files joined to 35 canonical identities using original metainfo hashes; World Cup has 493 canonical identities. No media-probe data were supplied for Kung Fu Soccer, and that missing coverage is explicit. Native daily aggregate products retain uploaders only in cells with at least three downloaders. The weekly weighting check thresholds each torrent separately. Combined flag exclusions cannot be reconstructed by summing overlapping marginal flags.

These are observational comparisons of sampled distribution. Shared city labels, geography adjusted network rates, and matching watermarks cannot identify shared viewers or operators. A subsequent provider-level study would need pinned ASN/carrier/service fields, lookup-success indicators and joint flag combinations, with aggregate publication and explicit coverage checks.

</details>
