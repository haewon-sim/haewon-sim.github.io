---
layout: page
title: gallery
description: My PhD Student Journey 📝
permalink: /gallery/
nav: true
nav_order: 6
body_class: gallery-page
---

<section class="page-hero">
  <div class="container">

  </div>
</section>

<section class="section section--alt">
  <div class="container">
    {% if site.data.gallery and site.data.gallery.size > 0 %}
    <div class="gallery-grid" aria-label="사진 목록">
      {% for item in site.data.gallery %}
      <article class="gallery-post">
        <a class="gallery-item js-gallery-open"
           href="{{ item.images[0] | relative_url }}"
           data-gallery-index="{{ forloop.index0 }}"
           data-no-save>
          <div class="gallery-thumb" aria-hidden="true">
            <img class="no-save"
                 src="{{ item.images[0] | relative_url }}"
                 alt="{{ item.title | escape }}"
                 loading="lazy"
                 draggable="false" />
          </div>

          <div class="gallery-meta">
            <div class="gallery-title">{{ item.title }}</div>
            {% if item.date %}
            <div class="gallery-date">{{ item.date }}</div>
            {% endif %}
            {% if item.caption %}
            <div class="gallery-caption">{{ item.caption }}</div>
            {% endif %}

            {% if item.images and item.images.size > 1 %}
            <div class="gallery-count">사진 {{ item.images.size }}장</div>
            {% endif %}
          </div>
        </a>
      </article>
      {% endfor %}
    </div>
    {% else %}
    <p class="lead">아직 등록된 사진이 없습니다. <code>_data/gallery.yml</code>에 항목을 추가하면 자동으로 표시됩니다.</p>
    {% endif %}
  </div>
</section>

<script>
  window.__siteGallery = {{ site.data.gallery | jsonify | replace: '</', '<\\/' }};
</script>

<div class="modal-backdrop" data-gallery-modal-backdrop hidden></div>

<div class="modal"
     data-gallery-modal
     hidden
     aria-hidden="true"
     role="dialog"
     aria-modal="true"
     aria-labelledby="galleryModalTitle">
  <div class="modal-card modal-card--gallery" role="document">
    <button class="modal-close" type="button" data-gallery-modal-close aria-label="닫기">×</button>

    <div class="gallery-modal-body">
      <div class="gallery-modal-media">
        <img class="gallery-modal-img no-save"
             data-gallery-modal-img
             data-no-save
             src=""
             alt=""
             draggable="false" />
      </div>

      <div class="gallery-modal-main">
        <h2 class="modal-title" id="galleryModalTitle" data-gallery-modal-title>사진</h2>
        <p class="post-meta" data-gallery-modal-date></p>
        <p class="gallery-caption" data-gallery-modal-caption></p>
        <p class="gallery-count" data-gallery-modal-count></p>

        <div class="gallery-modal-actions">
          <button class="person-more gallery-nav-btn" type="button" data-gallery-prev>이전 사진</button>
          <button class="person-more gallery-nav-btn" type="button" data-gallery-next>다음 사진</button>
          <a class="person-more gallery-open-original"
             data-gallery-open-original
             href="#"
             target="_blank"
             rel="noopener noreferrer">원본 열기</a>
        </div>
      </div>
    </div>
  </div>
</div>

<script src="{{ '/assets/js/gallery.js' | relative_url }}"></script>
