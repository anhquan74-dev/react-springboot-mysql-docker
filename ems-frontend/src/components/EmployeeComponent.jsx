import { useEffect, useState } from "react"
import { createEmployee, getEmployeeById, updateEmployee } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const navigator = useNavigate();
  const { id } = useParams();

  function handleCreateOrUpdateEmployee(e) {
    e.preventDefault();

    const employee = { firstName, lastName, email }
    console.log(employee)
    if (id) {
      updateEmployee(id, employee).then(res => {
        console.log(res.data);
        navigator("/employees");
      }).catch(err => {
        console.error(err);
      });
    } else {
      createEmployee(employee).then(res => {
        console.log(res.data);
        navigator("/employees");
      }).catch(err => {
        console.error(err);
      });
    }
  }

  useEffect(() => {
    if (id) {
      getEmployeeById(id).then(res => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
      }).catch((err) => {
        console.error(err);
      }
      )
    }
  }, [id])

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">{id ? "Update Employee" : "Add Employee"}</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter employee first name"
                  name="firstname"
                  value={firstName}
                  className="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="lastName">Last Name:</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Enter employee last name"
                  name="lastName"
                  value={lastName}
                  className="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="email">Email:</label>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter employee email"
                  name="email"
                  value={email}
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className="btn btn-success" onClick={(e) => handleCreateOrUpdateEmployee(e)}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent