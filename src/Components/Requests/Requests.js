import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import axios from "axios"; // Import axios for API requests

const Requests = () => {
  const [data, setData] = useState([]);

  const handleInputChange = (id, field, value) => {
    setData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  const handleApprove = async (username, rowData) => {
    try {
      const dataToSend = {
        username: rowData.username,
        password: rowData.password,
        role: rowData.role,
        status: 1, // Approved status
        shopname: rowData.shopName,
        region: rowData.region
      };

      const response = await axios.put(`http://localhost:9099/person/approve/${username}`, dataToSend);

      if (response.status === 200) {
        alert(`Approved request for username: ${username}`);
      }
    } catch (error) {
      console.error("Error approving request", error);
    }
  };

  const handleReject = async (username) => {
    try {
      const response = await axios.delete(`http://localhost:9099/person/delete/${username}`);
      if (response.status === 200) {
        alert(`Rejected request for username: ${username}`);
      }
    } catch (error) {
      console.error("Error rejecting request", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9099/person/approvalRequests");
        setData(response.data);  // Set the fetched data to data state
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData(); // Call the fetchData function to load data
  }, []);  // Empty dependency array ensures this runs only once

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Requests</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Role</th>
            <th scope="col">Shop Name</th>
            <th scope="col">State</th>
            <th scope="col">Region</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id}>
              <th scope="row">{index + 1}</th>
              <td>{row.username}</td>
              <td>{row.role}</td> {/* Role is non-editable */}
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={row.shopName}
                  placeholder="Enter Shop Name"
                  onChange={(e) =>
                    handleInputChange(row.id, "shopName", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={row.state}
                  placeholder="Enter State"
                  onChange={(e) =>
                    handleInputChange(row.id, "state", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={row.region}
                  placeholder="Enter Region"
                  onChange={(e) =>
                    handleInputChange(row.id, "region", e.target.value)
                  }
                />
              </td>
              <td>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => handleApprove(row.username, row)}
                >
                  Approve
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleReject(row.username)}  
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Requests;
