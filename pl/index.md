---
layout: homepage
title: Piwo Paliwo Sailing
lang: pl
ref: home
---

# Witamy w PiwoPaliwo <span class="italic text-background!">Sailing</span>.

To nasz serwis specjalny poświęcony aktywnościom żeglarskim.

Zobacz, co przygotowaliśmy w zakładkach na górze, lub wczytaj się w nasze posty.

## Wpisy w serwisie specjalnym

<div class="flex flex-col gap-8">
{% for post in site.categories.pl %}
{% include post-card.html post=post %}
{% endfor %}
</div>
