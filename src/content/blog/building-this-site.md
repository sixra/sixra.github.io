---
title: 'Building This Portfolio Site'
description: 'How I built this site with Astro, TypeScript, and way too much time picking colors'
pubDate: 2026-01-16
tags: ['astro', 'typescript', 'meta']
image: '/images/blog/building.jpg'
---

I've been putting off building a portfolio for over a year. Every time I thought about it, I'd spend an hour debating Next.js vs Astro vs plain HTML, then close my laptop and do nothing. Finally decided to just pick something and ship it.

## Why I Actually Built This

Honestly, I got tired of sending people to my LinkedIn when they asked about my work. Wanted something that showed actual code and writing, not just job titles and company names.

Also, I work with React and TypeScript at my day job, but I've been curious about Astro for a while. Building a portfolio seemed like a good excuse to try it without any real pressure. If it sucked, nobody would see it anyway.

## Picking the Stack

Went with Astro because I wanted something fast without dealing with hydration complexity. I tried setting up Next.js first, spent 20 minutes configuring app router stuff, and realized it was complete overkill for a static site with a blog.

TypeScript because I use it at work and didn't want to fight type errors six months from now when I add something. ESLint and Prettier because I'm lazy and want my code to format itself.

For styling, just plain CSS with custom properties. Thought about Tailwind but honestly didn't feel like learning class names for a weekend project. Turns out writing CSS isn't that bad when you're not supporting IE11.

## What I Actually Built

Started with a light theme, looked at it for five minutes, hated it, switched to dark. Spent way too long picking the exact shade of yellow for links. Tried like eight different colors before settling on `#fbbf24` because it looked decent at 2am and I wanted to go to bed.

The blog system uses Astro's Content Collections, which are pretty nice. You just drop markdown files in a folder and it handles the rest with full TypeScript support. Added reading time calculations and tags because every blog seems to have them, and honestly, they're useful when you're trying to decide if you have time to read something.

Built a related posts feature that matches articles by tags. Felt very productive adding this. Then I remembered I only have one blog post. It's not gonna relate to anything yet. Keeping it anyway for when I actually write more.

Added all the meta tags, Open Graph images, structured data, the whole SEO thing. Not sure if anyone will actually find this site, but at least Google can crawl it properly. Also added RSS because apparently people still use feed readers, and it took like 10 minutes to set up.

## Things That Went Wrong

TypeScript kept yelling at me about the blog content schema. Spent an hour debugging before realizing I was importing `CollectionEntry` from the wrong place. Classic move.

Could not decide if tags should link to a separate page or just be decorative. Built the tag pages, deleted them, felt bad, built them again. They're there now. We'll see if I regret it.

The spacing took forever. I'd add margins, check on mobile, go back and adjust, check desktop again. Did this probably 40 times before it felt right. Still not sure if the vertical rhythm is perfect but I had to stop myself at some point.

Git history is kind of a mess. I kept making commits like "fix spacing" and "actually fix spacing" and "spacing for real this time." Should've planned the layout better before jumping into code.

## What I'd Do Different

Should've set up the design system and component structure first instead of just throwing files everywhere. Ended up refactoring components twice because I didn't think about reusability upfront.

Also could've skipped building the related posts feature until I had like five blog posts. It works fine but there's literally nothing for it to relate to right now.

If I did this again, I'd probably just fork an existing Astro template and customize it. Building from scratch was fun and I learned a lot, but it definitely took longer than it needed to.

## That's It

Code's on [GitHub](https://github.com/sixra/sixra.github.io) if you want to see how it works. Might write more about specific features later, but this covers the basics.
