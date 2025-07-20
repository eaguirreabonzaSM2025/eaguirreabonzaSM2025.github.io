js

"use strict";

function fetchGradeData() {
    console.log("Fetching grade data...");

    var xhr = new XMLHttpRequest();
    let apiRoute = "/api/grades";

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
    console.log("Populating gradebook with data", data);

    let tableElm = document.getElementById("gradebook").getElementsByTagName("tbody")[0];

      data.forEach(function(assigment){
        let row = document.createElement("tr");
	let columns = [];
	columns.name = document.createElement('td');
	columns.name.appendChild(
	    document.createTextNode(assigment.last_name + ", " + assignment.first_name)
	);
       	columns.grade = document.createElement('td');
	columns.grade.apprendChild(
	    document.createTextNode(assigment.total_grade)
	);

        row.appendChild(columns.name);
        row.appendChild(columns.grade);

        tableElm.appendChild(row);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    fetchGradeData();
});
