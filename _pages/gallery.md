---
layout: page
title: Gallery
description: My PhD Student Journey 📝
permalink: /gallery/
nav: true
nav_order: 6
body_class: gallery-page
---

<style>
  .gallery-page .gallery-post-list {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 2rem;
  }

  .gallery-page .gallery-post {
    border-bottom: 1px solid var(--global-divider-color);
    padding-bottom: 3rem;
  }

  .gallery-page .gallery-post:last-child {
    border-bottom: none;
  }

  .gallery-page .gallery-post-title {
    font-size: 1.65rem;
    font-weight: 600;
    margin-bottom: 0.35rem;
  }

  .gallery-page .gallery-post-date {
    font-size: 0.95rem;
    color: var(--global-text-color-light);
    margin-bottom: 0.8rem;
  }

  .gallery-page .gallery-post-caption {
    font-size: 1rem;
    margin-bottom: 1.25rem;
  }

  .gallery-page .gallery-post-images {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .gallery-page .gallery-post-images a {
    display: block;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid var(--global-divider-color);
  }

  .gallery-page .gallery-post-images img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 768px) {
    .gallery-page .gallery-post-images {
      grid-template-columns: 1fr;
    }
  }
</style>

{% if site.data.gallery and site.data.gallery.size > 0 %}
<div class="gallery-post-list">
  {% for item in site.data.gallery %}
  <article class="gallery-post">
    <h2 class="gallery-post-title">{{ item.title }}</h2>

    {% if item.date %}
    <div class="gallery-post-date">{{ item.date }}</div>
    {% endif %}

    {% if item.caption %}
    <p class="gallery-post-caption">{{ item.caption }}</p>
    {% endif %}

    {% if item.images and item.images.size > 0 %}
    <div class="gallery-post-images">
      {% for image in item.images %}
      <a href="{{ image | relative_url }}" target="_blank" rel="noopener noreferrer">
        <img src="{{ image | relative_url }}"
             alt="{{ item.title | escape }}"
             loading="lazy">
      </a>
      {% endfor %}
    </div>
    {% endif %}
  </article>
  {% endfor %}
</div>
{% else %}
<p>No photos have been added yet. Add items to <code>_data/gallery.yml</code> to display them automatically.</p>
{% endif %}
