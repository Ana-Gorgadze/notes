const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes(){
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notesContainer.innerHTML = "";
    notes.forEach(note => {
        let inputBox = document.createElement("p");
        let img = document.createElement("img");
        inputBox.classList.add("input-box");
        inputBox.setAttribute("contenteditable", "true");
        img.src = "./bin.jpg";
        inputBox.textContent = note;
        inputBox.appendChild(img);
        notesContainer.appendChild(inputBox);
    });
}

function updateStorage(){
    const notes = [];
    document.querySelectorAll(".input-box").forEach(inputBox => {
        notes.push(inputBox.textContent);
    });
    localStorage.setItem("notes", JSON.stringify(notes));
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.classList.add("input-box");
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./bin.jpg";
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    updateStorage();
});

notesContainer.addEventListener("click", function(e){
    if (e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
});

notesContainer.addEventListener("keyup", function(e){
    if (e.target.classList.contains("input-box")){
        updateStorage();
    }
});

showNotes();
