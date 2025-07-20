js

"use strict";

async function fetchGradeData() {
  console.log("Getting grade data...");
  return [];
}

function populateGradebook(data) {
  console.log("Filling table with:", data);
  const tableBody = document.getElementById("gradebook-body");
  tableBody.innerHTML = "";

  // adding rows
}

document.addEventListener("DOMContentLoaded", async function() {
  const data = await fetchGradeData();
  populateGradebook(data);
});
