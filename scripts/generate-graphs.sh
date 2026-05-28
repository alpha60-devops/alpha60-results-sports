#!/usr/bin/env bash

./a60-meta-collection.exe ../data "Olympics 2026" "" "" 0

./a60-meta-collection.country.exe ../data/olympics-2026-week.json "Olympics 2026"

./a60-meta-collection.btiha.exe ../data/olympics-2026-week.json "Olympics 2026"

./a60-meta-collection.slices.exe ../data/olympics-2026-week.json "Olympics 2026"

