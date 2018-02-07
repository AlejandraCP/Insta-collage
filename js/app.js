var photosBox = document.querySelector('.photos-box');
(function() {
  var i = 1;
  for (i; i < 13; i++) {
    var containerPhoto = document.createElement('div');
    containerPhoto.classList.add('cont-photo');
    containerPhoto.classList.add('col-md-2');
    containerPhoto.classList.add('col-sm-4');
    var photo = document.createElement('img');
    photo.src = '../assets/images/naturaleza' + i + '.jpg';
    photo.setAttribute('draggable', true);
    containerPhoto.appendChild(photo);
    photosBox.appendChild(containerPhoto);
    photo.classList.add('img-fluid');
  }
})();
