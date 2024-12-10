import React from "react";
import { Link } from "react-router-dom";

function Home_page() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk="
              className="card-img-top img-fluid"
              alt="Card 1"
            />
            <div className="card-body">
              <h5 className="card-title">Card Title 1</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <Link to="/detail/1" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk="
              className="card-img-top img-fluid"
              alt="Card 2"
            />
            <div className="card-body">
              <h5 className="card-title">Card Title 2</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <Link to="/detail/2" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk="
              className="card-img-top img-fluid"
              alt="Card 3"
            />
            <div className="card-body">
              <h5 className="card-title">Card Title 3</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <Link to="/detail/3" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_page;
