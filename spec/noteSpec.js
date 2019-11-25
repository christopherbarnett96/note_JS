(function(exports) {
  function testReturnsNote() {
    var note = new Note("test text");

    eval.isTrue(note.returnNote() === "test text");
  };

  testReturnsNote();
})(this);
