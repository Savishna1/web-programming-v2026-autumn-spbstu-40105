// Находим элементы на странице
var slides = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.dot');
var counter = document.getElementById('counter');
var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');

// Номер текущего слайда (счёт с нуля)
var current = 0;

// Показывает слайд с номером n
function showSlide(n) {
  // Зацикливание: после последнего идёт первый, перед первым - последний
  if (n >= slides.length) {
    n = 0;
  }
  if (n < 0) {
    n = slides.length - 1;
  }
  current = n;

  // Убираем класс active у всех слайдов и точек
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
    dots[i].classList.remove('active');
  }

  // Ставим active только текущему
  slides[current].classList.add('active');
  dots[current].classList.add('active');

  // Обновляем счётчик: "1 / 3"
  counter.textContent = (current + 1) + ' / ' + slides.length;
}

// Кнопки
prevBtn.onclick = function () {
  showSlide(current - 1);
};

nextBtn.onclick = function () {
  showSlide(current + 1);
};

// Пагинация: каждой точке своё событие клика
for (var i = 0; i < dots.length; i++) {
  addDotClick(dots[i], i);
}

function addDotClick(dot, index) {
  dot.onclick = function () {
    showSlide(index);
  };
}
