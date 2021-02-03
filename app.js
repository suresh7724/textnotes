ShowNotes();

//if user add a note add it to the local storage
let addBtn = document.getElementById("add_note").addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let Notes = localStorage.getItem("Notes")
    if (Notes == null) {
        NotesObj = [];

    }
    else {
        notesObj = JSON.parse(Notes);
    }
    let myobj={
      title:addTitle.value,
      text:addTxt.value

    }
    NotesObj.push(myobj);
    localStorage.setItem("Notes", JSON.stringify(NotesObj));
    ShowNotes();
    addTxt.value = " ";
    addTitle.value='';

})

// function to show elements from localstorage

function ShowNotes() {
    Notes = localStorage.getItem("Notes")
    if (Notes == null) {
        NotesObj = [];
    }
    else {
        NotesObj = JSON.parse(Notes)
    }



    let html = "";
    NotesObj.forEach(function (element, index) {
        html +=
            `   <div class="noteCard my-2 mx-2 card" style="width:18rem;">
        <div class="card-body">
           <h5 class="card-title">${element.title} </h5>
           <p class="card-text"> ${element.text}</p>
               <button id="${index}"onclick="deleteNote(this.id)"
            class="btn btn-primary">Delete</button>
            
            </div>
            </div>
       `

    });
    let Noteselem = document.getElementById("Notes");
    if (NotesObj.length != 0) {
        Noteselem.innerHTML = html;
    }
    else {
        Noteselem.innerHTML = `Nothing to show "Add a Note" section above to add note`
    }
}

function deleteNote(index) {
    console.log('i am deleting', index);
    let notes = localStorage.getItem('Notes');

    if (Notes == null) {
        NotesObj = [];
    }
    else {
        NotesObj = JSON.parse(Notes)
    }
    NotesObj.splice(index, 1);
    localStorage.setItem('Notes', JSON.stringify(NotesObj));
    ShowNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    // console.log('input event fired')

    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display='block';

        }
        else
        {
            element.style.display='none';
        }
        // console.log(cardTxt);
    })
})