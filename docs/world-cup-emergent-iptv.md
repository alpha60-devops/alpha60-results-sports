---
layout: default
title: "IPTV Emergent"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "How live World Cup feeds can become replay files, and what stream listings, torrent peers and file hosts can tell us about a match."
---

<link rel="stylesheet" href="../resources/world-cup-stage1/report.css">
<link rel="stylesheet" href="../resources/world-cup-china/discovery.css">
<article class="wc-report" markdown="1">

[![Alpha60](../resources/a60-logo-block-gray.simple.svg)](world-cup.html)

<nav class="wc-nav" aria-label="World Cup research"><a href="world-cup.html#broadcast-and-2027">World Cup research index</a><a href="world-cup-ott-vendors.html">Broadcasters And Services</a></nav>

<a id="emergent-iptv"></a>

# IPTV Emergent

Internet Protocol television (IPTV) delivers television over IP networks. Licensed services and unauthorized restreamers both use it. A World Cup match can circulate as a live stream, a downloadable file and an on-demand replay. Each leaves a different record of where and when the match was available.

## From a live feed to a replay

A broadcast or online feed can be restreamed live, recorded, or both. Someone can repackage or re-encode the recording, distribute it by torrent or file host, and later stream it as a replay. Two recordings can also come independently from the same broadcast. A shared channel logo identifies a possible source feed. Tracing the path between copies requires dated observations and content fingerprints. A copy was available by the time Alpha60 first saw it and may have circulated earlier.

A single video feed may also carry several commentaries. HTTP Live Streaming (HLS) playlists identify media segments and can list alternative audio renditions. Recording the language of each available rendition preserves differences that a single language label would hide. [HTTP Live Streaming specification](https://www.rfc-editor.org/rfc/rfc8216.html#section-4.3.4.1)

## What each delivery path shows

<div class="wc-table-wrap wc-prose-table" tabindex="0" role="region" aria-label="What each delivery path shows" markdown="1">

| Delivery path | What Alpha60 can observe | What the observation supports |
| --- | --- | --- |
| Live web stream or IPTV | Channel or event listing, time of an availability check, stream manifest or metadata when accessible | Whether a feed was available at that time. A server IP can locate delivery infrastructure. Viewer locations require separate evidence. |
| BitTorrent | Canonical torrent, peer membership, peer role and observation interval | The locations of sampled torrent peers, subject to discovery coverage, thresholds and IP geolocation limits. |
| File host or cloud download | Listing or object ID, file metadata and a content hash when available | Which copies persisted, where mirrors appeared and which languages were available. Download counters need independent validation. |
| On-demand video platform | Video ID, upload time, duration, metadata and public counters | When the replay was available and how the platform reported engagement. A person may use more than one platform. |

</div>

## Measuring interest in IPTV

Many stream listings alongside little torrent activity could reflect a shift to streaming, a gap in torrent discovery, or low demand. A listing records availability. A peer count records participation in a sampled swarm. Adding either to site visits or concurrent-viewer estimates would mix different units and could count the same activity twice.

The European Union Intellectual Property Office uses visits to IPTV registration websites as a measure of interest and models possible user counts separately. Applying its European estimates to a particular World Cup match, or to viewers in Brazil or China, would require match- and territory-specific evidence. [EUIPO study and methodology](https://www.euipo.europa.eu/es/publications/online-copyright-infringement-in-the-european-union-films-music-publications-software-and-tv-2017-2023)

The proposed 2027 pilot pairs live availability checks with later observations of replay files for the same fixtures. [Preparing For 2027](world-cup-2027-thoughts.html#non-torrent-sources-for-the-2027-study)

</article>
