---
layout: page
title: Gallery
description: My PhD Student Journey 📝
permalink: /gallery/
nav: true
nav_order: 5
---

<style>
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    margin-top: 32px;
  }

  .gallery-card {
    display: block;
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    overflow: hidden;
    background: var(--global-bg-color);
    color: var(--global-text-color);
    text-decoration: none;
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }

  .gallery-card:hover {
    text-decoration: none;
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
  }

  .gallery-thumb {
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: #f5f5f5;
  }

  .gallery-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .gallery-info {
    padding: 16px;
  }

  .gallery-title {
    font-size: 1.05rem;
    font-weight: 600;
    margin-bottom: 6px;
  }

  .gallery-date {
    font-size: 0.9rem;
    color: var(--global-text-color-light);
    margin-bottom: 8px;
  }

  .gallery-caption {
    font-size: 0.95rem;
    line-height: 1.45;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    .gallery-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

{% if site.data.gallery and site.data.gallery.size > 0 %}
<div class="gallery-grid">
  {% for item in site.data.gallery %}
  <a class="gallery-card" href="{{ item.image | relative_url }}">
    <div class="gallery-thumb">
      <img src="{{ item.image | relative_url }}"
           alt="{{ item.title | escape }}"
           loading="lazy">
    </div>

    <div class="gallery-info">
      <div class="gallery-title">{{ item.title }}</div>

      {% if item.date %}
      <div class="gallery-date">{{ item.date }}</div>
      {% endif %}

      {% if item.caption %}
      <div class="gallery-caption">{{ item.caption }}</div>
      {% endif %}
    </div>
  </a>
  {% endfor %}
</div>
{% else %}
<p>No photos have been added yet. Add items to <code>_data/gallery.yml</code>.</p>
{% endif %}
