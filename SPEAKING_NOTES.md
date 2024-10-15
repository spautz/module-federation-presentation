# Talking Notes: Module Federation and Microfrontends

## Initial Context

This talk is about module federation and microfrontends. What it's _really_ about is the line between sanity and
pitchforks, but we'll get to that later. First, some introductions.

### Microfrontends

"Microfrontend" is just a fancy term for an app that runs inside another app. Client-side JS deployed by one team runs
inside or alongside client-side JS deployed by a different team. Usually it'll take over a \<div\> and some region of
the page, so that the overall UI has separate, independently-deployed pieces managed by different teams. Sometimes it'll
expose an API that other parts of the page can call.

But that's all a microfrontend is: a client-side app -- Javascript code -- that runs within somebody else's app.
It's a _concept_, but ultimately no different from any other client-side code.

### Module Federation

"Module federation" is just a fancy term for getting modules (Javascript code) from _somewhere else_.

Federated login means you get your authentication from somewhere outside of your app. Federated modules just means you
get Javascript modules from somewhere outside of your app.

It could be any sort of module -- anything you can import. Often it'll just be a widely-used dependency like React,
but it could be any JS module, like maybe the code for a Microfrontend.
(More on this later. First we'll go through microfrontends, then we'll come back to module federation.)

[brief pause]

So that's microfrontends and module federation in a nutshell. Running code that's deployed by some other team; acquiring
modules through some sort of broker; and sometimes you do those two things together.

Let's see some demos.

## Demo 1

(Explain Header. Show Table. Play with counts. Show network tab.)

Layout shift:

- The header doesn't load right away (may need to throttle network)
- Fundamental difference between code we have and code we don't have: we _can't_ render header right away because we
  simply don't have its code.

Asset weight:

- Multiple js assets are >50k. "That's weird"
- Looking into the file, you can see that React is there multiple times
- Sourcemap analysis over the whole `deploy/` directory shows 3 copies of React
- This is just a simple React example: in a real app you'd have dozens of common packages

## Demo 2

(Show page. Show Vite plugin usage. Maybe talk about how things used to use manifest.json to know what to load, but now
it's in the build plugin's config.)

Overall better. Some things look like magic.

And this fixes several issues:

- Header renders immediately -- at least it _looks_ immediate. We actually wait while the browser `import`s it.
  - Static import, not dynamic import
- 87k total

But it introduces others:

- Styles don't load properly.
- Constraints on how you import and export things. Have to do it "just right"
- Bugs and issues in the build plugin -- like "can share React library once but not multiple times" (https://github.com/originjs/vite-plugin-federation/pull/584)
- Sourcemaps broken
- No typings

What we're really doing is true 'module federation': acquiring the code exported by the MFE, _not_ running raw js from
it. We're actually loading the Table _component_ -- not running arbitrary JS code from a dynamic module.

The setup is finicky. **When something is wrong, you have to debug both sides.**

## Demo 3

But, still, these problems are all fixable. You just have to configure the build plugin properly.

It can take some trial and error, but all those issues from before are totally fixable -- styling, typings, performance.
Everything. (Except Sourcemaps. I have no idea how to get those working. If you know how to get sourcemaps and a proper
bundle breakdown for what's ultimately _non-static, somewhat nondeterministic code_, let me know.)

--

## Sanity and Pitchforks

Microfrontends are often described as a solution to an _organizational_ problem, not a technical one.

If there's just one engineering team working on one app, then you don't need to run "an app within an app". You can just
deploy and run your app as a single unit. Microfrontends only apply when you have independent and
_independently-managed_ pieces which need to step outside of the organization's boundaries.

So that seems like a great idea, right? Right now we've already got a bunch of separate teams, working on separate apps
that come together to make a few large websites -- why not slice everything into little pieces and share dependencies?

[brief pause]

Some of my previous talks and docs have brought up seemingly-good ideas that are ultimately harmful: things that teams
commonly adopt because they seem to improve the developer experience or offer some shortcut, but where they ultimately
cause more problems than benefits.

For example:

- Using import aliases
- Wrapping dependencies or devDependencies in a npm package
- Housing non-Javascript resources in npm packages

These are all examples of coupling, but it's a different kind of coupling than you typically hear about in software:
things like dependency packages and import aliases cause _build system_ coupling rather than coupling within the code.

### Coupling and Deadlock

The core problem is _lock-in_. If changing one thing requires you to update several different things in tandem, the
overall system can get deadlocked. That can happen when two pieces of code depend on each others' internals, or it
can happen because the system requires a specific dev setup or build system.

We hit this all the time with libraries, but on a small scale: you upgrade the library, you have to upgrade its usages.
That's normal, and it's usually not a big deal because everything's in one project. One repo, one team, one deploy.

But with microfrontends and module federation you're working across multiple independent systems -- projects and teams
who barely even talk to each other. That's the whole point.

So, anyway: the overall result is that the system underlying microfrontends and module federation -- those build plugins
and the way they interact with each app -- can (and will) get "stuck" if it's not architected properly.
And there's not really any good recovery from that. No incremental path.
"When something is wrong, you have to debug both sides"

[brief pause]

So, how do we solve that?

## Console Demo

There's two sides here: the host app and the remote app. Let's take a look at the code.

(Look at header-mfe's remoteEntry.js. See the info from the manifest -- this is how things used to work.)

======

Console demo

const headerRemoteEntryPromise = import('http://localhost:3003/header-mfe/assets/remoteEntry-header.js')
const headerRemoteEntry = await import('http://localhost:3003/header-mfe/assets/remoteEntry-header.js')

headerRemoteEntry.get('./render') // promise
await headerRemoteEntry.get('./render') // function => module

const renderModulePromise = await headerRemoteEntry.get('./render')
const renderModule = (await headerRemoteEntry.get('./render'))()

renderModule.render(document.body)

## Package-Wrapped Apps
