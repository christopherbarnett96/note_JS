(function(exports) {
  function NoteBook() {
    this.notes = [];
  };

  NoteBook.prototype.addNote = function(note) {
    this.notes.push(note.returnNote());
  };

  NoteBook.prototype.returnNotes = function() {
    return this.notes;
  };

  exports.NoteBook = NoteBook;
})(this);
