import { EmployeeList } from "./employee/EmployeeList.js";
import { getEmployees } from "./employee/employeeDataProvider.js";
import { getComputers } from "./computer/computerDataProvider.js";
import { getDepartments } from "./departments/departmentDataProvider.js";

getEmployees()
  .then(getComputers)
  .then(getDepartments)
  .then(EmployeeList)
