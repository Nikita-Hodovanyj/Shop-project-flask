document.addEventListener('DOMContentLoaded', function () {
    const editTextButtons = document.querySelectorAll('.Edit_text');
    const editPriceButtons = document.querySelectorAll('.Edit_price');
    const editDiscountButtons = document.querySelectorAll('.Edit_discount');
    const editMemory1Buttons = document.querySelectorAll('.Edit_memory1');
    const editMemory2Buttons = document.querySelectorAll('.Edit_memory2');
    const editMemory3Buttons = document.querySelectorAll('.Edit_memory3');
    const editPhotoButtons = document.querySelectorAll('.Edit_photo');
    const trashButtons = document.querySelectorAll('.Trash');
    const addButtons = document.querySelectorAll('.New_product');

    let currentElement = null;

    function createModal(titleText, placeholderText, isFileInput = false, width = '700px', height = '965px', hasAdditionalFields = false, modalClass = '') {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        if (modalClass) {
            modal.classList.add(modalClass);
        }
        modal.style.display = 'none';

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        modalContent.style.width = width;
        modalContent.style.height = height;

        const changeTitle = document.createElement('p');
        changeTitle.textContent = titleText;

        const additionalFields = {};
        if (hasAdditionalFields) {
            additionalFields.nameField = document.createElement('input');
            additionalFields.nameField.classList.add('modal-input');
            additionalFields.nameField.type = 'text';
            additionalFields.nameField.placeholder = 'Name-product';

            additionalFields.priceField = document.createElement('input');
            additionalFields.priceField.classList.add('modal-input');
            additionalFields.priceField.type = 'text';
            additionalFields.priceField.placeholder = 'Price-product';

            additionalFields.discountField = document.createElement('input');
            additionalFields.discountField.classList.add('modal-input');
            additionalFields.discountField.type = 'text';
            additionalFields.discountField.placeholder = 'Discount';

            additionalFields.quantityField = document.createElement('input');
            additionalFields.quantityField.classList.add('modal-input');
            additionalFields.quantityField.type = 'text';
            additionalFields.quantityField.placeholder = 'Count';

            additionalFields.descriptionField = document.createElement('input');
            additionalFields.descriptionField.classList.add('modal-input');
            additionalFields.descriptionField.type = 'text';
            additionalFields.descriptionField.placeholder = 'Description';

            additionalFields.photoUploadField = document.createElement('input');
            additionalFields.photoUploadField.classList.add('modal-input');
            additionalFields.photoUploadField.type = 'file';
        } else {
            const inputField = document.createElement('input');
            inputField.classList.add('modal-input');
            inputField.type = isFileInput ? 'file' : 'text';
            if (!isFileInput) {
                inputField.placeholder = placeholderText;
            }
            additionalFields.inputField = inputField;
        }

        const saveButton = document.createElement('button');
        saveButton.textContent = 'SEND';
        saveButton.addEventListener('click', (event) => {
            event.stopPropagation();

            if (hasAdditionalFields) {
                const nameValue = additionalFields.nameField.value.trim();
                const priceValue = additionalFields.priceField.value.trim();
                const discountValue = additionalFields.discountField.value.trim();
                const quantityValue = additionalFields.quantityField.value.trim();
                const descriptionValue = additionalFields.descriptionField.value.trim();
                const file = additionalFields.photoUploadField.files[0];

                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        createNewProduct(nameValue, descriptionValue, priceValue, discountValue, quantityValue, e.target.result);
                    };
                    reader.readAsDataURL(file);
                } else {
                    createNewProduct(nameValue, descriptionValue, priceValue, discountValue, quantityValue, null);
                }

                additionalFields.nameField.value = '';
                additionalFields.priceField.value = '';
                additionalFields.discountField.value = '';
                additionalFields.quantityField.value = '';
                additionalFields.descriptionField.value = '';
                additionalFields.photoUploadField.value = '';
            } else {
                if (isFileInput) {
                    const file = additionalFields.inputField.files[0];
                    if (file && currentElement) {
                        const reader = new FileReader();
                        reader.onload = function (e) {
                            currentElement.src = e.target.result;
                        };
                        reader.readAsDataURL(file);
                    }
                } else {
                    const newValue = additionalFields.inputField.value.trim();
                    if (currentElement && newValue) {
                        currentElement.textContent = newValue;
                    }
                }
                additionalFields.inputField.value = '';
            }

            closeModal(modal);
        });

        modalContent.appendChild(changeTitle);
        if (hasAdditionalFields) {
            modalContent.appendChild(additionalFields.nameField);
            modalContent.appendChild(additionalFields.priceField);
            modalContent.appendChild(additionalFields.discountField);
            modalContent.appendChild(additionalFields.quantityField);
            modalContent.appendChild(additionalFields.descriptionField);
            modalContent.appendChild(additionalFields.photoUploadField);
        } else {
            modalContent.appendChild(additionalFields.inputField);
        }
        modalContent.appendChild(saveButton);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        modalContent.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        modal.addEventListener('click', () => closeModal(modal));

        return { modal, ...additionalFields };
    }

    const textModal = createModal('Change Text', 'Введите новый текст', false, '700px', '965px');
    const priceModal = createModal('Change Price', 'Введите новую цену', false, '700px', '965px');
    const discountModal = createModal('Change Discount', 'Введите новую скидку', false, '700px', '965px');
    const memory1Modal = createModal('Change Memory 1', 'Введите новую память 1', false, '700px', '965px');
    const memory2Modal = createModal('Change Memory 2', 'Введите новую память 2', false, '700px', '965px');
    const memory3Modal = createModal('Change Memory 3', 'Введите новую память 3', false, '700px', '965px');
    const photoModal = createModal('Change Photo', '', true, '700px', '965px');
    const newProductModal = createModal('New Product', false, false, '700px', '965px', true, 'new-product-modal');

    function openModal(modal) {
        modal.style.display = 'block';
    }

    function closeModal(modal) {
        modal.style.display = 'none';
    }

    function addEventListenerToButtons(buttons, modal, inputField, selector) {
        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.stopPropagation();

                if (selector === 'img') {
                    currentElement = button.closest('.box').querySelector(selector);
                } else {
                    currentElement = button.closest('.box').querySelector(selector);
                    inputField.value = currentElement.textContent;
                }

                openModal(modal);
            });
        });
    }

    addEventListenerToButtons(editTextButtons, textModal.modal, textModal.inputField, '.product_name_a');
    addEventListenerToButtons(editPriceButtons, priceModal.modal, priceModal.inputField, '.product_price_a');
    addEventListenerToButtons(editDiscountButtons, discountModal.modal, discountModal.inputField, '.product_discount_a');
    addEventListenerToButtons(editMemory1Buttons, memory1Modal.modal, memory1Modal.inputField, '.product_memory1');
    addEventListenerToButtons(editMemory2Buttons, memory2Modal.modal, memory2Modal.inputField, '.product_memory2');
    addEventListenerToButtons(editMemory3Buttons, memory3Modal.modal, memory3Modal.inputField, '.product_memory3');
    addEventListenerToButtons(editPhotoButtons, photoModal.modal, photoModal.inputField, 'img');

    trashButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            const productBox = button.closest('.box');
            if (productBox) {
                productBox.remove();
            }
        });
    });

    addButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            openModal(newProductModal.modal);
        });
    });

    function createNewProduct(name, description, price, discount, quantity, photoUrl) {
        const productBox = document.createElement('div');
        productBox.classList.add('box');
        productBox.id = `product-${Date.now()}`;

        const productName = document.createElement('div');
        productName.classList.add('product_name_ad');
        productName.textContent = name;

        const productDescription = document.createElement('div');
        productDescription.classList.add('product_description_ad');
        productDescription.textContent = description;

        const productPrice = document.createElement('div');
        productPrice.classList.add('product_price_ad');
        productPrice.textContent = price;

        const productDiscount = document.createElement('div');
        productDiscount.classList.add('product_discount_ad');
        productDiscount.textContent = discount;

        const productQuantity = document.createElement('div');
        productQuantity.classList.add('product_quantity');
        productQuantity.textContent = quantity;

        const productMemory1 = document.createElement('div');
        productMemory1.classList.add('product_memory1_ad');
        productMemory1.textContent = '256гб';

        const productMemory2 = document.createElement('div');
        productMemory2.classList.add('product_memory2_ad');
        productMemory2.textContent = '512гб';

        const productMemory3 = document.createElement('div');
        productMemory3.classList.add('product_memory3_ad');
        productMemory3.textContent = '1тб';

        const productPhoto = document.createElement('img');
        productPhoto.classList.add('product_photo_ad');
        if (photoUrl) {
            productPhoto.src = photoUrl;
        }

        const buyButton = document.createElement('button');
        buyButton.classList.add('Buy_Button_ad');
        buyButton.textContent = 'КУПИТИ';

        const editTextButton = document.createElement('button');
        editTextButton.classList.add('Edit_text_ad');
        editTextButton.textContent = '🖊';

        const editPriceButton = document.createElement('button');
        editPriceButton.classList.add('Edit_price_ad');
        editPriceButton.textContent = '🖊';

        const editDiscountButton = document.createElement('button');
        editDiscountButton.classList.add('Edit_discount_ad');
        editDiscountButton.textContent = '🖊';

        const editPhotoButton = document.createElement('button');
        editPhotoButton.classList.add('Edit_photo_ad');
        editPhotoButton.textContent = '🖊';

        const editMemory1Button = document.createElement('button');
        editMemory1Button.classList.add('Edit_memory1_ad');
        editMemory1Button.textContent = '🖊';

        const editMemory2Button = document.createElement('button');
        editMemory2Button.classList.add('Edit_memory2_ad');
        editMemory2Button.textContent = '🖊';

        const editMemory3Button = document.createElement('button');
        editMemory3Button.classList.add('Edit_memory3_ad');
        editMemory3Button.textContent = '🖊';

        const trashButton = document.createElement('button');
        trashButton.classList.add('Trash_ad');
        trashButton.textContent = '🗑️Видалити товар';

        const capacityTitle = document.createElement('h');
        capacityTitle.classList.add('product_capacity_title');
        capacityTitle.textContent = 'ЄМНІСТЬ:';

        productBox.appendChild(productName);
        productBox.appendChild(productDescription);
        productBox.appendChild(productPrice);
        productBox.appendChild(productDiscount);
        productBox.appendChild(productQuantity);
        productBox.appendChild(capacityTitle);
        productBox.appendChild(productMemory1);
        productBox.appendChild(editMemory1Button);
        productBox.appendChild(productMemory2);
        productBox.appendChild(editMemory2Button);
        productBox.appendChild(productMemory3);
        productBox.appendChild(editMemory3Button);
        productBox.appendChild(productPhoto);
        productBox.appendChild(buyButton);
        productBox.appendChild(editTextButton);
        productBox.appendChild(editPriceButton);
        productBox.appendChild(editDiscountButton);
        productBox.appendChild(editPhotoButton);
        productBox.appendChild(trashButton);

        document.body.appendChild(productBox);

        // Attach event listeners to the "Edit" buttons
        addEventListenerToButtons([editTextButton], textModal.modal, textModal.inputField, '.product_name_ad');
        addEventListenerToButtons([editPriceButton], priceModal.modal, priceModal.inputField, '.product_price_ad');
        addEventListenerToButtons([editDiscountButton], discountModal.modal, discountModal.inputField, '.product_discount_ad');
        addEventListenerToButtons([editMemory1Button], memory1Modal.modal, memory1Modal.inputField, '.product_memory1_ad');
        addEventListenerToButtons([editMemory2Button], memory2Modal.modal, memory2Modal.inputField, '.product_memory2_ad');
        addEventListenerToButtons([editMemory3Button], memory3Modal.modal, memory3Modal.inputField, '.product_memory3_ad');
        addEventListenerToButtons([editPhotoButton], photoModal.modal, photoModal.inputField, 'img');

        // Attach event listener to the "Delete" button
        trashButton.addEventListener('click', (event) => {
            event.stopPropagation();
            productBox.remove();
        });
    }

});
