import { employeeHTML } from "./employee.js";
import { useEmployees } from "./employeeDataProvider.js";
import { useComputers } from "../computer/computerDataProvider.js";





export const render = (employeesToRender) => {
    
    const contentTarget = document.querySelector('.container') 
    
    const computers = useComputers()
    
    contentTarget.innerHTML = employeesToRender.map( (singleEmployeeObject) =>{
        
        const foundComputer = computers.find(
            (computer) => {
                return computer.id === singleEmployeeObject.computerId
            }
            )
            return employeeHTML(singleEmployeeObject, foundComputer)
        }).join("")
        
    }
    
    export const EmployeeList = () => {
        const employeeArray = useEmployees()

         render(employeeArray)
  
    }