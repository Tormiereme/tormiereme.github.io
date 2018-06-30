

$(function() {
  var theGrid = $("#pixelCanvas");
  var currentColor = "#000";

  $("#sizePicker").submit(function(e) {
    e.preventDefault();
    makeGrid();
  });

  $("#colorPicker").change(function() {
    currentColor = $(this).val();
  });

  theGrid.on("click", "td", function(e) {
    $(this).css("background-color", currentColor); 
  });

  function makeGrid() {
  
    var gridHeight = $("#inputHeight").val();
    var gridWidth = $("#inputWeight").val();
    theGrid.empty(); 
    for (x = 0; x <= gridHeight - 1; x++) {
      theGrid.append("<tr>"); 
      for (y = 0; y <= gridWidth - 1; y++) {
        $("tr:eq(" + x + ")").append("<td></td>");
      }
      theGrid.append("</tr>");
    }
  }
});
