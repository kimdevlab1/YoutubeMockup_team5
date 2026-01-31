const tabButtons = document.querySelectorAll('.tabs__item');

tabButtons.forEach(function (button) {
  button.addEventListener('click', function () {

    tabButtons.forEach(function (btn) {
      btn.classList.remove('tabs__item--active');
    });

    button.classList.add('tabs__item--active');
  });
});
