function testNoteListViewWithNoNotes() {
  var noteBook = new NoteBook();
  var noteListView = new NoteListView(noteBook);

  eval.isTrue(noteListView.return() === "");

}
testNoteListViewWithNoNotes();

function testNoteListViewWithOneNote() {
  var note1 = new Note('test note 1');
  var noteBook = new NoteBook();
  noteBook.addNote(note1);
  var noteListView = new NoteListView(noteBook);

  eval.isTrue(noteListView.return() === "<ul><li><div>test note 1</div></li></ul>");

}
testNoteListViewWithOneNote();

function testNoteListViewWithTwoNotes() {
  var note1 = new Note('test note 1');
  var note2 = new Note('test note 2');
  var noteBook = new NoteBook();
  noteBook.addNote(note1);
  noteBook.addNote(note2);
  var noteListView = new NoteListView(noteBook);

  eval.isTrue(noteListView.return() === "<ul><li><div>test note 1</div></li><li><div>test note 2</div></li></ul>");

}
testNoteListViewWithTwoNotes();
