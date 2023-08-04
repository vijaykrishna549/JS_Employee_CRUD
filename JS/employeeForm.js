let employees = [
  //   {},
  //   { id: 1, name: "Goutham Raj", profile: "ab", address: "123 Main St" },
  //   { id: 2, name: "Allen Smith", profile: "ab", address: "456 Park Ave" },
  //   { id: 3, name: "Goutham Gani", profile: "ab", address: "789 Oak Rd" },
];

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", addEmployee);
var profile;
var gender;
function addEmployee() {
  const nameInput = document.getElementById("name");
  const selectProfile = document.getElementsByName("Profiles1");
  const salaryInput = document.getElementById("Salary");
  const genderInput = document.getElementsByName("Gender");
  const departmentInput = document.getElementsByName("Department");
  const dates = document.getElementById("dates").value;
  console.log(dates, "date");

  const name = nameInput.value.trim();
  const salary = salaryInput.value;
  console.log(salary, "Salary");
  //   const profileImage = selectProfile.value;
  for (var i = 0; i < selectProfile.length; i++) {
    if (selectProfile[i].checked) {
      console.log("Profile Icon value: " + selectProfile[i].value);
      profile = selectProfile[i].value;
      break;
    }
  }

  for (var i = 0; i < genderInput.length; i++) {
    if (genderInput[i].checked) {
      //   console.log("Selected value: " + genderInput[i].value);
      gender = genderInput[i].value;
      break;
    }
  }

  console.log("depssss");
  for (var i = 0; departmentInput[i]; ++i) {
    if (departmentInput[i].checked) {
      //   console.log("Selected department", departmentInput[i].value);
      break;
    }
  }
  //   if (name !== "" && !isNaN(salary) && address !== "") {
  if (name !== "" && !isNaN(salary)) {
    const newEmployee = {
      id: employees.length + 1,
      name: name,
      //   profileIcon: selectProfile[i].value,
      profileIcon: profile,
      //   gender: genderInput[i].value,
      gender: gender,
      salary: salary,
      department: departmentInput[i].value,
      date: dates,
    };

    console.log(employees, "fghj");
    // localStorage.setItem("emp", JSON.stringify(employees));
    // nameInput.value = " ";
    // genderInput.value = " ";
    // salaryInput.value = " ";
    // selectProfile[i].value = " ";
    // departmentInput.value = " ";
    // dates.value = "";

    // console.log(employees, "emp Original");
    // console.log(newEmployee, "employ");
    employees.push(newEmployee);
    localStorage.setItem("emp", JSON.stringify(employees));

    // let data2 = JSON.parse(localStorage.getItem("emp"));
    // console.log(data2, "data 22222");
    // console.log(data2.length);
  }
  reset();
}
function reset() {
  const nameInput = document.getElementById("name");
  const selectProfile = document.getElementsByName("Profiles1");
  const salaryInput = document.getElementById("Salary");
  const genderInput = document.getElementsByName("Gender");
  const departmentInput = document.getElementsByName("Department");
  const dates = document.getElementById("dates");

  nameInput.value = "";
  for (var i = 0; i < departmentInput.length; i++)
    departmentInput[i].checked = false;
  for (var i = 0; i < selectProfile.length; i++)
    selectProfile[i].checked = false;
  for (var i = 0; i < genderInput.length; i++) genderInput[i].checked = false;
  dates.value = "";
  salaryInput.value = "10000";
}
