

export const employeeHTML = (employeeObject, computerObject, departmentObject, locationObject) => {
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
    <section class="employee__location">
    Works at the ${locationObject.location} office
</section>
</div>
`
}