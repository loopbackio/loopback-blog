---
title: New Home for the LoopBack Blog
date: 2022-04-13
slug: new-home-for-the-loopback-blog
authors: achrinza
tags: [Meta]
---

After a long hiatus, the LoopBack Blog has gotten a new home! Learn how it came
to be and how we managed to modernise blogging stack along the way.

<!--truncate-->

As part of the planning for LoopBack moving to OpenJS Foundation, there have
been discussions around finding a new home for the blog, parting from the
strongloop.com web site. A few alternatives had brought up, such as having the
blog posts as part of the loopback.io repo, using a third party blog site and
creating a blog site in a separate repo.

## Coming Up With a Plan

Putting the blog posts in the loopback.io repo is a natural progression, since
all the documentation and text-based content will be in the same repo. The
concern is that is Jekyll-based. Although it worked fine and integrated well
with GitHub Pages, many of the maintainers were not well-versed in the world of
Ruby. This was compounded by shell scripts that pulled data from other Git
Repositories and modified the site as part of the build process. Hence, a lot of
time was spent trying to understand how the website was put together and
figuring out the best way to tweak it to integrate the new blog.

The "Strong Blog" was also written with Jekyll and hosted on GitHub Pages. Hence
lifting and shifting was a real possibility that we contemplated. However,
the slow build times and the maintainers' unfamiliarity with Ruby and Jekyll
meant that we realised that the website's current stack wasn't worth keeping
around in the long run. At the same time, performing a full migration of the
website, documentation, and blog in one go was too daunting of a task for the
maintainers who were already working on the project on their own time.

The idea of using a third-party service such as [Medium](https://www.medium.com)
was also considered. However utlimately, the lack of control over the interface,
the inability to place it in the same domain name as the main website and
documentation, and the frustration that stem from a reader being forced to use
a third-party service meant that it was quickly off the table.

As a result, we decided to come to a compromise.

## Picking A Blogging Stack

After some deliberation we decided to create a hybrid stack which left the
website and documentation with Jekyll, and use
[Docosaurus 2](https://docusaurus.io) as the new blogging platform. We found
Docusaurus to be a good fit as it is a Facebook-maintained open source project
which was written on top of React. Besides its benefit of speedy build times,
this JavaScript-based stack provides more opportunities for extensibility and a
reduced barrier for contributing and tweaking. The first-class support for MDX
was also a plus as it meant we were able to copy over most of our posts with
only a few tweaks, and the ability to generate the blog as build artifacts made
it compatible with the Jamstack-eque system of GitHub Pages.

Thanks to the amazing work done by [Diana](https://github.com/dhmlau), all of
the LoopBack 4 blog posts from 2019 and 2020 were migrated to Docusaurus. With
her work, we were able to quickly build and see the new blog coming together
with all of the past blog posts populating the blog.

## Merging Jekyll and Docusaurus

When we started building the blog, we hosted it on GitHub Pages in its own Git
Repository and served it in its own sub-domain. This allowed us to quickly build
and patch any bugs that may have cropped up. However the end-goal was to host it
under the same domain as the main website and documentation:
https://loopback.io/blog. Hence, we had to create a solution which merged the
new blog with the exsitng website codebase.

This solution? A shell script!

Since we already had a precedence for using shell scripts to pull in data from
other Git Repositories, I've decided to write one to do the same thing, but this
time, specifically for the blog. This script clones the
[`loopbackio/loopback-blog` Git Repository](https://github.com/loopbackio/loopback-blog),
generates the blog's build artifacts, and copies it over to the `blog` directory
of the Jekyll website. There's additional logic in there to make it more
fool-proof and less verbose but in essence, that was what it did - Clone, build,
and copy. You can also view the
[source code](https://github.com/loopbackio/loopback.io/blob/8968cd6860c09a852ee4fd9ce07c7a1db3ce7771/update-blog.sh)
yourself if you'd like to see how it was done. Over time, we hope to refine this
further and make it more reliable, such as using Git Submodules instead of a
clean clone on every build.

## Future Work

As it stands, we now have a blog that all of the maintainers can now contribute
to. With this change, we now have revived a new way for us, the maintianers, to
engage with our community and we hope that the blog posts can complement the
existing documentation and community channels such as Slack, GitHub
Discussions, and the mailing list.

This is just the first step in modernising our website stack. There's still
plenty of work to do, and it's our vision to fully migrate our stack to one
powered by the JavaScript ecosystem.

## Upcoming Blog Series: Maintainers' Testimonial

With the launch of our new blog, we're excited to announce an upcoming blog
series where the maintainers can share their expriences and journey in adopting
LoopBack 4. Through this series, we hope to share with the community the unique
perspectives of those who work closely on LoopBack 4, not only as users but as
maintainers as well.

Don't miss out on future blog posts by subscribing to our
[RSS](https://loopback.io/blog/rss.xml) or
[Atom](https://loopback.io/blog/atom.xml) feeds which contain the full articles.
