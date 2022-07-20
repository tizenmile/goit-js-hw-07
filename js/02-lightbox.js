import { galleryItems } from "./gallery-items.js";
// Change code below this line
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
    galleryItem.alt = description;
    galleryItemClass.append(galleryRef);
    galleryRef.append(galleryItem);
  });
};
showGallery(galleryItems);
galleryItemClass.addEventListener("click", (event) => {
  event.preventDefault();
});
new SimpleLightbox(".gallery a", {
  captionsData: 'alt',
  captionDelay: 250
});
