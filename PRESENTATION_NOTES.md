# Talking Notes: Module Federation and Microfrontends

## Initial Context

This talk is about module federation and microfrontends. What it's _really_ about is the line between sanity and
pitchforks, but we'll get to that later. First, some introductions.

### Microfrontends

"Microfrontend" is just a fancy term for an app that runs inside another app. Client-side JS deployed by one team runs
inside or alongside client-side JS deployed by a different team. Usually it'll take over a \<div\> and some section of
the page, so that the overall UI has separate, independently-deployed pieces managed by different teams. Sometimes it'll
expose an API that other parts of the page can call.

But that's all it is: a client-side app -- Javascript code -- that runs within somebody else's app.

### Module Federation

"Module federation" is just a fancy term for getting modules (Javascript code) from _somewhere else_.

Federated login means you get your authentication from somewhere outside of your app. Federated modules just means you
get Javascript modules from somewhere outside of your app.

It could be any sort of module -- anything you can import. Often it'll just be a widely-used dependency like React,
but it could be any node module, or it could be the code for a Microfrontend.
(More on this later. First we'll go through microfrontends, then we'll come back to module federation.)

## Sanity and Pitchforks

Microfrontends are often described as a solution to an _organizational_ problem, not a technical one.

If there's just one engineering team working on one app, then you don't need to run "an app within an app". You can just
deploy and run your app as a single unit. Microfrontends only apply when you have independent and
_independently-managed_ pieces which need to step outside of the organization's bounaries.

Some of my previous talks and docs have brought up seemingly-good ideas that are ultimately harmful: things that teams
commonly adopt because they seem to improve the developer experience or offer some shortcut, but where they ultimately
cause more problems than benefits.

For example:

- Using import aliases
- Wrapping dependencies or devDependencies in a npm package
- Housing non-Javascript resources in npm packages

These are all examples of coupling, but it's a different kind of coupling than you typically hear about in code: things
like dependency packages and import aliases cause _build system_ coupling rather than coupling between pieces of code.

### Coupling and Deadlock

The core problem is _lock-in_. If changing one thing requires you to update several different things in tandem, the
overall system can get deadlocked. That can happen when two pieces of code depend on each others' internals, or it
could be because the system requires a specific dev setup to do something for it.

You end up with a 'cliff', instead of an incremental upgrade. Cliff-like migrations happen all the time with libraries
(like React-Router, or React itself), but if you have multiple independent and independently-moving systems that need to
be migrated then the cliff can become so big that both sides get stuck.

So, microfrontends have a high potential for deadlock.
