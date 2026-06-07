---
layout: page
title: gallery
description: My PhD Student Journey 📝
permalink: /gallery/
nav: true
nav_order: 6
---

<style>
  .gallery-wrap {
    margin-top: 2rem;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
  }

  .gallery-card {
    display: block;
    overflow: hidden;
    border-radius: 14px;
    border: 1px solid var(--global-divider-color);
    background: var(--global-bg-color);
    color: var(--global-text-color);
    text-decoration: none;
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }

  .gallery-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    text-decoration: none;
  }

  .gallery-thumb {
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: var(--global-code-bg-color);
  }

  .gallery-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .gallery-info {
    padding: 1rem;
  }

  .gallery-title {
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.35;
    margin-bottom: 0.35rem;
  }

  .gallery-date {
    font-size: 0.9rem;
    color: var(--global-text-color-light);
    margin-bottom: 0.5rem;
  }

  .gallery-caption {
    font-size: 0.95rem;
    line-height: 1.45;
    margin-bottom: 0.5rem;
  }

  .gallery-count {
    font-size: 0.85rem;
    color: var(--global-theme-color);
  }

  .gallery-empty {
    margin-top: 2rem;
  }

  .gallery-modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 2000;
    background: rgba(0, 0, 0, 0.65);
  }

  .gallery-modal {
    position: fixed;
    inset: 0;
    z-index: 2001;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
  }

  .gallery-modal[hidden],
  .gallery-modal-backdrop[hidden] {
    display: none !important;
  }

  .gallery-modal-card {
    position: relative;
    width: min(1000px, 100%);
    max-height: 90vh;
    overflow: auto;
    border-radius: 16px;
    background: var(--global-bg-color);
    border: 1px solid var(--global-divider-color);
  }

  .gallery-modal-close {
    position: absolute;
    top: 0.75rem;
    right: 1rem;
    z-index: 2;
    border: 0;
    background: transparent;
    color: var(--global-text-color);
    font-size: 2rem;
    line-height: 1;
    cursor: pointer;
  }

  .gallery-modal-body {
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(260px, 1fr);
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .gallery-modal-media {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 360px;
    border-radius: 12px;
    background: var(--global-code-bg-color);
    overflow: hidden;
  }

  .gallery-modal-img {
    max-width: 100%;
    max-height: 72vh;
    object-fit: contain;
    display: block;
  }

  .gallery-modal-title {
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0 2rem 0.5rem 0;
  }

  .gallery-modal-date {
    color: var(--global-text-color-light);
    margin-bottom: 0.75rem;
  }

  .gallery-modal-caption {
    line-height: 1.5;
  }

  .gallery-modal-count {
    color: var(--global-theme-color);
    font-size: 0.9rem;
    margin-top: 0.75rem;
  }

  .gallery-modal-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1.25rem;
  }

  .gallery-btn {
    display: inline-block;
    border: 1px solid var(--global-theme-color);
    border-radius: 999px;
    padding: 0.45rem 0.9rem;
    background: transparent;
    color: var(--global-theme-color);
    cursor: pointer;
    text-decoration: none;
    font-size: 0.9rem;
  }

  .gallery-btn:hover {
    background: var(--global-theme-color);
    color: var(--global-bg-color);
    text-decoration: none;
  }

  @media (max-width: 768px) {
    .gallery-grid {
      grid-template-columns: 1fr;
    }

    .gallery-modal-body {
      grid-template-columns: 1fr;
    }

    .gallery-modal-media {
      min-height: 240px;
    }
  }
</style>

<div class="gallery-wrap">
  {% if site.data.gallery and site.data.gallery.size > 0 %}
  <div class="gallery-grid" aria-label="Photo gallery">
    {% for item in site.data.gallery %}
    <a class="gallery-card js-gallery-open"
       href="{{ item.images[0] | relative_url }}"
       data-gallery-index="{{ forloop.index0 }}">
      <div class="gallery-thumb">
        <img src="{{ item.images[0] | relative_url }}"
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

        {% if item.images and item.images.size > 1 %}
        <div class="gallery-count">{{ item.images.size }} photos</div>
        {% endif %}
      </div>
    </a>
    {% endfor %}
  </div>
  {% else %}
  <p class="gallery-empty">No photos have been added yet. Add items to <code>_data/gallery.yml</code> to display them automatically.</p>
  {% endif %}
</div>

<script>
  window.__siteGallery = {{ site.data.gallery | jsonify | replace: '</', '<\\/' }};
</script>

<div class="gallery-modal-backdrop" data-gallery-backdrop hidden></div>

<div class="gallery-modal"
     data-gallery-modal
     hidden
     aria-hidden="true"
     role="dialog"
     aria-modal="true"
     aria-labelledby="galleryModalTitle">
  <div class="gallery-modal-card" role="document">
    <button class="gallery-modal-close" type="button" data-gallery-close aria-label="Close">×</button>

    <div class="gallery-modal-body">
      <div class="gallery-modal-media">
        <img class="gallery-modal-img"
             data-gallery-img
             src=""
             alt="">
      </div>

      <div class="gallery-modal-main">
        <h2 class="gallery-modal-title" id="galleryModalTitle" data-gallery-title>Photo</h2>
        <div class="gallery-modal-date" data-gallery-date></div>
        <div class="gallery-modal-caption" data-gallery-caption></div>
        <div class="gallery-modal-count" data-gallery-count></div>

        <div class="gallery-modal-actions">
          <button class="gallery-btn" type="button" data-gallery-prev>Previous photo</button>
          <button class="gallery-btn" type="button" data-gallery-next>Next photo</button>
          <a class="gallery-btn"
             data-gallery-original
             href="#"
             target="_blank"
             rel="noopener noreferrer">Open original</a>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const posts = window.__siteGallery || [];

    const cards = document.querySelectorAll(".js-gallery-open");
    const modal = document.querySelector("[data-gallery-modal]");
    const backdrop = document.querySelector("[data-gallery-backdrop]");
    const closeBtn = document.querySelector("[data-gallery-close]");
    const img = document.querySelector("[data-gallery-img]");
    const title = document.querySelector("[data-gallery-title]");
    const date = document.querySelector("[data-gallery-date]");
    const caption = document.querySelector("[data-gallery-caption]");
    const count = document.querySelector("[data-gallery-count]");
    const original = document.querySelector("[data-gallery-original]");
    const prevBtn = document.querySelector("[data-gallery-prev]");
    const nextBtn = document.querySelector("[data-gallery-next]");

    if (!modal || !backdrop || !img || posts.length === 0) return;

    let currentPostIndex = 0;
    let currentImageIndex = 0;

    function getImages(post) {
      if (!post) return [];
      if (Array.isArray(post.images)) return post.images;
      if (post.image) return [post.image];
      return [];
    }

    function render(postIndex, imageIndex) {
      const post = posts[postIndex];
      const images = getImages(post);

      if (!post || images.length === 0) return;

      currentPostIndex = postIndex;
      currentImageIndex = imageIndex;

      const imageUrl = images[imageIndex];

      img.src = imageUrl;
      img.alt = post.title || "Photo";

      title.textContent = post.title || "Photo";
      date.textContent = post.date || "";
      caption.textContent = post.caption || "";
      count.textContent = images.length > 1
        ? `${imageIndex + 1} / ${images.length}`
        : "";

      original.href = imageUrl;
    }

    function openModal(postIndex) {
      render(postIndex, 0);

      modal.hidden = false;
      backdrop.hidden = false;
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modal.hidden = true;
      backdrop.hidden = true;
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      img.src = "";
    }

    function showPrevImage() {
      const images = getImages(posts[currentPostIndex]);
      if (images.length === 0) return;

      const nextImageIndex =
        (currentImageIndex - 1 + images.length) % images.length;

      render(currentPostIndex, nextImageIndex);
    }

    function showNextImage() {
      const images = getImages(posts[currentPostIndex]);
      if (images.length === 0) return;

      const nextImageIndex =
        (currentImageIndex + 1) % images.length;

      render(currentPostIndex, nextImageIndex);
    }

    cards.forEach(function (card) {
      card.addEventListener("click", function (event) {
        event.preventDefault();
        openModal(Number(card.dataset.galleryIndex || 0));
      });
    });

    closeBtn.addEventListener("click", closeModal);
    backdrop.addEventListener("click", closeModal);
    prevBtn.addEventListener("click", showPrevImage);
    nextBtn.addEventListener("click", showNextImage);

    document.addEventListener("keydown", function (event) {
      if (modal.hidden) return;

      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") showPrevImage();
      if (event.key === "ArrowRight") showNextImage();
    });
  });
</script>
