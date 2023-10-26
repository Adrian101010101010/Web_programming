const button2 = document.getElementById("button2")
const name1 = document.getElementById("name1")
const search__div = document.getElementById("search__div")
//const blueBoxContainer = document.getElementById("blueBoxContainer")

name1.style.display = "none";
search__div.style.display = "none";
//blueBoxContainer.style.display = "none";


button2.addEventListener("click", function () {

    const textInput = document.getElementById("textInput1");
    const descriptionTextarea = document.getElementById("description");
    const field__description = document.getElementById("field__description")
    const main__description = document.getElementById("main__description")
    const praise__menu  = document.getElementById("praise__menu")
    const button__creat__sort = document.getElementById("button__creat__sort")

    textInput.style.display = "none"
    descriptionTextarea.style.display = "none"
    field__description.style.display = "none"
    main__description.style.display = "none"
    praise__menu.style.display = "none"
    button__creat__sort.style.display = "none"

    if (name1.style.display === "none" && search__div.style.display === "none" /*&& blueBoxContainer.style.display === "none"*/) {
        name1.style.display = "block";
        search__div.style.display = "flex";

        //blueBoxContainer.style.display = "flex";
    } else {
        name1.style.display = "none";
        search__div.style.display = "none";
       // blueBoxContainer.style.display = "none";

    }
});
