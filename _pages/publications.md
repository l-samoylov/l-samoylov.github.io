---
layout: page
permalink: /publications/
title: publications
description: 🚀 Incoming! * indicates that authors are listed alphabetically, per custom in mathematics
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography --query @*[underreview!=true]* %}

</div>
