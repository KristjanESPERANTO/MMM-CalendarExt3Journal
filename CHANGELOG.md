# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [1.1.0](https://github.com/MMRIZE/MMM-CalendarExt3Journal/compare/v1.0.1...v1.1.0) (2026-04-04)


### Added

* change layout algorithm for events to use event lanes ([#15](https://github.com/MMRIZE/MMM-CalendarExt3Journal/issues/15)) ([1ad94cc](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/1ad94cc5c2f4e3a686c9dc9af153816a71577adc))
* make overlap rendering threshold-based with maxLaneThreshold ([0fd23ff](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/0fd23ff6b96a219112af905ac66c0e0dd55f34ac))


### Fixed

* adapt to CX3_Shared v1.1.1 - initialize eventPool directly ([28ad363](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/28ad363ba18aec74134c61e7cbef509f0e04c5cd))


### Performance Improvements

* optimize event overlap detection using sweep-line algorithm ([fa0e4b8](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/fa0e4b8d9f0179d0b80d76302277a89caec753b9))


### Documentation

* add Code of Conduct to the repository ([e4d165b](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/e4d165b5eb9895db11c45bf5da13ee41d29b2ffe))
* add screenshots to repository ([2ab2c0b](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/2ab2c0bdc928310b46d1de98bfedb86cec86acb4))
* optimize installation instructions and improve code formatting in README.md ([7eb1ea2](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/7eb1ea27de36455399882a94463225b90c493b85))
* review README ([8cd25d4](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/8cd25d4736bf3a0faa982dd54d04884a8ab34d19))


### Chores

* add demo config and script ([8b90c6d](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/8b90c6d39607e05b552a8868d0aaff6f39929e8a))
* add dependabot config ([e439e24](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/e439e246c7f0d53a26d44df1931fe87bfebcc5f5))
* add eslint setup ([3962dd0](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/3962dd063f0c367658df4f02d8d385e680803f83))
* add release script using commit-and-tag-version ([8410a46](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/8410a461760146b509d2766cce2e8c7892191038))
* update CX3_Shared to v1.1.1 ([a32d0ad](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/a32d0ad0ea6b192f34d3ee83c47a96ddfd839aa4))


### Code Refactoring

* use CSS nesting to eliminate .CX3J prefix repetition ([ce8be3e](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/ce8be3e613d76232dc2253ab5324afc3e58792fd))

## [1.0.1](https://github.com/MMRIZE/MMM-CalendarExt3Journal/compare/v1.0.0...v1.0.1) (2024-04-29)


### Fixed

* MM's repeated singleday timezone issue


### Added

* CSS selector for day cells (e.g. `.today`, ...)


### Chores

* more stable CX3_Shared structure

## 1.0.0 (2023-11-27)

* Initial release
