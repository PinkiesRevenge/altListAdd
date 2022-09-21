function hide_row(rowid){
    document.getElementById(rowid).style.display='none';
}
function show_row(rowid){
    document.getElementById('demo').style.display='block';
}

    function add_new(myTable,id,item){
    var tbodyRef = document.getElementById(myTable).getElementsByTagName('tbody')[0];

    // Insert a row at the end of table
    var newRow = tbodyRef.insertRow();

    // Insert a cell at the end of the row
    var newCell = newRow.insertCell();

    // Append a text node to the cell
    var newText = document.createTextNode(item);
    
    newCell.appendChild(newText);

    var newCell = newRow.insertCell();

    // Append a text node to the cell
    var newText = document.createElement(button, onclick="hide_row('2')",Delete);
    
    newCell.appendChild(newText);
}

/*
var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

// Insert a row at the end of table
var newRow = tbodyRef.insertRow();

// Insert a cell at the end of the row
var newCell = newRow.insertCell();

// Append a text node to the cell
var newText = document.createTextNode('new row');
newCell.appendChild(newText);
*/