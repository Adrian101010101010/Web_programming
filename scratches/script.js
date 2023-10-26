const creatButton = document.getElementById("creat");
const blueBoxContainer = document.getElementById("blueBoxContainer");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const sum = document.getElementById("sum");
const sortButton = document.getElementById("sort");
const blueBoxContainerLeft = document.getElementById("blueBoxContainerleft");
const wefweButton = document.getElementById("wefweButton");

const valueDisplayValue = parseInt(document.getElementById("valueDisplay").textContent, 10);
let currentSum = 0;
const blueBoxesData = [];
const initialBlueBoxesData = [];
let isSorted = false;


const createdBlueBoxes = [];

const editButton = document.createElement("a");
editButton.classList.add("edit-button");
editButton.textContent = "Редагувати";

creatButton.addEventListener("click", function () {
    let textInput1 = document.getElementById("textInput1");
    let description = document.getElementById("description");
    let valueDisplay = document.getElementById("valueDisplay");

    let textInput1Value = textInput1.value;
    let descriptionValue = description.value;
    let valueDisplayValue = parseInt(valueDisplay.textContent, 10);

    if (textInput1Value.trim() === "" && descriptionValue.trim() === "") {
        alert("Ви нічого не вписали в поля textInput1 і description");
        return;
    }

    let blueBoxId = Date.now();

    const blueBox = document.createElement("div");
    blueBox.classList.add("blue-box");

    const editButton = document.createElement("a");
    editButton.classList.add("edit-button");
    editButton.textContent = "Редагувати";

    const saveButton = document.createElement("a");
    saveButton.classList.add("save-button");
    saveButton.textContent = "Зберегти";
    saveButton.style.display = "none";

    const deleteButton = document.createElement("a");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Видалити";

    deleteButton.addEventListener("click", function () {
        deleteRecord(data.id)
            .then(() => {
                blueBox.remove(); // Видаляємо blueBox зі сторінки після видалення з бази даних
            })
            .catch(error => {
                console.error('Помилка при видаленні запису:', error);
            });
    });

    blueBox.appendChild(deleteButton);

    editButton.addEventListener("click", function () {
        fetch('http://localhost:35967/getId', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ model: textInput1Value, description: descriptionValue }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.id) {

                    blueBoxId = data.id;

                    textInput1.value = textInput1Value;
                    description.value = descriptionValue;
                    valueDisplay.textContent = valueDisplayValue;
                    saveButton.style.display = "inline";
                }
            })
            .catch(error => {
                console.error('Помилка при отриманні id:', error);
            });
        textInput1.value = textInput1Value;
        description.value = descriptionValue;
        valueDisplay.textContent = valueDisplayValue;
        saveButton.style.display = "inline";
    });

    saveButton.addEventListener("click", function () {
        const updatedModel = textInput1.value;
        const updatedDescription = description.value;
        const updatedValue = valueDisplay.textContent;

        updateRecord(blueBoxId, updatedModel, updatedDescription, updatedValue);

        textInput1Value = updatedModel;
        descriptionValue = updatedDescription;
        valueDisplayValue = updatedValue;

        modelElement.textContent = updatedModel;
        descriptionElement.textContent = updatedDescription;
        valueElement.textContent = updatedValue;
        saveButton.style.display = "none";
    });

    blueBox.innerHTML = `модель: <span class="model">${textInput1Value}</span>
    опис: <span class="description">${descriptionValue}</span>
    ціна: <span class="value">${valueDisplayValue}</span>`;

    const modelElement = blueBox.querySelector(".model");
    const descriptionElement = blueBox.querySelector(".description");
    const valueElement = blueBox.querySelector(".value");

    const blueBoxData = {
        element: blueBox,
        textInput1: textInput1Value,
        description: descriptionValue,
        valueDisplay: valueDisplayValue,
        id: blueBoxId
    };

    blueBoxesData.push(blueBoxData);
    initialBlueBoxesData.push(blueBoxData);

    blueBox.appendChild(editButton);
    blueBox.appendChild(saveButton);

    blueBoxContainer.appendChild(blueBox);
    const modelValue = textInput1.value;
    const descriptionbd = description.value;
    const valueDisplaybd = valueDisplay.textContent;

    if (textInput1Value.trim() === "" || descriptionValue.trim() === "" || valueDisplay.textContent.trim() === "") {
        alert("Усі поля повинні бути заповнені");
        return;
    }

    fetch('http://localhost:35967/createRecord', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ model: modelValue, description: descriptionbd, value: valueDisplaybd, id: blueBoxId }),
    })
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => {
            console.error('Помилка:', error);
        });

    function updateRecord(id, model, description, value) {
        fetch(`http://localhost:35967/updateRecord/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ model, description, value }),
        })
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.error('Помилка:', error);
            });
    }

    function deleteRecord(id) {
        return fetch(`http://localhost:35967/deleteRecord/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.text())
            .then(data => {
                alert(data);
            });
    }
});




sortButton.addEventListener("click", function () {
    isSorted = !isSorted;
    sortButton.style.backgroundColor = isSorted ? "green" : "red";

    if (isSorted) {
        blueBoxesData.sort((a, b) => b.valueDisplay - a.valueDisplay);
    } else {
        blueBoxesData.length = 0;
        initialBlueBoxesData.forEach((item) => {
            blueBoxesData.push(item);
        });
    }

    blueBoxContainer.innerHTML = "";

    blueBoxesData.forEach((item) => {
        blueBoxContainer.appendChild(item.element);
    });
});

const valueDisplay = document.getElementById("valueDisplay");
const increaseButton = document.getElementById("increaseButton");
const decreaseButton = document.getElementById("decreaseButton");

valueDisplay.addEventListener("blur", function () {
    const newValue = parseInt(valueDisplay.textContent, 10);

    if (!isNaN(newValue) && newValue >= 0) {
        valueDisplay.textContent = newValue;
    } else {
        valueDisplay.textContent = "100";
    }
});

valueDisplay.addEventListener("input", function (e) {
    let inputValue = e.target.textContent;

    inputValue = inputValue.replace(/\D/g, "");

    if (inputValue === "") {
        inputValue = "0";
    }

    valueDisplay.textContent = inputValue;
});

increaseButton.addEventListener("click", function () {
    let currentValue = parseInt(valueDisplay.textContent, 10);
    currentValue += 100;
    valueDisplay.textContent = currentValue;
});

decreaseButton.addEventListener("click", function () {
    let currentValue = parseInt(valueDisplay.textContent, 10);
    currentValue -= 100;

    if (currentValue >= 0) {
        valueDisplay.textContent = currentValue;
    }
});
const blueBoxContainerLeftElements = [];
const originalBlueBoxContainerLeftElements = [];

searchButton.addEventListener("click", function () {
    const searchText = searchInput.value.toLowerCase();

    currentSum = 0; // Очистити поточну суму перед обчисленням

    const matchingBoxes = [];

    blueBoxesData.forEach(function (item) {
        const boxText = item.element.textContent.toLowerCase();
        if (searchText !== "" && boxText.includes(searchText)) {
            matchingBoxes.push(item);
            // Витягуємо числове значення ціни і додаємо до поточної суми
            currentSum += parseInt(item.valueDisplay, 10);
        }
    });

    sum.textContent = currentSum;

    blueBoxContainer.innerHTML = "";
    if (searchText === "") {
        blueBoxesData.forEach(function (item) {
            blueBoxContainer.appendChild(item.element);
        });
    } else {
        matchingBoxes.forEach(function (item) {
            blueBoxContainer.appendChild(item.element);
        });
    }
});


let originalBlueBoxesData = blueBoxesData.slice();

wefweButton.addEventListener("click", function () {
    console.log("wefweButton clicked");

    createdBlueBoxes.forEach((blueBox) => {
        blueBox.remove();
    });

    createdBlueBoxes.length = 0;

    currentSum = 0;
    sum.textContent = currentSum;


    blueBoxesData.length = 0;
    initialBlueBoxesData.forEach((item) => {
        const clone = item.element.cloneNode(true);
        const editButton = clone.querySelector(".edit-button");

        editButton.addEventListener("click", function () {
            const modelElement = clone.querySelector(".model");
            const descriptionElement = clone.querySelector(".description");
            const valueElement = clone.querySelector(".value");

            let fieldToEdit = prompt("Яке поле ви хочете відредагувати? (модель/опис/ціна)", "модель");
            fieldToEdit = fieldToEdit.toLowerCase();

            switch (fieldToEdit) {
                case "модель":
                    const newModelValue = prompt("Редагувати модель:", modelElement.textContent);
                    if (newModelValue !== null) {
                        modelElement.textContent = newModelValue;
                    }
                    break;
                case "опис":
                    const newDescriptionValue = prompt("Редагувати опис:", descriptionElement.textContent);
                    if (newDescriptionValue !== null) {
                        descriptionElement.textContent = newDescriptionValue;
                    }
                    break;
                case "ціна":
                    const newValue = prompt("Редагувати ціну:", valueElement.textContent);
                    if (newValue !== null) {
                        const parsedValue = parseInt(newValue, 10);
                        if (!isNaN(parsedValue)) {
                            valueElement.textContent = parsedValue;
                        }
                    }
                    break;
                default:
                    alert("Невідоме поле. Доступні поля: модель, опис, ціна.");
                    break;
            }


            const index = initialBlueBoxesData.indexOf(item);
            if (index !== -1) {
                initialBlueBoxesData[index].textInput1 = modelElement.textContent;
                initialBlueBoxesData[index].description = descriptionElement.textContent;
                initialBlueBoxesData[index].valueDisplay = parseInt(valueElement.textContent, 10);
            }
        });

        blueBoxesData.push({ element: clone, textInput1: item.textInput1, description: item.description, valueDisplay: item.valueDisplay });
        blueBoxContainer.appendChild(clone);
    });
});




// Функція для створення blueBox
function createBlueBox(model, description, value, id) {
    const blueBox = document.createElement("div");
    blueBox.classList.add("blue-box");

    const modelElement = document.createElement("span");
    modelElement.classList.add("model");
    modelElement.textContent = `модель: ${model}`;

    const descriptionElement = document.createElement("span");
    descriptionElement.classList.add("description");
    descriptionElement.textContent = `опис: ${description}`;

    const valueElement = document.createElement("span");
    valueElement.classList.add("value");
    valueElement.textContent = `ціна: ${value}`;

    blueBox.appendChild(modelElement);
    blueBox.appendChild(descriptionElement);
    blueBox.appendChild(valueElement);

    const initialTextInput1Value = model;
    const initialDescriptionValue = description;
    const initialValueDisplayValue = value;

    const editButton = document.createElement("a");
    editButton.classList.add("edit-button");
    editButton.textContent = "Редагувати";

    const saveButton = document.createElement("a");
    saveButton.classList.add("save-button");
    saveButton.textContent = "Зберегти";
    saveButton.style.display = "none";

    const deleteButton = document.createElement("a");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Видалити";

    deleteButton.addEventListener("click", function () {
        deleteRecord(id)
            .then(() => {
                blueBox.remove(); // Видаляємо blueBox зі сторінки після видалення з бази даних
            })
            .catch(error => {
                console.error('Помилка при видаленні запису:', error);
            });
    });

    blueBox.appendChild(deleteButton);

// Встановлюємо обробник на кнопку "Редагувати"
    editButton.addEventListener("click", function () {
        // Отримуємо інформацію про поточний запис
        const textInput1 = document.getElementById("textInput1");
        const description = document.getElementById("description");
        const valueDisplay = document.getElementById("valueDisplay");

        // Отримуємо інформацію для редагування з поточного запису
        const textInput1Value = textInput1.value;
        const descriptionValue = description.value;
        const valueDisplayValue = parseInt(valueDisplay.textContent, 10);
        fetch('http://localhost:35967/getId', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ model: textInput1Value, description: descriptionValue }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.id) {

                    blueBoxId = data.id;

                    textInput1.value = textInput1Value;
                    description.value = descriptionValue;
                    valueDisplay.textContent = valueDisplayValue;
                    saveButton.style.display = "inline";
                }
            })
            .catch(error => {
                console.error('Помилка при отриманні id:', error);
            });
        // Ваша логіка редагування, наприклад, оновлення полів вводу
        textInput1.value = initialTextInput1Value;
        description.value = initialDescriptionValue;
        valueDisplay.textContent = initialValueDisplayValue;
        let blueBoxId = Date.now();
        // Збереження інформації про запис, який редагується, в глобальну змінну або десь інде
        const recordToEdit = {
            id: blueBoxId,
            textInput1Value: textInput1Value,
            descriptionValue: descriptionValue,
            valueDisplayValue: valueDisplayValue,
        };
        // Оновлення об'єкта глобальних даних
        // Можливо, вам потрібно переписати цю частину для правильного оновлення даних
        blueBoxesData.forEach(function (item) {
            if (item.id === blueBoxId) {
                item.textInput1 = textInput1Value;
                item.description = descriptionValue;
                item.valueDisplay = valueDisplayValue;
            }
        });

        // Показати кнопку "Зберегти"
        saveButton.style.display = "inline";
    });

// Встановлюємо обробник на кнопку "Зберегти"
    saveButton.addEventListener("click", function () {
        const textInput1 = document.getElementById("textInput1");
        let description = document.getElementById("description");

        // Отримуємо змінену інформацію
        const updatedModel = textInput1.value;
        const updatedDescription = description.value;
        const updatedValue = valueDisplay.textContent;

        // Ваша логіка оновлення запису, можливо, ви використовуєте fetch або інші методи для збереження змін
        updateRecord(id, updatedModel, updatedDescription, updatedValue);

        // Оновлюємо відображену інформацію на сторінці
        modelElement.textContent = `модель: ${updatedModel}`;
        descriptionElement.textContent = `опис: ${updatedDescription}`;
        valueElement.textContent = `ціна: ${updatedValue}`;

        // Ховаємо кнопку "Зберегти"
        saveButton.style.display = "none";
    });


    blueBox.appendChild(editButton);
    blueBox.appendChild(saveButton);

    blueBoxContainer.appendChild(blueBox);

    // Створюємо об'єкт blueBoxData і додаємо його до масиву
    const blueBoxData = {
        element: blueBox,
        textInput1: model,
        description: description,
        valueDisplay: value,
        id: id,
    };
    blueBoxesData.push(blueBoxData);
    initialBlueBoxesData.push(blueBoxData);
}

// Функція для завантаження та відображення даних при завантаженні сторінки
function loadAndDisplayData() {
    fetch('http://localhost:35967/getRecords') // Оновіть це на URL для отримання всіх записів
        .then(response => response.json())
        .then(data => {
            data.forEach(record => {
                // Для кожного запису створюємо blueBox
                createBlueBox(record.model, record.description, record.value, record.id);
            });
        })
        .catch(error => {
            console.error('Помилка при отриманні записів:', error);
        });
}
function updateRecord(id, model, description, value) {
    fetch(`http://localhost:35967/updateRecord/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ model, description, value }),
    })
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => {
            console.error('Помилка:', error);
        });
}

function deleteRecord(id) {
    return fetch(`http://localhost:35967/deleteRecord/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.text())
        .then(data => {
            alert(data);
        });
}

// Викликаємо функцію для завантаження та відображення даних при завантаженні сторінки
loadAndDisplayData();
