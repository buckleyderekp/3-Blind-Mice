import { render, EmployeeList } from "./employee/EmployeeList.js";
import { getEmployees } from "./employee/employeeDataProvider.js";
import { getComputers } from "./computer/computerDataProvider.js";

getEmployees().then(getComputers).then(EmployeeList)
