---
title: CASCONxEVOKE Conference Recap for LoopBack
date: 2019-11-13
authors: dhmlau
slug: cascon-evoke-2019
tags: [conference, CASCONxEVOKE]
---

_Originally published on [strongloop.com](https://strongloop.com)_

[CASCONxEVOKE](https://www-01.ibm.com/ibm/cas/cascon/) is one of Canada’s largest combined academic, research and developer conferences, welcoming 1,500+ attendees and 150+ speakers. This year, the LoopBack team attended and kept busy collaborating with other attendees at the LoopBack booth and delivering a workshop at the conference between November 4th and 6th in Markham Ontario

<!--truncate-->

![CASCONxEVOKE logo](./images/casconxevoke_logo.png)

### Day 1: Booth Showcasing Fast and Easy API Creation with LoopBack 

At our [booth](https://pheedloop.com/cascon/site/sessions/?id=DugCzZ) we had a great opportunity to show how LoopBack can make API creation fast and easy. It looks like the use case we've shown in our poster is a common use case for our attendees to build APIs! 

![shopping app example](./images/shopping-app-usecase.png)

We also got a few questions about exposing GraphQL in LoopBack. If you're interested in it too, see [our tutorial](https://loopback.io/doc/en/lb4/exposing-graphql-apis.html) which uses the [OpenAPI-to-GraphQL module](https://loopback.io/openapi-to-graphql.html). 

![event photo for booth](./images/loopback-poster-casconevoke1.jpg)

### Day 2: Workshop on Writing Scalable Node.js Applications Using LoopBack

On Day 2, we held a [workshop](https://pheedloop.com/cascon/site/sessions/?id=OhNsKW) about writing scalable and extensible Node.js applications using LoopBack 4. We presented the challenges we faced for LoopBack as a large scale Node.js framework and showed how we are addressing those challenges in LoopBack 4. While we introduced the concepts that make scalability and extensibility possible (such as Dependency Injection, extension/extension-point framework and Inversion of Control), the attendees also had a chance to build an extensible and scalable Node.js application step-by-step using those features. 

![event photo for booth](./images/loopback-workshop-casconxevoke.png)

We won't be able to relive the workshop, but you can check out our workshop [hands-on exercise instructions](https://github.com/strongloop/cascon2019) and [presentation slides](https://github.com/strongloop/cascon2019/blob/master/2019cascon-workshop-presentation-pdf.pdf).

### Day 3: IBM Developer Booth

Throughout the conference, the IBM Developer booth was showcasing different developer-focused technologies, such as Appsody and LoopBack. We were delighted to be there on Day 3 to reach out more existing and potential users!

Some attendees asked about cloud deployment story for LoopBack. We have been focusing on a vendor agnostic approach. For instance, we recently completed a PoC and added a [tutorial](https://github.com/strongloop/loopback4-example-shopping/tree/master/kubernetes) on how to deploy a LoopBack application as microservices using Kubernetes. While we recommend to [deploy your applications to IBM Cloud](https://github.com/strongloop/loopback4-example-shopping/blob/master/kubernetes/docs/deploy-to-ibmcloud.md), you can also deploy to another vendor of your choice.

![IBM Developer booth picture](./images/loopback-ibmdeveloperbooth.jpg)

## What's Next? 

LoopBack's success depends on you. We appreciate your continuous support and engagement to make LoopBack even better and meaningful for your API creation experience. Please join us and help the project by:

- [Reporting issues](https://github.com/strongloop/loopback-next/issues).
- [Contributing](https://github.com/strongloop/loopback-next/blob/master/docs/CONTRIBUTING.md)
  code and documentation.
- [Opening a pull request on one of our "good first issues"](https://github.com/strongloop/loopback-next/labels/good%20first%20issue).
