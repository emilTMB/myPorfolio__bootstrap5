    //Плавная прокрутка
    // Выбираем все ссылки на странице, которые должны прокручивать к элементам на странице
    var links = document.querySelectorAll('a[href^="#"]');

    // Добавляем обработчик события для каждой ссылки
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Предотвращаем стандартное поведение ссылки
    
        var targetId = this.getAttribute('href'); // Получаем атрибут href ссылки
        var targetElement = document.querySelector(targetId); // Находим элемент, к которому нужно прокрутиться
    
        if (targetElement) {
          // Получаем вертикальное положение целевого элемента
          var targetOffsetTop = targetElement.offsetTop;
          
          // Получаем текущую позицию прокрутки
          var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
          
          // Вычисляем расстояние для прокрутки
          var distance = targetOffsetTop - scrollPosition;
          
          // Задаем количество шагов для прокрутки
          var steps = 30; // Чем больше шагов, тем дольше будет анимация
          
          // Вычисляем величину прокрутки на каждом шаге
          var stepSize = distance / steps;
          
          // Задаем интервал анимации
          var interval = setInterval(function() {
            // Перемещаем позицию прокрутки на каждом шаге
            window.scrollBy(0, stepSize);
            
            // Уменьшаем количество шагов
            steps--;
            
            // Если достигнуто количество шагов 0, останавливаем анимацию
            if (steps === 0) {
              clearInterval(interval);
            }
          }, 16); // 16 мс - это примерно 60 FPS для плавной анимации
        }
      });
    });