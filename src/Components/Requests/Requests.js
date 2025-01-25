import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import axios from "axios"; // Import axios for API requests

const Requests = () => {
  const [data, setData] = useState([
    { id: 1, username: "Mark", shopName: "", state: "", region: "", role: "Admin" },
    { id: 2, username: "Jacob", shopName: "", state: "", region: "", role: "User" },
    { id: 3, username: "Larry", shopName: "", state: "", region: "", role: "Manager" },
  ]);

  const handleInputChange = (id, field, value) => {
    setData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  const handleApprove = async (id) => {
    try {
      await axios.post(`http://localhost:9099/person/approve/${id}`);
      alert(`Approved request for ID: ${id}`);
    } catch (error) {
      console.error("Error approving request", error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.post(`http://localhost:9099/person/reject/${id}`);
      alert(`Rejected request for ID: ${id}`);
    } catch (error) {
      console.error("Error rejecting request", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9099/person/approvalRequests");
        setData(response.data);  // Set the fetched data to `data` state
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
                  onClick={() => handleApprove(row.id)}
                >
                  Approve
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleReject(row.id)}
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
