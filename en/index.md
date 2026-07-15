---
layout: homepage
title: Piwo Paliwo Sailing
lang: en
ref: home
---

# Welcome to PiwoPaliwo <span class="italic text-background!">Sailing</span>.

This is our special service concerning sailing activities of the group.

Feel free to roam and check out the tabs in navigation bar, or read our posts.

## Posts in the service

<div class="flex flex-col gap-8">
{% for post in site.categories.pl %}
{% include post-card.html post=post %}
{% endfor %}
</div>
