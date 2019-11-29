function testAddHTML() {
  var note1 = new Note('test note 1');
  var note2 = new Note('test note 2');
  var noteBook = new NoteBook();
  noteBook.addNote(note1);
  noteBook.addNote(note2);
  var noteListView = new NoteListView(noteBook);
  var noteListController = new NoteListController(noteBook)
  noteListController.addHTML()
  eval.isTrue(element.innerHTML === "<ul><li><div>" + note1.text + "</div></li><li><div>" + note2.text + "</div></li></ul>")
}

testAddHTML();
