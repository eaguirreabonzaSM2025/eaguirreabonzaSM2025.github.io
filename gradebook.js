
"use strict";

function fetchGradeData() {
    console.log("Fetching grade data...");

    var xhr = new XMLHttpRequest();
    let apiRoute = "/api/grades";

    xhr.onreadystatechange = function () {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200) {
               console.error('Could not get grades. Status: ${xhr.status}');
	    }
	    populateGradebook(JSON.parse(xhr.responseText));
	    }
}.bind(this);

    xhr.open("GET", apiRoute, true);
    xhr.send();
}

function populateGradebook(data) {
    console.log("Populating gradebook with data", data);

    let tableElm = document.getElementById("gradebook").getElementsByTagName("tbody")[0];

      data.forEach(function(assigment){
        let row = document.createElement("tr");
	let columns = [];
	columns.grade = document.createElement('td');
	columns.grade.appendChild(
  	    document.createTextNode(assignment.total_grade)
	);

       	columns.grade = document.createElement('td');
	columns.grade.appendChild(
            document.createTextNode(assignment.total_grade)
	);

        row.appendChild(columns.name);
        row.appendChild(columns.grade);

        tableElm.appendChild(row);
}

document.addEventListener("DOMContentLoaded", function () {
    fetchGradeData();
});
