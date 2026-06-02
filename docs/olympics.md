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

### Graph by Individual Leak
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

### USA vs. International by Uploaded Media

The Olympics experiment used 684 input sources and sampled each for 15 weeks.
Of these input sources, the originating creator can be indentified as:

1. 277 BBC (UK), 40%
2. XXX Global (Canada), ~30%
3. 45 ARD (Germany), 6.5%
4. 24 Russian, 3.5%
5. 21 Eurosport, 3%

The absence of content from USA and Japanese sources may indicate that broadcasters in these regions took legal action to take down unauthorized content.



### Men vs. Women

### Does sports media "decay" faster then film/tv? Is there a sharper decrease in interest as the results of the sporting event become known?

The research team's initial assumption was that sporting events on the internet were "quick" events, events that in real life are at a paricular Monday night, or game day, match day, event day. And then faded quickly.

But this does not seem to be the case.




{::nomarkdown}
<svg width="100" height=100>
	<circle cx="20" cy="50" r="10" fill="black"/>
</svg>
{:/}
