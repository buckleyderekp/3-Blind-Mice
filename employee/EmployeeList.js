import { employeeHTML } from "./employee.js";
import { useEmployees } from "./employeeDataProvider.js";
import { useComputers } from "../computer/computerDataProvider.js";
import { useDepartments } from "../departments/departmentDataProvider.js";





export const render = (employeesToRender) => {
    
    const contentTarget = document.querySelector('.container') 
    
    const computers = useComputers()
    const departments = useDepartments()
    
    contentTarget.innerHTML = employeesToRender.map( (singleEmployeeObject) =>{
        
        const foundComputer = computers.find(
            (computer) => {
                return computer.id === singleEmployeeObject.computerId
            }
            )
        const founddepartment = departments.find(
            (department) => {
                return department.id === singleEmployeeObject.departmentId
            }
            )
            return employeeHTML(singleEmployeeObject, foundComputer, founddepartment)
        }).join("")
        
    }
    
    export const EmployeeList = () => {
        const employeeArray = useEmployees()

         render(employeeArray)
  
    }