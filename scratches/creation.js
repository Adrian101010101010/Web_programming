const button1 = document.getElementById("button1");

const textInput = document.getElementById("textInput1");
const descriptionTextarea = document.getElementById("description");
const field__description = document.getElementById("field__description")
const main__description = document.getElementById("main__description")
const praise__menu  = document.getElementById("praise__menu")
const button__creat__sort = document.getElementById("button__creat__sort")



button1.addEventListener("click", function () {

    const name1 = document.getElementById("name1")
    const search__div = document.getElementById("search__div")
//const blueBoxContainer = document.getElementById("blueBoxContainer")

    name1.style.display = "none";
    search__div.style.display = "none";

    if (textInput.style.display === "none" && descriptionTextarea.style.display === "none"
    && field__description.style.display === "none" && main__description.style.display === "none"
    && praise__menu.style.display === "none" && button__creat__sort.style.display === "none") {
        textInput.style.display = "block";
        descriptionTextarea.style.display = "block";
        field__description.style.display = "block";
        main__description.style.display = "block";
        praise__menu.style.display = "flex";
        button__creat__sort.style.display = "flex";
    } else {
        textInput.style.display = "none";
        descriptionTextarea.style.display = "none";
        field__description.style.display = "none";
        main__description.style.display = "none";
        praise__menu.style.display = "none";
        button__creat__sort.style.display = "none";
    }
});
