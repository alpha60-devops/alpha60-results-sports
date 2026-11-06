---
layout: default
title: "World Cup 2026: distribution, languages, and sources"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Seven reports share one canonical torrent inventory, IPinfo geography at H3 resolution 8, and inspectable evidence for every comparison."
---

<link rel="stylesheet" href="../resources/world-cup-stage1/report.css">
<article class="wc-report" markdown="1">

[![Alpha60](../resources/a60-logo-block-gray.simple.svg)](world-cup.html)

<nav class="wc-nav" aria-label="World Cup reports"><a href="world-cup.html">Overview</a><a href="world-cup-swarm-media.html">Formats and resolution</a><a href="world-cup-languages.html">Audio and subtitles</a><a href="world-cup-distro-en-es-fr.html">Language and geography</a><a href="world-cup-distro-usa-mex.html">North America and matches</a><a href="world-cup-ott-vendors.html">Broadcasters and services</a><a href="world-cup-asia-28.html">Asia-28 and China</a><a href="world-cup-2027-thoughts.html">Preparing for 2027</a></nav>

<p class="wc-kicker">World Cup 2026 · Stage one · November 6, 2026</p>

# World Cup 2026: distribution, languages, and sources

Seven reports share one canonical torrent inventory, IPinfo geography at H3 resolution 8, and inspectable evidence for every comparison.

<div class="wc-callout" markdown="1">
**Sampling began June 29, 2026 — Round of 32.** This snapshot runs through November 3. It describes observed peer-to-peer distribution during that window, including later circulation of older matches. It does not measure the full tournament's live audience.
</div>

## Explore the seven reports

<div class="wc-card-grid">
<div class="wc-card"><h3><a href="world-cup-swarm-media.html">Formats and resolution</a></h3><p>Video dimensions, codecs, encoder coverage and regional resolution mix.</p></div>
<div class="wc-card"><h3><a href="world-cup-languages.html">Audio and subtitles</a></h3><p>English, Spanish and French counts; all 493 hashes; language combinations and packaging.</p></div>
<div class="wc-card"><h3><a href="world-cup-distro-en-es-fr.html">Language and geography</a></h3><p>North American language distribution, census comparisons and their limits.</p></div>
<div class="wc-card"><h3><a href="world-cup-distro-usa-mex.html">North America and matches</a></h3><p>Host-country totals, top upload/download locations, and equal-age match windows.</p></div>
<div class="wc-card"><h3><a href="world-cup-ott-vendors.html">Broadcasters and services</a></h3><p>Evidence-based branding candidates and 22 native Cahill–Keyes maps.</p></div>
<div class="wc-card"><h3><a href="world-cup-asia-28.html">Asia-28 and China</a></h3><p>Asia-28 rankings, temporal coverage, matched-age media comparisons and China hypotheses.</p></div>
<div class="wc-card"><h3><a href="world-cup-2027-thoughts.html">Preparing for 2027</a></h3><p>What changes in Brazil, and a concrete sampling and analysis backlog.</p></div>
</div>

## What the snapshot establishes

<div class="wc-table-wrap" tabindex="0" role="region" aria-label="Measure">
<table>
<thead><tr><th scope="col">Measure</th><th scope="col">Result</th></tr></thead>
<tbody>
<tr><td>Canonical torrents</td><td>493 unique BTIHA; all 574 media observations joined</td></tr>
<tr><td>Video dimensions</td><td>430 identified; 63 unknown</td></tr>
<tr><td>Audio-language coverage</td><td>335 identified; 158 unknown</td></tr>
<tr><td>English / Spanish / French audio</td><td>188 / 7 / 2 torrents; categories can overlap</td></tr>
<tr><td>Branding attribution</td><td>360 assigned candidates in 21 families; 130 unknown and 3 conflicts</td></tr>
<tr><td>Geographic products</td><td>149 H3r8 files and 149 matched H3r5 comparison files validated</td></tr>
<tr><td>Observation window</td><td>June 29–November 3, 2026; 128 dates</td></tr>
</tbody></table>
</div>
The largest identified format is 1080-height AVC video. Language evidence is substantially stronger for English than Spanish or French. South Korea and China lead the observed Asia-28 distribution. The data do not establish individual listening choices, ethnic identity, national fandom, or a FOX–Telemundo audience crossover.

## H3r8 products

**Resolution 8 is the highest resolution used in this analysis.** The full native products are saved in the top-level `H3r8` directory and available below as compressed GeoJSON: 128 daily files, 19 weekly files, and two cumulative representations. All serialized cell indices and recorded resolution fields passed validation. The H3r5 baseline uses exactly the same frozen IPinfo databases.

[Download manifest with checksums](../H3r8/manifest.json) · [Cumulative aggregate GeoJSON](../H3r8/world-cup-2026-cumulative-aggregate.geojson.gz) · [Cumulative per-torrent GeoJSON, 74.4 MB](../H3r8/world-cup-2026-cumulative-btiha.geojson.gz)

<details markdown="1"><summary>All 149 H3r8 downloads</summary>

<div class="wc-table-wrap" tabindex="0" role="region" aria-label="H3r8 downloads"><table><thead><tr><th>Product</th><th>Compressed MB</th></tr></thead><tbody>
<tr><td><a href="../H3r8/world-cup-2026-cumulative-aggregate.geojson.gz">world-cup-2026-cumulative-aggregate.geojson.gz</a></td><td>1.98</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-cumulative-btiha.geojson.gz">world-cup-2026-cumulative-btiha.geojson.gz</a></td><td>74.38</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00001.geojson.gz">world-cup-2026-day-00001.geojson.gz</a></td><td>0.00</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00002.geojson.gz">world-cup-2026-day-00002.geojson.gz</a></td><td>0.02</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00003.geojson.gz">world-cup-2026-day-00003.geojson.gz</a></td><td>0.05</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00004.geojson.gz">world-cup-2026-day-00004.geojson.gz</a></td><td>0.10</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00005.geojson.gz">world-cup-2026-day-00005.geojson.gz</a></td><td>0.14</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00006.geojson.gz">world-cup-2026-day-00006.geojson.gz</a></td><td>0.17</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00007.geojson.gz">world-cup-2026-day-00007.geojson.gz</a></td><td>0.21</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00008.geojson.gz">world-cup-2026-day-00008.geojson.gz</a></td><td>0.26</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00009.geojson.gz">world-cup-2026-day-00009.geojson.gz</a></td><td>0.28</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00010.geojson.gz">world-cup-2026-day-00010.geojson.gz</a></td><td>0.32</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00011.geojson.gz">world-cup-2026-day-00011.geojson.gz</a></td><td>0.33</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00012.geojson.gz">world-cup-2026-day-00012.geojson.gz</a></td><td>0.33</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00013.geojson.gz">world-cup-2026-day-00013.geojson.gz</a></td><td>0.31</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00014.geojson.gz">world-cup-2026-day-00014.geojson.gz</a></td><td>0.33</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00015.geojson.gz">world-cup-2026-day-00015.geojson.gz</a></td><td>0.38</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00016.geojson.gz">world-cup-2026-day-00016.geojson.gz</a></td><td>0.37</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00017.geojson.gz">world-cup-2026-day-00017.geojson.gz</a></td><td>0.37</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00018.geojson.gz">world-cup-2026-day-00018.geojson.gz</a></td><td>0.38</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00019.geojson.gz">world-cup-2026-day-00019.geojson.gz</a></td><td>0.36</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00020.geojson.gz">world-cup-2026-day-00020.geojson.gz</a></td><td>0.38</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00021.geojson.gz">world-cup-2026-day-00021.geojson.gz</a></td><td>0.39</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00022.geojson.gz">world-cup-2026-day-00022.geojson.gz</a></td><td>0.41</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00023.geojson.gz">world-cup-2026-day-00023.geojson.gz</a></td><td>0.43</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00024.geojson.gz">world-cup-2026-day-00024.geojson.gz</a></td><td>0.43</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00025.geojson.gz">world-cup-2026-day-00025.geojson.gz</a></td><td>0.43</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00026.geojson.gz">world-cup-2026-day-00026.geojson.gz</a></td><td>0.41</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00027.geojson.gz">world-cup-2026-day-00027.geojson.gz</a></td><td>0.42</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00028.geojson.gz">world-cup-2026-day-00028.geojson.gz</a></td><td>0.42</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00029.geojson.gz">world-cup-2026-day-00029.geojson.gz</a></td><td>0.42</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00030.geojson.gz">world-cup-2026-day-00030.geojson.gz</a></td><td>0.42</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00031.geojson.gz">world-cup-2026-day-00031.geojson.gz</a></td><td>0.43</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00032.geojson.gz">world-cup-2026-day-00032.geojson.gz</a></td><td>0.42</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00033.geojson.gz">world-cup-2026-day-00033.geojson.gz</a></td><td>0.43</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00034.geojson.gz">world-cup-2026-day-00034.geojson.gz</a></td><td>0.43</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00035.geojson.gz">world-cup-2026-day-00035.geojson.gz</a></td><td>0.42</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00036.geojson.gz">world-cup-2026-day-00036.geojson.gz</a></td><td>0.42</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00037.geojson.gz">world-cup-2026-day-00037.geojson.gz</a></td><td>0.42</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00038.geojson.gz">world-cup-2026-day-00038.geojson.gz</a></td><td>0.41</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00039.geojson.gz">world-cup-2026-day-00039.geojson.gz</a></td><td>0.41</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00040.geojson.gz">world-cup-2026-day-00040.geojson.gz</a></td><td>0.43</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00041.geojson.gz">world-cup-2026-day-00041.geojson.gz</a></td><td>0.41</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00042.geojson.gz">world-cup-2026-day-00042.geojson.gz</a></td><td>0.41</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00043.geojson.gz">world-cup-2026-day-00043.geojson.gz</a></td><td>0.41</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00044.geojson.gz">world-cup-2026-day-00044.geojson.gz</a></td><td>0.41</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00045.geojson.gz">world-cup-2026-day-00045.geojson.gz</a></td><td>0.41</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00046.geojson.gz">world-cup-2026-day-00046.geojson.gz</a></td><td>0.40</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00047.geojson.gz">world-cup-2026-day-00047.geojson.gz</a></td><td>0.41</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00048.geojson.gz">world-cup-2026-day-00048.geojson.gz</a></td><td>0.40</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00049.geojson.gz">world-cup-2026-day-00049.geojson.gz</a></td><td>0.41</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00050.geojson.gz">world-cup-2026-day-00050.geojson.gz</a></td><td>0.39</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00051.geojson.gz">world-cup-2026-day-00051.geojson.gz</a></td><td>0.36</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00052.geojson.gz">world-cup-2026-day-00052.geojson.gz</a></td><td>0.37</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00053.geojson.gz">world-cup-2026-day-00053.geojson.gz</a></td><td>0.37</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00054.geojson.gz">world-cup-2026-day-00054.geojson.gz</a></td><td>0.37</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00055.geojson.gz">world-cup-2026-day-00055.geojson.gz</a></td><td>0.36</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00056.geojson.gz">world-cup-2026-day-00056.geojson.gz</a></td><td>0.36</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00057.geojson.gz">world-cup-2026-day-00057.geojson.gz</a></td><td>0.37</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00058.geojson.gz">world-cup-2026-day-00058.geojson.gz</a></td><td>0.36</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00059.geojson.gz">world-cup-2026-day-00059.geojson.gz</a></td><td>0.37</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00060.geojson.gz">world-cup-2026-day-00060.geojson.gz</a></td><td>0.36</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00061.geojson.gz">world-cup-2026-day-00061.geojson.gz</a></td><td>0.35</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00062.geojson.gz">world-cup-2026-day-00062.geojson.gz</a></td><td>0.42</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00063.geojson.gz">world-cup-2026-day-00063.geojson.gz</a></td><td>0.36</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00064.geojson.gz">world-cup-2026-day-00064.geojson.gz</a></td><td>0.36</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00065.geojson.gz">world-cup-2026-day-00065.geojson.gz</a></td><td>0.36</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00066.geojson.gz">world-cup-2026-day-00066.geojson.gz</a></td><td>0.34</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00067.geojson.gz">world-cup-2026-day-00067.geojson.gz</a></td><td>0.35</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00068.geojson.gz">world-cup-2026-day-00068.geojson.gz</a></td><td>0.42</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00069.geojson.gz">world-cup-2026-day-00069.geojson.gz</a></td><td>0.38</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00070.geojson.gz">world-cup-2026-day-00070.geojson.gz</a></td><td>0.36</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00071.geojson.gz">world-cup-2026-day-00071.geojson.gz</a></td><td>0.38</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00072.geojson.gz">world-cup-2026-day-00072.geojson.gz</a></td><td>0.38</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00073.geojson.gz">world-cup-2026-day-00073.geojson.gz</a></td><td>0.37</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00074.geojson.gz">world-cup-2026-day-00074.geojson.gz</a></td><td>0.34</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00075.geojson.gz">world-cup-2026-day-00075.geojson.gz</a></td><td>0.34</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00076.geojson.gz">world-cup-2026-day-00076.geojson.gz</a></td><td>0.34</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00077.geojson.gz">world-cup-2026-day-00077.geojson.gz</a></td><td>0.34</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00078.geojson.gz">world-cup-2026-day-00078.geojson.gz</a></td><td>0.33</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00079.geojson.gz">world-cup-2026-day-00079.geojson.gz</a></td><td>0.32</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00080.geojson.gz">world-cup-2026-day-00080.geojson.gz</a></td><td>0.33</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00081.geojson.gz">world-cup-2026-day-00081.geojson.gz</a></td><td>0.33</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00082.geojson.gz">world-cup-2026-day-00082.geojson.gz</a></td><td>0.32</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00083.geojson.gz">world-cup-2026-day-00083.geojson.gz</a></td><td>0.34</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00084.geojson.gz">world-cup-2026-day-00084.geojson.gz</a></td><td>0.34</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00085.geojson.gz">world-cup-2026-day-00085.geojson.gz</a></td><td>0.34</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00086.geojson.gz">world-cup-2026-day-00086.geojson.gz</a></td><td>0.33</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00087.geojson.gz">world-cup-2026-day-00087.geojson.gz</a></td><td>0.33</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00088.geojson.gz">world-cup-2026-day-00088.geojson.gz</a></td><td>0.34</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00089.geojson.gz">world-cup-2026-day-00089.geojson.gz</a></td><td>0.34</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00090.geojson.gz">world-cup-2026-day-00090.geojson.gz</a></td><td>0.36</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00091.geojson.gz">world-cup-2026-day-00091.geojson.gz</a></td><td>0.35</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00092.geojson.gz">world-cup-2026-day-00092.geojson.gz</a></td><td>0.36</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00093.geojson.gz">world-cup-2026-day-00093.geojson.gz</a></td><td>0.35</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00094.geojson.gz">world-cup-2026-day-00094.geojson.gz</a></td><td>0.35</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00095.geojson.gz">world-cup-2026-day-00095.geojson.gz</a></td><td>0.35</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00096.geojson.gz">world-cup-2026-day-00096.geojson.gz</a></td><td>0.37</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00097.geojson.gz">world-cup-2026-day-00097.geojson.gz</a></td><td>0.35</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00098.geojson.gz">world-cup-2026-day-00098.geojson.gz</a></td><td>0.36</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00099.geojson.gz">world-cup-2026-day-00099.geojson.gz</a></td><td>0.36</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00100.geojson.gz">world-cup-2026-day-00100.geojson.gz</a></td><td>0.36</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00101.geojson.gz">world-cup-2026-day-00101.geojson.gz</a></td><td>0.36</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00102.geojson.gz">world-cup-2026-day-00102.geojson.gz</a></td><td>0.35</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00103.geojson.gz">world-cup-2026-day-00103.geojson.gz</a></td><td>0.34</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00104.geojson.gz">world-cup-2026-day-00104.geojson.gz</a></td><td>0.38</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00105.geojson.gz">world-cup-2026-day-00105.geojson.gz</a></td><td>0.36</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00106.geojson.gz">world-cup-2026-day-00106.geojson.gz</a></td><td>0.35</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00107.geojson.gz">world-cup-2026-day-00107.geojson.gz</a></td><td>0.36</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00108.geojson.gz">world-cup-2026-day-00108.geojson.gz</a></td><td>0.37</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00109.geojson.gz">world-cup-2026-day-00109.geojson.gz</a></td><td>0.37</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00110.geojson.gz">world-cup-2026-day-00110.geojson.gz</a></td><td>0.37</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00111.geojson.gz">world-cup-2026-day-00111.geojson.gz</a></td><td>0.39</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00112.geojson.gz">world-cup-2026-day-00112.geojson.gz</a></td><td>0.39</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00113.geojson.gz">world-cup-2026-day-00113.geojson.gz</a></td><td>0.34</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00114.geojson.gz">world-cup-2026-day-00114.geojson.gz</a></td><td>0.33</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00115.geojson.gz">world-cup-2026-day-00115.geojson.gz</a></td><td>0.42</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00116.geojson.gz">world-cup-2026-day-00116.geojson.gz</a></td><td>0.41</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00117.geojson.gz">world-cup-2026-day-00117.geojson.gz</a></td><td>0.42</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00118.geojson.gz">world-cup-2026-day-00118.geojson.gz</a></td><td>0.41</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00119.geojson.gz">world-cup-2026-day-00119.geojson.gz</a></td><td>0.41</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00120.geojson.gz">world-cup-2026-day-00120.geojson.gz</a></td><td>0.40</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00121.geojson.gz">world-cup-2026-day-00121.geojson.gz</a></td><td>0.41</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00122.geojson.gz">world-cup-2026-day-00122.geojson.gz</a></td><td>0.41</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00123.geojson.gz">world-cup-2026-day-00123.geojson.gz</a></td><td>0.39</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00124.geojson.gz">world-cup-2026-day-00124.geojson.gz</a></td><td>0.46</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00125.geojson.gz">world-cup-2026-day-00125.geojson.gz</a></td><td>0.40</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00126.geojson.gz">world-cup-2026-day-00126.geojson.gz</a></td><td>0.39</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00127.geojson.gz">world-cup-2026-day-00127.geojson.gz</a></td><td>0.38</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-day-00128.geojson.gz">world-cup-2026-day-00128.geojson.gz</a></td><td>0.37</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-week-00001.geojson.gz">world-cup-2026-week-00001.geojson.gz</a></td><td>1.88</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-week-00002.geojson.gz">world-cup-2026-week-00002.geojson.gz</a></td><td>6.94</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-week-00003.geojson.gz">world-cup-2026-week-00003.geojson.gz</a></td><td>9.81</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-week-00004.geojson.gz">world-cup-2026-week-00004.geojson.gz</a></td><td>11.84</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-week-00005.geojson.gz">world-cup-2026-week-00005.geojson.gz</a></td><td>12.06</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-week-00006.geojson.gz">world-cup-2026-week-00006.geojson.gz</a></td><td>11.87</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-week-00007.geojson.gz">world-cup-2026-week-00007.geojson.gz</a></td><td>11.85</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-week-00008.geojson.gz">world-cup-2026-week-00008.geojson.gz</a></td><td>10.86</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-week-00009.geojson.gz">world-cup-2026-week-00009.geojson.gz</a></td><td>10.65</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-week-00010.geojson.gz">world-cup-2026-week-00010.geojson.gz</a></td><td>10.06</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-week-00011.geojson.gz">world-cup-2026-week-00011.geojson.gz</a></td><td>9.69</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-week-00012.geojson.gz">world-cup-2026-week-00012.geojson.gz</a></td><td>9.40</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-week-00013.geojson.gz">world-cup-2026-week-00013.geojson.gz</a></td><td>9.82</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-week-00014.geojson.gz">world-cup-2026-week-00014.geojson.gz</a></td><td>10.03</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-week-00015.geojson.gz">world-cup-2026-week-00015.geojson.gz</a></td><td>10.30</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-week-00016.geojson.gz">world-cup-2026-week-00016.geojson.gz</a></td><td>10.35</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-week-00017.geojson.gz">world-cup-2026-week-00017.geojson.gz</a></td><td>10.36</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-week-00018.geojson.gz">world-cup-2026-week-00018.geojson.gz</a></td><td>11.16</td></tr>
<tr><td><a href="../H3r8/world-cup-2026-week-00019.geojson.gz">world-cup-2026-week-00019.geojson.gz</a></td><td>3.80</td></tr>
</tbody></table></div>

</details>

<a id="methods"></a>

## Methods and coverage

The [shared inventory builder](https://github.com/bdekoz/alpha60/blob/main/scripts/build-torrent-inventory.py) preserves original `.torrent` info-byte hashes, full v2 hashes and verified hybrid aliases. Filenames are content evidence and source references, not identity keys. The six initially unmatched media hashes are verified v1/v2 aliases; no unmatched media records remain. The one metadata variation is a zero versus nonzero cached-file-size reading, not conflicting language or codec values.

The geographic denominator begins with **56,594,924 downloader and 539,766 uploader IP–canonical-torrent memberships**. An IP is unique within each torrent, role and interval; it may recur across torrents, roles and dates. Native “downloader” and “uploader” labels do not measure viewing or transferred traffic.

The native producer excludes unusable coordinates before H3 aggregation. Minimum-cell filtering then depends on whether counts are grouped per torrent or across the collection. Both representations are retained and labeled:

<div class="wc-table-wrap" tabindex="0" role="region" aria-label="Representation">
<table>
<thead><tr><th scope="col">Representation</th><th scope="col">Downloader memberships</th><th scope="col">Uploader memberships</th></tr></thead>
<tbody>
<tr><td>Unfiltered source memberships</td><td>56,594,924</td><td>539,766</td></tr>
<tr><td>Excluded: missing usable coordinates</td><td>171,965</td><td>77</td></tr>
<tr><td>Mapped before cell threshold</td><td>56,422,959</td><td>539,689</td></tr>
<tr><td>H3r5, collection aggregate, retained</td><td>56,416,490</td><td>539,660</td></tr>
<tr><td>H3r5, per torrent, retained</td><td>53,602,334</td><td>525,502</td></tr>
<tr><td>H3r8, collection aggregate, retained</td><td>56,407,686</td><td>539,629</td></tr>
<tr><td>H3r8, per torrent, retained</td><td>52,333,440</td><td>519,041</td></tr>
</tbody></table>
</div>
For H3r8, the per-torrent threshold removes 4,089,519 mapped downloader memberships and 20,648 uploader memberships. The aggregate threshold removes 15,273 and 60 respectively. Content tables and vendor maps use the per-torrent representation; overall country/city rankings use the aggregate. Their totals should not be added or substituted for each other. [Complete loss accounting](../data/world-cup-stage1/resolution-sensitivity.json)

IPinfo's location database build epoch is `1777968300` (May 5, 2026). Its version and the companion database checksums are [pinned in the source manifest](../data/world-cup-stage1/ipinfo-snapshot.json). This is a retrospective, fixed-snapshot lookup, not proof that every address had the same location throughout collection. The generator reports zero lookup exceptions, but that metric is not equivalent to complete geolocation coverage.

An H3r8 cell averages about 0.74 square kilometers, which can be much smaller than IP geolocation uncertainty. The standard location source used here does not provide an accuracy-radius field for this analysis. Native cells retain one representative country's/city's label from the first constituent location; H3r5 and H3r8 can therefore differ in country/city assignment as well as filtering. This is why the resolution comparison remains part of the evidence. [H3 statistics](https://h3geo.org/docs/core-library/restable/), [IPinfo extended-geolocation fields](https://ipinfo.io/developers/ip-to-geolocation-extended)

The catalog expands from **two torrents with a daily cache on June 29 to 416 on July 19**, and 491 on November 3. Fixed-cohort and first-observation windows are therefore preferable to interpreting a growing total as changing interest. The two focus-match comparisons include seven observed dates for every selected canonical torrent, with alias coverage retained separately.

The public files contain aggregated geography and content metadata. Unfiltered small-cell products and cached video fragments remain local; their checksums and review evidence support the analysis.

## Reuse and audit

[Canonical torrent inventory](../data/world-cup-stage1/torrent-inventory.json.gz) · [All language indicators](../data/world-cup-stage1/torrent-language-indicators.csv) · [Country memberships by torrent](../data/world-cup-stage1/torrent-country-memberships.csv) · [Vendor evidence](../data/world-cup-stage1/vendor-attribution.csv) · [Validation summary](../data/world-cup-stage1/validation-summary.json) · [Source and calculation manifest](../data/world-cup-stage1/provenance.json)

<details markdown="1"><summary>Original research references</summary>

These links preserve the original research questions. Their television ratings are not used as denominators for the torrent analysis, and unavailable article text is not treated as verified evidence.

- [Mexico–England television context, The Athletic](https://www.nytimes.com/athletic/7432616/2026/07/08/england-mexico-world-cup-tv-ratings/)
- [Haaland and China, supplied NYT reference](https://www.nytimes.com/2026/07/14/sports/soccer/erling-haaland-world-cup-china.html)
- [Brodie Brazil commentary](https://www.youtube.com/watch?v=R-83F3ea4qc&t=21s)
- [English-speaking viewers and Spanish coverage, AP](https://www.expressnews.com/sports/article/in-any-language-english-speakers-are-tuning-into-22339950.php)
- [Quarterfinal ratings context, The Hollywood Reporter](https://www.hollywoodreporter.com/tv/tv-news/world-cup-2026-quarterfinals-tv-ratings-1236648290/)
- [Tournament review, Los Angeles Times](https://www.latimes.com/sports/soccer/story/2026-07-20/despite-some-irritating-flaws-2026-world-cup-rousing-success)
- [Operation Offsides / Red Card context](https://torrentfreak.com/fifa-world-cup-triggers-a-global-anti-piracy-crackdown/)
- [Final ratings context, The Hollywood Reporter](https://www.hollywoodreporter.com/tv/tv-news/world-cup-final-tv-ratings-fox-telemundo-1236652686/)

</details>



<details class="wc-sources" markdown="1">
<summary>Sources, downloads, and counting rules</summary>

[Source manifest](../data/world-cup-stage1/provenance.json) · [Validation summary](../data/world-cup-stage1/validation-summary.json)

All content joins use the [shared inventory](../data/world-cup-stage1/torrent-inventory.json.gz): **493 canonical BTIHA**, with verified hybrid-hash aliases. Alpha60 sampling began **June 29, 2026 — Round of 32**, and ends November 3 in this snapshot. Earlier-event media found later does not establish earlier sampling.

Geographic counts are **IP–torrent memberships**, with an IP counted once per canonical torrent and role within the stated interval. They are not unique people, viewing choices, completed downloads, transferred bytes, or ratings. An address can occur in both roles. Daily sums count the same membership again on another day.

Main geography uses **IPinfo and H3 resolution 8**, the highest resolution used here. The native minimum is **three downloaders per cell**; uploaders are retained only where that downloader threshold passes. Content comparisons filter each torrent separately. Overall country and city comparisons filter after aggregating torrents, so their totals differ. Country and city labels are representative locations within cells, and the finer grid does not improve IPinfo accuracy. Hosting, VPN, proxy and mobile flags overlap; each sensitivity exclusion is applied separately.

See the [H3r8 manifest](../H3r8/manifest.json), [generation and validation evidence](../data/world-cup-stage1/validation-summary.json), [complete analytical reductions](../data/world-cup-stage1/analysis.json.gz), and [methods and coverage](world-cup.html#methods). Source hashes make the published snapshot inspectable.

</details>

</article>
