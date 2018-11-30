var cols, rows, color; //variables define grid size and color

$('#sizePicker').submit(function (event) { //creates the grid with input via the submit button
  event.preventDefault();
  cols = $('#inputHeight').val();
  rows = $('#inputWidth').val();
  makeGrid(cols, rows);
})

function makeGrid(c, r) { //call the makeGrid function, pass the height and width
  $('tr').remove(); //clears the grid when user hits submit again

for (var i = 1; i <= c; i++) {
  $('#pixelCanvas').append('<tr id=table' + i + '></tr>'); // this loop adds a row of cells
  for (var j = 1; j <= r; j++) {
    $('#table' + i).append('<td></td>'); // this adds a cell after each row
  }
}

$('td').click(function addColor() { // allows user to color each cell with a click
  color = $('#colorPicker').val();

  if ($(this).attr('style')) {
    $(this).removeAttr('style') // returns the color
  } else {
    $(this).attr('style', 'background-color:' + color); // lets the color be returned to background

  }
})
}
