// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');
const marcup = createMarcupGallery(galleryItems);

function createMarcupGallery(item){
    return item.map(({ preview, original, description}) =>{
        return `<a class="gallery__item" href=${original}>
        <img class="gallery__image" src=${preview} alt=${description} />
      </a>`
    })
    .join('')
}
galleryEl.innerHTML = marcup;

galleryEl.addEventListener('click', onClick);


function onClick(evt){
    evt.preventDefault();
    if(evt.target.nodeName !== 'IMG'){
        return;
    }
}

let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionPosition: 'bottom',
    captionType: 'attr',
    captionsData: 'alt',
});