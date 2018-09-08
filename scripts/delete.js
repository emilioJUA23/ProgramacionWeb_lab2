
var table_of_decks = "#decktable";

function DeleteDeck(rowNumber)
{
    document.querySelector(table_of_decks).deleteRow(rowNumber);
}

function deleteSelectedDeck()
{
    var deckNumber = parseInt(document.querySelector("#rownumber").value);
    DeleteDeck(deckNumber);
}
