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

function galleryShow(event) {
  event.preventDefault();
  const instance = basicLightbox.create(`
  <div class="modal">
    <img src="${event.target.getAttribute(
      "data-source"
    )}" width="100%" height="auto">
  </div>
      `);
  instance.show();
  instance.element().addEventListener("click", (event) => instance.close());
}
galleryItemClass.addEventListener("click", galleryShow);

function name1(event) {
  console.log(event);
  if (basicLightbox.visible()) {
    if (event.key === "Escape") {
      instance.close();
      // document.removeEventListener("keydown", galleryShow);
    }
  }
}
document.addEventListener("keydown", name1);
