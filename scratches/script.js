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

// Array to keep track of blueBox elements created by creatButton
const createdBlueBoxes = [];

creatButton.addEventListener("click", function () {
    const textInput1Value = document.getElementById("textInput1").value;
    const descriptionValue = document.getElementById("description").value;
    const valueDisplayValue = parseInt(document.getElementById("valueDisplay").textContent, 10);

    if (textInput1Value.trim() === "" && descriptionValue.trim() === "") {
        // Перевірка, чи обидва поля пусті
        alert("Ви нічого не вписали в поля textInput1 і description");
        return; // Припинити виконання обробника
    }

    const blueBox = document.createElement("div");
    blueBox.classList.add("blue-box");
    blueBox.innerHTML = `модель: ${textInput1Value}<br>опис: ${descriptionValue}<br>ціна: ${valueDisplayValue}`;

    blueBoxesData.push({ element: blueBox, textInput1: textInput1Value, valueDisplay: valueDisplayValue });
    initialBlueBoxesData.push({ element: blueBox, textInput1: textInput1Value, valueDisplay: valueDisplayValue });


    createdBlueBoxes.push(blueBox);

    blueBoxContainer.innerHTML = "";

    blueBoxesData.forEach((item) => {
        blueBoxContainer.appendChild(item.element);
    });

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

    blueBoxesData.forEach(function (item) {
        const boxText = item.element.textContent.toLowerCase();
        if (searchText !== "") {
            if (boxText.includes(searchText)) {
               // item.element.style.backgroundColor = "yellow";
               // item.element.style.width = "150px";
               // item.element.style.flexBasis = "auto";
               // item.element.style.color = "blue";
               // blueBoxContainerLeft.appendChild(item.element.cloneNode(true));
                currentSum += item.valueDisplay;
                sum.textContent = currentSum;
               // item.element.style.display = "none";
            } else {
                item.element.style.backgroundColor = "blue";
                item.element.style.color = "black";
                item.element.style.display = "none";
            }
        } else {
            item.element.style.backgroundColor = "blue";
            item.element.style.color = "black";
            item.element.style.display = "block";
        }
    });

    blueBoxesData.forEach(function (item) {
        originalBlueBoxContainerLeftElements.push(item);
    });


    blueBoxContainerLeftElements.length = 0;
    blueBoxContainerLeftElements.push(...blueBoxesData.filter(item => item.element.style.backgroundColor === "yellow"));

    const previousYellowBox = document.querySelector("div[style='background-color: yellow;']");
    if (previousYellowBox) {
        previousYellowBox.style.backgroundColor = "blue";
        previousYellowBox.style.color = "white";
    }
});

let originalBlueBoxesData = blueBoxesData.slice();

wefweButton.addEventListener("click", function () {
    console.log("wefweButton clicked");

    // Remove the blueBox elements created by creatButton
    createdBlueBoxes.forEach((blueBox) => {
        blueBox.remove();
    });

    // Clear the createdBlueBoxes array
    createdBlueBoxes.length = 0;

    currentSum = 0;
    sum.textContent = currentSum;

    console.log("Contents of blueBoxContainerLeft after removing:", blueBoxContainerLeft);
});




