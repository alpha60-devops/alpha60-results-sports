The fixed country list is **region-rankings-20260925-v1**, reproduced from the
[AAM snapshot](https://github.com/alpha60-devops/alpha60-results-asian-american-media/blob/3fc1cf1f9c6bf1c0def1f055bbbf7de8c9c0b53b/data/mellon-7.8/runs/20261008-stage4-producer-country-v1/region-definitions.json).
Its declared digest is `876acd82b3b47ae56c4b1deeca41fb39d88c64ba100f1edf8f0047962d90810a`.
Country codes determine membership; the map crop does not redefine the region.

Native aggregate geography uses IPinfo, H3r8 and a three-downloader threshold.
Uploader cells survive only when the downloader threshold passes. Both roles
can include the same address. Daily sums repeat memberships on different dates;
H3r5 matched-age sums are explicitly membership-days. Hosting and VPN flags
overlap and are excluded separately. Per-torrent geography retains its own
threshold and denominator. No peer addresses are published.

The map uses the existing native Izzi/Cartofreako registered Cahill–Keyes
projection and [Natural Earth v5.1.2 country polygons](https://github.com/nvkelso/natural-earth-vector/blob/v5.1.2/geojson/ne_10m_admin_0_countries.geojson),
with [lake water](https://github.com/nvkelso/natural-earth-vector/blob/v5.1.2/geojson/ne_10m_lakes.geojson) removed.
The geographic frame is 32°W–40°E and 25°N–72°N; all selected-code observations
fit inside it. The Azores use an inset across the projection interruption.
Circle weights are verified against every retained city total.

- [Complete reductions and input hashes](../data/world-cup-eur-27/analysis.json)
- [Fixed country definition](../data/world-cup-eur-27/region-definition.json)
- [Country counts, shares and ranks](../data/world-cup-eur-27/country-counts.csv)
- [Uploader/download balance](../data/world-cup-eur-27/role-balance.csv)
- [Daily and weekly counts with catalog coverage](../data/world-cup-eur-27/temporal.csv)
- [Fixed-catalog weekly check](../data/world-cup-eur-27/fixed-catalog.json)
- [Matched-age cohorts](../data/world-cup-eur-27/matched-age-cohorts.csv)
- [All city and network counts](../data/world-cup-eur-27/city-counts.csv)
- [City concentration under network exclusions](../data/world-cup-eur-27/city-concentration.csv)
- [All torrent names and ranks](../data/world-cup-eur-27/torrent-rankings.csv)
- [Audio and branding diagnostics](../data/world-cup-eur-27/content-composition.csv)
- [Retained regional geometry](../data/world-cup-eur-27/retained-geography.geojson.gz)
- [Native map receipt](../data/world-cup-eur-27/map-rendering.json)
- [Map coverage and circle-area verification](../data/world-cup-eur-27/map-verification.json)
- [Reduction verification](../data/world-cup-eur-27/verification.json)
- [Publication file hashes](../data/world-cup-eur-27/manifest.json)

The separate [broadcast evidence register](world-cup-ott-vendors.html#eur-27-sources) contains every external audience and rights reference used for the economic extension.
