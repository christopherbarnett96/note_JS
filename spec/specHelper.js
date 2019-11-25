var eval = {
  isTrue: function(parameter) {
    if (!parameter) {
      throw new Error("Evaluation failed: " + parameter + " is not truthy");
    } else {
      console.log('True');
    }
  }
};
