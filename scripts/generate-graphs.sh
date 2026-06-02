#!/usr/bin/env bash

./a60-meta-collection.exe ../data "Olympics 2026" "" "" 0

./a60-meta-collection.country.exe ../data/olympics-2026-week.json "Olympics 2026"

./a60-meta-collection.btiha.exe ../data/olympics-2026-week.json "Olympics 2026"

./a60-meta-collection.slices.exe ../data/olympics-2026-week.json "Olympics 2026"


./a60-carto-geo.exe ../data/olympics-2026-week-00001.geojson
./a60-carto-geo.exe ../data/olympics-2026-week-00005.geojson
./a60-carto-geo.exe ../data/olympics-2026-week-00010.geojson
./a60-carto-geo.exe ../data/olympics-2026-week-00013.geojson
./a60-carto-geo.exe ../data/olympics-2026-week-00014.geojson
./a60-carto-geo.exe ../data/olympics-2026-week-00015.geojson

./a60-carto-geo.exe ../data/olympics-2026-cumulative.geojson
