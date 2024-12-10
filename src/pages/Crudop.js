import React, { useState, useEffect } from "react";

function Crudop() {
  const [data, setData] = useState([]); // State to store API data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors
  const [name, setName] = useState(""); // State for name input
  const [spi, setSPI] = useState(""); // State for SPI input
  const [editId, setEditId] = useState(null); // State for editing

  useEffect(() => {
    fetch("https://674eae0bbb559617b26c3382.mockapi.io/studata")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err.message);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleAddData = () => {
    if (!name.trim() || !String(spi).trim()) {
      alert("Both fields are required!");
      return;
    }

    const newData = { name, spi };

    fetch("https://674eae0bbb559617b26c3382.mockapi.io/studata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add data");
        }
        return res.json();
      })
      .then((addedData) => {
        setData((prevData) => [...prevData, addedData]);
        setName("");
        setSPI("");
      })
      .catch((err) => {
        console.error("Error adding data:", err.message);
        setError(err.message);
      });
  };

  const handleUpdateData = () => {
    if (!name.trim() || !String(spi).trim()) {
      alert("Both fields are required!");
      return;
    }

    const updatedData = { name, spi };
    {
    fetch(`https://674eae0bbb559617b26c3382.mockapi.io/studata/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update data");
        }
        return res.json();
      })
      .then((updatedData) => {
        setData((prevData) =>
          prevData.map((item) => (item.id === editId ? updatedData : item))
        );
        setEditId(null);
        setName("");
        setSPI("");
      })
      .catch((err) => {
        console.error("Error updating data:", err.message);
        setError(err.message);
      });
    }
  };
  const handleCancelEdit = () => {
    setEditId(null);
    setName("");
    setSPI("");
  };

  const handleDeleteData = (id) => {
    fetch(`https://674eae0bbb559617b26c3382.mockapi.io/studata/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete data");
        }
        return res.json();
      })
      .then(() => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
      })
      .catch((err) => {
        console.error("Error deleting data:", err.message);
        setError(err.message);
      });
  };

  const handleEditData = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    if (itemToEdit) {
      setName(itemToEdit.name);
      setSPI(itemToEdit.spi);
      setEditId(id);  // Set editId when editing
    }
  };

  if (loading)
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  if (error) return <h3 className="text-danger text-center">Error: {error}</h3>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4">CRUD Operations</h1>

      <div className="mb-4">
        <input
          type="text"
          className="form-control mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <input
          type="text"
          className="form-control"
          value={spi}
          onChange={(e) => setSPI(e.target.value)}
          placeholder="Enter SPI"
        />

        {/* Conditionally render the Add, Update, Cancel buttons */}
        {editId ? (
          <>
            <button className="btn btn-primary mt-2" onClick={handleUpdateData}>
              Update
            </button>
            <button
              className="btn btn-warning mt-2 ms-2"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </>
        ) : (
          <button className="btn btn-success mt-2" onClick={handleAddData}>
            Add New
          </button>
        )}
      </div>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>SPI</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">
                No data available
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.stuid}</td>
                <td>{item.name}</td>
                <td>{item.spi}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm mx-1"
                    onClick={() => handleEditData(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm mx-1"
                    onClick={() => handleDeleteData(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Crudop;
