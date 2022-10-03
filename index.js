const forms = document.querySelectorAll('.popup__form');
// Находим все наши формы


const hasInvalidInput = (arrFormElements) => {
     // проходим по этому массиву методом some
     return arrFormElements.some((arrFormElement) => {
           // Если поле не валидно, колбэк вернёт true
       // Обход массива прекратится и вся функция
       // hasInvalidInput вернёт true
   
       return !arrFormElement.validity.valid;
     })
   };


forms.forEach((form) => {
     // Проходим по каждой форме отдельно
     let saveButton = form.querySelector('.popup__save')
     // Находим в каждой форме кнопку сохранить или продолжить
     let arrFormElements = Array.from(form.querySelectorAll('.form__input'));
     // Ищем все инпуты в форме
     saveButton.disabled = true
     // ставим изнаально кнопке сохранить или продолжить статус "отключен"
     console.log(saveButton);
     hasInvalidInput(arrFormElements);
     // Вызываем функцию проверки валидности всех форм
     
   
     arrFormElements.forEach((formElement) => {
     // проходимся по каждому инпуту
          formElement.addEventListener('input', () => {
               // добавляем слушатель на инпут
               let error = form.querySelector(`.${formElement.id}-error`)
               // находим текстовое поле под инпутом для ошибки
               if(!formElement.validity.valid) {
                    // если поле не валидно то покажи сообщение об ошибке и оставь кнопку сохранить в состоянии "неактивно"
                    error.textContent = formElement.validationMessage;
                    saveButton.disabled = true
               } else {
                    error.textContent = '' 
                    if(!hasInvalidInput(arrFormElements)) {
                         // если все элементы формы валидны, то разблокируй кнопку "сохранить"
                         saveButton.disabled = false 
                    };   
               }
               
          })
     })

})






