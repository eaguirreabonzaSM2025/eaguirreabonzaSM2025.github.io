js

"use strict";

function fetchGradeData() {
    console.log("Fetching grade data...");

    var xhr = new XMLHttpRequest();
    var url = "/api/grades";

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                populateGradebook(data);
            } else {
                console.log("Error getting grades. Status code:", xhr.status);
            }
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}

function populateGradebook(data) {
    console.log("Got data:", data);

    var table = document.getElementById("gradebook");

    for (var i = 0; i < data.length; i++) {
        var row = document.createElement("tr");

        var nameTd = document.createElement("td");
        var fullName = data[i].last_name + ", " + data[i].first_name;
        nameTd.textContent = fullName;

        var gradeTd = document.createElement("td");
        gradeTd.textContent = data[i].total_grade;

        row.appendChild(nameTd);
        row.appendChild(gradeTd);

        table.appendChild(row);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    fetchGradeData();
});
