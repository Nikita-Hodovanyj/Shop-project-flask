// Получаем все кнопки Edit_text
const editTextButtons = document.querySelectorAll('.Edit_text');

// Добавляем обработчик события для каждой кнопки Edit_text
editTextButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Находим элемент с классом product_price рядом с кнопкой
    const priceElement = button.parentNode.querySelector('.product_price');

    // Создаем новый элемент input для ввода текста
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = priceElement.textContent.trim();

    // Создаем кнопку для сохранения изменений
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Сохранить';

    // Добавляем обработчик события для кнопки сохранения
    saveButton.addEventListener('click', () => {
      // Получаем новое значение из поля ввода
      const newValue = inputField.value.trim();

      // Обновляем текст элемента product_price
      priceElement.textContent = `${newValue} ₴`;

      // Удаляем поле ввода и кнопку сохранения
      inputField.remove();
      saveButton.remove();

      // Здесь можно добавить код для сохранения нового значения на сервере
      // например, отправить AJAX-запрос на сервер
    });

    // Добавляем поле ввода и кнопку сохранения рядом с ценой
    priceElement.parentNode.insertBefore(inputField, priceElement.nextSibling);
    priceElement.parentNode.insertBefore(saveButton, priceElement.nextSibling);
  });
});