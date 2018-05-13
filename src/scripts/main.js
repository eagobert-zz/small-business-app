// Purpose to practice displaying to the DOM with JavaScript
//Author: Erin Agobert

//Get the element with the ID of "employee_list" and store in the variable "section"
const section = document.getElementById("employee_list")

//Loop through "employees" in the database
Database.employees.forEach(employee => {

    const card = document.createElement("article")
    card.classList.add("employee");

    //Create an element to hold employee name
    const employeeName = document.createElement("header");
    //Add the class name "employee_name"
    employeeName.classList.add("employee__name");

    //Create employee name text
    employeeName.innerHTML = "<h1>" + employee.first_name + " " + employee.last_name + "</h1>";

    //Append employee name to card div
    card.appendChild(employeeName);

    //Loop through "departments" in the database
    Database.departments.forEach(department => {

        //If employee departmentId equals department's departmentId, then ...
        if(employee.departmentId === department.departmentId){

            //Create element to hold employee department
            const employeeDept = document.createElement("section");

            //Add the class name "employee__department"
            employeeDept.classList.add("employee__department");

            //Create employee department text
            employeeDept.textContent = "Works in the " + department.department_name + " department."
            card.appendChild(employeeDept)
        }

    })

       //Loop through "computers" in the database
       Database.computers.forEach(computer => {

        //If employee employeeId equals computer's assigned employeeId, then ...
        if(employee.employeeId === computer.employeeId){

            //Create element to hold employee computer name
            const computerName = document.createElement("section")
            computerName.classList.add("employee__computer");

            //Create computer model name text
            computerName.textContent = "Currently using a " + computer.model_name + " computer.";
            card.appendChild(computerName)
        }

    })
    //Append the card to the section with the id of "employee_list"
    section.appendChild(card)
})
