document.addEventListener("DOMContentLoaded", function () {
  const posts = window.__siteGallery || [];

  const links = document.querySelectorAll(".js-gallery-open");
  const modal = document.querySelector("[data-gallery-modal]");
  const backdrop = document.querySelector("[data-gallery-modal-backdrop]");
  const closeBtn = document.querySelector("[data-gallery-modal-close]");
  const img = document.querySelector("[data-gallery-modal-img]");
  const title = document.querySelector("[data-gallery-modal-title]");
  const date = document.querySelector("[data-gallery-modal-date]");
  const caption = document.querySelector("[data-gallery-modal-caption]");
  const count = document.querySelector("[data-gallery-modal-count]");
  const original = document.querySelector("[data-gallery-open-original]");
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
    img.alt = post.title || "사진";

    title.textContent = post.title || "사진";
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

    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    modal.hidden = true;
    backdrop.hidden = true;
    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
    img.src = "";
  }

  function showPrevImage() {
    const post = posts[currentPostIndex];
    const images = getImages(post);
    if (images.length === 0) return;

    const nextImageIndex =
      (currentImageIndex - 1 + images.length) % images.length;

    render(currentPostIndex, nextImageIndex);
  }

  function showNextImage() {
    const post = posts[currentPostIndex];
    const images = getImages(post);
    if (images.length === 0) return;

    const nextImageIndex =
      (currentImageIndex + 1) % images.length;

    render(currentPostIndex, nextImageIndex);
  }

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const postIndex = Number(link.dataset.galleryIndex || 0);
      openModal(postIndex);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  backdrop.addEventListener("click", closeModal);

  if (prevBtn) {
    prevBtn.addEventListener("click", showPrevImage);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", showNextImage);
  }

  document.addEventListener("keydown", function (event) {
    if (modal.hidden) return;

    if (event.key === "Escape") closeModal();
    if (event.key === "ArrowLeft") showPrevImage();
    if (event.key === "ArrowRight") showNextImage();
  });
});
