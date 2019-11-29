(function(exports) {
  function NoteListController(notelist) {
    noteListView = new NoteListView(notelist)
  };

  NoteListController.prototype.addHTML = function () {
    element = document.getElementById("app")
    element.innerHTML = noteListView.return();
    return element.innerHTML
  };

  exports.NoteListController = NoteListController
})(this);
