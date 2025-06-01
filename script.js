const notescontaner = document.querySelector(".note-container");
const createbtn = document.querySelector(".btn");
const notes = document.querySelectorAll(".input-box");

function showNote() {
    notescontaner.innerHTML = localStorage.getItem("notes");
};
showNote();

function updateStorage() {
    localStorage.setItem("note", notescontaner.innerHTML);
};

createbtn.addEventListener("click" , ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable" , "true");
    img.src = "delete icon.jpg";
    notescontaner.appendChild(inputBox).appendChild(img);
});

notescontaner.addEventListener ("click" , function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage()
            };
        });
    };
});