let photosBox = document.querySelector('.photos-box');
(function() {
  let i = 0;
  for (i; i < photos.length; i++) {
    let photo = document.createElement('img');
    photo.src = '../assets/images/' + photos[i] + '.jpg';
    photo.setAttribute('draggable', true);
    photo.setAttribute('id', photos[i]);
    photosBox.appendChild(photo);
    photo.classList.add('cont-photo', 'col-md-2', 'col-xs-4');
  }
})();

document.addEventListener('dragstart', drag);
document.addEventListener('dragover', permitirDrop);
document.addEventListener('dragend', end);
document.addEventListener('drop', drop);

function drag(event) {
  event.dataTransfer.setData('text', event.target.id);
  console.log('drag');
}

function permitirDrop(event) {
  event.preventDefault();
  console.log('dragover');
}

function drop(event) {
  event.preventDefault();
  if (event.target.id === 'photo1' || event.target.id === 'photo2' || event.target.id === 'photo3' || event.target.id === 'photo4') {
    let idFoto = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(idFoto));
    console.log(event.target);
  }
}

function end(event) {
  console.log('dragend');
  console.log(event.target);
  event.target.classList.remove('img-fluid', 'cont-photo', 'col-md-2', 'col-xs-4');
  event.target.classList.add('img-size');
}

// opciones de collage para 4 fotos

let photo4 = document.getElementById('photos-col-4');
let photo3 = document.getElementById('photos-col-3');
let option3 = document.getElementById('option-3');
let option4 = document.getElementById('option-4');

photo4.addEventListener('click', collage4);
photo3.addEventListener('click', collage3);

function collage4() {
  option3.classList.add('hide');
  option3.classList.remove('show');
  option4.classList.add('show');
  option4.classList.remove('hide');
}

function collage3() {
  option3.classList.add('show');
  option3.classList.remove('hide');
  option4.classList.add('hide');
  option4.classList.remove('show');
}
