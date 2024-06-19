let listButtonMinus = document.querySelectorAll(".minus")

for(let count = 0; count < listButtonMinus.length; count++){
    let button = listButtonMinus[count]
    button.addEventListener(
        type= "click", 
        listener = (event) =>{
            let cookiesProduct = document.cookie.split("=")[1]
            
            let listIdProduct = cookiesProduct.split(" ")
            if (button.id in listIdProduct){
                for (let index = 0; index < listIdProduct.length; index++){
                    if (button.id == listIdProduct[index]){
                        listIdProduct.splice(index, 1)
                        button.nextElementSibling.textContent = +button.nextElementSibling.textContent - 1
                        break
                    }
                }
            }
            document.cookie = `products = ${listIdProduct.join(" ")}; path = /`
        }
    )
}

const buttons = document.querySelectorAll('.plus')
for (let i = 0; i < buttons.length; i++){
    let button = buttons[i]
    button.addEventListener(
        type = 'click',
        listener = function(event){
            if (document.cookie == ""){
                document.cookie = `products = ${button.id}`
                button.previousElementSibling.textContent = +button.previousElementSibling.textContent + 1
            }
            else{
                let currentProduct = document.cookie.split('=')[1]
                document.cookie = `products = ${currentProduct} ${button.id}; path = /`
                button.previousElementSibling.textContent = +button.previousElementSibling.textContent + 1
            }
        }
    )
}