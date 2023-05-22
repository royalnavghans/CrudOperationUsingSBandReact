import React, { useEffect, useState } from 'react'
import Employservices from '../Employservice/Employservices'
import {Link,useNavigate,useParams} from 'react-router-dom'
// import { Router } from 'react-router-dom'
const AddEmployeeComponent = () => {

  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [emailid, setemailid] = useState("")
  const [phonenumber, setphonenumber] = useState("")
   const navigate = useNavigate();
  const {id}=useParams();
  
  const saveOrUpdateEmployee=(e)=>{
    e.preventDefault();

    const employee ={firstname,lastname,emailid,phonenumber}

    if(id){

      Employservices.updateEmployee(id,employee).then((response)=> {
        navigate('/employees');
      }).catch(error=>{
        console.log(error);
      })

    }else{
      Employservices.createEmployee(employee).then((response)=>{
        console.log(response.data)
        navigate('/employees');
        }).catch(error=>{
            console.log(error)
        })
    }


  }
useEffect(()=> {

Employservices.getEmployeeById(id).then((response)=>{
  console.log(response.data)
  setfirstname(response.data.firstname)
  setlastname(response.data.lastname)
  setemailid(response.data.emailid)
  setphonenumber(response.data.phonenumber)
  

}).catch(error => {
  console.log(error)
})

},[])

const title =() =>{
  if(id){
    return <h2 className='text-center'>Update Employee</h2>
  }
  else{
    return <h2 className='text-center'>Add Employ</h2>
  }
}
return (
    <div>
        <br/><br/>
        <div className='container'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              {
                title()
              }

                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='from-label'>First Name</label>
                            <input type='text' placeholder='Enter first name'
                             name='"firstname' className='form-control'
                             value={firstname} onChange={(e)=>setfirstname(e.target.value)}>

                            
                            </input>

                        </div>
                        <div className='form-group mb-2'>
                            <label className='from-label'>Last Name</label>
                            <input type='text' placeholder='Enter Last name' 
                            name='"lastname' className='form-control' value={lastname} 
                            onChange={(e)=>setlastname(e.target.value)}>
                          </input>

                        </div>
                        <div className='form-group mb-2'>
                            <label className='from-label'>Email Id</label>
                            <input type='email' placeholder='Enter email id' 
                            name='emailid' className='form-control' 
                            value={emailid} onChange={(e)=>setemailid(e.target.value)}>
                          </input>

                        </div>
                        <div className='form-group mb-2'>
                            <label className='from-label'>phone number</label>
                            <input type='phone number' placeholder='Enter phone number'
                             name='phonenumber' className='form-control' 
                             value={phonenumber} onChange={(e)=>setphonenumber(e.target.value)}>
                          </input>

                        </div>
<button className='btn btn-success' onClick={(e)=>saveOrUpdateEmployee(e)}>Submit</button>
<Link to="/employees" className='btn btn-danger'>Cancel</Link>

                    </form>

                </div>
            </div>



        </div>
    </div>
  )
}

export default AddEmployeeComponent
