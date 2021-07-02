// JS file containing functions
'use strict';

// Read existing notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes');
    try {
        return notesJSON ? JSON.parse(notesJSON):[];
    } catch (e) {
        return [];
    }
    
}

// Save the notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove note from the list
const removeNote = (id) =>{
    // const noteIndex = notes.findIndex(function(note){
    //     return note.id === id;
    // })
    const noteIndex = notes.findIndex((note) => note.id === id)
    if (noteIndex > -1){
        notes.splice(noteIndex, 1);
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('a');
    const textEl = document.createElement('p');
    const statusEl = document.createElement('p');
    // const button = document.createElement('button');

    // // Setup the remove note button
    // button.textContent = 'x';
    // noteEl.appendChild(button);
    // button.addEventListener('click', () => {
    //     removeNote(note.id);
    //     saveNotes(notes);
    //     renderNotes(notes, filters);
    // })

    // Setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    // textEl.setAttribute('href', `./edit.html#${note.id}`);
    textEl.classList.add('list-item__title');
    noteEl.appendChild(textEl);

    // Setup the link
    noteEl.setAttribute('href', `./edit.html#${note.id}`);
    noteEl.classList.add('list-item');

    // Setup status message
    statusEl.textContent = generateLastEdited(note.updatedAt);
    statusEl.classList.add('list-item__subtitle');
    noteEl.appendChild(statusEl);

    return noteEl;
}

// Sort your notes by one of three ways
const sortNotes = (notes, sortBy) =>{
    if (sortBy === 'byEdited'){
        return notes.sort((a,b) => {
            if (a.updatedAt > b.updatedAt){
                return -1;
            } else if (b.updatedAt > a.updatedAt){
                return 1;
            } else{
                return 0;
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a,b) => {
            if (a.createdAt > b.createdAt){
                return -1;
            } else if (b.createdAt > a.createdAt){
                return 1;
            } else{
                return 0;
            }
        })
    } else if(sortBy === 'alphabetical') {
        return notes.sort((a,b) => {
            if (a.title.toLowerCase() > b.title.toLowerCase()){
                return -1;
            } else if (b.title.toLowerCase() > a.title.toLowerCase()){
                return 1;
            } else{
                return 0;
            }
        })
    } else{
        return notes;
    }
}
// Render application notes
const renderNotes =  (notes, filters) => {
    const notesEl = document.querySelector('#notes');
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter( (note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));

    notesEl.innerHTML = '';

    if (filteredNotes.length > 0){
        filteredNotes.forEach( (note) => {
            const noteEl = generateNoteDOM(note);
            notesEl.appendChild(noteEl);
        })
    } else {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'No notes to show';
        emptyMessage.classList.add('empty-message');
        notesEl.appendChild(emptyMessage);
    }


}

// Generate the last edited message
const generateLastEdited = (timestamp) => {
    return `Last edited ${moment(timestamp).fromNow()}`;
}