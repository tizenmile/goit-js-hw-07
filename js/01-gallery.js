import { galleryItems } from "./gallery-items.js";
const galleryItemClass = document.querySelector(".gallery");

// Show gallery
const showGallery = (galleryItem) => {
  galleryItem.map(({ preview, original, description }) => {
    const galleryRef = document.createElement("a");
    galleryRef.classList.add("gallery__link");
    galleryRef.href = original;

    const galleryItem = document.createElement("img");
    galleryItem.classList.add("gallery__image");
    galleryItem.src = preview;
    galleryItem.setAttribute("data-source", original);
    galleryItem.alt = description;
    galleryItemClass.append(galleryRef);
    galleryRef.append(galleryItem);
  });
};
showGallery(galleryItems);

galleryItemClass.addEventListener("click", (event) => {
  event.preventDefault();
  const instance = basicLightbox.create(`
  <div class="modal">
    <img src="${event.target.getAttribute(
      "data-source"
    )}" width="1200" height="800">
  </div>
      `);
  instance.show();
  if (basicLightbox.visible()) {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") instance.close();
    });
  }
  instance.element().addEventListener("click", (event) => instance.close());
});
