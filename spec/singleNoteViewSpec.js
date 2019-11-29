function testSingleHTML() {
  var note1 = new Note('test note 1');
  var singleNoteView = new SingleNoteView(note1);
  eval.isTrue(singleNoteView.returnSingleHTML() === "<div>" + note1.text + "</div>")
}

testSingleHTML();
