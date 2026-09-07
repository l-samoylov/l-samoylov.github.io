---
layout: page
permalink: /publications/
title: publications
description: description: "🚀 Incoming!" <br><small>(*indicates that authors are listed alphabetically, per custom in mathematics)"</small>
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography --query @*[underreview!=true]* %}

</div>
