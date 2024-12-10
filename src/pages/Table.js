import React, { useState } from 'react'

function Table() {
    const [name,setName] = useState({
        Student_Name : "",
        Student_SPI : "",
        Student_Sem : ""
    });
    const [data,setData] = useState([]);
  return (
    <>
    <h4>Create Student Details Form</h4>
    <div className="container mt-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Student Name:
          </label>
          <input 
            value={name.Student_Name}
            type="text" 
            className="form-control" 
            placeholder="Enter student name" 
            onChange={(e) => setName({...name, Student_Name: e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="roll" className="form-label">
            Student Sem:
          </label>
          <input 
            value={name.Student_Sem}
            type="number" 
            className="form-control"  
            placeholder="Enter Sem " 
            onChange={(e) => setName({...name, Student_Sem: e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="spi" className="form-label">
            Student SPI:
          </label>
          <input 
            value={name.Student_SPI}
            type="number" 
            className="form-control"  
            placeholder="Enter SPI"
            onChange={(e) => setName({...name, Student_SPI: e.target.value})}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={
            ()=>{
                setData([...data, name])
                setName({Student_Name: "", Student_Sem: "", Student_SPI: ""})
                console.log(data)
            }}>
          Submit
        </button>
    </div>
    <br/>
    <br/>
    <br/>
    <h5>Students Detail Show</h5>
    <table className='table table-primary table-bordered table-hover'>
        <thead>
            <tr>
                <th>Name</th>
                <th>SPI</th>
                <th>Sem</th>
            </tr>
        </thead>
        <tbody>
        {data.map((e,index)=>{
            return(
                <tr>
                    <td>{e.Student_Name}</td>
                    <td>{e.Student_SPI}</td>
                    <td>{e.Student_Sem}</td>
                </tr>
            )
        })}
        </tbody>
    </table>
    </>
  )
}

export default Table
