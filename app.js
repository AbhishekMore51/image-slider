const img_const = document.getElementById('img-con');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

// declaring images
const images = ['nature-1.jpg', 'nature-2.jpg', 'nature-4.jpg', 'nature-5.jpg'];

let i = images.length;

// function for next slide

next.onclick = () => {
  i = i < images.length ? (i = i + 1) : (i = 1);
  img_const.innerHTML = "<img class='img' src=img/" + images[i - 1] + '>';
};

prev.onclick = () => {
  i = i < images.length + 1 && i > 1 ? (i = i - 1) : (i = images.length);
  img_const.innerHTML = "<img class='img' src=img/" + images[i - 1] + '>';
};
