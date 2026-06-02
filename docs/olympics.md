---
layout: default
title: "Olympics 2026"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Analysis of Olympics 2026 peer-to-peer distribution"
---

{::nomarkdown}
<img src="../resources/a60-logo-block-gray.simple.svg?sanitize=true" height="50" width="100">
{:/}

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
	src="../resources/izzi-map-leaflet-geojson-v7.3.js">
</script>

<!-- Preload the CSS without blocking rendering -->
<link rel="preload" href="../resources/izzi-table-wcag-22.css" as="style" onload="this.onload=null;this.rel='stylesheet'">

<!-- Fallback for users who have JavaScript disabled -->
<noscript>
  <link rel="stylesheet" href="../resources/izzi-table-wcag-22.css">
</noscript>

<div style="height: 50px;"></div>


# Olympics 2026
<div style="height: 50px;"></div>


## Graphs

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

{::nomarkdown}
{% include olympics-2026-downloads-by-week-normalized-start.svg %}
{:/}
<div style="height: 25px;"></div>

### Graph by Top Country Downloaders
{::nomarkdown}
{% include olympics-2026-downloads-by-country.svg %}
{:/}
<div style="height: 25px;"></div>

### Graph by Event
{::nomarkdown}
{% include olympics-2026-downloads-by-btiha.svg %}
{:/}

<div style="height: 50px;"></div>


## Maps

{% include olympics-2026-spatial-carto-table.html %}
<div style="height: 50px;"></div>


## Tables

<script defer type="text/javascript" crossorigin="anonymous" id="table-sort"
	src="../resources/izzi-table-sort-wcag-22.js">
</script>

<!-- Preload the CSS without blocking rendering -->
<link rel="preload" href="../resources/izzi-table-sort-wcag-22.css" as="style" onload="this.onload=null;this.rel='stylesheet'">

<!-- Fallback for users who have JavaScript disabled -->
<noscript>
  <link rel="stylesheet" href="../resources/izzi-table-sort-wcag-22.css">
</noscript>

{% include olympics-2026-meta-collection-table.html %}
<div style="height: 25px;"></div>

{% include olympics-2026-media-objects-table.html %}
<div style="height: 25px;"></div>

{% include sports-geo-slices-usa-weeks-1-5-15.html %}
<div style="height: 25px;"></div>

{% include sports-geo-slices-africa.html %}
<div style="height: 25px;"></div>

{% include sports-geo-slices-asia.html %}
<div style="height: 50px;"></div>


## Commentary, Questions

### USA vs. International Downloaders

At five percent of all downloaders, the USA is not a dominant force in
this swarm distribution.

This may mean that the USA audience is elsewhere; watching live on
terrestrial broadcast stations, on paid cable subscriptions
expressedly for the Olympics, watching on YouTube, or otherwise
adequetly serviced for media using exising platforms.

See the graph above for swarm composition by country. Russia, China, Korea, Turkey all are bigger parts of the global swarm than the USA.

### USA vs. International by Content Creation

The Olympics experiment used 684 input sources and sampled each for 15 weeks.
Of these input sources, the originating creator can be identified as:

1. 277 BBC (UK), 40%
2. XXX Global (Canada), ~30%
3. 45 ARD (Germany), 6.5%
4. 24 Russian, 3.5%
5. 21 Eurosport, 3%

The absence of content from USA and Japanese sources may indicate that broadcasters in these regions took legal action to take down unauthorized content.


### Does sports media "decay" faster then film/tv media? Is there a sharper decrease in interest as the results of the sporting event become known?

The research team's initial assumption was that sporting events on the internet were "quick" events, events that in real life are at a particular Monday night, or game day, match day, event day. And then faded quickly.

But this does not seem to be the case.

For context, here is the Olympics sample put in with all the other Alpha60 sampling completed in the years 2025 and 2026.

{::nomarkdown}
{% include open-sample-downloads-by-week-normalized-start-2025.svg %}
{:/}

<div style="height: 25px;"></div>

{::nomarkdown}
{% include open-sample-downloads-by-week-normalized-start-2026.svg %}
{:/}

<div style="height: 25px;"></div>

What do these graphs show? The Olympics sampled at the top of the media heap, along with such streaming stars as Fallout, Stranger Things, etc.

If the Olympics curve in the graph above flattened, then that would mean that it became gradually less popular over time compared to the rest of the media objects. But this did not happen: sports, drama, comedy, animation look to have similar patterns over time.


### If sports content has a long-tail in practice, why don't any platforms support this kind of viewing?

Could USA platforms gain international market share by creating long-tail platforms that provide a canonical URL that is durable over time?

AKA, use pirate archival techniques to organize content and use something like

https://ioc.org/2026

as the canonical root for streaming media in perpetuity?


### By Gender: Open vs. Men vs. Women

The Olympics experiment used 684 input sources and sampled each for 15
weeks.  Each of the input sources was hand-tagged to fit into one of
three categories: men, women, and open.

1. [open](/resources/slice-gender/olympics-2026-378-btiha-names.open.txt), 378 (55%)
2. [men](/resources/slice-gender/olympics-2026-179-btiha-names.men.txt), 179 (26%)
2. [women](/resources/slice-gender/olympics-2026-127-btiha-names.women.txt) 127 (19%)

These results can be graphed (for the largest 100 objects in the slice) as Men in blue, Women in green, and Other as gray as:

{::nomarkdown}
{% include composite-gender-slices.svg %}
{:/}
<div style="height: 25px;"></div>


One question that remains is how these media objects differ by country. Does the USA watch the same women's sports as Sweden or Japan?


### Olympics as a useful baseline for comparisons with other media

The Olympics should be sampled at every opportunity as a big media event that is global in nature. This swarm can be used as a reference swarm to see how the composition of the interent is changing, and how different parts of iternet infracture are emerging and becoming more important.

Here is a reference table for the 2026 Olympics, itemized by internet infrastructure: fiber, wireless, satellite, and two categories of network privacy: hosted (hosting on another machine), and service (using VPN, proxy, or other privaccy-forward services.)

{% include olympics-2026-network-carto-table.html %}

{::nomarkdown}
<svg width="100" height=100>
	<circle cx="20" cy="50" r="10" fill="black"/>
</svg>
{:/}
