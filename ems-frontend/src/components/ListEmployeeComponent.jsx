import { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
  const [employeeList, setEmployeeList] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployee();
  }, [])

  function getAllEmployee() {
    listEmployees().then((res) => {
      setEmployeeList(res.data);
    }).catch(err => {
      console.error(err)
    })
  }

  function addNewEmployee() {
    navigator('/add-employee')
  }

  function handleUpdateEmployee(employeeId) {
    navigator(`/edit-employee/${employeeId}`)
  }

  function handleDeleteEmployee(employeeId) {
    deleteEmployee(employeeId).then(res => {
      console.log(res);
      getAllEmployee();
    }).catch(err => {
      console.error(err);
    })
  }
  return (
    <div className='container'>
      <h2 className='text-center'>Employee List</h2>
      <button className='btn btn-primary mb-2' onClick={() => addNewEmployee()}>Add employee</button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>First name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            employeeList.map((employee) => {
              return (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>
                    <button className='btn btn-info' onClick={() => handleUpdateEmployee(employee.id)}>Update</button>
                    <button className='btn btn-danger' style={{ marginLeft: '10px' }} onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent