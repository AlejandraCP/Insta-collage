var photosBox = document.querySelector('.photos-box');
(function() {
  var i = 0;
  for (i; i < photos.length; i++) {
    var containerPhoto = document.createElement('div');
    containerPhoto.classList.add('cont-photo', 'col-md-2', 'col-xs-4');
    var photo = document.createElement('img');
    photo.src = '../assets/images/' + photos[i] + '.jpg';
    photo.setAttribute('draggable', true);
    photo.setAttribute('id', photos[i]);
    containerPhoto.appendChild(photo);
    photosBox.appendChild(containerPhoto);
    photo.classList.add('img-fluid');
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
  event.target.classList.remove('img-fluid');
  event.target.classList.add('img-size');
}

// opciones de collage para 4 fotos

var photo4 = document.getElementById('photos-col-4');
var photo3 = document.getElementById('photos-col-3');
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

/*
var big = document.querySelector('.big');
function collage4() {
  var parent = document.getElementById('parent');
  parent.parentNode.removeChild(parent);
  var contain1 = document.createElement('div');
  contain1.classList.add('row');
  contain1.setAttribute('id', 'parent');
  var firstChild = document.createElement('div');
  firstChild.classList.add('col-6', 'pad', 'collage');
  firstChild.setAttribute('id', 'photo1');
  var seconChild = document.createElement('div');
  seconChild.classList.add('col-6', 'pad', 'collage');
  seconChild.setAttribute('id', 'photo2');

  
  var contain2 = document.createElement('div');
  contain2.classList.add('row');
  contain2.setAttribute('id', 'parent2');
  var thirdChild = document.createElement('div');
  thirdChild.classList.add('col-6', 'pad', 'collage');
  thirdChild.setAttribute('id', 'photo3');
  var fourthChild = document.createElement('div');
  fourthChild.classList.add('col-6', 'pad', 'collage');
  fourthChild.setAttribute('id', 'photo4');
  
  big.appendChild(contain1);
  contain1.appendChild(firstChild);
  contain1.appendChild(seconChild);

  big.appendChild(contain2);
  contain2.appendChild(thirdChild);
  contain2.appendChild(fourthChild);
}

*/
