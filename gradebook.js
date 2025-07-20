js

"use strict";

async function fetchGradeData() {
  console.log("Getting grade data...");

  let xhr = new XMLHttpRequest();
  let apiRoute = "/api/grades";

  xhr.onreadystatechange = function () {
	if (xhr.readyState === xhr.DONE) {
	    if (xhr.status !== 200){
		console.error('Could not get grades. Status: $(xhr.status}');
		return;
	    }

	    const data = JSON.parse(xhr.responseText);
	    populateGradebook(data);
	}
 }.bind(this);

 xhr.open("get", apiRoute, true);
 xhr.send();

}
 function populateGradebook(data) {
    console.log("Filling table with:", data);
    const tableBody = document.getElementById("gradebook-body");
    tableBody.innerHTML = "";

    data.forEach(student => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = student.name;

        const gradeCell = document.createElement("td");
        gradeCell.textContent = student.grade;

        row.appendChild(nameCell);
        row.appendChild(gradeCell);
        tableBody.appendChild(row);
    });
}

 document.addEventListener("DOMContentLoaded", function () {
    fetchGradeData();
});