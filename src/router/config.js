import { createBrowserRouter } from "react-router-dom";
import { ADDTASK, DEFAULT, EMPLOYEEHOME, EMPLOYEELOGIN, MANAGERHOME, MANAGERLOGIN } from "./keys";
import { AddTask, EmployeeHome, EmployeeLogin, Home, ManagerHome, ManagerLogin } from "../page";

const router = createBrowserRouter([
    {
        path: DEFAULT,
        element: <Home />
    },
    {
        path: MANAGERHOME,
        element:<ManagerHome />
    },
    {
        path: EMPLOYEEHOME,
        element:<EmployeeHome />
    },
    {
        path: MANAGERLOGIN,
        element:<ManagerLogin />
    },
    {
        path: EMPLOYEELOGIN,
        element:<EmployeeLogin />
    },
    {
        path: ADDTASK,
        element:<AddTask />
    },
])

export default router;