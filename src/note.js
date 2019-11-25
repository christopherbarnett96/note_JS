(function(exports) {
  function Note(text) {
    this.text = text;
  };
  Note.prototype.myNote = function() {
      return this.text;

  }
  exports.Note = Note;
})(this);
