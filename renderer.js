document.addEventListener('DOMContentLoaded', async() => {
    console.log("Renderer > DOMContentLoaded");

    let names =window.parseInt.getNAmes();

    let divNames = document.getElementById("names");
    let nameString =names.map((elem)=>{
        return elem.name;

    }).join("<br />");

    window.parseInt.addName("Jeet2");

    divNames.innerHTML = nameString;
});
