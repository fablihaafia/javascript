document.getElementById("select-all").onclick = function () {
    var checkboxes = document.getElementsByName("vehicle");
    for (var checkbox of checkboxes) {
      checkbox.checked = this.checked;
    }
  };
  