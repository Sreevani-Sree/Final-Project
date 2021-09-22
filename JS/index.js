
// const form = document.querySelector("#Modal");
let name1 = document.getElementById('title');
  let validateDescription = document.querySelector("#description");
  const validateAssignedTo = document.querySelector("#assignedto");
  const validateDueDate = document.querySelector("#dueDate");
  const validateStatus = document.querySelector("#status");

let btnSub2 = document.querySelector("#submit");

let errMsg1 = document.querySelector("#errMsg1");
let errMsg2 = document.querySelector("#errMsg2");
let errMsg3 = document.querySelector("#errMsg3");
let errMsg4 = document.querySelector("#errMsg4");
let errMsg5 = document.querySelector("#errMsg5");
btnSub2.addEventListener("click", validateBox);
 
// function
function validateBox() {
 
  // validation for NameInput
  if (name1.value == "" || name1.value.length < 5) {
    console.log(name1.value.length);
    errMsg1.innerHTML = "Please enter valid name";
    errMsg1.style.color = "#ff0000";
    name1.focus();
  } else {
    errMsg1.innerHTML = "";
    name1.focus();

  }
  // validation for description
  
  if (validateDescription.value == "" || validateDescription.value.length < 10) {
    console.log(validateDescription.value.length);
    errMsg2.innerHTML = "Please enter valid description";
    errMsg2.style.color = "#ff0000";
    validateDescription.focus();
    } else {
    errMsg2.innerHTML = "";
    validateDescription.focus();
  }
// validate assignedto
if (validateAssignedTo.value == "" || validateAssignedTo.value.length < 5) {
  console.log(validateAssignedTo.value.length);
  errMsg3.innerHTML = "Please enter assignee name";
  errMsg3.style.color = "#ff0000";
  validateAssignedTo.focus();
  } else {
  errMsg3.innerHTML = "";
  validateAssignedTo.focus();
}

// Validate Status
if(validateStatus.value === "select"){
console.log(validateStatus.value);
  errMsg4.innerHTML ="Choose the status";
  errMsg4.style.color = "#ff0000";
  validateStatus.focus();
  } else {
  errMsg4.innerHTML = "";
  validateStatus.focus();
}

  // validate date
if (validateDueDate.value) {
  validateDueDate.classList.add("is-valid");
  validateDueDate.classList.remove("is-invalid");
} else {
  validateDueDate.classList.add("is-invalid");
  validateDueDate.classList.remove("is-valid");
  validationFail++;
}
};

      
  
  