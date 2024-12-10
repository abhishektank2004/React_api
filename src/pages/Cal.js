import React, { useState } from "react";

function Calculator() {
  const [data, setData] = useState("");

  const handleData = (e) => {
    setData(data + e.target.innerText);
  };

  const calculateResult = () => {
    try {
      const ans = eval(data); // Caution: Use with trusted inputs only.
      setData(ans.toString());
    } catch (error) {
      setData("Error");
    }
  };

  const clearData = () => {
    setData("");
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow" style={{ width: "22rem" }}>
        <div className="card-body">
          {/* Display */}
          <div className="form-control mb-3 bg-light text-end fs-4 p-3">
            {data || "0"}
          </div>

          {/* Calculator Buttons */}
          <div className="row g-2">
            {/* First Row */}
            <div className="col-3">
              <button
                className="btn btn-secondary w-100"
                onClick={() => setData("")}>
                C
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-secondary w-100" onClick={handleData}>
                (
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-secondary w-100" onClick={handleData}>
                )
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-primary w-100" onClick={handleData}>
                /
              </button>
            </div>

            {/* Second Row */}
            <div className="col-3">
              <button className="btn btn-light w-100" onClick={handleData}>
                7
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-light w-100" onClick={handleData}>
                8
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-light w-100" onClick={handleData}>
                9
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-primary w-100" onClick={handleData}>
                *
              </button>
            </div>

            {/* Third Row */}
            <div className="col-3">
              <button className="btn btn-light w-100" onClick={handleData}>
                4
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-light w-100" onClick={handleData}>
                5
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-light w-100" onClick={handleData}>
                6
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-primary w-100" onClick={handleData}>
                -
              </button>
            </div>

            {/* Fourth Row */}
            <div className="col-3">
              <button className="btn btn-light w-100" onClick={handleData}>
                1
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-light w-100" onClick={handleData}>
                2
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-light w-100" onClick={handleData}>
                3
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-primary w-100" onClick={handleData}>
                +
              </button>
            </div>

            {/* Fifth Row */}
            <div className="col-3">
              <button className="btn btn-light w-100" onClick={handleData}>
                0
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-light w-100" onClick={handleData}>
                00
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-light w-100" onClick={handleData}>
                .
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-success w-100" onClick={calculateResult}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Calculator;
