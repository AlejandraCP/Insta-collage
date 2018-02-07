var photosBox = document.querySelector('.photos-box');
(function() {
  var i = 0;
  for (i; i < photos.length; i++) {
    var containerPhoto = document.createElement('div');
    containerPhoto.classList.add('cont-photo');
    containerPhoto.classList.add('col-md-2');
    containerPhoto.classList.add('col-sm-4');
    var photo = document.createElement('img');
    photo.src = '../assets/images/' + photos[i] + '.jpg';
    photo.setAttribute('draggable', true);
    photo.setAttribute('id', 'photo' + photos[i]);
    containerPhoto.appendChild(photo);
    photosBox.appendChild(containerPhoto);
    photo.classList.add('img-fluid');
  }
})();

document.addEventListener('dragstart', drag);
document.addEventListener('dragover', permitirDrop);
document.addEventListener('dragleave', leave);
var cont = document.querySelector('.collage');
cont.addEventListener('drop', drop);

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
  if (event.target.id === 'collage') {
    let idFoto = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(idFoto));
    console.log('yea');
  } else {
    console.log('nop');
  }
  console.log('drop');
}

function leave(event) {
}

