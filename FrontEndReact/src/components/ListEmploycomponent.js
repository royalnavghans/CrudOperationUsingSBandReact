// import { cleanup } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import Employservices from '../Employservice/Employservices'
import { Link } from 'react-router-dom'

const ListEmploycomponent = () => {

    const [employ, setemploy] =useState([])

    useEffect(()=>{

        getAllEmployee();
        
    }, [])


    const getAllEmployee =()=>{
      Employservices.getallemployye().then((response)=>{
        setemploy(response.data)
        console.log(response.data);
    }).catch(error=>{
        console.log(error)
    })

    }

const deleteEmployee = (employeeid)=>{
  Employservices.deleteEmployee(employeeid).then((response)=>{
    getAllEmployee();
  }).catch(error =>{
    console.log(error);
  })
}

  return (
    <div className='container'>
        <h2 className="text-center">List Employees</h2>
      <Link to = "/addemployee" className='btn btn-primary mb-2'>Add Employee</Link>
      <table className="table table-bordered table-stripped">
        <thead>
            <th>Employ id</th>          
            <th>Employ First Name</th>
            <th>Employ Last Name</th>
            <th>Employ Email id</th>
            <th>Employ phonenumber</th>
            <th>Actions</th>
        </thead>
          <tbody>
            {
                employ.map(
                    employee=>
                    <tr key={employee.id}>
                    <td>{employee.id}</td>
                   <td>{employee.firstname}</td>
                   <td>{employee.lastname}</td>
                   <td>{employee.emailid}</td>
                   <td>{employee.phonenumber}</td>
                   <td>
                    <Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>Update</Link>
                   <button className='btn btn-danger' onClick={()=>deleteEmployee(employee.id)}
                   
                   style={{marginLeft:"10px"}}>Delete</button>
                   </td>

                    </tr>
                )
            }
          </tbody>
      </table>
    </div>
  )
}

export default ListEmploycomponent
