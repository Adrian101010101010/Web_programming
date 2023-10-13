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

    const blueBox = document.createElement("div");
    blueBox.classList.add("blue-box");

    const editButton = document.createElement("a");
    editButton.classList.add("edit-button");
    editButton.textContent = "Редагувати";

    const saveButton = document.createElement("a");
    saveButton.classList.add("save-button");
    saveButton.textContent = "Зберегти";
    saveButton.style.display = "none"; // Initially hide the "Зберегти" button

    editButton.addEventListener("click", function () {
        // When "Редагувати" is clicked, show the "Зберегти" button
        textInput1.value = textInput1Value;
        description.value = descriptionValue;
        valueDisplay.textContent = valueDisplayValue;
        saveButton.style.display = "inline";
    });

    saveButton.addEventListener("click", function () {
        // When "Зберегти" is clicked, save the changes and hide the button
        textInput1Value = textInput1.value;
        descriptionValue = description.value;
        valueDisplayValue = parseInt(valueDisplay.textContent, 10);
        modelElement.textContent = textInput1Value;
        descriptionElement.textContent = descriptionValue;
        valueElement.textContent = valueDisplayValue;
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
        valueDisplay: valueDisplayValue
    };

    blueBoxesData.push(blueBoxData);
    initialBlueBoxesData.push(blueBoxData);

    blueBox.appendChild(editButton);
    blueBox.appendChild(saveButton); // Add the "Зберегти" button

    blueBoxContainer.appendChild(blueBox);
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
    currentSum = 0;


    const matchingBoxes = [];

    blueBoxesData.forEach(function (item) {
        const boxText = item.element.textContent.toLowerCase();
        if (searchText !== "" && boxText.includes(searchText)) {
            matchingBoxes.push(item);
            currentSum += item.valueDisplay;
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




