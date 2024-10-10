# module-federation-presentation

This repo contains demos for a Frontend Guild talk, planned for October 17, 2024.

Topics include module federation, ES Modules in general, import maps, and especially some pitfalls and failure points to
avoid when using these techniques.

## Summary

Module Federation has been getting a lot of attention lately, with a sudden wave of articles that show a basic setup.

There are many pitfalls and considerations to be mindful of, however. Several of the recently popular articles present
nice-looking paths that ultimately paint you into a corner and deadlock the overall system. Unless executed very well,
module federation and related topics can easily become a liability and a pain point for multiple teams, leading to angry
mobs of pitchfork-bearing engineers who eschew the technique.

The examples in this repo present some lessons learned from about a decade ago, when interaction with (and between)
modules -- and ideas around Javascript modules themselves -- were more manual and not mediated by modern tooling; and
also some lessons learned from Webpack-mediated module federation when it first landed. Mixing some older, more manual
techniques with newer tooling makes it easier to avoid some of the pitfalls and pain points -- and this decoupling can
also work well for sdk-wrapped microfrontends, in addition to normal dependencies.

## Example Projects (planned)

### [Basic Module Federation with Vite](./01-vite-federation/)

### [Basic Module Federation with Vite: How it falls apart](./02-vite-federation-pitfall/)

### [History and Overview of ES Modules](./03-vanilla-modules/)

### [Decoupling the Build Systems](./04-decoupled-module-federation/)

### [SDK-Wrapped Microfrontends](./05-microfrontends/)
