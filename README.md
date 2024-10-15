# Presentation: Module Federation and Microfrontends

This repo contains demos for a Frontend Guild talk, planned for October 17, 2024.

Topics include microfrontends, module federation, ES Modules in general, import maps, and especially some pitfalls and
failure points to avoid when using these techniques.

[Supporting content and diagrams.](./PRESENTATION)

## Summary

Module Federation has been getting a lot of attention lately, with a sudden wave of articles that show a basic setup.

There are many pitfalls and considerations to be mindful of with module federation. Several of the recently popular
articles present nice-looking paths that ultimately paint you into a corner and deadlock the overall system. Unless
executed very well, module federation and related topics can easily become a liability and a pain point for multiple
teams, leading to angry mobs of pitchfork-bearing engineers who eschew the technique.

The examples in this repo walk through some problems and pitfalls that will arise with a careless microfrontend setup,
then drill into some of the history and ideas around Javascript modules themselves, and then walk through some hybrid
approaches that avoid the pitfalls and provide a better architecture overall.

## Demo Projects

### [1. Basic manual microfrontends, raw and unoptimized](./01-unoptimized-microfrontend/)

A simple setup: one app imports and runs other apps (as js modules)

### [2. Basic module federation with Vite](./02-basic-federation/)

A basic, raw microfrontend setup -- but using build-time plugins for run-time linking

### [3. A normal module federation microfrontend setup](./03-standard-federation/)

What you might see in a normal setup.

### [4. Another normal module federation microfrontend setup](./04-standard-federation-different-plugin/)

What you might see in a normal setup.

### [5. Console scripting for fun and profit](./05-console-scripting/)

Taking the "build-time plugin setup" out of the build-time plugin setup.

### [6. A better way: "package-wrapped apps"](./06-package-wrapping/)

A better architecture for all of this.

## Repo Notes

- Each numbered directory (starting with `01-unoptimized-microfrontend`) is a demo for a specific scenario. Each one has
  a `README.md` with more information.
- Each demo is a pnpm workspace that represents separate projects owned by separate teams: a host app with two
  microfrontends (one rendered initially, one invoked later).
- To make demos easy, a mock 'deploy' copies files to a single directory which may be served locally. This simplifies
  the demo but prevents having a unified server for local dev. Each `deploy/` directory is committed to the repo.
