var IdProjectStartDate = document.getElementById("projectStartDate");
var IdProjectEndDate = document.getElementById("projectEndDate");

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;
IdProjectStartDate.setAttribute("min", today);

function setMinForProjectEndDate(){
    IdProjectEndDate.setAttribute("min", IdProjectStartDate.value);
}