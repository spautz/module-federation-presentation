# Module Federation and Microfrontends

## Initial Context

### Microfrontends

The famous tractor page: https://micro-frontends.org/#the-base-prototype

"Microfrontend" could mean:

- Shared UI components or utils
- Fullstack teams owning frontend + backend for some UI area
- One team's UI or app inside another team's app <-- Steven likes this one best

Microfrontends are a _concept_.

<img src="https://img.spacergif.org/spacer.gif" width="1" height="500">

### Module Federation

Module federation is a _technique_.

Acquire Javascript modules through some broker or intermediary:

- Common shared dependencies
- Optional add-ons
- Microfrontend code

<img src="https://img.spacergif.org/spacer.gif" width="1" height="500">

## Demo 1

**A simple setup: one app imports and runs other apps (as js modules)**

http://localhost:3001/

It works, but:

- Layout shift
- 183k js assets

<img src="https://img.spacergif.org/spacer.gif" width="1" height="500">

## Demo 2

**A basic, raw microfrontend setup -- but using build-time plugins for run-time linking**

http://localhost:3002/

<img src="https://img.spacergif.org/spacer.gif" width="1" height="500">

## Demo 3

**What you might see in a normal setup**

http://localhost:3003/host-app/

- All the stuff above is fixable.
- Build plugins will everything you want for module federation, _so long as you configure them properly_.

<img src="https://img.spacergif.org/spacer.gif" width="1" height="500">

## Sanity and Pitchforks

@TODO: Rant for a bit.

- Coupling across build systems is worse than coupling in code
- Consequences won't be visible until much later -- and then it's too late
- A whole generation of devs _despises_ microfrontends due to getting burned
- Build system integration is necessary. How do you decouple that?

<img src="https://img.spacergif.org/spacer.gif" width="1" height="500">

## Fun with the JS Console

http://localhost:3003/

<img src="https://img.spacergif.org/spacer.gif" width="1" height="500">

## Demo: Package-Wrapped Apps

http://localhost:3006/

Tl;dr:

- Do the build system work in a sibling project alongside the microfrontend
- Publish that as a npm package
- Bonus: easier integration, better dev experience

<img src="https://img.spacergif.org/spacer.gif" width="1" height="500">

## Things We Didn't Really Cover

- Import maps
- JS modules over time
- Interactions across app/microfrontend boundaries
- Styling across app/microfrontend boundaries
- Local development and CI
- SSR
- Frameworks built specifically for microfrontends or islands
