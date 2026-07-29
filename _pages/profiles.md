---
layout: page
title: personal
permalink: /personal/
nav: true
nav_order: 6
---

Outside of research, I enjoy:

* Trying new matcha cafes (matcha is my go-to for staying calm)
* Traveling around the world (next destinations this year: Indonesia and Portugal)
* Running my own YouTube channel (daylife and travel vlog)
* Exploring spicy food (I can handle buldak noodles, hotpot, Thai chilies)


<div class="personal-photo-grid">
  <img src="{{ '/assets/img/matcha_1.jpeg' | relative_url }}" alt="Matcha photo 1" loading="lazy">
  <img src="{{ '/assets/img/matcha_2.jpeg' | relative_url }}" alt="Matcha photo 2" loading="lazy">
  <img src="{{ '/assets/img/matcha_3.jpeg' | relative_url }}" alt="Matcha photo 3" loading="lazy">
  <img src="{{ '/assets/img/matcha_4.jpeg' | relative_url }}" alt="Matcha photo 4" loading="lazy">
  <img src="{{ '/assets/img/matcha_5.jpeg' | relative_url }}" alt="Matcha photo 5" loading="lazy">
  <img src="{{ '/assets/img/matcha_6.jpeg' | relative_url }}" alt="Matcha photo 6" loading="lazy">
</div>

<style>
  .personal-photo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .personal-photo-grid img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 8px;
    display: block;
  }

  @media (max-width: 768px) {
    .personal-photo-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .personal-photo-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
