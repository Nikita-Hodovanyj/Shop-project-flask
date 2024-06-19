// document.addEventListener('DOMContentLoaded', function() {
//     const valueEl = document.querySelector('.value');
//     const buyButtons = document.querySelectorAll('.Buy_Button');
//     let count = 0;
  
//     buyButtons.forEach(function(button) {
//       button.addEventListener('click', function() {
//         count++;
//         valueEl.textContent = count;
//       });
//     });
//   });

// const buttonList = document.querySelectorAll('.Buy_Button');
// let counterValue = document.querySelector('.counter .value');
// let count = parseInt(counterValue.textContent) || 0; // Получаем начальное значение счетчика из HTML

// for (let i = 0; i < buttonList.length; i++) {
//   const button = buttonList[i];
//   button.addEventListener('click', () => {
//     if (document.cookie === '') {
//       document.cookie = `products=${button.id}; path=/`;
//     } else {
//       const idProduct = document.cookie.split('=')[1];
//       document.cookie = `products=${idProduct} ${button.id}; path=/`;
//     }
//     count++;
//     counterValue.textContent = count; // Обновляем значение счетчика на странице
//   });
// }


document.addEventListener('DOMContentLoaded', function() {
  const buttonList = document.body.querySelectorAll('.Buy_Button');
  const valueEl = document.querySelector('.value');
  let count = 0;

  for (let i = 0; i < buttonList.length; i++) {
    let button = buttonList[i];
    button.addEventListener('click', function(event) {
      if (document.cookie == '') {
        document.cookie = `products = ${button.id}; path = /`;
      } else {
        id_product = document.cookie.split('=')[1];
        document.cookie = `products = ${id_product} ${button.id}; path = /`;
      }
      count++;
      valueEl.textContent = count;
    });
  }
});