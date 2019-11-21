// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var movieEntries = document.getElementsByClassName("movie-entry");

var form = document.getElementById("search-and-filter-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    var i, entry;

    var term = document.getElementById("search").value;
    if (term) {
        for (i = 0; i < movieEntries.length; i++) {
            entry = movieEntries[i];
            if (entry.dataList.title.includes(term)) {
                entry.style.display = 'block';
            }
            else {
                entry.style.display = 'none';
            }
        }
    }
});