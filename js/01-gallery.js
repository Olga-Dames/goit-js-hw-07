import { galleryItems } from './gallery-items.js';
// Change code below this line
import * as basicLightbox from '../'

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery')

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) { 
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
      </a>
      </div>
      `;
    }).join(''); 
}

galleryRef.addEventListener('click', onClickShowFullSize)
  
function onClickShowFullSize(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
    const fullSizeImage = e.target.dataset.source
  // console.log(fullSizeImage);
}

const instance = basicLightbox.create(
	document.querySelector('.gallery__image'))

instance.show()

