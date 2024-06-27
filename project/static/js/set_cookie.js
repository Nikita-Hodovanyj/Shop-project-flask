

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