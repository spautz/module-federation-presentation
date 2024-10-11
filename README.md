# Presentation: Module Federation and Microfrontends

This repo contains demos for a Frontend Guild talk, planned for October 17, 2024.

Topics include microfrontends, module federation, ES Modules in general, import maps, and especially some pitfalls and
failure points to avoid when using these techniques.

[Supporting content and diagrams.](./PRESENTATION_INDEX.md)

## Summary

Module Federation has been getting a lot of attention lately, with a sudden wave of articles that show a basic setup.

There are many pitfalls and considerations to be mindful of with module federation. Several of the recently popular
articles present nice-looking paths that ultimately paint you into a corner and deadlock the overall system. Unless
executed very well, module federation and related topics can easily become a liability and a pain point for multiple
teams, leading to angry mobs of pitchfork-bearing engineers who eschew the technique.

The examples in this repo walk through some problems and pitfalls that will arise with a careless microfrontend setup,
then drill into some of the history and ideas around Javascript modules themselves, and then walk through some hybrid
approaches that avoid the pitfalls and provide a better architecture overall.

## Demo Projects (planned)

### [Basic Module Federation with Vite](01-unoptimized-microfrontends/)

### [Basic Module Federation with Vite: How it falls apart](./02-vite-federation-pitfall/)

### [History and Overview of ES Modules](./03-vanilla-modules/)

### [Decoupling the Build Systems](./04-decoupled-module-federation/)

### [SDK-Wrapped Microfrontends](./05-microfrontends/)

## Repo Notes

- Each numbered directory (starting with `01-unoptimized-microfrontend`) is a demo for a specific scenario. Each one has
  a `README.md` with more information.
- Each demo is a pnpm workspace that represents separate projects owned by separate teams: a host app with two
  microfrontends (one rendered initially, one invoked later).
- To make demos easy, a mock 'deploy' copies files to a single directory which may be served locally. This simplifies
  and sidesteps issues with local dev servers. Each `deploy/` directory is committed to the repo.
