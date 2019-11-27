(function(exports) {
  function testNoteListView() {
    var note1 = new Note('test note 1');
    var note2 = new Note('test note 2');
    var noteBook = new NoteBook();
    noteBook.addNote(note1);
    noteBook.addNote(note2);
    var noteListView = new NoteListView(noteBook);

  }
  testNoteListView();
})(this);
