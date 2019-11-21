// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var form = document.getElementById("search-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("searching...");

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    };

    xhr.send(formData);
});