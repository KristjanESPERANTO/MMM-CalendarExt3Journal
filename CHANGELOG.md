# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [2.0.2](https://github.com/MMRIZE/MMM-CalendarExt3Journal/compare/v2.0.1...v2.0.2) (2026-05-01)


### Fixed

* **closure:** restore startup gate and reconnect mapping ([34c38f2](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/34c38f221455a3142b17e8b5492604eedf642873))


### Chores

* update devDependencies ([f37b882](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/f37b8826e2a3a51dbff65a731b23d9823eba192c))

## [2.0.1](https://github.com/MMRIZE/MMM-CalendarExt3Journal/compare/v2.0.0...v2.0.1) (2026-05-01)


### Fixed

* **closure:** restore closure variable support in config callbacks ([af3b151](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/af3b15111a5afc10ebe22ab18d59f73ed910ddcc)), closes [#261](https://github.com/MMRIZE/MMM-CalendarExt3Journal/issues/261)

## [2.0.0](https://github.com/MMRIZE/MMM-CalendarExt3Journal/compare/v1.1.2...v2.0.0) (2026-05-01)


### ⚠ BREAKING CHANGES

* requires MagicMirror² ≥ 2.36.0

### Chores

* **tests:** remove integration test from test script ([236b473](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/236b473718f373538074f8590d67f89fd8852c30))
* update devDependencies ([ff89066](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/ff890666e586a50317609b5cd75862601e8505e1))


### Code Refactoring

* remove workaround for MM v2.35.0 function-stripping bug ([f8a7e96](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/f8a7e961b4b93e9bf7c18751412c599083f74beb)), closes [MagicMirrorOrg/MagicMirror#4106](https://github.com/MagicMirrorOrg/MagicMirror/issues/4106)

## [1.1.2](https://github.com/MMRIZE/MMM-CalendarExt3Journal/compare/v1.1.1...v1.1.2) (2026-04-26)


### Fixed

* **closure:** restore closure context in config callbacks ([d72ab5d](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/d72ab5d567c0afdc6fdf30792f9c6da2e61c1d24))

## [1.1.1](https://github.com/MMRIZE/MMM-CalendarExt3Journal/compare/v1.1.0...v1.1.1) (2026-04-26)


### Fixed

* **cx3j:** restore callbacks for MM 2.35.0 ([cc7b9e2](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/cc7b9e2de42006bc29f08ad3b5cda9da5e4eb8be)), closes [#16](https://github.com/MMRIZE/MMM-CalendarExt3Journal/issues/16)
* harden timer lifecycle for suspend/resume ([4089d83](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/4089d83cd661987d7ffb0ef123ca5db5219a1c3f))


### Performance Improvements

* remove redundant calendar filtering ([b00f6f7](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/b00f6f71e68ac35bf8a53476412296d25e6f2831))
* speed up event cell lookup in render path ([0747e51](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/0747e513ba2b0df5dbb4a1a5d07d6d6669e7f91e))
* use structuredClone for event payloads ([d921815](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/d921815ce69cae93d9c306cc99f304667dcb79a4))


### Chores

* add "type" field to package.json ([89170b6](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/89170b67d51e98501a416e54af448d9e134e9903))
* change license file format to markdown and link in readme to it ([af15dc8](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/af15dc89292b6574992ca48d51ba62785c6ad785))
* simplify eslint commands ([67fd34d](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/67fd34de673b1ce2b859bf666fce92347934a485))
* simplify promise creation and clean up eslint rules ([1762ba6](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/1762ba60efe37c8cae6c43b60fef5e25592206dc))
* update devDependencies ([74ecfb1](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/74ecfb1caea2352318ad5e4e32d99bdc78d48e42))
* update subproject commit reference in CX3_Shared ([b311c32](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/b311c3223377bdb1e3394cbbb64f631e92dbaa39))


### Tests

* add module and shared tests ([4c3e8be](https://github.com/MMRIZE/MMM-CalendarExt3Journal/commit/4c3e8be229b3cf2023a2cdfd43d2a3a771708638))

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
