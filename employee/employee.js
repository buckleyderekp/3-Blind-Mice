

export const employeeHTML = (employeeObject, computerObject, departmentObject) => {
    return `
    <div class="employee">
    <header class="employee__name">
        <h1>${employeeObject.firstName} ${employeeObject.lastName}</h1>
    </header>
    <section class="employee__computer">
        Currently using a ${computerObject.year} ${computerObject.model}
    </section>
    <section class="employee__department">
        Works in the ${departmentObject.department} department
    </section>
</div>
`
}