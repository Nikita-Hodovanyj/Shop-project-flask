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

        const inputField = document.createElement('input');
        inputField.classList.add('modal-input');
        inputField.type = isFileInput ? 'file' : 'text';
        if (!isFileInput) {
            inputField.placeholder = placeholderText;
        }

        const additionalFields = {};
        if (hasAdditionalFields) {
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
        }

        const saveButton = document.createElement('button');
        saveButton.textContent = 'SEND';
        saveButton.addEventListener('click', (event) => {
            event.stopPropagation();

            if (isFileInput) {
                const file = inputField.files[0];
                if (file && currentElement) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        currentElement.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            } else {
                const newValue = inputField.value.trim();
                if (currentElement && newValue) {
                    currentElement.textContent = newValue;
                }
            }

            if (hasAdditionalFields) {
                const priceValue = additionalFields.priceField.value.trim();
                const discountValue = additionalFields.discountField.value.trim();
                const quantityValue = additionalFields.quantityField.value.trim();
                const descriptionValue = additionalFields.descriptionField.value.trim();
                const file = additionalFields.photoUploadField.files[0];

                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        createNewProduct(descriptionValue, priceValue, discountValue, quantityValue, e.target.result);
                    };
                    reader.readAsDataURL(file);
                } else {
                    createNewProduct(descriptionValue, priceValue, discountValue, quantityValue, null);
                }
            }

            inputField.value = '';
            if (hasAdditionalFields) {
                additionalFields.priceField.value = '';
                additionalFields.discountField.value = '';
                additionalFields.quantityField.value = '';
                additionalFields.descriptionField.value = '';
                additionalFields.photoUploadField.value = '';
            }

            closeModal(modal);
        });

        modalContent.appendChild(changeTitle);
        modalContent.appendChild(inputField);
        if (hasAdditionalFields) {
            modalContent.appendChild(additionalFields.priceField);
            modalContent.appendChild(additionalFields.discountField);
            modalContent.appendChild(additionalFields.quantityField);
            modalContent.appendChild(additionalFields.descriptionField);
            modalContent.appendChild(additionalFields.photoUploadField);
        }
        modalContent.appendChild(saveButton);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        modalContent.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        modal.addEventListener('click', () => closeModal(modal));

        return { modal, inputField, ...additionalFields };
    }

    const textModal = createModal('Change Text', 'Введите новый текст', false, '700px', '965px');
    const priceModal = createModal('Change Price', 'Введите новую цену', false, '700px', '965px');
    const discountModal = createModal('Change Discount', 'Введите новую скидку', false, '700px', '965px');
    const memory1Modal = createModal('Change Memory 1', 'Введите новую память 1', false, '700px', '965px');
    const memory2Modal = createModal('Change Memory 2', 'Введите новую память 2', false, '700px', '965px');
    const memory3Modal = createModal('Change Memory 3', 'Введите новую память 3', false, '700px', '965px');
    const photoModal = createModal('Change Photo', '', true, '700px', '965px');
    const newProductModal = createModal('New Product', 'Name-product', false, '700px', '965px', true, 'new-product-modal');

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

    function createNewProduct(description, price, discount, quantity, photoUrl) {
        const productBox = document.createElement('div');
        productBox.classList.add('box');

        const productName = document.createElement('div');
        productName.classList.add('product_name_a');
        productName.textContent = description;

        const productPrice = document.createElement('div');
        productPrice.classList.add('product_price_a');
        productPrice.textContent = price;

        const productDiscount = document.createElement('div');
        productDiscount.classList.add('product_discount_a');
        productDiscount.textContent = discount;

        const productQuantity = document.createElement('div');
        productQuantity.classList.add('product_quantity');
        productQuantity.textContent = quantity;

        const productPhoto = document.createElement('img');
        productPhoto.classList.add('product_photo');
        if (photoUrl) {
            productPhoto.src = photoUrl;
        }

        const editTextButton = document.createElement('button');
        editTextButton.classList.add('Edit_text');
        editTextButton.textContent = 'Edit Text';

        const editPriceButton = document.createElement('button');
        editPriceButton.classList.add('Edit_price');
        editPriceButton.textContent = 'Edit Price';

        const editDiscountButton = document.createElement('button');
        editDiscountButton.classList.add('Edit_discount');
        editDiscountButton.textContent = 'Edit Discount';

        const editPhotoButton = document.createElement('button');
        editPhotoButton.classList.add('Edit_photo');
        editPhotoButton.textContent = 'Edit Photo';

        const trashButton = document.createElement('button');
        trashButton.classList.add('Trash');
        trashButton.textContent = 'Delete';

        productBox.appendChild(productName);
        productBox.appendChild(productPrice);
        productBox.appendChild(productDiscount);
        productBox.appendChild(productQuantity);
        productBox.appendChild(productPhoto);
        productBox.appendChild(editTextButton);
        productBox.appendChild(editPriceButton);
        productBox.appendChild(editDiscountButton);
        productBox.appendChild(editPhotoButton);
        productBox.appendChild(trashButton);

        document.body.appendChild(productBox);

        addEventListenerToButtons([editTextButton], textModal.modal, textModal.inputField, '.product_name_a');
        addEventListenerToButtons([editPriceButton], priceModal.modal, priceModal.inputField, '.product_price_a');
        addEventListenerToButtons([editDiscountButton], discountModal.modal, discountModal.inputField, '.product_discount_a');
        addEventListenerToButtons([editPhotoButton], photoModal.modal, photoModal.inputField, 'img');
        trashButton.addEventListener('click', (event) => {
            event.stopPropagation();
            productBox.remove();
        });
    }
});
