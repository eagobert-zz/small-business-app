// Purpose to practice displaying to the DOM with JavaScript

//Get the element with the ID of "employee_list" and store in the variable "section"
const section = document.getElementById("employee_list")

//Loop through "employees" in the database
Database.employees.forEach(employee => {

    const card = document.createElement("div")
    card.classList.add("employee");

    //Create an element to hold employee name
    const employeeName = document.createElement("h3");
    //Add the class name "employee_name"
    employeeName.classList.add("employee__name");

    //Create employee name text
    employeeName.textContent = employee.first_name + " " + employee.last_name;

    //Append employee name to card div
    card.appendChild(employeeName);

    //Loop through "departments" in the database
    Database.departments.forEach(department => {

        //If employee departmentId equals department's departmentId, then ...
        if(employee.departmentId === department.departmentId){

            //Create element to hold employee department
            const employeeDept = document.createElement("p");

            //Add the class name "employee__department"
            employeeDept.classList.add("employee__department");

            //Create employee department text
            employeeDept.textContent = department.department_name
            card.appendChild(employeeDept)
        }

    })

       //Loop through "computers" in the database
       Database.computers.forEach(computer => {

        //If employee employeeId equals computer's assigned employeeId, then ...
        if(employee.employeeId === computer.employeeId){

            //Create element to hold employee computer name
            const computerName = document.createElement("p")
            computerName.classList.add("employee__computer");

            //Create computer model name text
            computerName.textContent = computer.model_name;
            card.appendChild(computerName)
        }

    })
    //Append the card to the section with the id of "employee_list"
    section.appendChild(card)
})
