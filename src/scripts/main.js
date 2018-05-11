
Database.employees.forEach(employee => {

    const card = document.createElement("div")

    //I need to change this so everything is appending together
    card.textContent = employee.first_name + " " + employee.last_name

    const section = document.getElementById("employee_list")

    Database.departments.forEach(department => {
        if(employee.departmentId === department.departmentId){
            const p = document.createElement("p")
            p.innerText = department.department_name
            card.appendChild(p)
        }

    })

    section.appendChild(card)
})
