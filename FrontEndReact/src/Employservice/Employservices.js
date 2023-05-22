import axios from "axios";


const EMPLOY_BASE_REST_API_URL='http://localhost:8080/api/employee';

class Employservices{
    getallemployye(){
        return axios.get(EMPLOY_BASE_REST_API_URL)
    }
createEmployee(employee){
    return axios.post(EMPLOY_BASE_REST_API_URL,employee)
}
getEmployeeById(employeeId){
    return axios.get(EMPLOY_BASE_REST_API_URL+'/'+employeeId)   
}

updateEmployee(employeeId, employee){
    return axios.put(EMPLOY_BASE_REST_API_URL+'/'+employeeId,employee);
}

deleteEmployee(employeeId){
    return axios.delete(EMPLOY_BASE_REST_API_URL+'/'+employeeId);
}

}
export default new Employservices();