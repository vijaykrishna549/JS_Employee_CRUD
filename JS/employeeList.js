let employees = [
  { id: 1, name: "Goutham Raj", profile: "ab", address: "123 Main St" },
  { id: 2, name: "Allen Smith", profile: "ab", address: "456 Park Ave" },
  { id: 3, name: "Goutham Gani", profile: "ab", address: "789 Oak Rd" },
];

// const submitButton = document.getElementById("submit");
// submitButton.addEventListener("click", addEmployee);

// function addEmployee() {
//   const nameInput = document.getElementById("name");
//   const selectProfile = document.getElementsByName("Profiles1");
//   const salaryInput = document.getElementById("Salary");

//   const name = nameInput.value.trim();
//   const salary = salaryInput.value;
//   console.log(salary, "Salary");
//   const profileImage = selectProfile.value;
//   for (var i = 0; i < selectProfile.length; i++) {
//     if (selectProfile[i].checked) {
//       console.log("Selected value: " + selectProfile[i].value);
//       break;
//     }
//   }

//   //   if (name !== "" && !isNaN(salary) && address !== "") {
//   if (name !== "" && !isNaN(salary)) {
//     const newEmployee = {
//       id: employees.length + 1,
//       name: name,
//       profileIcon: "",
//       salary: salary,
//     };
//     // employees.push(newEmployee);
//     window.localStorage.setItem("emp", JSON.stringify(newEmployee));
//     nameInput.value = "";
//     salaryInput.value = "";
//     selectProfile.value = "";
//     renderEmployees();
//     let data2 = JSON.parse(window.localStorage.getItem("result"));
//     console.log(data2);
//   }
// }

function renderEmployees() {
  let empData = JSON.parse(localStorage.getItem("emp"));
  console.log(empData, "from local Storage");
  console.log(typeof empData, "data emp");
  const employeeTable = document.getElementById("employeeTable");

  empData.forEach((employee) => {
    console.log(employee, "Employee");
    const row = document.createElement("tr");
    row.innerHTML = `
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td><img src="${employee.profileIcon}" height="40" width="40"></td>
                <td>${employee.gender}</td>
                <td>${employee.department}</td>
                <td> ${employee.salary}</td>
                <td> ${employee.date}</td>
                <td>
                    <button onclick="editEmployee(${employee.id})">Edit</button>
                    <button onclick="deleteById(${employee.id})">Delete</button>
                </td>
            `;
    employeeTable.appendChild(row);
  });
}

function editEmployee(employeeId) {
  let empData = JSON.parse(localStorage.getItem("emp"));
  let a = [1, 3];
  console.log(typeof a, "a type");

  //   empData.push(a);
  console.log(empData, "created");
  const employeeToUpdate = empData.find(
    (employee) => employee.id === employeeId
  );
  if (employeeToUpdate) {
    const newName = prompt("Enter the updated name:", employeeToUpdate.name);
    const newSalary = parseInt(
      prompt("Enter the updated salary:", employeeToUpdate.salary)
    );
    const newIcon = prompt(
      "Enter the updated icon:",
      employeeToUpdate.profileIcon
    );

    const newGender = prompt(
      "Enter the updated Gender:",
      employeeToUpdate.gender
    );

    const newDepartment = prompt(
      "Enter the updated icon:",
      employeeToUpdate.department
    );
    const newDate = prompt("Enter the updated icon:", employeeToUpdate.date);

    if (newName !== null && !isNaN(newSalary)) {
      employeeToUpdate.name = newName.trim();
      employeeToUpdate.salary = newSalary;
      employeeToUpdate.profileIcon = newIcon;
      employeeToUpdate.gender = newGender;
      employeeToUpdate.department = newDepartment;
      employeeToUpdate.date = newDate;
      console.log(empData, "empData");
      console.log(typeof empData);
      console.log(employeeToUpdate, "employeeToUpdate");
      console.log(typeof employeeToUpdate);

      //
    }
  }
  //   const updatenew = empData.push(employeeToUpdate);
  //   console.log(updatenew, "updatesdfghjhfdcvbjhdx");
  localStorage.setItem("emp", JSON.stringify(empData));
  renderEmployees();
}

// function deleteEmployee(employeeId) {
var deleteById = function (self) {
  let empData = JSON.parse(localStorage.getItem("emp"));
  console.log(empData);
  retrievedScores = empData.filter(function (elem) {
    console.log(self, "111111111111111self  selef ffffffffffff");
    console.log(elem, "11111111111elemmmmmmmmmmmmmeeeeelm");
    return elem.id !== self;
  });

  localStorage.setItem("emp", JSON.stringify(retrievedScores));
  // self.parentNode.parentNode.removeChild(self.parentNode);
  console.log(self, "self  selef ffffffffffff");
  renderEmployees();
};

renderEmployees();
